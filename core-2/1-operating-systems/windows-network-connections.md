# Windows Network Connections

CompTIA A+ Core 2 — 220-1202  
Objective 1.7 — Given a scenario, configure Microsoft Windows networking features on a client/desktop

## Lesson Overview

Windows can join many kinds of networks: Ethernet, Wi-Fi, cellular (WWAN), dial-up, or an encrypted **VPN** tunnel back to the office. **Network location/profile** (private or public) then decides how much of your PC you expose. You can also map a drive letter to a share and mark expensive links as **metered**.

The same laptop behaves differently at a desk, at home, and in a coffee shop. This lesson focuses on **connection types and client settings**. Shared folders, workgroups, domains, and Active Directory concepts are covered in depth in [Windows Network Technologies](windows-network-technologies.md) — cross-linked here without duplicating that whole lesson.

## Learning Objectives

By the end of this lesson, you should be able to:

- Set up Ethernet, VPN, dial-up, and related connections from Control Panel or Settings
- Explain how a VPN client and VPN concentrator protect traffic on a public network
- Configure wireless basics: SSID, AES, WPA2/WPA3 Personal vs Enterprise
- Explain why a wired link usually becomes the default connection
- Describe WWAN options (adapter, tether, hotspot)
- Configure proxy settings and exceptions
- Choose private vs public network profiles appropriately
- Map and disconnect a network drive
- Enable metered connections and data limits
- Separate physical-link, IP, DNS, internet, VPN/proxy, and share-access problems

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| VPN | Encrypted tunnel across a public network |
| VPN concentrator | Device at the company that ends the VPN tunnel |
| SSID | Service Set Identifier — the wireless network name |
| AES | Current common wireless encryption; TKIP is older |
| PSK | Pre-shared key — the personal Wi-Fi password |
| 802.1X | Enterprise Wi-Fi login against a central authentication server |
| WWAN | Wireless Wide Area Network — cellular-style connection |
| Proxy | A middle device that requests and checks traffic for you |
| Private network | Home or work profile |
| Public network | Open-network profile with sharing and inbound access off by default |
| UNC path | `\\server\share` |
| Metered connection | A link Windows treats as limited or costly |

## Beginner Analogy

| Connection | Like |
| --- | --- |
| Ethernet | A private hallway inside the building — usually the fastest door |
| Wi-Fi | The same building, but you need the network name and a key |
| WWAN | Using the cell network when there is no building network |
| VPN | An armored tunnel from the coffee shop back to the office |
| Proxy | A security desk that fetches web pages for you and checks them first |
| Public profile | Hotel mode — do not share your files |
| Mapped drive | A short nickname (H:) for a folder that lives on another computer |

## Where You Create a Connection

| Path | Notes |
| --- | --- |
| Control Panel → **Network and Sharing Center** → **Set up a new connection or network** | Classic wizard |
| **Settings → Network & Internet** | Modern Windows 10/11 path with similar connection types |

You can connect to the internet, set up a new network, or connect to a workplace. The wizard asks for settings that match Ethernet, VPN, dial-up, and related types.

## VPN

A **VPN** (Virtual Private Network) sends traffic across a public network **encrypted**.

Example: company file servers live on a protected network. Coffee-shop Wi-Fi is open. A **VPN client** on the laptop encrypts traffic. A **VPN concentrator** at the company decrypts it and delivers it to internal resources. Replies reverse the process.

| Piece | Role |
| --- | --- |
| VPN client | Software on your PC; Windows includes one, or the company may require its own |
| Public network | The unsafe path (coffee shop, hotel, home internet) |
| VPN concentrator | Company device that ends the tunnel |
| Encryption | Protects the data while it crosses the public network |

### Built-in client path (high level)

1. Set up a connection → **Connect to a workplace**
2. Choose use your internet connection (**VPN**) rather than dial-up
3. Enter the concentrator address (example shape: `vpn.example.com`) and a connection name
4. Optionally require a **smart card**, remember credentials, and allow other users on this PC
5. Create the connection; enable/disable from the network icon in the system tray

A smart card is **something you have**. A password is **something you know**. A fingerprint is **something you are**. Together those support multi-factor authentication.

