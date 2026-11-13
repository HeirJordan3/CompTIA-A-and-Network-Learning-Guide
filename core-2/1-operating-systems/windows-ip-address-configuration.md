# Windows IP Address Configuration

CompTIA A+ Core 2 — 220-1202  
Objective 1.7 — Given a scenario, configure Microsoft Windows networking features on a client/desktop

## Lesson Overview

Windows IP configuration is how a PC gets the addresses it needs to use a network. Most of the time that happens automatically with **DHCP**. If DHCP is missing, Windows can invent a local-only **APIPA** address, or you can set a **static** address or an **Alternate Configuration** yourself.

A PC that “has no internet” is often using the wrong kind of address. Technicians must tell apart a normal DHCP address, an APIPA address that only works on the local link, and a static address that must stay fixed.

This lesson is primarily **IPv4**-focused (matching the Professor Messer transcript). A short IPv6 note is included so beginners know both stacks can appear in Windows adapter properties and in `ipconfig`.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain DHCP vs static addressing and DHCP reservations
- Identify APIPA / link-local (`169.254.x.x`) and why it cannot reach the internet
- Define IP address, subnet mask/prefix, default gateway, and DNS
- Explain the IPv4 loopback address `127.0.0.1`
- Configure Alternate Configuration when DHCP may be unavailable
- Inspect and renew addressing with `ipconfig` commands safely
- Recognize when DNS cache flush helps — and when it does not

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| IPv4 | The common 32-bit Internet Protocol addressing system (example style: `10.1.10.102`) |
| IPv6 | Newer 128-bit addressing; may appear alongside IPv4 on the same adapter |
| DHCP | Dynamic Host Configuration Protocol — assigns IP settings automatically |
| Static address | An IP address configured to stay the same |
| Reservation | A DHCP server entry that always gives one device the same address |
| APIPA | Automatic Private IP Addressing — Windows self-assigns `169.254.x.x` |
| Link-local | An address that only works on the local network segment |
| Subnet mask / prefix | Defines which addresses are “local” vs need a gateway (IPv4 mask; IPv6 uses a prefix length) |
| Default gateway | Router used to leave the local subnet |
| DNS | Turns a domain name into an IP address |
| Loopback | `127.0.0.1` — this computer’s internal IP test address |
| Alternate Configuration | Backup IPv4 setup Windows uses when DHCP is unavailable |

## Beginner Analogy

| Method | Like |
| --- | --- |
| DHCP | A hotel that assigns you a room number when you check in |
| DHCP reservation | The hotel always saving the same room for you |
| Static address | You nail your own room number to the door |
| APIPA | You invent a number that only people in this hallway understand |
| Default gateway | The front door that leads to every other building |
| DNS | The directory that turns a name into a room number |
| Loopback | Talking to yourself to prove your phone works |

## How Addressing Works

### DHCP

**DHCP** gives a computer an IP address automatically. It is the default on most operating systems. Turn on the PC at home, in a coffee shop, or in a hotel, and it can get an address and use the network without you typing one.

At home, the DHCP server is often built into the internet router. A business often runs **more than one** DHCP server so the service still works if one server fails.

DHCP can hand out the IP address, subnet mask, default gateway, and DNS servers together.

### APIPA (Link-Local)

If no DHCP server answers and nobody configured a static address, Windows assigns itself an **APIPA** address (also called a **link-local** address).

| Fact | Detail |
| --- | --- |
| Teaching range | `169.254.1.0` through `169.254.254.255` |
| Where it works | Only on the local network |
| Internet | No — an APIPA address cannot be routed onto the internet |

See `169.254.x.x` on a workstation and treat it as “DHCP did not give this PC an address.”

### Static Addresses

A **static** address stays the same every time the device turns on. Two ways to get that:

- Type it on the computer
- Create an **address reservation** on the DHCP server so that device always receives the same address

A manual TCP/IP setup needs three values first:

| Value | Job |
| --- | --- |
| **IP address** | Unique identifier for this computer |
| **Subnet mask** | Defines which IP subnet this device is on |
| **Default gateway** | Router that forwards traffic off the local subnet |

You usually also set **DNS**. DNS turns a name such as `www.example.com` into an IP address.

### IPv6 (brief addition beyond the IPv4-focused transcript)

Windows adapters commonly show **Internet Protocol Version 6 (TCP/IPv6)** next to IPv4. IPv6 uses a different address format and a **prefix length** instead of a dotted IPv4 subnet mask. For this lesson, remember:

- Both IPv4 and IPv6 may be enabled
- Troubleshooting still starts with “Do I have a usable address and gateway?”
- Deep IPv6 design is outside this transcript’s scope

### Loopback

The IPv4 **loopback** address is **127.0.0.1** (any address on the `127` network is loopback, but remember `127.0.0.1`). It means “this computer.” Pinging it checks that the local IP stack is working. It does **not** test the cable, the router, or the internet.

## Configuring Alternate Configuration (Procedure)

Sometimes you want DHCP when a server is available, and a **known address** when it is not — not an APIPA address.

**Prerequisite:** Choose **Obtain an IP address automatically** first. The **Alternate Configuration** tab appears only then.

1. Control Panel → **Network and Sharing Center**
2. **Change adapter settings**
3. Right-click the Ethernet adapter → **Properties**
4. **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**
5. Select **Obtain an IP address automatically**
6. Open **Alternate Configuration** → **User configured**
7. Enter the IP address, subnet mask, default gateway, and DNS servers to use if DHCP fails
8. Click OK / OK

