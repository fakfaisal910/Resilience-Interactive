import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function InteractiveBaseIsolation() {
  const [isShaking, setIsShaking] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isShaking) return;

    const interval = setInterval(() => {
      setTime(t => {
        const newTime = t + 0.1;
        if (newTime > 6) {
          setIsShaking(false);
          return 0;
        }
        return newTime;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isShaking]);

  const reset = () => {
    setTime(0);
    setIsShaking(false);
  };

  // Ground motion (large amplitude)
  const groundOffset = isShaking ? Math.sin(time * 3) * 20 : 0;

  // Fixed-base building motion (follows ground closely with amplification)
  const fixedBuildingOffset = isShaking ? Math.sin(time * 3) * 25 : 0;

  // Isolated building motion (minimal, delayed)
  const isolatedBuildingOffset = isShaking ? Math.sin(time * 3 - 1) * 5 : 0;

  // Isolator displacement
  const isolatorOffset = isShaking ? Math.sin(time * 3) * 18 : 0;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
      <h4 className="text-slate-900 mb-4">Interactive Base Isolation Comparison</h4>
      <svg viewBox="-30 0 760 480" className="w-full bg-white rounded border border-slate-300" preserveAspectRatio="xMidYMid">
        {/* Ground with motion */}
        <g transform={`translate(${groundOffset}, 25)`}>
          <rect x="0" y="350" width="700" height="100" fill="#8B7355" />
          <pattern id="groundPatternAnim" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="20" y2="0" stroke="#6B5745" strokeWidth="1" />
          </pattern>
          <rect x="0" y="350" width="700" height="100" fill="url(#groundPatternAnim)" />
        </g>

        {/* Ground motion indicator */}
        {isShaking && (
          <g>
            <text x="350" y="430" textAnchor="middle" className="fill-red-600" fontSize="20" fontWeight="600">
              ← Earthquake Shaking →
            </text>
          </g>
        )}

        {/* Left - Fixed-Base Building */}

          <text x="130" y="40" textAnchor="middle" className="fill-slate-700" fontSize="20" fontWeight="600">
            Fixed-Base
          </text>

          <g transform={`translate(${fixedBuildingOffset}, 0)`}>
          {/* Foundation (moves with ground) */}
          <g transform={`translate(${groundOffset - fixedBuildingOffset}, 25)`}>
            <rect x="60" y="310" width="140" height="40" fill="#6B7280" stroke="#374151" strokeWidth="2" />
          </g>

          {/* Building structure */}
          <rect x="70" y="295" width="120" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="70" y="255" width="120" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="70" y="215" width="120" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="70" y="175" width="120" height="35" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />

          {/* Damage indicator when shaking */}
          {isShaking && Math.abs(fixedBuildingOffset) > 0 && (
            <g>
              <text x="130" y="250" textAnchor="middle" className="fill-red-600" fontSize="35" fontWeight="600">
                ⚠
              </text>
              <text x="130" y="155" textAnchor="middle" className="fill-red-600" fontSize="18" fontWeight="600">
                High Forces
              </text>
            </g>
          )}
        </g>

        {/* Right - Base Isolated Building */}
        <g>
          <text x="550" y="40" textAnchor="middle" className="fill-slate-700" fontSize="20" fontWeight="600">
            Base Isolated
          </text>

          {/* Foundation (moves with ground) */}
          <g transform={`translate(${groundOffset}, 25)`}>
            <rect x="480" y="310" width="140" height="40" fill="#6B7280" stroke="#374151" strokeWidth="2" />
          </g>

          {/* Isolation bearings (compress/extend) */}
          <g transform={`translate(${groundOffset}, 25)`}>
            {[500, 530, 560, 590].map((x, i) => (
              <g key={i}>
                <ellipse
                  cx={x}
                  cy={295 - isolatorOffset * 0.1}
                  rx="10"
                  ry={12 + Math.abs(isolatorOffset) * 0.3}
                  fill="#FCD34D"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
              </g>
            ))}
          </g>

          {/* Building structure (minimal motion) */}
          <g transform={`translate(${isolatedBuildingOffset}, 25)`}>
            <rect x="490" y="250" width="120" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />
            <rect x="490" y="210" width="120" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />
            <rect x="490" y="170" width="120" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />
            <rect x="490" y="130" width="120" height="35" fill="#10B981" stroke="#059669" strokeWidth="2" />

            {/* Protected indicator */}
            {isShaking && (
              <g>
                <text x="550" y="110" textAnchor="middle" className="fill-green-600" fontSize="18" fontWeight="600">
                  Protected
                </text>
              </g>
            )}
          </g>

          {/* Isolator displacement indicator */}
          {isShaking && Math.abs(isolatorOffset) > 25 && (
            <g>
              <line
                x1={460 + groundOffset}
                y1="290"
                x2={460 + groundOffset + isolatorOffset}
                y2="290"
                stroke="#F59E0B"
                strokeWidth="2"
                markerEnd="url(#arrowOrangeRight)"
              />
              <text x={470 + groundOffset} y="280" className="fill-amber-700" fontSize="1">
                Absorbs motion
              </text>
            </g>
          )}
        </g>

        {/* Displacement comparison */}
        <g>
          <rect x="20" y="70" width="290" height="50" fill="white" stroke="#CBD5E1" strokeWidth="1" rx="4" opacity="0.95" />
          <text x="30" y="90" className="fill-slate-700" fontSize="16">
            <tspan fontWeight="600">Fixed Building Displacement: </tspan>
            <tspan className="fill-red-600">{Math.abs(fixedBuildingOffset).toFixed(0)}mm</tspan>
          </text>
          <text x="30" y="110" className="fill-slate-700" fontSize="16">
            <tspan fontWeight="600">Isolated Building Displacement: </tspan>
            <tspan className="fill-green-600">{Math.abs(isolatedBuildingOffset).toFixed(0)}mm</tspan>
          </text>
        </g>
      </svg>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => {
            if (!isShaking) setIsShaking(true);
          }}
          disabled={isShaking}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Play className="w-4 h-4" />
          Trigger Earthquake
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      <p className="text-slate-600 text-center mt-4">Click "Trigger Earthquake" to see how base isolation reduces building motion.</p>
    </div>
  );
}
