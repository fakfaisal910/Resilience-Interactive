import { ChevronRight, Layers, Shield, Waves, Mountain } from 'lucide-react';
import { Logo } from './Logo';

interface TitlePageProps {
  onEnter: () => void;
}

export function TitlePage({ onEnter }: TitlePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-cyan-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative transform hover:scale-110 hover:rotate-2 transition-all duration-500 ease-out">
            <Logo size={200} />
          </div>
        </div>

        {/* Application Name */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Resilience Interactive
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200 mb-6">
            Engineering Response to Natural Disasters
          </p>
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-orange-400" />
              <span>Earthquakes</span>
            </div>
            <span className="text-slate-500">•</span>
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-cyan-400" />
              <span>Tsunamis</span>
            </div>
            <span className="text-slate-500">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Resilience</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-6">
            <Layers className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-white text-xl mb-2">Three-Tier Learning Experience</h2>
              <p className="text-slate-300 leading-relaxed">
                Explore how engineering and architecture create resilient structures through progressive
                content tiers
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-blue-200 font-semibold">Disaster Formation</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Understand earthquake and tsunami mechanisms with accessible explanations
              </p>
            </div>

            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-green-200 font-semibold">Engineering Response</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Discover structural strategies with interactive demonstrations
              </p>
            </div>

            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-purple-200 font-semibold">Technical Depth</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Explore deeper technical analysis and engineering behaviour
              </p>
            </div>
          </div>
        </div>

        {/* Enter Button */}
        <div className="text-center">
          <button
            onClick={onEnter}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg font-semibold">Begin Learning</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-400 text-sm">
          <p>Interactive educational platform for earthquake and tsunami engineering</p>
        </div>
      </div>
    </div>
  );
}
