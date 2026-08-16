// Masterclass Database
const top1PercentMasterclass = [
  {
    id: "kelly_criterion",
    title: "The Kelly Criterion & Asymmetric Convexity",
    insight: "Never allocate effort linearly. The top 1% size their energy aggressively on high-probability asymmetric bets while keeping downside ruin mathematically at zero.",
    proof: "Formulated by John L. Kelly Jr. at Bell Labs in 1956. Jim Simons generated a 66.1% annualized return from 1988 to 2018 ($100B+ profit) by applying Kelly sizing."
  },
  {
    id: "pareto_price_law",
    title: "Price's Law & Power-Law Inequality",
    insight: "In any productive system, 50% of the value is created by the square root of total contributors (√N). In 100 people, 10 drive 50% of compounding returns.",
    proof: "Derek J. de Solla Price proved this in 1963. Peter Thiel validated that in top venture portfolios, a single investment returns more than all others combined."
  },
  {
    id: "neuroplastic_myelin",
    title: "Neuroplastic Myelination & Deliberate Sprints",
    insight: "World-class mastery is not time spent; it is the physical insulation of neural circuits via myelin during intense, uninterrupted cognitive friction.",
    proof: "Dr. Anders Ericsson proved elite performers compress intense focus into 90-minute blocks with feedback, tripling neural myelination rates."
  },
  {
    id: "shannon_entropy",
    title: "Shannon's Information Entropy & Noise Elimination",
    insight: "99% of notifications and micro-tasks are pure noise. Ruthlessly pruning low-signal inputs is the only mathematical way to maximize breakthroughs.",
    proof: "Claude Shannon's 1948 paper proved maximum information transmission requires driving noise interference toward zero."
  },
  {
    id: "first_principles",
    title: "First-Principles Decomposition (Physics Method)",
    insight: "Reject analogy and consensus. Boil any problem down to its fundamental truths, then reason up from there.",
    proof: "SpaceX reduced rocket costs from $65M to ~$2M by breaking aerospace-grade materials down to raw commodity pricing."
  },
  {
    id: "antifragility",
    title: "Antifragility & Non-Linear Gains",
    insight: "Fragile systems break under stress. Robust systems resist. Antifragile systems grow exponentially stronger under calculated friction and cognitive load.",
    proof: "Nassim Nicholas Taleb proved non-linear payoff curves with bounded downside guarantee survival and domination across complex systems."
  }
];

