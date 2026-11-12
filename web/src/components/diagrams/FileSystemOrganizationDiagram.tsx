import { DiagramFrame } from "@/components/diagrams/DiagramFrame";

/**
 * Original educational diagram: partition → format → file system,
 * plus common file-system homes and portable choices.
 */
export function FileSystemOrganizationDiagram() {
  return (
    <DiagramFrame
      title="Storage organization and common file systems"
      description="A disk slice becomes usable only after you format it with a file system. Different file systems fit different jobs: Windows volumes, portable USB media, Linux/Android, and Apple devices."
    >
      <div
        role="img"
        aria-labelledby="fs-org-title"
        aria-describedby="fs-org-desc"
        className="mx-auto w-full max-w-3xl"
      >
        <p id="fs-org-title" className="sr-only">
          File system organization diagram
        </p>
        <p id="fs-org-desc" className="sr-only">
          Flow from left to right: create a partition, format the partition,
          then store files with a file system. Below, common file systems:
          NTFS and ReFS for Windows, FAT32 and exFAT for portable media, ext4
          and XFS for Linux, and APFS for Apple. Remember FAT32 has a 4 GB
          maximum file size, while exFAT is preferred for large files on USB
          drives.
        </p>

        <svg
          viewBox="0 0 760 460"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          {/* Flow: Partition → Format → File system */}
          <rect
            x="40"
            y="28"
            width="180"
            height="78"
            rx="12"
            fill="#f1f5f9"
            stroke="#64748b"
            strokeWidth="2"
          />
          <text
            x="130"
            y="62"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="16"
            fontWeight="700"
            fill="#0f172a"
          >
            1. Partition
          </text>
          <text
            x="130"
            y="84"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#475569"
          >
            Slice of disk space
          </text>

          <polygon points="232,67 252,67 252,57 272,77 252,97 252,87 232,87" fill="#0f766e" />

          <rect
            x="284"
            y="28"
            width="180"
            height="78"
            rx="12"
            fill="#ccfbf1"
            stroke="#0f766e"
            strokeWidth="2"
          />
          <text
            x="374"
            y="62"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="16"
            fontWeight="700"
            fill="#134e4a"
          >
            2. Format
          </text>
          <text
            x="374"
            y="84"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#115e59"
          >
            Apply a file system
          </text>

          <polygon points="476,67 496,67 496,57 516,77 496,97 496,87 476,87" fill="#0f766e" />

          <rect
            x="528"
            y="28"
            width="192"
            height="78"
            rx="12"
            fill="#14b8a6"
            stroke="#0f766e"
            strokeWidth="2"
          />
          <text
            x="624"
            y="62"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="16"
            fontWeight="700"
            fill="#042f2e"
          >
            3. File system
          </text>
          <text
            x="624"
            y="84"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#134e4a"
          >
            Store and find files
          </text>

          {/* Comparison cards */}
          <text
            x="40"
            y="150"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#0f172a"
          >
            Common file systems by home
          </text>

          {/* Windows */}
          <rect
            x="40"
            y="168"
            width="220"
            height="120"
            rx="12"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <rect x="40" y="168" width="8" height="120" rx="4" fill="#0f766e" />
          <text
            x="64"
            y="196"
            fontFamily="system-ui, sans-serif"
            fontSize="15"
            fontWeight="700"
            fill="#0f172a"
          >
            Windows
          </text>
          <text
            x="64"
            y="222"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            NTFS — everyday volumes
          </text>
          <text
            x="64"
            y="244"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            ReFS — resilient / large scale
          </text>
          <text
            x="64"
            y="268"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#64748b"
          >
            Compression, encryption, quotas
          </text>

          {/* Portable */}
          <rect
            x="280"
            y="168"
            width="220"
            height="120"
            rx="12"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <rect x="280" y="168" width="8" height="120" rx="4" fill="#ea580c" />
          <text
            x="304"
            y="196"
            fontFamily="system-ui, sans-serif"
            fontSize="15"
            fontWeight="700"
            fill="#0f172a"
          >
            Portable / USB
          </text>
          <text
            x="304"
            y="222"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            FAT32 — 4 GB max file
          </text>
          <text
            x="304"
            y="244"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            exFAT — large files, cross-OS
          </text>
          <text
            x="304"
            y="268"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#64748b"
          >
            Prefer exFAT for big media files
          </text>

          {/* Linux / Apple */}
          <rect
            x="520"
            y="168"
            width="200"
            height="120"
            rx="12"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <rect x="520" y="168" width="8" height="120" rx="4" fill="#334155" />
          <text
            x="544"
            y="196"
            fontFamily="system-ui, sans-serif"
            fontSize="15"
            fontWeight="700"
            fill="#0f172a"
          >
            Linux / Apple
          </text>
          <text
            x="544"
            y="222"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            ext4 — Linux / Android
          </text>
          <text
            x="544"
            y="244"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            XFS — high-performance Linux
          </text>
          <text
            x="544"
            y="268"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            APFS — Apple SSD + mobile
          </text>

          {/* Callout strip */}
          <rect
            x="40"
            y="316"
            width="680"
            height="110"
            rx="12"
            fill="#f8fafc"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text
            x="64"
            y="348"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#0f172a"
          >
            Exam-ready reminders
          </text>
          <text
            x="64"
            y="374"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            Order matters: partition → format → file system
          </text>
          <text
            x="64"
            y="396"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            USB stick for Windows + Mac with a large video: choose exFAT, not FAT32
          </text>
          <text
            x="64"
            y="418"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#334155"
          >
            Cross-read is more common than identical full write support on every OS
          </text>
        </svg>
      </div>
    </DiagramFrame>
  );
}
