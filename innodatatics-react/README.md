# Innodatatics — React Website

Complete React project wrapping the Innodatatics website exactly as designed.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed ([nodejs.org](https://nodejs.org))
- npm (comes with Node.js)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The website will open automatically at **http://localhost:3000**

---

## 📁 Project Structure

```
innodatatics-react/
├── public/
│   ├── index.html          ← React app shell
│   └── innodatatics.html   ← Full original website (8,400+ lines)
├── src/
│   ├── index.js            ← React entry point
│   └── App.js              ← Main component (full-viewport iframe)
├── package.json
└── README.md
```

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready to deploy on any static host (Netlify, Vercel, GitHub Pages, etc.).

## 💡 How It Works

The original Innodatatics website contains 8,400+ lines of sophisticated HTML/CSS/JavaScript including:

- Neural network canvas background
- Custom animated cursor with trail
- Loader with progress bar
- Fixed scrolling nav with pill indicator
- 3D hero orb with floating data cards
- Animated hexagonal services wheel
- Partner marquee with 30+ logos
- YouTube modal player
- Live metrics counters
- Case studies with filter tabs
- Video case studies grid
- Hackathon popup with confetti
- SPA-style product pages (Parking, Attendance, Assistant)
- Contact form with toast notification
- Scroll-triggered reveal animations

The React app renders this via a **full-viewport iframe** to preserve every pixel and interaction exactly — no re-implementation, no visual differences.

---

## 📧 Contact

**Innodatatics Inc.**  
THub 2.0, Madhapur, Hyderabad, Telangana 500081  
[innodatatics.ai](https://innodatatics.ai)
