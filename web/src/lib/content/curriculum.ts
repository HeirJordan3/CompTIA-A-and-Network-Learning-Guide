import type { DomainId, DomainRef, LessonRef, TrackId, TrackRef } from "@/types/content";

/**
 * Explicit curriculum index for M1.
 * Only lessons listed here can be loaded from disk (no arbitrary path access).
 * Core 1 and Network+ tracks are registered but not enabled in the UI yet.
 */
export const tracks: TrackRef[] = [
  {
    id: "a-plus-core-2",
    title: "CompTIA A+ Core 2",
    exam: "220-1202",
    summary:
      "Operating systems, security, software troubleshooting, and operational procedures for entry-level IT support.",
    enabled: true,
    contentRoot: "core-2",
    domains: [
      {
        id: "operating-systems",
        number: 1,
        title: "Operating Systems",
        summary:
          "OS types, file systems, Windows tools, command line, settings, networking, and applications.",
        lessons: [
          {
            slug: "operating-systems-overview",
            title: "Operating Systems Overview",
            file: "1-operating-systems/operating-systems-overview.md",
            status: "available",
            objective: "1.1",
          },
          {
            slug: "file-systems",
            title: "File Systems",
            file: "1-operating-systems/file-systems.md",
            status: "available",
            objective: "1.1",
          },
          {
            slug: "task-manager",
            title: "Task Manager",
            file: "1-operating-systems/task-manager.md",
            status: "available",
            objective: "1.4",
          },
          {
            slug: "the-microsoft-management-console",
            title: "The Microsoft Management Console",
            file: "1-operating-systems/the-microsoft-management-console.md",
            status: "available",
            objective: "1.4",
          },
          {
            slug: "additional-windows-tools",
            title: "Additional Windows Tools",
            file: "1-operating-systems/additional-windows-tools.md",
            status: "available",
            objective: "1.4",
          },
          {
            slug: "windows-command-line-tools",
            title: "Windows Command Line Tools",
            file: "1-operating-systems/windows-command-line-tools.md",
            status: "available",
            objective: "1.5",
          },
          {
            slug: "the-windows-network-command-line",
            title: "The Windows Network Command Line",
            file: "1-operating-systems/the-windows-network-command-line.md",
            status: "available",
            objective: "1.5",
          },
          {
            slug: "the-windows-control-panel",
            title: "The Windows Control Panel",
            file: "1-operating-systems/the-windows-control-panel.md",
            status: "available",
            objective: "1.6",
          },
          {
            slug: "windows-settings",
            title: "Windows Settings",
            file: "1-operating-systems/windows-settings.md",
            status: "available",
            objective: "1.6",
          },
          {
            slug: "installing-applications",
            title: "Installing Applications",
            file: "1-operating-systems/installing-applications.md",
            status: "available",
            objective: "1.10",
          },
          {
            slug: "cloud-productivity-tools",
            title: "Cloud Productivity Tools",
            file: "1-operating-systems/cloud-productivity-tools.md",
            status: "available",
            objective: "1.11",
          },
          {
            slug: "windows-network-technologies",
            title: "Windows Network Technologies",
            file: "1-operating-systems/windows-network-technologies.md",
            status: "available",
            objective: "1.7",
          },
          {
            slug: "configuring-windows-firewall",
            title: "Configuring Windows Firewall",
            file: "1-operating-systems/configuring-windows-firewall.md",
            status: "available",
            objective: "1.7",
          },
          {
            slug: "windows-ip-address-configuration",
            title: "Windows IP Address Configuration",
            file: "1-operating-systems/windows-ip-address-configuration.md",
            status: "available",
            objective: "1.7",
          },
          {
            slug: "windows-network-connections",
            title: "Windows Network Connections",
            file: "1-operating-systems/windows-network-connections.md",
            status: "available",
            objective: "1.7",
          },
          {
            slug: "macos-overview",
            title: "macOS Overview",
            file: "1-operating-systems/macos-overview.md",
            status: "comingSoon",
            objective: "1.8",
          },
          {
            slug: "installing-operating-systems",
            title: "Installing Operating Systems",
            file: "1-operating-systems/installing-operating-systems.md",
            status: "comingSoon",
            objective: "1.2",
          },
        ],
      },
      {
        id: "security",
        number: 2,
        title: "Security",
        summary:
          "Physical and logical security, Windows Defender, firewalls, accounts, Active Directory, and wireless encryption.",
        lessons: [
          {
            slug: "physical-security",
            title: "Physical Security",
            file: "2-security/physical-security.md",
            status: "available",
            objective: "2.1",
          },
          {
            slug: "physical-access-security",
            title: "Physical Access Security",
            file: "2-security/physical-access-security.md",
            status: "available",
            objective: "2.1",
          },
          {
            slug: "logical-security",
            title: "Logical Security",
            file: "2-security/logical-security.md",
            status: "available",
            objective: "2.1",
          },
          {
            slug: "authentication-and-access",
            title: "Authentication and Access",
            file: "2-security/authentication-and-access.md",
            status: "available",
            objective: "2.1",
          },
          {
            slug: "defender-antivirus",
            title: "Defender Antivirus",
            file: "2-security/defender-antivirus.md",
            status: "available",
            objective: "2.2",
          },
          {
            slug: "windows-firewall",
            title: "Windows Firewall",
            file: "2-security/windows-firewall.md",
            status: "available",
            objective: "2.2",
          },
          {
            slug: "windows-security-settings",
            title: "Windows Security Settings",
            file: "2-security/windows-security-settings.md",
            status: "available",
            objective: "2.2",
          },
          {
            slug: "active-directory",
            title: "Active Directory",
            file: "2-security/active-directory.md",
            status: "available",
            objective: "2.2",
          },
          {
            slug: "wireless-encryption",
            title: "Wireless Encryption",
            file: "2-security/wireless-encryption.md",
            status: "comingSoon",
            objective: "2.3",
          },
        ],
      },
      {
        id: "software-troubleshooting",
        number: 3,
        title: "Software Troubleshooting",
        summary:
          "Troubleshoot Windows, mobile apps, and security symptoms. Lessons for this domain are still being developed.",
        lessons: [],
      },
      {
        id: "operational-procedures",
        number: 4,
        title: "Operational Procedures",
        summary:
          "Ticketing, documentation, professionalism, communication, change management, and scripting.",
        lessons: [
          {
            slug: "ticketing-systems",
            title: "Ticketing Systems",
            file: "4-operational-procedures/ticketing-systems.md",
            status: "available",
            objective: "4.1",
          },
          {
            slug: "asset-management",
            title: "Asset Management",
            file: "4-operational-procedures/asset-management.md",
            status: "available",
            objective: "4.1",
          },
          {
            slug: "document-types",
            title: "Document Types",
            file: "4-operational-procedures/document-types.md",
            status: "available",
            objective: "4.1",
          },
          {
            slug: "change-management",
            title: "Change Management",
            file: "4-operational-procedures/change-management.md",
            status: "comingSoon",
            objective: "4.2",
          },
          {
            slug: "professionalism",
            title: "Professionalism",
            file: "4-operational-procedures/professionalism.md",
            status: "available",
            objective: "4.7",
          },
          {
            slug: "communication",
            title: "Communication",
            file: "4-operational-procedures/communication.md",
            status: "available",
            objective: "4.7",
          },
          {
            slug: "scripting-languages",
            title: "Scripting Languages",
            file: "4-operational-procedures/scripting-languages.md",
            status: "comingSoon",
            objective: "4.8",
          },
          {
            slug: "scripting-use-cases",
            title: "Scripting Use Cases",
            file: "4-operational-procedures/scripting-use-cases.md",
            status: "comingSoon",
            objective: "4.8",
          },
        ],
      },
    ],
  },
  {
    id: "a-plus-core-1",
    title: "CompTIA A+ Core 1",
    exam: "220-1201",
    summary:
      "Mobile devices, networking, hardware, virtualization, cloud, and hardware troubleshooting. Coming to this app later.",
    enabled: false,
    contentRoot: "core-1",
    domains: [],
  },
  {
    id: "network-plus",
    title: "CompTIA Network+",
    exam: "N10-009",
    summary:
      "Networking concepts, implementation, operations, security, and troubleshooting. Curriculum map exists; app track coming later.",
    enabled: false,
    contentRoot: "network-plus",
    domains: [],
  },
];

