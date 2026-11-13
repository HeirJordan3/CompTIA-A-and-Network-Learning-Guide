# Installing Operating Systems

CompTIA A+ Core 2 — 220-1202  
Objective 1.2 — Given a scenario, install and configure the appropriate Microsoft Windows operating system

## Lesson Overview

Installing an operating system creates a classic chicken-and-egg problem: if the computer has no usable OS yet, how do you run an installer?

Technicians solve that by booting into a **bare-bones installer** from USB, network, recovery media, an image, or another drive. From there they choose how to install the OS, how to divide the disk into **partitions**, which **partition style** to use (**GPT** or **MBR**), and how to **format** the target volume.

Help desk and field technicians use these skills constantly for new device setup, broken-OS recovery, multi-boot systems, and company-wide image rollout. The wrong boot method, install type, or partition choice can waste hours — or erase the wrong data.

## Learning Objectives

By the end of this lesson, you should be able to:

- Compare common OS installation boot methods (USB, PXE, local/external drives, internet, ISO, local partition)
- Choose among clean install, in-place upgrade, image deployment, remote install, repair install, and recovery options
- Explain zero-touch deployment and why organizations use it
- Describe partitions, volumes, recovery partitions, and multi-boot layouts
- Compare GPT and MBR partition styles, including UEFI/BIOS and Secure Boot considerations
- Contrast quick format and full format, including data-recovery and sanitization limits
- Recognize exam keywords that point to the correct install or disk configuration choice

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Bootable media | Storage prepared so firmware can start an installer or OS from it (often a USB flash drive) |
| PXE | Preboot Execution Environment — network boot that loads an installer from a PXE server |
| ISO image | A single disk-image file that contains what would normally be on optical install media |
| Clean installation | Wipe the target partition and reinstall the OS from scratch; previous files on that partition do not remain |
| In-place upgrade | Install a newer OS version while keeping applications and user data in place |
| Image deployment | Capture a prepared system (OS + apps + settings) as an image and deploy that image to other computers |
| Zero-touch deployment | Highly automated install/config with little or no user prompting |
| Recovery partition | Usually hidden partition that stores OS recovery/install files |
| Third-party drivers | Vendor drivers loaded during setup so the installer can use storage, network, or other hardware it does not recognize by default |
| Partition | A logical section of a storage drive set aside for data |
| Volume | In Windows documentation, a formatted partition ready to store files |
| GPT | GUID Partition Table — modern partition style using globally unique identifiers |
| MBR | Master Boot Record — older partition style still found on legacy systems |
| Primary partition | On MBR, a partition type that can be bootable |
| Extended partition | On MBR, an optional container used when you need more than four partitions |
| Logical partition | A partition created inside an MBR extended partition; commonly used for data and not marked as the MBR active boot partition |
| Quick format | Fast format that rebuilds the file-system table without a full drive wipe/check cycle |
| Full format | Slower format that more thoroughly clears prior contents (traditionally by writing zeros across the disk) |

## Operating System Installation Methods

Think of the boot method as how you get into an empty house when the keys are missing. You still need a way in before you can remodel.

### Bootable USB

A **bootable USB** flash drive is prepared with specialized software so the motherboard can boot from it. The OS installation files live on that drive. The system firmware must allow USB boot.

**Support scenario:** A technician visits a failed desktop, boots from a Windows USB installer, and rebuilds the OS on-site.

### PXE network boot

**PXE** (pronounced “pixie”) stands for **Preboot Execution Environment**. Instead of carrying USB media to every PC, the computer boots across the **local network**, finds a PXE server, and loads the installer as if it were a local drive. Firmware must support PXE boot.

**Support scenario:** A help desk cannot use USB on locked-down machines, so systems network-boot to a PXE server for imaging.

### Internal and external drives

Internal or external SSDs/HDDs can also hold install files and be made bootable. An external bootable drive can move from computer to computer for repeated installs.

**Support scenario:** A field tech keeps a hot-swappable SSD with the company installer and boots each laptop from that drive.

### Internet-based installation

Some systems start with a small bootstrap, then download the remaining install files from the internet. Examples from the training content include certain **Linux** distributions, **macOS** recovery that downloads macOS over the internet, and **Windows** install/update paths that pull files from an online source.

**Support scenario:** A Mac with a damaged local recovery image uses internet recovery to download a fresh macOS installer.

### ISO images