**Support scenario:** User can browse the internet at a hotel but cannot open `\\fileserver\share` until the VPN is connected — expected if shares live only on the corporate network.

## Wireless Networks

At home you often pick a network name and type a password. A business setup asks for more:

| Setting | Meaning |
| --- | --- |
| **SSID** | Wireless network name |
| Security type | Which protection the network uses |
| Encryption | How the wireless data is scrambled |
| Security key | The password or enterprise credentials |

**TKIP** is the older encryption type. Most networks now use **AES**.

| Mode | Typical use |
| --- | --- |
| **WPA2** or **WPA3 Personal** | Home — a **PSK** (pre-shared key) everyone types |
| **WPA2** or **WPA3 Enterprise** | Business — **802.1X** checks a central username and password |

## Wired Ethernet

Plug in a cable. That direct link is usually the **fastest**. When Ethernet, Wi-Fi, and WWAN are all up, Windows uses the **fastest as the default** — normally Ethernet.

Adapter IPv4 properties let you obtain an address automatically (DHCP), type a manual address, set DNS, and use **Alternate Configuration** if DHCP is unavailable. Details belong in [Windows IP Address Configuration](windows-ip-address-configuration.md).

## WWAN

A **WWAN** is a cellular connection.

| Method | Detail |
| --- | --- |
| Internal or USB adapter | Modem card or dongle |
| Tether | Phone shares its cell connection over a cable |
| Hotspot | Phone becomes a small Wi-Fi network |

Hardware adapters may need vendor software — check device documentation.

## Proxy Servers

A **proxy** sits between you and the rest of the network, often as a security control. It sends the request for you, checks the answer, then passes a safe response back.

Configure in either place:

- Control Panel → **Internet Options → Connections → LAN settings**
- **Settings → Network & Internet → Proxy**

You can use automatic setup, or type a proxy server and authentication. Some apps break through a proxy — add **exceptions** so those apps go straight to the internet.

## Network Location (Profile)

| Profile | Typical place | Default posture |
| --- | --- | --- |
| **Private** | Home or work | Treated as a safer network, often behind a firewall |
| **Public** | Coffee shop, hotel, open Wi-Fi | No file sharing, no inbound connections — highest default security |

You can customize either profile. Firewall profile behavior is covered in [Configuring Windows Firewall](configuring-windows-firewall.md).

## Mapping a Network Drive

You need the **server name** and the **share name**. Mapping assigns a local drive letter so you do not type the full path every time.

For share types, hidden `$` shares, workgroups, and domains, see [Windows Network Technologies](windows-network-technologies.md).

UNC path shape:

```text
\\fileserver\Gate Room
```

Two backslashes, the server, one backslash, then the share. If the share name has a space, put **quotes** around the destination on the command line.

### File Explorer procedure

1. Open File Explorer.
2. Choose **Map network drive** from the toolbar or the three-dot menu (Windows 10/11 UI placement can vary slightly).
3. Pick a free letter (for example **H:**).
4. Enter the folder path.
5. Optionally reconnect at sign-in / use different credentials.
6. Finish. Provide credentials if prompted.

**Expected outcome:** The new letter appears in File Explorer.

**Command-line equivalent:**

```text
net use H: "\\fileserver\Gate Room"
```

Right-click a mapped share to **disconnect** it (removes the shortcut letter — not the server files).

## Metered Connections

Some links bill by data used. Mark the connection as **metered** so Windows uses less data.

**Settings → Network & Internet → Ethernet** (or the wireless connection) → **Metered connection**.

**Set a data limit** shows app usage and lets you set a monthly limit, one-time limit, or unlimited, plus reset timing and the allowed amount.

## Troubleshooting: Separate the Problem Layers

| Problem layer | Typical clues | First checks |
| --- | --- | --- |
| Physical / link | No cable light, Wi-Fi disconnected, airplane mode | Cable, SSID, radio, adapter enabled |
| IP configuration | `169.254.x.x`, missing gateway, wrong static | `ipconfig /all`; DHCP vs static ([IP lesson](windows-ip-address-configuration.md)) |
| DNS resolution | IP ping works; names fail | DNS servers; `nslookup`; optional `ipconfig /flushdns` |
| Internet reachability | LAN works; public sites fail | Gateway ping; traceroute; ISP/path issues ([Network CLI](the-windows-network-command-line.md)) |
| VPN / proxy | Internet OK but company apps/shares fail; some apps break | VPN connected?; proxy exceptions |
| Shared-resource access | Path/map fails with access denied or not found | Credentials, share permissions, VPN required?, see Network Technologies |

