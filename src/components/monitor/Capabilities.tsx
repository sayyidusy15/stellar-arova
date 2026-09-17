'use client';

import React from 'react';
import { Key, FileText, Zap, Shield, Activity, Terminal, Code, Cpu } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';

// Corner square mark (matching the reference image style)
function CornerSq({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const SQ = 7;
  const OFF = -4;
  const style: React.CSSProperties = {
    position: 'absolute',
    width: SQ,
    height: SQ,
    background: '#000000',
    border: '1px solid rgba(138,138,138,0.45)',
    zIndex: 20,
    pointerEvents: 'none',
    top: pos === 'tl' || pos === 'tr' ? OFF : undefined,
    bottom: pos === 'bl' || pos === 'br' ? OFF : undefined,
    left: pos === 'tl' || pos === 'bl' ? OFF : undefined,
    right: pos === 'tr' || pos === 'br' ? OFF : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

export function Capabilities() {
  const items = [
    {
      icon: <Key className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Rule",
      title: "Verified Purchase",
      description: "A review must be backed by a valid supported purchase. Refunds or revocations invalidate eligibility."
    },
    {
      icon: <FileText className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Rule",
      title: "One Purchase, One Review",
      description: "A product-scoped nullifier prevents the same purchase from creating duplicate reviews."
    },
    {
      icon: <Zap className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Privacy",
      title: "Wallet-Minimized",
      description: "The buyer's purchase wallet does not need to appear anywhere in the public review record."
    },
    {
      icon: <Shield className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Rule",
      title: "Refund Aware",
      description: "A refunded or revoked purchase can no longer create a new verified review."
    },
    {
      icon: <Activity className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Integration",
      title: "Reusable Integration",
      description: "Designed as a reusable layer for Stellar marketplace applications, not a full marketplace itself."
    },
    {
      icon: <Terminal className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Verification",
      title: "Evidence-Based",
      description: "Verification results can be tested through Stellar Testnet state and reference fixtures."
    },
    {
      icon: <Code className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "SDK",
      title: "TypeScript SDK",
      description: "A TypeScript verifier package and reference relay endpoint for easy integration."
    },
    {
      icon: <Cpu className="w-4 h-4 text-[#8a8a8a]" />,
      tag: "Network",
      title: "Testnet Ready",
      description: "Fully functional on the Stellar Testnet with verifiable transaction outcomes."
    }
  ];

  return (
    <section id="capabilities" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      {/*
        Outer wrapper: max-w-7xl, gap-0, shared borders.
        Aligns perfectly with the vertical rail lines.
      */}
      <div className="relative mx-auto max-w-7xl border-b border-[#8A8A8A]/30">
        
        {/* Section Header */}
        <div className="relative text-center max-w-3xl mx-auto pt-24 pb-16 px-6 sm:px-8 space-y-5 overflow-visible z-10">
          <SpotlightGlow />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[661px] bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
            BUILT TO PLUG INTO STELLAR COMMERCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#ffffff] font-mono leading-tight">
            Product Rules &amp; Properties
          </h2>
          <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
            Arova provides purchase eligibility verification, product-scoped nullifier handling, and refund checks. It does not provide marketplace discovery or fiat checkout.
          </p>
        </div>

        {/* ── 8-CELL GAPLESS GRID (4 cols x 2 rows on desktop) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#8A8A8A]/30">
          {items.map((item, idx) => {
            const borderBottom = idx === 7
              ? 'border-b-0'
              : idx >= 6
                ? 'border-b border-[#8A8A8A]/30 sm:border-b-0'
                : idx >= 4
                  ? 'border-b border-[#8A8A8A]/30 lg:border-b-0'
                  : 'border-b border-[#8A8A8A]/30';

            const borderRight = idx % 4 === 3
              ? 'border-r-0'
              : idx % 2 === 1
                ? 'border-r-0 lg:border-r lg:border-[#8A8A8A]/30'
                : 'border-r border-[#8A8A8A]/30';

            return (
              <div
                key={idx}
                className={`relative bg-[#080808]/40 p-7 md:p-8 flex flex-col justify-between min-h-[220px] group transition-all duration-300 hover:bg-[#0c0c0c]/65 ${borderBottom} ${borderRight}`}
              >
                {/* Intersection corners */}
                <CornerSq pos="tl" />
                <CornerSq pos="tr" />
                <CornerSq pos="bl" />
                <CornerSq pos="br" />

                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 flex items-center justify-center bg-[#0d0d0d] group-hover:border-[#8A8A8A]/45 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono border border-[#8A8A8A]/15 bg-[#0d0d0d]/80 px-2 py-0.5 text-[#8a8a8a] select-none rounded-none">
                    {item.tag}
                  </span>
                </div>

                {/* Middle & Bottom: Title & Description */}
                <div className="space-y-2 mt-auto">
                  <h3 className="text-sm font-semibold tracking-wide text-[#ffffff] font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8a8a8a] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
