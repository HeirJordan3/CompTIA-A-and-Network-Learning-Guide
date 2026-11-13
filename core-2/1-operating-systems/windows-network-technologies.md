# Windows Network Technologies

CompTIA A+ Core 2 — 220-1202  
Objective 1.7 — Given a scenario, configure Microsoft Windows networking features on a client/desktop

## Lesson Overview

Windows networking lets computers use each other’s files, folders, and printers. A **share** is a resource you publish on the network. Computers are organized in a **workgroup** (each PC keeps its own accounts) or a **domain** (one central login for the organization).

Help desk tickets constantly ask how to open a folder on another PC, why a share does not appear in a list, why every home PC needs a different password, whether a laptop can join the company domain, and how to share a desk printer. Those questions sit on top of basic connectivity — if the PC cannot reach the local network, shares and domain join will fail too.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what a Windows share is and how to map it to a drive letter
- Describe hidden shares that end with `$` and how to list all shares
- Compare workgroups and domains
- Explain why businesses use Active Directory
- Identify which Windows editions can join a traditional Active Directory domain
- Distinguish traditional AD domain join from Microsoft Entra join at a beginner level
- Share a printer from a Windows PC
- Relate shares/domain features to basic connectivity expectations
- Avoid confusing “no internet” with “no local network” problems

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Share | A file, folder, printer, or other resource published on the network |
| Mapped drive | A drive letter that points at a network share |
| Hidden share | A share whose name ends in `$` so it does not appear in the browse list |
| ADMIN$ | A common hidden administrative share |
| Workgroup | A named group of standalone PCs, each with its own accounts |
| Domain | A centrally managed group of users, computers, and resources |
| Active Directory Domain Services | On-premises (or hybrid) directory that stores traditional domain accounts and policy |
| Microsoft Entra ID | Microsoft’s cloud identity service (formerly Azure AD) used by many modern organizations |
| Printer sharing | Publishing a local printer so other PCs can print to it |
| Credentials | Username/password (or other proof) used to access a resource |

## How Windows Uses Network Settings (Beginner Context)

Shares, mapped drives, printer sharing, and domain join all assume the PC can talk on the network:

| Need | Windows networking dependency |
| --- | --- |
| Open `\\server\share` | Reach the server’s address on the LAN/VPN |
| Map a drive at sign-in | Network available + valid credentials |
| Join a domain | Reach a domain controller + authorized account + supported Windows edition |
| Share a printer | Other PCs can reach this PC (and permissions allow it) |

**Local vs internet misconception:** A PC can reach a file server on the office LAN and still have “no internet,” or the reverse. Test **local** resource access separately from **internet** browsing. Use Settings/Network status and command-line tools (`ipconfig`, `ping`) from the network command-line lesson when connectivity is unclear.

**IP / DHCP / DNS in this topic:** Detailed addressing belongs in dedicated IP lessons. For this objective, remember that DHCP commonly assigns addresses automatically, DNS turns names into addresses, and a wrong DNS/gateway setting can break name-based share paths even when raw IP connectivity works.

## Shares and Mapped Drives

**Analogy:** A share is a labeled cabinet other people can open over the network. A mapped drive gives that cabinet a short letter (H:, X:) on your computer.

A Windows share can be a file, a folder, a printer, or another resource on the network.

To use a share on another computer, **map a drive letter** to it:

| Method | How |
| --- | --- |
| File Explorer | Choose **Map network drive** |
| Command line | `net use` |

In the map-drive dialog you choose:

- The drive letter (many letters are free if X, Y, and Z are already used)
- The share, by browsing or by typing the folder path
- Whether to **reconnect at sign-in**
- Whether to connect with **different credentials** than the account you are using now

When you are done, disconnect that network drive from File Explorer.

**Support scenario:** Finance needs `\\fileserver\AP` as drive **P:** every morning. Map the drive with reconnect at sign-in using their domain credentials.

## Hidden Shares

Put a **dollar sign** at the end of the share name to hide it from the normal browse list. **ADMIN$** is a share named ADMIN that does not appear in the user-interface list.

Hiding is not the same as locking. Anyone who knows the name can still try to open it. It only stays off the dropdown of available shares.

To see every share configured on this computer, including hidden ones, open **Computer Management → Shared Folders**.

**Support scenario:** A share “vanished” from Network browse but still opens via `\\pcname\Docs$`. Explain hidden-share behavior and verify permissions separately.

## Workgroups vs Domains

**Analogy:**

| Idea | Like |
| --- | --- |
| Workgroup | A house where every room has its own lock and key |
| Domain | An office building with one badge that opens the doors you are allowed to use |

### Workgroups

A **workgroup** is the usual home setup. Devices share one workgroup name, but each computer is standalone.

Each PC keeps its **own usernames and passwords**. The login that works for a printer on one PC can be different from the login for a shared folder on another PC. That gets hard to track as you add devices.

### Domains

A **domain** is the usual business setup. User accounts, computers, and resources are managed in one place. People remember **one** set of credentials instead of a different login for every PC.

IT can add or remove users and apply settings from that central point. That matters when there are hundreds or thousands of devices.

Check the current mode in **Settings → System → About**, or in the **System** Control Panel applet. It shows the device name and whether the PC is in a workgroup or a domain. Choose **Domain or workgroup** for details. **Change** lets you rename the PC or move it between a workgroup and a domain.

## Active Directory

Domain information lives in **Active Directory Domain Services**, a central database that can be distributed across servers on the network. You add and remove users there, and you push configuration to laptops with policy.

Active Directory needs a **server**. You normally see it in a business, not on a home network.

To join a PC to the domain:

