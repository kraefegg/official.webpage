import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import InstitutionalAssistant from '@/components/assistant/InstitutionalAssistant';
import { useI18n } from '@/lib/i18n';

export default function PublicLayout() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen flex-col bg-[#05070b]">
      <a href="#main-content" className="skip-link">
        {t('common.continue')} →
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <InstitutionalAssistant />
    </div>
  );
}