# File Systems

CompTIA A+ Core 2 — 220-1202  
Objective 1.1 — Explain common operating system (OS) types and their purposes

## Lesson Overview

A **file system** is the structure an operating system uses to organize, find, and store data on a disk partition. When you install an OS, you typically create a **partition** (a slice of storage set aside for data), then **format** that partition. Formatting chooses the file system that will control how every file is written and read.

Different operating systems often prefer different file systems. Some file systems are also used across platforms — especially on removable media such as USB flash drives. On the A+ exam and on the help desk, you need to know:

- What a file system is and why it matters
- Which file systems Windows, Linux, Android, and Apple devices commonly use
- Practical limits and features that change how you format a drive

This lesson covers **NTFS**, **ReFS**, **FAT/FAT32**, **exFAT**, **ext4**, **XFS**, and **APFS**.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain the relationship between storage devices, partitions, formatting, and file systems
- Define partition, formatting, file system, journaling, encryption, and snapshots in plain language
- Identify the common home and use case for each major file system family
- Choose between **FAT32** and **exFAT** for USB drives based on file-size needs
- Recognize when a technician would encounter NTFS, ReFS, ext4, XFS, or APFS
- Distinguish “works across operating systems” from identical native read/write support on every OS

## Key Terms and Definitions

| Term | Meaning |
| --- | --- |
| Partition | A logical section of a storage device set aside to hold data |
| Formatting | Preparing a partition with a file system so the OS can store files there |
| File system | The structure the OS uses to store and locate files on that partition |
| Journaling | Keeping a log of pending file-system changes so interrupted writes are less likely to leave the disk corrupted |
| Encryption | Scrambling file or volume data so it is unreadable without the proper key or credentials |
| Snapshots | Point-in-time copies of file-system state that can be saved and restored quickly |

## Understanding File Systems

### Storage devices, partitions, formatting, and file systems

Think about installing an operating system or preparing a new drive:

1. The **storage device** (HDD, SSD, USB flash drive) is the physical hardware.
2. You create a **partition** — reserved space on that device.
3. You **format** the partition and choose a **file system**.
4. Only then can the OS save and open files using that structure.

Different OSes may use different file systems by default. Some file systems are designed to work across Windows, Linux, and macOS — Professor Messer’s examples are **FAT32**, **NTFS**, and **exFAT**. That does **not** always mean every OS has the same built-in, full-featured read/write support. Compatibility is common; native write support and feature support can still vary by OS version and tools.

### Warehouse analogy

A partition is an empty warehouse. Formatting picks the **shelving system**:

| File system | Shelving style |
| --- | --- |
| FAT32 | Old, simple shelves with a small per-item size limit |
| exFAT | Modern portable shelves built for flash drives and large items |
| NTFS | Full Windows warehouse with security, compression, and quotas |
| ReFS | Self-checking warehouse built for huge storage and resiliency |
| ext4 | Everyday Linux and Android shelving |
| XFS | High-speed data-center shelving for large, efficient storage |
| APFS | Apple shelving optimized for SSDs, with encryption and snapshots |

Wrong shelving means wrong limits, missing features, or a USB stick that another computer cannot use the way you expect.

## File System Types

### NTFS (NT File System)

**NTFS** is the file system you usually find on modern Windows system and data volumes. It was effectively an upgrade over FAT32 and adds management features inside the file system itself, including:

| Feature | Why it matters |
| --- | --- |
| Compression | Saves disk space |
| Encryption | Protects files |
| Quotas | Limits how much storage a user can consume |
| Other management features | Built into the file system |

Because Windows is so widely used, NTFS shows up across many environments. Many other operating systems can **read** NTFS. Some older or limited environments cannot **write** to it. On modern Linux and macOS, read and write access to NTFS is commonly available — but always expect environment-specific limits in real support work.

**Technician cue:** Everyday Windows drive → start with NTFS.

### ReFS (Resilient File System)

Microsoft’s **Resilient File System (ReFS)** is positioned as a next-generation upgrade path from NTFS. You will find levels of ReFS integration in **Windows Server 2012 and later**, and limited support on many modern Windows desktop editions.

Designed for desktop **and** server use, ReFS emphasizes:

