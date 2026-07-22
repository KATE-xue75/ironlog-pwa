// Storage layer: localStorage-backed, zero-server, offline-first
const Storage = {
  _key: 'ironlog_data',
  _data: null,

  init() {
    const raw = localStorage.getItem(this._key);
    this._data = raw ? JSON.parse(raw) : {
      workouts: [],
      streak: 0,
      lastWorkoutDate: null,
      stats: { totalWorkouts: 0, totalSets: 0, totalVolume: 0 },
      settings: { unit: 'kg', restTimer: true }
    };
    return this;
  },

  _save() {
    localStorage.setItem(this._key, JSON.stringify(this._data));
  },

  // Save a completed workout
  saveWorkout(workout) {
    const today = new Date().toISOString().split('T')[0];
    workout.date = today;
    workout.time = new Date().toISOString();

    // Calculate volume
    let volume = 0, sets = 0;
    workout.exercises.forEach(ex => {
      ex.sets_data.forEach(s => {
        if (s.weight && s.reps) volume += s.weight * s.reps;
        sets++;
      });
    });
    workout.volume = volume;
    workout.sets = sets;

    this._data.workouts.unshift(workout);

    // Update streak
    if (this._data.lastWorkoutDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      this._data.streak = (this._data.lastWorkoutDate === yesterday)
        ? this._data.streak + 1 : 1;
      this._data.lastWorkoutDate = today;
    }

    // Update stats
    this._data.stats.totalWorkouts++;
    this._data.stats.totalSets += sets;
    this._data.stats.totalVolume += volume;

    this._save();
    return workout;
  },

  // Get recent workouts
  getRecentWorkouts(limit = 10) {
    return this._data.workouts.slice(0, limit);
  },

  // Get today's workout (if exists)
  getTodayWorkout() {
    const today = new Date().toISOString().split('T')[0];
    return this._data.workouts.find(w => w.date === today);
  },

  // Get streak
  getStreak() {
    return this._data.streak;
  },

  // Get all stats
  getStats() {
    return { ...this._data.stats, streak: this._data.streak };
  },

  // Export CSV
  exportCSV() {
    const rows = [['Date', 'Template', 'Exercise', 'Sets', 'Weight(kg)', 'Reps']];
    this._data.workouts.forEach(w => {
      w.exercises.forEach(ex => {
        ex.sets_data.forEach(s => {
          rows.push([w.date, w.templateName, ex.nameCN, '', s.weight || '', s.reps || '']);
        });
      });
    });
    return rows.map(r => r.join(',')).join('\n');
  },

  // Get specific template's history (for "last time" auto-fill)
  getLastExerciseData(templateId, exerciseTag) {
    const prev = this._data.workouts.find(w =>
      w.templateId === templateId &&
      w.exercises.some(e => e.tag === exerciseTag)
    );
    if (!prev) return null;
    const ex = prev.exercises.find(e => e.tag === exerciseTag);
    return ex ? ex.sets_data : null;
  },

  // Check if user should be prompted for sync (3+ workouts)
  shouldPromptSync() {
    return this._data.workouts.length >= 3 && !this._data.syncPrompted;
  },

  markSyncPrompted() {
    this._data.syncPrompted = true;
    this._save();
  },

  // D1 sync (future)
  async syncToCloud() {
    // Placeholder for Cloudflare D1 sync
    console.log('Cloud sync not yet implemented');
  }
};
