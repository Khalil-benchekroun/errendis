'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { products } from '@/lib/products';
import { buildSearchIndex, searchIndex } from '@/lib/search-index';
import { ProductIcon } from './logos';

const WHATSAPP_LINK =
  'https://wa.me/212684637854?text=' +
  encodeURIComponent('Bonjour, je souhaite en savoir plus sur les logiciels Errendis.');

// ── Messages et parcours pré-écrits (aucune génération, aucune IA) ──

const GREETING =
  'Bonjour 👋 Je peux vous aider à trouver le bon logiciel, répondre à une question fréquente, ou vous mettre en contact avec l\u2019équipe. Que cherchez-vous ?';

const MAIN_OPTIONS = [
  { id: 'produit', label: 'Trouver le bon logiciel pour mon activité' },
  { id: 'tarifs', label: 'Question sur les tarifs' },
  { id: 'demo', label: 'Voir une démonstration' },
  { id: 'autre', label: 'Poser une autre question' },
];

const CANNED_ANSWERS = {
  tarifs:
    'Nos tarifs dépendent du produit, du nombre d\u2019utilisateurs et de la taille de votre structure. On établit un devis personnalisé après avoir compris votre organisation — le plus simple est de réserver une démonstration de 30 minutes, sans engagement.',
  demo:
    'Avec plaisir ! Une démonstration Errendis dure environ 30 minutes, se fait sur vos cas concrets, et ne vous engage à rien. Le plus rapide est de nous écrire directement.',
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', kind: 'text', content: GREETING }]);
  const [step, setStep] = useState('main'); // main | produit | autre-input
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);
  const panelRef = useRef(null);

  const searchIdx = useState(() => buildSearchIndex())[0];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function pushBot(kind, content) {
    setMessages((m) => [...m, { role: 'bot', kind, content }]);
  }

  function pushUser(text) {
    setMessages((m) => [...m, { role: 'user', kind: 'text', content: text }]);
  }

  function handleMainOption(opt) {
    pushUser(opt.label);

    if (opt.id === 'produit') {
      setStep('produit');
      pushBot(
        'products',
        'Quel est votre secteur d\u2019activité ? Je vous recommande le bon produit.'
      );
      return;
    }

    if (opt.id === 'tarifs' || opt.id === 'demo') {
      pushBot('text', CANNED_ANSWERS[opt.id]);
      pushBot('link', { label: 'Aller au formulaire de contact →', href: '/contact' });
      setStep('main');
      return;
    }

    if (opt.id === 'autre') {
      setStep('autre-input');
      pushBot('text', 'Bien sûr, tapez votre question ci-dessous.');
    }
  }

  function handleProductChoice(product) {
    pushUser(product.sector);
    pushBot('text', `${product.name} — ${product.tagline}`);
    pushBot('link', { label: `Découvrir ${product.name} →`, href: `/produits/${product.slug}` });
    setStep('main');
  }

  function handleFreeQuestion(e) {
    e.preventDefault();
    const q = inputValue.trim();
    if (!q) return;
    pushUser(q);
    setInputValue('');

    const results = searchIndex(searchIdx, q, 3);

    if (results.length === 0) {
      pushBot(
        'text',
        'Je n\u2019ai pas trouvé de réponse précise à ce sujet dans nos contenus. L\u2019équipe pourra vous répondre directement :'
      );
      pushBot('link', { label: 'Écrire sur WhatsApp →', href: WHATSAPP_LINK, external: true });
      pushBot('link', { label: 'Ou via le formulaire de contact →', href: '/contact' });
    } else {
      pushBot('text', 'Voici ce que j\u2019ai trouvé :');
      pushBot('results', results);
    }

    setStep('main');
  }

  function resetChat() {
    setMessages([{ role: 'bot', kind: 'text', content: GREETING }]);
    setStep('main');
  }

  return (
    <>
      <button
        type="button"
        className="chatbot-launcher"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Fermer l\u2019assistant Errendis' : 'Ouvrir l\u2019assistant Errendis'}
        aria-expanded={open}
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Assistant Errendis" ref={panelRef}>
          <div className="chatbot-header">
            <span>Assistant Errendis</span>
            <button type="button" onClick={resetChat} aria-label="Recommencer la conversation">
              ↺
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef} aria-live="polite">
            {messages.map((m, i) => (
              <ChatMessage key={i} message={m} />
            ))}

            {step === 'main' && (
              <div className="chatbot-options">
                {MAIN_OPTIONS.map((opt) => (
                  <button key={opt.id} type="button" onClick={() => handleMainOption(opt)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'produit' && (
              <div className="chatbot-options">
                {products.map((p) => (
                  <button key={p.slug} type="button" onClick={() => handleProductChoice(p)}>
                    <ProductIcon slug={p.slug} size={18} /> {p.sector}
                  </button>
                ))}
              </div>
            )}
          </div>

          {step === 'autre-input' && (
            <form className="chatbot-input-row" onSubmit={handleFreeQuestion}>
              <label htmlFor="chatbot-input" className="sr-only">
                Votre question
              </label>
              <input
                id="chatbot-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tapez votre question..."
                autoFocus
              />
              <button type="submit" aria-label="Envoyer">
                →
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

function ChatMessage({ message }) {
  if (message.kind === 'text') {
    return <div className={`chatbot-msg chatbot-msg--${message.role}`}>{message.content}</div>;
  }

  if (message.kind === 'link') {
    const { label, href, external } = message.content;
    return (
      <div className="chatbot-msg chatbot-msg--bot">
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="chatbot-msg-link">
            {label}
          </a>
        ) : (
          <Link href={href} className="chatbot-msg-link">
            {label}
          </Link>
        )}
      </div>
    );
  }

  if (message.kind === 'results') {
    return (
      <div className="chatbot-msg chatbot-msg--bot chatbot-results">
        {message.content.map((r) => (
          <Link key={r.url + r.title} href={r.url} className="chatbot-result-item">
            <span className="chatbot-result-type">{r.type}</span>
            <strong>{r.title}</strong>
          </Link>
        ))}
      </div>
    );
  }

  // kind === 'options' (ré-affichage du menu principal après une réponse) — géré par le parent
  return null;
}
