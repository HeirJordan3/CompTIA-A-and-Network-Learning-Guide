# Additional Windows Tools

CompTIA A+ Core 2 — 220-1202  
Objective 1.4 — Given a scenario, use the appropriate Microsoft Windows 10/11 features and tools

## Lesson Overview

Besides Task Manager and MMC snap-ins, Windows includes several troubleshooting utilities technicians open constantly: **System Information**, **Resource Monitor**, **System Configuration**, **Disk Cleanup**, **disk optimize/defrag**, and **Registry Editor**.

Some of these tools only **report** what is on the computer. Others **change** startup behavior, free disk space, or edit deep configuration. Knowing which tool answers which question — and which changes are dangerous — is a core help desk skill.

## Learning Objectives

By the end of this lesson, you should be able to:

- Use System Information (`msinfo32`) as a read-only overview of an unfamiliar PC
- Use Resource Monitor (`resmon`) for detailed live CPU, memory, disk, and network activity
- Configure startup behavior with System Configuration (`msconfig`), including Safe boot
- Free space safely with Disk Cleanup (`cleanmgr`)
- Explain when defragmentation/optimize helps HDDs and why SSDs are different
- Open Registry Editor (`regedit`) safely, including backup/export before changes
- Compare tools students commonly confuse (Task Manager vs Resource Monitor vs Performance Monitor; msconfig Startup vs Task Manager Startup)

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| msinfo32 | System Information — read-only hardware/software overview |
| DMA | Direct Memory Access — hardware can move data without constant CPU babysitting |
| IRQ | Interrupt request line used by hardware to get the CPU’s attention |
| resmon | Resource Monitor — detailed live resource view |
| msconfig | System Configuration — controls how Windows starts |
| Safe boot | A limited Windows startup mode used for troubleshooting |
| cleanmgr | Disk Cleanup — deletes selected temporary and junk file categories |
| Defragmentation | Rewriting scattered file pieces into contiguous layout on a spinning HDD |
| SSD | Solid-state drive — no spinning platter; classic defrag is not the goal |
| regedit | Registry Editor |
| HKEY | “Handle to registry key” — a top-level registry folder |
| Hive | A section of the registry you can export and restore |

## How These Tools Fit Together

**Analogy:**

| Tool | Like |
| --- | --- |
| System Information | A spec sheet you can read but not edit |
| Resource Monitor | A live dashboard with more gauges than Task Manager |
| System Configuration | The startup checklist |
| Disk Cleanup | Emptying trash and temp folders on purpose |
| Defrag / Optimize | Putting scattered pages of a book back in order on a spinning disk |
| Registry Editor | The master settings cabinet — copy a drawer before you change it |

## System Information (`msinfo32.exe`)

A fast overview of a machine you do not know yet. You **cannot change** settings here. You only look.

**How to open:** Search for **System Information**, or run `msinfo32.exe`.

**System summary** shows OS name and version, processor, BIOS, boot device, available memory, and free file space.

| Category | What you find |
| --- | --- |
| **Hardware resources** | Memory, DMA, IRQs, I/O, conflicts or sharing problems |
| **Components** | Display, sound, network (adapter, protocol, Winsock), storage (drives, disks, IDE/SATA) |
| **Software environment** | System drivers, print jobs, services, program groups, running tasks |

**Expected outcome:** One place to inventory hardware and software without opening many separate utilities.

**Support scenario:** You sit down at an unfamiliar loaner laptop. Open `msinfo32` first to learn OS version, RAM, BIOS, and storage before guessing.

## Resource Monitor (`resmon.exe`)

Resource Monitor sits between two tools you already know:

| Tool | View |
| --- | --- |
| Task Manager | Short, real-time summary |
| Performance Monitor | Long-term history |
| **Resource Monitor** | Real-time view **plus** detailed per-resource stats |

Overview breaks down **CPU**, **memory**, **disk**, and **network**, including related services. Tabs give a closer look at each category. Use it when you need to see what **one application** is doing with a specific resource.

**How to open:** Search for Resource Monitor, or run `resmon.exe`.

