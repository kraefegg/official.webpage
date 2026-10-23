import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useI18n } from '@/lib/i18n';
import { SECTOR_OPTIONS, SERVICE_OPTIONS } from '@/data/site';

const inputClass =
  'w-full border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[13px] text-white placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none';

export default function ContactRequestForm({ defaultService = '', source = 'contact_page', compact = false }) {
  const { lang, pick } = useI18n();
  const [form, setForm] = useState({
    full_name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    service_type: defaultService,
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  function validate() {
    const next = {};
    if (!form.full_name.trim()) next.full_name = lang === 'en' ? 'Required field' : 'Campo obrigatório';
    if (!form.email.trim()) next.email = lang === 'en' ? 'Required field' : 'Campo obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = lang === 'en' ? 'Invalid email' : 'E-mail inválido';
    if (!form.sector) next.sector = lang === 'en' ? 'Select a sector' : 'Selecione um setor';
    if (!form.service_type) next.service_type = lang === 'en' ? 'Select a service type' : 'Selecione um tipo de serviço';
    if (form.message.trim().length < 20)
      next.message = lang === 'en' ? 'Describe the request in at least 20 characters' : 'Descreva a demanda com pelo menos 20 caracteres';
    if (!consent) next.consent = lang === 'en' ? 'Consent is required' : 'Consentimento obrigatório';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      await base44.entities.ContactRequest.create({
        full_name: form.full_name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        sector: form.sector,
        service_type: form.service_type,
        message: form.message.trim(),
        language: lang,
        source,
        status: 'new',
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="panel flex flex-col items-start gap-3 p-8">
        <CheckCircle2 className="h-7 w-7 text-emerald-400" />
        <h3 className="text-lg text-white">{lang === 'en' ? 'Request registered' : 'Solicitação registrada'}</h3>
        <p className="max-w-md text-[13px] leading-relaxed text-slate-400">
          {lang === 'en'
            ? 'Your request was recorded in our commercial system. Our team will respond using the contact details provided.'
            : 'Sua solicitação foi registrada em nosso sistema comercial. Nossa equipe responderá pelos dados de contato informados.'}
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({ full_name: '', company: '', email: '', phone: '', sector: '', service_type: defaultService, message: '' });
            setConsent(false);
          }}
          className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300"
        >
          {lang === 'en' ? 'Send another request' : 'Enviar outra solicitação'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="panel space-y-4 p-6 sm:p-8" noValidate>
      <div className={`grid gap-4 ${compact ? 'sm:grid-cols-1' : 'sm:grid-cols-2'}`}>
        <Field label={lang === 'en' ? 'Full name' : 'Nome completo'} error={errors.full_name} required>
          <input className={inputClass} value={form.full_name} onChange={set('full_name')} autoComplete="name" />
        </Field>
        <Field label={lang === 'en' ? 'Company' : 'Empresa'} error={errors.company}>
          <input className={inputClass} value={form.company} onChange={set('company')} autoComplete="organization" />
        </Field>
        <Field label={lang === 'en' ? 'Email' : 'E-mail'} error={errors.email} required>
          <input className={inputClass} type="email" value={form.email} onChange={set('email')} autoComplete="email" />
        </Field>
        <Field label={lang === 'en' ? 'Phone' : 'Telefone'} error={errors.phone}>
          <input className={inputClass} value={form.phone} onChange={set('phone')} autoComplete="tel" />
        </Field>
        <Field label={lang === 'en' ? 'Sector' : 'Setor'} error={errors.sector} required>
          <select className={inputClass} value={form.sector} onChange={set('sector')}>
            <option value="">{lang === 'en' ? 'Select…' : 'Selecione…'}</option>
            {SECTOR_OPTIONS.map((option) => (
              <option key={option[0]} value={pick(option)}>
                {pick(option)}
              </option>
            ))}
          </select>
        </Field>
        <Field label={lang === 'en' ? 'Service type' : 'Tipo de serviço'} error={errors.service_type} required>
          <select className={inputClass} value={form.service_type} onChange={set('service_type')}>
            <option value="">{lang === 'en' ? 'Select…' : 'Selecione…'}</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option[0]} value={pick(option)}>
                {pick(option)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={lang === 'en' ? 'Describe the demand' : 'Descrição da demanda'} error={errors.message} required>
        <textarea
          className={`${inputClass} min-h-[130px] resize-y`}
          value={form.message}
          onChange={set('message')}
          placeholder={
            lang === 'en'
              ? 'Scope, location, stage, constraints and expected outcome.'
              : 'Escopo, localização, fase, restrições e resultado esperado.'
          }
        />
      </Field>

      <label className="flex items-start gap-3 text-[11.5px] leading-relaxed text-slate-400">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-3.5 w-3.5 accent-cyan-400" />
        <span>
          {lang === 'en'
            ? 'I agree that the data provided will be processed to respond to this request, under the privacy policy.'
            : 'Concordo que os dados informados sejam tratados para responder a esta solicitação, conforme a política de privacidade.'}
          {errors.consent && <span className="mt-1 block text-rose-300">{errors.consent}</span>}
        </span>
      </label>

      {status === 'error' && (
        <div className="flex items-start gap-2 border border-rose-400/30 bg-rose-500/5 px-3 py-2.5 text-[12px] text-rose-200">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {lang === 'en'
            ? 'The request could not be registered. Please try again in a moment.'
            : 'Não foi possível registrar a solicitação. Tente novamente em instantes.'}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-sm bg-cyan-400 px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#04121a] transition-colors hover:bg-cyan-300 disabled:opacity-60"
      >
        {status === 'sending' && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
        {status === 'sending' ? (lang === 'en' ? 'Sending…' : 'Enviando…') : lang === 'en' ? 'Submit request' : 'Enviar solicitação'}
      </button>
    </form>
  );
}

function Field({ label, error, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate-500">
        {label} {required && <span className="text-cyan-500/70">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-[11px] text-rose-300">{error}</span>}
    </label>
  );
}