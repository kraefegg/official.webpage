import React, { useMemo, useRef, useState } from 'react';
import { Sparkles, X, Send, Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useI18n } from '@/lib/i18n';
import { services } from '@/data/services';
import { markets } from '@/data/markets';
import { CONTACT_CHANNELS } from '@/data/site';

function buildContext(lang) {
  const svc = services
    .map((s) => `- ${s.title[lang === 'en' ? 1 : 0]}: ${s.summary[lang === 'en' ? 1 : 0]}`)
    .join('\n');
  const mkt = markets
    .map((m) => `- ${m.title[lang === 'en' ? 1 : 0]}: ${m.description[lang === 'en' ? 1 : 0]}`)
    .join('\n');
  return `KRAEFEGG M.O. institutional knowledge base.

Positioning: Engineering, Intelligence & Technology. Signature: Engineering, Connected.
Ecosystems: KRAEFEGG M.O. (multidisciplinary engineering and infrastructure), PentaHydra (technology and AI engineering), Oxygen Ecosystem (environmental intelligence and ecological assets).

Services:
${svc}

Strategic markets:
${mkt}

Contact channels:
${CONTACT_CHANNELS.map((c) => `- ${c.email} (${c.label[0]})`).join('\n')}

Rules:
1. Answer only with information from this knowledge base. If something is not in it, say the information is not published and offer the contact channel.
2. Never invent metrics, certifications, clients, partners, prices, delivery dates or completed projects.
3. Commercial requests must be routed to the /contact form or the relevant email.
4. Answer in ${lang === 'en' ? 'English' : 'Brazilian Portuguese'}, concise (max 120 words), professional and technical.`;
}

const QUICK = {
  pt: ['Quais serviços a Kraefegg oferece?', 'Como funciona o PentaHydra?', 'Vocês atuam em data centers?', 'Como solicitar uma proposta?'],
  en: ['What services does Kraefegg offer?', 'How does PentaHydra work?', 'Do you work on data centers?', 'How do I request a proposal?'],
};

export default function InstitutionalAssistant() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);
  const systemContext = useMemo(() => buildContext(lang), [lang]);

  async function send(text) {
    const question = (text || input).trim();
    if (!question || busy) return;
    setInput('');
    setError('');
    setBusy(true);
    const next = [...messages, { role: 'user', content: question }];
    setMessages(next);
    try {
      const history = next
        .slice(-6)
        .map((m) => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`)
        .join('\n');
      const response = await base44.integrations.Core.InvokeLLM({
        prompt: `${systemContext}\n\nConversation so far:\n${history}\n\nAnswer the visitor's last message.`,
      });
      setMessages((prev) => [...prev, { role: 'assistant', content: String(response || '').trim() }]);
    } catch {
      setError(
        lang === 'en'
          ? 'The assistant is unavailable right now. Please use the contact form.'
          : 'O assistente está indisponível no momento. Utilize o formulário de contato.'
      );
    } finally {
      setBusy(false);
      setTimeout(() => listRef.current?.scrollTo({ top: 99999, behavior: 'smooth' }), 60);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#081018]/95 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200 shadow-[0_10px_40px_-12px_rgba(0,229,255,0.5)] backdrop-blur transition-colors hover:border-cyan-300 hover:text-white"
        aria-label="Open institutional assistant"
      >
        <Sparkles className="h-4 w-4" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Assistant' : 'Assistente'}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/50 p-0 backdrop-blur-sm sm:p-6">
          <div className="flex h-[85vh] w-full max-w-md flex-col border border-white/10 bg-[#06090d] shadow-2xl sm:h-[600px] sm:rounded-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-400">Kraefegg Intelligence</div>
                <div className="text-sm text-white">{lang === 'en' ? 'Institutional assistant' : 'Assistente institucional'}</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              <div className="border-l border-cyan-400/40 bg-white/[0.02] px-3 py-3 text-[12px] leading-relaxed text-slate-400">
                {lang === 'en'
                  ? 'I answer using the institution’s published content only. For scope, pricing or proposals, use the contact form.'
                  : 'Respondo apenas com base no conteúdo institucional publicado. Para escopo, preços ou propostas, utilize o formulário de contato.'}
              </div>
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div
                    className={`inline-block max-w-[92%] whitespace-pre-wrap px-3 py-2.5 text-[13px] leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-sm bg-cyan-400/10 text-cyan-50'
                        : 'rounded-sm border border-white/10 bg-white/[0.03] text-slate-300'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex items-center gap-2 text-[12px] text-slate-500">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  {lang === 'en' ? 'Searching institutional content…' : 'Consultando conteúdo institucional…'}
                </div>
              )}
              {error && (
                <div className="space-y-2 border border-rose-400/30 bg-rose-500/5 px-3 py-2 text-[12px] text-rose-200">
                  <p>{error}</p>
                  <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-1 text-cyan-300">
                    {lang === 'en' ? 'Open contact form' : 'Abrir formulário'} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK[lang === 'en' ? 'en' : 'pt'].map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-sm border border-white/10 px-2.5 py-1.5 text-left text-[11px] text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === 'en' ? 'Ask about services, markets, ecosystems…' : 'Pergunte sobre serviços, mercados, ecossistemas…'}
                className="flex-1 border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[13px] text-white placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none"
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="bg-cyan-400 p-2.5 text-[#04121a] transition-colors hover:bg-cyan-300 disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}