export function getEnabledTracks(): TrackRef[] {
  return tracks.filter((track) => track.enabled);
}

export function getTrack(trackId: string): TrackRef | undefined {
  return tracks.find((track) => track.id === trackId);
}

export function getDomain(
  trackId: string,
  domainId: string,
): { track: TrackRef; domain: DomainRef } | undefined {
  const track = getTrack(trackId);
  if (!track) return undefined;
  const domain = track.domains.find((item) => item.id === domainId);
  if (!domain) return undefined;
  return { track, domain };
}

export function getLesson(
  trackId: string,
  domainId: string,
  slug: string,
): { track: TrackRef; domain: DomainRef; lesson: LessonRef } | undefined {
  const match = getDomain(trackId, domainId);
  if (!match) return undefined;
  const lesson = match.domain.lessons.find((item) => item.slug === slug);
  if (!lesson) return undefined;
  return { ...match, lesson };
}

export function isTrackId(value: string): value is TrackId {
  return tracks.some((track) => track.id === value);
}

export function isDomainId(value: string): value is DomainId {
  return tracks.some((track) =>
    track.domains.some((domain) => domain.id === value),
  );
}

export function countLessonStatus(domain: DomainRef): {
  available: number;
  comingSoon: number;
} {
  return domain.lessons.reduce(
    (acc, lesson) => {
      if (lesson.status === "available") acc.available += 1;
      else acc.comingSoon += 1;
      return acc;
    },
    { available: 0, comingSoon: 0 },
  );
}
