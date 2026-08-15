// Non-Repetitive Top 1% Lessons Master Database
const top1PercentMasterclass = [
  {
    id: "kelly_criterion",
    title: "The Kelly Criterion & Asymmetric Convexity",
    insight: "Never allocate effort linearly. The top 1% size their energy aggressively on high-probability asymmetric bets while keeping downside ruin mathematically at zero.",
    proof: "Formulated by John L. Kelly Jr. at Bell Labs in 1956. Jim Simons and Renaissance Technologies' Medallion Fund generated a 66.1% annualized return from 1988 to 2018 ($100B+ profit) by applying Kelly sizing to mathematical leverage."
  },
  {
    id: "pareto_price_law",
    title: "Price's Law & Power-Law Inequality",
    insight: "In any productive system, 50% of the aggregate value is created by the square root of total contributors (√N). In a domain of 100 people, just 10 drive 50% of all compounding returns.",
    proof: "Derek J. de Solla Price proved this mathematically in 1963 across scientific publications and patent outputs. Peter Thiel validated that in top venture portfolios (Founders Fund), a single investment generates greater monetary returns than all other fund investments combined."
  },
  {
    id: "neuroplastic_myelin",
    title: "Neuroplastic Myelination & Deliberate Sprints",
    insight: "World-class mastery is not time spent; it is the physical insulation of neural circuits via myelin during intense, uninterrupted cognitive friction.",
    proof: "Dr. Anders Ericsson's 30-year Berlin Conservatory study proved that elite violinists did not practice more total hours than peers, but compressed intense focus into 90-minute blocks with immediate feedback, tripling neural myelination rates."
  },
  {
    id: "shannon_entropy",
    title: "Shannon's Information Entropy & Noise Elimination",
    insight: "99% of media, notifications, and micro-tasks are pure thermodynamic noise. Ruthlessly pruning low-signal inputs is the only mathematical way to maximize high-entropy strategic breakthroughs.",
    proof: "Claude Shannon's 1948 foundational paper 'A Mathematical Theory of Communication' established channel capacity: maximum information transmission requires driving noise interference toward zero."
  },
  {
    id: "first_principles",
    title: "First-Principles Decomposition (Physics Method)",
    insight: "Reject analogy and consensus. Boil any engineering, career, or algorithmic problem down to its fundamental, undeniable truths, then reason up from there.",
    proof: "SpaceX reduced rocket manufacturing costs from $65M (aerospace market pricing) to ~$2M by breaking raw aerospace-grade materials (carbon fiber, titanium, aluminum) down to raw commodity pricing ($1.5% of market cost)."
  },
  {
    id: "antifragility",
    title: "Antifragility & Non-Linear Gains",
    insight: "Fragile systems break under stress. Robust systems resist. Antifragile systems grow exponentially stronger under calculated chaos, volatility, and deep cognitive loads.",
    proof: "Nassim Nicholas Taleb proved mathematically that non-linear payoff curves with bounded downside and unlimited upside guarantee survival and domination across financial, biological, and technological domains."
  }
];

// Motivational Quotes
const quotes = [
  { text: "Great things come from hard work and perseverance. No excuses.", author: "Kobe Bryant" },
  { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas A. Edison" },
  { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "The dictionary is the only place where success comes before work.", author: "Vince Lombardi" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "I'm a greater believer in luck, and I find the harder I work the more I have of it.", author: "Thomas Jefferson" },
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "At the dawn of day, have in readiness this thought: 'I am rising to do the work of a human being.'", author: "Marcus Aurelius" }
];

// State Variables
let activeDate = new Date();
let quoteIndex = 0;
let pendingTaskTitle = '';
let parsedImportTasks = [];
let activeFocusTask = null;

// Countdown Timer State
let countdownRunning = false;
let countdownRemainingSeconds = 0;
let countdownTotalSeconds = 0;
let countdownInterval = null;

// 7 Luxury Ambiance Palettes
const setAmbiance = (ambiance) => {
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
  document.getElementById('activeAmbianceDot').style.background = colors[ambiance] || '#0284C7';
};
const savedAmbiance = localStorage.getItem('auraplan_ambiance') || 'glacier';
setAmbiance(savedAmbiance);

