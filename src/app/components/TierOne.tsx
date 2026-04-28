import {
  Waves,
  Mountain,
  CloudRainWind,
  Tornado,
  Snowflake,
  Flame,
  AlertCircle,
  ChevronRight,
  Info,
  Globe,
  Anchor,
  TrendingUp,
  Building2,
  ArrowRight,
  ArrowDown,
  ArrowLeftRight,
  ArrowUpDown,
  Combine,
  AudioWaveform,
} from "lucide-react";
import { SeismicWaveAnimation } from "./SeismicWaveAnimation";
import { PlateBoundaryAnimation } from "./PlateBoundaryAnimation";
import { TsunamiDemo } from "./TsunamiDemo";
import CollisionImg from "./public/Collision.png";

interface TierOneProps {
  onNavigateNext: () => void;
}

export function TierOne({ onNavigateNext }: TierOneProps) {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
            1
          </span>
          <h2 className="text-slate-900">
            Understanding Natural Disasters
          </h2>
        </div>
        <p className="text-slate-600 text-justify mb-4">
          Before exploring how engineers protect buildings, it's
          essential to understand what actually causes natural
          disasters. In this case specifically, we focus on
          earthquakes and tsunamis. Understanding how they form
          is the first step in understanding how engineers
          design structures to withstand them.
        </p>

        <div className="flex items-center justify-center gap-5">
          <Mountain
            className="w-10 h-10 text-orange-500"
            strokeWidth={2.5}
          />
          <Tornado
            className="w-10 h-10 text-blue-500"
            strokeWidth={2.5}
          />
          <Waves
            className="w-10 h-10 text-cyan-500"
            strokeWidth={2.5}
          />
          <CloudRainWind
            className="w-10 h-10 text-orange-500"
            strokeWidth={2.5}
          />
          <Snowflake
            className="w-10 h-10 text-blue-500"
            strokeWidth={2.5}
          />
          <Flame
            className="w-10 h-10 text-cyan-500"
            strokeWidth={2.5}
          />
        </div>
      </div>

      {/* Overview of Earthquakes and Tsunamis */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-slate-700 text-justify" />
          <h3 className="text-slate-900">
            Overview of Earthquakes and Tsunamis
          </h3>
        </div>

        <div className="space-y-4 text-slate-700 text-justify">
          <p>
            Earthquakes and tsunamis are geohazards caused by
            powerful natural processes within the Earth.
          </p>

          <div>
            <p className="font-semibold mb-2">
              They result from:
            </p>
            <ul className="space-y-2 ml-4">
              <li>
                • Seismic activity (movement of tectonic plates)
              </li>
              <li>
                • Hydrodynamic processes (movement of large
                water bodies)
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">
              These events can cause:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Widespread destruction</li>
              <li>• Loss of life</li>
              <li>
                • Long-term economic and social disruption
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 relative">
            <h4 className="text-slate-900 mb-4">
              The Earthquake–Tsunami Connection
            </h4>

            {/* Visual connection */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain
                className="w-8 h-8 text-orange-500"
                strokeWidth={2.5}
              />
              <ArrowRight
                className="w-6 h-6 text-blue-600"
                strokeWidth={2.5}
              />
              <Waves
                className="w-8 h-8 text-cyan-500"
                strokeWidth={2.5}
              />
            </div>

            
            <p className="mb-3">
              Although earthquakes and tsunamis are different
              hazards, they are often closely linked.
            </p>
            <ul className="space-y-2 mb-3 ml-4">
              <li>
                • Most tsunamis are triggered by large undersea
                earthquakes
              </li>
              <li>
                • These typically occur in subduction zones,
                where one tectonic plate moves beneath another
              </li>
            </ul>
            <p className="font-semibold mb-2">In some cases:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • Rapid vertical movement of the seabed creates
                earthquake-generated tsunamis
              </li>
              <li>
                • These can produce unusually large waves, even
                if the earthquake itself is not the largest
                recorded
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 relative">
            <h4 className="text-slate-900 mb-4">
              Growing Global Vulnerability
            </h4>
            <p className="mb-4">
              The risk from these hazards is increasing due to
              global trends:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Anchor className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Coastal Exposure
                  </p>
                  <p>
                    Millions of people live close to coastlines
                    at risk of tsunami impact
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Future Growth
                  </p>
                  <p>
                    Over 1 billion people are expected to live
                    in low-lying coastal areas by 2050
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Urban Expansion
                  </p>
                  <p>
                    Rapid development is creating large cities
                    in earthquake-prone and coastal regions,
                    particularly in Asia and the Pacific
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Earthquake Mechanisms */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Mountain className="w-6 h-6 text-orange-600" />
          <h3 className="text-slate-900">
            How Earthquakes Work
          </h3>
        </div>

        <div className="space-y-4 text-slate-700 text-justify">
          <p>
            Earthquakes occur when stress builds up within the
            Earth's crust due to tectonic plate movement.
          </p>
          <p>
            When this stress is suddenly released, energy
            travels through the ground as seismic waves, causing
            the shaking we feel at the surface.
          </p>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 my-6 relative">
            <h4 className="text-slate-900 mb-3">
              Where do Earthquakes Occur?
            </h4>
            <p className="mb-4">
              Earthquakes typically occur at plate boundaries,
              including:
            </p>

            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-3">
                <ArrowDown className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Subduction zones
                  </p>
                  <p>Where one plate moves beneath another</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowLeftRight className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Transform boundaries
                  </p>
                  <p>Where plates slide past each other</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Combine className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Collision zones
                  </p>
                  <p>Where plates push into each other</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <PlateBoundaryAnimation />
          </div>    

          
          <h4 className="text-slate-900 mb-3">
            Seismic Wave Propagation
          </h4>
          <p>
            When an earthquake occurs, energy moves through the
            Earth in the form of waves.
          </p>
          <p>
            These waves travel in different ways and determine
            how the ground moves during an earthquake.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 relative">
            <h4 className="text-slate-900 mb-3">
              Types of Seismic Waves
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ArrowLeftRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">
                    P-waves (Primary waves)
                  </strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Travel fastest through the Earth</li>
                    <li>• Move in a push–pull motion</li>
                    <li>• Usually cause less damage</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowUpDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">
                    S-waves (Secondary waves)
                  </strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Travel slower than P-waves</li>
                    <li>• Move side-to-side</li>
                    <li>• Cause stronger ground shaking</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Waves className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">
                    Surface waves
                  </strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Travel along the ground surface</li>
                    <li>
                      • Produce large rolling or side-to-side
                      motion
                    </li>
                    <li>
                      • Responsible for the most noticeable
                      ground movement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <SeismicWaveAnimation />
          </div>

            <h4 className="text-slate-900 mb-3 mt-6">
            How Earthquakes Affect Structures
            </h4>
        
          <p className="mx-[0px] mt-[0px] mb-[6px]">
            When an earthquake occurs, buildings are subjected
            to rapid ground movement.
          </p>
          <div>
            <p className="text-slate-900 mx-[0px] mt-[0px] mb-[12px]">
              To maintain stability, structures must be able to:
            </p>
            <ul className="space-y-2 mb-3 ml-4">
              <li>
                •{" "}
                <span className="font-semibold">
                  Absorb energy{" "}
                </span>
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Dissipate forces{" "}
                </span>
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Redistribute loads safely{" "}
                </span>
              </li>
            </ul>
          </div>

          <p>
            Modern earthquake engineering is designed to ensure
            that structures can deform without collapsing,
            improving overall resilience.
          </p>

          <h6 className="text-slate-900 mb-3 mt-6 font-semibold">Key Effects on Structures</h6>

          <div className="space-y-3 text-slate-700 text-justify">
            <div className="border-l-4 border-orange-400 pl-4 relative">
              <strong>Resonance:</strong> Every structure has a
              natural frequency. If earthquake shaking matches
              this frequency, resonance occurs. This causes the
              building to sway more intensely, which can lead to
              large deformations, structural instability and
              potential collapse.
            </div>
            <div className="border-l-4 border-green-400 pl-4 relative">
              <strong>Soil Amplification:</strong> Ground
              conditions play a major role in earthquake impact,
              where soft soils can increase shaking intensity
              whilst rock transmits waves faster but with less
              amplification.
            </div>
            <div className="border-l-4 border-red-400 pl-4 relative">
              <strong>Soft-Storey Collapse:</strong> Some
              buildings have weaker ground floors which have
              less resistance to lateral movement. This can
              cause the ground floor to fail, leading to
              eventual structural collapse.
            </div>
            <div className="border-l-4 border-amber-400 pl-4 relative">
              <strong>Liquefaction:</strong> In some conditions,
              soil can temporarily behave like a liquid during
              an earthquake, when soil is loose and saturated or
              earthquake shaking reduces its strength. This can
              lead to buildings tilting or foundations losing
              support.
            </div>
          </div>

          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg relative m-[0px] px-[16px] pt-[16px] pb-[5px]">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
            <p className="text-slate-700 text-justify font-semibold">
              Earthquake damage is not caused by ground shaking
              alone.
            </p>
            <p className="text-slate-700 text-justify ml-[-429px] mr-[-150px] mt-[30px] mb-[20px]">
              It results from the interaction between:
              <ul className="ml-[0px] mr-[0px] mt-[0px] mb-[0px]">
                <li>• Ground motion</li>
                <li>• Soil conditions</li>
                <li>• Structural design</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Tsunami Mechanisms */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Waves className="w-6 h-6 text-blue-600 rounded-[50px]" />
          <h3 className="text-slate-900">How Tsunamis Work</h3>
        </div>

        <div className="space-y-4 text-slate-700 text-justify">
          <h4 className="text-slate-900 mb-3">
            Generation and Propagation
          </h4>
          <p>
            Tsunamis are caused by the sudden movement of large
            volumes of water, most commonly due to undersea
            earthquakes in subduction zones.
          </p>
          <p>
            When the seafloor is rapidly displaced, the water
            above it is lifted generated powerful waves that
            travel across the ocean.
          </p>
          <p className="text-slate-900 mb-3 mt-3">
            Although earthquakes are the main cause, tsunamis
            can also be triggered by:
          </p>
          <ul className="space-y-2 m ml-4">
            <li>• Underwater landslides</li>
            <li>• Volcanic eruptions</li>
            <li>• Large-scale fault movements</li>
          </ul>
          
          <div className="relative">
            <TsunamiDemo />
          </div>  
          
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 my-6 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <AudioWaveform className="w-6 h-6 text-cyan-700 text-justify" />
              <h5 className="text-slate-900 font-semibold">
                Deep-Water Wave Behaviour
              </h5>
            </div>
            <p className="mb-3">
              Tsunami waves behave dramatically different from
              normal ocean waves.
            </p>
            <ul className="space-y-3">
              <li>
                <strong className="text-slate-900 font-semibold">
                  Extreme velocity in deep water:
                </strong>{" "}
                Waves travel at speeds of 500-900 km/h
                (comparable to jet aircraft)
              </li>
              <li>
                <strong className="text-slate-900 font-semibold">
                  Low amplitude offshore:
                </strong>{" "}
                Waves remain typically &lt;1m in the open ocean
              </li>
              <li className="mx-[0px] mt-[0px] mb-[16px]">
                <strong className="text-slate-900 font-semibold">
                  Long wavelength:
                </strong>{" "}
                There are 100-500 km between successive wave
                crests
              </li>
            </ul>
                          
            <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Deep%20Water%20Behaviour.png?raw=true"
                        style={{
                          width: "1000px",
                          height: "300px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <TrendingUp className="w-6 h-6 text-red-700 text-justify" />
              <h5 className="text-slate-900 font-semibold">
                The Shoaling Effect
              </h5>
            </div>

            <p className="text-slate-900 mb-3 mt-3">
              Upon reaching shallow coastal waters, ocean waves
              change dramatically:
            </p>
            <ul className="space-y-2 m ml-4">
              <li>
                • Wave velocity{" "}
                <span className="font-semibold">decreases</span>
              </li>
              <li>
                • Wave height{" "}
                <span className="font-semibold">increases</span>
              </li>
              <li>
                • Energy is forced{" "}
                <span className="font-semibold">upwards</span>
              </li>
            </ul>
            <p className="text-slate-900 mt-3">
              This transforms the wave into a destructive surge
              of water.
            </p>
          </div>
          
          <h4 className="text-slate-900 mb-3">
            How Tsunamis Affect Structures
          </h4>
          <p className="mb-3">
            When tsunami waves reach land, they exert powerful
            forces on buildings and infrastructure:
          </p>
          <div className="space-y-3 text-slate-700 text-justify">
            <div className="border-l-4 border-blue-400 pl-4 relative">
              <strong>Hydrodynamic Forces:</strong> Generated by
              high-velocity flow impacting structures directly,
              generating intensive drag and impulsive forces
              capable of failing walls. Flow velocities can
              exceed 10 m/s during peak inundation.
            </div>
            <div className="border-l-4 border-teal-400 pl-4 relative">
              <strong>Hydrostatic Pressure:</strong> Standing
              water columns that trapped within structures after
              initial tsunami impact, create sustained pressure
              that can compromise structural integrity.
            </div>
            <div className="border-l-4 border-purple-400 pl-4 relative">
              <strong>Debris Impact:</strong> Waterborne objects
              (vehicles, shipping containers, trees) become
              projectiles within turbulent flow, increasing
              damage through impact with structures.
            </div>
            <div className="border-l-4 border-indigo-400 pl-4 relative">
              <strong>Foundation Scour and Undermining:</strong>{" "}
              High-velocity water movement removes supporting
              soil around shallow foundations, reducing
              structural stability. This mechanism closely
              mirrors liquefaction, overall increasing
              likelihood of collapse.
            </div>
          </div>

          <div className="gap-2 bg-red-50 border border-red-200 rounded-lg p-5 mt-6 relative">
            <Info
              className="w-6 h-6 text-orange-600 mt=3"
              strokeWidth={2.5}
            />
            <p className="text-slate-700 text-justify ml-[40px] mr-[0px] mt-[-23px] mb-[0px]">
              <strong>Non-Engineered Structures</strong>{" "}
              (particularly masonry and timber buildings) are
              especially vulnerable due to their limited
              ductility and weak lateral capacity. Understanding
              these mechanisms is essential for informing the
              engineering and architectural strategies required
              to mitigate tsunami effects.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onNavigateNext}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
        >
          Continue to Engineering Response
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}