Older OS media shipped on CD/DVD. An **ISO image** is a standard disk-image file that contains everything from that optical disc. You can boot from an ISO in virtualization software, or use hardware/tools that mount the ISO so it appears as a physical disc.

**Support scenario:** A tech builds a Windows VM by attaching a Windows ISO in Hyper-V or VMware and booting the virtual DVD.

### Local partition installation

The same install files can live on a **local partition**. You boot from that partition and install the OS onto a **different** partition on the same computer.

**Support scenario:** A dual-purpose lab PC keeps installer files on partition D: and installs a clean OS onto partition C:.

### Multi-boot configurations

A **multi-boot** system has more than one OS on the same physical device — for example Windows and Linux. At startup, the user chooses which OS to boot. Separate partitions per OS are common.

**Support scenario:** A developer needs Windows for Office apps and Linux for servers, so both are installed and selected from a boot menu.

## Installation Options

Once the installer is running, choose **how** the OS lands on the disk.

| Option | What happens | When it fits |
| --- | --- | --- |
| Clean installation | Target partition is wiped; OS reinstalled from scratch; previous files on that partition do not remain | Broken OS, malware cleanup (after backup), new disk, starting over |
| In-place upgrade | Newer OS version installed over a working OS; apps and data stay | Healthy PC that only needs a newer Windows version |
| Image deployment | One golden system is captured; that image is applied to many PCs | Standard company desktops/laptops |
| Remote network installation | Install files come from a network share/server; no local USB/DVD required | Sites where network access is easier than removable media |
| Repair installation | OS files are overwritten; user files/documents are typically left in place | OS is damaged but user data should be preserved |
| Recovery partition | Hidden recovery area supplies install/repair files already on the disk | No installer USB on hand; OEM recovery needed |
| Third-party drivers | Load storage/network/other drivers during setup | Installer cannot see the disk or network without vendor drivers |

### Clean installation

A **clean install** deletes what was on the target partition and installs a fresh OS. When it finishes, previous files from that partition are gone because you started over.

### In-place upgrade

An **in-place upgrade** updates a working OS to a newer version while keeping applications and data. You do not reinstall every app or restore every document from backup — if the upgrade succeeds.

### Image deployment

Build one computer the way the organization wants it (OS, apps, settings), capture an **image**, then deploy that image to other machines. The process can be fully automated so reimaging needs no human clicks from start to finish.

### Remote network installation

Place install files on a network drive or server and start setup from that share. Useful when you do not want to carry USB or optical media.

### Repair installation and recovery partition

Most modern OSes create a **recovery partition** — often hidden — that stores recovery/install files. If you are troubleshooting without install media, those files may already be on the disk.

A **repair installation** (Windows context in this objective) replaces damaged OS files while leaving user files and documents in place. It is commonly used when other fixes fail.

**Important distinction:** Recovery media/partitions and repair installs are related but not identical. Different procedures preserve different categories of data. A clean install of the partition is destructive to that partition’s prior contents; a repair install is designed to keep user documents while replacing OS files. Always confirm what the chosen procedure will keep or erase before you start.

### Third-party driver installation

If the installer’s built-in drivers cannot talk to a storage controller or network adapter, setup prompts you to load **third-party drivers**. After those drivers load, the installer can reach the disk, network, or other hardware needed to finish.

## Zero-Touch Deployment

**Zero-touch deployment** is an automated installation and configuration process with little or no prompting for the end user. Scripts and management tools apply company-specific settings such as:

- Domain or directory join
- Email server settings
- Other organization-required configuration

### Why organizations use it

Users may be worldwide, on many device models, and still need a consistent, secure corporate setup. Zero-touch reduces travel, desk-side visits, and “click through setup” errors.

### Real-world example

IT prepares a laptop image and automation package, ships the laptop to a remote employee, and the employee simply opens the box and powers on. Automated steps finish the OS/configuration work so the user can be productive with minimal interaction.

Once the zero-touch process is built and tested, the same workflow can reimage devices and ship them anywhere in the organization.

## Disk Partitioning

A **disk partition** is a logical section of a storage drive reserved for data — like dividing a warehouse into rooms before you install shelving (the file system).

Why create partitions?

- Some OSes prefer multiple partitions; others use one large partition
- Separate OS data from user data
- Support **multi-boot** (one partition for Windows, another for Linux)
- Hold a **recovery partition** created during OS setup

After a normal install you may “see” one large OS volume in File Explorer, while Disk Management still shows an extra hidden recovery partition.

### Volumes