// Dark / Light Theme Engine
const applyTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('auraplan_theme_mode', theme);
  const icon = document.getElementById('themeToggleIcon');
  const label = document.getElementById('themeToggleLabel');
  if (theme === 'dark') {
    icon.setAttribute('data-lucide', 'sun');
    label.textContent = 'Light';
  } else {
    icon.setAttribute('data-lucide', 'moon');
    label.textContent = 'Dark';
  }
  lucide.createIcons();
};

const toggleDarkLightMode = () => {
  const current = document.body.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
  renderDayRibbon();
  renderTasks();
};
const savedTheme = localStorage.getItem('auraplan_theme_mode') || 'light';
applyTheme(savedTheme);

// Date Key Formatter: YYYY-MM-DD
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

// Pre-populate Default Sample Tasks for Today
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
initDefaultDemoTasks();

// Storage Management
const getTasksForDate = (dateKey) => {
  const raw = localStorage.getItem(`auraplan_timeline_tasks_${dateKey}`);
  return raw ? JSON.parse(raw) : [];
};

const saveTasksForDate = (dateKey, tasks) => {
  tasks.sort((a, b) => a.startMinutes - b.startMinutes);
  localStorage.setItem(`auraplan_timeline_tasks_${dateKey}`, JSON.stringify(tasks));
};

// DOM References
const liveClockDisplay = document.getElementById('liveClockDisplay');
const dayRibbon = document.getElementById('dayRibbon');
const proProgressBar = document.getElementById('proProgressBar');
const progressPercentage = document.getElementById('progressPercentage');
const milestoneCounterText = document.getElementById('milestoneCounterText');
const unlockedLessonsCount = document.getElementById('unlockedLessonsCount');
const taskQuickForm = document.getElementById('taskQuickForm');
const taskTextInput = document.getElementById('taskTextInput');
const quoteBoxText = document.getElementById('quoteBoxText');
const quoteBoxAuthor = document.getElementById('quoteBoxAuthor');

// Bottom Bar Metrics
const completedDurationText = document.getElementById('completedDurationText');
const remainingDurationText = document.getElementById('remainingDurationText');
const remainingDayTimeText = document.getElementById('remainingDayTimeText');

// 3 Period Containers
const morningTasksList = document.getElementById('morningTasksList');
const morningEmptyState = document.getElementById('morningEmptyState');
const afternoonTasksList = document.getElementById('afternoonTasksList');
const afternoonEmptyState = document.getElementById('afternoonEmptyState');
const nightTasksList = document.getElementById('nightTasksList');
const nightEmptyState = document.getElementById('nightEmptyState');

// Modals
const timeSlotModal = document.getElementById('timeSlotModal');
const modalTaskTitlePreview = document.getElementById('modalTaskTitlePreview');
const modalMorningSlots = document.getElementById('modalMorningSlots');
const modalAfternoonSlots = document.getElementById('modalAfternoonSlots');
const modalNightSlots = document.getElementById('modalNightSlots');
const modalFromTime = document.getElementById('modalFromTime');
const modalToTime = document.getElementById('modalToTime');
const modalConflictAlert = document.getElementById('modalConflictAlert');
const confirmSlotForm = document.getElementById('confirmSlotForm');

const renameTaskModal = document.getElementById('renameTaskModal');
const renameTaskId = document.getElementById('renameTaskId');
const renameTaskTitleInput = document.getElementById('renameTaskTitleInput');
const renameTaskForm = document.getElementById('renameTaskForm');

const top1PercentModal = document.getElementById('top1PercentModal');
const lessonTitle = document.getElementById('lessonTitle');
const lessonInsight = document.getElementById('lessonInsight');
const lessonProof = document.getElementById('lessonProof');

const fullscreenFocusModal = document.getElementById('fullscreenFocusModal');
const focusTaskTitle = document.getElementById('focusTaskTitle');
const countdownTimerDisplay = document.getElementById('countdownTimerDisplay');
const startPauseTimerBtn = document.getElementById('startPauseTimerBtn');
const startPauseTimerIcon = document.getElementById('startPauseTimerIcon');
const startPauseTimerLabel = document.getElementById('startPauseTimerLabel');
const focusQuoteText = document.getElementById('focusQuoteText');
const focusQuoteAuthor = document.getElementById('focusQuoteAuthor');
const preStartExitBtn = document.getElementById('preStartExitBtn');
const deepLockNotice = document.getElementById('deepLockNotice');

