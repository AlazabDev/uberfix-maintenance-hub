import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface BranchLocation {
  name: string;
  latitude: number;
  longitude: number;
  url?: string;
}

const GlobalMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [branches, setBranches] = useState<BranchLocation[]>([]);

  // Load branch markers
  useEffect(() => {
    fetch('/data/branch_locations.json')
      .then(response => response.json())
      .then(data => setBranches(data))
      .catch(error => console.error('Error loading branch locations:', error));
  }, []);

  // Init map
  useEffect(() => {
    if (!mapContainer.current || branches.length === 0) return;

    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWRtaW51YmVyZml4IiwiYSI6ImNtaWZsOGx2cTBldDYzaXM5YXV4bWFyc3QifQ.j_p5UoorYTcmJoGt_eEZ3w';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: { name: 'globe' },
      zoom: 1.5,
      center: [30, 20],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    // === الإضاءة النهارية الزرقاء بدون تغيير الخلفية ===
    map.current.on('style.load', () => {
      // 1) Fog (الغلاف الجوي)
      map.current!.setFog({
        color: 'rgba(120, 190, 255, 0.55)',        // زرقة فاتحة
        'high-color': 'rgba(190, 230, 255, 0.75)', // أفق فاتح
        'horizon-blend': 0.8,
        'space-color': 'rgb(5, 8, 15)',            // الخلفية الداكنة كما هي
        'star-intensity': 0.0
      });

      // 2) Sky Atmosphere (ضوء السماء على الأرض)
      map.current!.addLayer({
        id: 'sky-light',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-color': 'rgba(135, 206, 250, 0.35)', // ضوء سماوي خفيف
          'sky-atmosphere-sun': [0.0, 90.0],
          'sky-atmosphere-sun-intensity': 8
        }
      });

      // 3) Globe Light (أهم حاجة – إضاءة القارات فعليًا)
      map.current!.setLight({
        anchor: 'viewport',
        color: 'rgba(180, 220, 255, 1)',
        intensity: 0.9
      });
    });

    // ===== ROTATION / SPIN =====
    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current) return;

      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif =
            (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: n => n });
      }
    }

    map.current.on('mousedown', () => (userInteracting = true));
    map.current.on('dragstart', () => (userInteracting = true));
    map.current.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });
    map.current.on('touchend', () => {
      userInteracting = false;
      spinGlobe();
    });
    map.current.on('moveend', spinGlobe);

    // ===== MARKERS =====
    branches.forEach(branch => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.backgroundImage = 'url(/icons/uberfix-pin.png)';
      el.style.backgroundSize = 'contain';
      el.style.backgroundRepeat = 'no-repeat';
      el.style.cursor = 'pointer';
      el.style.transition = 'transform 0.3s ease';

      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.3) translateY(-5px)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1) translateY(0)';
      });

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        className: 'custom-popup'
      }).setHTML(`
        <div style="padding: 8px; text-align: center; direction: rtl;">
          <strong style="color: #f59e0b; font-size: 14px;">${branch.name}</strong>
        </div>
      `);

      new mapboxgl.Marker(el)
        .setLngLat([branch.longitude, branch.latitude])
        .setPopup(popup)
        .addTo(map.current!);
    });

    spinGlobe();

    return () => map.current?.remove();
  }, [branches]);

  return (
    <section
      className="relative py-20 bg-background overflow-hidden"
      style={{ backgroundColor: 'hsl(222, 47%, 11%)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in" dir="rtl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            شبكة عالمية من{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              الشركاء
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نخدم أكثر من {branches.length} موقع لعملائنا من العلامات التجارية
            الكبرى وسلاسل الإمداد في مصر
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-elevated animate-scale-in"
          style={{ height: '600px' }}
        >
          <div ref={mapContainer} className="absolute inset-0" />

          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg"
            dir="rtl"
          >
            <p className="text-sm text-foreground font-medium">
              🌍 {branches.length} موقع نشط •{' '}
              <span className="text-primary">خدمة 24/7</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
