'use client';

import React from 'react';
import { GridFrame } from './GridFrame';
import { Lock, Cpu } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';

function CornerSq({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const SQ = 7, OFF = -4;
  const style: React.CSSProperties = {
    position: 'absolute', width: SQ, height: SQ,
    background: '#000000', border: '1px solid rgba(138,138,138,0.45)',
    zIndex: 20, pointerEvents: 'none',
    top: pos === 'tl' || pos === 'tr' ? OFF : undefined,
    bottom: pos === 'bl' || pos === 'br' ? OFF : undefined,
    left: pos === 'tl' || pos === 'bl' ? OFF : undefined,
    right: pos === 'tr' || pos === 'br' ? OFF : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

export function SolutionThesis() {
  return (
    <section id="solution" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-20 pb-0">
          
          {/* Section Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 px-6 sm:px-8 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-[#8A8A8A]/25 text-[11px] font-mono text-[#8a8a8a] tracking-wider uppercase">
              PRIVACY BOUNDARY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Privacy with a clear boundary
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Arova is designed to keep the buyer's purchase wallet out of the public review record while still proving purchase eligibility. The reference implementation has a documented threat model and doesn't claim protection against every form of correlation.
            </p>
          </div>

          {/* ── TOP ROW: 2 Main Comparison Cards (Edge-to-Edge Gapless) ── */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-[#8A8A8A]/30">

            {/* Desktop Center Pink/Magenta Link Node Icon */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#000000] border-2 border-[#FF4747] flex items-center justify-center shadow-[0_0_14px_rgba(255,71,71,0.7)]">
                <span className="w-2 h-2 rounded-full bg-[#FF4747]" />
              </div>
            </div>

            {/* Left Card — Smart Account (Trusted Domain) */}
            <div className="relative p-7 sm:p-9 bg-[#050505] lg:border-r border-[#8A8A8A]/30 flex flex-col justify-between space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center text-white shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono text-white tracking-wide">Buyer Wallet</h3>
                      <p className="text-[10px] font-mono text-[#555555] tracking-wider uppercase">PRIVATE DOMAIN</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider bg-[#032014] text-[#00E599] border border-[#00E599]/30 rounded-none shrink-0">
                    ELIGIBILITY PROOF
                  </span>
                </div>

                <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans mb-6">
                  The buyer wallet performs the initial purchase and holds the purchase receipt. It interacts with the local verifier to generate a proof of eligibility without broadcasting the wallet identity.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-[#cccccc]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#00E599] font-bold">✓</span>
                    <span>Executes original Stellar purchase</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#00E599] font-bold">✓</span>
                    <span>Generates zero-knowledge eligibility proof</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#00E599] font-bold">✓</span>
                    <span>Wallet address remains completely private</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card — Stellar Aegis (Lifecycle Domain) */}
            <div className="relative p-7 sm:p-9 bg-[#0d0404] border-t border-[#FF4747]/30 lg:border-t-0 flex flex-col justify-between space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#FF4747]/30 bg-[#120707] flex items-center justify-center text-[#FF4747] shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono text-white tracking-wide">Public Review</h3>
                      <p className="text-[10px] font-mono text-[#FF4747] tracking-wider uppercase">VERIFIED OUTPUT</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider bg-[#2a0808] text-[#FF4747] border border-[#FF4747]/40 rounded-none shrink-0">
                    PUBLIC RECORD
                  </span>
                </div>

                <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans mb-6">
                  The final review published to the marketplace. It contains only what is strictly necessary to prove legitimacy, decoupling the review from the buyer's public financial history.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-[#cccccc]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#FF4747]">★</span>
                    <span>Review content and rating</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#FF4747]">★</span>
                    <span>Verified Purchase cryptographic status</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#FF4747]">★</span>
                    <span>Product reference ID</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ── BOTTOM ROW: 3 Feature Cards (Joined Directly Below, Edge-to-Edge) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#8A8A8A]/30">
            
            <div className="relative p-7 md:p-8 border-r border-[#8A8A8A]/30 border-b md:border-b-0 bg-[#050505]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />
              <h4 className="text-sm font-bold font-mono text-white mb-2">Evidence-Based</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                Verification results can be tested through Stellar Testnet state and reference fixtures.
              </p>
            </div>

            <div className="relative p-7 md:p-8 border-r border-[#8A8A8A]/30 border-b md:border-b-0 bg-[#050505]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />
              <h4 className="text-sm font-bold font-mono text-white mb-2">Threat Model</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                We clearly document the boundaries. Arova doesn't claim protection against every form of correlation or merchant collusion.
              </p>
            </div>

            <div className="relative p-7 md:p-8 bg-[#050505]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />
              <h4 className="text-sm font-bold font-mono text-white mb-2">Wallet-Minimized</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                The buyer's purchase wallet does not need to appear anywhere in the public review record.
              </p>
            </div>

          </div>

        </div>
      </GridFrame>
    </section>
  );
}
