import React, { useEffect, useRef, useState } from "react";
import "./hero-effects.css";

const HeroUberFix = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const typingRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  const phrases = [
    "إدارة الصيانة",
    "إدارة الفنيين",
    "إدارة العقارات التجارية"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  /* ---------------------------------------------
      PARTICLES + ORBS + RIPPLES (Same as design)
  ---------------------------------------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let particles: any[] = [];
    let ripples: any[] = [];

    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const randomColor = () => {
      const c = [
        "rgba(255,255,255,0.8)",
        "rgba(245,191,35,0.5)",
        "rgba(255,255,255,0.4)"
      ];
      return c[Math.floor(Math.random() * c.length)];
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 140; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          density: Math.random() * 30 + 1,
          color: randomColor(),
        });
      }
    };

    const createRipple = (x: number, y: number) => {
      ripples.push({ x, y, radius: 0, max: 200, opacity: 1 });
    };

    canvas.addEventListener("click", e => createRipple(e.clientX, e.clientY));

    const drawParticles = () => {
      particles.forEach(p => {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grd.addColorStop(0, p.color);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = p.color.replace("0.4", "1");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach(p => {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * p.density;
            p.y += (dy / dist) * force * p.density;
          }
        }

        p.x += (p.baseX - p.x) * 0.03 + p.speedX;
        p.y += (p.baseY - p.y) * 0.03 + p.speedY;
      });
    };

    const drawRipples = () => {
      ripples.forEach((r, i) => {
        r.radius += 2;
        r.opacity -= 0.01;
        if (r.opacity <= 0) ripples.splice(i, 1);

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(245,191,35,${r.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      drawParticles();
      drawRipples();
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    canvas.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });
  }, []);

  /* ---------------------------------------------
           TYPING EFFECT + GRADIENT
  ---------------------------------------------- */
  useEffect(() => {
    let index = 0;

    const type = () => {
      if (!typingRef.current || !cursorRef.current) return;

      typingRef.current.textContent = "";
      cursorRef.current.style.display = "inline-block";

      const text = phrases[currentPhrase];
      index = 0;

      const interval = setInterval(() => {
        if (!typingRef.current) return;

        typingRef.current.textContent += text[index];
        index++;

        // Apply gradient as letters appear
        typingRef.current.style.background =
          "linear-gradient(90deg, #ffffff, #f5bf23)";
        typingRef.current.style.webkitBackgroundClip = "text";
        typingRef.current.style.webkitTextFillColor = "transparent";

        if (index >= text.length) {
          clearInterval(interval);
          cursorRef.current.style.display = "none";

          setTimeout(() => {
            setCurrentPhrase(prev =>
              prev + 1 >= phrases.length ? 0 : prev + 1
            );
          }, 1200);
        }
      }, 90);
    };

    type();
  }, [currentPhrase]);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>

      <div className="hero-content">
        
        <h1 className="hero-title">
          استمتع بتجربة فريدة في إدارة عقارك التجاري أو السكني.
        </h1>

        <p className="hero-subtitle">
          نقدم حلولاً عملية للحفاظ على عقارك في أفضل حالة.
        </p>

        <div className="typing-wrapper">
          <span ref={typingRef} className="typing-text"></span>
          <span ref={cursorRef} className="typing-cursor">|</span>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="scroll-wheel"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroUberFix;
