import { Resend } from 'resend';

// ⚠️ Nécessite une variable d'environnement RESEND_API_KEY sur Vercel
// (Project Settings → Environment Variables), obtenue sur resend.com.
// Le domaine d'envoi (ex: errendis.com) doit être vérifié dans Resend
// pour pouvoir envoyer "from" une adresse @errendis.com.
const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATION_EMAIL = 'contact@errendis.com';

export async function POST(request) {
  try {
    const { name, email, phone, product, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Merci de renseigner votre nom, votre email et votre message.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Errendis — Site web <site@errendis.com>',
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande depuis errendis.com${product ? ` — ${product}` : ''}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        product ? `Produit concerné : ${product}` : null,
        '',
        'Message :',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Erreur envoi email contact:', error);
    return Response.json(
      { error: 'Une erreur est survenue lors de l\u2019envoi. Merci de réessayer ou de nous écrire directement sur WhatsApp.' },
      { status: 500 }
    );
  }
}
