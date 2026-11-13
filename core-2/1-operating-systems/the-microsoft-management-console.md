# The Microsoft Management Console

CompTIA A+ Core 2 — 220-1202  
Objective 1.4 — Given a scenario, use the appropriate Microsoft Windows 10/11 features and tools

## Lesson Overview

The **Microsoft Management Console (MMC)** is an empty Windows framework (`mmc.exe`) that administrators fill with admin tools called **snap-ins**. Instead of hunting for Event Viewer, Disk Management, Device Manager, and other utilities one by one, you can build one console that holds the tools you use most — then save that layout and reopen it later.

Help desk and desktop support work constantly jumps between logs, disks, drivers, local users, certificates, scheduled tasks, and performance history. MMC is the “toolbox shell.” Many of the same tools also launch alone through an `.msc` file.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what MMC is and how snap-ins work
- Build, save, and reopen a custom management console
- Distinguish MMC from individual administrative tools
- Use Event Viewer, Disk Management, Task Scheduler, Device Manager, Certificate Manager, Local Users and Groups, and Performance Monitor at a technician level
- Compare Task Manager’s short live view with Performance Monitor’s long-term history
- Distinguish **local** administration (`gpedit.msc`, local users) from **domain** administration (`gpmc.msc`, Active Directory)

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| MMC | Microsoft Management Console — a shell for admin tools |
| Snap-in | An admin tool you add into an MMC console |
| `.msc` file | A saved console or standalone management tool shortcut |
| Event Viewer | Windows log viewer (Application, Security, Setup, System, and more) |
| Disk Management | View and change disks, partitions, and volumes |
| Task Scheduler | Runs programs on a schedule or trigger |
| Device Manager | Hardware and device-driver status |
| Certificate Manager | View and manage certificates on the computer |
| Local Users and Groups | Local accounts and groups on **this** PC |
| Performance Monitor | Long-term resource counters, alerts, and reports |
| Local Group Policy Editor | Policy settings for one computer (`gpedit.msc`) |
| Group Policy Management Console | Central domain Group Policy tool (`gpmc.msc`) |
| BitLocker | Full-volume encryption you may see on Windows volumes |
| VSS | Volume Shadow Copy Service — often appears in Application log events |

## What MMC Is (and Is Not)

**Analogy:** MMC is an empty toolbox. A snap-in is one tool you drop in. A saved console is your labeled toolbox ready for the next ticket. An `.msc` launch is opening one tool by itself outside the full toolbox.

| Piece | Meaning |
| --- | --- |
| Empty console | The toolbox before you add anything |
| Snap-in | Event Viewer, Disk Management, Device Manager, and so on |
| Saved console | Your custom toolkit layout |
| Standalone `.msc` | One tool opened directly |

MMC is **not** “just another tool like Event Viewer.” Event Viewer is a snap-in. MMC is the container.

Some snap-ins manage **this computer**. Others can connect to **another computer on the network** when you add them. That still is not the same as full domain-wide Active Directory administration.

## Building a Custom Console

### Steps

1. Run **mmc** (or `mmc.exe`).
2. Approve User Account Control if Windows asks to make changes.
3. Choose **File → Add/Remove Snap-in**.
4. Add tools such as Computer Management, Device Manager, Disk Management, or Event Viewer.
5. When prompted, choose **this computer** or another computer on the network (if the snap-in supports it).
6. Choose **File → Save** so you can reopen the same layout later.

Click a snap-in on the left to use that tool.

**Expected outcome:** One console window with your selected tools listed, ready for repeated use on similar tickets.

**Support scenario:** A desktop tech builds a “break/fix” console with Event Viewer, Device Manager, Disk Management, and Local Users and Groups, saves it to their profile, and opens it on every new loaner PC setup.

## Useful Launch Commands

You do not always need a custom console. Many tools open directly:

| Tool | Command |
| --- | --- |
| Event Viewer | `eventvwr.msc` |
| Disk Management | `diskmgmt.msc` |
| Task Scheduler | `taskschd.msc` |
| Device Manager | `devmgmt.msc` |
| Certificate Manager | `certmgr.msc` |
| Performance Monitor | `perfmon.msc` |
| Local Group Policy Editor | `gpedit.msc` |
| Group Policy Management (domain) | `gpmc.msc` |

