# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various free hosting platforms.

## 🌟 **Vercel (Recommended - FREE)**

Vercel is the creators of Next.js and offers the best integration:

### Steps:
1. **Push to GitHub**: Upload your code to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
3. **Deploy**: Vercel will automatically detect Next.js and deploy
4. **Custom Domain**: Add your custom domain in Vercel dashboard

**Benefits**: 
- ✅ Completely FREE
- ✅ Automatic deployments
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Global CDN
- ✅ Analytics included

---

## 🌐 **Netlify (FREE)**

Great alternative with generous free tier:

### Steps:
1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Go to Netlify**: [netlify.com](https://netlify.com)
3. **Drag & Drop**: Upload the `out` folder from your build
4. **Custom Domain**: Add your domain in settings

**Benefits**:
- ✅ FREE tier available
- ✅ Easy drag & drop
- ✅ Custom domains
- ✅ SSL certificates

---

## 📱 **GitHub Pages (FREE)**

Perfect if you want everything on GitHub:

### Steps:
1. **Update next.config.ts**:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Build and Deploy**:
   ```bash
   npm run build
   npm run export
   ```

3. **Push to GitHub Pages branch**:
   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages** in repository settings

**Benefits**:
- ✅ Completely FREE
- ✅ Integrated with GitHub
- ✅ Custom domains supported

---

## ☁️ **Firebase Hosting (FREE)**

Google's hosting solution:

### Steps:
1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**:
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

**Benefits**:
- ✅ FREE tier available
- ✅ Google's infrastructure
- ✅ Fast global CDN

---

## 🚀 **Surge.sh (FREE)**

Simple static hosting:

### Steps:
1. **Install Surge**:
   ```bash
   npm install -g surge
   ```

2. **Build and Deploy**:
   ```bash
   npm run build
   surge out/
   ```

**Benefits**:
- ✅ Completely FREE
- ✅ Super simple
- ✅ Custom domains

---

## 📋 **Pre-Deployment Checklist**

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] Project links are working
- [ ] Contact information is correct
- [ ] Images and assets are optimized
- [ ] Meta tags are properly set
- [ ] Social media links are updated

## 🔧 **Environment Variables**

If you need environment variables:

1. **Create `.env.local`**:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   ```

2. **Add to hosting platform** (Vercel/Netlify)

## 🌍 **Custom Domain Setup**

### For Vercel:
1. Add domain in Vercel dashboard
2. Update DNS records as instructed
3. Wait for propagation (24-48 hours)

### For Netlify:
1. Add custom domain in site settings
2. Update DNS records
3. Wait for propagation

## 📊 **Performance Optimization**

After deployment:
1. **Test on PageSpeed Insights**
2. **Optimize images** if needed
3. **Enable compression** on hosting platform
4. **Set up caching** headers

## 🆘 **Troubleshooting**

### Common Issues:

**Build Errors**:
- Check Node.js version (18+ required)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

**Deployment Issues**:
- Verify build output
- Check hosting platform logs
- Ensure all dependencies are in `package.json`

**Domain Issues**:
- Wait for DNS propagation
- Check DNS records
- Verify SSL certificate

---

## 🎯 **My Recommendation**

**Start with Vercel** because:
- Best Next.js integration
- Completely free
- Automatic deployments
- Professional features
- Easy custom domains

**Backup options**:
- Netlify for alternative
- GitHub Pages for GitHub integration

---

## 📞 **Need Help?**

- Check hosting platform documentation
- Review Next.js deployment docs
- Contact hosting platform support

---

**Happy Deploying! 🚀**
