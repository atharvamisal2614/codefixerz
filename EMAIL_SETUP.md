# Email Configuration Setup Guide

## Overview
Your backend is now ready to send emails! Both the contact form and careers application form are configured to send emails to `webagency2614@gmail.com`.

## ✅ What has been fixed:

1. **Fixed `/api/contact/route.ts`**
   - Removed broken placeholder code
   - Added proper email sending with nodemailer
   - Added validation for required fields
   - Added email format validation

2. **Fixed `/api/careers/route.ts`**
   - Added proper email sending with resume attachments
   - Added validation for required fields
   - Added email format validation
   - Proper file handling for resume uploads

3. **Created `/src/lib/email.ts`**
   - Shared email utility functions
   - Professional HTML email templates
   - Support for attachments
   - Centralized configuration

4. **Installed required packages**
   - `@types/nodemailer` for TypeScript support

## 🔧 Configuration Required

To enable email sending, you need to configure your Gmail account credentials in the `.env.local` file:

### Step 1: Generate App-Specific Password for Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App Passwords** (https://myaccount.google.com/apppasswords)
5. Select **Mail** and your device
6. Click **Generate**
7. Copy the 16-character password

### Step 2: Update `.env.local` File

Open the `.env.local` file in your project root and update these values:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com        # ← Replace with your Gmail address
EMAIL_PASS=xxxx xxxx xxxx xxxx         # ← Replace with the app-specific password
EMAIL_FROM=your-email@gmail.com        # ← Replace with your Gmail address
EMAIL_TO=webagency2614@gmail.com       # ← This is the email that receives all form submissions
```

**Example:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=mycompany@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
EMAIL_FROM=mycompany@gmail.com
EMAIL_TO=webagency2614@gmail.com
```

### Step 3: Restart Your Development Server

After updating the `.env.local` file, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 📧 Email Features

### Contact Form Email
- **Endpoint**: `/api/contact`
- **Fields**: name, email, subject, message
- **To**: webagency2614@gmail.com
- **Features**:
  - Professional HTML template
  - Reply-to field set to sender's email
  - Plain text fallback

### Career Application Email
- **Endpoint**: `/api/careers`
- **Fields**: name, email, phone, position, coverLetter, resume (optional)
- **To**: webagency2614@gmail.com
- **Features**:
  - Professional HTML template
  - Resume attachment support (PDF, DOC, DOCX, etc.)
  - Reply-to field set to applicant's email
  - Plain text fallback

## 🧪 Testing

### Test Contact Form:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### Test Career Form (without file):
```bash
curl -X POST http://localhost:3000/api/careers \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "phone=1234567890" \
  -F "position=Developer" \
  -F "coverLetter=I am interested in this position"
```

## 🔍 Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Make sure you're using an app-specific password, not your regular Gmail password
   - Verify 2-Step Verification is enabled on your Google account

2. **"Connection timeout" error**
   - Check your firewall settings
   - Ensure port 587 is not blocked
   - Try using port 465 with `EMAIL_SECURE=true`

3. **Emails not being received**
   - Check the spam folder
   - Verify `EMAIL_TO` is set correctly
   - Check the console logs for errors

4. **TypeScript errors**
   - Make sure `@types/nodemailer` is installed: `npm install --save-dev @types/nodemailer`
   - Restart your TypeScript server in VS Code

### Enable Debug Logging:

To see detailed SMTP logs, update `/src/lib/email.ts`:

```typescript
export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    debug: true,  // ← Add this line
    logger: true, // ← Add this line
});
```

## 📝 Next Steps

1. ✅ Configure `.env.local` with your Gmail credentials
2. ✅ Restart development server
3. ✅ Test both forms
4. ✅ Check that emails are received at webagency2614@gmail.com
5. ✅ Update email templates if needed (in `/src/lib/email.ts`)

## 🎯 Production Deployment

Before deploying to production, remember to:

1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Never commit `.env.local` to git (it's already in `.gitignore`)
3. Consider using a dedicated email service (SendGrid, Mailgun, AWS SES) for better deliverability
4. Set up proper email monitoring and error tracking

## 📮 Alternative Email Services

If you want to use a different email service instead of Gmail:

### SendGrid:
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

### Mailgun:
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-username
EMAIL_PASS=your-mailgun-password
```

### AWS SES:
```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=your-ses-access-key
EMAIL_PASS=your-ses-secret-key
```

---

**Need help?** Check the console logs when submitting forms to see detailed error messages!
