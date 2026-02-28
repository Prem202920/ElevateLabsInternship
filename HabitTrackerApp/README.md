# HabitFlow — Daily Habit Tracker

A lightweight, offline-first habit tracking Progressive Web App built with vanilla HTML, CSS, and JavaScript.

---

## 📌 Project Overview

HabitFlow helps users build and maintain daily habits by tracking check-ins, streaks, and weekly progress — all without needing an internet connection or a backend server. Data is stored locally in the browser using `localStorage`.

---

## ✨ Features

- **Add / Delete Habits** — Create habits with a custom emoji and name
- **Daily Check-in** — Mark habits as complete each day with a single click
- **Streak Counter** — Automatically tracks consecutive days a habit is completed
- **Progress Chart** — 7-day bar chart showing daily completion percentage (via Chart.js)
- **Progress Bar** — Visual indicator of today's overall completion
- **Auto Day Reset** — Resets daily check-ins at midnight automatically
- **Persistent Storage** — All data saved to `localStorage`, survives page refresh

---

## 🛠️ Tools & Technologies

| Tool               | Purpose                                     |
| ------------------ | ------------------------------------------- |
| HTML5              | App structure and markup                    |
| CSS3               | Styling, animations, dark theme             |
| Vanilla JavaScript | App logic, streak calculation, localStorage |
| Chart.js (CDN)     | 7-day history bar chart                     |
| Google Fonts       | Typography (Syne + Space Mono)              |
| localStorage API   | Client-side data persistence                |

---

## 📁 Project Structure

```
habit-tracker/
│
└── index.html      # Single file — entire app lives here
```

> No build tools, no npm, no server required.

---

## 🚀 How to Run

1. Download or clone this repository
2. Open `index.html` directly in any modern browser
3. That's it — no installation needed!

> Optionally, use the **Live Server** extension in VS Code for a better dev experience.

---

## 🧠 How It Works

### Streak Logic

- When a habit is marked done, the app checks if it was also completed **yesterday**
- If yes → streak increments by 1
- If no → streak resets to 1
- Unmarking a habit decrements the streak

### Day Reset

- On every page load, the app compares today's date to the last reset date
- If it's a new day, all `doneToday` flags are set to `false`

### History & Chart

- Every check-in is saved to a `history` object keyed by date
- The chart reads the last 7 days and calculates completion % per day
- Green bars = ≥80%, Purple = ≥40%, Grey = below 40%

---

## 🔮 Possible Future Improvements

- Push notification reminders (using Service Workers)
- Cloud sync with a backend (Node.js + MongoDB)
- PWA installability (manifest.json + service worker)
- Habit categories and filtering
- Weekly/monthly analytics view

---

## 👨‍💻 Author

Prem Patil
