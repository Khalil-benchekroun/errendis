import nodemailer from 'nodemailer';

// ⚠️ Nécessite 2 variables d'environnement sur Vercel (Settings → Environment Variables) :
//   OVH_SMTP_USER = contact@errendis.com  (ta boîte mail OVH complète)
//   OVH_SMTP_PASS = le mot de passe de cette boîte mail
//
// Serveur SMTP OVH standard : smtp.mail.ovh.net, port 587 (STARTTLS).

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

    if (!process.env.OVH_SMTP_USER || !process.env.OVH_SMTP_PASS) {
      console.error('OVH_SMTP_USER / OVH_SMTP_PASS manquantes — configure-les sur Vercel (Settings → Environment Variables).');
      return Response.json(
        { error: 'Le formulaire n\u2019est pas encore configuré. Merci de nous écrire directement sur WhatsApp ou par email.' },
        { status: 500 }
      );
    }

    // Instancié ici (pas au chargement du module) pour ne jamais bloquer le build.
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ovh.net',
      port: 587,
      secure: false, // STARTTLS sur le port 587
      auth: {
        user: process.env.OVH_SMTP_USER,
        pass: process.env.OVH_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Errendis — Site web" <${process.env.OVH_SMTP_USER}>`,
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