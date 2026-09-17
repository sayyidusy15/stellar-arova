'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Settings, Share2, Lock, Eye, ShieldOff, Clock } from 'lucide-react';
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

const stages = [
  {
    num: '01',
    label: 'Purchase',
    icon: <UserPlus className="w-4 h-4" />,
    tagline: 'A buyer completes a supported Stellar purchase.',
    detail: 'The buyer purchases the product via a supported Stellar token and merchant wallet. The transaction is recorded on the Stellar ledger, proving the purchase happened.',
    code: `// Stellar Purchase Transaction
const tx = await stellar.submitTransaction({
  source: buyerWallet,
  destination: merchantWallet,
  asset: USDC,
  amount: '50.00'
});
// → status: SUCCESS`,
  },
  {
    num: '02',
    label: 'Prove',
    icon: <Settings className="w-4 h-4" />,
    tagline: 'The buyer prepares proof of eligibility for that specific product.',
    detail: 'Using a local verifier, the buyer generates a cryptographic proof that they own the wallet which made the purchase. This proof contains a product-scoped nullifier to prevent double-spending the review.',
    code: `// Generate eligibility proof locally
const proof = await arova.generateProof({
  purchaseTxHash,
  productId: '1042',
  buyerPrivateKey
});
// → returns: { proofData, nullifier }`,
  },
  {
    num: '03',
    label: 'Verify',
    icon: <Lock className="w-4 h-4" />,
    tagline: 'Arova verifies the proof without requiring the purchase wallet in the public review record.',
    detail: 'The proof and the review content are sent to a reference relay. The relay verifies the proof mathematically and checks that the purchase was not refunded.',
    code: `// Relay verifies the proof
const isValid = await arova.verifyProof(proof, reviewData);
const isRefunded = await arova.checkRefundStatus(purchaseTxHash);
// → Valid Proof & Unrefunded
// → AUTHORIZED`,
  },
  {
    num: '04',
    label: 'Publish',
    icon: <Share2 className="w-4 h-4" />,
    tagline: 'The marketplace accepts the verified review.',
    detail: "The public review record is created containing the review content, a Verified Purchase tag, and the product reference. The buyer's wallet address is NEVER included.",
    code: `// Public review record
{
  reviewId: 'rev_94x...',
  productId: '1042',
  rating: 5,
  content: 'Great product!',
  verifiedPurchase: true
  // Note: buyerWallet is OMITTED
}`,
  },
  {
    num: '05',
    label: 'Prevent Reuse',
    icon: <ShieldOff className="w-4 h-4" />,
    tagline: 'A product-scoped nullifier prevents the same purchase from creating another review.',
    detail: 'The relay records the nullifier on-chain or in its database. Any future proof generated from the same purchase for the same product will produce the same nullifier and be rejected.',
    code: `// Attempting a second review with same purchase
const result = await arova.submitReview(proof2, reviewData2);

> Error: Duplicate Nullifier Detected
// → REJECTED`,
  }
];

export function AuthLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = stages[activeIdx];

  return (
    <section id="how-it-works" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <div className="relative mx-auto max-w-7xl border-b border-[#8A8A8A]/30">

        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto pt-24 pb-16 px-6 sm:px-8 space-y-5 overflow-visible z-10">
          <SpotlightGlow />
          <div className="inline-flex items-center px-4 py-1.5 rounded-[661px] bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
            VERIFICATION WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#ffffff] font-mono leading-tight">
            How Arova Works
          </h2>
          <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
            Valid Stellar purchase → private eligibility proof → review submission → proof verification → product-scoped nullifier → one review accepted
          </p>
        </div>

        {/* ── LEFT MENU + RIGHT CONTENT LAYOUT ── */}
        <div className="flex flex-col lg:flex-row border-t border-[#8A8A8A]/30">

          {/* LEFT: Stage Menu */}
          <div className="relative lg:w-[280px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[#8A8A8A]/30">
            <CornerSq pos="tl" />
            <CornerSq pos="bl" />
            {stages.map((stage, idx) => {
              const isActive = idx === activeIdx;
              const isLast = idx === stages.length - 1;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative w-full text-left flex items-center gap-4 px-6 py-5 transition-all duration-200 group ${
                    !isLast ? 'border-b border-[#8A8A8A]/20' : ''
                  } ${isActive ? 'bg-[#0d0d0d]' : 'hover:bg-[#080808]/60'}`}
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF4747]" />
                  )}

                  {/* Step number */}
                  <span className={`text-[10px] font-mono w-5 shrink-0 ${isActive ? 'text-[#FF4747]' : 'text-[#8a8a8a]/50'}`}>
                    {stage.num}
                  </span>

                  {/* Icon */}
                  <span className={`transition-colors duration-200 ${isActive ? 'text-[#FF4747]' : 'text-[#8a8a8a]/50 group-hover:text-[#8a8a8a]'}`}>
                    {stage.icon}
                  </span>

                  {/* Label */}
                  <span className={`text-sm font-mono font-semibold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#ffffff]' : 'text-[#8a8a8a] group-hover:text-[#ffffff]'}`}>
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Content Panel */}
          <div className="relative flex-1 min-h-[460px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full flex flex-col gap-6"
              >
                {/* Stage Badge + Title */}
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#FF4747]/40 bg-[#FF4747]/10 text-[#FF4747] text-[10px] font-mono tracking-widest rounded-none">
                    Stage {active.num}
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold font-mono text-[#ffffff] tracking-tight">
                    {active.label}
                  </span>
                  <span className="ml-auto text-[#FF4747]/60">
                    {active.icon}
                  </span>
                </div>

                {/* Tagline + Detail */}
                <div className="space-y-3 max-w-2xl">
                  <p className="text-sm font-medium text-[#ffffff]/90 leading-relaxed font-sans">
                    {active.tagline}
                  </p>
                  <p className="text-[12px] text-[#8a8a8a] leading-relaxed font-sans">
                    {active.detail}
                  </p>
                </div>

                {/* Code / Terminal Block */}
                <div className="flex-1 border border-[#8A8A8A]/15 bg-[#050505] p-5 font-mono text-[11px] text-[#8a8a8a] leading-relaxed overflow-auto whitespace-pre-wrap rounded-none">
                  <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-[#8A8A8A]/10">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    <span className="ml-3 text-[9px] text-[#8a8a8a]/40 tracking-widest">AROVA SDK // STAGE {active.num}</span>
                  </div>
                  <code className="text-emerald-400/70">{active.code}</code>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
