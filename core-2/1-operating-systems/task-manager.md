# Task Manager

CompTIA A+ Core 2 — 220-1202  
Objective 1.4 — Given a scenario, use the appropriate Microsoft Windows 10/11 features and tools

## Lesson Overview

**Task Manager** is a built-in Windows utility that shows a **real-time** view of how the operating system is performing right now. It helps you see running programs, background work, hardware usage, startup apps, services, and who is connected to the computer.

When a PC is slow, frozen, noisy at login, or mysteriously busy even though “nothing is open,” Task Manager is often the first tool a technician opens. It answers practical questions: What is running? What is using CPU, memory, disk, or network? What starts automatically? Which service can I restart? Who else is using this machine?

## Learning Objectives

By the end of this lesson, you should be able to:

- Open Task Manager using multiple methods
- Explain what the Services, Startup, Processes, Performance, and Users areas show
- Start, stop, or restart a service from Task Manager
- Use Startup enable/disable to isolate boot-time problems
- Find which process is using the most CPU, memory, disk, network, or GPU
- Interpret Performance graphs covering roughly the last 60 seconds
- Identify connected users and disconnect access when appropriate

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Task Manager | Real-time Windows monitoring and control tool |
| Process | A program or background task currently running |
| Service | A Windows background component you can start, stop, or restart |
| Startup app | A program configured to launch when Windows starts |
| Performance graph | A short history (about 60 seconds) of hardware use |
| Users view | Shows local and network users connected to this computer |
| Disconnect user | Ends a user’s session/access from this computer |

## Opening Task Manager

| Method | How |
| --- | --- |
| Security screen | **Ctrl+Alt+Delete** → Task Manager |
| Taskbar | Right-click the taskbar → Task Manager |
| Fast shortcut | **Ctrl+Shift+Esc** — Task Manager opens immediately |

**Support scenario:** A user’s mouse barely moves, but the keyboard still works. Teach **Ctrl+Shift+Esc** so they can open Task Manager without hunting through menus.

## How Task Manager Helps Technicians

**Analogy:** Think of Task Manager like a restaurant manager’s board during a busy shift:

| Area | Restaurant view |
| --- | --- |
| Processes | Every order currently in the kitchen |
| Performance | How hot the ovens are and how full the fridges are over the last minute |
| Startup | What staff turn on automatically when the restaurant opens |
| Services | Background systems (water, power, POS) you can restart |
| Users | Everyone using the restaurant’s resources, even if they are not standing at the counter |

## Task Manager Areas

### Services

The **Services** area lists Windows services on the computer. You can also open a fuller Services tool from Control Panel / the Services applet, but Task Manager is a quick front end.

From here you can:

- See services on this computer
- Right-click a service to **start**, **stop**, or **restart** it
- Launch the Services applet for more options

**Support scenario:** Print jobs are stuck. Restart the print spooler service from Task Manager (or the Services applet) before reimaging the PC.

### Startup

Many apps launch automatically when Windows starts. The **Startup** area manages that list.

When a problem happens during startup or right after login:

1. Disable one startup app, or disable several
2. Restart and test
3. Turn apps back on one at a time, or in groups
4. When the problem returns, you have found the startup item to leave disabled

Right-click an entry to **enable** or **disable** it for the next boot.

**Safety note:** Disabling a startup item does **not** uninstall the app. It only stops automatic launch.

**Support scenario:** After login, the desktop takes two minutes to appear and a chat tray icon floods the screen. Disable startup apps, retest, then re-enable in small groups.

### Processes

The **Processes** area is a live list of what is running now:

- Apps on the Windows desktop
- Background processes

Default metrics typically include:

- CPU
- Memory
- Disk
- Network
- GPU
- Other metrics

You can rearrange columns, sort them, and right-click to add more metrics. Sorting is how you find the app using the most memory or the most network.

**Support scenario:** “The internet is fine on my phone, but this PC crawls.” Sort Processes by Network or Disk to see whether a backup client or browser tab is saturating resources.

### Performance

The **Performance** area shows hardware use as graphs, usually covering about the **last 60 seconds**.

| Graph | What it tells you |
| --- | --- |
| CPU | Processor utilization |
| Memory | RAM in use |
| Disk | Storage activity |
| Network | Network activity |
| GPU | Graphics processor use (when available) |

Exact left-side metrics can vary by PC configuration. Use this historical view to decide whether a complaint looks like CPU, memory, disk, network, or GPU pressure.

**Support scenario:** A user says the PC “freezes when I open photos.” Performance shows Disk or GPU spikes while CPU stays low — that points investigation toward storage or graphics, not “reinstall Windows first.”

### Users

Windows is a **multi-user** operating system. People can log on locally, and others can use resources on this computer over the network. You might be the only person at the desk while many others are connected remotely.

The **Users** area shows:

- Who is connected
- Which apps or resources they are using

From this view you can **disconnect** a user and remove their access.

**Support scenario:** A shared office PC is slow, and Task Manager Users shows several remote sessions. Confirm with policy before disconnecting people — then disconnect stale sessions if authorized.

## Comparison Table

| You need to… | Use this area |
| --- | --- |
| Restart a Windows service | Services |
| Stop an app from launching at boot | Startup |
| See what is running right now | Processes |
| Watch CPU or memory over the last minute | Performance |
| See who is logged on or using this PC | Users |
| Kick a remote user off | Users → disconnect |

## CompTIA Exam Connections

Objective alignment (course map / CertMaster Module 14.3 Performance Tools): Task Manager as a core Windows monitoring tool under objective 1.4.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Fastest way to open Task Manager | Ctrl+Shift+Esc |
| App slows the PC right after login | Startup — disable and retest |
| Which program is using the most RAM? | Processes — sort by Memory |
| CPU has been high for the last minute | Performance |
| Restart the print spooler from a quick view | Services — restart |
| Someone is connected over the network | Users — view or disconnect |

### BEST / MOST likely wording

- If the problem appears **immediately after sign-in**, Startup isolation is often the BEST first step — not a clean install.
- If you need to know **which program** is heavy right now, Processes (sorted) is MORE useful than Performance alone.
- If you need a **trend over the last minute**, Performance graphs are the BEST quick view.

## Common Mistakes and Misconceptions

- **“Processes and Services are the same list.”** Processes are running apps and background tasks. Services are Windows service components you start, stop, or restart.
- **“Disabling Startup uninstalls the app.”** It only prevents automatic launch at boot.
- **“The Users view only shows the person at the keyboard.”** It can also show people using this computer’s resources over the network.
- **“High CPU on Performance always means malware.”** It means something is using the CPU — identify the process before jumping to conclusions.
- **“End Task is always safe.”** Ending the wrong process can close unsaved work or stop a needed system function. Prefer graceful close when possible; use End Task carefully.

## Quick Review

| Topic | Remember |
| --- | --- |
| Open it | Ctrl+Shift+Esc, Ctrl+Alt+Delete, or right-click the taskbar |
| Services | Start, stop, restart |
| Startup | Enable or disable boot apps to isolate login problems |
| Processes | Live apps plus CPU, memory, disk, network, GPU |
| Performance | Graphs for about the last 60 seconds |
| Users | Who is connected — and you can disconnect them |

---

## Continue Learning

- Next Topic: [The Microsoft Management Console](the-microsoft-management-console.md)
- Related: [The Windows Control Panel](the-windows-control-panel.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
