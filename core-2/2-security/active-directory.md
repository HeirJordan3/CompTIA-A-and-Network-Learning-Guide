# Active Directory

CompTIA A+ Core 2 — 220-1202  
Objective 2.2 — Given a scenario, configure Microsoft Windows security settings

## What You Need to Know

By the end of this lesson, you should understand:

- What **Active Directory** stores, and what a **domain controller** does
- How a PC moves from a **workgroup** into a **domain**
- Why objects are sorted into **organizational units (OUs)**
- How a **Group Policy Object (GPO)** is linked, edited, and forced with `gpupdate /force`
- Where a **logon script**, a **home folder**, and **folder redirection** are configured
- Why rights go on a **group**, then the user is added to that group

## What Is It?

**Active Directory (AD)** is Microsoft’s central database for a business network. Computers, user accounts, file shares, and printers that people need are records in that database. The name of the whole collection is the **Windows domain**.

## Why Does It Matter?

Help desk work starts here: reset a domain password, see whether a PC was joined, move someone who changed departments, or explain why a drive letter appeared after login. One change on a domain controller can apply to every person in a department.

## Real-World Analogy

Think of a company campus with one HR and IT office:

| Campus | Active Directory |
| --- | --- |
| The master list of people, desks, and printers | The Active Directory database |
| The office that keeps the master list | Domain controller |
| A copy of the list at every office, kept in sync | Replication between domain controllers |
| Buildings or departments on the campus map | Organizational units |
| The rulebook posted in one building | A Group Policy linked to that OU |
| A badge that puts you in “Accounting” instead of rewriting every door code | A security group |

## How It Works

### The Database and the Domain

Everything someone needs access to can live in Active Directory: computers, usernames, passwords, shares, and printers. That database is the **authentication** source. A login from anywhere on the network is checked against it. Administrators also store the permissions that allow a file share or a corporate printer.

Help desk uses the same database to reset passwords and confirm that someone can reach the resource they called about.

The **domain** is the name for that grouping. A company might use a name such as `SGC.local`. In the walkthrough below, that is the domain name.

A **domain controller** is the server that holds the database. Active Directory is distributed: a change on one domain controller **replicates** to the others. The service on those servers is **Active Directory Domain Services (AD DS)**.

On the example server, **Server Manager** opens at startup and lists AD DS plus other roles, including **DNS**. The server name is **Cheyenne1**. It belongs to the domain **SGC.local**.

### Join a Computer to the Domain

A PC you bring to the office does not join the domain by itself. Someone with **administrator** rights has to add it. You can do that from:

- System properties
- **Settings → System → About**
- PowerShell, including a script

The example PC is Windows 11 and is still in a **workgroup**. The default workgroup name is **Workgroup**.

1. Settings → System → About → **Domain or workgroup**.
2. **Change**. Keep the computer name (**Dedalus**).
3. Select **Domain** and enter `SGC.local`.
4. Enter a domain administrator username and password.
5. Windows says welcome to the domain, then requires a **restart**.
6. After restart, sign in as a **domain** user.

Both the computer account and that user can then be managed from the domain console.

### Organizational Units

A large directory is split into logical containers called **organizational units (OUs)**. An OU might be a site, a building, or a department (Marketing, Shipping, Accounting). Policies are usually assigned to an OU, so Marketing and Accounting can have different rules.

**Active Directory Users and Computers** is the console. On the domain controller: Server Manager → **Tools** → Active Directory Users and Computers.

Default containers include **Builtin**, **Computers**, and **Domain Controllers**. The example domain also has custom OUs such as **Milky Way**, **Pegasus**, and **Stations**. Under Milky Way is an **SGC** OU with computers, printers, and users. Pegasus contains an **Atlantis** OU with the same kind of split.

Right-click a user to add them to a group, disable the account, or reset the password.

### Move a User

When someone changes departments, move the object to the OU for the new department. The new OU’s policies then apply.

In the example, Rodney moves from **Milky Way → SGC → Users** to **Pegasus → Atlantis → Users**:

1. Right-click Rodney → **Move**.
2. Choose Pegasus → Atlantis → Users.

Rodney then appears under Atlantis.

### Group Policy

**Group Policy** is how those OU rules are written. Open **Group Policy Management** from the Tools menu. You can manage login scripts, desktop settings, and many other parts of Windows from there.

