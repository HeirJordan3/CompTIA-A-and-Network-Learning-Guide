# Windows Command Line Tools

CompTIA A+ Core 2 — 220-1202  
Objective 1.5 — Given a scenario, use the appropriate Windows command-line tools

## Lesson Overview

The **Windows command line** lets you type commands to inspect and change a computer instead of clicking through menus. For this lesson, the core tool is **Command Prompt** (`cmd`). Search for **cmd**, then open a normal prompt or an **elevated** (administrator) prompt.

Technicians use the command line to navigate folders, repair file systems, confirm which computer and user they are on, refresh Group Policy, and repair protected Windows files. The same window can also destroy data if you run **format**, **diskpart**, or the wrong `chkdsk` target. Confirm the machine, volume, and privileges before you change anything.

## Learning Objectives

By the end of this lesson, you should be able to:

- Open normal and elevated Command Prompt sessions
- Contrast Command Prompt with PowerShell at a beginner level
- Use help, directory navigation, and folder create/remove commands
- Run `chkdsk`, understand `/f` vs `/r`, and recognize reboot-required scans
- Explain why `format` and `diskpart` are high-risk and require elevation
- Compare `copy` and `robocopy`
- Identify the computer, Windows version, and user with `hostname`, `winver`, and `whoami`
- Refresh and verify Group Policy with `gpupdate` and `gpresult`
- Repair protected system files with `sfc /scannow`
- Distinguish informational commands from commands that modify the system

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Command Prompt | The classic Windows `cmd` text shell |
| PowerShell | A newer Microsoft shell and scripting environment (separate from `cmd`) |
| Elevated prompt | Command Prompt running as administrator |
| Working directory | The folder commands use unless you type a full path |
| `..` | The parent folder |
| chkdsk | Check Disk — file-system repair; `/r` also scans sectors |
| format | Erase and initialize a partition with a file system |
| diskpart | Command-line disk, partition, and volume tool |
| copy / robocopy | Simple file copy vs robust copy with more options |
| hostname | This computer’s Windows name |
| winver | Windows version dialog |
| whoami | Current user and security context |
| gpupdate / gpresult | Refresh Group Policy / show what applied |
| RSOP | Resultant set of policy — the effective policy result |
| sfc | System File Checker |

## Command Prompt vs PowerShell

| Topic | Command Prompt (`cmd`) | PowerShell |
| --- | --- | --- |
| What it is | Classic Windows command shell | Modern shell + scripting platform |
| Typical use in this lesson | The commands below (`dir`, `chkdsk`, `sfc`, and so on) | Broader scripting/admin automation (covered more deeply in other courses/tools) |
| How beginners start | Search **cmd** | Search **PowerShell** |
| Elevation | Run as administrator when changing the system | Also has elevated sessions when needed |

**Source note:** The Professor Messer Objective 1.5 transcript for this lesson focuses on **Command Prompt** utilities. PowerShell is included here as a clarity distinction so beginners do not treat every blue/black text window as identical. This lesson’s command coverage follows the `cmd` curriculum.

**Analogy:** Command Prompt is a service elevator with labeled buttons for specific jobs. An elevated prompt means you have the building keys. PowerShell is a different, more programmable elevator system in the same building.

## Opening the Prompt and Using Elevation

| Way | Result |
| --- | --- |
| Search **cmd** → Open | Normal rights |
| Run as administrator | Elevated prompt |
| Right-click Command Prompt → Run as administrator | Elevated prompt |
| **Ctrl+Shift+Enter** after selecting it | Elevated prompt |

You must be in the **Administrators** group to elevate. Normal rights cover most lookups. Changing OS configuration or repairing disks needs elevation.

The prompt shows your current folder, for example `C:\Users\alex`.

### Informational vs modifying commands

| Usually informational / low risk | Can modify or erase — elevate and verify first |
| --- | --- |
| `help`, `dir`, `cd`, `hostname`, `winver`, `whoami`, `gpresult /r` | `chkdsk /f` or `/r`, `format`, `diskpart` changes, `copy`/`robocopy` overwrites, `gpupdate /force`, `sfc /scannow`, `md`/`rd` |

## Getting Help

| Command | What you get |
| --- | --- |
| `help` | List of commands at this prompt |
| `help dir` | Help for one command |
| `dir /?` | Same style of help, asked from the command itself |

**Ctrl+C** can stop a long listing.

**Support scenario:** You forget `robocopy` switches on a ticket. Run `robocopy /?` instead of guessing.

## Looking at Files and Folders

**`dir`** lists files and directories in the current folder. You can also give a drive and path to list somewhere else. Directories are marked `DIR`.

Every command uses your **current working directory** unless you type a full path.

| Command | Action |
| --- | --- |
| `cd` or `chdir` | Change directory |
| `cd ..` | Go up one folder |
| `md` or `mkdir` | Make a directory |
| `rd` or `rmdir` | Remove a directory |

`cd` accepts a folder name in the current location, or a full path. **Tab** can autocomplete a name. `md` and `rd` often return you to the prompt with no extra message — run `dir` to confirm.

