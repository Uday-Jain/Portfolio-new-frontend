# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Follow the instructions to connect your Gmail account (udayjain1799@gmail.com)
5. Note down your **Service ID** (e.g., "service_xyz123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `New Portfolio Message from {{from_name}}`

**Body:**
```
Name: {{from_name}}
Email: {{reply_to}}
Organisation: {{organisation}}
Message: {{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., "template_abc456")

## Step 4: Get Public Key
1. Go to "Account" > "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., "user_def789")

## Step 5: Update Portfolio Configuration
1. Open `/app/frontend/src/data/mock.js`
2. Replace these placeholder values with your actual EmailJS credentials:

```javascript
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id'; 
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
```

## Step 6: Test the Contact Form
1. Deploy your portfolio to a static hosting service
2. Fill out the contact form and submit
3. Check your Gmail inbox for the message

## EmailJS Free Plan Limits
- 200 emails per month
- Perfect for a personal portfolio

## Example Configuration
```javascript
const EMAILJS_SERVICE_ID = 'service_portfoli0';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'user_abcd1234567890';
```

## Troubleshooting
- Make sure your Gmail account is properly connected in EmailJS
- Check the browser console for any error messages
- Verify all IDs are correctly copied from EmailJS dashboard
- Ensure the template variables match exactly: `{{from_name}}`, `{{reply_to}}`, `{{organisation}}`, `{{message}}`