| Trait | Detail |
| --- | --- |
| Large storage | Strong support for very large data arrays and huge partitions |
| Resiliency | Continuously checks integrity and can repair itself |
| Less manual checking | Reduces the need to run Check Disk-style utilities just to confirm health |
| Redundancy concepts | Includes some RAID-like ideas for building redundant storage |

ReFS is **not widely installed** yet. Microsoft continues to update and improve it. For most desktop support tickets, NTFS is still the everyday Windows choice.

**Technician cue:** Self-healing, large Windows storage / server-focused resiliency → think ReFS, not “NTFS is gone.”

### FAT / FAT32

**FAT** (File Allocation Table) has been around for a long time and has supported many operating systems. Systems still using FAT today are usually running **FAT32**.

Important teaching limits for FAT32:

| Limit | Typical value |
| --- | --- |
| Maximum volume size | About **2 TB** |
| Maximum individual file size | About **4 GB** |

Modern drives are often larger than 2 TB, so FAT32 is a poor choice for large system disks. It can still appear for small media or compatibility needs.

**Technician cue:** File copy fails because the file is larger than about 4 GB on a FAT32 volume → hit the FAT32 file-size limit.

### exFAT (Extended FAT)

**exFAT** was created by Microsoft specifically for **flash / USB** storage. If someone plugs in a USB drive, copies files, and removes the drive, that media is often formatted with exFAT.

| Advantage | Detail |
| --- | --- |
| Large files | Supports files much larger than FAT32’s ~4 GB limit |
| Cross-platform use | Common choice when moving data among Windows, Linux, and macOS |
| Removable media | Built for plug-in flash drives |

**Technician cue:** USB stick that must carry a large video file between a Windows PC and a Mac → prefer **exFAT** over FAT32.

### ext4

**ext4** is the fourth extended file system. It is commonly found on **Linux** systems and on **Android** phones. If you support Android devices, the storage file system you are most likely to associate with that platform in this objective is ext4.

**Technician cue:** Linux desktop/server default or Android phone storage → ext4.

### XFS

**XFS** is a high-performance Linux file system used heavily in data-center and server environments. Choose it when Linux workloads need large data capacity, high-speed processing, or efficient storage of massive datasets.

| Strength | Why it matters |
| --- | --- |
| Very large file-system size | Supports massive data stores |
| Journaling | Helps minimize corruption if a read/write is interrupted |
| Low fragmentation | Improves performance on spinning hard drives |
| Efficiency | Strong fit for large data and high-speed processing |

**Technician cue:** Linux server / high-performance large storage → XFS.

### APFS (Apple File System)

**APFS** is Apple’s file system. It became available in macOS 10.12.4 and is also used on **iOS** and **iPadOS** devices.

| Strength | Detail |
| --- | --- |
| SSD optimization | Written to perform well on solid-state drives |
| Encryption | Built in |
| Snapshots | Fast save and restore of file-system state |
| Data integrity | Stronger integrity options inside the file system |

**Technician cue:** Modern Mac, iPhone, or iPad storage → APFS. It is not limited to Mac computers.

## Real-World IT Support Examples

| Situation | What a technician often does |
| --- | --- |
| New Windows PC install | Partition the drive, format the system volume as **NTFS** |
| User’s USB stick will not accept a 6 GB video | Check whether the stick is **FAT32**; reformat to **exFAT** if needed (after backing up data) |
| Shared flash drive for Windows and macOS users | Prefer **exFAT** for large files and cross-platform use |
| Windows Server with very large resilient storage needs | Evaluate **ReFS** where supported; remember it is still not everywhere |
| Linux workstation or many Android phones | Expect **ext4** |
| Linux data-center host storing huge datasets | Expect or recommend **XFS** for scale and performance |
| MacBook or iPad storage questions | Work with **APFS** features such as encryption and snapshots |
| User asks why another OS can see an NTFS drive but not write to it | Explain that cross-OS **compatibility** is not the same as identical native write support on every system |

## CompTIA Exam Connections

### Keywords and clues