## Core Snap-Ins Technicians Use

### Event Viewer

Event Viewer is the Windows log viewer. Common Windows logs:

| Log | Typical contents |
| --- | --- |
| Application | App and some service messages |
| Security | Logons and audits |
| Setup | Install and setup activity |
| System | Windows, driver, and service events |

Event levels include informational, warning, error, critical, successful audit, and failure audit.

Logs can contain thousands of entries. **Filter** the current log by level, source, keywords, user, or computer. Example: an Application log entry from **VSS** (Volume Shadow Copy Service) can show an error and details about that service.

**Support scenario:** A backup failed overnight. Filter Application log for errors around the backup window instead of scrolling every informational message.

### Disk Management

Disk Management shows installed drives, partitions, and file systems.

A typical Windows disk may show:

| Partition | What you often see |
| --- | --- |
| Recovery | No drive letter — used for recovery |
| EFI system | No drive letter — used during startup |
| C: | Main OS volume — often **NTFS**, may be **BitLocker** encrypted, marked healthy / boot / page file / crash dumps |

Right-click a volume to change the drive letter or path, **shrink** the volume, **extend** it if free space exists, or **mirror** data across physical drives when that option applies.

**Safety:** Backup first. Partition and volume changes can delete data. Confirm the disk number and volume letter before you click.

**Support scenario:** A user needs a second volume for media. Shrink C: only after confirming free space, backups, and that recovery/EFI partitions without letters are normal — not “missing drives.”

### Task Scheduler

Task Scheduler runs a program at a date and time, or on a repeating schedule. Windows includes many predefined tasks. You can organize tasks in folders.

The main view shows tasks that ran recently (for example last 24 hours; you can widen that to 7 or 30 days). The Task Scheduler Library lists configured tasks.

A task is built from:

| Part | Meaning |
| --- | --- |
| Triggers | When it runs |
| Actions | What it runs |
| Conditions | Extra requirements before it runs |
| Settings | Extra behavior for that task |

Create a task from the Actions pane: name, program, schedule, conditions, and settings.

**Support scenario:** Finance needs a nightly export script. Create a Task Scheduler job with a daily trigger and confirm it appears in the last-24-hours history after the first run.

### Device Manager

Device Manager shows how Windows talks to hardware through **device drivers**. Drivers are usually written for the OS you are running (Windows 10 drivers for Windows 10, Windows 11 drivers for Windows 11). Some drivers support more than one OS, but most installs are OS-specific.

Hardware is grouped (printers, display adapters, keyboards, monitors, and so on). Open a device to see driver details, recent events, and resources.

Right-click a device to **update**, **disable**, or **uninstall** the driver. Many devices also have their own installer from the vendor.

**Support scenario:** A USB dock shows a yellow warning. Open Device Manager, identify the failing device, update or reinstall the vendor driver, then retest.

### Certificate Manager

Certificates identify a computer or support encryption. Certificate Manager lets you add, remove, or view installed certificates.

A common check: **Trusted Root Certification Authorities → Certificates**. Open a certificate to read its details. Browsers use these trusted CAs when deciding whether a site certificate is trusted.

**Support scenario:** A secure site fails trust checks on one PC only. Compare Trusted Root CAs and recent certificate changes before blaming the website.

### Local Users and Groups

Windows can have many users, including people who connect over the network. Local Users and Groups sets rights by user and by group on **this computer**.

| Built-in idea | Meaning |
| --- | --- |
| Administrator | Full local admin account |
| Guest | Limited built-in guest account |
| Regular user | A normal local account |
| Groups | Administrators, Users, Backup Operators, Power Users, and others |

You can add users and groups. Right-click and choose **New User** to create another local account.

**Critical distinction:** This tool edits **local** accounts. It is not the full Active Directory users-and-computers directory used for domain identity.

**Support scenario:** A kiosk PC is not domain-joined. Create a limited local user and put the help-desk account in the local Administrators group — without confusing that with domain group membership.

### Performance Monitor

Task Manager’s Performance view is a short, live look (about the last minute). **Performance Monitor** collects metrics over hours, days, or weeks so you can study a problem after it is gone.

