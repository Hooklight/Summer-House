# 🚀 Netlify Deployment Instructions

## ✅ You're Logged In!
- **Account:** John Simon (jsimon@hooklightventures.com)
- **Team:** HOOKLIGHT
- **All sites ready to deploy**

---

## 🎯 Quick Deploy Method (Easiest - 10 minutes total)

### **Option 1: Drag & Drop (Recommended for First Deployment)**

1. **Go to Netlify Drop:** https://app.netlify.com/drop

2. **Drag each folder one at a time:**
   - Drag `/Users/JohnSimon_1/summer-house-domains/summerhousemedspa/`
   - Drag `/Users/JohnSimon_1/summer-house-domains/dallasprescriptionweightloss/`
   - Drag `/Users/JohnSimon_1/summer-house-domains/dallasfiller/`
   - (Continue for all 9 sites)

3. **After each drop:**
   - Netlify will auto-deploy
   - You'll get a random URL like `amazing-cupcake-123456.netlify.app`
   - Go to Site Settings → Domain Management → Add custom domain

4. **Configure Custom Domains:**
   - summerhousemedspa → Add domain `summerhousemedspa.com`
   - dallasprescriptionweightloss → Add domain `dallasprescriptionweightloss.com`
   - (etc. for all sites)

5. **Update DNS at your domain registrar:**
   - Netlify will show you exact DNS records to add
   - Usually: Point A record to `75.2.60.5` or CNAME to `[yoursite].netlify.app`
   - SSL will auto-provision in ~1 hour

---

## 🔧 Option 2: CLI Deploy (One Site at a Time)

Since Netlify CLI requires interactive input, here's the manual process:

### Deploy Summer House Main Site:

```bash
cd ~/summer-house-domains/summerhousemedspa

# This will prompt you - select:
# 1. "Create & configure a new project"
# 2. Choose "HOOKLIGHT" team
# 3. Site name: "summerhousemedspa"
netlify deploy --prod --dir .
```

### Deploy Each EMD Landing Page:

```bash
# Dallas Prescription Weight Loss
cd ~/summer-house-domains/dallasprescriptionweightloss
netlify deploy --prod --dir .

# Dallas Filler
cd ~/summer-house-domains/dallasfiller
netlify deploy --prod --dir .

# GLP-1 Weight Loss Dallas
cd ~/summer-house-domains/glp1weightlossdallas
netlify deploy --prod --dir .

# Oral GLP-1 sites
cd ~/summer-house-domains/pillglp1
netlify deploy --prod --dir .

cd ~/summer-house-domains/glp1pilldallas
netlify deploy --prod --dir .

cd ~/summer-house-domains/oralweightlossdallas
netlify deploy --prod --dir .

# Retatrutide sites
cd ~/summer-house-domains/retatrutidedallas
netlify deploy --prod --dir .

cd ~/summer-house-domains/dallasretatrutide
netlify deploy --prod --dir .
```

---

## 📋 Sites to Deploy (9 total)

| # | Folder | Custom Domain | Priority |
|---|--------|---------------|----------|
| 1 | summerhousemedspa | summerhousemedspa.com | CRITICAL |
| 2 | dallasprescriptionweightloss | dallasprescriptionweightloss.com | HIGH |
| 3 | dallasfiller | dallasfiller.com | HIGH |
| 4 | glp1weightlossdallas | glp1weightlossdallas.com | HIGH |
| 5 | pillglp1 | pillglp1.com | MEDIUM |
| 6 | glp1pilldallas | glp1pilldallas.com | MEDIUM |
| 7 | oralweightlossdallas | oralweightlossdallas.com | MEDIUM |
| 8 | retatrutidedallas | retatrutidedallas.com | LOW |
| 9 | dallasretatrutide | dallasretatrutide.com | LOW |

---

## 🔐 DNS Configuration (After Deploying to Netlify)

For each domain, you'll need to configure DNS at your domain registrar:

### Method 1: CNAME (Recommended)
```
Type: CNAME
Name: @
Value: [your-site-name].netlify.app
```

### Method 2: A Record
```
Type: A
Name: @
Value: 75.2.60.5
```

**Also add www redirect:**
```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

Netlify will provide exact instructions in the dashboard.

---

## ⚠️ Before Going Live Checklist

Update these in ALL HTML files:

- [ ] **Phone number:** Replace `(214) XXX-XXXX` with real number
- [ ] **Email:** Replace `hello@summerhousemedspa.com` with real email
- [ ] **Address:** Replace `Preston Hollow` with full street address
- [ ] **Google Analytics:** Add GA4 tracking code
- [ ] **Schema markup:** Update business hours, logo URL, real coordinates

**Quick find/replace:**
```bash
cd ~/summer-house-domains

# Find all placeholders
grep -r "XXX-XXXX" .
grep -r "Preston Hollow" .

# Use VS Code or text editor to find/replace globally
```

---

## 🎉 After Deployment

1. **Test each site:**
   - Visit the URL
   - Test forms (contact forms should show in Netlify dashboard)
   - Test mobile responsive
   - Check all links work

2. **Submit to Google:**
   - Add each domain to Google Search Console
   - Submit sitemaps
   - Request indexing

3. **Set up monitoring:**
   - Add Google Analytics
   - Monitor form submissions in Netlify
   - Track keyword rankings

4. **Start SEO:**
   - Create blog content
   - Build local citations
   - Get Google reviews
   - Build backlinks

---

## 🆘 Troubleshooting

**Issue: "This folder isn't linked to a project yet"**
- This is normal for first deployment
- Select "Create & configure a new project"
- Choose HOOKLIGHT team
- Enter site name

**Issue: Forms not working**
- Forms are already configured with `netlify` attribute
- They'll automatically appear in Netlify dashboard → Forms
- Set up email notifications in Netlify

**Issue: SSL not provisioning**
- Wait 1-2 hours after DNS configuration
- DNS can take 24-48 hours to fully propagate
- Check DNS settings are correct

**Issue: 404 errors**
- Make sure `index.html` exists in root of deployed folder
- Check Netlify deploy log for errors

---

## 📞 Need Help?

All files are ready to deploy at:
```
/Users/JohnSimon_1/summer-house-domains/
```

**Recommended first step:** Use drag & drop method for fastest deployment!

Visit: https://app.netlify.com/drop

---

*Ready to deploy? Let's get Summer House ranking #1 in Dallas!* 🚀
