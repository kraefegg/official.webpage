import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, ArrowUpRight } from 'lucide-react';
import { KraefeggMark } from '@/components/brand/Marks';
import { NAV } from '@/data/site';
import { LANGUAGES, useI18n } from '@/lib/i18n';

function LangMenu({ mobile = false }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-sm border border-white/10 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" />
        {lang.toUpperCase()}
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>
      {open && (
        <>
          <button className="fixed inset-0 z-40 cursor-default" aria-hidden onClick={() => setOpen(false)} />
          <div className={`absolute z-50 mt-2 w-60 border border-white/10 bg-[#080b10] p-2 shadow-2xl ${mobile ? 'left-0' : 'right-0'}`}>
            <div className="px-2 pb-2 pt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
              {t('common.availablePacks')}
            </div>
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                disabled={!l.available}
                onClick={() => {
                  if (!l.available) return;
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-2 py-1.5 text-left text-xs transition-colors ${
                  l.available ? 'text-slate-200 hover:bg-cyan-400/10 hover:text-white' : 'cursor-not-allowed text-slate-600'
                } ${lang === l.code ? 'text-cyan-300' : ''}`}
              >
                <span>{l.native}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em]">
                  {l.available ? l.short : t('common.comingSoon')}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.07] bg-[#05070b]/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="KRAEFEGG M.O. — home">
          <KraefeggMark compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((group) => (
            <div key={group.key} className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-[12px] font-medium text-slate-300 transition-colors hover:text-white">
                {t(group.key)}
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full w-64 translate-y-1 border border-white/10 bg-[#080b10]/98 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2 text-[12.5px] transition-colors ${
                        isActive ? 'text-cyan-300' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                      }`
                    }
                  >
                    {t(item.label)}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-40" />
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LangMenu />
          </div>
          <Link
            to="/contact"
            className="hidden rounded-sm bg-cyan-400 px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#04121a] transition-colors hover:bg-cyan-300 md:block"
          >
            {t('nav.contact')}
          </Link>
          <button
            onClick={() => setMobile((v) => !v)}
            className="rounded-sm border border-white/10 p-2 text-slate-200 lg:hidden"
            aria-label="Menu"
            aria-expanded={mobile}
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/[0.07] bg-[#05070b] px-5 pb-10 lg:hidden">
          <div className="flex items-center justify-between py-4">
            <LangMenu mobile />
            <Link to="/contact" onClick={() => setMobile(false)} className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300">
              {t('common.talkToTeam')}
            </Link>
          </div>
          {NAV.map((group) => (
            <div key={group.key} className="border-t border-white/[0.06] py-1">
              <button
                onClick={() => setExpanded((v) => (v === group.key ? null : group.key))}
                className="flex w-full items-center justify-between py-3 text-left text-sm text-white"
              >
                {t(group.key)}
                <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${expanded === group.key ? 'rotate-180' : ''}`} />
              </button>
              {expanded === group.key && (
                <div className="pb-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block border-l border-white/10 py-2 pl-4 text-[13px] text-slate-400 hover:border-cyan-400/60 hover:text-white"
                    >
                      {t(item.label)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}