You can track many counters (disk, memory, CPU, and more), set alerts when a level is crossed, store the data, and build reports.

Default views often include memory, network, physical disk, and processor. Add counters with the plus sign — for example under **Processor**. Do not add every counter at once. Leave collection running, then return to the history when the problem happens again.

**Support scenario:** “The PC was slow last night, but it’s fine now.” Task Manager cannot show last night. Performance Monitor history can.

## Local Administration vs Domain Administration

| Need | Tool / approach |
| --- | --- |
| Policies on **this one computer** | Local Group Policy Editor (`gpedit.msc`) |
| Central policies for many domain PCs/users | Group Policy Management Console (`gpmc.msc`) in Active Directory |
| Accounts on this PC only | Local Users and Groups |
| Organization-wide identity | Active Directory (not Local Users and Groups) |

Local Computer Policy splits into **Computer Configuration** and **User Configuration**. Under User Configuration → Administrative Templates, desktop settings can hide or disable desktop items so a user logs on to an empty desktop.

**Support scenario:** Hide desktop icons on one lab PC → local Group Policy. Enforce the same lock-down on 200 domain PCs → domain Group Policy Management.

## Comparison Table

| Need | Tool |
| --- | --- |
| One screen with several admin tools | MMC + snap-ins |
| “What failed yesterday?” | Event Viewer (filter the log) |
| See partitions and file systems | Disk Management |
| Run a job every morning | Task Scheduler |
| Bad or missing driver | Device Manager |
| Which CAs does this PC trust? | Certificate Manager |
| Add a local user or group | Local Users and Groups |
| CPU was high last night | Performance Monitor |
| Lock down one PC’s desktop | `gpedit.msc` |
| Lock down many domain PCs | `gpmc.msc` |

## CompTIA Exam Connections

Coverage aligns with course-map / CertMaster management-console topics under objective 1.4 and the Professor Messer MMC transcript. This is not a claim of official CompTIA item-bank verification.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Build a custom admin toolkit | `mmc` and add snap-ins |
| Application log shows an error | Event Viewer — filter it |
| EFI and recovery partitions have no drive letter | Normal OS startup/recovery partitions |
| Shrink or extend C: | Disk Management — back up first |
| Run a cleanup every night | Task Scheduler |
| Update or disable a driver | Device Manager |
| Trusted root CAs | Certificate Manager |
| Problem already ended | Performance Monitor, not only Task Manager |
| Policy for this PC only | Local Group Policy Editor |
| Policy for the whole domain | Group Policy Management Console |

### BEST / MOST likely wording

- If the issue already ended and you need history, Performance Monitor is BETTER than Task Manager alone.
- If the question is about accounts on one non-domain PC, Local Users and Groups is MORE likely than Active Directory tools.
- If the question is organization-wide desktop lock-down, domain Group Policy (`gpmc.msc`) is MORE likely than local-only `gpedit.msc`.

## Common Mistakes and Misconceptions

- **“MMC is one of the tools, like Event Viewer.”** MMC is the container. The others are snap-ins.
- **“Task Manager and Performance Monitor do the same job.”** Task Manager is a short live view. Performance Monitor keeps history.
- **“Local Users and Groups edits Active Directory.”** It edits local accounts on this PC.
- **“Every partition should have a drive letter.”** Recovery and EFI partitions are often hidden on purpose.
- **“Any snap-in always manages the whole domain.”** Many snap-ins are local-first; domain tools are separate.

## Quick Review

| Topic | Remember |
| --- | --- |
| MMC | Empty console; add snap-ins; save it |
| Logs | Event Viewer — filter Application, Security, Setup, System |
| Disks | Disk Management — backup before you change partitions |
| Schedule | Task Scheduler — triggers, actions, conditions |
| Drivers | Device Manager — usually OS-specific |
| Certificates | Certificate Manager — trusted root CAs |
| Accounts | Local users and groups (not AD by itself) |
| History | Performance Monitor for long-term counters and alerts |
| Policy | `gpedit.msc` local; `gpmc.msc` domain |

---

## Continue Learning

- Previous Topic: [Task Manager](task-manager.md)
- Next Topic: [Additional Windows Tools](additional-windows-tools.md)
- Related: [The Windows Control Panel](the-windows-control-panel.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