// Quotes Vault
const quotes = [
  { text: "Great things come from hard work and perseverance. No excuses.", author: "Kobe Bryant" },
  { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
  { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "The dictionary is the only place where success comes before work.", author: "Vince Lombardi" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "I'm a greater believer in luck, and I find the harder I work the more I have of it.", author: "Thomas Jefferson" },
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "At the dawn of day, have in readiness this thought: 'I am rising to do the work of a human being.'", author: "Marcus Aurelius" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "Simplicity is the prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Focus is a muscle. The more you practice single-tasking, the stronger it becomes.", author: "Cal Newport" },
  { text: "Do not pray for an easy life; pray for the strength to endure a difficult one.", author: "Bruce Lee" },
  { text: "An amateur practices until they can get it right. A professional practices until they can't get it wrong.", author: "Harold Craxton" },
  { text: "Energy is life. How you allocate your energy determines the quality of your compounding.", author: "Richard Feynman" },
  { text: "Action produces information. You can't steer a stationary ship.", author: "Eric Ries" },
  { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
  { text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", author: "Nikola Tesla" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "Compound interest is the eighth wonder of the world. He who understands it, earns it.", author: "Albert Einstein" },
  { text: "It is not the critic who counts; the credit belongs to the man who is actually in the arena.", author: "Theodore Roosevelt" },
  { text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius" },
  { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
  { text: "Work like there is someone working twenty-four hours a day to take it all away from you.", author: "Mark Cuban" },
  { text: "The score takes care of itself if you execute every single snap with perfection.", author: "Bill Walsh" },
  { text: "A rational person can find peace by cultivating indifference to things outside their control.", author: "Naval Ravikant" },
  { text: "Everything around you was built by people that were no smarter than you.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "First make it work, then make it right, then make it fast.", author: "Kent Beck" },
  { text: "No man has the right to be an amateur in the matter of physical and mental training.", author: "Socrates" },
  { text: "A desk is a dangerous place from which to view the world.", author: "John le Carré" },
  { text: "The person who says it cannot be done should not interrupt the person who is doing it.", author: "Chinese Proverb" },
  { text: "Patience and persistence have a magical effect before which difficulties disappear and obstacles vanish.", author: "John Quincy Adams" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "To know what you know and what you do not know, that is true knowledge.", author: "Confucius" },
  { text: "The highest form of wealth is the ability to wake up every morning and say, 'I can do whatever I want today.'", author: "Morgan Housel" },
  { text: "If you are not embarrassed by the first version of your product, you've launched too late.", author: "Reid Hoffman" },
  { text: "In theory, there is no difference between theory and practice. But, in practice, there is.", author: "Jan L. A. van de Snepscheut" },
  { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
  { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
  { text: "You can have everything in life you want, if you will just help other people get what they want.", author: "Zig Ziglar" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Eighty percent of success is showing up.", author: "Woody Allen" },
  { text: "Winning isn't getting ahead of others. It's getting ahead of yourself.", author: "Roger Staubach" },
  { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { text: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "The standard you walk past is the standard you accept.", author: "David Morrison" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "If you don't design your own life plan, chances are you'll fall into someone else's plan.", author: "Jim Rohn" },
  { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
  { text: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { text: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.", author: "Marcus Aurelius" },
  { text: "The price of excellence is discipline. The cost of mediocrity is disappointment.", author: "William Arthur Ward" },
  { text: "Effort only fully releases its reward after a person refuses to quit.", author: "Napoleon Hill" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle Onassis" },
  { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
  { text: "The tragedy in life doesn't lie in not reaching your goal. The tragedy lies in having no goal to reach.", author: "Benjamin Mays" },
  { text: "You must be the master of your own perspective.", author: "Epictetus" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Hard decisions, easy life. Easy decisions, hard life.", author: "Jerzy Gregorek" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "Don't wish it were easier. Wish you were better.", author: "Jim Rohn" },
  { text: "Everything is hard before it is easy.", author: "Johann Wolfgang von Goethe" },
  { text: "Self-mastery is the ultimate competitive advantage.", author: "Epictetus" },
  { text: "A smooth sea never made a skilled sailor.", author: "Franklin D. Roosevelt" },
  { text: "He who conquers himself is the mightiest warrior.", author: "Confucius" },
  { text: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.", author: "Peter Drucker" },
  { text: "The distance between dreams and reality is called action.", author: "Brian Tracy" },
  { text: "Great minds have purposes, others have wishes.", author: "Washington Irving" },
  { text: "Only those who dare to fail greatly can ever achieve greatly.", author: "Robert F. Kennedy" },
  { text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "You don't need to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "Champions keep playing until they get it right.", author: "Billie Jean King" },
  { text: "Diligence is the mother of good luck.", author: "Benjamin Franklin" },
  { text: "Mastery is not a function of genius or talent, it is a function of time and intense focus.", author: "Robert Greene" },
  { text: "If you spend too much time thinking about a thing, you'll never get it done.", author: "Bruce Lee" },
  { text: "The difference between who you are and who you want to be is what you do.", author: "Bill Phillips" },
  { text: "You can't build a reputation on what you are going to do.", author: "Henry Ford" },
  { text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You are what you repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant" }
];

// App State
let activeDate = new Date();
let pendingTaskTitle = '';
let parsedImportTasks = [];
let activeFocusTask = null;
let pendingDeleteIndex = null;

// Countdown State
let countdownRunning = false;
let countdownRemainingSeconds = 0;
let countdownTotalSeconds = 0;
let countdownInterval = null;

// Time Picker State
let activePickerTarget = 'from';
let pickerSelectedHour = 9;
let pickerSelectedMinute = 0;
let pickerSelectedPeriod = 'AM';

// Date Helpers
const formatDateKey = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const timeToMinutes = (timeStr) => {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
};

const minutesToTimeStr = (totalMins) => {
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

const format12Hour = (timeStr) => {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${String(hour12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${suffix}`;
};

const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Storage
const getTasksForDate = (dateKey) => {
  const raw = localStorage.getItem(`auraplan_timeline_tasks_${dateKey}`);
  return raw ? JSON.parse(raw) : [];
};

const saveTasksForDate = (dateKey, tasks) => {
  tasks.sort((a, b) => a.startMinutes - b.startMinutes);
  localStorage.setItem(`auraplan_timeline_tasks_${dateKey}`, JSON.stringify(tasks));
};

// Seed Default Tasks
const initDefaultDemoTasks = () => {
  const todayKey = formatDateKey(new Date());
  const existing = localStorage.getItem(`auraplan_timeline_tasks_${todayKey}`);
  if (!existing) {
    const now = new Date();
    const curMins = now.getHours() * 60 + now.getMinutes();

    const defaultTasks = [
      {
        id: 101,
        title: "Morning Sprint: System Architecture & Data Structures",
        startTime: "09:00",
        endTime: "10:30",
        startMinutes: 540,
        endMinutes: 630,
        duration: 90,
        completed: curMins > 630,
        createdAt: new Date().toISOString()
      },
      {
        id: 102,
        title: "Afternoon Focus: Machine Learning Model Evaluation",
        startTime: "14:00",
        endTime: "15:30",
        startMinutes: 840,
        endMinutes: 930,
        duration: 90,
        completed: curMins > 930,
        createdAt: new Date().toISOString()
      },
      {
        id: 103,
        title: "Night Routine: Hardware Circuit Analysis & Notes",
        startTime: "18:00",
        endTime: "19:00",
        startMinutes: 1080,
        endMinutes: 1140,
        duration: 60,
        completed: false,
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(`auraplan_timeline_tasks_${todayKey}`, JSON.stringify(defaultTasks));
  }
};

// Themes
window.setAmbiance = (ambiance) => {
  document.body.setAttribute('data-ambiance', ambiance);
  localStorage.setItem('auraplan_ambiance', ambiance);

  const colors = {
    glacier: '#0284C7',
    emerald: '#059669',
    amethyst: '#7C3AED',
    coral: '#E11D48',
    amber: '#D97706',
    sage: '#0D9488',
    platinum: '#475569'
  };
  const dot = document.getElementById('activeAmbianceDot');
  if (dot) dot.style.background = colors[ambiance] || '#0284C7';
  if (document.getElementById('morningTasksList')) renderTasks();
};

const applyTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('auraplan_theme_mode', theme);
  const icon = document.getElementById('themeToggleIcon');
  const label = document.getElementById('themeToggleLabel');
  if (icon && label) {
    if (theme === 'dark') {
      icon.setAttribute('data-lucide', 'sun');
      label.textContent = 'Light';
    } else {
      icon.setAttribute('data-lucide', 'moon');
      label.textContent = 'Dark';
    }
    if (window.lucide) lucide.createIcons();
  }
};

window.toggleDarkLightMode = () => {
  const current = document.body.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
  renderDayRibbon();
  renderTasks();
};

// Real-Time Clock
const updateRealTimeClock = () => {
  const liveClockDisplay = document.getElementById('liveClockDisplay');
  const remainingDayTimeText = document.getElementById('remainingDayTimeText');
  const now = new Date();

  if (liveClockDisplay) {
    liveClockDisplay.textContent = now.toLocaleTimeString('en-US', { hour12: true });
  }

  if (remainingDayTimeText) {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    const selectedDateZero = new Date(activeDate);
    selectedDateZero.setHours(0, 0, 0, 0);

    if (selectedDateZero.getTime() === todayDate.getTime()) {
      const curMins = now.getHours() * 60 + now.getMinutes();
      const leftMins = Math.max(0, 1440 - curMins);
      const leftH = Math.floor(leftMins / 60);
      const leftM = leftMins % 60;
      remainingDayTimeText.textContent = `${leftH}h ${leftM}m left`;
    } else if (selectedDateZero.getTime() > todayDate.getTime()) {
      remainingDayTimeText.textContent = `24h 0m left`;
    } else {
      remainingDayTimeText.textContent = `0h 0m left`;
    }
  }
};

// Available Slot Boundary Allocation
const calculateFullAvailableSlots = (tasks) => {
  const sorted = [...tasks].sort((a, b) => a.startMinutes - b.startMinutes);
  const rawFreeSlots = [];
  let currentPointer = 0;

  const now = new Date();
  const isToday = activeDate.toDateString() === now.toDateString();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  sorted.forEach(t => {
    if (t.startMinutes > currentPointer) {
      rawFreeSlots.push({ startMinutes: currentPointer, endMinutes: t.startMinutes });
    }
    if (t.endMinutes > currentPointer) {
      currentPointer = t.endMinutes;
    }
  });

  if (currentPointer < 1439) {
    rawFreeSlots.push({ startMinutes: currentPointer, endMinutes: 1439 });
  }

  const splittedSlots = [];
  const boundaries = [0, 720, 1020, 1439];

  rawFreeSlots.forEach(slot => {
    for (let i = 0; i < boundaries.length - 1; i++) {
      const bStart = boundaries[i];
      const bEnd = boundaries[i + 1];

      let overlapStart = Math.max(slot.startMinutes, bStart);
      const overlapEnd = Math.min(slot.endMinutes, bEnd);

      if (isToday && overlapStart < currentMinutes) {
        overlapStart = Math.ceil(currentMinutes / 5) * 5;
      }

      if (overlapEnd - overlapStart >= 5) {
        splittedSlots.push({
          startMinutes: overlapStart,
          endMinutes: overlapEnd,
          startStr: minutesToTimeStr(overlapStart),
          endStr: minutesToTimeStr(overlapEnd),
          duration: overlapEnd - overlapStart
        });
      }
    }
  });

  return splittedSlots;
};

const isSlotAvailable = (startMins, endMins, existingTasks, ignoreTaskId = null) => {
  if (endMins <= startMins) return false;

  const now = new Date();
  const isToday = activeDate.toDateString() === now.toDateString();
  const isPastDay = new Date(activeDate).setHours(0, 0, 0, 0) < new Date(now).setHours(0, 0, 0, 0);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (isPastDay) return false;
  if (isToday && startMins < currentMinutes) return false;

  return !existingTasks.some(t => {
    if (ignoreTaskId && t.id === ignoreTaskId) return false;
    return !(endMins <= t.startMinutes || startMins >= t.endMinutes);
  });
};

const validateCurrentModalSlot = () => {
  const fromEl = document.getElementById('modalFromTime');
  const toEl = document.getElementById('modalToTime');
  if (!fromEl || !toEl) return false;

  const fromStr = fromEl.value;
  const toStr = toEl.value;

  if (!fromStr || !toStr) {
    disableLockSlotButton("Please select valid From & End times.");
    return false;
  }

  const startMins = timeToMinutes(fromStr);
  const endMins = timeToMinutes(toStr);

  if (endMins <= startMins) {
    disableLockSlotButton("End time must be strictly after From time.");
    return false;
  }

  const now = new Date();
  const isToday = activeDate.toDateString() === now.toDateString();
  const isPastDay = new Date(activeDate).setHours(0, 0, 0, 0) < new Date(now).setHours(0, 0, 0, 0);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (isPastDay) {
    disableLockSlotButton("Cannot schedule tasks on a past date.");
    return false;
  }

  if (isToday && startMins < currentMinutes) {
    disableLockSlotButton("This window has already passed. Select a future time slot.");
    return false;
  }

  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  if (!isSlotAvailable(startMins, endMins, tasks)) {
    disableLockSlotButton("Conflict! This window overlaps with an existing task.");
    return false;
  }

  enableLockSlotButton();
  return true;
};

const disableLockSlotButton = (msg) => {
  const alertEl = document.getElementById('modalConflictAlert');
  const alertText = document.getElementById('modalConflictAlertText');
  const btn = document.getElementById('confirmLockSlotBtn');

  if (alertText) alertText.textContent = msg;
  if (alertEl) alertEl.classList.remove('hidden');
  if (btn) {
    btn.disabled = true;
    btn.classList.add('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
  }
};

const enableLockSlotButton = () => {
  const alertEl = document.getElementById('modalConflictAlert');
  const btn = document.getElementById('confirmLockSlotBtn');

  if (alertEl) alertEl.classList.add('hidden');
  if (btn) {
    btn.disabled = false;
    btn.classList.remove('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
  }
};

// Render Date Ribbon
const renderDayRibbon = () => {
  const dayRibbon = document.getElementById('dayRibbon');
  if (!dayRibbon) return;
  dayRibbon.innerHTML = '';
  const today = new Date();

  for (let i = -3; i <= 3; i++) {
    const d = new Date(activeDate);
    d.setDate(activeDate.getDate() + i);

    const isCurrentSelected = d.toDateString() === activeDate.toDateString();
    const isActualToday = d.toDateString() === today.toDateString();
    const dateKey = formatDateKey(d);
    const dayTasks = getTasksForDate(dateKey);
    const allDone = dayTasks.length > 0 && dayTasks.every(t => t.completed);

    const card = document.createElement('button');
    card.type = 'button';
    card.className = `flex-shrink-0 min-w-[78px] sm:min-w-[85px] py-2 px-3 rounded-2xl border text-center transition-all ${
      isCurrentSelected
        ? 'crystal-btn shadow-md scale-100 border-transparent'
        : 'date-pill-unselected hover:opacity-80'
    }`;

    card.innerHTML = `
      <div class="text-[10px] font-bold uppercase tracking-wider ${isCurrentSelected ? 'text-white/80' : 'opacity-60'}">
        ${d.toLocaleDateString('en-US', { weekday: 'short' })}
      </div>
      <div class="font-display font-extrabold text-lg leading-tight">
        ${d.getDate()}
      </div>
      <div class="flex justify-center items-center gap-1 mt-1">
        ${isActualToday ? `<span class="text-[9px] font-bold px-1.5 py-0.2 rounded-full ${isCurrentSelected ? 'bg-white/25 text-white' : 'crystal-badge'}">TODAY</span>` : ''}
        ${allDone ? `<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>` : ''}
      </div>
    `;

    card.onclick = () => {
      activeDate = new Date(d);
      updateView();
    };

    dayRibbon.appendChild(card);
  }
};

// Render Tasks
const renderTasks = () => {
  const morningTasksList = document.getElementById('morningTasksList');
  const afternoonTasksList = document.getElementById('afternoonTasksList');
  const nightTasksList = document.getElementById('nightTasksList');
  const morningEmptyState = document.getElementById('morningEmptyState');
  const afternoonEmptyState = document.getElementById('afternoonEmptyState');
  const nightEmptyState = document.getElementById('nightEmptyState');

  if (!morningTasksList) return;

  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  morningTasksList.innerHTML = '';
  afternoonTasksList.innerHTML = '';
  nightTasksList.innerHTML = '';

  const now = new Date();
  const isToday = activeDate.toDateString() === now.toDateString();
  const isPastDay = new Date(activeDate).setHours(0, 0, 0, 0) < new Date(now).setHours(0, 0, 0, 0);
  const currentComputerMinutes = now.getHours() * 60 + now.getMinutes();

  let activeTaskElementToScroll = null;

  const morningTasks = tasks.filter(t => t.startMinutes < 720);
  const afternoonTasks = tasks.filter(t => t.startMinutes >= 720 && t.startMinutes < 1020);
  const nightTasks = tasks.filter(t => t.startMinutes >= 1020);

  morningEmptyState.classList.toggle('hidden', morningTasks.length > 0);
  afternoonEmptyState.classList.toggle('hidden', afternoonTasks.length > 0);
  nightEmptyState.classList.toggle('hidden', nightTasks.length > 0);

  const renderTaskItem = (task, container) => {
    const originalIndex = tasks.findIndex(t => t.id === task.id);

    let isLiveWindow = false;
    let isFutureLocked = false;
    let isPastWindow = false;

    if (isPastDay) {
      isPastWindow = true;
    } else if (isToday) {
      if (currentComputerMinutes >= task.startMinutes && currentComputerMinutes <= task.endMinutes) {
        isLiveWindow = true;
      } else if (currentComputerMinutes < task.startMinutes) {
        isFutureLocked = true;
      } else {
        isPastWindow = true;
      }
    } else {
      isFutureLocked = true;
    }

    const isPrevDayOrPastCompletedLocked = isPastDay || (isPastWindow && task.completed);
    const isStrictlyLockedFromToggling = isPastWindow && !task.completed;

    const item = document.createElement('div');
    item.id = `task-card-${task.id}`;
    item.className = `p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-2.5 ${
      task.completed
        ? 'opacity-60'
        : isLiveWindow
          ? 'active-task-pulse'
          : isFutureLocked
            ? 'opacity-85'
            : ''
    }`;

    item.style.background = 'var(--card-bg)';
    item.style.borderColor = isLiveWindow ? 'var(--primary)' : 'var(--card-border)';

    if (isLiveWindow && !task.completed) {
      activeTaskElementToScroll = item;
    }

    let statusBadgeHtml = '';
    if (task.completed) {
      statusBadgeHtml = `<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">COMPLETED</span>`;
    } else if (isLiveWindow) {
      statusBadgeHtml = `<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md border flex items-center gap-1 animate-pulse theme-period-badge"><span class="w-1.5 h-1.5 rounded-full" style="background: var(--primary);"></span> ACTIVE NOW</span>`;
    } else if (isFutureLocked) {
      statusBadgeHtml = `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-md border flex items-center gap-1" style="background: var(--dur-badge-bg); border-color: var(--card-border); color: var(--dur-badge-text);"><i data-lucide="lock" class="w-2.5 h-2.5"></i> Locked</span>`;
    } else {
      statusBadgeHtml = `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-md border theme-period-badge">Past Slot</span>`;
    }

    item.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-center space-x-2.5 min-w-0 flex-1">
          <button
            onclick="${isPrevDayOrPastCompletedLocked ? `alertPastDateLocked()` : isLiveWindow || task.completed ? `toggleTask(${originalIndex})` : isStrictlyLockedFromToggling ? `alertPastLocked()` : `alertTimeLocked('${format12Hour(task.startTime)}')`}"
            class="w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 mt-0.5 ${
              task.completed
                ? 'crystal-btn border-transparent'
                : isLiveWindow
                  ? 'cursor-pointer shadow-sm'
                  : 'cursor-not-allowed opacity-60'
            }"
            style="${!task.completed ? 'background: var(--card-bg); border-color: ' + (isLiveWindow ? 'var(--primary)' : 'var(--card-border)') : ''}"
          >
            ${task.completed ? '<i data-lucide="check" class="w-3 h-3 stroke-[3] text-white"></i>' : isFutureLocked ? '<i data-lucide="lock" class="w-2.5 h-2.5 opacity-60" style="color: var(--text-muted);"></i>' : isStrictlyLockedFromToggling || isPastDay ? '<i data-lucide="ban" class="w-2.5 h-2.5 text-slate-400"></i>' : ''}
          </button>

          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold leading-snug truncate ${task.completed ? 'line-through opacity-60' : ''}" style="color: var(--text-main);">
                ${escapeHtml(task.title)}
              </span>
              ${!isPastDay ? `
                <button onclick="openRenameModal(${originalIndex})" class="opacity-40 hover:opacity-100 transition shrink-0" style="color: var(--text-muted);" title="Modify Objective Name">
                  <i data-lucide="pencil" class="w-2.5 h-2.5"></i>
                </button>
              ` : ''}
              <button onclick="openDeleteModal(${originalIndex})" class="opacity-40 hover:opacity-100 hover:text-red-500 transition shrink-0" style="color: var(--text-muted);" title="Delete Objective">
                <i data-lucide="trash-2" class="w-2.5 h-2.5"></i>
              </button>
            </div>
          </div>
        </div>

        ${statusBadgeHtml}
      </div>

      <div class="flex items-center justify-between gap-2 pt-1 border-t" style="border-color: var(--glass-border);">
        <span class="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border theme-period-badge">
          ${format12Hour(task.startTime)} – ${format12Hour(task.endTime)} (${task.duration}m)
        </span>

        <button
          onclick="${isPrevDayOrPastCompletedLocked ? `alertPastDateLocked()` : isLiveWindow || task.completed ? `openFocusTimer(${originalIndex})` : isStrictlyLockedFromToggling ? `alertPastLocked()` : `alertTimeLocked('${format12Hour(task.startTime)}')`}"
          class="px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1 transition active:scale-95 shadow-sm ${
            task.completed
              ? 'opacity-60 cursor-default theme-btn-secondary'
              : isLiveWindow
                ? 'crystal-btn'
                : 'opacity-50 theme-btn-secondary cursor-not-allowed'
          }"
        >
          <i data-lucide="${task.completed ? 'check-check' : 'play'}" class="w-2.5 h-2.5 fill-current"></i>
          <span>${task.completed ? 'Done' : 'Start Task'}</span>
        </button>
      </div>
    `;

    container.appendChild(item);
  };

  morningTasks.forEach(t => renderTaskItem(t, morningTasksList));
  afternoonTasks.forEach(t => renderTaskItem(t, afternoonTasksList));
  nightTasks.forEach(t => renderTaskItem(t, nightTasksList));

  updateMetricsAndAudit(tasks);
  if (window.lucide) lucide.createIcons();

  if (activeTaskElementToScroll && isToday) {
    setTimeout(() => {
      activeTaskElementToScroll.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
  }
};

const updateMetricsAndAudit = (tasks) => {
  const proProgressBar = document.getElementById('proProgressBar');
  const progressPercentage = document.getElementById('progressPercentage');
  const milestoneCounterText = document.getElementById('milestoneCounterText');
  const unlockedLessonsCount = document.getElementById('unlockedLessonsCount');
  const completedDurationText = document.getElementById('completedDurationText');
  const remainingDurationText = document.getElementById('remainingDurationText');

  if (!proProgressBar) return;

  const completedTasks = tasks.filter(t => t.completed);
  const uncompletedTasks = tasks.filter(t => !t.completed);

  const completedMins = completedTasks.reduce((sum, t) => sum + (t.duration || 0), 0);
  const remainingMins = uncompletedTasks.reduce((sum, t) => sum + (t.duration || 0), 0);

  const formatDurationText = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  if (completedDurationText) completedDurationText.textContent = formatDurationText(completedMins);
  if (remainingDurationText) remainingDurationText.textContent = formatDurationText(remainingMins);

  if (tasks.length === 0) {
    proProgressBar.style.width = '0%';
    progressPercentage.textContent = '0%';
    milestoneCounterText.textContent = '0 / 3 tasks completed';
    return;
  }

  const pct = Math.round((completedTasks.length / tasks.length) * 100);
  proProgressBar.style.width = `${pct}%`;
  progressPercentage.textContent = `${pct}%`;

  const nextBatchRemainder = completedTasks.length % 3;
  milestoneCounterText.textContent = `${nextBatchRemainder} / 3 tasks towards Top 1% Lesson`;

  const unlocked = JSON.parse(localStorage.getItem('auraplan_unlocked_lessons') || '[]');
  unlockedLessonsCount.textContent = `${unlocked.length} Masterclasses`;
};

// Jump to Active Task
window.scrollToActiveLiveTask = () => {
  const activePulse = document.querySelector('.active-task-pulse');
  if (activePulse) {
    activePulse.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert('ℹ️ No active task window matches your computer clock right now.');
  }
};

window.alertTimeLocked = (timeStr) => {
  alert(`🔒 Strict Laptop Time-Gating: This task is scheduled for ${timeStr}. It unlocks automatically when your computer clock reaches that time window.`);
};

window.alertPastLocked = () => {
  alert(`🔒 Past Timeline Locked: This scheduled time slot has already passed and cannot be modified.`);
};

window.alertPastDateLocked = () => {
  alert(`🔒 Historical Date Locked: Past date tasks cannot be toggled or edited. Only deletion is permitted.`);
};

// Safe-Delete
window.openDeleteModal = (index) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  const t = tasks[index];
  if (!t) return;

  pendingDeleteIndex = index;
  document.getElementById('deleteTaskTitleDisplay').textContent = `"${t.title}"`;
  const input = document.getElementById('deleteConfirmInput');
  input.value = '';
  document.getElementById('confirmDeleteActionBtn').disabled = true;

  const modal = document.getElementById('deleteTaskModal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
  input.focus();
};

window.closeDeleteModal = () => {
  const modal = document.getElementById('deleteTaskModal');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    pendingDeleteIndex = null;
  }, 300);
};

window.executeTaskDelete = () => {
  if (pendingDeleteIndex === null) return;
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  tasks.splice(pendingDeleteIndex, 1);
  saveTasksForDate(dateKey, tasks);

  closeDeleteModal();
  renderTasks();
  renderDayRibbon();
};

// Task Toggle
window.toggleTask = (index) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  tasks[index].completed = !tasks[index].completed;
  saveTasksForDate(dateKey, tasks);

  renderTasks();
  renderDayRibbon();

  if (tasks[index].completed) {
    advanceQuote();
    if (window.confetti) {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.65 } });
    }

    const completedTotal = tasks.filter(t => t.completed).length;
    if (completedTotal > 0 && completedTotal % 3 === 0) {
      triggerUniqueTop1PercentLesson();
    }
  }
};

const triggerUniqueTop1PercentLesson = () => {
  let unlocked = JSON.parse(localStorage.getItem('auraplan_unlocked_lessons') || '[]');
  let pool = top1PercentMasterclass.filter(l => !unlocked.includes(l.id));

  if (pool.length === 0) {
    unlocked = [];
    pool = top1PercentMasterclass;
  }

  const chosen = pool[0];
  unlocked.push(chosen.id);
  localStorage.setItem('auraplan_unlocked_lessons', JSON.stringify(unlocked));

  document.getElementById('lessonTitle').textContent = chosen.title;
  document.getElementById('lessonInsight').textContent = chosen.insight;
  document.getElementById('lessonProof').textContent = chosen.proof;

  const modal = document.getElementById('top1PercentModal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
  updateMetricsAndAudit(getTasksForDate(formatDateKey(activeDate)));
};

window.closeTop1PercentModal = () => {
  const modal = document.getElementById('top1PercentModal');
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 300);
};

// Rename
window.openRenameModal = (taskIndex) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  const t = tasks[taskIndex];

  document.getElementById('renameTaskId').value = t.id;
  document.getElementById('renameTaskTitleInput').value = t.title;

  const modal = document.getElementById('renameTaskModal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
};

window.closeRenameModal = () => {
  const modal = document.getElementById('renameTaskModal');
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 300);
};

// Custom Glass Time Picker
const setModalTimeInputs = (fromStr, toStr) => {
  document.getElementById('modalFromTime').value = fromStr;
  document.getElementById('modalToTime').value = toStr;
  document.getElementById('displayFromTime').textContent = format12Hour(fromStr);
  document.getElementById('displayToTime').textContent = format12Hour(toStr);
  validateCurrentModalSlot();
};

window.openCustomTimePicker = (target) => {
  activePickerTarget = target;
  document.getElementById('customPickerModeLabel').textContent = target === 'from' ? 'Select Start Time' : 'Select End Time';

  const currentTimeStr = document.getElementById(target === 'from' ? 'modalFromTime' : 'modalToTime').value || (target === 'from' ? '09:00' : '10:00');
  const [h24, m] = currentTimeStr.split(':').map(Number);

  pickerSelectedPeriod = h24 >= 12 ? 'PM' : 'AM';
  pickerSelectedHour = h24 % 12 || 12;
  pickerSelectedMinute = Math.round(m / 5) * 5;
  if (pickerSelectedMinute >= 60) pickerSelectedMinute = 55;

  renderPickerColumns();

  const popup = document.getElementById('customTimePickerPopup');
  popup.classList.remove('hidden');
  setTimeout(() => popup.classList.remove('opacity-0'), 10);
  if (window.lucide) lucide.createIcons();
};

window.closeCustomTimePicker = () => {
  const popup = document.getElementById('customTimePickerPopup');
  popup.classList.add('opacity-0');
  setTimeout(() => popup.classList.add('hidden'), 200);
};

const renderPickerColumns = () => {
  const hList = document.getElementById('pickerHoursList');
  const mList = document.getElementById('pickerMinutesList');
  hList.innerHTML = '';
  mList.innerHTML = '';

  for (let i = 1; i <= 12; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `w-full py-2 rounded-xl text-xs font-mono font-bold transition ${
      pickerSelectedHour === i ? 'crystal-btn shadow-sm' : 'picker-btn-unselected'
    }`;
    btn.textContent = String(i).padStart(2, '0');
    btn.onclick = () => {
      pickerSelectedHour = i;
      renderPickerColumns();
    };
    hList.appendChild(btn);
  }

  for (let i = 0; i < 60; i += 5) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `w-full py-2 rounded-xl text-xs font-mono font-bold transition ${
      pickerSelectedMinute === i ? 'crystal-btn shadow-sm' : 'picker-btn-unselected'
    }`;
    btn.textContent = String(i).padStart(2, '0');
    btn.onclick = () => {
      pickerSelectedMinute = i;
      renderPickerColumns();
    };
    mList.appendChild(btn);
  }

  const btnAM = document.getElementById('periodBtnAM');
  const btnPM = document.getElementById('periodBtnPM');

  if (pickerSelectedPeriod === 'AM') {
    btnAM.className = 'py-3 rounded-xl font-mono text-xs font-black crystal-btn shadow-sm';
    btnPM.className = 'py-3 rounded-xl font-mono text-xs font-bold theme-btn-secondary picker-btn-unselected';
  } else {
    btnPM.className = 'py-3 rounded-xl font-mono text-xs font-black crystal-btn shadow-sm';
    btnAM.className = 'py-3 rounded-xl font-mono text-xs font-bold theme-btn-secondary picker-btn-unselected';
  }
};

window.selectPickerPeriod = (period) => {
  pickerSelectedPeriod = period;
  renderPickerColumns();
};

window.applyCustomTimeSelection = () => {
  let h24 = pickerSelectedHour % 12;
  if (pickerSelectedPeriod === 'PM') h24 += 12;

  const timeStr = `${String(h24).padStart(2, '0')}:${String(pickerSelectedMinute).padStart(2, '0')}`;

  if (activePickerTarget === 'from') {
    document.getElementById('modalFromTime').value = timeStr;
    document.getElementById('displayFromTime').textContent = format12Hour(timeStr);
  } else {
    document.getElementById('modalToTime').value = timeStr;
    document.getElementById('displayToTime').textContent = format12Hour(timeStr);
  }

  validateCurrentModalSlot();
  closeCustomTimePicker();
};

// Open Time Slot Modal
const openTimeSlotModal = (title) => {
  document.getElementById('modalTaskTitlePreview').textContent = title;

  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  const freeSlots = calculateFullAvailableSlots(tasks);

  const modalMorningSlots = document.getElementById('modalMorningSlots');
  const modalAfternoonSlots = document.getElementById('modalAfternoonSlots');
  const modalNightSlots = document.getElementById('modalNightSlots');

  modalMorningSlots.innerHTML = '';
  modalAfternoonSlots.innerHTML = '';
  modalNightSlots.innerHTML = '';

  const now = new Date();
  const isToday = activeDate.toDateString() === now.toDateString();
  const isPastDay = new Date(activeDate).setHours(0, 0, 0, 0) < new Date(now).setHours(0, 0, 0, 0);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const createChip = (slot) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'px-3 py-1.5 rounded-xl border text-xs font-bold font-mono transition active:scale-95 flex items-center gap-1.5 shadow-sm theme-period-badge';

    const hours = Math.floor(slot.duration / 60);
    const mins = slot.duration % 60;
    const durText = hours > 0 ? `${hours}h ${mins > 0 ? mins + 'm' : ''}` : `${mins}m`;

    chip.innerHTML = `<span>${format12Hour(slot.startStr)} – ${format12Hour(slot.endStr)}</span> <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded" style="background: var(--card-bg); color: var(--primary);">(${durText})</span>`;

    chip.onclick = () => {
      setModalTimeInputs(slot.startStr, slot.endStr);
    };
    return chip;
  };

  const morningSlots = freeSlots.filter(s => s.startMinutes < 720);
  const afternoonSlots = freeSlots.filter(s => s.startMinutes >= 720 && s.startMinutes < 1020);
  const nightSlots = freeSlots.filter(s => s.startMinutes >= 1020);

  if (isPastDay || (isToday && currentMinutes >= 720)) {
    modalMorningSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic line-through" style="color: var(--primary);">Past Window (Morning passed)</span>`;
  } else if (morningSlots.length === 0) {
    modalMorningSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic">Fully booked in Morning</span>`;
  } else {
    morningSlots.forEach(s => modalMorningSlots.appendChild(createChip(s)));
  }

  if (isPastDay || (isToday && currentMinutes >= 1020)) {
    modalAfternoonSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic line-through" style="color: var(--primary);">Past Window (Afternoon passed)</span>`;
  } else if (afternoonSlots.length === 0) {
    modalAfternoonSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic">Fully booked in Afternoon</span>`;
  } else {
    afternoonSlots.forEach(s => modalAfternoonSlots.appendChild(createChip(s)));
  }

  if (isPastDay || (isToday && currentMinutes >= 1439)) {
    modalNightSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic line-through" style="color: var(--primary);">Past Window (Night passed)</span>`;
  } else if (nightSlots.length === 0) {
    modalNightSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic">Fully booked at Night</span>`;
  } else {
    nightSlots.forEach(s => modalNightSlots.appendChild(createChip(s)));
  }

  if (freeSlots.length > 0) {
    setModalTimeInputs(freeSlots[0].startStr, freeSlots[0].endStr);
  } else if (isToday) {
    const snapStart = Math.min(1410, Math.ceil(currentMinutes / 5) * 5);
    const snapEnd = Math.min(1439, snapStart + 60);
    setModalTimeInputs(minutesToTimeStr(snapStart), minutesToTimeStr(snapEnd));
  } else {
    setModalTimeInputs("09:00", "10:00");
  }

  const modal = document.getElementById('timeSlotModal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
  if (window.lucide) lucide.createIcons();
};

window.closeTimeSlotModal = () => {
  const modal = document.getElementById('timeSlotModal');
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 300);
};

// Quotes Progression
const advanceQuote = () => {
  const quoteBoxText = document.getElementById('quoteBoxText');
  const quoteBoxAuthor = document.getElementById('quoteBoxAuthor');
  if (!quoteBoxText || !quoteBoxAuthor) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBoxText.style.opacity = '0';
  quoteBoxAuthor.style.opacity = '0';

  setTimeout(() => {
    const q = quotes[randomIndex];
    quoteBoxText.textContent = `"${q.text}"`;
    quoteBoxAuthor.textContent = `— ${q.author}`;
    quoteBoxText.style.opacity = '1';
    quoteBoxAuthor.style.opacity = '1';
  }, 180);
};

// Focus Countdown
window.openFocusTimer = (taskIndex) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  activeFocusTask = { ...tasks[taskIndex], index: taskIndex };

  document.getElementById('focusTaskTitle').textContent = activeFocusTask.title;

  countdownTotalSeconds = (activeFocusTask.duration || 60) * 60;
  countdownRemainingSeconds = countdownTotalSeconds;

  updateCountdownDisplay();

  countdownRunning = false;
  if (countdownInterval) clearInterval(countdownInterval);

  const startPauseTimerBtn = document.getElementById('startPauseTimerBtn');
  const startPauseTimerLabel = document.getElementById('startPauseTimerLabel');
  const startPauseTimerIcon = document.getElementById('startPauseTimerIcon');

  startPauseTimerBtn.disabled = false;
  startPauseTimerBtn.classList.remove('opacity-60', 'cursor-not-allowed');
  startPauseTimerLabel.textContent = "Start Focus";
  startPauseTimerIcon.setAttribute('data-lucide', 'play');

  document.getElementById('preStartExitBtn').classList.remove('hidden');
  document.getElementById('deepLockNotice').innerHTML = `
    <i data-lucide="shield-alert" class="w-4 h-4" style="color: var(--primary);"></i>
    <span>Deep Lock Rule: Once started, you cannot exit until the timer reaches 00:00:00.</span>
  `;

  const randomQ = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('focusQuoteText').textContent = `"${randomQ.text}"`;
  document.getElementById('focusQuoteAuthor').textContent = `— ${randomQ.author}`;

  const modal = document.getElementById('fullscreenFocusModal');
  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  if (window.lucide) lucide.createIcons();
};

window.closeFocusTimer = () => {
  if (countdownRunning) {
    alert("🔒 Deep Focus Lock Active: You cannot exit until the countdown hits 00:00:00.");
    return;
  }
  const modal = document.getElementById('fullscreenFocusModal');
  modal.classList.remove('pointer-events-auto', 'opacity-100');
  modal.classList.add('pointer-events-none', 'opacity-0');
};

const updateCountdownDisplay = () => {
  const hours = Math.floor(countdownRemainingSeconds / 3600);
  const minutes = Math.floor((countdownRemainingSeconds % 3600) / 60);
  const seconds = countdownRemainingSeconds % 60;

  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  const display = document.getElementById('countdownTimerDisplay');
  if (display) display.textContent = `${h}:${m}:${s}`;
};

window.toggleCountdownTimer = () => {
  if (!countdownRunning) {
    countdownRunning = true;

    document.getElementById('preStartExitBtn').classList.add('hidden');
    const startPauseTimerBtn = document.getElementById('startPauseTimerBtn');
    startPauseTimerBtn.disabled = true;
    startPauseTimerBtn.classList.add('opacity-75', 'cursor-not-allowed');
    document.getElementById('startPauseTimerLabel').textContent = "Focus Lock Engaged (Counting down...)";
    document.getElementById('startPauseTimerIcon').setAttribute('data-lucide', 'lock');

    document.getElementById('deepLockNotice').innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span class="text-emerald-500 font-bold">Session Locked: Objective will complete automatically at 00:00:00.</span>
    `;

    countdownInterval = setInterval(() => {
      if (countdownRemainingSeconds > 0) {
        countdownRemainingSeconds--;
        updateCountdownDisplay();
      } else {
        clearInterval(countdownInterval);
        countdownRunning = false;
        finishTaskDirectly();
      }
    }, 1000);
  }
  if (window.lucide) lucide.createIcons();
};

window.finishTaskDirectly = () => {
  if (activeFocusTask !== null && activeFocusTask.index !== undefined) {
    toggleTask(activeFocusTask.index);
  }
  countdownRunning = false;
  const modal = document.getElementById('fullscreenFocusModal');
  modal.classList.remove('pointer-events-auto', 'opacity-100');
  modal.classList.add('pointer-events-none', 'opacity-0');
};

// Importer
window.openImportModal = () => {
  const modal = document.getElementById('importModal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
};

window.closeImportModal = () => {
  const modal = document.getElementById('importModal');
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 300);
  document.getElementById('parsedPreviewArea').classList.add('hidden');
  document.getElementById('commitImportBtn').disabled = true;
};

window.loadSampleText = () => {
  document.getElementById('rawTextScheduleInput').value =
`09:00 AM - 10:30 AM: Deep Work - Algorithm Design
02:00 PM - 03:30 PM: Machine Learning Training
06:00 PM - 07:00 PM: Workout & Cardio`;
  parseInputSchedule();
};

function normalizeTo24Hour(timeStr) {
  let [time, modifier] = timeStr.trim().split(/\s+/);
  if (!modifier && (timeStr.toLowerCase().includes('am') || timeStr.toLowerCase().includes('pm'))) {
    modifier = timeStr.toLowerCase().includes('pm') ? 'PM' : 'AM';
    time = timeStr.replace(/am|pm/i, '').trim();
  }
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier && modifier.toUpperCase() === 'PM' && hours < 12) hours += 12;
  if (modifier && modifier.toUpperCase() === 'AM' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

window.parseInputSchedule = () => {
  const rawText = document.getElementById('rawTextScheduleInput').value.trim();
  if (!rawText) return;

  const lines = rawText.split('\n');
  parsedImportTasks = [];

  const dateKey = formatDateKey(activeDate);
  let existingTasks = [...getTasksForDate(dateKey)];

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const timeRegex = /((\d{1,2}:\d{2})\s*(AM|PM|am|pm)?)\s*[-–to]\s*((\d{1,2}:\d{2})\s*(AM|PM|am|pm)?)\s*[:|-]?\s*(.*)/i;
    const match = trimmed.match(timeRegex);

    if (match) {
      const from24 = normalizeTo24Hour(match[1]);
      const to24 = normalizeTo24Hour(match[4]);
      const title = match[7].trim() || "Imported Task";

      const startM = timeToMinutes(from24);
      const endM = timeToMinutes(to24);

      if (isSlotAvailable(startM, endM, existingTasks)) {
        const taskObj = {
          id: Date.now() + Math.random(),
          title,
          startTime: from24,
          endTime: to24,
          startMinutes: startM,
          endMinutes: endM,
          duration: endM - startM,
          completed: false,
          createdAt: new Date().toISOString()
        };
        parsedImportTasks.push(taskObj);
        existingTasks.push(taskObj);
      }
    }
  });

  if (parsedImportTasks.length > 0) {
    document.getElementById('parsedPreviewArea').classList.remove('hidden');
    document.getElementById('parsedCountText').textContent = `Detected ${parsedImportTasks.length} non-overlapping items:`;

    const listContainer = document.getElementById('parsedItemsList');
    listContainer.innerHTML = '';
    parsedImportTasks.forEach(item => {
      const div = document.createElement('div');
      div.className = 'p-2 rounded-xl border flex items-center justify-between gap-2';
      div.style.background = 'var(--card-bg)';
      div.style.borderColor = 'var(--card-border)';
      div.innerHTML = `
        <span class="font-bold truncate" style="color: var(--text-main);">${escapeHtml(item.title)}</span>
        <span class="font-mono px-2 py-0.5 rounded text-[11px] font-bold shrink-0 theme-period-badge">${format12Hour(item.startTime)} – ${format12Hour(item.endTime)}</span>
      `;
      listContainer.appendChild(div);
    });

    document.getElementById('commitImportBtn').disabled = false;
  } else {
    alert('No timestamped tasks found or all entries overlap existing slots.');
  }
  if (window.lucide) lucide.createIcons();
};

window.commitParsedSchedule = () => {
  if (parsedImportTasks.length === 0) return;
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  tasks.push(...parsedImportTasks);
  saveTasksForDate(dateKey, tasks);

  closeImportModal();
  renderTasks();
  renderDayRibbon();

  if (window.confetti) confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 } });
};

// Synchronize Entire View
const updateView = () => {
  renderDayRibbon();
  renderTasks();
  updateRealTimeClock();
};

// Safe DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initDefaultDemoTasks();

  const savedAmbiance = localStorage.getItem('auraplan_ambiance') || 'glacier';
  setAmbiance(savedAmbiance);

  const savedTheme = localStorage.getItem('auraplan_theme_mode') || 'light';
  applyTheme(savedTheme);

  updateView();
  setInterval(updateRealTimeClock, 1000);

  // Form bindings
  const taskQuickForm = document.getElementById('taskQuickForm');
  if (taskQuickForm) {
    taskQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('taskTextInput');
      const title = input.value.trim();
      if (!title) return;
      pendingTaskTitle = title;
      openTimeSlotModal(title);
    });
  }

  const confirmSlotForm = document.getElementById('confirmSlotForm');
  if (confirmSlotForm) {
    confirmSlotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateCurrentModalSlot()) return;

      const fromStr = document.getElementById('modalFromTime').value;
      const toStr = document.getElementById('modalToTime').value;
      const startMins = timeToMinutes(fromStr);
      const endMins = timeToMinutes(toStr);

      const dateKey = formatDateKey(activeDate);
      const tasks = getTasksForDate(dateKey);

      tasks.push({
        id: Date.now() + Math.random(),
        title: pendingTaskTitle,
        startTime: fromStr,
        endTime: toStr,
        startMinutes: startMins,
        endMinutes: endMins,
        duration: endMins - startMins,
        completed: false,
        createdAt: new Date().toISOString()
      });

      saveTasksForDate(dateKey, tasks);
      document.getElementById('taskTextInput').value = '';
      closeTimeSlotModal();

      renderTasks();
      renderDayRibbon();
    });
  }

  const deleteConfirmInput = document.getElementById('deleteConfirmInput');
  if (deleteConfirmInput) {
    deleteConfirmInput.addEventListener('input', (e) => {
      const btn = document.getElementById('confirmDeleteActionBtn');
      if (btn) btn.disabled = e.target.value.trim().toLowerCase() !== 'delete';
    });
  }

  const renameTaskForm = document.getElementById('renameTaskForm');
  if (renameTaskForm) {
    renameTaskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = parseFloat(document.getElementById('renameTaskId').value);
      const newTitle = document.getElementById('renameTaskTitleInput').value.trim();
      if (!newTitle) return;

      const dateKey = formatDateKey(activeDate);
      const tasks = getTasksForDate(dateKey);
      const idx = tasks.findIndex(t => t.id === id);

      if (idx > -1) {
        tasks[idx].title = newTitle;
        saveTasksForDate(dateKey, tasks);
        closeRenameModal();
        renderTasks();
      }
    });
  }

  document.getElementById('prevDayNavBtn')?.addEventListener('click', () => {
    activeDate.setDate(activeDate.getDate() - 1);
    updateView();
  });

  document.getElementById('nextDayNavBtn')?.addEventListener('click', () => {
    activeDate.setDate(activeDate.getDate() + 1);
    updateView();
  });

  document.getElementById('jumpTodayBtn')?.addEventListener('click', () => {
    activeDate = new Date();
    updateView();
  });

  if (window.lucide) lucide.createIcons();
});