// Real-Time Computer Clock Synchronizer & Remaining Time in Day Update
const updateRealTimeClock = () => {
  const now = new Date();
  liveClockDisplay.textContent = now.toLocaleTimeString('en-US', { hour12: true });

  const curMins = now.getHours() * 60 + now.getMinutes();
  const leftMins = Math.max(0, 1440 - curMins);
  const leftH = Math.floor(leftMins / 60);
  const leftM = leftMins % 60;
  remainingDayTimeText.textContent = `${leftH}h ${leftM}m left`;
};
setInterval(updateRealTimeClock, 1000);
updateRealTimeClock();

// Calculate ENTIRE Continuous Unbooked Free Time Slots
const calculateFullAvailableSlots = (tasks) => {
  const sorted = [...tasks].sort((a, b) => a.startMinutes - b.startMinutes);
  const freeSlots = [];
  let currentPointer = 0;

  sorted.forEach(t => {
    if (t.startMinutes > currentPointer) {
      freeSlots.push({
        startMinutes: currentPointer,
        endMinutes: t.startMinutes,
        startStr: minutesToTimeStr(currentPointer),
        endStr: minutesToTimeStr(t.startMinutes),
        duration: t.startMinutes - currentPointer
      });
    }
    if (t.endMinutes > currentPointer) {
      currentPointer = t.endMinutes;
    }
  });

  if (currentPointer < 1439) {
    freeSlots.push({
      startMinutes: currentPointer,
      endMinutes: 1439,
      startStr: minutesToTimeStr(currentPointer),
      endStr: "23:59",
      duration: 1439 - currentPointer
    });
  }

  return freeSlots.filter(s => s.duration >= 5);
};

const isSlotAvailable = (startMins, endMins, existingTasks, ignoreTaskId = null) => {
  if (endMins <= startMins) return false;
  return !existingTasks.some(t => {
    if (ignoreTaskId && t.id === ignoreTaskId) return false;
    return !(endMins <= t.startMinutes || startMins >= t.endMinutes);
  });
};

