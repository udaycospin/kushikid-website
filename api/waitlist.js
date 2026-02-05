import * as SibApiV3Sdk from '@getbrevo/brevo';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { name, email } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields (name, email)'
            });
        }

        // Validate Environment Variables
        if (!process.env.BREVO_API_KEY) {
            console.error('ERROR: BREVO_API_KEY is not defined');
            return res.status(500).json({
                success: false,
                message: 'Configuration error: BREVO_API_KEY missing'
            });
        }

        const adminEmail = process.env.ADMIN_EMAIL || 'admin@cospin.in';
        console.log('Attempting to send email from/to:', adminEmail);

        // Diagnostic Logging (Safe)
        const apiKey = process.env.BREVO_API_KEY;
        if (apiKey) {
            console.log(`API Key found. Length: ${apiKey.length}, Format check: ${apiKey.startsWith('xkeysib-') ? 'Valid (starts with xkeysib-)' : 'Warning (does not start with xkeysib-)'}`);
            console.log(`API Key first 10 chars: ${apiKey.substring(0, 10)}...`);
        } else {
            console.error('CRITICAL: BREVO_API_KEY is undefined in environment');
        }

        // Configure Brevo - Using the most robust method for the SDK
        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        apiInstance.authentications['apiKey'].apiKey = apiKey;

        // Email content
        const subject = `New KushiKid Waitlist Signup - ${name}`;

        // ... (rest of htmlContent and textContent stay same)
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
          New KushiKid Waitlist Signup
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e1b4b; margin-top: 0;">User Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background: #eef2ff; border-radius: 8px; font-size: 14px; color: #4338ca;">
          <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          <p style="margin: 5px 0 0 0;"><strong>Source:</strong> KushiKid Waitlist Form</p>
        </div>
      </div>
    `;

        const textContent = `
New KushiKid Waitlist Signup

User Information:
- Name: ${name}
- Email: ${email}

Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Source: KushiKid Waitlist Form
    `;

        // Send email using Brevo
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        sendSmtpEmail.subject = subject;
        sendSmtpEmail.htmlContent = htmlContent;
        sendSmtpEmail.textContent = textContent;
        sendSmtpEmail.sender = { name: 'KushiKid Website', email: adminEmail };
        sendSmtpEmail.to = [{ email: adminEmail, name: 'Cospin Admin' }];
        sendSmtpEmail.replyTo = { email: email, name: name };

        console.log('Calling Brevo API...');
        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Brevo API Result:', JSON.stringify(result));

        res.status(200).json({
            success: true,
            message: 'Successfully joined the waitlist',
            messageId: result.messageId
        });

    } catch (error) {
        console.error('Waitlist signup error detailed:', error);

        // If it's a Brevo error, it might have more details in error.response.body
        const errorMessage = error.response?.body?.message || error.message || 'Unknown error';
        const errorCode = error.response?.body?.code || 'internal_error';

        res.status(500).json({
            success: false,
            message: `Failed to join waitlist: ${errorMessage}`,
            error: errorCode
        });
    }
}