Once a partition is formatted with a file system, Microsoft documentation often calls it a **volume**. Remember: a volume is a formatted partition ready for files.

**Analogy:** Partitioning draws the room walls. Formatting installs the flooring and shelving. The usable room is the volume.

**Caution:** Creating, deleting, or changing partitions can destroy data. Confirm the correct disk and partition before you click.

## GPT vs. MBR

Partition **style** (GPT or MBR) is not the same thing as a **file system** (NTFS, exFAT, and so on). First you choose how the disk’s partition table is organized. Later you format partitions with a file system so they can store files.

### GPT — GUID Partition Table

**GPT** uses globally unique identifiers for partitions. Modern OS installs commonly use GPT.

| Trait | Detail |
| --- | --- |
| Typical use | Current Windows and other modern installs |
| Partition count | Up to **128** partitions (Windows GPT teaching figure) |
| Capacity | Designed for extremely large disks; Windows currently limits a GPT partition to **256 TB** in the training material |
| Layout model | Partitions are treated more uniformly — no MBR-style extended/logical nesting |

**UEFI consideration:** Booting an OS from a GPT system disk generally expects **UEFI** firmware. That is different from merely understanding that GPT is the modern partition style for large disks. Do not confuse “this PC boots Windows from GPT via UEFI” with “every GPT data disk behaves the same on every firmware mode.”

### MBR — Master Boot Record

**MBR** is the older partition style. You still see it on legacy devices.

| Trait | Detail |
| --- | --- |
| Max partition size | **2 TB** |
| Primary partitions | Up to **4** per drive |
| Active partition | Only **one** primary partition can be marked active for the classic MBR boot process |
| Extended partition | Optional; used when you need more than four partitions |
| Logical partitions | Created inside the extended partition; commonly hold data |

If four primary partitions are already used, the MBR primary limit is reached. To create additional partitions, use one **extended** partition and place **logical** partitions inside it.

For CompTIA A+ teaching of classic BIOS/MBR boot: the partition marked **active** is a **primary** partition. Logical partitions are the usual place for extra data volumes. That does **not** mean an operating system can never live on or be started from a logical partition in every environment — some bootloaders can chain-load an OS from more complex layouts — but the exam-focused MBR model still centers on primary + active for the standard boot path.

### Boot compatibility and Secure Boot

| Topic | Remember |
| --- | --- |
| Modern GPT system boot | Typically paired with **UEFI** |
| Legacy MBR | Common with older BIOS-style boot |
| BIOS compatibility / legacy mode | Used during BIOS→UEFI transition; enabling it commonly **disables Secure Boot** |
| Newer OS expectation | Many newer operating systems expect Secure Boot-capable UEFI paths and may not work well in legacy compatibility mode |

### GPT vs MBR comparison

| Feature | GPT | MBR |
| --- | --- | --- |
| Full name | GUID Partition Table | Master Boot Record |
| Era | Modern default | Legacy / older disks |
| Typical firmware for OS boot | UEFI | Legacy BIOS (often) |
| Max partitions (teaching) | Up to 128 | 4 primary (or primary + extended/logical layout) |
| Max partition size (teaching) | Very large; Windows GPT limit **256 TB** | **2 TB** |
| Extended / logical model | Not used the MBR way | Extended holds logical partitions |
| Bootable partition rules | Modern UEFI/GPT boot process | One active **primary** for classic MBR boot; logical usually for data |
| Secure Boot | Supported on UEFI paths | Legacy compatibility mode often disables Secure Boot |

## Formatting Options

After a partition exists, it must be **formatted** with a file system before it can store files. In Windows you commonly choose **quick format** or **full format**.

| Format type | What it does | Trade-off |
| --- | --- | --- |
| Quick format | Builds a new file-system table; does not perform a full physical wipe/check cycle | Fast; prior data may still be recoverable with the right tools |
| Full format | More intensive; traditionally writes zeros across the disk and clears prior contents more thoroughly | Much slower; stronger than quick format for clearing old file-system contents |

Windows 10/11 setup defaults to **quick format**. A full format can be selected through tools such as **diskpart** when needed.

### Data recovery and sanitization

- Quick format mainly resets file-system tracking. Old data may still be recoverable.
- Full format is more thorough than quick format for ordinary teaching scenarios.
- Full formatting is **not** the same as certified secure erasure or media sanitization — especially on **SSDs**, where controller behavior, wear leveling, and TRIM mean “wrote zeros once” is not a guarantee of forensic-grade wipe.
- If a drive must leave the organization securely, follow your company’s data-sanitization procedure rather than assuming any installer format checkbox is enough.

