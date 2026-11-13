# Configuring Windows Firewall

CompTIA A+ Core 2 — 220-1202  
Objective 1.7 — Given a scenario, configure Microsoft Windows networking features on a client/desktop

## Lesson Overview

**Windows Defender Firewall** is the built-in **host-based** (personal) firewall on Windows. It decides which network traffic may reach this PC (**inbound**) and which traffic this PC may send (**outbound**). Microsoft intends it to stay **enabled**.

A coffee-shop network should not use the same trust rules as a company domain PC. Firewall profiles and rules are how technicians allow a needed app or port without permanently turning protection off.

**Scope note:** This Objective **1.7** lesson focuses on configuring firewall profiles and rules as a Windows networking feature. The Domain 2 security lesson [Windows Firewall](../2-security/windows-firewall.md) covers the **Windows Security** app view (Firewall & network protection, providers). Use both as complementary views of the same product — not conflicting products.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what a host-based firewall does and why it should stay on
- Distinguish inbound vs outbound traffic
- Compare Domain, Private, and Public (guest) network profiles
- Configure broad profile settings, including “block all incoming connections”
- Create program, port, predefined, and custom inbound rules
- Open Windows Defender Firewall with Advanced Security
- Apply least-privilege thinking and avoid routine firewall disablement

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Host-based firewall | Firewall software running on the PC itself |
| Inbound traffic | Packets coming **into** this computer |
| Outbound traffic | Packets leaving this computer |
| Network profile | Rule set for Domain, Private, or Public networks |
| Allow rule | Exception that permits matching traffic |
| Block rule | Exception that denies matching traffic |
| Port | Number that identifies a service (for example TCP 80) |
| Protocol | Rules for the conversation (commonly TCP or UDP) |
| Predefined rule | Built-in Windows rule for a known app or feature |
| Custom rule | Rule you build with your own program/port/address choices |
| Least privilege | Grant only the access needed — nothing extra |
| Elevated rights | Administrator permission required to change the firewall |

## Beginner Analogy

Think of the firewall as a building receptionist with three rulebooks:

| Profile | Building |
| --- | --- |
| Domain | The company office |
| Private | A trusted home or small office |
| Public / guest | A coffee shop or hotel |

Advanced Security is the full policy binder: who may come in, who may go out, and monitoring of what was blocked.

## Why Technicians Care

Firewall settings are where you:

- Confirm the firewall is on for the current profile
- Temporarily test whether the firewall is blocking a needed connection (**short test only**)
- Allow one app or one port with a precise rule
- Block unwanted inbound services (example: unencrypted web on TCP 80)

Changing these settings requires **elevated** (administrator) rights.

## Opening Windows Defender Firewall

**Prerequisites:** Administrator account for changes.

| Path | Notes |
| --- | --- |
| Control Panel → **Windows Defender Firewall** | Classic applet path used in this lesson |
| Search for **Windows Defender Firewall** | Works on Windows 10 and Windows 11 |

The main page shows separate status for:

- Domain networks
- Private networks
- Guest or public networks

You also see whether the firewall is on, whether it blocks connections not on the allow list, which network you are on now, and whether it notifies you when it blocks a new app.

**Expected outcome:** Profile status page with on/off and notification settings per profile type.

## Network Profiles

| Profile | Typical place | Why it matters |
| --- | --- | --- |
| Domain | Domain-joined corporate network | Separate company policy set |
| Private | Home / trusted work LAN | More sharing may be appropriate |
| Public / guest | Cafe, hotel, open Wi-Fi | Stricter default posture |

Do not assume one setting covers every network. Each profile can differ.

## Broad Settings for Each Profile

For a private network, a public network, or both, you can:

| Setting | Effect |
| --- | --- |
| Turn Windows Firewall on | The profile filters traffic |
| Block all incoming connections | Blocks inbound traffic **even if** you previously allowed it — use when you do not want anyone connecting in |
| Notify when a new app is blocked | Windows tells you instead of blocking silently |

### Least privilege and safe troubleshooting

| Practice | Why |
| --- | --- |
| Prefer a precise allow/block rule | Opens only what is needed |
| Prefer “block all incoming” over permanent disable when traveling | Stops inbound access without removing outbound protection |
| Disable firewall only briefly to test | Confirms whether the firewall is the blocker |
| Turn it back on immediately after the test | Restores host protection |

**Disabling the entire firewall is not an appropriate routine fix.** Treat it as a short diagnostic step, then restore protection and create the least-privilege rule that solves the real need.

## More Precise Rules

Broad on/off settings are not always enough. You can allow inbound traffic for:

- One **application** (a specific program)
- One **port number**, when you do not want to name an executable

Windows also includes **predefined** apps and features you can enable or disable depending on the network. If none fit, build your own exception.

## Windows Defender Firewall with Advanced Security

Open **Advanced settings** from the left side of the firewall page (administrator view).

| Section | What it holds |
| --- | --- |
| Inbound rules | Traffic coming **into** this PC |
| Outbound rules | Traffic leaving this PC |
| Connection security rules | Extra requirements for how connections are protected |
| Monitoring | What the firewall is doing |

## Creating an Inbound Rule (Procedure)

**Goal example (lab/teaching):** Create an **inbound** block for **TCP local port 80** so other devices cannot open unencrypted HTTP **to services listening on this PC**.

