import { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/Tabs";
import { TierOne } from "./components/TierOne";
import { TierTwo } from "./components/TierTwo";
import { TitlePage } from "./components/TitlePage";
import { Logo } from "./components/Logo";
import {
  ChevronRight,
  Layers,
  Clock,
  ClipboardCheck,
  Info,
  Zap,
  Activity,
  RefreshCcwDot,
  OctagonAlert,
  ArrowBigDown,
  ArrowBigRightDash,
  GitBranchPlus,
  Split,
  TriangleAlert,
  Waves,
  RadioTower,
  Radar,
  Bell,
  SlidersHorizontal,
  Shuffle,
  BookOpen,
} from "lucide-react";

export default function App() {
  const [showTitlePage, setShowTitlePage] = useState(true);
  const [activeTab, setActiveTab] = useState("tier1");

  // Scroll to top whenever the active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Scroll to top when entering from title page
  useEffect(() => {
    if (!showTitlePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showTitlePage]);

  if (showTitlePage) {
    return (
      <TitlePage onEnter={() => setShowTitlePage(false)} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-slate-800 to-cyan-900 border-b border-cyan-700/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo size={60} />
              <div>
                <h1 className="text-white font-bold">
                  Resilience Interactive
                </h1>
                <p className="text-cyan-200 mt-1">
                  Engineering Response to Natural Disasters
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowTitlePage(true);
                setActiveTab("tier1");
              }}
              className="flex items-center gap-2 px-4 py-2 text-cyan-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-cyan-400/30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-medium">Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tier1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm">
                  1
                </span>
                <span>Disaster Formation</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="tier2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm">
                  2
                </span>
                <span>Engineering Response</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="tier3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm">
                  3
                </span>
                <span>Technical Depth</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tier1">
            <TierOne
              onNavigateNext={() => setActiveTab("tier2")}
            />
          </TabsContent>

          <TabsContent value="tier2">
            <TierTwo
              onNavigateToTier3={() => setActiveTab("tier3")}
            />
          </TabsContent>

          <TabsContent value="tier3">
            <div className="space-y-6">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                    3
                  </span>
                  <h2 className="text-slate-900">
                    Technical Depth
                  </h2>
                </div>

                <p className="text-slate-600 text-justify mb-0">
                  This tier provides deeper technical
                  explanation for user seeking further
                  understanding of engineering principles.
                  Content builds upon concepts introduced in
                  earlier tiers, focusing on mechanisms,
                  behaviours, and real-world application.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-6 h-6 text-green-700 text-justify" />
                  <h3 className="text-slate-900">
                    Base Isolation Systems
                  </h3>
                </div>
                <div className="space-y-4 text-slate-700 text-justify">
                  <p>
                    Base isolation reduces the effect of seismic
                    ground motion by decoupling the
                    superstructure from the foundation through
                    the introduction of a flexible interface.
                  </p>
                  <p>These systems increase the structure's fundamental period, shifting its response away from the range of peak ground accelerations typically experienced by fixed-based structures (Kelly,1990). As a result, the forces transmitted into the structure are significantly reduced.</p>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-6 h-6 text-green-700 text-justify" />
                      <h4 className="text-slate-900">
                        Fundamental Period Shift
                      </h4>
                    </div>
                    <p className="mb-3">
                      The effectiveness of base isolation is
                      governed by its ability to lengthen the
                      structure period through reduced lateral
                      stiffness at the base.
                    </p>
                    <p className="mb-3">By introducing a flexible isolation layer, the shift in dynamic behaviour results in:</p>

                    <ul className="space-y-2 mb-3 ml-4">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Reduced seismic force{" "}
                        </span>
                        transfer
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Reduced acceleration
                        </span>{" "}
                        experienced by superstructure
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Improved protection
                        </span>{" "}
                        of both structural and non-structural
                        elements.
                      </li>
                    </ul>
                    <p>
                      Observed performance indicates that base
                      isolation can reduce seismic forces by
                      approximately{" "}
                      <span className="font-semibold">
                        60-80%
                      </span>
                      , dependant on system configurations and
                      ground conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-slate-900 mb-3">
                      Design Considerations
                    </h4>
                    <p className="text-slate-700 text-justify mb-4">The performance of base isolation systems depends on several key design requirements:</p>
                    <div className="space-y-3 text-slate-700 text-justify">
                      <div className="border-l-4 border-blue-400 pl-4 relative">
                        <strong>Displacement Capacity:</strong>{" "}
                        Isolation systems must accommodate large
                        lateral movements without failure.
                      </div>
                      <div className="border-l-4 border-green-400 pl-4 relative">
                        <strong>Recentring Capability:</strong>{" "}
                        Systems must return to their original
                        position after shaking to prevent
                        permanent displacement.
                      </div>
                      <div className="border-l-4 border-purple-400 pl-4 relative">
                        <strong>
                          Multi-Directional Response:
                        </strong>{" "}
                        Isolation devices must perform under
                        combined horizontal and torsional
                        loading.
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative"> <strong>Vertical Load Support: </strong>Bearings must safely support the weight of the structure.</div>
                      <div className="border-l-4 border-purple-400 pl-4 relative">
                        <strong>
                          Durability and Protection:
                        </strong>{" "}
                        Materials must be protected from
                        environmental effects, including fire
                        and long-term degradation.
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 relative">
                    <h4 className="text-slate-900 mb-2"></h4>
                    <div className="flex items-center gap-3 mb-6">
                      <ClipboardCheck className="w-6 h-6 text-green-700 text-justify" />
                      <h4 className="text-slate-900">
                        Application and Effectiveness
                      </h4>
                    </div>
                    <p className="mb-3">
                      Base isolation is particularly effective
                      in:
                    </p>

                    <ul className="space-y-2 mb-3 ml-4">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          {" "}
                          Low to mid-rise
                        </span>{" "}
                        buildings
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          {" "}
                          Critical infrastructure
                        </span>{" "}
                        requiring continued operation after
                        earthquakes
                      </li>
                    </ul>
                    <p>
                      Comparative studies by Chadalawada (2015)
                      demonstrate that base isolation provides
                      <span className="font-semibold">
                        {" "}
                        superior performance
                      </span>{" "}
                      for absorbing seismic demand when compared
                      to conventional fixed-base design
                      approaches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ductility and Inelastic Deformation */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-slate-900">
                    Ductility and Inelastic Deformation
                  </h3>
                </div>

                <div className="space-y-4 text-slate-700 text-justify">
                  <p>
                    Under seismic loading, structures undergo
                    inelastic deformation where members yield
                    and dissipate energy through controlled
                    damage.
                  </p>
                  <p>
                    Ductility refers to a structure's ability to
                    undergo significant deformation beyond its
                    elastic limit while maintaining strength.
                    This behaviour is fundamental to seismic
                    design, as it enables structures to sustain
                    large cyclic deformations without sudden
                    brittle failure (Fardis, 2009; Chopra,
                    2017).
                  </p>
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative mx-[0px] mt-[0px] mb-[16px]">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
                    <p className="text-slate-700 text-justify">
                      In{" "}
                      <span className="font-semibold">
                        {" "}
                        reinforced concrete systems
                      </span>
                      , ductility is achieved through careful
                      detailing of reinforcement, including
                      confinement and appropriate placement of
                      splices. This ensures that deformation
                      occurs in a
                      <span className="font-semibold">
                        {" "}
                        controlled and predictable manner.
                      </span>
                    </p>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <RefreshCcwDot className="w-6 h-6 text-yellow-600" />
                      <h3 className="text-slate-900">
                        Hysteretic Energy Dissipation
                      </h3>
                    </div>
                    <p className="text-slate-900 mb-3">
                      Energy dissipation during seismic loading
                      occurs through hysteretic behaviour, which
                      describes the nonlinear force-deformation
                      response of structural elements under
                      repeated loading cycles.
                    </p>
                    <p className="mb-3">
                      The area enclosed within each hysteresis
                      loop represents the{" "}
                      <span className="font-semibold">
                        energy dissipated per loading cycle
                      </span>{" "}
                      (Chopra, 2017).
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Loops.png?raw=true"
                        style={{
                          width: "500px",
                          height: "250px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>

                    <p className="text-center mx-[0px] mt-[0px] mb-[12px]">
                      <span className="italic">
                        (Colombo and Negro, 2005)
                      </span>
                    </p>

                    <p>
                      As elements deform and unload, energy is
                      dissipated within the material through
                      internal damage mechanisms. This process
                      <span className="font-semibold">
                        {" "}
                        reduces the overall seismic demand
                      </span>{" "}
                      on the structure by limiting the energy
                      that must be resisted by the
                      superstructure (Chopra, 2017).
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-6 h-6 text-amber-700 text-justify" />
                      <h4 className="text-slate-900">
                        Controlled Inelastic Response
                      </h4>
                    </div>

                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      Modern seismic design does not aim to
                      prevent all damage. Instead, it
                      <span className="font-semibold">
                        {" "}
                        allows controlled inelastic behaviour
                      </span>{" "}
                      to occur within designated regions of the
                      structure.
                    </p>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      This is typically achieved though the
                      formation of
                      <span className="font-semibold">
                        {" "}
                        plastic hinges{" "}
                      </span>
                      in ductile elements, such as beams. These
                      regions act as energy-dissipating zones,
                      while critical structural components
                      remain protected.
                    </p>
                    <p>
                      Designing structures to remain fully
                      elastic under strong earthquakes would
                      require excessive strength and stiffness,
                      making it impractical. Controlled
                      inelasticity therefore provides a more
                      efficient and reliable approach to
                      ensuring structural stability (Paulay and
                      Priestley, 1992).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mx-[0px] mt-[10px] mb-[12px]">
                      Supplemental Damping Devices
                    </h4>
                    <p className="text-slate-700 text-justify mb-4">
                      Seismic damping devices provide
                      supplemental mechanisms for reducing
                      structural acceleration and enhancing
                      energy absorption:
                    </p>
                    <div className="space-y-3 text-slate-700 text-justify">
                      <div className="border-l-4 border-purple-400 pl-4 relative">
                        <strong>Viscous Dampers:</strong> Exert
                        forces proportional to relative
                        velocity, providing effective control of
                        high-frequency seismic components
                      </div>
                      <div className="border-l-4 border-green-400 pl-4 relative">
                        <strong>Friction Dampers:</strong>{" "}
                        Dissipate energy through sliding at
                        controlled friction interfaces,
                        effective in low to mid-rise structures
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative mx-[0px] mt-[0px] mb-[16px]">
                        <strong>Tuned Mass Dampers:</strong>{" "}
                        Frequently used in high-rise structures
                        to reduce peak accelerations by engaging
                        mass inertia
                      </div>
                    </div>

                     <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Damping.png?raw=true"
                        style={{
                          width: "850px",
                          height: "450px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                </div>

                    <p className="text-slate-700 text-justify m-[0px]">
                      Collectively, these mechanisms
                      significantly reduce seismic energy demand
                      throughout the superstructure, enabling
                      improved performance under varying ground
                      motions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capacity Design Philosophy */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <GitBranchPlus className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-slate-900">
                    Capacity Design Philosophy
                  </h3>
                </div>

                <div className="space-y-4 text-slate-700 text-justify">
                  <p>
                    Capacity design ensures that structures
                    respond in a controlled and predictable
                    manner during seismic loading.
                  </p>
                  <p>
                    This is achieved by establishing a hierarchy
                    of failure modes through deliberate
                    overstrength in critical members.
                  </p>

                  <p>
                    The fundamental principle is to protect
                    brittle, non-ductile failure modes (such as
                    shear failure and column hinging) by
                    ensuring they have greater capacity than
                    ductile failure modes (beam plastic hinges).
                  </p>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <Split className="w-6 h-6 text-green-700 text-justify" />
                      <h4 className="text-slate-900">
                        Weak-Beam/Strong-Column Behaviour
                      </h4>
                    </div>
                    <p className="mb-3">
                      In moment-resisting frames, capacity
                      design is implemented through the
                      weak-beam strong-column principle.
                    </p>
                    <p className="mb-3">This ensures that:</p>
                    <ul className="space-y-2 mb-3 ml-4">
                      <li>
                        • Beams form plastic hinges and deform
                      </li>
                      <li>
                        • Columns remain largely elastic and
                        continue to support vertical loads
                      </li>
                    </ul>
                    <p className="space-y-2 mb-3">
                      By forcing inelastic behaviour to occur in
                      beams, the structure develops a{" "}
                      <span className="font-semibold">
                        stable beam-sway mechanism
                      </span>
                      , where lateral forces are safely
                      redistributed through the frame.
                    </p>
                    <p className="mb-3">This maintains:</p>
                    <ul className="space-y-2 mb-3 ml-4">
                      <li>
                        • Structural{" "}
                        <span className="font-semibold">
                          stability
                        </span>
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Continuous{" "}
                        </span>
                        load paths
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Resistance to collapse
                        </span>{" "}
                        during large deformations
                      </li>
                    </ul>
                  </div>
              
                  <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/W-BS-C.png?raw=true"
                        style={{
                          width: "1000px",
                          height: "300px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                </div>
                  <p>
                    The formation of beam plastic hinges (rather
                    than column hinges) creates a desirable
                    "beam-sway" mechanism where lateral load
                    paths remain stable and vertical
                    load-bearing capacity is maintained even
                    during significant inelastic rotations
                    (Paulay and Priestley, 1992).
                  </p>

                  <p>
                    Conversely, column hinging leads to a
                    soft-storey mechanism where a single story
                    experiences concentrated deformation,
                    rapidly leading to P-Δ instability and
                    progressive collapse. This failure mode was
                    extensively documented during the 1995 Kobe
                    earthquake in buildings with irregular
                    stiffness distribution (Ghosh, 1995).
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <TriangleAlert className="w-6 h-6 text-red-700 text-justify" />
                      <h4 className="text-slate-900">
                        Failure Mechanisms and Structural
                        Stability
                      </h4>
                    </div>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      If this hierarchy is not achieved,{" "}
                      <span className="font-semibold">
                        column hinging
                      </span>{" "}
                      may occur.
                    </p>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      This can lead to a soft-storey mechanism,
                      where deformation becomes concentrated
                      within a single storey. As deformation
                      increases, instability develops rapidly,
                      potentially resulting in progressive
                      collapse.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mx-[0px] mt-[10px] mb-[12px]">
                      Design Approach and Implementation
                    </h4>
                    <p className="text-slate-700 text-justify mb-4">
                      Capacity design requires a structured
                      approach to controlling where and how
                      inelastic behaviour occurs within a
                      structure:
                    </p>

                    <div className="space-y-3 text-slate-700 text-justify">
                      <div className="border-l-4 border-purple-400 pl-4 relative">
                        <strong>
                          Ductile Elements (Plastic Hinges):
                        </strong>{" "}
                        Intentionally detailed to yield and
                        deform under seismic loading, acting as
                        energy-dissipating regions within the
                        structure.
                      </div>
                      <div className="border-l-4 border-green-400 pl-4 relative">
                        <strong>
                          Capacity-Protected Elements:
                        </strong>{" "}
                        Designed with higher strength to remain
                        elastic, ensuring critical components
                        such as columns and connections maintain
                        structural stability.
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative">
                        <strong>Hierarchy of Strength:</strong>{" "}
                        Ensures that ductile elements reach
                        their capacity before protected
                        elements, preventing brittle failure
                        modes.
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative">
                        <strong>Load Path Control:</strong>{" "}
                        Maintains continuous and stable force
                        transfer throughout the structure,
                        allowing forces to be safely
                        redistributed during deformation.
                      </div>
                    </div>

                    <p className="text-slate-700 text-justify mt-4">
                      Collectively, these strategies ensure that
                      seismic energy is dissipated in a
                      controlled manner while preserving the
                      structure's ability to support gravity
                      loads and resist collapse.
                    </p>
                  </div>
                </div>
              </div>

              {/* Base Isolation Systems */}

              {/* Supplemental Damping */}

              {/* Tsunami Hydrodynamic Loading */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <Waves className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-slate-900">
                    Tsunami Hydrostatic and Hydrodynamic Loading
                  </h3>
                </div>
                <div>
                  <p className="text-slate-600 text-justify mb-3">
                    Tsunami loading consists of multiple
                    interacting forces acting on coastal
                    structures, including:
                  </p>
                  <ul className="text-slate-600 text-justify mb-3">
                    <li>
                      •<span className="font-bold"> </span>{" "}
                      <span className="font-semibold">
                        <span className="font-bold">
                          Hydrostatic pressure{" "}
                        </span>
                      </span>
                      from standing water
                    </li>
                    <li>
                      •{" "}
                      <span className="font-bold">
                        Hydrodynamic forces{" "}
                      </span>
                      from moving flow
                    </li>
                    <li>
                      •{" "}
                      <span className="font-bold">
                        Impulsive forces
                      </span>{" "}
                      from debris impact
                    </li>
                  </ul>
                </div>
                <div className="space-y-4 text-slate-700 text-justify">
                  <p>
                    These forces can act simultaneously during
                    inundation, producing complex loading
                    conditions that may exceed 100 kPa on
                    vertical surfaces during inundation (EEFIT,
                    2006; FEMA P-646, 2019).
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[24px]">
                      <ArrowBigDown className="w-6 h-6 text-green-700 text-justify" />
                      <h4 className="text-slate-900">Hydrostatic Pressures</h4>
                    </div>
                    <p className="mb-3">
                      Hydrostatic pressure is generated by the{" "}
                      <span className="font-semibold">
                        weight of standing water
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold">
                        increases linearly with depth.
                      </span>
                    </p>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      As inundation depth increases, the
                      pressure exerted on vertical surfaces
                      rises significantly, resulting in large
                      lateral forces acting on structural
                      elements.
                    </p>

                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      {" "}
                      This type of loading is sustained during
                      the inundation phase and contributes
                      to:{" "}
                    </p>
                    <ul className="text-slate-600 text-justify mb-3">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Prolonged
                        </span>{" "}
                        structural loading
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          {" "}
                          Internal pressure differentials{" "}
                        </span>
                        within buildings
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          {" "}
                          Increased risk
                        </span>{" "}
                        of wall and structural failure
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[24px]">
                      <ArrowBigRightDash className="w-6 h-6 text-green-700 text-justify" />
                      <h4 className="text-slate-900">
                        Hydrodynamic Forces
                      </h4>
                    </div>
                    <p className="mb-3">
                      Hydrodynamic forces are caused by{" "}
                      <span className="font-semibold">
                        high-velocity water flow impacting a
                        structure.
                      </span>
                    </p>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      These forces are strongly influenced by:
                    </p>
                    <ul className="text-slate-600 text-justify mb-3">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Flow
                        </span>{" "}
                        velocity
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Internal pressure differentials
                        </span>{" "}
                        within buildings
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Exposed
                        </span>{" "}
                        surface area
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Structural
                        </span>{" "}
                        shape and orientation
                      </li>
                    </ul>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      As flow velocity increases, hydrodynamic
                      forces increase rapidly, often becoming a
                      dominant loading mechanism during peak
                      inundation.
                    </p>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      {" "}
                      These forces generate:
                    </p>
                    <ul className="text-slate-600 text-justify mb-3">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Drag
                        </span>{" "}
                        on structural elements
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Impact pressures
                        </span>{" "}
                        on building surfaces
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Significant lateral loading
                        </span>{" "}
                        during fast-moving flow
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <OctagonAlert className="w-6 h-6 text-red-700 text-justify" />
                      <h4 className="text-slate-900">
                        Impulsive Forces
                      </h4>
                    </div>
                    <p className="mb-3">
                      Tsunami flow often carries large debris,
                      including vehicles, structural fragments,
                      and natural materials.
                    </p>
                    <p className="mb-3">
                      These objects can act as{" "}
                      <span className="font-semibold">
                        high-energy projectiles
                      </span>
                      , producing impulsive forces upon impact.
                    </p>

                     <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Impulsive%20Impact.png?raw=true"
                        style={{
                          width: "750px",
                          height: "400px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                                        
                    <p className="mb-3">
                      Post-event observations from major tsunami
                      events have shown that debris impact can
                      equal or exceed hydrodynamic forces,
                      making it a critical consideration in
                      structural design (EEFIT, 2006).
                    </p>
                  </div>

                  <h4 className="text-slate-900 mb-2">
                    Combined Loading and Structural Loading
                  </h4>
                  <p>
                    Total tsunami force is the result of combined
                    hydrostatic, hydrodynamic, and debris forces
                    acting simultaneously. Design must consider
                    both inflow and outflow phases, as outflow
                    can generate significant suction forces and
                    progressive undermining of foundations
                    through scour.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <RadioTower className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-slate-900">
                    Tsunami Detection, Modelling and Early
                    Warning Systems
                  </h3>
                </div>

                <div className="space-y-4 text-slate-700 text-justify">
                  <p>
                    Modern tsunami risk management relies on the
                    integration of real-time detection systems
                    and numerical modelling to predict and
                    respond to tsunami events.
                  </p>
                  <p>
                    The Deep-ocean Assessment and Reporting of
                    Tsunamis (DART) system forms a key component
                    of this process, using seabed-mounted
                    pressure sensors to detect small changes in
                    the water column in deep ocean conditions
                    (González et al., 1998).
                  </p>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <Radar className="w-6 h-6 text-green-700 text-justify" />
                      <h4 className="text-slate-900">
                        Detection and Monitoring
                      </h4>
                    </div>

                    <p className="mb-3">
                      Tsunami waves in deep water have very
                      small surface amplitudes, making them
                      difficult to observe directly. However,
                      they generate measurable changes in seabed
                      pressure, which can be detected by DART
                      sensors with high precision.
                    </p>

                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      This allows:
                    </p>
                    <ul className="text-slate-600 text-justify mb-3">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Early identification
                        </span>{" "}
                        of tsunami waves
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Confirmation
                        </span>{" "}
                        of tsunami generation following seismic
                        events
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Monitoring
                        </span>{" "}
                        before waves reach the coastline
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mx-[0px] mt-[10px] mb-[12px]">
                      Numerical Modelling and Prediction
                    </h4>
                    <p className="text-slate-700 text-justify mb-4">
                      Numerical models are used to simulate
                      tsunami propagation and predict coastal
                      impact:
                    </p>
                    <div className="space-y-3 text-slate-700 text-justify">
                      <div className="border-l-4 border-purple-400 pl-4 relative">
                        <strong>
                          Wave Propagation Modelling:
                        </strong>{" "}
                        Simulates how tsunami waves travel
                        across ocean basins, predicting arrival
                        time and wave behaviour over large
                        distances
                      </div>
                      <div className="border-l-4 border-green-400 pl-4 relative">
                        <strong>Inundation Modelling:</strong>{" "}
                        Estimates water depth and extent of
                        flooding in coastal regions, accounting
                        for shoreline geometry and terrain
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative">
                        <strong>
                          Nearshore Interaction Modelling:
                        </strong>{" "}
                        Captures wave transformation as it
                        approaches land, including
                        amplification, shoaling, and interaction
                        with coastal features
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative">
                        <strong>
                          High-Resolution Simulation:
                        </strong>{" "}
                        Provides detailed analysis of flow
                        behaviour near structures, including
                        velocity, direction, and localised
                        impact effects{" "}
                      </div>
                      <div className="border-l-4 border-green-400 pl-4 relative">
                        <strong>
                          Model Validation and Calibration:
                        </strong>{" "}
                        Models are refined using real-time
                        sensor data and post-disaster
                        observations to improve accuracy and
                        reliability (Sugawara, 2021){" "}
                      </div>
                    </div>

                    <p className="text-slate-700 text-justify mx-[0px] mt-[16px] mb-[12px]">
                      Collectively, these modelling approaches
                      enable accurate prediction of tsunami
                      behaviour, supporting early warning
                      systems and informed risk management
                      decisions.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 relative">
                      <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[24px]">
                        <Bell className="w-6 h-6 text-green-700 text-justify" />
                        <h4 className="text-slate-900">
                          Warning Lead Times and Response
                        </h4>
                      </div>
                      <p className="mx-[0px] mt-[0px] mb-[12px]">
                        By combining detection and modelling,
                        early warning systems can provide:{" "}
                      </p>
                      <ul className="text-slate-600 text-justify mb-3">
                        <li>
                          •{" "}
                          <span className="font-semibold">
                            10–30 minutes
                          </span>{" "}
                          of warning for near-field events
                        </li>
                        <li>
                          •{" "}
                          <span className="font-semibold">
                            Several hours
                          </span>{" "}
                          for far-field tsunami propagation
                        </li>
                      </ul>
                      <p className="mx-[0px] mt-[0px] mb-[12px]">
                        {" "}
                        These lead times are critical for:{" "}
                      </p>
                      <ul className="text-slate-600 text-justify mb-3">
                        <li>
                          •{" "}
                          <span className="font-semibold">
                            Evacuation
                          </span>{" "}
                          of coastal populations
                        </li>
                        <li>
                          •{" "}
                          <span className="font-semibold">
                            Activation
                          </span>{" "}
                          of emergency response systems
                        </li>
                        <li className="m-[0px]">
                          •{" "}
                          <span className="font-semibold">
                            Protection
                          </span>{" "}
                          of critical infrastructure
                        </li>
                      </ul>
                      <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Emergency%20Responces.png?raw=true"
                        style={{
                          width: "750px",
                          height: "350px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                    </div>
                  </div>

                  <h4 className="text-slate-900 mx-[0px] mt-[10px] mb-[12px]">
                    Engineering Significance
                  </h4>
                  <p className="mx-[0px] mt-[0px] mb-[12px]">
                    While engineering design reduces structural
                    vulnerability, early warning systems reduce
                    exposure and risk.
                  </p>
                  <p>
                    The integration of real-time detection and
                    predictive modelling enables informed
                    decision-making, forming a critical
                    component of multi-layered disaster
                    resilience strategies.
                  </p>
                </div>
              </div>

              {/* Numerical Tsunami Modeling */}

              {/* DART and Early Warning */}

              {/* Multi-Hazard and PBSD */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <SlidersHorizontal className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-slate-900">
                    Multi-Hazard Design and Performance-Based
                    Seismic Design
                  </h3>
                </div>
                <p className="mx-[0px] mt-[0px] mb-[12px]">
                  Structures in coastal regions must be designed
                  to resist both earthquake and tsunami loading,
                  which can create conflicting design
                  requirements.
                </p>
                <div className="space-y-4 text-slate-700 text-justify">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-5 relative">
                    <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[24px]">
                      <Shuffle className="w-6 h-6 text-red-700 text-justify" />
                      <h4 className="text-slate-900">
                        Multi-Hazard Design Challenges
                      </h4>
                    </div>
                    <p className="mx-[0px] mt-[0px] mb-[12px]">
                      Key challenges include :
                    </p>
                    <ul className="text-slate-600 text-justify mb-3">
                      <li>
                        • Seismic design requires ductile
                        systems that can deform and dissipate
                        energy
                      </li>
                      <li>
                        • Tsunami design requires strong, stiff
                        elements to resist flow forces and
                        debris impact
                      </li>
                      <li>
                        • Architectural configuration must
                        balance openness for water flow with
                        structural continuity for load
                        resistance
                      </li>
                    </ul>
                    <p className="mt-3">
                      These competing demands <span className="font-semibold">
                          require integrated
                      design strategies
                        </span>  that balance strength,
                      stiffness, and ductility.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-slate-900 mb-3">
                      Performance-Based Seismic Design (PBSD)
                    </h4>
                    <p className="text-slate-700 text-justify mb-4">
                      Modern engineering approaches use
                      performance-based design, where structures
                      are designed to meet specific performance
                      objectives under different hazard levels.:
                    </p>
                    <p className="text-slate-700 text-justify mb-4">
                      Typical performance goals include:
                    </p>
                    <div className="space-y-3 text-slate-700 text-justify">
                      <div className="border-l-4 border-green-400 pl-4 relative">
                        <strong>Immediate Occupancy:</strong>{" "}
                        Minimal damage and continued operation
                      </div>
                      <div className="border-l-4 border-amber-400 pl-4 relative">
                        <strong>Life Safety:</strong> Controlled
                        damage with safe evacuation
                      </div>
                      <div className="border-l-4 border-red-400 pl-4 relative m-[0px]">
                        <strong>Collapse Prevention:</strong>{" "}
                        Severe damage without structural
                        collapse
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/PBSD.png?raw=true"
                        style={{
                          width: "700px",
                          height: "400px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                    <p className="text-slate-700 text-justify mx-[0px] my-[-16px]">
                      This approach allows engineers to design
                      structures based on expected performance,
                      rather than relying solely on prescriptive
                      rules.{" "}
                    </p>
                  </div>
                </div>
              </div>

              {/* References */}
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-slate-600" />
                  <h3 className="text-slate-900">
                    Key References
                  </h3>
                </div>
                <div className="space-y-2 text-slate-700 text-justify text-sm">
                  <p>
                    Chadalawada (2015) - Comparative analysis of
                    seismic mitigation systems
                  </p>
                  <p>
                    Chopra (2017) - Dynamics of Structures:
                    Theory and Applications to Earthquake
                    Engineering
                  </p>

                  <p>
                    EEFIT (2006) - The Indian Ocean Tsunami of
                    26 December 2004
                  </p>

                  <p>
                    Fardis (2009) - Seismic Design, Assessment
                    and Retrofitting of Concrete Buildings
                  </p>
                  <p>
                    FEMA P-646 (2019) - Guidelines for Design of
                    Structures for Vertical Evacuation from
                    Tsunamis
                  </p>
                  <p>
                    González et al. (1998) - Deep-Ocean
                    Assessment and Reporting of Tsunamis (DART)
                  </p>
                  <p>
                    Kelly (1990) - Base Isolation: Linear Theory
                    and Design
                  </p>

                  <p>
                    Paulay and Priestley (1992) - Seismic Design
                    of Reinforced Concrete and Masonry Buildings
                  </p>

                  <p>
                    Sugawara (2021) - Numerical modelling of
                    tsunami: Advances and future challenges
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation Helper */}
        <div className="mt-8 text-center text-slate-500">
          <p>
            Navigate through the tiers to progressively deepen
            your understanding
          </p>
        </div>
      </main>
    </div>
  );
}