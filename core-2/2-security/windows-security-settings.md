# Windows Security Settings

CompTIA A+ Core 2 — 220-1202  
Objective 2.2 — Given a scenario, configure Microsoft Windows security settings

## What You Need to Know

By the end of this lesson, you should understand:

- The difference between a **local** account, a **Microsoft** account, and a **domain** account
- Default users and groups, including why **Power Users** is still listed
- Login choices: password, **PIN**, biometrics, **single sign-on**, and **Windows Hello**
- How **NTFS** permissions and **share** permissions combine
- **Explicit** permissions versus **inherited** permissions
- Why **Run as administrator** and **User Account Control (UAC)** exist
- **BitLocker**, **BitLocker To Go**, and the **Encrypting File System (EFS)**

## What Is It?

Windows security settings are the accounts, login methods, file rights, and encryption that decide who can use a PC and what they can open. Some of this is local to one computer. Some of it follows a person across a company domain.

## Why Does It Matter?

Help desk calls are often “I can’t get in,” “I can open it at the PC but not from the network,” or “the laptop was stolen.” The exam uses the same splits: which account type, which permission wins, and which encryption protects a whole drive versus one folder.

## Real-World Analogy

Think of an office building and its filing cabinets:

| Office | Windows |
| --- | --- |
| A key cut for this one building | Local account |
| One keycard that works at several company sites | Microsoft account or domain account |
| The cabinet in the room | NTFS permissions |
| The rule at the front desk for people coming from another building | Share permissions |
| The stricter of the two rules is what you actually get | Most restrictive permission wins |
| A locked safe around the whole cabinet | BitLocker |
| A lock on one folder inside the cabinet | EFS |

## How It Works

### Three Kinds of Login

The sign-in screen is how you reach the desktop and the resources tied to your account.

| Account | Where it lives | Typical use |
| --- | --- | --- |
| Local account | This PC only | A home computer |
| Microsoft account | Microsoft’s cloud | The same username and settings on more than one device |
| Domain account | The organization’s Windows domain | Work. People call this a domain login or Active Directory credentials |

A Microsoft account and a domain account both travel with the person. The difference is who manages them: Microsoft’s cloud, or the company’s own domain.

### Local Users and Groups

**Computer Management → Local Users and Groups** lists the users and groups on this PC.

Even a new Windows install has a few accounts:

| Account | Access |
| --- | --- |
| Administrator | Full access to the system |
| Guest | Usually limited |
| A standard user | The everyday login, such as `alex` |

The **Groups** list includes names you will see on the exam:

| Group | Role |
| --- | --- |
| Administrators | Full control of the PC |
| Backup Operators | Can back up and restore files |
| Guests | Limited guest access |
| Power Users | An old group with a bit more than a standard user |

**Power Users** is still in the list for backwards compatibility. Current Windows administration does not rely on it.

### Ways to Sign In

The usual prompt is a username and a password. Windows can also ask for:

- A **PIN** (personal identification number)
- A **fingerprint**
- **Facial recognition** through the camera
- **Single sign-on** on a business domain: one morning login, then access to the devices and resources you need without typing the password again all day

### Passwordless Sign-In and Windows Hello

Passwords fail in two common ways. People pick a weak password they can remember, or they write a strong one on a note stuck to the monitor.

**Passwordless** authentication signs you in without a password, so there is nothing weak to guess and nothing to write down.

**Windows Hello** is Windows’ set of those options:

- Facial recognition
- Fingerprint
- PIN
- Security key (a device you plug into USB)
- Picture password

The account password is still available. Hello might not be the first method. The first sign-in can be a username and password, and later sign-ins can be passwordless. If you are not using the password, Windows may ask for more than one passwordless method.

### NTFS Permissions and Share Permissions

**NTFS permissions** are the rights on the local file system. Open the properties of a folder such as `Documents\Reports` and you can grant each user or group a set of rights.