Paths use a **backslash** (`\`) between the drive and each folder:

`C:\Users\alex\Documents`

**C:** is usually the Windows system drive. File Explorer’s Local Disk (C:) is the same tree you see at the prompt.

**Support scenario:** A script fails because it ran from the wrong folder. Check the prompt path, use `cd` to the correct directory, then re-run.

## Check Disk (`chkdsk`)

A file system such as **NTFS** can get out of sync with the files on the drive after a power loss or a disk problem. **chkdsk** compares the index to the files.

| Switch | What it does |
| --- | --- |
| `chkdsk /f` | Fix file-system problems |
| `chkdsk /r` | Sector-by-sector check, recover readable data, **and** do the `/f` fixes |

`/r` takes much longer because it tests the whole drive. Both need an **administrator** prompt.

If the volume is in use, Windows cannot check it now. It offers to run the scan at the **next restart**. During boot you see a scanning and repairing progress display, then Windows continues to start.

**Expected outcome:** File-system inconsistencies repaired; with `/r`, a longer sector scan completes. On the system drive, expect a reboot-scheduled run.

**Safety:** Confirm the drive letter. Do not schedule `/r` on the wrong volume “just to see.”

## Format

**format** initializes a partition with a file system so it can store files. Example: `format K:` formats the volume whose letter is K.

**File-system choice matters.** You can specify a file system explicitly (for example `/fs:NTFS` or `/fs:exFAT`). If you omit the file-system argument, Command Prompt `format` commonly defaults to **FAT32** in the training material for this objective — treat that as the classic exam teaching point for this utility, **not** a universal Windows rule.

Defaults can differ by tool and context:

| Context | Remember |
| --- | --- |
| Command Prompt `format` without `/fs` | Training point: often defaults to FAT32 |
| Windows Setup / Disk Management / other tools | May offer or default to a different file system (commonly NTFS for Windows system volumes) |
| Removable media | Best practice is to choose the file system on purpose (FAT32, exFAT, or NTFS) rather than assuming a default |

Always confirm the selected file system in the command help (`format /?`) or GUI before you erase a volume. The command reports size and result when it finishes.

**Safety — destructive command:**

- Format **erases the partition contents**.
- Run it only as an administrator.
- Confirm the computer with `hostname` and the volume letter before you press Enter.
- Have a backup if any data matters.
- Prefer GUI Disk Management for beginners when uncertainty is high.

## DiskPart

**diskpart** is the command-line tool for listing and working with disks, partitions, and volumes. It must run elevated. If you start it from a normal prompt, User Account Control asks for approval and opens an administrator window.

Useful list commands:

- `list disk`
- `list partition`
- `list volume`
- `list vdisk`

A typical `list volume` view might show an optical drive, the **C:** NTFS boot volume, a hidden recovery partition, and a small system partition.

**Safety:** You can also format or change partitions from here. Treat every modifying `diskpart` command as potentially destructive. Prefer `list` commands first.

**Support scenario:** Confirm whether a USB stick is Disk 1 or Disk 2 before any clean/format action. A wrong disk selection can wipe the internal drive.

## Copy and Robocopy

**copy** duplicates a file. You name the source, then the destination.

| Switch | Meaning |
| --- | --- |
| `/v` | Verify the new file was written correctly |
| `/y` | Overwrite the destination **without asking** |

If the destination file already exists, copy asks before it overwrites unless you used `/y`. That matters in a batch file that runs when nobody is there to press Y. Answer carefully: Yes overwrites that file; All overwrites every file in that command.

**robocopy** (robust copy) has many more options. Run `robocopy /?` to see them. Useful capabilities include:

- Copy or skip subdirectories
- **Throttle** bandwidth so a large copy does not fill a slow link
- **Retry** if the network drops, then continue

**Support scenario:** Copying a large share over a WAN: prefer `robocopy` with retry/throttle rather than a simple `copy` that fails halfway with no resume strategy.

## Know Which Window You Are In

Several prompts can be open at once. Confirm the machine before you restart it or change it.

| Command | Tells you |
| --- | --- |
| `hostname` | Windows device name |
| `winver` | A dialog with the Windows version (for example Windows 11), version number, and licensing details |
| `whoami` | Computer and user you are logged on as |
| `whoami /all` | User, SID, groups, and privileges |

If a command fails unexpectedly, `whoami` often shows you are not the account you thought you were.

**Support scenario:** You have three remote admin sessions open. Run `hostname` and `whoami` in the window before `gpupdate /force` or any reboot command.

## Group Policy Commands

**Active Directory** is the central database of users and devices. **Group Policy** pushes settings to those computers and users. Policies often apply at logon. To apply them now:

| Command | Use |
| --- | --- |
| `gpupdate /force` | Force a Group Policy refresh on this computer or user |
| `gpresult /r` | Show the **resultant set of policy** (what is actually applied) |

`gpresult /r` can show the domain, the logged-on user, the computer name, whether it is a workstation, the Windows version, the local profile, when policy was last applied, which Group Policy objects applied, and the user’s security groups. After `gpupdate /force`, run `gpresult /r` again to confirm a new policy is listed.

**Support scenario:** A desktop wallpaper GPO should already apply. Run `gpupdate /force`, then `gpresult /r` to verify the GPO appears before blaming the domain controller.

## System File Checker

Core Windows files can be changed by a third-party app, an update, or malware. **SFC** (System File Checker) compares important Windows files to known-good copies.

`sfc /scannow` scans and can repair corrupt protected files. It needs an elevated prompt and can take a while. A typical success line says Windows Resource Protection found corrupt files and repaired them. Details go in **cbs.log**, and the tool tells you where that log is.

**Expected outcome:** Protected system files verified and repaired when possible; review `cbs.log` if problems remain.

## Comparison Table

| Need | Command |
| --- | --- |
| See files here | `dir` |
| Move up one folder | `cd ..` |
| Make or remove a folder | `md` / `rd` |
| Fix NTFS inconsistencies | `chkdsk /f` (admin; may wait for reboot) |
| Test every sector and fix the file system | `chkdsk /r` |
| Wipe and prepare a partition | `format` — backup first |
| List volumes | `diskpart` → `list volume` |
| Copy one file and skip the overwrite prompt | `copy /y` |
| Copy with retry and bandwidth limits | `robocopy` |
| Confirm the PC name before a reboot | `hostname` |
| Confirm Windows 10 vs 11 | `winver` |
| Confirm the logged-on user and groups | `whoami /all` |
| Push Group Policy now | `gpupdate /force` |
| See which policies applied | `gpresult /r` |
| Repair protected system files | `sfc /scannow` |

## CompTIA Exam Connections

Coverage aligns with course-map / CertMaster Windows command-line topics under objective 1.5 and the Professor Messer Windows Command Line Tools transcript (Command Prompt–focused). Not an official exam-item guarantee.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Command fails until you use Run as administrator | Needs an elevated prompt |
| `help dir` and `dir /?` | Two ways to read a command’s help |
| `cd ..` | Move to the parent folder |
| Volume is in use; check at next boot | `chkdsk` on the system drive |
| `/r` vs `/f` | `/r` includes the `/f` fixes and scans sectors |
| Format with no file system named | Classic `format` teaching point: often FAT32 — confirm; other tools may differ |
| Do not prompt when overwriting | `copy /y` |
| Large copy over a slow WAN | `robocopy` throttle and retry |
| “Am I on the right server?” | `hostname` |
| Which Windows build before installing an app | `winver` |
| Policy should apply without logoff | `gpupdate /force` |
| Which GPOs are on this PC | `gpresult /r` |
| Core OS files were changed | `sfc /scannow` |

### BEST / MOST likely wording

- If you only need identity confirmation, `hostname` / `whoami` is BETTER than jumping straight to `format`.
- If a volume is in use, scheduling `chkdsk` for next restart is MORE likely than forcing an immediate full wipe.
- For resilient network copy needs, `robocopy` is MORE appropriate than basic `copy`.

## Common Mistakes and Misconceptions

- **“Any Command Prompt can repair the disk.”** `chkdsk`, `format`, `diskpart`, and `sfc` need administrator rights.
- **“`/r` is a lighter check than `/f`.”** `/r` does the `/f` repair **and** a full sector scan, so it takes longer.
- **“Defrag and format are the same idea.”** Format **erases** the volume and builds a file system. It is not a cleanup.
- **“Every Windows format always defaults to FAT32.”** That is the common Command Prompt `format` teaching point when `/fs` is omitted — not a universal default for every Windows setup or disk tool.
- **“Startup apps and Group Policy both refresh themselves the same way.”** Group Policy often waits for logon. `gpupdate /force` applies it now. `gpresult /r` shows what landed.
- **“`copy` and `robocopy` are identical.”** `copy` is the simple file copy. `robocopy` adds retries, subdirectory control, and bandwidth limits.
- **“Command Prompt and PowerShell are the same tool.”** They are different shells. This lesson’s utilities are presented in `cmd`.

## Quick Review

| Topic | Remember |
| --- | --- |
| Prompt | `cmd`; elevate with Run as administrator or Ctrl+Shift+Enter |
| Help | `help`, `help command`, or `command /?` |
| Navigate | `dir`, `cd`, `cd ..`, `md`, `rd`; `\` in paths |
| Disks | `chkdsk /f` or `/r`; `format` erases; `diskpart` lists volumes |
| Files | `copy /v /y`; `robocopy` for tough copies |
| Identity | `hostname`, `winver`, `whoami /all` |
| Policy | `gpupdate /force`, then `gpresult /r` |
| System files | `sfc /scannow`; read `cbs.log` |
| Safety | Confirm host + volume before destructive commands |

---

## Continue Learning

- Previous Topic: [Additional Windows Tools](additional-windows-tools.md)
- Next Topic: [The Windows Network Command Line](the-windows-network-command-line.md)
- Related: [The Microsoft Management Console](the-microsoft-management-console.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