| Requirement | Detail |
| --- | --- |
| Windows edition | **Pro**, or a higher edition. **Windows 10 Home** and **Windows 11 Home** cannot join Active Directory |
| Where | Settings → System → About, or Control Panel → System, then Domain or workgroup → Change |
| Credentials | A username and password that are allowed to add computers, plus the domain name |
| Connectivity | The PC must reach the domain environment (LAN/VPN/DNS as required) |

After the PC joins, people sign in with **domain** credentials, not only a local account.

**Support scenario:** A Home-edition laptop cannot join the company domain. Upgrade/edition requirement comes before “wrong password” troubleshooting.

### Traditional AD join vs Microsoft Entra join

Organizations may manage Windows PCs with a **traditional Active Directory domain join** (domain controller on the network / hybrid environment) or with **Microsoft Entra ID** cloud identity (formerly Azure AD).

| Topic | Traditional AD domain join | Microsoft Entra join |
| --- | --- | --- |
| Directory | Active Directory Domain Services | Microsoft Entra ID (cloud) |
| Typical wording | “Join this PC to a domain” | “Join this device to Microsoft Entra ID” / work or school account cloud join |
| What beginners should remember | Still the classic CompTIA workgroup-vs-domain teaching path in this lesson | Different cloud-oriented join path — do not assume every “company PC” is only an on-prem AD join |

Keep this lesson focused on shares, workgroups, traditional domains, and printer sharing. Treat Entra join as a related modern option so you do not confuse it with workgroup mode or with AD Domain Services itself.

## Sharing a Printer

If a printer is physically connected to a Windows PC, you can share it with the network.

1. Open **Settings → Bluetooth & devices → Printers & scanners** (or the printer’s properties).
2. Open **Printer properties**.
3. On the **Sharing** tab, turn on sharing and set the share name.
4. Click **OK**.

Other people on the network can then connect to that printer — assuming they can reach this PC and have permission.

**Support scenario:** The desk printer works locally but coworkers cannot find it. Confirm sharing is enabled, the share name is correct, and other PCs are on the same reachable network (not guest Wi-Fi isolation).

## Comparison Tables

| Topic | Workgroup | Domain |
| --- | --- | --- |
| Typical place | Home | Business |
| Accounts | Separate on each PC | One central directory |
| Passwords | Can differ per device | One set of credentials |
| Who manages users | Each computer’s owner | IT, in Active Directory |
| Server required | No | Yes |
| Windows edition to join | Any edition can use a workgroup | Pro or higher to join Active Directory |

| Need | Where |
| --- | --- |
| Map a share | File Explorer or `net use` |
| Hide a share from the browse list | End the name with `$` |
| List every local share | Computer Management → Shared Folders |
| See workgroup or domain | Settings → System → About |
| Share the desk printer | Printer properties → Sharing |

## CompTIA Exam Connections

Coverage aligns with course-map / CertMaster Windows networking features under objective 1.7 and the Professor Messer Windows Network Technologies transcript (shares, workgroups/domains, AD join, printer sharing). Not an official exam-item guarantee.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Give a network folder a drive letter | Map a network drive, or `net use` |
| Share does not appear in the list, but the name works | Hidden share ending in `$` |
| See shares that the browse list hides | Computer Management → Shared Folders |
| Each PC has its own passwords | Workgroup |
| One login for every office PC | Domain |
| Home edition will not join the company network | Need Windows Pro or higher for Active Directory |
| Add users in one place for the whole company | Active Directory |
| Others need to print to the printer on this PC | Sharing tab in printer properties |

### BEST / MOST likely wording

- If a share is missing from browse but opens by exact path ending in `$`, hidden share is the BEST explanation — not “permissions automatically failed.”
- If Home edition cannot join AD, edition limitation is MORE likely than a wrong workgroup name.
- If internet is down but `\\fileserver\share` still works, treat local LAN success as possible — do not assume all networking failed.

## Common Mistakes and Misconceptions

- **“A dollar sign on a share name secures it.”** `$` only hides the share from the browse list. It does not stop someone who knows the name.
- **“A workgroup is a smaller domain.”** In a workgroup, every computer keeps its own accounts. A domain stores accounts in one directory.
- **“Any Windows 11 PC can join Active Directory.”** Home editions cannot. You need Pro or higher, plus an authorized join account.
- **“Active Directory is normal on a home network.”** It needs a domain server. Homes usually stay in a workgroup.
- **“Microsoft Entra join is the same thing as a traditional AD domain join.”** Related identity ideas, different join/management paths. Confirm which model the organization uses.
- **“No internet means shares cannot work.”** Local connectivity and internet connectivity are related but not identical. Test both.
- **“Mapped drives are the same as copying files locally.”** A mapped drive points at a network location; if the network or credentials fail, the letter breaks.

## Quick Review

| Topic | Remember |
| --- | --- |
| Share | Network access to a file, folder, or printer |
| Map | File Explorer or `net use`; optional reconnect and other credentials |
| Hide | Name ends with `$`; still reachable if you know it |
| Workgroup | Same group name, separate passwords |
| Domain | One credential store; central IT management |
| Join | Pro or better for traditional AD join; authorized credentials; network reachability |
| Entra vs AD | Cloud Entra join ≠ identical to classic AD domain join |
| Printer | Sharing tab → share name → OK |
| Connectivity | Local LAN success ≠ internet success (and vice versa) |

---

## Continue Learning

- Previous Topic: [Windows Settings](windows-settings.md)
- Next Topic: [Configuring Windows Firewall](configuring-windows-firewall.md)
- Related: [The Windows Network Command Line](the-windows-network-command-line.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