**Support scenario:** Hotel Wi-Fi browses fine, mapped `H:` fails until VPN connects → shared-resource/VPN layer, not “Windows networking is completely broken.”

## Comparison Table

| Need | Use |
| --- | --- |
| Encrypt traffic from a public network to the office | VPN client to a concentrator |
| Extra VPN login factor | Smart card (something you have) plus password |
| Home Wi-Fi password | WPA2/WPA3 Personal, PSK, AES |
| Company Wi-Fi with your domain account | WPA2/WPA3 Enterprise, 802.1X |
| Cable and Wi-Fi both connected | Ethernet is usually the default because it is fastest |
| Cellular when there is no Wi-Fi | WWAN, tether, or hotspot |
| Company scans web traffic | Proxy, with exceptions for apps that cannot use it |
| Open Wi-Fi | Public profile — sharing off |
| Short name for a share | Map a drive, or `net use` (details in Network Technologies) |
| Pay-by-the-gigabyte link | Metered connection and a data limit |

## CompTIA Exam Connections

Coverage aligns with course-map / Messer Windows Network Connections transcript for objective 1.7. Official CompTIA PDF objectives are not in-repo.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Coffee shop to company file server, traffic encrypted | VPN |
| Device that decrypts the tunnel at the office | VPN concentrator |
| Password plus smart card | Multi-factor: know + have |
| Wireless network name | SSID |
| Old vs current wireless encryption | TKIP vs AES |
| Home Wi-Fi uses one shared password | WPA2/WPA3 Personal, PSK |
| Work Wi-Fi uses your user account | Enterprise, 802.1X |
| Ethernet, Wi-Fi, and WWAN all connected | Fastest (usually Ethernet) is the default |
| Phone shares internet | Tether or hotspot (WWAN) |
| Web requests go through a middle server | Proxy; exceptions bypass it |
| Hotel Wi-Fi should not share your files | Public network profile |
| `\\server\share` becomes H: | Mapped drive; quote names that contain spaces |
| Carrier charges by data used | Metered connection |

## Common Mistakes and Misconceptions

- **“A VPN makes the coffee shop network private.”** The coffee shop is still public. The VPN encrypts **your tunnel** to the company.
- **“WPA2 Personal and WPA2 Enterprise are the same login.”** Personal uses a PSK; Enterprise uses 802.1X.
- **“Every connection is equal.”** Windows prefers the fastest; Ethernet usually wins.
- **“Public and private are just labels.”** Public defaults to no file sharing and no inbound connections.
- **“A mapped drive is a second copy of the files.”** The letter is a shortcut to a share.
- **“No internet means shares cannot work.”** Local LAN or VPN-only resources can still work — test layers separately.

## Quick Review

| Topic | Remember |
| --- | --- |
| Setup | Network and Sharing Center, or Settings → Network & Internet |
| VPN | Client encrypts; concentrator decrypts; workplace wizard |
| Wi-Fi | SSID, AES, Personal PSK vs Enterprise 802.1X |
| Wired | Usually fastest, so it becomes the default |
| WWAN | Cell adapter, USB modem, tether, or hotspot |
| Proxy | Middle server; automatic or manual; app exceptions |
| Profile | Private at home/work; public when the network is open |
| Drive map | `\\server\share` or `net use`; quotes if the name has a space |
| Metered | Limits data use and can enforce a cap |
| Troubleshoot | Separate link / IP / DNS / internet / VPN-proxy / share layers |

---

## Continue Learning

- Previous Topic: [Windows IP Address Configuration](windows-ip-address-configuration.md)
- Next Topic: [macOS Overview](macos-overview.md)
- Related: [Windows Network Technologies](windows-network-technologies.md)
- Related: [Configuring Windows Firewall](configuring-windows-firewall.md)
- Related: [The Windows Network Command Line](the-windows-network-command-line.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
