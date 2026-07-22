
cd "C:\Users\19031\WorkBuddy\fitness-pwa"
git remote remove origin 2>$null
gh repo create ironlog-pwa --public --push --source=. --remote=origin