When that folder is available across the network, it is a **share**. The share has its own rights.

If the two lists disagree, the **most restrictive** setting wins. A **Deny** overrides an **Allow**.

NTFS rights on a folder apply to the folders under it and to files you add later. The exception in this lesson: if you **move** a file or folder onto the same volume, it **keeps its original permissions**.

Example for the same Reports folder:

| Who is opening it | What applies | Result in the example |
| --- | --- | --- |
| Someone at this PC | NTFS only | Everyone has Full control (modify, read & execute, list folder contents, read, write) |
| Someone across the network | Share **and** NTFS | The share allows Read, not Change or Full control, so they can only read |

Local full control does not become network full control. The share’s Read limit is stricter, so Read is what the network user gets.

### Explicit and Inherited Permissions

**Explicit** permissions are the ones you set on that exact folder or file.

**Inherited** permissions flow down from a parent. Set rights on a Music folder, and each artist folder inside it receives those rights.

An explicit change wins over inheritance. If Music is set so nobody else has access, the artist folders inherit that block. Open one artist folder and set rights by hand, and that folder uses the explicit rights. It no longer follows the parent.

### Run as Administrator

A standard user can open apps, browse, and shut down. Editing a system file, installing software, or changing a service needs administrator rights.

Being in the **Administrators** group is not enough by itself. You still have to ask for those rights for that one program:

- Right-click the app and choose **Run as administrator**, or
- Search for `cmd`, then choose **Run as administrator** instead of Open

The same menu can open the file location or pin the app. The security choice is Run as administrator.

Windows does not leave you in an administrator session all day because malware would inherit those rights.

### User Account Control

**User Account Control (UAC)** is how Windows hands you those rights for one task.

Everyday work does not need them: using network resources, or changing your own profile. Installing an application or a service, or changing a Windows system app, does.

The prompt says: **“Do you want to allow this app to make changes to your device?”** You must already be in Administrators, or you must type an administrator’s credentials.

UAC can be set to **always notify** you, or to **never** show these prompts. Always notify is the safer choice. Never notify removes the warning.

### BitLocker and EFS

A lost laptop is a lost disk. **Full disk encryption (FDE)** scrambles the whole volume so a stranger cannot read it.

| Feature | What it encrypts | Notes |
| --- | --- | --- |
| BitLocker | The entire volume: Windows, personal files, and everything else stored there | Pulling the drive and attaching it to another PC still does not reveal the files |
| BitLocker To Go | A USB flash drive | A found flash drive stays unreadable |
| EFS (Encrypting File System) | Selected files or folders | On NTFS. Shown in the file or folder attributes. Not in Windows Home editions |

EFS ties the encryption to that user’s **username and password**. If the password is forgotten, or an administrator resets it, the encrypted files cannot be opened. Keep a backup so a password reset does not destroy the only copy.

## Side-by-Side Comparison

| Question | Answer |
| --- | --- |
| Account exists only on this PC | Local account |
| Same login on your own PCs, managed by Microsoft | Microsoft account |
| Work login managed by the company | Domain / Active Directory |
| Rights when you sit at the PC | NTFS |
| Rights when you connect over the network | The stricter of NTFS and the share |
| Rights you typed on this folder | Explicit |
| Rights that flowed down from the parent | Inherited |
| Whole drive unreadable if the laptop is stolen | BitLocker |
| One folder encrypted, and a password reset can lock you out | EFS |

## Key Terms

