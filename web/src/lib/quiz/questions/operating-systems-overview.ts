import type { QuizDefinition } from "@/types/quiz";

const LESSON_KEY =
  "a-plus-core-2/operating-systems/operating-systems-overview" as const;

export const operatingSystemsOverviewQuiz: QuizDefinition = {
  id: "quiz-os-overview-1-1",
  title: "Knowledge check: Operating Systems Overview",
  description:
    "Five quick checks on OS roles, major OS families, and compatibility (objective 1.1).",
  lessonKey: LESSON_KEY,
  questions: [
    {
      id: "os-overview-q1",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt: "Which statement BEST describes the role of an operating system?",
      options: [
        {
          id: "a",
          text: "It is the physical CPU and memory that run programs.",
          explanation:
            "CPU and memory are hardware. The OS is software that manages them.",
        },
        {
          id: "b",
          text: "It sits between hardware and applications and manages files, memory, I/O, and utilities.",
          explanation:
            "Yes — the OS is the platform between hardware and apps.",
        },
        {
          id: "c",
          text: "It is only the desktop icons and taskbar.",
          explanation:
            "The desktop is just one interface. The OS also manages core services.",
        },
        {
          id: "d",
          text: "It is a single application used to browse the web.",
          explanation: "A browser is an app that runs on an OS.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "An OS links hardware and applications and handles files, memory, input/output, and utilities.",
    },
    {
      id: "os-overview-q2",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "A technician says Linux comes in many “distributions.” What does that mean?",
      options: [
        {
          id: "a",
          text: "Every Linux install is identical, like one Windows 11 product family.",
          explanation:
            "Windows 11 shares one product family; Linux ships as many packaged flavors.",
        },
        {
          id: "b",
          text: "Linux is only available as a paid monthly subscription OS.",
          explanation:
            "Linux is commonly free/open source; support models vary.",
        },
        {
          id: "c",
          text: "Linux is packaged in different flavors (distros) for different needs.",
          explanation: "Correct — distros package Linux for different audiences.",
        },
        {
          id: "d",
          text: "Linux can run only on Apple hardware.",
          explanation: "That constraint describes macOS, not Linux.",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Linux distributions are packaged flavors of Linux for general or task-specific use.",
    },
    {
      id: "os-overview-q3",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "Which characteristic BEST distinguishes Chrome OS from a traditional desktop Linux distribution?",
      options: [
        {
          id: "a",
          text: "Chrome OS cannot use any Linux kernel technology.",
          explanation:
            "Chrome OS is based on the Linux kernel but presents a different UX.",
        },
        {
          id: "b",
          text: "Chrome OS centers on the Chrome browser and cloud apps, and often needs network connectivity.",
          explanation:
            "Correct — Chrome OS is browser/cloud-first compared with traditional desktop Linux.",
        },
        {
          id: "c",
          text: "Chrome OS runs only on iPhone hardware.",
          explanation: "iPhone uses iOS; Chrome OS is common on Chromebooks.",
        },
        {
          id: "d",
          text: "Chrome OS is closed-source Apple software.",
          explanation: "That description fits Apple’s OS family more than Chrome OS.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Chrome OS uses a Linux kernel foundation but is designed around browser and cloud apps.",
    },
    {
      id: "os-overview-q4",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt: "Which pairing is MOST accurate?",
      options: [
        {
          id: "a",
          text: "iOS runs on iPad; iPadOS runs on iPhone.",
          explanation: "That pairing is reversed.",
        },
        {
          id: "b",
          text: "iOS and iPadOS are identical OS builds with different names only.",
          explanation:
            "They are related, but they are different OS products for different devices.",
        },
        {
          id: "c",
          text: "iOS is for iPhone; iPadOS is for iPad — related, but not the same OS.",
          explanation: "Correct — related Apple OSes, not identical products.",
        },
        {
          id: "d",
          text: "Both iOS and iPadOS are open-source Android forks.",
          explanation:
            "Apple’s mobile OSes are closed source and Apple-hardware only.",
        },
      ],
      correctOptionId: "c",
      explanation:
        "iOS targets iPhone and iPadOS targets iPad. Related look, different OS products.",
    },
    {
      id: "os-overview-q5",
      objectiveId: "1.1",
      lessonKey: LESSON_KEY,
      prompt:
        "A Windows .exe copied to a Linux PC will not start, but documents from the same USB open fine. What is the BEST explanation?",
      options: [
        {
          id: "a",
          text: "Linux never opens any files created on Windows.",
          explanation:
            "Many document and media formats move across OSes even when native apps do not.",
        },
        {
          id: "b",
          text: "Native executables are usually OS-specific, while many data formats can cross operating systems.",
          explanation:
            "Correct — data compatibility is broader than executable compatibility.",
        },
        {
          id: "c",
          text: "The USB stick must be APFS for Linux to run Windows apps.",
          explanation:
            "APFS is Apple’s file system and does not make .exe files run on Linux.",
        },
        {
          id: "d",
          text: "The Linux PC is end-of-life, so no programs can run.",
          explanation:
            "EOL affects vendor support; it does not uniquely explain .exe incompatibility.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Documents often move across OSes; native executables usually do not.",
    },
  ],
};