| Detail | Value for this example |
| --- | --- |
| Direction | **Inbound** (traffic coming into this PC) |
| Protocol / port | TCP, local port **80** |
| Action | **Block** |
| What it does **not** do by itself | It does not block this PC’s **outbound** browsing to other websites |

**Impact warning:** If this computer is hosting a website, intranet page, or any service that legitimately uses HTTP on port 80, this inbound block will interrupt that communication. Use the example carefully in labs, and remove or disable the rule when you are done.

1. Open **Windows Defender Firewall with Advanced Security**.
2. Right-click **Inbound Rules** → **New Rule**.
3. Choose a rule type:

| Type | Use it when |
| --- | --- |
| Program | The rule applies to one application, or to all programs |
| Port | The rule applies to a TCP or UDP port |
| Predefined | You want a rule Windows already includes |
| Custom | You need program, port, and address choices together |

4. For this example, choose **Custom** → Next.
5. **Program:** leave it so the rule applies to all programs → Next.
6. **Protocol and ports:** TCP; local port **80** (specific port, not all ports). Remote port can be **any** → Next.
7. **Scope:** Any local / any remote (or specific addresses if required) → Next.
8. **Action:** **Block the connection** → Next.
9. **Profile:** Domain, Private, and/or Public (leave all checked to apply everywhere) → Next.
10. **Name:** for example `Block Unencrypted Web Traffic` → Finish.

**Expected outcome:** A new **inbound** rule blocking TCP local port 80 on the selected profiles.

### Safely disable or remove the example rule

When the lab or test is finished:

1. Open **Windows Defender Firewall with Advanced Security** → **Inbound Rules**.
2. Find the rule by name (for example `Block Unencrypted Web Traffic`).
3. Prefer **Disable Rule** first to stop the block without deleting documentation of what you tested.
4. Or right-click → **Delete** if you no longer need the rule at all.

**Common failure conditions:**

- Rule created outbound instead of inbound
- Wrong local port
- Wrong profile checked (rule exists but does not apply on the current network)
- Non-admin account cannot save the change

**Safety:** Blocking the wrong port can break needed services. Name rules clearly, document why they exist, and disable/delete temporary lab rules promptly. Do **not** leave the entire firewall permanently off as a workaround.

## Comparison Table

| Goal | Where |
| --- | --- |
| Different rules at home vs at a cafe | Private profile vs public profile |
| Stop every inbound connection while traveling | Block all incoming connections |
| Let one app accept connections | Allow rule for that program |
| Let one port through without naming an app | Port rule |
| Block TCP 80 from anywhere | Custom inbound rule: TCP, local port 80, Block |
| See outbound rules and monitoring | Windows Defender Firewall with Advanced Security |
| Turn the firewall off to test | Firewall settings — needs administrator rights; turn it back on |

## CompTIA Exam Connections

Coverage aligns with course-map / Messer Configuring Windows Firewall transcript for objective 1.7 networking features. Official CompTIA PDF objectives are not in-repo, so this is not official item-bank verification.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Firewall that ships with Windows | Windows Defender Firewall |
| Stricter rules on public Wi-Fi than at home | Separate public and private profiles |
| Domain-joined PC has another rule set | Domain profile |
| Block everything inbound, even previous allows | Block all incoming connections |
| Allow one executable | Program rule |
| Allow or block a TCP/UDP number | Port rule |
| Block unencrypted web inbound | Inbound TCP port 80, action Block |
| Need outbound rules or monitoring | Firewall with Advanced Security |
| Cannot turn the firewall off | Need an elevated account |

### BEST / MOST likely wording

- If the question asks for a temporary test, brief disable may appear — but restoring the firewall / using a precise rule is the better normal practice.
- If only one app must accept connections, a **program** allow rule is MORE appropriate than disabling the firewall.

## Common Mistakes and Misconceptions

- **“Turning the firewall off is a normal fix.”** It is a temporary troubleshooting step. Leave it enabled for normal use.
- **“One firewall setting covers every network.”** Domain, private, and public profiles can each differ.
- **“Block all incoming still honors your allow list.”** That option blocks incoming connections **including** ones you explicitly allowed.
- **“Port 80 is secure web traffic.”** Port 80 is **unencrypted** web traffic. Encrypted web uses a different port (commonly 443).
- **“Any user can create firewall rules.”** Changing the firewall requires administrator rights.
- **“This lesson replaces the Domain 2 firewall security lesson.”** Complementary views — see [Windows Firewall](../2-security/windows-firewall.md).

## Quick Review

| Topic | Remember |
| --- | --- |
| Product | Windows Defender Firewall — leave it on |
| Direction | Inbound = into PC; outbound = leaving PC |
| Profiles | Domain, private, public/guest |
| Broad options | On/off, block all incoming, notify on new apps |
| Precision | Program, port, predefined, or custom |
| Advanced | Inbound, outbound, connection security, monitoring |
| Practice | Least privilege rules; disable only for short tests |
| Example rule | Custom inbound block, TCP local port 80, all profiles |

---

## Continue Learning

- Previous Topic: [Windows Network Technologies](windows-network-technologies.md)
- Next Topic: [Windows IP Address Configuration](windows-ip-address-configuration.md)
- Related: [The Windows Control Panel](the-windows-control-panel.md)
- Related (Domain 2 security view): [Windows Firewall](../2-security/windows-firewall.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
