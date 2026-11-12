import { DiagramFrame } from "@/components/diagrams/DiagramFrame";

/**
 * Original educational diagram: hardware ↔ OS ↔ applications stack.
 * No third-party assets.
 */
export function OsLayersDiagram() {
  return (
    <DiagramFrame
      title="Hardware, operating system, and applications"
      description="The operating system sits between physical hardware and the apps you run. Apps talk to the OS; the OS talks to the CPU, memory, storage, and devices."
    >
      <div
        role="img"
        aria-labelledby="os-layers-title"
        aria-describedby="os-layers-desc"
        className="mx-auto w-full max-w-xl"
      >
        <p id="os-layers-title" className="sr-only">
          Three-layer computing stack diagram
        </p>
        <p id="os-layers-desc" className="sr-only">
          Top layer: applications such as browsers and office tools. Middle
          layer: operating system handling files, memory, input and output, and
          utilities. Bottom layer: hardware including CPU, memory, storage, and
          devices. Arrows show apps request services from the OS, and the OS
          controls hardware.
        </p>

        <svg
          viewBox="0 0 640 420"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="osAppsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ccfbf1" />
              <stop offset="100%" stopColor="#99f6e4" />
            </linearGradient>
            <linearGradient id="osOsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5eead4" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="osHwFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Applications */}
          <rect
            x="70"
            y="28"
            width="500"
            height="88"
            rx="14"
            fill="url(#osAppsFill)"
            stroke="#0f766e"
            strokeWidth="2"
          />
          <text
            x="320"
            y="62"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#134e4a"
          >
            Applications
          </text>
          <text
            x="320"
            y="90"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fill="#115e59"
          >
            Browser · Office tools · Utilities · Games
          </text>

          {/* Arrow apps → OS */}
          <line
            x1="320"
            y1="116"
            x2="320"
            y2="148"
            stroke="#0f766e"
            strokeWidth="3"
            markerEnd="url(#osArrow)"
          />
          <polygon points="312,148 328,148 320,160" fill="#0f766e" />
          <text
            x="348"
            y="142"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#0f766e"
          >
            requests services
          </text>

          {/* Operating system */}
          <rect
            x="70"
            y="168"
            width="500"
            height="100"
            rx="14"
            fill="url(#osOsFill)"
            stroke="#0f766e"
            strokeWidth="2"
          />
          <text
            x="320"
            y="204"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#042f2e"
          >
            Operating system
          </text>
          <text
            x="320"
            y="232"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fill="#134e4a"
          >
            Files · Memory · Input / output · System utilities
          </text>
          <text
            x="320"
            y="252"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="13"
            fill="#115e59"
          >
            Platform apps are written for
          </text>

          {/* Arrow OS → hardware */}
          <line
            x1="320"
            y1="268"
            x2="320"
            y2="300"
            stroke="#334155"
            strokeWidth="3"
          />
          <polygon points="312,300 328,300 320,312" fill="#334155" />
          <text
            x="348"
            y="294"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fill="#334155"
          >
            controls devices
          </text>

          {/* Hardware */}
          <rect
            x="70"
            y="320"
            width="500"
            height="78"
            rx="14"
            fill="url(#osHwFill)"
            stroke="#0f172a"
            strokeWidth="2"
          />
          <text
            x="320"
            y="352"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#f8fafc"
          >
            Hardware
          </text>
          <text
            x="320"
            y="378"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fill="#cbd5e1"
          >
            CPU · Memory · Storage · Keyboard · Display
          </text>
        </svg>
      </div>
    </DiagramFrame>
  );
}