**Support scenario:** Task Manager shows high Disk activity, but you need the exact process and file paths. Resource Monitor Disk tab shows which process is hammering the drive.

## System Configuration (`msconfig.exe`)

System Configuration controls what happens behind the Windows splash screen and login prompt.

**How to open:** Search for **System Configuration**, or run `msconfig.exe`.

| Tab | What it does |
| --- | --- |
| **General** | Normal startup, diagnostic startup, or selective startup |
| **Boot** | Which OS starts if more than one is installed; **Safe boot** and Safe boot type; hide GUI; create a boot log; other boot options |
| **Services** | Which services start with the computer |
| **Startup** | Older home for login apps; that list now lives in **Task Manager** |
| **Tools** | Launch Event Viewer, Internet Options, Task Manager, Resource Monitor, and other utilities |

### Safe boot troubleshooting pattern

1. Open `msconfig`.
2. On the **Boot** tab, enable **Safe boot** and choose the needed Safe boot type.
3. Apply / OK and restart into Safe Mode.
4. Test whether the problem still happens in the limited environment.
5. Open `msconfig` again → **Boot** tab → clear the **Safe boot** check box.
6. On the **General** tab, confirm **Normal startup** is selected (or restore your intended selective startup).
7. Apply / OK and restart to return to a normal Windows session.

**Safety:** If you leave Safe boot enabled, the PC keeps booting into Safe Mode. Always disable Safe boot and confirm Normal startup after testing.

**msconfig vs Task Manager:** Use `msconfig` for startup mode / Safe boot / service startup choices. Manage modern login apps from **Task Manager → Startup**, not the older msconfig Startup list.

**Support scenario:** A third-party overlay crashes Explorer after login. Use diagnostic/Safe boot to isolate whether the issue is a normal-startup component.

## Disk Cleanup (`cleanmgr.exe`)

Disk Cleanup groups files you can delete when a drive is full.

**How to open:** Search for Disk Cleanup, or run `cleanmgr.exe`.

Common categories:

- Downloaded program files
- Temporary internet files
- Windows error reports
- Recycle Bin
- Temporary files

Selecting a category updates how much space you will free. Confirm before Windows permanently deletes the files.

**Expected outcome:** More free space on the selected volume after confirmed deletion.

**Support scenario:** C: has 1 GB free and Windows Update fails. Run Disk Cleanup (and related Windows Update cleanup options if offered) before blaming the updater itself.

## Disk Defragmentation / Optimize

On a spinning hard drive, one file can be stored in many scattered pieces. **Defrag** pulls those pieces into a more contiguous layout so mechanical reads/writes are faster.

| Drive type | What “optimize” usually means |
| --- | --- |
| Spinning hard drive (HDD) | Classic **defragmentation** — consolidate scattered pieces for faster mechanical access |
| Solid-state drive (SSD) | Not classic defrag for speed — Windows may still offer **Optimize**, which is a different maintenance action (not “defrag the SSD like an HDD”) |

**How to open:** Drive Properties → Optimize / defragment, or use the **defrag** command and name the volume.

The tool can analyze first. A drive that is already about **98%** efficient usually does not need an HDD optimize/defrag pass. Windows can also analyze and optimize on a schedule (often weekly). You can change that schedule in the utility.

**Support scenario:** An old desktop with an HDD feels slow after years of use. Analyze, then defragment/optimize the HDD. Do **not** tell users to “defrag the SSD” as if it were a spinning disk fragmentation problem.

## Registry Editor (`regedit.exe`)

Windows stores a huge amount of configuration in the **registry**: kernel settings, services, application options, and more.

**How to open:** Search for Registry Editor, or run `regedit.exe`.

User Account Control asks for confirmation because registry edits can seriously change the system. Approve only when you intend to edit.

The window starts with folders on the left. Each top folder begins with **HKEY**:

| Key | Short name |
| --- | --- |
| `HKEY_CLASSES_ROOT` | Classes root |
| `HKEY_CURRENT_USER` | Current user |
| `HKEY_LOCAL_MACHINE` | This computer (a common place for software settings) |
| `HKEY_USERS` | Users |
| `HKEY_CURRENT_CONFIG` | Current config |

