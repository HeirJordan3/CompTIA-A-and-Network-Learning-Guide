# Windows Firewall

CompTIA A+ Core 2 — 220-1202  
Objective 2.2 — Given a scenario, configure Microsoft Windows security settings

## What You Need to Know

By the end of this lesson, you should understand:

- Where **Windows Defender Firewall** sits in the **Windows Security** app
- That each network type has its own **profile**: domain, private, and public
- How to turn a profile’s firewall off and back on, and why that needs an administrator
- What **Block all incoming connections** does to apps that were already allowed
- Where firewall **notifications** are turned on per profile
- How **Security providers** shows whether Windows or a third-party firewall is running

## What Is It?

**Windows Defender Firewall** is the firewall built into Windows. It decides which network connections may reach the PC. This lesson uses the **Windows Security** app. Creating allow and block rules in Control Panel is covered in [Configuring Windows Firewall](../1-operating-systems/configuring-windows-firewall.md).

## Why Does It Matter?

The firewall is on by default. You turn a profile off only for a short troubleshooting test, then turn it back on. On a public or unknown network, you may also block every incoming connection, including apps that already have an allow rule. If a third-party firewall was installed, you need to see which product is actually protecting the PC.

## Real-World Analogy

Think of a building with three entrances:

| Entrance | Firewall profile |
| --- | --- |
| The office campus door | Domain |
| The door at home | Private |
| The door at a coffee shop | Public |
| A sign that says even approved visitors wait outside | Block all incoming connections |
| The guard tells you when someone new is turned away | Firewall notification |
| The directory that lists who is on duty | Security providers |

Each entrance can be locked or unlocked on its own. Locking the coffee-shop door does not unlock the office door.

## How It Works

### Open Firewall & Network Protection

Turning the firewall on or off requires an **administrator** account. Windows will ask before it makes the change.

1. Open **Search** and type **Security**.
2. Open **Windows Security**.
3. Choose **Firewall & network protection**.

The page lists the three profiles configured on the PC:

| Profile | Typical network |
| --- | --- |
| Domain | A work network that uses Active Directory |
| Private | A home or trusted work network |
| Public | A cafe, hotel, or other open network |

You can also enable and disable the firewall from Control Panel. This lesson stays in Windows Security.

### Turn One Profile Off or On

Click a profile, such as **Private network**. The page names the adapter (for example, Network 5) and shows **Windows Defender Firewall** toggled **On**.

Click the toggle. **User Account Control (UAC)** asks whether you want to allow the Windows Security app to make changes. Choose **Yes**.

The toggle moves to **Off**, and Windows warns that the firewall for that profile is off and the device may be vulnerable. The video’s private-network warning is: the private firewall is off, and your device may be vulnerable.

Turn it back on the same way: click the toggle, approve UAC, and the firewall for that profile is on again.

Leave the firewall on for normal work. Disable it only long enough to test whether the firewall is causing the problem.

### Block All Incoming Connections

Each profile has an option for incoming connections: **Blocks all incoming connections, including those in the list of allowed apps.**

Check that box and approve the UAC prompt. Windows then refuses inbound connections even if you already created an allow rule for an app.

Use this on an unknown network or on public Wi-Fi, when you do not want any other device on that network to reach your PC.

Clear the box and approve UAC again to return to the normal allow list.

### Notifications

From the main **Firewall & network protection** page, open **Firewall notification settings**, then **Manage notifications**. Scroll to **Firewall & network protection notifications**.

These notifications tell you when Microsoft Defender Firewall blocks a new app. You choose which profiles send that notice. In the video, domain and public were already on. Turning on the private profile required another UAC approval.

The same notifications page also manages virus and threat protection notifications and account protection notifications. Those are separate from the firewall.

### Security Providers

If you are not sure whether the built-in firewall is the one running, check **Security providers**.

From **Firewall & network protection**, open **Firewall notification settings**. At the top, choose **Security providers**, then **Manage providers**.

The page lists what is active:

| Category | What the video’s PC showed |
| --- | --- |
| Antivirus | Microsoft Defender Antivirus, with a way to open that app |
| Firewall | Microsoft Firewall, turned on |
| Web protection | No provider enabled |

If a third-party firewall were installed, it would appear here instead of, or along with, the Microsoft firewall.

## Side-by-Side Comparison

| Goal | Where |
| --- | --- |
| See domain, private, and public | Firewall & network protection |
| Turn the private firewall off for a test | Private network → firewall toggle → approve UAC |
| Ignore the allow list on an open network | Block all incoming connections |
| Hear when a new app is blocked | Firewall notification settings, per profile |
| See which firewall product is installed | Security providers |
| Build an allow or block rule | Control Panel, in [Configuring Windows Firewall](../1-operating-systems/configuring-windows-firewall.md) |

## Key Terms

| Term | Meaning |
| --- | --- |
| Windows Defender Firewall | The firewall built into Windows |
| Firewall & network protection | The Windows Security page for firewall profiles |
| Domain profile | Firewall rules used on a domain network |
| Private profile | Firewall rules used on a trusted home or work network |
| Public profile | Firewall rules used on an open network |
| UAC | The prompt that asks before Windows Security changes the firewall |
| Block all incoming connections | Refuses inbound traffic, including apps already on the allow list |
| Allowed apps | Programs that already have a firewall allow rule |
| Firewall notification | An alert when Defender Firewall blocks a new app |
| Security providers | The list of antivirus, firewall, and web-protection products in use |

## CompTIA Exam Connections

| Clue | Think |
| --- | --- |
| Turn the firewall off from Windows Security | Firewall & network protection, then the profile toggle |
| Standard user cannot change it | Needs an administrator; UAC appears |
| Home network vs coffee-shop Wi-Fi | Private profile vs public profile |
| Work PC joined to Active Directory | Domain profile |
| Warning that the device may be vulnerable | That profile’s firewall is off |
| Public Wi-Fi; no inbound access at all | Block all incoming connections, including allowed apps |
| An allow rule still does not let the app in | Block all incoming connections is checked |
| Alert when a new app is blocked | Firewall notification for that profile |
| Is this the Microsoft firewall or another product? | Security providers |
| Antivirus listed next to the firewall | Microsoft Defender Antivirus on the providers page |

## Common Mix-Ups

### Turning off one profile turns off the firewall everywhere

Domain, private, and public are separate. The video turns off the **private** firewall. The other profiles stay as they were.

### Block all incoming connections deletes your allow rules

The allow list is still there. While the box is checked, those allowed apps are blocked anyway. Clear the box to use the allow list again.

### Notifications are the same as the firewall being on

Notifications only tell you when a new app is blocked. You still choose that setting for each profile.

### Windows Security always means Microsoft is the firewall

**Security providers** is the check. It names the antivirus, the firewall, and any web-protection product. A third-party firewall shows up on that page.

## Quick Review

| Topic | Remember |
| --- | --- |
| Open | Search → Windows Security → Firewall & network protection |
| Profiles | Domain, private, public |
| Toggle | Administrator plus UAC; a warning appears when a profile is off |
| Unknown network | Block all incoming connections, including allowed apps |
| Alerts | Firewall notifications, turned on per profile |
| Which product | Security providers |

---

## Continue Learning

- Previous Topic: [Defender Antivirus](defender-antivirus.md)
- Next Topic: [Windows Security Settings](windows-security-settings.md)
- Related: [Configuring Windows Firewall](../1-operating-systems/configuring-windows-firewall.md)
- Back to [Domain 2 — Security](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
