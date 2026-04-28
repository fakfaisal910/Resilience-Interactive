export function BaseIsolationDiagram() {
  return (
    <div className="my-6">
      <svg viewBox="0 0 600 400" className="w-full max-w-2xl mx-auto">
        {/* Ground */}
        <rect x="0" y="320" width="600" height="80" fill="#8B7355" />
        <pattern id="groundPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <line x1="0" y1="20" x2="20" y2="0" stroke="#6B5745" strokeWidth="1" />
        </pattern>
        <rect x="0" y="320" width="600" height="80" fill="url(#groundPattern)" />

        {/* Left Side - Conventional Fixed-Base Building */}
        <g>
          <text x="100" y="30" textAnchor="middle" className="fill-slate-700" fontSize="16" fontWeight="600">
            Fixed-Base Building
          </text>

          {/* Foundation */}
          <rect x="40" y="280" width="120" height="40" fill="#6B7280" stroke="#374151" strokeWidth="2" />

          {/* Building floors */}
          <rect x="50" y="240" width="100" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="50" y="200" width="100" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="50" y="160" width="100" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="50" y="120" width="100" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />

          {/* Floor lines */}
          <line x1="50" y1="257" x2="150" y2="257" stroke="#1E40AF" strokeWidth="1" />
          <line x1="50" y1="217" x2="150" y2="217" stroke="#1E40AF" strokeWidth="1" />
          <line x1="50" y1="177" x2="150" y2="177" stroke="#1E40AF" strokeWidth="1" />

          {/* Ground motion arrows - large */}
          <g>
            <defs>
              <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#DC2626" />
              </marker>
            </defs>
            <path d="M 20,330 Q 35,320 50,330 T 80,330" stroke="#DC2626" strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
            <path d="M 90,350 Q 105,340 120,350 T 150,350" stroke="#DC2626" strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          </g>

          {/* Building motion arrows - large */}
          <g>
            <path d="M 160,180 Q 175,170 190,180 T 220,180" stroke="#DC2626" strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
            <text x="230" y="185" className="fill-red-600" fontSize="12">Large motion</text>
          </g>
        </g>

        {/* Right Side - Base Isolated Building */}
        <g>
          <text x="450" y="30" textAnchor="middle" className="fill-slate-700" fontSize="16" fontWeight="600">
            Base Isolated Building
          </text>

          {/* Foundation */}
          <rect x="390" y="280" width="120" height="40" fill="#6B7280" stroke="#374151" strokeWidth="2" />

          {/* Isolation bearings */}
          <g>
            <circle cx="410" cy="265" r="8" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="440" cy="265" r="8" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="470" cy="265" r="8" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="500" cy="265" r="8" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />

            {/* Bearing labels */}
            <text x="520" y="268" className="fill-amber-600" fontSize="11" fontWeight="500">Isolators</text>
          </g>

          {/* Isolation gap */}
          <line x1="390" y1="257" x2="510" y2="257" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="390" y1="273" x2="510" y2="273" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,4" />

          {/* Building floors */}
          <rect x="400" y="220" width="100" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />
          <rect x="400" y="180" width="100" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />
          <rect x="400" y="140" width="100" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />
          <rect x="400" y="100" width="100" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />

          {/* Floor lines */}
          <line x1="400" y1="237" x2="500" y2="237" stroke="#059669" strokeWidth="1" />
          <line x1="400" y1="197" x2="500" y2="197" stroke="#059669" strokeWidth="1" />
          <line x1="400" y1="157" x2="500" y2="157" stroke="#059669" strokeWidth="1" />

          {/* Ground motion arrows - large */}
          <g>
            <path d="M 370,330 Q 385,320 400,330 T 430,330" stroke="#DC2626" strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
            <path d="M 440,350 Q 455,340 470,350 T 500,350" stroke="#DC2626" strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          </g>

          {/* Building motion arrows - small */}
          <g>
            <defs>
              <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#10B981" />
              </marker>
            </defs>
            <path d="M 510,160 Q 518,157 525,160" stroke="#10B981" strokeWidth="3" fill="none" markerEnd="url(#arrowGreen)" />
            <text x="530" y="165" className="fill-green-600" fontSize="12">Minimal motion</text>
          </g>

          {/* Isolation displacement indicator */}
          <g>
            <line x1="385" y1="265" x2="375" y2="265" stroke="#F59E0B" strokeWidth="2" />
            <line x1="385" y1="255" x2="375" y2="255" stroke="#F59E0B" strokeWidth="2" />
            <path d="M 380,255 L 380,265" stroke="#F59E0B" strokeWidth="2" markerStart="url(#arrowOrange)" markerEnd="url(#arrowOrangeDown)" />
            <defs>
              <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,3 L5,0 L5,6 z" fill="#F59E0B" />
              </marker>
              <marker id="arrowOrangeDown" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M5,3 L0,0 L0,6 z" fill="#F59E0B" />
              </marker>
            </defs>
            <text x="320" y="262" className="fill-amber-700" fontSize="10">Isolator</text>
            <text x="320" y="273" className="fill-amber-700" fontSize="10">displacement</text>
          </g>
        </g>

        {/* Legend */}
        <g>
          <rect x="200" y="360" width="200" height="35" fill="white" stroke="#CBD5E1" strokeWidth="1" rx="4" />
          <line x1="210" y1="372" x2="235" y2="372" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowRed)" />
          <text x="240" y="377" className="fill-slate-700" fontSize="11">Ground motion</text>

          <circle cx="305" cy="372" r="5" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="315" y="377" className="fill-slate-700" fontSize="11">Isolator</text>
        </g>
      </svg>

      <p className="text-center text-slate-600 mt-4 italic">
        Base isolation allows the ground to move independently beneath the structure, dramatically reducing forces transmitted to the building
      </p>
    </div>
  );
}