| Term | Meaning |
| --- | --- |
| Local account | A user defined on this computer |
| Microsoft account | A cloud account that can sync settings across devices |
| Domain account | A work account managed by the organization’s Active Directory |
| Administrator | The account or group with full control |
| Guest | A limited default account |
| Power Users | A legacy group kept for compatibility |
| PIN | A number used to sign in |
| Windows Hello | Face, fingerprint, PIN, security key, or picture password |
| Passwordless | Sign-in that does not use a password |
| Single sign-on | One domain login covers later access to network resources |
| NTFS permissions | Rights on the local file system |
| Share permissions | Rights for a folder shared on the network |
| Most restrictive | The tighter of NTFS and share is the access you get over the network |
| Explicit permissions | Rights set directly on that file or folder |
| Inherited permissions | Rights copied down from a parent folder |
| Run as administrator | Start one app with elevated rights |
| UAC | The prompt before a change that needs administrator rights |
| BitLocker | Full-volume encryption |
| BitLocker To Go | BitLocker for a USB flash drive |
| EFS | Encrypts individual files or folders on NTFS |

## CompTIA Exam Connections

| Clue | Think |
| --- | --- |
| Home PC, user exists only on that computer | Local account |
| Same Microsoft username on two personal PCs | Microsoft account |
| “I log in with my Active Directory credentials” | Domain account |
| Full control of the PC | Administrator |
| Limited built-in account | Guest |
| Group that is still listed but rarely used | Power Users |
| Face or fingerprint at the sign-in screen | Windows Hello / biometrics |
| USB device instead of a password | Security key; passwordless |
| One morning login, then file servers all day | Single sign-on on the domain |
| Sitting at the PC, folder rights | NTFS |
| Connecting to `\\computer\share` | Share permissions plus NTFS |
| NTFS says Full control, share says Read | Network user gets Read |
| Deny on one list, Allow on the other | Deny wins |
| New file saved into the folder | Inherits that folder’s NTFS rights |
| File moved from elsewhere on the same drive | Keeps its original NTFS permissions |
| Rights set by hand on one child folder | Explicit; they beat inheritance |
| In the Administrators group, but the app still runs limited | Must choose Run as administrator |
| “Allow this app to make changes?” | UAC |
| Stolen laptop; whole disk unreadable | BitLocker |
| Lost USB stick | BitLocker To Go |
| One folder encrypted; not available on Home | EFS |
| Admin resets the password and encrypted files will not open | EFS was tied to the old password |

## Common Mix-Ups

### A Microsoft account and a domain account are the same thing

Both can follow you from PC to PC. A **Microsoft** account is managed in Microsoft’s cloud. A **domain** account is managed by your organization’s Active Directory.

### Share permissions apply when you open the folder locally

At the keyboard, **NTFS** is what matters. **Share** permissions apply when the folder is opened across the network. Over the network, the more restrictive of the two is the result.

### Inheritance always replaces a move

A file **moved on the same volume** keeps the permissions it already had. Files created in the folder, or sitting in child folders that were not given their own rights, inherit from the parent.

### Membership in Administrators means every program is elevated

You still choose **Run as administrator** for that program. UAC asks before the elevated change. Leaving every program elevated would give malware the same rights.

### BitLocker and EFS encrypt the same thing

**BitLocker** encrypts the volume. **EFS** encrypts chosen files or folders and is not in Windows Home. An administrator password reset can cut off EFS files. BitLocker still protects the drive if someone moves it to another computer.

## Quick Review

| Topic | Remember |
| --- | --- |
| Accounts | Local, Microsoft, or domain |
| Built-in | Administrator, Guest, and groups such as Backup Operators |
| Power Users | Legacy; kept for compatibility |
| Hello | Face, fingerprint, PIN, security key, picture password |
| NTFS vs share | Network access uses whichever is more restrictive; Deny wins |
| Inheritance | Child folders follow the parent until you set explicit rights |
| Same-volume move | Original NTFS permissions stay |
| Elevation | Run as administrator, then approve UAC |
| Encryption | BitLocker for the volume, BitLocker To Go for USB, EFS for files |

---

## Continue Learning

- Previous Topic: [Windows Firewall](windows-firewall.md)
- Next Topic: [Active Directory](active-directory.md)
- Related: [Windows Network Technologies](../1-operating-systems/windows-network-technologies.md)
- Back to [Domain 2 — Security](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
