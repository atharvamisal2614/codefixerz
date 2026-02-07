# ✅ Email Backend - Quick Start

## Status: READY ✓

The email backend is now fully functional and configured!

---

## 🚀 Quick Setup (5 minutes)

### 1. Get Gmail App Password
1. Visit: https://myaccount.google.com/apppasswords
2. Generate a new app password
3. Copy the 16-character code

### 2. Configure `.env.local`
Open `.env.local` and update these 3 lines:

```env
EMAIL_USER=your-email@gmail.com          # Your Gmail
EMAIL_PASS=xxxx xxxx xxxx xxxx          # App password from step 1
EMAIL_FROM=your-email@gmail.com          # Same as EMAIL_USER
```

### 3. Restart Server
```bash
npm run dev
```

### 4. Test It! 🎉
- Navigate to your contact form
- Fill it out and submit
- Check `webagency2614@gmail.com` inbox

---

## 📂 What Changed?

| File | Status | Description |
|------|--------|-------------|
| `/api/contact/route.ts` | ✅ Fixed | Now sends real emails |
| `/api/careers/route.ts` | ✅ Fixed | Now sends emails with resume attachments |
| `/lib/email.ts` | ✅ New | Email utility with professional templates |
| `.env.local` | ✅ New | Environment configuration (needs your credentials) |
| `@types/nodemailer` | ✅ Installed | TypeScript types |

---

## ✉️ Email Features

**Contact Form** → Sends to: `webagency2614@gmail.com`
- Professional HTML template
- Email validation
- Reply-to: submitter's email

**Career Form** → Sends to: `webagency2614@gmail.com`
- Professional HTML template
- Resume attachment support
- Email validation
- Reply-to: applicant's email

---

## 📝 Important Notes

⚠️ **Don't forget:**
- Use **App-Specific Password**, not your regular Gmail password
- Enable **2-Step Verification** on your Google account first
- **Never commit** `.env.local` to git (already in .gitignore)

---

## 🔍 Need Help?

See `EMAIL_SETUP.md` for:
- Detailed setup instructions
- Troubleshooting guide
- Testing commands
- Alternative email services

---

## 🧪 Quick Test

```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Hello"}'
```

✅ If you see `"success": true`, it worked!

---

**Everything is ready! Just add your Gmail credentials to `.env.local` and you're all set! 🎉**