// Render 7-Day Date Ribbon Carousel
const renderDayRibbon = () => {
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

// Render Tri-Period 3-Column Timeline with Live Highlighting & Auto-Scroll
const renderTasks = () => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  morningTasksList.innerHTML = '';
  afternoonTasksList.innerHTML = '';
  nightTasksList.innerHTML = '';

  const now = new Date();
  const isToday = activeDate.toDateString() === now.toDateString();
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

    if (isToday) {
      if (currentComputerMinutes >= task.startMinutes && currentComputerMinutes <= task.endMinutes) {
        isLiveWindow = true;
      } else if (currentComputerMinutes < task.startMinutes) {
        isFutureLocked = true;
      } else {
        isPastWindow = true;
      }
    } else if (activeDate > now) {
      isFutureLocked = true;
    } else {
      isPastWindow = true;
    }

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
      statusBadgeHtml = `<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md border flex items-center gap-1 animate-pulse" style="background: var(--time-badge-bg); border-color: var(--time-badge-border); color: var(--time-badge-text);"><span class="w-1.5 h-1.5 rounded-full" style="background: var(--primary);"></span> ACTIVE NOW</span>`;
    } else if (isFutureLocked) {
      statusBadgeHtml = `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-md border flex items-center gap-1" style="background: var(--dur-badge-bg); border-color: var(--card-border); color: var(--dur-badge-text);"><i data-lucide="lock" class="w-2.5 h-2.5"></i> Locked</span>`;
    } else {
      statusBadgeHtml = `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400">Past Slot</span>`;
    }

    item.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-center space-x-2.5 min-w-0 flex-1">
          <!-- Gated Checkbox -->
          <button
            onclick="${isLiveWindow || task.completed ? `toggleTask(${originalIndex})` : isStrictlyLockedFromToggling ? `alertPastLocked()` : `alertTimeLocked('${format12Hour(task.startTime)}')`}"
            class="w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 mt-0.5 ${
              task.completed
                ? 'crystal-btn border-transparent'
                : isLiveWindow
                  ? 'cursor-pointer shadow-sm'
                  : 'cursor-not-allowed opacity-60'
            }"
            style="${!task.completed ? 'background: var(--card-bg); border-color: ' + (isLiveWindow ? 'var(--primary)' : 'var(--card-border)') : ''}"
          >
            ${task.completed ? '<i data-lucide="check" class="w-3 h-3 stroke-[3] text-white"></i>' : isFutureLocked ? '<i data-lucide="lock" class="w-2.5 h-2.5 opacity-60" style="color: var(--text-muted);"></i>' : isStrictlyLockedFromToggling ? '<i data-lucide="ban" class="w-2.5 h-2.5 text-slate-400"></i>' : ''}
          </button>

          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold leading-snug truncate ${task.completed ? 'line-through opacity-60' : ''}" style="color: var(--text-main);">
                ${escapeHtml(task.title)}
              </span>
              <!-- Rename Icon -->
              <button onclick="openRenameModal(${originalIndex})" class="opacity-40 hover:opacity-100 transition shrink-0" style="color: var(--text-muted);" title="Modify Objective Name">
                <i data-lucide="pencil" class="w-2.5 h-2.5"></i>
              </button>
            </div>
          </div>
        </div>

        ${statusBadgeHtml}
      </div>

      <div class="flex items-center justify-between gap-2 pt-1 border-t" style="border-color: var(--glass-border);">
        <span class="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border" style="background: var(--time-badge-bg); border-color: var(--time-badge-border); color: var(--time-badge-text);">
          ${format12Hour(task.startTime)} – ${format12Hour(task.endTime)} (${task.duration}m)
        </span>

        <button
          onclick="${isLiveWindow || task.completed ? `openFocusTimer(${originalIndex})` : isStrictlyLockedFromToggling ? `alertPastLocked()` : `alertTimeLocked('${format12Hour(task.startTime)}')`}"
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
  lucide.createIcons();

  if (activeTaskElementToScroll && isToday) {
    setTimeout(() => {
      activeTaskElementToScroll.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
  }
};

const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Calculate Completion Metrics & Time Audit Sums
const updateMetricsAndAudit = (tasks) => {
  const completedTasks = tasks.filter(t => t.completed);
  const uncompletedTasks = tasks.filter(t => !t.completed);

  const completedMins = completedTasks.reduce((sum, t) => sum + (t.duration || 0), 0);
  const remainingMins = uncompletedTasks.reduce((sum, t) => sum + (t.duration || 0), 0);

  const formatDurationText = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  completedDurationText.textContent = formatDurationText(completedMins);
  remainingDurationText.textContent = formatDurationText(remainingMins);

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

// Jump Smoothly to Current Live Task
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

// Toggle Task Complete + Auto-Shift Quotes + Trigger Non-Repetitive Top 1% Lesson
window.toggleTask = (index) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  tasks[index].completed = !tasks[index].completed;
  saveTasksForDate(dateKey, tasks);

  renderTasks();
  renderDayRibbon();

  if (tasks[index].completed) {
    advanceQuote();

    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.65 }
    });

    const completedTotal = tasks.filter(t => t.completed).length;
    if (completedTotal > 0 && completedTotal % 3 === 0) {
      triggerUniqueTop1PercentLesson();
    }
  }
};

// Non-Repetitive Top 1% Lesson Dispatcher
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

  lessonTitle.textContent = chosen.title;
  lessonInsight.textContent = chosen.insight;
  lessonProof.textContent = chosen.proof;

  top1PercentModal.classList.remove('hidden');
  setTimeout(() => top1PercentModal.classList.remove('opacity-0'), 10);
  updateMetricsAndAudit(getTasksForDate(formatDateKey(activeDate)));
};

window.closeTop1PercentModal = () => {
  top1PercentModal.classList.add('opacity-0');
  setTimeout(() => top1PercentModal.classList.add('hidden'), 300);
};

// Task Rename Engine
window.openRenameModal = (taskIndex) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  const t = tasks[taskIndex];

  renameTaskId.value = t.id;
  renameTaskTitleInput.value = t.title;

  renameTaskModal.classList.remove('hidden');
  setTimeout(() => renameTaskModal.classList.remove('opacity-0'), 10);
};

window.closeRenameModal = () => {
  renameTaskModal.classList.add('opacity-0');
  setTimeout(() => renameTaskModal.classList.add('hidden'), 300);
};

renameTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = parseFloat(renameTaskId.value);
  const newTitle = renameTaskTitleInput.value.trim();
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

// Schedule Task Form Submission -> Opens Time Slot Modal
taskQuickForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = taskTextInput.value.trim();
  if (!title) return;

  pendingTaskTitle = title;
  openTimeSlotModal(title);
});

