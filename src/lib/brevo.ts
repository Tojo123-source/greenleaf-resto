import type { Reservation } from '@/types';

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export async function sendReservationEmail(reservation: Reservation) {
  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: 'GreenLeaf Restaurant',
        email: 'novaskol393@gmail.com',
      },
      to: [
        {
          email: 'novaskol393@gmail.com',
          name: 'GreenLeaf Restaurant',
        },
      ],
      subject: `Nouvelle Réservation - ${reservation.nom} - ${reservation.date}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle Réservation - GreenLeaf</title>
          <style>
            body { font-family: 'Georgia', serif; margin: 0; padding: 0; background-color: #f8f6f0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { text-align: center; padding: 30px; background: linear-gradient(135deg, #1a4d3a 0%, #2d6b4f 100%); border-radius: 16px 16px 0 0; }
            .header h1 { color: #d4af37; margin: 0; font-size: 28px; }
            .header p { color: #e8e0d0; margin: 10px 0 0; font-size: 16px; }
            .content { background: white; padding: 40px 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .field { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
            .field:last-child { border-bottom: none; }
            .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 8px; font-weight: 600; }
            .value { font-size: 18px; color: #333; font-weight: 500; }
            .message-box { background: #f8f6f0; padding: 20px; border-radius: 12px; border-left: 4px solid #2d6b4f; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
            .footer p { color: #888; font-size: 14px; }
            .highlight { color: #2d6b4f; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>GreenLeaf Restaurant</h1>
              <p>Nouvelle demande de réservation</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom complet</div>
                <div class="value">${reservation.nom}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${reservation.email}</div>
              </div>
              <div class="field">
                <div class="label">Téléphone</div>
                <div class="value">${reservation.telephone}</div>
              </div>
              <div class="field">
                <div class="label">Date de réservation</div>
                <div class="value highlight">${new Date(reservation.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
              <div class="field">
                <div class="label">Nombre de convives</div>
                <div class="value highlight">${reservation.convives} personnes</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  ${reservation.message || 'Aucun message supplémentaire'}
                </div>
              </div>
              <div class="footer">
                <p>Cette réservation a été reçue le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                <p style="margin-top: 10px; font-size: 12px;">GreenLeaf Restaurant - Cuisine végétale d'exception dans le 95</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Erreur lors de l\'envoi de l\'email');
  }

  return response.json();
}
