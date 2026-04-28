import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import SubductionZone from "./public/Subduction.png";

export function PlateBoundaryAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedType, setSelectedType] = useState<'subduction' | 'transform' | 'collision'>('subduction');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        if (selectedType === 'subduction') return (prev + 1) % 100;
        if (selectedType === 'transform') return (prev + 1) % 80;
        return (prev + 1) % 60; // collision
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, selectedType]);

  const reset = () => {
    setOffset(0);
    setIsPlaying(false);
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
      <h4 className="text-slate-900 mb-4">Interactive Plate Boundary Demonstration</h4>

      {/* Boundary Type Selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => { setSelectedType('subduction'); reset(); }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedType === 'subduction'
              ? 'bg-orange-600 text-white'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
          }`}
        >
          Subduction Zone
        </button>
        <button
          onClick={() => { setSelectedType('transform'); reset(); }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedType === 'transform'
              ? 'bg-orange-600 text-white'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
          }`}
        >
          Transform Boundary
        </button>
        <button
          onClick={() => { setSelectedType('collision'); reset(); }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedType === 'collision'
              ? 'bg-orange-600 text-white'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
          }`}
        >
          Collision Zone
        </button>
      </div>

      {/* Animation Display */}
      <div className="bg-white border border-slate-300 rounded-lg p-[30px] mx-[0px] mt-[0px] mb-[8px]">
        <div className="relative h-80 flex items-center justify-center overflow-hidden">
          {selectedType === 'subduction' && (
                              
      <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="src/imports/Subduction.png"
            alt="Subduction Zone Graphic Diagram"
              style={{
              width: "420px",
              height: "320px",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div> 
          )}

          {selectedType === 'transform' && (
                              <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="./public/Transform.png"
              style={{
              width: "420px",
              height: "320px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div> 
          )}

          {selectedType === 'collision' && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="./public/Collision.png"
              style={{
              width: "420px",
              height: "320px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>  
          )}
        </div>

        {/* Description */}
        <div className="mt-4 text-sm text-slate-700 text-justify">
          {selectedType === 'subduction' && (
            <p>
              <strong>Subduction Zone:</strong> One tectonic plate moves beneath another, diving into the mantle.
              This process creates deep ocean trenches and can produce the largest earthquakes (magnitude 9.0+),
              such as the 2011 Tōhoku earthquake.
            </p>
          )}
          {selectedType === 'transform' && (
            <p>
              <strong>Transform Boundary:</strong> Two plates slide horizontally past each other along a fault line.
              The friction between plates builds up stress that is suddenly released, causing earthquakes.
              The San Andreas Fault in California is a well-known transform boundary.
            </p>
          )}
          {selectedType === 'collision' && (
            <p>
              <strong>Collision Zone:</strong> Two plates push directly into each other, causing the crust to buckle
              and fold upward, forming mountain ranges. The Himalayas were formed by the collision of the Indian and
              Eurasian plates, and this process continues to produce earthquakes in the region.
            </p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        
        
      </div>
    </div>
  );
}
