# Operating Systems Overview

CompTIA A+ Core 2 — 220-1202  
Objective 1.1 — Explain common operating system (OS) types and their purposes

## Lesson Overview

An **operating system (OS)** is the software link between the hardware you bought and the applications you need to run. It controls how storage talks to memory, how the CPU is used, and how input/output devices such as keyboards, displays, and printers work. Applications are written for a specific OS, and the OS is also the human-facing platform for putting information in, processing it, and getting results out.

Help desk technicians support many OS families every week — Windows PCs, Macs, Linux systems, Chromebooks, iPhones, iPads, and Android phones. Knowing what each OS is good at, what it costs in time or money, and what can (and cannot) move between platforms prevents wrong advice and failed installs.

This lesson covers **Windows**, **Linux**, **macOS**, **Chrome OS**, **iOS / iPadOS**, and **Android**, plus updates, end-of-life, and compatibility basics.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what an operating system does between hardware and applications
- List common responsibilities shared by modern OSes
- Compare strengths and trade-offs of Windows, Linux, and macOS
- Describe what Chrome OS is designed for and why network access matters
- Distinguish iOS from iPadOS and contrast Apple mobile OSes with Android
- Explain why updates matter and why vendor end-of-life (EOL) rules differ
- Separate data compatibility from application/executable compatibility

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Operating system (OS) | Software that manages hardware and provides the platform applications run on |
| File management | Storing, changing, and removing files on storage through the OS |
| Swap / paging | Moving data between memory and disk when RAM is full or busy |
| Distribution (distro) | A packaged flavor of Linux built for general use or a specific job |
| Open source | Source code is available; community maintains the software (examples: Linux, Android) |
| Closed source | Source code is not publicly available (examples: Windows, Apple OSes) |
| Chrome OS | Google OS centered on the Chrome browser and cloud apps |
| Sidecar | iPadOS feature that can use an iPad as a second display |
| SDK | Software Development Kit — tools used to build apps for a platform |
| End of life (EOL) | Point when a vendor stops supporting a product with updates/patches |
| Executable | OS-specific program file (for example a Windows `.exe`) |

## What Every Operating System Does

Regardless of brand, modern OSes share common jobs:

| Job | Examples |
| --- | --- |
| File management | Store, remove, and change files on disk |
| Application support | Memory use; swap/paging between RAM and storage |
| Input / output | Keyboard, mouse, display, printer, external drives |
| System utilities | Tools that keep the OS running efficiently |

**Analogy:** Hardware is the stage and lighting. Applications are performers who only know one set of stage rules. The operating system is the stage manager that cues everything. A Windows “performer” (`.exe`) cannot simply walk onto a Linux stage.

## Desktop and Server Operating Systems

### Microsoft Windows

Windows has a huge market presence in organizations worldwide. You will see **Windows 10**, **Windows 11**, **Windows Server**, and newer versions over time.

| Strength | Challenge |
| --- | --- |
| Large industry support for hardware, software, and help | Popular target for attackers |
| Many Windows editions for home, business, and servers | Driver quality varies by manufacturer |
| Huge app ecosystem (business, entertainment, utilities) | Long-term support of diverse hardware can be hard |
| Familiar desktop patterns (icons, taskbar, status area, Recycle Bin) | Must balance popularity with a large security industry defending it |

**Support scenario:** A user asks for a business accounting app “for the company PC.” Windows is usually the safest assumption for third-party business software availability — and for malware exposure.

### Linux

**Linux** is free and **open source**, maintained by a worldwide community. Installing Windows 11 gives you the same product family everywhere. Installing Linux means choosing a **distribution** — some are general-purpose, others are built for specific tasks.

| Strength | Challenge |
| --- | --- |
| No OS purchase cost and no monthly OS fee | No single “Linux company” for all support |
| Runs on almost any hardware | New hardware/drivers may lag |
| Large community knowledge base | Support quality depends on community expertise |
| Desktop layouts often feel familiar (icons, taskbar — sometimes on the side) | You must pick the distro that fits the job |

**Support scenario:** A lab needs free OS installs on old PCs for coding practice. A suitable Linux distro avoids Windows licensing cost — but you may spend time matching drivers.

### Apple macOS

**macOS** runs on **Apple hardware only**. Apple designs the hardware and writes the OS for that hardware, which improves compatibility and polish.

| Strength | Challenge |
| --- | --- |
| Strong ease of use and UI reputation | Cannot install on arbitrary non-Apple PCs |
| Hardware + OS from one vendor → high compatibility | Higher initial hardware cost |
| Security-minded design; often fewer mainstream concerns than Windows | Smaller user base → less industry support than Windows |

The desktop still feels familiar: workspace, dock/bar for apps, icons and buttons.

**Support scenario:** A designer’s Mac will not dual-boot “any Windows ISO on any PC clone.” macOS support starts with Apple-compatible hardware and Apple update channels.

### Google Chrome OS

**Chrome OS** is built by Google. It uses the **Linux kernel** underneath but does **not** feel like a traditional Linux desktop. Most of the experience revolves around the **Chrome browser**, and most apps run in the browser.

