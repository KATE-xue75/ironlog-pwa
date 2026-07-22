// IronLog PWA - Main App
try {
  (function() {
    if ('serviceWorker' in navigator && 'caches' in window) {
      navigator.serviceWorker.getRegistrations().then(function(regs) {
        regs.forEach(function(r) { r.unregister(); });
        caches.keys().then(function(keys) { keys.forEach(function(k) { caches.delete(k); }); });
      }).catch(function(){});
    }
  })();
} catch(e) { /* ignore */ }

const App = {
  state: {
    screen: 'home',       // home | workout | result
    activeWorkout: null,   // { templateId, templateName, day, focus, exercises: [] }
    currentExerciseIdx: 0,
    restTimer: null,
    restSeconds: 0,
  },

  init() {
    Storage.init();
    this.bindNavigation();
    this.renderHome();
    this.registerSW();
  },

  registerSW() {
    // Service worker disabled for now - prevents stale caching in WeChat browser
    return;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker_v2.js');
    }
  },

  bindNavigation() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;

      if (action === 'start-workout') this.startWorkout(btn.dataset.template, btn.dataset.day);
      if (action === 'complete-set') this.completeSet();
      if (action === 'skip-rest') this.skipRest();
      if (action === 'finish-workout') this.finishWorkout();
      if (action === 'back-home') this.renderHome();
      if (action === 'toggle-unit') this.toggleUnit();
    });

    // Weight +/- buttons
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-weight]');
      if (!btn) return;
      const delta = parseFloat(btn.dataset.weight);
      const input = document.querySelector('#current-weight');
      if (input) {
        input.value = Math.max(0, parseFloat(input.value || 0) + delta);
        input.focus();
      }
    });

    // Reps +/- buttons
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-reps]');
      if (!btn) return;
      const delta = parseInt(btn.dataset.reps);
      const input = document.querySelector('#current-reps');
      if (input) {
        input.value = Math.max(0, parseInt(input.value || 0) + delta);
        input.focus();
      }
    });
  },

  // ============ HOME SCREEN ============
  renderHome() {
    this.state.screen = 'home';
    const stats = Storage.getStats();
    const templates = typeof WORKOUT_TEMPLATES !== 'undefined' ? WORKOUT_TEMPLATES : [];

    let html = `
      <div class="intro-banner">
        <h2>Your workout companion</h2>
        <div class="intro-steps">
          <div class="intro-step"><span class="step-num">1</span> Pick a program</div>
          <div class="intro-step"><span class="step-num">2</span> Log your sets</div>
          <div class="intro-step"><span class="step-num">3</span> Track progress</div>
        </div>
      </div>
      <div class="home-header">
        <span class="logo">IronLog</span>
        <p class="tagline">No login. No ads. Just lift.</p>
      </div>
      <div class="stats-bar">
        <div class="stat"><span class="stat-val">${stats.totalWorkouts}</span><span class="stat-label">Workouts</span></div>
        <div class="stat"><span class="stat-val">${stats.streak}d</span><span class="stat-label">Streak</span></div>
        <div class="stat"><span class="stat-val">${(stats.totalVolume/1000).toFixed(1)}t</span><span class="stat-label">Volume</span></div>
      </div>
    `;

    // Group templates by difficulty
    const diffMap = { '初级': 'beginner', '中级': 'intermediate', '高级': 'advanced', '中高级': 'intermediate' };
    const diffMapEn = { '初级': 'Beginner', '中级': 'Intermediate', '高级': 'Advanced', '中高级': 'Intermediate' };
    const diffOrder = { 'beginner': 0, 'intermediate': 1, 'advanced': 2 };
    const diffIcons = { 'beginner': '🌱', 'intermediate': '🔥', 'advanced': '💀' };

    const groups = { beginner: [], intermediate: [], advanced: [] };

    templates.forEach((t, idx) => {
      const diffClass = diffMap[t.difficulty] || 'beginner';
      const diffLabel = diffMapEn[t.difficulty] || t.difficulty || 'Beginner';
      const tName = t.name_en || t.name || '';
      const tDesc = t.desc_en || t.desc || '';
      const days = t.days || [];
      const source = t.source || '';

      groups[diffClass].push({ idx, t, diffClass, diffLabel, tName, tDesc, days, source });
    });

    const groupNames = [
      { key: 'beginner', label: 'Beginner', icon: '🌱' },
      { key: 'intermediate', label: 'Intermediate', icon: '🔥' },
      { key: 'advanced', label: 'Advanced', icon: '💀' }
    ];

    groupNames.forEach(g => {
      const items = groups[g.key];
      if (!items.length) return;

      html += `<div class="diff-group">
        <div class="diff-label ${g.key}">${g.icon} ${g.label}</div>
        <div class="template-grid">`;

      items.forEach(item => {
        const { idx, t, diffClass, diffLabel, tName, tDesc, days, source } = item;
        const dPerWeek = t.days_per_week || days.length;
        const restDayCount = days.filter(d => d.rest).length;

        html += `
          <div class="template-card ${diffClass}">
            <div class="tc-header">
              <span class="tc-badge ${diffClass}">${diffLabel}</span>
              <span class="tc-source">${source}</span>
            </div>
            <h3>${tName}</h3>
            <p class="tc-desc">${tDesc}</p>
            <div class="tc-meta">
              <span>📅 ${dPerWeek - restDayCount} training days</span>
              <span>😴 ${restDayCount > 0 ? restDayCount + ' rest' : ''}</span>
            </div>
            <div class="tc-days-list">
              ${days.map((d, di) => `
                <button class="btn btn-start" data-action="start-workout" data-template="${idx}" data-day="${di}">
                  ${d.rest ? '😴' : '🏋️'} Day ${di+1}: ${d.focus_en || d.focus || ''}
                </button>
              `).join('')}
            </div>
          </div>`;
      });

      html += `</div></div>`;
    });

    html += `<div class="bottom-nav">
        <button class="nav-btn active" data-action="back-home">🏠 Home</button>
        <button class="nav-btn" onclick="App.exportCSV()">📊 Export</button>
        <button class="nav-btn" onclick="App.shareCard()">🃏 Share</button>
      </div>`;

    document.getElementById('app').innerHTML = html;
  },

  // ============ WORKOUT SCREEN ============
  startWorkout(templateIdx, dayIdx) {
    const templates = typeof WORKOUT_TEMPLATES !== 'undefined' ? WORKOUT_TEMPLATES : [];
    const t = templates[parseInt(templateIdx)];
    if (!t || !t.days || !t.days[dayIdx]) return;

    const day = t.days[dayIdx];
    const exercises = (day.exercises || []).map(exObj => {
      const tag = typeof exObj === 'string' ? exObj : exObj.tag;
      const ex = typeof EXERCISES !== 'undefined' ? EXERCISES.find(e => e.tag === tag) : null;
      return ex ? {
        tag: ex.tag,
        nameCN: ex.name_cn || ex.nameCN,
        nameEN: ex.name || ex.nameEN,
        gif: ex.gif_url || '',
        equipment: ex.equipment || '',
        defaultSets: typeof exObj === 'object' ? (exObj.sets || ex.default_sets || '3') : (ex.default_sets || '3'),
        defaultReps: typeof exObj === 'object' ? (exObj.reps || ex.default_reps || '10') : (ex.default_reps || '10'),
        restSeconds: ex.rest_seconds || 90,
        sets_data: []
      } : null;
    }).filter(Boolean);

    // Pre-fill from last workout
    exercises.forEach(ex => {
      const lastData = Storage.getLastExerciseData(t.id || String(templateIdx), ex.tag);
      if (lastData && lastData.length > 0) {
        ex.lifted = lastData[0].reps || '';
      }
    });

    this.state.activeWorkout = {
      templateId: t.id || String(templateIdx),
      templateName: t.name_en || t.name || '',
      day: parseInt(dayIdx) + 1,
      focus: day.focus_en || day.focus || '',
      exercises
    };
    this.state.currentExerciseIdx = 0;

    this.renderWorkout();
  },

  renderWorkout() {
    this.state.screen = 'workout';
    const w = this.state.activeWorkout;
    const idx = this.state.currentExerciseIdx;
    const ex = w.exercises[idx];
    const progress = `${idx + 1}/${w.exercises.length}`;

    const completedSets = ex.sets_data.length;
    const targetSets = parseInt(ex.defaultSets) || 3;
    const allDone = completedSets >= targetSets;

    let html = `
      <div class="workout-header">
        <button class="btn-back" data-action="back-home">←</button>
        <div class="wh-info">
          <span class="wh-template">${w.templateName} · Day ${w.day}</span>
          <span class="wh-focus">${w.focus}</span>
        </div>
        <span class="wh-progress">${progress}</span>
      </div>

      <div class="exercise-card">
        ${ex.gif ? `<img src="${ex.gif}" class="ex-gif" alt="${ex.nameEN}" loading="lazy">` : ''}
        <h2 class="ex-name">${ex.nameEN}</h2>
        <p class="ex-equip">${ex.equipment || ''} · Rest ${ex.restSeconds}s</p>

        <div class="sets-tracker">
          ${Array.from({length: targetSets}, (_, i) =>
            `<span class="set-dot ${i < completedSets ? 'done' : ''} ${i === completedSets && !allDone ? 'current' : ''}">${i+1}</span>`
          ).join('')}
        </div>

        ${!allDone ? `
        <div class="input-group">
          <div class="input-row">
            <span class="input-label">Weight</span>
            <div class="btn-group">
              <button class="btn-sm" data-weight="-5">-5</button>
              <button class="btn-sm" data-weight="-2.5">-2.5</button>
              <input type="number" id="current-weight" class="num-input" value="${ex.lifted || ''}" placeholder="60">
              <button class="btn-sm" data-weight="+2.5">+2.5</button>
              <button class="btn-sm" data-weight="+5">+5</button>
            </div>
            <span class="unit">${Storage._data.settings.unit}</span>
          </div>
          <div class="input-row">
            <span class="input-label">Reps</span>
            <div class="btn-group">
              <button class="btn-sm" data-reps="-2">-2</button>
              <button class="btn-sm" data-reps="-1">-1</button>
              <input type="number" id="current-reps" class="num-input" value="${ex.defaultReps}" placeholder="10">
              <button class="btn-sm" data-reps="+1">+1</button>
              <button class="btn-sm" data-reps="+2">+2</button>
            </div>
            <span class="unit">reps</span>
          </div>
        </div>
        <button class="btn btn-primary btn-giant" data-action="complete-set">
          ✓ Complete Set ${completedSets + 1}
        </button>
        ` : `
        <div class="set-complete">✔ All ${targetSets} sets done</div>
        ${idx < w.exercises.length - 1 ? `
          <button class="btn btn-primary" onclick="App.nextExercise()">Next Exercise →</button>
        ` : `
          <button class="btn btn-primary btn-finish" data-action="finish-workout">🎉 Finish Workout</button>
        `}
        `}
      </div>
    `;

    document.getElementById('app').innerHTML = html;

    // Scroll to input
    const input = document.getElementById('current-weight');
    if (input) input.focus();
  },

  completeSet() {
    const w = this.state.activeWorkout;
    const ex = w.exercises[this.state.currentExerciseIdx];

    const weight = parseFloat(document.getElementById('current-weight')?.value || 0);
    const reps = parseInt(document.getElementById('current-reps')?.value || 0);

    if (!weight || !reps) {
      alert('Enter weight and reps first');
      return;
    }

    ex.sets_data.push({ weight, reps });

    const targetSets = parseInt(ex.defaultSets) || 3;
    if (ex.sets_data.length >= targetSets) {
      // All sets done for this exercise
      this.renderWorkout();
    } else {
      // Start rest timer
      this.startRest(ex.restSeconds || 90);
    }
  },

  startRest(seconds) {
    this.state.restSeconds = seconds;
    this.showRestOverlay(seconds);

    this.state.restTimer = setInterval(() => {
      this.state.restSeconds--;
      const timer = document.querySelector('.rest-timer');
      if (timer) timer.textContent = this.state.restSeconds;

      if (this.state.restSeconds <= 0) {
        this.skipRest();
      }
    }, 1000);
  },

  showRestOverlay(seconds) {
    const overlay = document.createElement('div');
    overlay.className = 'rest-overlay';
    overlay.innerHTML = `
      <div class="rest-card">
        <p class="rest-label">Rest</p>
        <p class="rest-timer">${seconds}</p>
        <button class="btn btn-sm" data-action="skip-rest">Skip</button>
      </div>
    `;
    document.body.appendChild(overlay);
  },

  skipRest() {
    if (this.state.restTimer) {
      clearInterval(this.state.restTimer);
      this.state.restTimer = null;
    }
    const overlay = document.querySelector('.rest-overlay');
    if (overlay) overlay.remove();
    this.renderWorkout();
  },

  nextExercise() {
    this.state.currentExerciseIdx++;
    this.renderWorkout();
  },

  finishWorkout() {
    const workout = Storage.saveWorkout({ ...this.state.activeWorkout });
    this.state.activeWorkout = null;
    this.state.currentExerciseIdx = 0;
    this.renderResult(workout);
  },

  // ============ RESULT SCREEN ============
  renderResult(workout) {
    this.state.screen = 'result';
    const volume = (workout.volume / 1000).toFixed(1);
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    let html = `
      <div class="result-card">
        <div class="result-badge">🎉 Workout Complete</div>
        <h1 class="result-title">${workout.templateName}</h1>
        <p class="result-meta">Day ${workout.day} · ${workout.focus} · ${today}</p>
        <div class="result-stats">
          <div class="rstat"><span class="rval">${volume}t</span><span class="rlab">Volume</span></div>
          <div class="rstat"><span class="rval">${workout.sets}</span><span class="rlab">Sets</span></div>
          <div class="rstat"><span class="rval">${workout.exercises.length}</span><span class="rlab">Exercises</span></div>
        </div>
        <div class="result-exercises">
          ${workout.exercises.map(ex => `
            <div class="re-item">
              <span class="re-name">${ex.nameEN}</span>
              <span class="re-sets">${ex.sets_data.map(s => `${s.weight}×${s.reps}`).join(' · ')}</span>
            </div>
          `).join('')}
        </div>
        <div class="result-actions">
          <button class="btn btn-primary" onclick="App.shareCard()">📸 Share Card</button>
          <button class="btn" data-action="back-home">🏠 Back to Home</button>
        </div>
        <p class="result-footer">Generated by IronLog</p>
      </div>
    `;

    document.getElementById('app').innerHTML = html;
  },

  // ============ SHARE CARD ============
  shareCard() {
    const stats = Storage.getStats();
    const recent = Storage.getRecentWorkouts(1)[0];
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, 1080, 1350);

    // Top accent line
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(0, 0, 1080, 6);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TRAINING COMPLETE', 540, 160);

    // Stats
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    ctx.fillStyle = '#64748b';
    ctx.font = '36px -apple-system, sans-serif';
    ctx.fillText(today, 540, 220);

    if (recent) {
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 140px -apple-system, sans-serif';
      ctx.fillText((recent.volume/1000).toFixed(1) + 't', 540, 420);
      ctx.fillStyle = '#64748b';
      ctx.font = '36px -apple-system, sans-serif';
      ctx.fillText('TOTAL VOLUME', 540, 470);

      // Exercise list
      ctx.font = '28px -apple-system, sans-serif';
      ctx.textAlign = 'left';
      let y = 600;
      recent.exercises.forEach(ex => {
        const sets = ex.sets_data.map(s => `${s.weight}×${s.reps}`).join(' · ');
        ctx.fillStyle = '#ffffff';
        ctx.fillText(ex.nameEN, 120, y);
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(sets, 120, y + 40);
        y += 90;
      });
    }

    // Stats badges
    ctx.textAlign = 'center';
    let bx = 270;
    [
      { val: stats.totalWorkouts, label: 'WORKOUTS' },
      { val: stats.streak + 'd', label: 'STREAK' },
      { val: (stats.totalVolume/1000).toFixed(0) + 't', label: 'ALL-TIME' }
    ].forEach(s => {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(bx - 120, 1100, 240, 120);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px -apple-system, sans-serif';
      ctx.fillText(s.val, bx, 1150);
      ctx.fillStyle = '#64748b';
      ctx.font = '24px -apple-system, sans-serif';
      ctx.fillText(s.label, bx, 1185);
      bx += 270;
    });

    // Footer
    ctx.fillStyle = '#334155';
    ctx.font = '22px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Generated by IronLog · No login. No ads. Just lift.', 540, 1310);

    // Share
    canvas.toBlob(blob => {
      if (navigator.share) {
        const file = new File([blob], 'ironlog-workout.png', { type: 'image/png' });
        navigator.share({ files: [file], title: 'My workout' }).catch(() => {});
      } else {
        const url = URL.createObjectURL(blob);
        window.open(url);
      }
    });
  },

  exportCSV() {
    const csv = Storage.exportCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ironlog-workouts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  },

  toggleUnit() {
    Storage._data.settings.unit = Storage._data.settings.unit === 'kg' ? 'lbs' : 'kg';
    Storage._save();
    this.renderHome();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
