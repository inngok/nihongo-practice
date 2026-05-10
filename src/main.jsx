import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   
import RouteMap from './routes/RouteMap'
import './index.css'

import { SpeedInsights } from "@vercel/speed-insights/react"

// --- AUTOMATIC REFRESH ON NEW VERSION DEPLOYMENT ---

// 1. Listen for Vite preload errors (e.g. when lazy-loading route chunks that were replaced in a new build)
window.addEventListener('vite:preloadError', (event) => {
  window.location.reload();
});

// 2. Catch global chunk load errors
window.addEventListener('error', (event) => {
  const msg = event.message || '';
  if (msg.includes('Failed to fetch dynamically imported module') || msg.includes('ChunkLoadError')) {
    window.location.reload();
  }
}, true);

// 3. Catch unhandled promise rejections for chunk loading
window.addEventListener('unhandledrejection', (event) => {
  const reason = (event.reason && event.reason.message) || '';
  if (reason.includes('Failed to fetch dynamically imported module') || reason.includes('ChunkLoadError')) {
    window.location.reload();
  }
});

// 4. Periodically check if the main script bundle hash has changed in index.html
async function checkNewVersion() {
  if (typeof navigator !== 'undefined' && !navigator.onLine) return;

  const runCheck = async () => {
    try {
      const res = await fetch('/index.html', { cache: 'no-store' });
      if (!res.ok) return;
      const html = await res.text();
      // Match the standard main script filename pattern
      const match = html.match(/\/assets\/index-[a-zA-Z0-9_-]+\.js/);
      if (!match) return;
      const newSrc = match[0];
      
      const currentScript = Array.from(document.querySelectorAll('script'))
        .map(s => s.getAttribute('src') || s.src)
        .find(src => src && src.includes('/assets/index-'));
        
      if (currentScript && !currentScript.includes(newSrc)) {
        window.location.reload();
      }
    } catch (err) {
      // Fail silently to avoid interrupting the user experience
    }
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => runCheck(), { timeout: 2000 });
  } else {
    setTimeout(runCheck, 1);
  }
}

// Check on visibility change (when tab is active again) and periodically every 2 minutes
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    checkNewVersion();
  }
});
setInterval(checkNewVersion, 120000); // 2 minutes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RouteMap />
      <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>
)