const openTimeSlotModal = (title) => {
  modalTaskTitlePreview.textContent = title;
  modalConflictAlert.classList.add('hidden');

  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  const freeSlots = calculateFullAvailableSlots(tasks);

  modalMorningSlots.innerHTML = '';
  modalAfternoonSlots.innerHTML = '';
  modalNightSlots.innerHTML = '';

  const createChip = (slot) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'px-3 py-1.5 rounded-xl border text-xs font-bold font-mono transition active:scale-95 flex items-center gap-1.5 shadow-sm';
    chip.style.background = 'var(--time-badge-bg)';
    chip.style.borderColor = 'var(--time-badge-border)';
    chip.style.color = 'var(--time-badge-text)';

    const hours = Math.floor(slot.duration / 60);
    const mins = slot.duration % 60;
    const durText = hours > 0 ? `${hours}h ${mins > 0 ? mins + 'm' : ''}` : `${mins}m`;

    chip.innerHTML = `<span>${format12Hour(slot.startStr)} – ${format12Hour(slot.endStr)}</span> <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded" style="background: var(--card-bg); color: var(--primary);">(${durText})</span>`;

    chip.onclick = () => {
      modalFromTime.value = slot.startStr;
      modalToTime.value = slot.endStr;
    };
    return chip;
  };

  const morningSlots = freeSlots.filter(s => s.startMinutes < 720);
  const afternoonSlots = freeSlots.filter(s => s.startMinutes >= 720 && s.startMinutes < 1020);
  const nightSlots = freeSlots.filter(s => s.startMinutes >= 1020);

  if (morningSlots.length === 0) {
    modalMorningSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic">Fully booked in Morning</span>`;
  } else {
    morningSlots.forEach(s => modalMorningSlots.appendChild(createChip(s)));
  }

  if (afternoonSlots.length === 0) {
    modalAfternoonSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic">Fully booked in Afternoon</span>`;
  } else {
    afternoonSlots.forEach(s => modalAfternoonSlots.appendChild(createChip(s)));
  }

  if (nightSlots.length === 0) {
    modalNightSlots.innerHTML = `<span class="text-xs opacity-50 font-semibold italic">Fully booked at Night</span>`;
  } else {
    nightSlots.forEach(s => modalNightSlots.appendChild(createChip(s)));
  }

  if (freeSlots.length > 0) {
    modalFromTime.value = freeSlots[0].startStr;
    modalToTime.value = freeSlots[0].endStr;
  }

  timeSlotModal.classList.remove('hidden');
  setTimeout(() => timeSlotModal.classList.remove('opacity-0'), 10);
  lucide.createIcons();
};

window.closeTimeSlotModal = () => {
  timeSlotModal.classList.add('opacity-0');
  setTimeout(() => timeSlotModal.classList.add('hidden'), 300);
};

confirmSlotForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fromStr = modalFromTime.value;
  const toStr = modalToTime.value;

  if (!fromStr || !toStr) return;

  const startMins = timeToMinutes(fromStr);
  const endMins = timeToMinutes(toStr);

  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  if (!isSlotAvailable(startMins, endMins, tasks)) {
    modalConflictAlert.classList.remove('hidden');
    return;
  }

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
  taskTextInput.value = '';
  closeTimeSlotModal();

  renderTasks();
  renderDayRibbon();
});

// Date Navigation Controls
document.getElementById('prevDayNavBtn').addEventListener('click', () => {
  activeDate.setDate(activeDate.getDate() - 1);
  updateView();
});

document.getElementById('nextDayNavBtn').addEventListener('click', () => {
  activeDate.setDate(activeDate.getDate() + 1);
  updateView();
});

document.getElementById('jumpTodayBtn').addEventListener('click', () => {
  activeDate = new Date();
  updateView();
});

// Quote Auto-Progression
const advanceQuote = () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteBoxText.style.opacity = '0';
  quoteBoxAuthor.style.opacity = '0';

  setTimeout(() => {
    const q = quotes[quoteIndex];
    quoteBoxText.textContent = `"${q.text}"`;
    quoteBoxAuthor.textContent = `— ${q.author}`;
    quoteBoxText.style.opacity = '1';
    quoteBoxAuthor.style.opacity = '1';
  }, 180);
};