A policy usually waits until the next **logon**. **`gpupdate /force`** tells the PC to collect policy now. Some user settings still appear only after you sign out and back in.

Example: hide the Recycle Bin for everyone in Atlantis.

1. In Group Policy Management, right-click the **Atlantis** OU.
2. **Create a GPO in this domain, and Link it here**. Name it `Recycle Bin`.
3. Right-click the GPO → **Edit**.
4. Go to **User Configuration → Policies → Administrative Templates → Desktop**.
5. Open **Remove Recycle Bin icon from the desktop**. It starts as **Not Configured**. Set it to **Enabled** and click OK.

On Rodney’s PC, run:

```text
gpupdate /force
```

The computer policy and the user policy both report success, but the icon is still there. Sign out and sign back in. The Recycle Bin is gone.

### Logon Scripts

A **logon script** is a batch file or script that runs when someone in that OU signs in. Marketing can have a different script from Accounting.

Path in the editor:

**User Configuration → Policies → Windows Settings → Scripts → Logon**

Example for Atlantis, GPO named `Logon Script`:

1. Create and link the GPO, then Edit.
2. Open **Logon** → **Add** → **Browse**.
3. The script in the folder is `logon map share`. Its one line is a `net use` that maps **G:** to the **Missions** share on Cheyenne1:

```text
net use G: \\Cheyenne1\Missions
```

4. Add that script and click OK.

Rodney signs out and back in. **This PC** then shows **G:**, the Missions share, next to local disk **C:** and the DVD drive **D:**.

### Home Folders

A **home folder** is a private network location for that user’s documents. Files sit on the server, which makes backup and management easier. People can still save locally; the home drive is there so training can move them off the local disk.

In Active Directory Users and Computers, select the users in **Pegasus → Atlantis**, right-click → **Properties** → **Profile**.

| Setting | Value in the example |
| --- | --- |
| Home folder | **Connect**, not a local path |
| Drive letter | **H:** |
| Path | `\\Cheyenne1\home\%username%` |

`%username%` is filled in with each person’s name, so one change covers every selected account. After Rodney signs in again, **H:** appears beside the **G:** drive from the logon script.

### Folder Redirection

Desktop, Downloads, and Documents normally live on the local drive, such as `C:\Users\R McKay\Documents`. **Folder redirection** points a Windows library folder at a server share. The user still clicks Documents. The files land on the server, where they can be backed up.

Path:

**User Configuration → Policies → Windows Settings → Folder Redirection**

For Documents:

1. Right-click **Documents** → **Properties**.
2. Choose **Basic** (redirect everyone’s folder to the same location).
3. Leave **Create a folder for each user under the root path**.
4. Root path: `\\Cheyenne1\home`

Windows shows an example such as `\\Cheyenne1\home\Claire\Documents`. That is the layout you want. A warning says the setting does not apply to Windows 2000, Windows XP, or Windows Server 2003. Continue when those versions are not in use.

On the PC, `gpupdate /force` can report that **folder redirection** could not apply until the user logs on. Allow the logoff. After Rodney signs back in, the Documents **Location** tab shows `\\Cheyenne1\home\R McKay\Documents` instead of the local `C:\Users\...` path.

Laptops leave the building. Folder redirection is usually paired with **Offline Files**: a local copy stays on the laptop, and changes sync back to the server when the laptop returns.

### Groups Instead of One-by-One Rights

You can set file and printer rights on Rodney alone. With hundreds of people, that does not scale. Put the rights on a **group**, then add or remove users. Removing the user from the group removes those rights. You can change many people at once.

Windows already includes groups such as **Account Operators**, **Backup Operators**, **Guests**, and **Performance Log Users**. You do not have to create those.

To see Rodney’s groups: right-click the user → **Properties** → **Member Of** → **Add**. Windows gives you a search box. Typing `remote` finds **Remote Desktop Users** and **Remote Management Users**. Adding **Remote Desktop Users** gives Rodney every right that group already has.

The same pattern is a department group: Accounting apps, or Marketing apps. The person gets the group’s permissions by membership, not by a separate setup on their account.

## Side-by-Side Comparison

| Task | Tool |
| --- | --- |
| Reset a password or move a user | Active Directory Users and Computers |
| Join `Dedalus` to `SGC.local` | Settings → System → About, then a domain admin login and a restart |
| Hide the Recycle Bin for one department | GPO linked to that OU |
| Apply policy before the next normal refresh | `gpupdate /force`, then sign out if the setting is a user logon change |
| Map `G:` at every logon | Logon script with `net use` |
| Give each person `H:` | Profile → Home folder → `\\server\home\%username%` |
| Make Documents itself live on the server | Folder redirection, plus Offline Files for laptops |
| Give many people the same rights | Add them to a group |

