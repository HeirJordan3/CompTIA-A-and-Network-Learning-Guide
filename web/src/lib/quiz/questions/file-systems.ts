import type { QuizDefinition } from "@/types/quiz";

const LESSON_KEY = "a-plus-core-2/operating-systems/file-systems" as const;

export const fileSystemsQuiz: QuizDefinition = {
  id: "quiz-file-systems-1-1",
  title: "Knowledge check: File Systems",
  description:
    "Five quick checks on partitions, formatting, and common file systems (objective 1.1).",
  lessonKey: LESSON_KEY,
  questions: [
    {
      id: "file-systems-q1",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "What is the correct order for preparing a disk area so an OS can store files?",
      options: [
        {
          id: "a",
          text: "Format → partition → install applications",
          explanation: "You create the partition before formatting it.",
        },
        {
          id: "b",
          text: "Partition → format with a file system → store files",
          explanation: "Correct — partition, then format, then store files.",
        },
        {
          id: "c",
          text: "Install OS → encrypt RAM → format CPU cache",
          explanation:
            "File systems apply to disk partitions/volumes, not CPU cache.",
        },
        {
          id: "d",
          text: "Copy files first, then create a partition only if needed",
          explanation:
            "Space must be partitioned and formatted before normal file storage.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "A partition is a disk slice. Formatting applies a file system. Then the OS can store files.",
    },
    {
      id: "file-systems-q2",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "Which file system is the everyday choice for modern Windows system and data volumes?",
      options: [
        {
          id: "a",
          text: "FAT32",
          explanation:
            "FAT32 is older/portable and has a 4 GB max file limit.",
        },
        {
          id: "b",
          text: "APFS",
          explanation: "APFS is Apple’s file system.",
        },
        {
          id: "c",
          text: "NTFS",
          explanation:
            "Correct — NTFS is the standard modern Windows file system.",
        },
        {
          id: "d",
          text: "ext4",
          explanation: "ext4 is common on Linux and Android.",
        },
      ],
      correctOptionId: "c",
      explanation:
        "NTFS is the usual Windows file system and supports features like compression, encryption, and quotas.",
    },
    {
      id: "file-systems-q3",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "A 6 GB video will not copy to a FAT32 USB stick. What is the BEST next action?",
      options: [
        {
          id: "a",
          text: "Keep FAT32; 6 GB is below FAT32’s maximum file size.",
          explanation: "FAT32’s classic teaching limit is a 4 GB max file size.",
        },
        {
          id: "b",
          text: "Back up the stick, then reformat as exFAT for large files and cross-OS use.",
          explanation:
            "Correct — exFAT targets flash media and large portable files.",
        },
        {
          id: "c",
          text: "Convert the USB stick to APFS for best Windows + Mac system features.",
          explanation:
            "APFS is Apple-focused and not the usual portable USB recommendation.",
        },
        {
          id: "d",
          text: "Use ReFS because it is the default flash-drive format.",
          explanation:
            "ReFS is for resilient/large Windows storage, not everyday USB sticks.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "FAT32’s 4 GB file limit blocks large media. exFAT is the better portable choice.",
    },
    {
      id: "file-systems-q4",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "Which file system is commonly associated with Linux and Android as an everyday default?",
      options: [
        {
          id: "a",
          text: "NTFS",
          explanation: "NTFS is the everyday Windows file system.",
        },
        {
          id: "b",
          text: "APFS",
          explanation: "APFS is Apple’s SSD-oriented file system.",
        },
        {
          id: "c",
          text: "ext4",
          explanation: "Correct — ext4 is common on Linux and Android.",
        },
        {
          id: "d",
          text: "ReFS",
          explanation: "ReFS is a Microsoft file system.",
        },
      ],
      correctOptionId: "c",
      explanation:
        "ext4 (fourth extended file system) is a common everyday FS on Linux and Android.",
    },
    {
      id: "file-systems-q5",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "A technician needs a USB drive for large files shared between a Windows laptop and a MacBook. Which format is the BEST recommendation from this lesson?",
      options: [
        {
          id: "a",
          text: "FAT32, because it has no practical file-size limit",
          explanation: "FAT32 is cross-platform but has a 4 GB max file limit.",
        },
        {
          id: "b",
          text: "NTFS only, because macOS never reads any Microsoft formats",
          explanation:
            "Other OSes often read NTFS, but exFAT is the lesson’s portable large-file pick.",
        },
        {
          id: "c",
          text: "exFAT, because it supports large files and cross-OS portable use",
          explanation:
            "Correct — exFAT is designed for flash/USB media and large files.",
        },
        {
          id: "d",
          text: "ReFS, because it is optimized for USB flash drives",
          explanation: "ReFS is not the portable USB flash format taught here.",
        },
      ],
      correctOptionId: "c",
      explanation:
        "For removable drives carrying large files between Windows and macOS, exFAT is the practical BEST answer.",
    },
  ],
};