## CompTIA Exam Connections

### Keywords and clues

| Clue in a scenario | Likely focus |
| --- | --- |
| Boot installer from USB flash drive | Bootable USB |
| Network boot / PXE server / “pixie” | PXE |
| Disk image of CD/DVD install media | ISO |
| Keep apps and user files; newer OS version | In-place upgrade |
| Wipe partition and start over | Clean install |
| Same configured OS/apps pushed to many PCs | Image deployment |
| Install files on a network share | Remote network installation |
| Hidden OEM/recovery area on disk | Recovery partition |
| Replace OS files; keep documents | Repair installation |
| Setup cannot see disk/NIC until vendor driver loads | Third-party drivers |
| User powers on; scripts finish company setup | Zero-touch deployment |
| UEFI, many partitions, modern large disk | GPT |
| 2 TB limit, four primary partitions | MBR |
| Extra partitions inside extended | Logical partitions (MBR) |
| Fast default format in Windows setup | Quick format |
| Slower zeroing-style format | Full format |

### Commonly confused installation methods

| Pair | Distinction |
| --- | --- |
| Clean install vs in-place upgrade | Clean wipes and rebuilds; upgrade keeps apps/data on a working OS |
| Clean install vs repair install | Clean removes prior partition contents; repair replaces OS files and is intended to keep user documents |
| PXE vs internet-based install | PXE boots from a **local network** PXE server; internet install pulls files from online sources after bootstrap/recovery |
| Image deployment vs zero-touch | Imaging copies a prepared system; zero-touch emphasizes hands-off automation and org configuration (often used together) |
| GPT/MBR vs NTFS/exFAT | Partition **style** vs file **system** — different decisions |

### Scenario-style thinking (no practice questions)

- Locked-down desktops with no USB allowed → consider PXE or network install.
- Remote employee receives a laptop and only powers it on → zero-touch deployment.
- User wants Windows 11 but must keep Office and documents on a healthy PC → in-place upgrade path.
- Drive shows 3 TB usable needs beyond MBR limits → GPT territory for modern large disks.
- Need a fifth partition on an old MBR disk → extended + logical layout; classic MBR boot still uses an active primary partition.
- Installer cannot see the NVMe/RAID controller → load third-party storage drivers during setup.

## Common Mistakes and Misconceptions

- **“GPT is a file system.”** No. GPT is a partition table style. NTFS, exFAT, and similar are file systems applied when you format a partition.
- **“Formatting always securely erases data.”** Quick format does not. Full format is more thorough but is still not a guaranteed secure sanitization method, especially on SSDs.
- **“Clean install and in-place upgrade are the same.”** Clean starts over on the partition; in-place upgrade preserves apps and data on a working OS.
- **“PXE is the same as internet installation.”** PXE uses a local network boot server. Internet-based installs download from online sources.
- **“Every OS uses the same partition layout.”** Some prefer one large partition; others use several. Multi-boot and recovery layouts differ by platform and vendor.
- **“Logical partitions are never involved in booting.”** Too absolute. On classic BIOS/MBR, the **active** boot partition is a **primary** partition, and logical partitions are usually for data — but advanced bootloaders can still use more complex layouts. Learn the exam model without treating every real-world exception as impossible.
- **“BIOS compatibility mode is a harmless toggle.”** It commonly disables **Secure Boot** and can break expectations for newer OS installs.

## Quick Review

| Topic | Remember |
| --- | --- |
| Boot methods | USB, PXE, internal/external drives, internet, ISO, local partition |
| Multi-boot | Multiple OSes on one device; choose at startup |
| Clean vs upgrade | Wipe/reinstall vs keep apps and data |
| Image / remote / repair | Clone many PCs; install from network; replace OS files, keep user files |
| Zero-touch | Automated company setup with little user input |
| Partition vs volume | Partition = reserved space; volume = formatted partition (Windows term) |
| GPT | Modern style; UEFI boot pairing; up to 128 partitions; large disks |
| MBR | 2 TB limit; 4 primary; extended/logical for more; classic boot uses one active primary |
| Secure Boot | Legacy/compatibility modes often disable it |
| Quick vs full format | Fast file table reset vs slower thorough clear — not automatic secure erase |

---

## Continue Learning

- Previous Topic: [File Systems](file-systems.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