## Key Terms

| Term | Meaning |
| --- | --- |
| Active Directory | Microsoft’s central database of users, computers, shares, and printers |
| Domain | The named collection of those objects, such as `SGC.local` |
| Domain controller | A server that stores and answers from that database |
| AD DS | Active Directory Domain Services, the domain-controller role |
| Replication | Copying a directory change to the other domain controllers |
| Workgroup | The default peer grouping; Windows names it `Workgroup` |
| Organizational unit | A container used to organize objects and assign policy |
| Active Directory Users and Computers | The console for users, computers, and OUs |
| GPO | Group Policy Object; a set of rules linked to an OU or domain |
| gpupdate /force | Command that pulls Group Policy immediately |
| Logon script | A script that runs when a user in that OU signs in |
| Home folder | A private network drive, often `H:`, built with `%username%` |
| Folder redirection | Points a library folder such as Documents at a server path |
| Offline Files | A local copy of redirected folders for use away from the network |
| Group | A list of users who share one set of rights |

## CompTIA Exam Connections

| Clue | Think |
| --- | --- |
| One database for users, PCs, shares, and printers | Active Directory |
| Server that holds that database | Domain controller |
| A password change shows up on the other servers | Replication |
| PC is in `Workgroup` and is not managed | It has not been joined to the domain |
| Join from Settings | System → About → Domain or workgroup |
| “Welcome to the domain,” then a restart | Domain join succeeded |
| Marketing rules must not hit Accounting | Separate OUs, each with its own GPO |
| User changed departments | Move the account to the new OU |
| Recycle Bin disappears only after sign-in | User policy; `gpupdate /force` plus logoff |
| `net use G: \\server\share` at logon | Logon script |
| `H:` points at `\\server\home\alex` | Home folder with `%username%` |
| Documents path changes from `C:\Users\...` to a UNC path | Folder redirection |
| Laptop still has those files off site | Offline Files |
| Add one user and they can use Remote Desktop | Member of Remote Desktop Users |
| Do not edit 200 accounts one by one | Put rights on the group |

## Common Mix-Ups

### Plugging into the office network joins the domain

The PC stays in the **workgroup** until an administrator joins it and the PC **restarts**. After that, the user signs in with a domain account.

### `gpupdate /force` always changes the screen immediately

The command can report success while the desktop still looks the same. User settings such as the Recycle Bin and folder redirection often apply at the **next logon**.

### A home folder and folder redirection are the same drive

The **home folder** adds a drive letter, such as `H:`, from the user profile. **Folder redirection** changes where Documents (or another library folder) is stored. The example uses both: `G:` from a logon script, `H:` as the home folder, and Documents redirected under `\\Cheyenne1\home`.

### Set every permission on the user account

Build the rights on a **group**, then add or remove the user. Built-in groups such as Backup Operators already exist.

### Folder redirection is enough for a laptop

Away from the office, the server path is unreachable. Pair redirection with **Offline Files** so a local copy syncs when the laptop returns.

## Quick Review

| Topic | Remember |
| --- | --- |
| Active Directory | Central accounts, computers, shares, and printers |
| Domain controller | Holds AD DS; changes replicate |
| Join | Admin credentials, then restart; default workgroup is `Workgroup` |
| OU | Department or location; GPOs attach here |
| Move | New OU means that OU’s policies |
| gpupdate /force | Pull policy now; log off if the desktop does not change |
| Logon script | Example: `net use G: \\Cheyenne1\Missions` |
| Home folder | Connect `H:` to `\\Cheyenne1\home\%username%` |
| Redirection | Documents follows `\\Cheyenne1\home\username\Documents` |
| Groups | Member Of; one membership applies the group’s rights |

---

## Continue Learning

- Previous Topic: [Windows Security Settings](windows-security-settings.md)
- Next Topic: [Wireless Encryption](wireless-encryption.md)
- Related: [Windows Network Technologies](../1-operating-systems/windows-network-technologies.md)
- Back to [Domain 2 — Security](README.md)
- Course Map: [Core 2 Study Path](../COURSE-MAP.md)