Example of a user-configured alternate (teaching example):

| Setting | Example |
| --- | --- |
| IP address | `10.1.10.102` |
| Subnet mask | `255.255.255.0` |
| Default gateway | `10.1.10.1` |
| DNS | A DNS server you choose (for example a public resolver such as Quad9) |

**Expected outcome:** Windows uses DHCP when a server answers, and this alternate set when it does not.

**Win10/Win11 note:** Settings → Network & Internet also reaches adapter properties; Control Panel → Network and Sharing Center remains a reliable classic path for this procedure.

## Inspecting and Troubleshooting with `ipconfig`

Use Command Prompt. Most of these are informational or lease/DNS cache operations — still confirm you are on the correct PC (`hostname`) before changing leases on a production machine.

| Command | What it does | When to use | Caveats |
| --- | --- | --- | --- |
| `ipconfig` | Shows basic IPv4/IPv6 addresses, masks/prefixes, gateways | First look | Less detail than `/all` |
| `ipconfig /all` | Adds host name, DNS servers, DHCP enabled?, lease info, and more | Confirm DHCP vs static, DNS, APIPA | Read carefully — many adapters may appear |
| `ipconfig /release` | Releases the current **DHCP** lease | Before renew; moving networks; clearing a bad DHCP lease | Meaningful on **DHCP-configured** adapters; drops addressing until renew; can interrupt connectivity. Not the right tool for fixing a hand-typed static address |
| `ipconfig /renew` | Requests a new **DHCP** lease | After release, or when DHCP should work again | Requires a reachable DHCP server and an adapter set to obtain an address automatically; fails if DHCP is down |
| `ipconfig /flushdns` | Clears the local DNS resolver cache | After DNS changes; stale wrong IP for a name | Does **not** repair cable, gateway, firewall, DHCP failure, or every “no internet” issue |

### Safe workflow example

1. `ipconfig /all` — note IP, gateway, DNS, DHCP yes/no, and whether you see `169.254.x.x`
2. If DHCP looks stuck: `ipconfig /release` then `ipconfig /renew`
3. If names fail but IPs work: consider `ipconfig /flushdns`, then test with `nslookup` / ping (see [The Windows Network Command Line](the-windows-network-command-line.md))
4. If still APIPA: focus on DHCP server/network path — not “flush DNS”

**Support scenario:** User has `169.254.x.x` and no gateway. Flushing DNS will not create a DHCP lease. Fix DHCP reachability or configure static/alternate addressing intentionally.

## Comparison Table

| Situation | Address you should see |
| --- | --- |
| Normal home or office network | DHCP address, plus a real gateway and DNS |
| No DHCP and no static or alternate setup | APIPA `169.254.x.x` — local only |
| Server or printer that must not change | Static address, or a DHCP reservation |
| DHCP at the office, fixed address at a site with no DHCP server | Automatic IP, plus Alternate Configuration |
| “Is the IP software on this PC alive?” | Ping `127.0.0.1` |

## CompTIA Exam Connections

Coverage aligns with course-map / Messer Windows IP Address Configuration transcript for objective 1.7. Official CompTIA PDF objectives are not in-repo.

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| PC gets an address by itself on a normal network | DHCP |
| Address starts with `169.254` | APIPA — no DHCP, no manual address |
| Can talk to nearby PCs but not the internet | Link-local / APIPA, or no usable gateway |
| Same address every boot, typed on the PC | Static configuration |
| Same address every boot, still using DHCP | DHCP reservation |
| Must know three settings for manual TCP/IP | IP address, subnet mask, default gateway |
| `www.example.com` becomes an IP | DNS |
| Ping `127.0.0.1` works | Local IP stack is up |
| DHCP when possible, this address if not | Alternate Configuration tab |
| Stale name-to-IP mapping on this PC | `ipconfig /flushdns` (limited scope) |

## Common Mistakes and Misconceptions

- **“APIPA means the internet is down but the address is fine.”** APIPA is only for the local link.
- **“Loopback tests the network cable.”** `127.0.0.1` never leaves the computer.
- **“Alternate Configuration replaces DHCP.”** It is the fallback after automatic obtain is selected.
- **“A static address and a DHCP reservation are configured in the same place.”** Static is on the device; reservation is on the DHCP server.
- **“Flushing DNS fixes every connectivity problem.”** It only clears local DNS cache. It does not assign a DHCP address or repair a dead gateway.

## Quick Review

| Topic | Remember |
| --- | --- |
| Default | DHCP |
| No DHCP, no static | APIPA `169.254.1.0`–`169.254.254.255`, local only |
| Manual | IP, subnet mask, default gateway, often DNS |
| Always the same via DHCP | Reservation |
| Test this PC only | `127.0.0.1` |
| Fallback | Alternate Configuration after “Obtain automatically” |
| Inspect | `ipconfig` / `ipconfig /all` |
| Lease | `/release` then `/renew` |
| DNS cache | `/flushdns` — not a universal repair |

---

## Continue Learning

- Previous Topic: [Configuring Windows Firewall](configuring-windows-firewall.md)
- Next Topic: [Windows Network Connections](windows-network-connections.md)
- Related: [The Windows Network Command Line](the-windows-network-command-line.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