// ==========================================
// Fullscreen Countdown Timer (Task Duration -> 00:00:00)
// ==========================================
window.openFocusTimer = (taskIndex) => {
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);
  activeFocusTask = { ...tasks[taskIndex], index: taskIndex };

  focusTaskTitle.textContent = activeFocusTask.title;

  countdownTotalSeconds = (activeFocusTask.duration || 60) * 60;
  countdownRemainingSeconds = countdownTotalSeconds;

  updateCountdownDisplay();

  // Reset state for pre-start
  countdownRunning = false;
  if (countdownInterval) clearInterval(countdownInterval);

  startPauseTimerBtn.disabled = false;
  startPauseTimerBtn.classList.remove('opacity-60', 'cursor-not-allowed');
  startPauseTimerLabel.textContent = "Start Focus";
  startPauseTimerIcon.setAttribute('data-lucide', 'play');

  preStartExitBtn.classList.remove('hidden');
  deepLockNotice.innerHTML = `
    <i data-lucide="shield-alert" class="w-4 h-4" style="color: var(--primary);"></i>
    <span>Deep Lock Rule: Once started, you cannot exit until the timer reaches 00:00:00.</span>
  `;

  const q = quotes[quoteIndex];
  focusQuoteText.textContent = `"${q.text}"`;
  focusQuoteAuthor.textContent = `— ${q.author}`;

  fullscreenFocusModal.classList.remove('pointer-events-none', 'opacity-0');
  fullscreenFocusModal.classList.add('pointer-events-auto', 'opacity-100');
  lucide.createIcons();
};

window.closeFocusTimer = () => {
  if (countdownRunning) {
    alert("🔒 Deep Focus Lock Active: You cannot exit until the countdown hits 00:00:00.");
    return;
  }
  fullscreenFocusModal.classList.remove('pointer-events-auto', 'opacity-100');
  fullscreenFocusModal.classList.add('pointer-events-none', 'opacity-0');
};

const updateCountdownDisplay = () => {
  const hours = Math.floor(countdownRemainingSeconds / 3600);
  const minutes = Math.floor((countdownRemainingSeconds % 3600) / 60);
  const seconds = countdownRemainingSeconds % 60;

  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  countdownTimerDisplay.textContent = `${h}:${m}:${s}`;
};

window.toggleCountdownTimer = () => {
  if (!countdownRunning) {
    countdownRunning = true;

    preStartExitBtn.classList.add('hidden');
    startPauseTimerBtn.disabled = true;
    startPauseTimerBtn.classList.add('opacity-75', 'cursor-not-allowed');
    startPauseTimerLabel.textContent = "Focus Lock Engaged (Counting down...)";
    startPauseTimerIcon.setAttribute('data-lucide', 'lock');

    deepLockNotice.innerHTML = `
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
  lucide.createIcons();
};

window.finishTaskDirectly = () => {
  if (activeFocusTask !== null && activeFocusTask.index !== undefined) {
    toggleTask(activeFocusTask.index);
  }
  countdownRunning = false;
  fullscreenFocusModal.classList.remove('pointer-events-auto', 'opacity-100');
  fullscreenFocusModal.classList.add('pointer-events-none', 'opacity-0');
};

// ==========================================
// Schedule Importer Modal
// ==========================================
window.openImportModal = () => {
  document.getElementById('importModal').classList.remove('hidden');
  setTimeout(() => document.getElementById('importModal').classList.remove('opacity-0'), 10);
};

window.closeImportModal = () => {
  document.getElementById('importModal').classList.add('opacity-0');
  setTimeout(() => document.getElementById('importModal').classList.add('hidden'), 300);
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
        <span class="font-mono px-2 py-0.5 rounded text-[11px] font-bold shrink-0" style="background: var(--time-badge-bg); color: var(--time-badge-text); border: 1px solid var(--time-badge-border);">${format12Hour(item.startTime)} – ${format12Hour(item.endTime)}</span>
      `;
      listContainer.appendChild(div);
    });

    document.getElementById('commitImportBtn').disabled = false;
  } else {
    alert('No timestamped tasks found or all entries overlap existing slots.');
  }
  lucide.createIcons();
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

window.commitParsedSchedule = () => {
  if (parsedImportTasks.length === 0) return;
  const dateKey = formatDateKey(activeDate);
  const tasks = getTasksForDate(dateKey);

  tasks.push(...parsedImportTasks);
  saveTasksForDate(dateKey, tasks);

  closeImportModal();
  renderTasks();
  renderDayRibbon();

  confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 } });
};

// Synchronize Whole View
const updateView = () => {
  renderDayRibbon();
  renderTasks();
};

// Initialize View
updateView();
lucide.createIcons();
