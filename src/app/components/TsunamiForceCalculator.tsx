import { useState } from 'react';
import { Info, Waves, } from 'lucide-react';

export function TsunamiForceCalculator() {
  const [waveHeight, setWaveHeight] = useState(5);
  const [flowVelocity, setFlowVelocity] = useState(5);

  // Constants
  const rho = 1025; // Seawater density (kg/m³)
  const g = 9.81; // Gravity (m/s²)
  const Cd = 2.0; // Drag coefficient for structural wall
  const wallWidth = 10; // Assume 10m wide wall
  const wallArea = wallWidth * waveHeight;

  // Calculations
  const hydrostaticPressure = rho * g * waveHeight / 1000; // Convert to kPa
  const hydrodynamicForce = 0.5 * rho * Cd * wallArea * Math.pow(flowVelocity, 2) / 1000; // kN
  const hydrostaticForce = 0.5 * rho * g * Math.pow(waveHeight, 2) * wallWidth / 1000; // kN
  const totalForce = hydrodynamicForce + hydrostaticForce;

  // Determine severity
  const getSeverity = (force: number) => {
    if (force < 500) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-100' };
    if (force < 1500) return { level: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (force < 3000) return { level: 'High', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { level: 'Extreme', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const severity = getSeverity(totalForce);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
              <h3 className="text-slate-900 flex items-center gap-2 mx-[0px] mt-[0px] mb-[16px]">
          <Waves className="w-6 h-6 text-cyan-600" />
          Tsunami Force Calculator
        </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="flex items-center justify-between text-slate-700 mb-2">
              <span>Inundation Depth (m)</span>
              <span className="text-blue-600 font-semibold">{waveHeight.toFixed(1)} m</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="15"
              step="0.5"
              value={waveHeight}
              onChange={(e) => setWaveHeight(parseFloat(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0.5m</span>
              <span>15m</span>
            </div>
          </div>

          <div>
            <label className="flex items-center justify-between text-slate-700 mb-2">
              <span>Flow Velocity (m/s)</span>
              <span className="text-cyan-600 font-semibold">{flowVelocity.toFixed(1)} m/s</span>
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={flowVelocity}
              onChange={(e) => setFlowVelocity(parseFloat(e.target.value))}
              className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0 m/s</span>
              <span>15 m/s</span>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-slate-700 text-sm">Adjust the sliders to see how wave height and flow velocity affect forces on a structure            </p>
          </div>
        </div>

        {/* Results Display */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-300 rounded-lg p-4">
            <h5 className="text-slate-700 text-sm mb-3">Calculated Forces Acting on a 10m Wide Wall</h5>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-600 text-sm">Hydrostatic Pressure</span>
                  <span className="text-slate-900 font-semibold">{hydrostaticPressure.toFixed(1)} kPa</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((hydrostaticPressure / 150) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-600 text-sm">Hydrostatic Force</span>
                  <span className="text-slate-900 font-semibold">{hydrostaticForce.toFixed(0)} kN</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((hydrostaticForce / 1500) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-600 text-sm">Hydrodynamic Force</span>
                  <span className="text-slate-900 font-semibold">{hydrodynamicForce.toFixed(0)} kN</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-cyan-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((hydrodynamicForce / 3000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold">Total Force on Structure</span>
                  <span className="text-slate-900 font-bold text-lg">{totalForce.toFixed(0)} kN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Severity Indicator */}
          <div className={`${severity.bg} border-2 ${severity.color.replace('text', 'border')} rounded-lg p-4`}>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-semibold">Loading Severity</span>
              <span className={`${severity.color} font-bold text-lg`}>{severity.level}</span>
            </div>
            <div className="mt-2 text-sm text-slate-600">
              {severity.level === 'Low' && 'Standard construction may withstand'}
              {severity.level === 'Moderate' && 'Reinforced design recommended'}
              {severity.level === 'High' && 'Tsunami-resistant design required'}
              {severity.level === 'Extreme' && 'Specialized engineering essential'}
            </div>
          </div>

          {/* Formula reference */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-slate-600 text-xs">
              <strong>Formula:</strong> F = ½ρC<sub>d</sub>Av² + ½ρgh²w
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Combines hydrodynamic (flow) abd hydrostatic (depth) forces
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Based on FEMA P-646 tsunami design guidelines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
