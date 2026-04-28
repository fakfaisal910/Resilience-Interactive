import { useState } from "react";
import {
  Building2,
  Waves,
  Shield,
  TreePine,
  ChevronDown,
  ChevronUp,
  Info,
  Zap,
  Layers,
  Mountain,
  Users,
  Lightbulb,
  Map,
  AlarmClock,
  Link,
  ChartNoAxesColumn,
  Earth,
  ArrowUpWideNarrow,
  Activity,
  BookOpen,
} from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { BaseIsolationDiagram } from "./BaseIsolationDiagram";
import { InteractiveBaseIsolation } from "./InteractiveBaseIsolation";
import { TsunamiForceCalculator } from "./TsunamiForceCalculator";

interface TierTwoProps {
  onNavigateToTier3: () => void;
}

export function TierTwo({ onNavigateToTier3 }: TierTwoProps) {
  const [openSections, setOpenSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
            2
          </span>
          <h2 className="text-slate-900">
            Structural and Architectural Resilience Principles
          </h2>
        </div>
        <p className="text-slate-600 text-justify mb-4">
          To reduce the impact of earthquakes and tsunamis,
          engineers design structures to respond safely to
          extreme forces.
        </p>
        <p className="text-slate-600 text-justify mb-4">
          These designs combine structural systems with
          architectural decisions to improve overall resilience.
        </p>
        <div>
          <p className="text-slate-600 text-justify mb-3">
            At their core, these strategies focus on three key
            principles:
          </p>
          <ul className="text-slate-600 text-justify mb-4">
            <li>
              •{" "}
              <span className="font-semibold">Absorption</span>{" "}
              - Taking in energy from the hazard
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                Dissipation{" "}
              </span>
              - Reducing the energy within the structure
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                Redistribution{" "}
              </span>
              - Directing forces safely through the structure
            </li>
          </ul>
        </div>
        <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative m-[0px]">
          <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
          <p className="text-slate-700 text-justify">
            Look for expandable "
            <span className="font-semibold">Learn More</span>"
            sections throughout to access technical depth and
            academic references. These link directly to Tier 3
            for deeper engineering analysis.
          </p>
        </div>
      </div>

      {/* EARTHQUAKE ENGINEERING STRATEGIES */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 p-6 rounded-r-lg">
        <h3 className="text-slate-900 flex items-center gap-2 text-[20px]">
          <Mountain className="w-6 h-6 text-orange-600" />
          Designing Structures for Earthquakes
        </h3>
      </div>

      {/* Absorption and Resistance */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-green-700 text-justify" />
          <h3 className="text-slate-900">
            Absorption and Resistance
          </h3>
        </div>

        <p className="text-slate-600 text-justify mb-3">
          When an earthquake occurs, buildings must resist
          strong lateral forces caused by ground shaking.
        </p>
        <div>
          <p className="text-slate-600 text-justify mb-3">
            A structure's ability to do this depends on two key
            properties:
          </p>
          <ul className="text-slate-600 text-justify mb-3">
            <li>
              • <span className="font-semibold">Strength</span>
            </li>
            <li>
              • <span className="font-semibold">Stiffness</span>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <p className="text-slate-700 text-justify">
            Together, these determine how well a structure can
            maintain stability during an earthquake.
          </p>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <BookOpen className="w-6 h-6 text-amber-700 text-justify" />
              <h5 className="text-slate-900 font-semibold">
                Key Concepts
              </h5>
            </div>
            <ul className="space-y-3 text-slate-700 text-justify">
              <li>
                <span className="font-semibold">Strength </span>{" "}
                defines the maximum internal force a structural
                element can sustain before failure
              </li>
              <li>
                <span className="font-semibold">
                  Stiffness{" "}
                </span>{" "}
                controls how much deformation occurs and governs
                drift, accelerations and the distribution of
                seismic forces throughout the structural system
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Lateral Load-Resisting Systems
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              To improve strength and stiffness, engineers
              employ specialised structural systems to control
              how forces move though a building:
            </p>

            <div className="space-y-3 text-slate-700 text-justify">
              <div className="border-l-4 border-blue-400 pl-4 relative">
                <strong>Shear Walls:</strong> Provide strong
                lateral resistance by acting as vertical
                load-bearing elements, reducing building sway
                and controlling overall stability when arranged
                effectively
              </div>
              <div className="border-l-4 border-green-400 pl-4 relative">
                <strong>Braced Frames:</strong> Use triangulated
                members to efficiently distribute lateral forces
                and increase structural stiffness, commonly
                applied in steel systems
              </div>
              <div className="border-l-4 border-purple-400 pl-4 relative">
                <strong>Moment-Resisting Frames:</strong>{" "}
                Provide ductile lateral resistance through rigid
                beam–column connections, allowing controlled
                deformation without collapse
              </div>
              <div className="border-l-4 border-amber-400 pl-4 relative">
                <strong>High-Rise Supplemental Systems:</strong>{" "}
                Enhance global stiffness and force distribution
                in tall buildings through systems such as
                outriggers (linking the core to perimeter
                columns) and mega-bracing
              </div>                 
              <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Bracing%20Systems.png?raw=true"
                        style={{
                          width: "1000px",
                          height: "300px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3 font-semibold">
              Base Isolation Systems
            </h4>
            <p className="text-slate-700 text-justify mb-3">
              Multi-dimensional base isolation systems are used
              to protect structures from earthquake shaking.
              This is done by lengthening the building's
              fundamental period which reduces the ground forces
              imposed on the superstructure.
            </p>
            <p className="text-slate-700 text-justify mb-3">
              {" "}
              Base isolation works by:
              <ul className="text-slate-600 text-justify mb-3">
                <li>
                  • Reducing how much motion is transferred into
                  the building
                </li>
                <li>
                  • Slowing down the structure's response to
                  shaking
                </li>
              </ul>
              <p className="text-slate-700 text-justify mb-3">
                This helps protect the structure and its
                contents.
              </p>
            </p>

            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative m-[0px]">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
              <p className="text-slate-700 text-justify">
                Structures with base isolation{" "}
                <span className="font-semibold">
                  do not stop movement
                </span>{" "}
                during an earthquake. They move in a{" "}
                <span className="font-semibold">
                  controlled and reduced manner
                </span>
                , which prevents damage.
              </p>
            </div>

            <Collapsible.Root
              open={openSections["base-isolation-tech"]}
              onOpenChange={() =>
                toggleSection("base-isolation-tech")
              }
            >
              <Collapsible.Trigger className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors mx-[0px] mt-[10px] mb-[12px]">
                {openSections["base-isolation-tech"] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                Learn More: Base Isolation Systems
              </Collapsible.Trigger>
              <Collapsible.Content className="mt-4 pl-6 border-l-2 border-green-200 bg-green-50 p-4 rounded-r-lg">
                <p className="text-slate-700 text-justify mb-3">
                  Comparative studies demonstrates that base
                  isolation can reduce seismic forces
                  transmitted to a structure by 60-80% compared
                  to fixed-base buildings.
                </p>

                <button
                  onClick={onNavigateToTier3}
                  className="text-purple-700 hover:text-purple-800"
                >
                  View Full System Behaviour in Tier 3 →
                </button>
              </Collapsible.Content>
            </Collapsible.Root>
            <div className="relative">
              <InteractiveBaseIsolation />
            </div>
          </div>
        </div>
      </div>

      {/* Dissipation: Ductility and Energy Absorption */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-yellow-600" />
          <h3 className="text-slate-900">
            Dissipation: Reducing Earthquake Energy
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-slate-700 text-justify mb-4">
              During an earthquake, structures are exposed to
              vast amounts of seismic energy from ground motion.
            </p>
            <p className="text-slate-700 text-justify mb-4">
              A fundamental principle of earthquake-resistant
              design is the controlled dissipation of seismic
              energy through ductile inelastic behaviour.
            </p>
            <p className="text-slate-700 text-justify mb-4">
              Designing structures to remain entirely elastic
              under earthquakes requires unrealistically high
              strength and stiffness—neither practical nor
              economical to build.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 relative">
              <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
                <Activity className="w-6 h-6 text-amber-700 text-justify" />
                <h5 className="text-slate-900 font-semibold">
                  The Ductility Principle
                </h5>
              </div>
              <p className="text-slate-700 text-justify mb-3">
                Seismic design accepts that structures will
                deform beyond their elastic limits. Rather than
                preventing all damage, engineers ensure that
                inelastic deformations occur in a predictable
                manner.
              </p>
              <p className="text-slate-700 text-justify">
                {" "}
                This ability is called{" "}
                <span className="font-semibold">
                  {" "}
                  Ductility
                </span>
                , where:
                <ul className="text-slate-600 text-justify mb-3">
                  <li className="mx-[0px] mt-[5px] mb-[0px]">
                    • Structures are allowed to move beyond
                    their elastic limits
                  </li>
                  <li>
                    • Deformation is controlled and predictable
                  </li>
                  <li>• Sudden brittle failure is avoided</li>
                </ul>
                This helps structures absorb seismic energy and
                maintain stability during strong ground shaking.
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 mb-3">
                Ductility in Different Structural Systems
              </h4>
              <p className="text-slate-700 text-justify mb-4">
                Ductility is not uniformly distributed
                throughout all structural systems. Commonly used
                systems exhibit ductility in various
                concentrations:
              </p>

              <div className="space-y-3 text-slate-700 text-justify">
                <div className="border-l-4 border-blue-400 pl-4 relative">
                  <strong>Moment-Resisting Frames:</strong>{" "}
                  Provide ductile lateral resistance through
                  plastic beam-column joints, achieving high
                  ductility when properly detailed
                </div>
                <div className="border-l-4 border-green-400 pl-4 relative">
                  <strong>Shear Walls:</strong> Provide limited
                  ductility unless purposely detailed with
                  boundary elements and confinement
                  reinforcement
                </div>
                <div className="border-l-4 border-purple-400 pl-4 relative">
                  <strong>Buckling-Restrained Braces:</strong>{" "}
                  Provide highly ductile and symmetric
                  hysteresis loops for optimal energy
                  dissipation
                </div>
                <div className="border-l-4 border-amber-400 pl-4 relative">
                  <strong>Traditional Braced Frames:</strong>{" "}
                  May experience strength degradation due to
                  brace buckling under cyclic loading
                </div>
              </div>
            </div>
          </div>
        </div>

        <Collapsible.Root
          open={openSections["ductility-detail"]}
          onOpenChange={() => toggleSection("ductility-detail")}
        >
          <Collapsible.Trigger className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors mx-[0px] mt-[5px] mb-[-5px]">
            {openSections["ductility-detail"] ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
            Learn More: Hysteretic Behaviour and Energy
            Dissipation
          </Collapsible.Trigger>
          <Collapsible.Content className="mt-4 pl-6 border-l-2 border-green-200 bg-green-50 p-4 rounded-r-lg">
            <p className="text-slate-700 text-justify mb-3">
              Hysteretic behaviour refers to the nonlinear
              force-deformation response of a structural element
              that forms closed hysteresis loops.
            </p>
            <p className="text-slate-700 text-justify mb-3">
              The area enclosed within each loop represents the
              energy dissipated by the structure, thereby
              reducing seismic demand on the superstructure.
            </p>
            <button
              onClick={onNavigateToTier3}
              className="text-purple-700 hover:text-purple-800"
            >
              Explore Full Hysteretic Behaviour and Inelastic
              Behaviour in Tier 3 →
            </button>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>

      {/* Redistribution: Capacity Design */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-6 h-6 text-purple-600" />
          <h3 className="text-slate-900">
            Redistribution: Capacity Design and Load Path
            Control
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-slate-700 text-justify">
            Capacity design philosophy serves as a fundamental
            principle in seismic engineering, ensuring that
            critical structural elements are protected from
            brittle failures.
          </p>
          <p className="text-slate-700 text-justify">
            To prevent failure, structures must be capable of
            redistributing forces away from vulnerable areas and
            towards intentionally designed elements that deform
            inelastically.
          </p>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <ArrowUpWideNarrow className="w-6 h-6 text-purple-700 text-justify" />
              <h5 className="text-slate-900 font-semibold">
                The Capacity Design Hierarchy
              </h5>
            </div>

            <p className="text-slate-700 text-justify mb-3">
              There is an established hierarchy within capacity
              design where damage occurs within a structure:
            </p>
            <ul className="space-y-2 text-slate-700 text-justify">
              <li>
                {" "}
                <span className="font-semibold">
                  Ductile components
                </span>{" "}
                are intentionally designed to yield first under
                cyclic loading
              </li>
              <li>
                <span className="font-semibold">
                  Capacity-protected elements
                </span>{" "}
                remain predominantly elastic to maintain
                gravity-load capacity
              </li>
            </ul>
            <p className="text-slate-700 text-justify mt-3">
              This ensures that damage is controlled and
              predictable, maintaining global stability even
              under severe cyclic loading.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Weak-Beam/Strong-Column Behaviour
            </h4>
            <div>
              <p className="text-slate-600 text-justify mb-3">
                In moment-resistant frames, capacity design is
                implemented through weak-beam/strong-column
                mechanism. This ensures that:
              </p>
              <ul className="text-slate-600 text-justify mb-3">
                <li>• Beams deform first</li>
                <li>• Columns remain strong</li>
              </ul>
              <p className="text-slate-600 text-justify mb-3">
                Therefore, collapse is prevented by:
              </p>
              <ul className="text-slate-600 text-justify mb-3">
                <li>
                  • Avoiding failure of key vertical supports
                </li>
                <li>• Maintaining a stable load path</li>
              </ul>
            </div>

            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative m-[0px]">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
              <p className="text-slate-700 text-justify">
                Earthquake design is not just about preventing
                all damage. It is about controlling where the
                damage goes, so that the structure remains
                stable and does not collapse.
              </p>
            </div>

            <Collapsible.Root
              open={openSections["capacity-design"]}
              onOpenChange={() =>
                toggleSection("capacity-design")
              }
            >
              <Collapsible.Trigger className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors mx-[0px] mt-[15px] mb-[0px]">
                {openSections["capacity-design"] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                Learn More: Capacity Design and Failure
                Mechanisms
              </Collapsible.Trigger>
              <Collapsible.Content className="mt-4 pl-6 border-l-2 border-green-200 bg-green-50 p-4 rounded-r-lg">
                <p className="text-slate-700 text-justify mb-3">
                  Capacity design controls how structures
                  respond during earthquakes by ensuring that
                  damage occurs in a predictable and
                  non-critical manner.
                </p>
                <p className="text-slate-700 text-justify mb-3">
                  This prevents undesirable failure mechanisms,
                  such as column hinging, which can lead to
                  soft-storey behaviour and rapid structural
                  instability.
                </p>
                <p className="mx-[0px] mt-[0px] mb-[12px]">
                  {" "}
                  By concentrating deformation in ductile
                  regions, the structure us able to dissipate
                  energy while maintaining stable load paths,
                  reducing the risk of progressive collapse.
                </p>
                <button
                  onClick={onNavigateToTier3}
                  className="text-purple-700 hover:text-purple-800"
                >
                  Explore Full Failure Mechanisms and Structural
                  Response in Tier 3 →
                </button>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </div>
      </div>

      {/* TSUNAMI ENGINEERING STRATEGIES */}
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border-l-4 border-cyan-500 p-6 rounded-r-lg mt-8">
        <h3 className="text-slate-900 flex items-center gap-2">
          <Waves className="w-6 h-6 text-cyan-600" />
          Engineering Strategies for Tsunamis
        </h3>
      </div>

      {/* Tsunami Structural Systems */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-6 h-6 text-cyan-600" />
          <h3 className="text-slate-900">
            Structural Systems and Resilience-Oriented Design
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-slate-700 text-justify m-[0px]">
            Tsunami-resilient design requires distinct
            engineering mechanisms from those utilised for
            seismic protection.
          </p>
          <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[0px]">
            Instead of ground shaking, buildings are exposed to:
            <ul className="text-slate-600 text-justify mb-3">
              <li className="mx-[0px] mt-[5px] mb-[0px]">
                • Fast moving water and hydoodynamic forces
              </li>
              <li>• Hydrostatic pressure from flooding</li>
              <li>• Impact from debris</li>
              <li>• Erosion of supporting soil</li>
            </ul>
          </p>
          <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[12px]">
            These forces can exceed typical design loads and
            require specialised engineering strategies.
          </p>
          <div>
            <h4 className="text-slate-900 mb-3">
              Material Performance: Reinforced Concrete
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              Reinforced Concrete (RC) has consistently
              displayed superior performance in major tsunami
              events.
            </p>
            <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[0px]">
              This is due to their:
              <ul className="text-slate-600 text-justify mb-3">
                <li className="mx-[0px] mt-[5px] mb-[0px]">
                  •{" "}
                  <span className="font-semibold">
                    Strength{" "}
                  </span>
                  - Resists debris impact forces
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Stiffness{" "}
                  </span>
                  - Limits structure deformation
                </li>
                <li>
                  • <span className="font-semibold">Mass </span>
                  - Improves stability against flowing water
                </li>
              </ul>
            </p>
            <p className="text-slate-700 text-justify mb-4">
              These properties help RC buildings withstand both
              water flow and debris impact.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 relative">
              <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
                <Earth className="w-6 h-6 text-cyan-700 text-justify" />
                <h5 className="text-slate-900 font-semibold">
                  Real-World Performance
                </h5>
              </div>
              <p className="text-slate-700 text-justify mb-3">
                Following the 2004 Indian Ocean tsunami and 2011
                Tōhoku tsunami,&nbsp;&nbsp;RC moment-resisting
                frames remained structurally intact even under
                inundation depths exceeding 5 metres.
              </p>
              <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[12px]">
                When collapse occurred, cases were attributed to
                insufficient construction quality and inadequate
                joint detailing. This led to brittle failure
                mechanisms (joint shear cracking and localised
                punching).
              </p>
              <p className="text-slate-700 text-justify m-[0px]">
                <span className="font-semibold">
                  Design alone is not enough in tsunami-prone
                  regions
                </span>
                . Robust detailing and material quality is
                equally as important.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Foundation Behaviour and Survivability
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              Foundation behaviour provides a critical mechanism
              in determining building survivability during
              tsunami inundation:
            </p>

            <div className="space-y-3 text-slate-700 text-justify">
              <div className="border-l-4 border-red-400 pl-4 relative">
                <strong>Shallow Footings:</strong> Highly
                vulnerable to scour, erosion, and building
                overturning when exposed to high-velocity flows
                from powerful tsunami currents
              </div>
              <div className="border-l-4 border-green-400 pl-4 relative mx-[0px] mt-[0px] mb-[16px]">
                <strong>Deep-Pile Foundations:</strong>{" "}
                Significantly outperform shallow systems through
                transfer of structural loads into deep, stable
                soil layers less susceptible to erosion and
                liquefaction
              </div>
                           
              <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Foundation.png?raw=true"
                        style={{
                          width: "1000px",
                          height: "300px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6"></div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-4 relative">
              <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
                <ChartNoAxesColumn className="w-6 h-6 text-teal-700 text-justify" />
                <h5 className="text-slate-900 font-semibold">
                  Stilted/Open-Plan Foundations
                </h5>
              </div>

              <p className="text-slate-700 text-justify">
                Structures with open-plan substructures
                showcased favourable performance
                during&nbsp;&nbsp;disaster events. These
                structures allowed inundation flows to flow
                through the building and therefore limiting
                structural damage.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 mx-[0px] mt-[0px] mb-[12px]">
              Tsunami-Resistant Structural Strategies
            </h4>
            <div className="space-y-3 text-slate-700 text-justify">
              <div className="border-l-4 border-cyan-400 pl-4 relative">
                <strong>Elevated First Floors:</strong> Raising
                habitable space above expected inundation level
                on open columns to allow water flow-through
              </div>
              <div className="border-l-4 border-blue-400 pl-4 relative">
                <strong>Breakaway Walls:</strong> Sacrificial
                lower-level enclosures designed to fail without
                compromising structural integrity
              </div>
              <div className="border-l-4 border-teal-400 pl-4 relative">
                {" "}
                <strong>Robust Foundations:</strong> Deep piling
                or mat foundations to provide stability and
                resist scour and uplift forces
              </div>
              <div className="border-l-4 border-indigo-400 pl-4 relative">
                <strong>Reinforced Openings:</strong> Designed
                flow paths that reduce drag while maintaining
                structural continuity
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Hydrodynamic Loading Considerations
            </h4>
            <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[10px]">
              Tsunami waves impose extreme forces on coastal
              structures.
            </p>
            <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[16px]">
              Use this tool to explore how factors such as wave
              height and flow velocity influence the forces
              acting on a building:
            </p>
            <div className="relative">
              <TsunamiForceCalculator />
            </div>

            <Collapsible.Root
              open={openSections["tsunami-loading"]}
              onOpenChange={() =>
                toggleSection("tsunami-loading")
              }
            >
              <Collapsible.Trigger className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors mt-4">
                {openSections["tsunami-loading"] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                Learn More: Tsunami Loading and Design
                Considerations
              </Collapsible.Trigger>
              <Collapsible.Content className="mt-4 pl-6 border-l-2 border-green-200 bg-green-50 p-4 rounded-r-lg">
                <p className="text-slate-700 text-justify mb-3">
                  Tsunami loading consists of multiple
                  interacting forces acting on coastal
                  structures, including hydrostatic pressure,
                  hydrodynamic flow forces, and debris impact.
                </p>
                <p className="text-slate-700 text-justify mb-3">
                  Design guidance highlights that these forces
                  do not act independently but combine to
                  produce complex loading conditions during
                  inundation.
                </p>
                <p className="text-slate-700 text-justify mb-3">
                  Key insights include:
                  <ul className="text-slate-600 text-justify mb-3">
                    <li className="mx-[0px] mt-[5px] mb-[0px]">
                      • Hydrostatic pressure increases with
                      water depth, creating sustained lateral
                      forces on structures
                    </li>
                    <li>
                      • Hydrodynamic forces are driven by flow
                      velocity and can generate significant drag
                      and impact pressures
                    </li>
                    <li>
                      • Debris impact can produce impulsive
                      forces that may equal or exceed
                      hydrodynamic loading
                    </li>
                  </ul>
                </p>
                <p className="text-slate-700 text-justify mb-3">
                  These observations have led to design
                  approaches that consider the interaction of
                  multiple force mechanisms, rather than
                  treating them independently.{" "}
                </p>

                <button
                  onClick={onNavigateToTier3}
                  className="text-purple-700 hover:text-purple-800"
                >
                  Explore Full Loading Behaviour and Structural
                  Response in Tier 3 →
                </button>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </div>
      </div>

      {/* Infrastructure and Early Warning */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-blue-600" />
          <h3 className="text-slate-900">
            Infrastructure Protection and Early Warning Systems
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[16px]">
            Tsunami damage extends beyond isolated structures.
            Critical infrastructure such as transportation
            networks, electricity, and water supply systems are
            especially vulnerable, and their failure exacerbates
            post-disaster response challenges.
          </p>
          <div>
            <h4 className="text-slate-900 mb-3">
              Bridge Vulnerability and Rapid Recovery
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              Bridges are particularly vulnerable during tsunami
              events.
            </p>
            <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[0px]">
              Common failure mechanisms include:
              <ul className="text-slate-600 text-justify mb-3">
                <li className="mx-[0px] mt-[5px] mb-[0px]">
                  •{" "}
                  <span className="font-semibold">
                    Foundation Scour
                  </span>{" "}
                  - Flowing water removes soil around bridge
                  supports
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Buoyancy Effects{" "}
                  </span>{" "}
                  - Rising water can lift bridge decks
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Loss of Restraint
                  </span>{" "}
                  - Strong currents can displace or wash away
                  structural elements
                </li>
              </ul>
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg relative px-[24px] py-[16px]">
              <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
                <Link className="w-6 h-6 text-blue-700 text-justify" />
                <h5 className="text-slate-900 font-semibold">
                  Restoring Connectivity
                </h5>
              </div>
              <p className="text-slate-700 text-justify mb-3">
                Rapid post-tsunami connectivity is critical for
                restoring essential services.
              </p>
              <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[-5px]">
                Temporary solutions such as Bailey Bridges can
                be used to:
                <ul className="text-slate-600 text-justify mb-3">
                  <li className="mx-[0px] mt-[5px] mb-[0px]">
                    • Quickly reconnect damaged routes
                  </li>
                  <li>• Support emergency response</li>
                  <li>• Enable recovery operations</li>
                </ul>
                <p>
                  {" "}
                  These systems are especially useful where
                  permanent reconstruction is delayed.
                </p>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">DART System</h4>
            <p className="text-slate-700 text-justify mb-4">
              A key advancement in tsunami detection
              technologies is the Deep-ocean Assessment and
              Reporting of Tsunamis (DART) system. DART buoys
              have improved forecasting of tsunami arrival
              times, inundation depths, and impact zones.
            </p>
            <p className="text-slate-700 text-justify mb-4">
              DART buoys operate as global seabed-mounted bottom
              pressure recorders capable of detecting minute
              changes in the water column associated with
              tsunami wave propagation.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg relative py-[12px] px-[24px] pt-[12px] pb-[6px]">
              <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
                <AlarmClock className="w-6 h-6 text-green-700 text-justify" />
                <h5 className="text-slate-900 font-semibold">
                  Early Warning
                </h5>
              </div>
              <p className="text-slate-700 text-justify mb-3">
                Tsunami risk can also be reduced through
                immediate detection through early warning
                systems
              </p>
              <p className="text-slate-700 text-justify">
                Early warning systems allow:
                <ul className="text-slate-600 text-justify mb-3">
                  <li className="mx-[0px] mt-[5px] mb-[0px]">
                    • Efficient evacuation of coastal
                    populations
                  </li>
                  <li>
                    • Resilient protection of critical
                    infrastructure
                  </li>
                  <li>• Reduction in fatalities</li>
                </ul>
              </p>
            </div>

            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative mx-[0px] mt-[16px] mb-[0px]">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
              <p className="text-slate-700 text-justify">
                Earthquake tsunami risk reduction requires <span className="font-semibold">
                  the physical protection of infrastructure and
                  early warning and response systems.{" "}
                </span>
                Together these improve both resilience and
                recovery capacity.
                
              </p>
            </div>
            <Collapsible.Root
              open={openSections["numerical-modelling"]}
              onOpenChange={() =>
                toggleSection("numerical-modelling")
              }
            >
              <Collapsible.Trigger className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors mt-4">
                {openSections["numerical-modelling"] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                Learn More: Numerical Tsunami Modelling and
                Prediction
              </Collapsible.Trigger>
              <Collapsible.Content className="mt-4 pl-6 border-l-2 border-green-200 bg-green-50 p-4 rounded-r-lg">
                <p className="text-slate-700 text-justify mb-3">
                  Numerical modelling is used to simulate
                  tsunami propagation and predict how waves
                  interact with coastal environments.
                </p>
                <p className="text-slate-700 text-justify mb-3">
                  High-resolution models capture how waves
                  transform as they approach land, including
                  amplification and interaction with coastal
                  topography.
                </p>
                <p className="text-slate-700 text-justify mb-3">
                  Model accuracy is improved through calibration
                  using real-time sensor data and post-disaster
                  observations (Sugawara, 2021).
                </p>
                <button
                  onClick={onNavigateToTier3}
                  className="text-purple-700 hover:text-purple-800"
                >
                  Explore Full Modelling Approaches and System
                  Integration in Tier 3 →
                </button>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </div>
      </div>

      {/* Urban Planning and Nature-Based Solutions */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <TreePine className="w-6 h-6 text-green-600" />
          <h3 className="text-slate-900">
            Urban Planning and Nature-Based Mitigation
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[16px]">
            Tsunami risk mitigation also involves strategic
            urban planning and coastal management policies.
          </p>
          <p className="text-slate-700 text-justify">
            These mechanisms aim to reduce disaster exposure by
            limiting the concentration of people and structures
            within high-hazard coastal zones.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-4 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <Map className="w-6 h-6 text-red-700 text-justify" />
              <h5 className="text-slate-900 font-semibold">
                Coastal Exclusion Zones
              </h5>
            </div>
            <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[0px]">
              After major events such as the 2011 Tōhoku
              Tsunami, high-risk coastal areas were designated
              as restricted development zones, where:
              <ul className="text-slate-600 text-justify mb-3">
                <li className="mx-[0px] mt-[5px] mb-[0px]">
                  • New construction is limited in high-hazard
                  areas
                </li>
                <li>
                  • Critical infrastructure is relocated inland
                </li>
                <li>
                  • Exposure to future tsunami events is reduced
                </li>
              </ul>
            </p>
            <p className="text-slate-700 text-justify">
              These strategies are based on inundation mapping
              from previous events.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-4 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <Lightbulb className="w-6 h-6 text-purple-700 text-justify" />
              <h5 className="text-slate-900 font-semibold text-[16px]">
                Key Considerations
              </h5>
            </div>
            <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[0px]">
              The effectiveness of relocation depends on:
              <ul className="text-slate-600 text-justify mb-3">
                <li className="mx-[0px] mt-[5px] mb-[0px]">
                  • Infrastructure governance and policy
                  enforcement
                </li>
                <li>• Economic factors</li>
                <li>
                  • Impacts on local communities and livelihoods
                </li>
              </ul>
            </p>
            <p className="text-slate-700 text-justify">
              This makes implementation complex in many regions.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Nature-Based Protection Strategies
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              Natural barriers contribute to tsunami-wave energy
              dissipation through reducing tsunami flow and
              absorbing wave energy.
            </p>

            <div className="space-y-3 text-slate-700 text-justify">
              <div className="border-l-4 border-green-400 pl-4 relative">
                <strong>Mangrove Forests:</strong> Create
                hydraulic resistance, reducing flow velocity and
                trapping debris. Coastal areas experience
                reduced structural damage compared to exposed
                coastlines.
              </div>
              <div className="border-l-4 border-slate-400 pl-4 relative">
                <strong>Coral Reefs:</strong> Shallow reefs
                cause waves to break offshore. Dissipating wave
                energy before waves reaching land, significantly
                reducing inundation intensity.
              </div>
              <div className="border-l-4 border-amber-400 pl-4 relative">
                {" "}
                <strong>Sand Dune Systems:</strong> Sand dunes
                act as physical barriers and absorb wave energy,
                offering first-line defence against moderate
                inundation events.
              </div>
              <div className="border-l-4 border-teal-400 pl-4 relative mx-[0px] mt-[0px] mb-[-10px]">
                <strong>Coastal Wetlands:</strong> Tidal
                wetlands decrease surge through surface
                roughness and vegetation drag, reducing flow
                velocities as water moves inland.
              </div>
                           
              <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://github.com/fakfaisal910/Resilience-Interactive/blob/main/public/Urban%20Planning.png?raw=true"
                        style={{
                          width: "900px",
                          height: "450px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                </div>
            </div>

            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative m-[0px]">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
              <p className="text-slate-700 text-justify">
                <strong>Important limitation:</strong> While
                nature-based solutions provide valuable
                supplementary protection, they are insufficient
                as standalone defences against extreme tsunami
                events. They must be integrated with engineered
                mitigation strategies to achieve reliable
                disaster risk reduction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ARCHITECTURAL DESIGN PRINCIPLES */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-6 rounded-r-lg mt-8">
        <h3 className="text-slate-900 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-purple-600" />
          Architectural Design Principles
        </h3>
      </div>

      {/* Architectural Configuration */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 relative">
        
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-6 h-6 text-purple-600" />
          <h3 className="text-slate-900">
            Architectural Configuration and Spatial Design
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-slate-700 text-justify mx-[0px] mt-[0px] mb-[16px]">
            Architectural design plays a fundamental role in
            determining how structural systems respond to
            dynamic earthquake and tsunami loading. Design
            considerations related to spatial configuration and
            building orientation directly govern load path
            direction, deformation patterns, and internal
            occupant movement during disaster events.
          </p>
          <p className="text-slate-700 text-justify mx-[0px] mt-[10px] mb-[16px]">
            It influences:
            <ul className="text-slate-600 text-justify mb-3">
              <li className="mx-[0px] mt-[5px] mb-[0px]">
                • How hydrodynamic forces move through a
                structure
              </li>
              <li>• How the structure deforms</li>
              <li>
                • How people move and evacuate during a disaster
                event
              </li>
            </ul>
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 relative">
            <div className="flex items-center gap-3 mx-[0px] mt-[0px] mb-[16px]">
              <Users className="w-6 h-6 text-green-700 text-justify" />
              <h4 className="text-slate-900">
                Beyond Structural Response: Human Safety
              </h4>
            </div>
            <p className="text-slate-700 text-justify m-[0px]">
              Good and efficient design improves not only
              structural performance, but also human safety:
              <ul className="text-slate-600 text-justify mb-3">
                <li className="mx-[0px] mt-[5px] mb-[0px]">
                  • Clear layouts support faster evacuation
                </li>
                <li>
                  • Intuitive circulation reduces confusion
                  within structural layout
                </li>
                <li>
                  • Accessible vertical escape routes improve
                  overall survivability
                </li>
              </ul>
            </p>
            <p className="text-slate-700 text-justify">
              Architectural design affects both{" "}
              <span className="font-bold">
                structural resilience and human vulnerability.
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Seismic-Resistant Architectural Principles
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              In seismic-resistant design, plan regularity and
              symmetry significantly influence structural
              response:
            </p>
            <div className="space-y-3 text-slate-700 text-justify">
              <div className="border-l-4 border-green-400 pl-4 relative">
                <strong>Regular Building Forms:</strong>{" "}
                Buildings with regular forms promote predictable
                load transfer and efficient energy dissipation.
                Continuous architectural form facilitates
                effective redistribution of seismic forces,
                supporting capacity design principles.
              </div>
              <div className="border-l-4 border-red-400 pl-4 relative">
                <strong>Irregular Forms:</strong> Irregularities
                such as soft-storey configurations introduce
                undesirable twisting demands, amplifying seismic
                damage.
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 mb-3">
              Tsunami-Resistant Architectural Principles
            </h4>
            <p className="text-slate-700 text-justify mb-4">
              Structural resilience is also influenced by
              architectural configuration during tsunami
              inundation:
            </p>
            <div className="space-y-3 text-slate-700 text-justify">
              <div className="border-l-4 border-cyan-400 pl-4 relative">
                <strong>Building Orientation:</strong> Strategic
                orientation perpendicular to the coastline
                improves resistance to water pressure,
                contributing to increased structural stability
              </div>
              <div className="border-l-4 border-blue-400 pl-4 relative">
                <strong>Permeable Lower Storeys:</strong>{" "}
                Structures incorporating permeable lower storeys
                allow tsunami flows to pass through, reducing
                hydrostatic pressures and overturning demands
              </div>
              <div className="border-l-4 border-teal-400 pl-4 relative">
                <strong>Robust Vertical Systems:</strong>{" "}
                Continuous vertical load-bearing systems improve
                stability by limiting force accumulation,
                enabling controlled structural damage without
                total collapse
              </div>
              <div className="border-l-4 border-indigo-400 pl-4 relative">
                <strong>Wall Alignment:</strong> Shear and
                masonry infill walls aligned parallel to
                inundation flow may fail to relieve internal
                pressure deficits, preventing excessive force
                transfer to primary structural elements
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 relative m-[0px]">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 mb-5 flex-shrink-0" />
            <p className="text-slate-700 text-justify">
              <strong>Integration is Essential: </strong>{" "}
              Architectural principles contribute equally to
              overall superstructure resilience performance as
              structural mechanisms, rather than serving solely
              as aesthetic considerations. This integration of
              structural engineering and architectural design
              principles is essential for mitigating both
              structural damage and human vulnerability during
              earthquakes and tsunamis.
            </p>
          </div>
          <Collapsible.Root
            open={openSections["numerical-modelling"]}
            onOpenChange={() =>
              toggleSection("numerical-modelling")
            }
          >
            <Collapsible.Trigger className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors mt-4">
              {openSections["numerical-modelling"] ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
              Learn More: Multi-Hazard Design and PBSD
            </Collapsible.Trigger>
            <Collapsible.Content className="mt-4 pl-6 border-l-2 border-green-200 bg-green-50 p-4 rounded-r-lg">
              <p className="text-slate-700 text-justify mb-3">
                Designing structures in coastal regions requires
                consideration of both earthquake and tsunami
                hazards, which impose different and often
                conflicting demands.{" "}
              </p>
              <p className="text-slate-700 text-justify mb-3">
                Key considerations include:
                <ul className="text-slate-600 text-justify mb-3">
                  <li className="mx-[0px] mt-[5px] mb-[0px]">
                    • Ductility requirements for seismic
                    loading, allowing structures to deform and
                    dissipate energy
                  </li>
                  <li>
                    • Strength and stiffness requirements for
                    tsunami loading, to resist flow forces and
                    debris impact
                  </li>
                  <li>
                    • Architectural constraints, where open
                    configurations improve flow-through but may
                    reduce structural continuity
                  </li>
                </ul>
              </p>
              <p className="text-slate-700 text-justify mb-3">
                These factors must be balanced to ensure safe
                and reliable structural performance.{" "}
              </p>

              <button
                onClick={onNavigateToTier3}
                className="text-purple-700 hover:text-purple-800"
              >
                Explore Full Multi-Hazard and PBSD Behaviour in
                Tier 3 →
              </button>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>
      </div>
    </div>
  );
}