| Clue in a scenario | Likely answer |
| --- | --- |
| Format after creating a partition | Choosing a file system |
| Standard Windows system / data volume | NTFS |
| Compression, encryption, quotas on Windows | NTFS features |
| Self-repairing / integrity-focused Microsoft FS; Server 2012+ | ReFS |
| About 4 GB maximum individual file | FAT32 |
| Flash drive, large files, Windows + Linux/macOS | exFAT |
| Linux or Android everyday file system | ext4 |
| Linux high-performance / large data-center storage | XFS |
| macOS / iOS / iPadOS, SSD-optimized, snapshots | APFS |

### Important differences between similar file systems

| Pair | Remember |
| --- | --- |
| FAT32 vs exFAT | Both are portable-friendly; **exFAT** removes the harsh ~4 GB file limit and targets flash media |
| NTFS vs ReFS | **NTFS** is everyday Windows; **ReFS** adds resiliency and huge-scale focus but is not widely installed yet |
| ext4 vs XFS | **ext4** is the common Linux/Android choice; **XFS** leans toward high-performance / large Linux storage |
| NTFS vs APFS | Windows vs Apple defaults — do not mix them up in OS-family questions |

### Common mistakes and misconceptions

- **“FAT32 and exFAT are the same.”** They are related ideas, but exFAT is the better fit when large files must travel on removable media.
- **“ReFS has replaced NTFS everywhere.”** Not true. NTFS remains the usual Windows choice; ReFS is still evolving and not widely installed.
- **“APFS is only for Macs.”** APFS is also used on iOS and iPadOS.
- **“If a file system is compatible across OSes, every OS writes to it the same way.”** Cross-platform use is common for FAT32, NTFS, and exFAT, but native read/write capability and feature support can still differ by OS and tools.
- **“Any USB stick should be FAT32.”** Fine for small files and older compatibility needs; a bad default when users move large media files.

### Scenario-style thinking (no practice questions)

- A user copies a movie larger than 4 GB to a USB stick and gets an error → check for FAT32 and consider exFAT.
- A ticket mentions Windows quotas or file encryption at the file-system layer → NTFS features.
- A description stresses self-checking, huge partitions, and Server 2012+ Microsoft storage → ReFS.
- A Linux admin needs journaling and strong performance for large spinning-disk data stores → XFS traits fit.
- An Apple device question mentions SSD optimization and snapshots → APFS.

## Comparison Table

| File system | Common operating system | Main features | Typical use case |
| --- | --- | --- | --- |
| NTFS | Windows | Compression, encryption, quotas, management features | Everyday Windows system and data volumes |
| ReFS | Windows Server (2012+); limited desktop support | Resiliency, integrity checking, very large storage | Large, resilient Microsoft storage environments |
| FAT / FAT32 | Many OSes (legacy / compatibility) | Broad compatibility; ~4 GB max file; ~2 TB volume teaching figure | Small media and older compatibility needs |
| exFAT | Windows, Linux, macOS (removable media) | Large files; built for flash storage | USB / flash drives shared across platforms |
| ext4 | Linux, Android | Common extended file system for those platforms | Everyday Linux systems and Android phones |
| XFS | Linux (servers / data centers) | Large scale, journaling, low fragmentation, high performance | High-performance Linux storage workloads |
| APFS | macOS, iOS, iPadOS | SSD optimization, encryption, snapshots, integrity | Apple desktops and mobile devices |

## Quick Review

| Topic | Remember |
| --- | --- |
| Order of setup | Partition → format → file system |
| What a file system is | Structure used to store and find data on a partition |
| Windows daily driver | NTFS |
| Windows resilient / large-scale option | ReFS (not widely installed yet) |
| ~4 GB max file | FAT32 |
| USB + large files + cross-OS | exFAT |
| Linux / Android common choice | ext4 |
| Linux high-performance / large data | XFS (journaling, scale, efficiency) |
| Apple devices | APFS (SSD-focused; encryption; snapshots) |
| Compatibility caution | Cross-OS use ≠ identical native read/write everywhere |

---

## Continue Learning

- Previous Topic: [Operating Systems Overview](operating-systems-overview.md)
- Next Topic: [Installing Operating Systems](installing-operating-systems.md)
- Back to [Domain 1 — Operating Systems](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