Entries have a **name**, a **type**, and **data**. Example path: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion`. Changing a value often needs a restart before Windows uses it.

### Safety procedure before editing

1. Confirm you are on the correct computer and user profile (`hostname` / signed-in account).
2. Navigate to the **exact key** you will change (select that folder in the left pane).
3. **File → Export**.
4. Choose a safe filename and location (for example a USB or Documents backup folder).
5. Set **Export range** to **Selected branch** for that key (or a wider range only if you intentionally need a larger backup).
6. Save the `.reg` file before changing anything.
7. Make the smallest change necessary.
8. Restart if needed and test.
9. If something breaks, double-click/import the exported `.reg` file (or merge it) to write the previous values back — then reboot if required.

**Warning:** Wrong registry edits can break applications or Windows itself. Do not browse and edit randomly. Prefer documented vendor/Microsoft guidance, and keep the export until the ticket is closed.

**Support scenario:** A vendor instructs a one-key registry change for an app crash. Export the selected branch first, make the change, reboot, and keep the `.reg` backup until the ticket is closed.

## Comparison Table

| Need | Tool |
| --- | --- |
| Specs of an unfamiliar PC | System Information (`msinfo32`) |
| Which process is hitting the disk right now | Resource Monitor (`resmon`) |
| Boot into Safe Mode next time | System Configuration → Boot |
| Stop a program from starting at login | Task Manager Startup (not the old msconfig list) |
| Delete temp files and empty the Recycle Bin | Disk Cleanup (`cleanmgr`) |
| Speed up a fragmented HDD | Defrag / Optimize |
| “Speed up” an SSD by defragging | Do not treat it like an HDD fragmentation fix |
| Change a deep Windows setting | Registry Editor — export first |

## CompTIA Exam Connections

Coverage aligns with course-map / CertMaster additional Windows tools topics under objective 1.4 and the Professor Messer Additional Windows Tools transcript. Not an official exam-item guarantee.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Read-only hardware, components, and software list | `msinfo32` |
| Live CPU, disk, network, and memory detail | `resmon` |
| Choose Safe boot or diagnostic startup | `msconfig` |
| Startup apps moved out of System Configuration | Task Manager → Startup |
| Free space from temp files | `cleanmgr` |
| “Defrag the SSD” | Do not — classic defrag is for HDDs |
| Edit configuration stored by Windows | `regedit` — export/backup first |
| HKEY_LOCAL_MACHINE | Registry key for this computer |

### BEST / MOST likely wording

- If you only need to **inventory** a PC, System Information is BETTER than editing tools.
- If you need **live detail beyond Task Manager**, Resource Monitor is MORE useful than Performance Monitor history alone.
- If startup apps are the issue on modern Windows, Task Manager Startup is MORE likely than the old msconfig Startup list.

## Common Mistakes and Misconceptions

- **“System Information is where you change drivers.”** It is view-only. Change drivers in Device Manager.
- **“Resource Monitor replaces Performance Monitor.”** Resource Monitor is detailed and live. Performance Monitor is for long-term history and alerts.
- **“Always defragment every drive.”** Defrag helps spinning hard drives. SSDs are not managed the same way.
- **“The registry is safe to click through and edit.”** A wrong change can break Windows. Export first.
- **“msconfig Startup is still the main place for login apps.”** That list moved to Task Manager Startup on modern Windows.

## Quick Review

| Topic | Remember |
| --- | --- |
| System Information | `msinfo32` — summary, hardware, components, software; no edits |
| Resource Monitor | `resmon` — live CPU, memory, disk, network detail |
| System Configuration | `msconfig` — startup type, Safe boot, services; Startup points to Task Manager |
| Disk Cleanup | `cleanmgr` — delete temps and similar files on purpose |
| Defrag | HDDs only for classic fragmentation relief; analyze first |
| Registry | `regedit` — HKEY folders; export a hive before changes |

---

## Continue Learning

- Previous Topic: [The Microsoft Management Console](the-microsoft-management-console.md)
- Next Topic: [Windows Command Line Tools](windows-command-line-tools.md)
- Related: [Task Manager](task-manager.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
