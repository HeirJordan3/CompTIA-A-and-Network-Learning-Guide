import { FileSystemOrganizationDiagram } from "@/components/diagrams/FileSystemOrganizationDiagram";
import { OsLayersDiagram } from "@/components/diagrams/OsLayersDiagram";
import type { DiagramDefinition } from "@/types/enhancements";

/**
 * Shared diagram catalog. Lesson pages never import diagrams directly —
 * they resolve placements through the enhancement registry.
 */
export const diagramCatalog: Record<string, DiagramDefinition> = {
  "os-layers": {
    id: "os-layers",
    title: "Hardware, operating system, and applications",
    description:
      "Shows how the operating system sits between hardware and applications.",
    Component: OsLayersDiagram,
  },
  "file-system-organization": {
    id: "file-system-organization",
    title: "Storage organization and common file systems",
    description:
      "Shows partition → format → file system and common file-system homes.",
    Component: FileSystemOrganizationDiagram,
  },
};

export function getDiagram(diagramId: string): DiagramDefinition | undefined {
  return diagramCatalog[diagramId];
}
