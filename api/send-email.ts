import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, placement, size, description } = req.body;

    // Validate required fields
    if (!name || !email || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Paramount Tattoo <contact-form@paramounttattoos.com>',
      to: ['appointments@paramounttattoos.com'],
      subject: `New Tattoo Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${placement ? `<p><strong>Placement:</strong> ${placement}</p>` : ''}
        ${size ? `<p><strong>Size:</strong> ${size}</p>` : ''}
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