| Trait | Detail |
| --- | --- |
| Design goal | Straightforward OS with low overhead |
| Hardware | Many manufacturers, often Chromebook-style laptops |
| Connectivity | Needs network/cloud access for most cloud apps |
| Offline limit | Without connectivity, many browser/cloud apps are unavailable |

**Support scenario:** A Chromebook user says “none of my school apps work” after losing Wi-Fi. Treat network/cloud connectivity as a first check — not just “reinstall Office.”

## Mobile Operating Systems

### Apple iPadOS and iOS

| OS | Hardware | Notes |
| --- | --- | --- |
| **iPadOS** | iPad | Desktop-class Safari variant, **Sidecar** (second monitor), keyboard support, multitasking features |
| **iOS** | iPhone | Related look and family, but a **different OS** from iPadOS |

All Apple OSes in this lesson are **closed source** and run only on Apple hardware.

| App development | Detail |
| --- | --- |
| SDK host | Apple’s Software Developer Kit runs on **macOS** |
| Distribution | Apps are tested and approved by Apple before appearing in the App Store |

**Support scenario:** A user wants “the same iPhone app layout features on iPad.” Related family — not identical OS. Features like Sidecar are iPadOS-oriented.

### Google Android

**Android** is maintained by a consortium called the **Open Handset Alliance**. It is **open source** and Linux-based.

| Trait | Detail |
| --- | --- |
| Hardware | Many manufacturers and device types |
| Development | Android SDK on Windows, macOS, or Linux |
| Distribution | Google Play and third-party app stores |

**Support scenario:** Two “Android phones” from different brands behave differently after an update. Expect OEM fragmentation — not one identical Android experience everywhere.

## Lifecycle, Updates, and Compatibility

| Topic | Remember |
| --- | --- |
| End of life (EOL) | Vendors set different rules (Apple timelines ≠ Microsoft timelines) |
| Updates | Keep the OS current for efficiency **and** security patches |
| Data compatibility | Documents, spreadsheets, and media often move across OSes |
| App compatibility | Executables are OS-specific (Windows app ≠ Linux app) |
| Workarounds | Shared file formats; many apps are **web-based** and run in any browser |

**Support scenario:** A user copies a Windows `.exe` to a Mac Desktop and double-clicks. Files can cross platforms; that executable usually cannot. Offer a Mac build, a web app, or a compatible file format instead.

## Comparison Table

| OS | Best known for | Watch-outs |
| --- | --- | --- |
| Windows | Ubiquity, apps, industry support | Attack target; driver variance |
| Linux | Free, flexible distros | Community support; driver lag |
| macOS | Usability; Apple HW + OS fit | Apple-only hardware; cost; smaller market |
| Chrome OS | Browser/cloud simplicity | Needs connectivity |
| iOS / iPadOS | Apple mobile ecosystem | Closed source; Apple hardware; App Store rules |
| Android | Many devices; open model | Fragmentation across OEMs |

## CompTIA Exam Connections

Objective alignment (verified against course map / CertMaster Module 11.3 topics): OS types, compatibility, and vendor life-cycle concepts for 1.1.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Software between hardware and apps | Operating system |
| Free OS with many flavors | Linux distributions |
| OS only on Apple Macs | macOS |
| Mostly browser apps; needs internet | Chrome OS |
| iPhone OS vs iPad OS | iOS vs iPadOS (related, not identical) |
| Many phone brands, Linux-based | Android |
| Cannot run `.exe` on Linux | Apps are OS-specific |
| Docs open on Mac and Windows | Data can cross OS; native apps may not |
| Vendor stops patches | End of life |

### BEST / MOST likely wording

- If the question stresses **no licensing cost** and **many variants**, Linux distros are the BEST fit — not “Windows is free.”
- If the question stresses **cloud/browser dependency**, Chrome OS is MORE likely than “generic Linux desktop.”
- If the question is about **moving a spreadsheet**, think data compatibility. If it is about **running a program file**, think OS-specific executables.

## Common Mistakes and Misconceptions

- **“Linux is one install, like Windows 11.”** Linux is many **distributions**.
- **“iOS and iPadOS are the same OS.”** Same family, different OS per device class.
- **“Chrome OS is just a normal Linux desktop.”** Linux kernel underneath; UX is browser-first Chrome OS.
- **“Any app runs anywhere if you copy the file.”** Data often moves; executables usually do not.
- **“macOS can be installed on any PC for free.”** macOS is tied to Apple hardware in normal support scenarios.
- **“Updates are optional cosmetics.”** Updates also deliver security patches and efficiency fixes.

## Quick Review

| Topic | Remember |
| --- | --- |
| OS job | Hardware ↔ apps; files, memory, I/O, utilities |
| Windows | Popular, supported, heavily targeted |
| Linux | Free, distros, community support |
| macOS | Apple hardware only; polished UI |
| Chrome OS | Browser/cloud; needs network |
| Mobile | iOS/iPadOS closed Apple; Android open multi-OEM |
| Lifecycle | Updates + vendor EOL |
| Compatibility | Data often yes; native executables usually no |

---

## Continue Learning

- Next Topic: [File Systems](file-systems.md)
- Related: [Domain 4 — Operational Procedures](../4-operational-procedures/README.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
