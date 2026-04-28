import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ArrowLeftRight, ArrowUpDown, Waves } from 'lucide-react';

export function SeismicWaveAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime(t => (t + 0.05) % 10);
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const reset = () => {
    setTime(0);
    setIsPlaying(false);
  };

  // Offset for animating seismic waves
  const offset = time * 20;

  // Wave travel distance from focus
  const pWaveDistance = time * 44; // Fastest
  const sWaveDistance = time * 30; // Medium

  // P-Wave: -30 degrees (upward and left)
  const pWaveX = 350 - (pWaveDistance * Math.sin(30 * Math.PI / 180));
  const pWaveY = 280 - (pWaveDistance * Math.cos(30 * Math.PI / 180));

  // S-Wave: +30 degrees (upward and right)
  const sWaveX = 350 + (sWaveDistance * Math.sin(30 * Math.PI / 180));
  const sWaveY = 280 - (sWaveDistance * Math.cos(30 * Math.PI / 180));

  // Surface wave - starts from epicentre and moves horizontally to the right
  const surfaceWaveDistance = time * 24; // Slowest wave
  const surfaceWaveX = 350 + surfaceWaveDistance; // Start from epicentre (350) and move right

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
      <h4 className="text-slate-900 mb-4">Seismic Wave Propagation</h4>

      <svg viewBox="0 0 700 280" className="w-full bg-white rounded border border-slate-300">
        <defs>
          <clipPath id="layersClip">
            <rect x="0" y="80" width="700" height="200" />
          </clipPath>
        </defs>

        {/* Crust layer */}
        <rect x="0" y="80" width="700" height="200" fill="#C2853D" opacity="0.8" />
        <text x="620" y="180" className="fill-amber-900" fontSize="14" fontWeight="600">
          Crust
        </text>

        {/* Ground surface line */}
        <line x1="0" y1="80" x2="700" y2="80" stroke="#78716C" strokeWidth="3" />

        {/* Hypocentre - semicircle at bottom edge */}
        <path
          d="M 325 280 A 25 25 0 0 0 375 280 Z"
          fill="#DC2626"
          stroke="#991B1B"
          strokeWidth="3"
          opacity="0.95"
        />
        <text x="350" y="265" textAnchor="middle" className="fill-white" fontSize="11" fontWeight="700">
          Hypocentre
        </text>

        {/* Epicentre - at surface directly above */}
        <circle cx="350" cy="80" r="10" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />
        <text x="270" y="65" className="fill-red-700" fontSize="13" fontWeight="700">
          Epicentre
        </text>

        {/* Seismic waves - concentric circles radiating from hypocentre */}
        <g clipPath="url(#layersClip)">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <circle
              key={i}
              cx="350"
              cy="280"
              r={i * 30 + (offset * 2)}
              fill="none"
              stroke="#DC2626"
              strokeWidth="3"
              opacity={Math.max(0, 0.75 - i * 0.06)}
            />
          ))}
        </g>

        {/* P-Wave - travels fastest at -30 degrees */}
        {pWaveY > 80 && pWaveX > 20 && (
          <g>
            <circle
              cx={pWaveX}
              cy={pWaveY}
              r="18"
              fill="#3B82F6"
              opacity="0.85"
              stroke="#2563EB"
              strokeWidth="2"
            />
            <foreignObject x={pWaveX - 10} y={pWaveY - 10} width="20" height="20">
              <ArrowLeftRight className="w-5 h-5 text-white" />
            </foreignObject>
          </g>
        )}

        {/* S-Wave - medium speed at +30 degrees */}
        {sWaveY > 80 && sWaveX < 680 && (
          <g>
            <circle
              cx={sWaveX}
              cy={sWaveY}
              r="18"
              fill="#10B981"
              opacity="0.85"
              stroke="#059669"
              strokeWidth="2"
            />
            <foreignObject x={sWaveX - 10} y={sWaveY - 10} width="20" height="20">
              <ArrowUpDown className="w-5 h-5 text-white" />
            </foreignObject>
          </g>
        )}

        {/* Surface Wave - slowest, moves horizontally to the right from epicentre */}
        {surfaceWaveX < 680 && (
          <g>
            <circle
              cx={surfaceWaveX}
              cy={80}
              r="18"
              fill="#F59E0B"
              opacity="0.85"
              stroke="#D97706"
              strokeWidth="2"
            />
            <foreignObject x={surfaceWaveX - 10} y={70} width="20" height="20">
              <Waves className="w-5 h-5 text-white" />
            </foreignObject>
          </g>
        )}

        {/* Legend - bottom left */}
        <g transform="translate(15, 175)">
          {/* P-Wave */}
          <circle cx="12" cy="12" r="12" fill="#3B82F6" opacity="0.85" stroke="#2563EB" strokeWidth="2" />
          <foreignObject x="2" y="2" width="20" height="20">
            <ArrowLeftRight className="w-5 h-5 text-white" />
          </foreignObject>
          <text x="30" y="17" className="fill-white" fontSize="11" fontWeight="600">
            P-Wave (5-8 km/s)
          </text>

          {/* S-Wave */}
          <circle cx="12" cy="45" r="12" fill="#10B981" opacity="0.85" stroke="#059669" strokeWidth="2" />
          <foreignObject x="2" y="35" width="20" height="20">
            <ArrowUpDown className="w-5 h-5 text-white" />
          </foreignObject>
          <text x="30" y="50" className="fill-white" fontSize="11" fontWeight="600">
            S-Wave (3-4.5 km/s)
          </text>

          {/* Surface Wave */}
          <circle cx="12" cy="78" r="12" fill="#F59E0B" opacity="0.85" stroke="#D97706" strokeWidth="2" />
          <foreignObject x="2" y="68" width="20" height="20">
            <Waves className="w-5 h-5 text-white" />
          </foreignObject>
          <text x="30" y="83" className="fill-white" fontSize="11" fontWeight="600">
            Surface Wave (2-3 km/s)
          </text>
        </g>
      </svg>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Trigger Earthquake
            </>
          )}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      <p className="text-slate-600 text-center mt-4 text-central">Watch how different seismic waves travel at different rates from the hypocentre, where the earthquake begins underground.</p>
    </div>
  );
}
