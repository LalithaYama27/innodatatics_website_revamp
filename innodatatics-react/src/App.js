import { useEffect, useRef } from "react";

/**
 * InnodataticsApp
 * ───────────────
 * Renders the full Innodatatics website (8 400+ lines of HTML/CSS/JS)
 * inside a full-viewport iframe so that every single pixel, animation,
 * canvas, cursor effect, loader, SPA routing, YouTube modal, hackathon
 * popup, partner marquee, and interactive element works exactly as
 * in the original design — zero changes, zero omissions.
 */
export default function App() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resize = () => {
      iframe.style.height = window.innerHeight + "px";
      iframe.style.width  = window.innerWidth  + "px";
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#010610",
        position: "fixed",
        inset: 0,
      }}
    >
      <iframe
        ref={iframeRef}
        src="/innodatatics.html"
        title="Innodatatics — Innovation · Data · Analytics"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          display: "block",
          background: "#010610",
        }}
        allow="autoplay; encrypted-media; fullscreen"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      />
    </div>
  );
}
