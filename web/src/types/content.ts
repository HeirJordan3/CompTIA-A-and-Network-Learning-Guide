export type LessonStatus = "available" | "comingSoon";

export type TrackId = "a-plus-core-2" | "a-plus-core-1" | "network-plus";

export type DomainId =
  | "operating-systems"
  | "security"
  | "software-troubleshooting"
  | "operational-procedures";

export interface LessonRef {
  slug: string;
  title: string;
  /** Path relative to core-2/, e.g. 2-security/logical-security.md */
  file: string;
  status: LessonStatus;
  objective?: string;
}

export interface DomainRef {
  id: DomainId;
  number: number;
  title: string;
  summary: string;
  lessons: LessonRef[];
}

export interface TrackRef {
  id: TrackId;
  title: string;
  exam: string;
  summary: string;
  enabled: boolean;
  contentRoot: "core-2" | "core-1" | "network-plus";
  domains: DomainRef[];
}
