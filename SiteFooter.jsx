import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { KraefeggMark, PentahydraEmblem, OxygenEmblem } from '@/components/brand/Marks';
import { useI18n } from '@/lib/i18n';
import { BRAND, CONTACT_CHANNELS } from '@/data/site';

const GROUPS = [
  {
    title: 'footer.institutional',
    links: [
      ['nav.about', '/about'],
      ['nav.vision', '/vision-mission'],
      ['nav.governance', '/governance'],
      ['nav.leadership', '/leadership'],
      ['nav.structure', '/corporate-structure'],
      ['nav.network', '/network'],
      ['nav.partners', '/partners'],
    ],
  },
  {
    title: 'footer.engineering',
    links: [
      ['nav.services', '/services'],
      ['nav.markets', '/markets'],
      ['nav.projects', '/projects'],
      ['nav.showcases', '/showcases'],
      ['nav.research', '/research'],
      ['nav.news', '/news'],
      ['nav.careers', '/careers'],
    ],
  },
  {
    title: 'footer.ecosystems',
    links: [
      ['nav.pentahydra', '/pentahydra'],
      ['nav.oxygen', '/oxygen-ecosystem'],
      ['nav.trust', '/trust'],
      ['nav.responsible', '/responsible-business'],
      ['nav.security', '/security'],
      ['nav.policies', '/policies'],
      ['nav.documentControl', '/policies/document-control'],
    ],
  },
  {
    title: 'footer.legal',
    links: [
      ['nav.privacy', '/legal/privacy'],
      ['nav.terms', '/legal/terms'],
      ['nav.cookies', '/legal/cookies'],
      ['nav.intellectual', '/legal/intellectual-property'],
      ['nav.confidentiality', '/legal/confidentiality'],
    ],
  },
];

export default function SiteFooter() {
  const { t, pick } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#04060a] pt-16">
      <div className="absolute inset-0 tech-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <KraefeggMark size="lg" />
            <p className="max-w-sm text-[13px] leading-relaxed text-slate-400">
              {t('home.subtitle')}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <PentahydraEmblem size={34} />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">PentaHydra</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <OxygenEmblem size={32} />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Oxygen</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="mono-label">{t('common.language')}</div>
              <p className="mt-1 text-[11px] text-slate-500">{t('footer.languageNote')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <div className="mono-label mb-4">{t(group.title)}</div>
                <ul className="space-y-2.5">
                  {group.links.map(([label, to]) => (
                    <li key={to + label}>
                      <Link to={to} className="text-[12.5px] text-slate-400 transition-colors hover:text-cyan-300">
                        {t(label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/[0.06] py-10 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CHANNELS.slice(0, 4).map((channel) => (
            <a
              key={channel.email}
              href={`mailto:${channel.email}`}
              className="group flex flex-col gap-1.5 text-[12px] text-slate-400 transition-colors hover:text-white"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600 group-hover:text-cyan-400/80">
                {pick(channel.label)}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-3 w-3 shrink-0" />
                {channel.email}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-slate-600">
            <span>© {year} {BRAND.name}</span>
            <span className="text-slate-700">/</span>
            <span>{t('footer.rights')}</span>
            <span className="text-slate-700">/</span>
            <span className="text-cyan-500/80">{BRAND.signature}</span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-cyan-300"
          >
            {t('common.talkToTeam')}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}