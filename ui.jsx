import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Leaf, Zap, Cpu, Factory, Pickaxe, Trees, Sprout, Anchor, Compass, Building2, ShieldCheck, Gauge, Server } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useI18n } from '@/lib/i18n';

const ICONS = { Wrench, Leaf, Zap, Cpu, Factory, Pickaxe, Trees, Sprout, Anchor, Compass, Building2, ShieldCheck, Gauge, Server };

export function IconFor({ name, className = 'w-5 h-5' }) {
  const Cmp = ICONS[name] || Cpu;
  return <Cmp className={className} strokeWidth={1.5} />;
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300/90 ${className}`}>
      <span className="h-[1px] w-6 bg-cyan-400/70" />
      {children}
    </span>
  );
}

export function Tag({ children, tone = 'cyan' }) {
  const tones = {
    cyan: 'border-cyan-400/30 bg-cyan-400/5 text-cyan-200',
    slate: 'border-white/10 bg-white/[0.03] text-slate-300',
    amber: 'border-amber-400/30 bg-amber-400/5 text-amber-200',
    emerald: 'border-emerald-400/30 bg-emerald-400/5 text-emerald-200',
    rose: 'border-rose-400/30 bg-rose-400/5 text-rose-200',
  };
  return (
    <span className={`inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, lead, action, className = '' }) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-3xl space-y-4">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-[2.9rem] balance">{title}</h2>
        {lead && <p className="max-w-2xl text-[15px] leading-relaxed text-slate-400">{lead}</p>}
      </div>
      {action}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, image, meta = [], actions }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 tech-grid opacity-[0.35]" />
      <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className={`space-y-6 ${image ? 'lg:col-span-7' : 'lg:col-span-10'}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[2.4rem] font-medium leading-[1.03] text-white sm:text-5xl lg:text-[3.9rem] balance">{title}</h1>
          {lead && <p className="max-w-2xl text-base leading-relaxed text-slate-400">{lead}</p>}
          {actions && <div className="flex flex-wrap items-center gap-3 pt-2">{actions}</div>}
          {meta.length > 0 && (
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/[0.07] bg-white/[0.04] sm:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="bg-[#080b10] px-4 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  <div className="mt-1.5 font-heading text-sm text-white">{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-8 w-8 border-l border-t border-cyan-400/60" />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b border-r border-cyan-400/30" />
              <div className="overflow-hidden rounded-sm border border-white/10">
                <Image src={image} alt={typeof title === 'string' ? title : ''} className="aspect-[4/3] w-full" fittingType="fill" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function PrimaryLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-sm bg-cyan-400 px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#04121a] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_-6px_rgba(0,229,255,0.6)] ${className}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-sm border border-white/15 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export function CTABand() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#070a0e] py-20">
      <div className="absolute inset-0 tech-dots opacity-40" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div className="space-y-3">
          <Eyebrow>{t('nav.contact')}</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight text-white sm:text-4xl">{t('home.ctaTitle')}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryLink to="/contact">{t('common.requestProposal')}</PrimaryLink>
          <GhostLink to="/services">{t('common.explore')}</GhostLink>
        </div>
      </div>
    </section>
  );
}

export function LegalNote({ children }) {
  return (
    <div className="rounded-sm border border-amber-400/20 bg-amber-400/[0.04] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-200/80">
      {children}
    </div>
  );
}