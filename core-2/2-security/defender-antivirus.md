# Defender Antivirus

CompTIA A+ Core 2 — 220-1202  
Objective 2.2 — Given a scenario, configure Microsoft Windows security settings

## What You Need to Know

By the end of this lesson, you should understand:

- **Microsoft Defender Antivirus** is built into Windows and turned on by default
- Where it lives in the **Windows Security** app
- Why **real-time protection** stays on except for a short troubleshooting test
- What the other Virus & threat protection toggles are for
- How to force a check for the latest **signatures** (security intelligence)

## What Is It?

**Microsoft Defender Antivirus** is the antivirus and anti-malware program that comes with Windows. You do not install a separate product to get it. Older screens may still say **Windows Defender** or **Defender Antivirus**. The current name is Microsoft Defender Antivirus.

## Why Does It Matter?

Malware can land in a file transfer without anyone noticing. Defender watches those transfers and matches files against a list of known threats. Help desk work here is simple and strict: leave protection on, and update the definitions when you need to prove the PC has the latest list.

## Real-World Analogy

Think of a mailroom that opens every package:

| Mailroom | Defender |
| --- | --- |
| Every package is checked as it arrives | Real-time protection |
| The list of dangerous items is reprinted each morning | Signature / security intelligence updates |
| You pause the check for one delivery to see if the scanner is the problem | Turning real-time protection off briefly |
| A sign says the scanner is off and packages are at risk | “Real-time protection is off, leaving your device vulnerable.” |

## How It Works

### Open Virus & Threat Protection

In Windows 11, open **Search**, type **Security**, and choose **Windows Security**.

The app also has account protection, firewall and network protection, and app and browser control. This lesson uses **Virus & threat protection** at the upper left.

### Leave It Enabled

For normal work, Defender stays **on**. Turning antivirus off makes it easy for malware to get in unnoticed.

The one time you turn it off is a **temporary troubleshooting** test: you want to know whether Defender itself is causing the problem. Turn it back on as soon as the test is done.

### Real-Time Protection

**Real-time protection** is the default. Defender monitors file transfers in and out of Windows and flags malicious software inside those files.

Path to the switch:

1. Windows Security
2. Virus & threat protection
3. Scroll to **Virus & threat protection settings**
4. **Manage settings**

**Real-time protection** is **On** by default. Clicking the toggle brings up **User Account Control (UAC)**: Windows asks whether you want to allow this app to make changes. The app is Windows Security. Choose **Yes**.

When it is off, the page warns: **“Real-time protection is off, leaving your device vulnerable.”**

Turn it back on the same way: click the toggle, approve the UAC prompt, and the warning goes away.

### Other Settings on That Page

Manage settings also lists these controls:

| Setting | What it does |
| --- | --- |
| Cloud-delivered protection | Asks Microsoft’s cloud about threats that are too new for the local list |
| Automatic sample submission | Sends a suspicious file to Microsoft so it can be analyzed |
| Tamper protection | Stops other programs from turning Defender’s security settings off |
| Controlled folder access | Limits which apps may change files in protected folders |
| Exclusions | Files or folders Defender is told to skip |

### Update the Signatures

Antivirus programs identify known malware with **signatures**, also called **definitions**. Windows labels the package **security intelligence**. Catching the newest malware requires the newest definitions.

Definitions normally download on their own. When you need to force a check:

1. Virus & threat protection
2. **Virus & threat protection updates**
3. **Protection updates**

That page shows:

- The updates already installed
- The **security intelligence version** number
- When that version was created
- When the last update ran

**Check for updates** contacts Microsoft. If newer definitions exist, Windows downloads them and installs them into the running copy of Defender. The same screen is where you manage the automatic update schedule.

## Side-by-Side Comparison

| Task | Where to click |
| --- | --- |
| See whether antivirus is protecting the PC | Windows Security → Virus & threat protection |
| Turn real-time scanning off or on | Manage settings → Real-time protection → approve UAC |
| Confirm you have today’s definitions | Protection updates → Check for updates |
| Skip one folder on purpose | Manage settings → Exclusions |

## Key Terms

| Term | Meaning |
| --- | --- |
| Microsoft Defender Antivirus | The antivirus built into Windows and on by default |
| Windows Security | The app that holds Virus & threat protection and the firewall |
| Real-time protection | Scanning files as they move in and out of Windows |
| UAC | User Account Control; the prompt that asks before a major change |
| Signature / definition | The pattern list used to recognize known malware |
| Security intelligence | Microsoft’s name for the current signature package |
| Cloud-delivered protection | Cloud lookup for threats newer than the local list |
| Automatic sample submission | Sending a suspicious file to Microsoft for analysis |
| Tamper protection | Blocks programs from disabling Defender settings |
| Controlled folder access | Restricts which apps can change protected folders |
| Exclusion | A file or folder Defender is set to ignore |

## CompTIA Exam Connections

| Clue | Think |
| --- | --- |
| Antivirus that ships with Windows and is already on | Microsoft Defender Antivirus |
| Older name on the same product | Windows Defender |
| Open it from Search | Type Security → Windows Security |
| Files scanned as they are copied in or out | Real-time protection |
| Turning protection off asks “make changes to your device?” | UAC approval |
| Banner that the device is vulnerable | Real-time protection is off |
| Need the newest virus list right now | Protection updates → Check for updates |
| Version number of the definition package | Security intelligence version |
| Definitions normally arrive without you clicking | Automatic updates |
| Malware must not be able to switch Defender off | Tamper protection |
| Only approved apps may edit certain folders | Controlled folder access |
| One folder should not be scanned | Exclusion |

## Common Mix-Ups

### Defender is an extra program you have to install

It is part of Windows. A normal install already has it, and it is turned on.

### Leaving real-time protection off is a normal fix

It is a short test to see whether Defender is the cause. The page itself says the device is vulnerable. Turn it back on when the test is finished.

### An old signature list is fine if real-time protection is on

Real-time protection can only match threats it knows. **Check for updates** when you need the current security intelligence version.

### The Windows Security home page is only antivirus

Account protection, firewall and network protection, and app and browser control are separate tiles. Antivirus settings are under **Virus & threat protection**.

## Quick Review

| Topic | Remember |
| --- | --- |
| Product | Microsoft Defender Antivirus, on by default |
| Open | Search → Security → Windows Security → Virus & threat protection |
| Daily state | Real-time protection stays On |
| Off switch | Manage settings, then approve UAC; a warning appears |
| Definitions | Security intelligence; Check for updates forces a download |
| Also on that page | Cloud protection, sample submission, tamper protection, controlled folder access, exclusions |

---

## Continue Learning

- Previous Topic: [Authentication and Access](authentication-and-access.md)
- Next Topic: [Windows Firewall](windows-firewall.md)
- Related: [Configuring Windows Firewall](../1-operating-systems/configuring-windows-firewall.md)
- Back to [Domain 2 — Security](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
