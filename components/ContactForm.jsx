'use client';

import { useState } from 'react';
import { fireConfetti } from './confetti';

export default function ContactForm({ product }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      product: product || form.product?.value || '',
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur inconnue');
      }

      setStatus('success');
      fireConfetti();
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-success">
        <strong>Message envoyé ✓</strong>
        <p>Merci, nous revenons vers vous rapidement à l&apos;adresse indiquée.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>
          Nom complet
          <input type="text" name="name" required placeholder="Votre nom" />
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder="vous@exemple.com" />
        </label>
      </div>

      <div className="contact-form-row">
        <label>
          Téléphone
          <input type="tel" name="phone" required placeholder="06 XX XX XX XX" />
        </label>
        {!product && (
          <label>
            Produit concerné <span className="optional">(optionnel)</span>
            <select name="product" defaultValue="">
              <option value="">Sélectionner un produit</option>
              <option value="Dialya">Dialya — Centres d'hémodialyse</option>
              <option value="Labya">Labya — Laboratoires d'analyses</option>
              <option value="Medira">Medira — Distribution médicale</option>
              <option value="Rentara">Rentara — Location de voitures</option>
              <option value="Logistara">Logistara — Transit & logistique</option>
              <option value="Autre">Autre demande</option>
            </select>
          </label>
        )}
      </div>

      <label>
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder={
            product
              ? `Parlez-nous de votre centre / activité pour une démo de ${product}...`
              : 'Décrivez votre activité et votre besoin...'
          }
        />
      </label>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>

      {status === 'error' && (
        <p className="contact-form-error">
          {errorMsg || 'Une erreur est survenue.'} Vous pouvez aussi nous écrire directement sur{' '}
          <a href={`mailto:contact@errendis.com`}>contact@errendis.com</a>.
        </p>
      )}
    </form>
  );
}