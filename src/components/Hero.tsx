import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, MapPin, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [counters, setCounters] = useState({
    branches: 0,
    technicians: 0,
    cities: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targets = {
      branches: 250,
      technicians: 500,
      cities: 15,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        branches: Math.floor(targets.branches * progress),
        technicians: Math.floor(targets.technicians * progress),
        cities: Math.floor(targets.cities * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero" dir="rtl">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">إدارة صيانة العلامات التجارية وسلاسل الإمداد</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">UberFix</span>
            <br />
            حلول صيانة وتشغيل ذكية
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            نظام متكامل لإدارة صيانة فروع العلامات التجارية الكبرى في مصر.
            <br />
            <span className="text-primary font-semibold">من شركة العزب المعمارية</span> - الريادة في إدارة الصيانة الاحترافية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elevated group"
            >
              ابدأ الآن
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-muted"
            >
              شاهد الخريطة التفاعلية
            </Button>
          </div>
          
          {/* إحصائيات حية */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="animate-slide-up bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-elevated" style={{ animationDelay: "0.2s" }}>
              <MapPin className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-4xl font-bold text-primary mb-2">+{counters.branches}</div>
              <div className="text-sm text-muted-foreground">موقع نشط</div>
            </div>
            <div className="animate-slide-up bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-secondary/50 transition-all hover:shadow-elevated" style={{ animationDelay: "0.3s" }}>
              <Users className="w-8 h-8 text-secondary mb-3 mx-auto" />
              <div className="text-4xl font-bold text-secondary mb-2">+{counters.technicians}</div>
              <div className="text-sm text-muted-foreground">فني محترف</div>
            </div>
            <div className="animate-slide-up bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-all hover:shadow-elevated" style={{ animationDelay: "0.4s" }}>
              <Building2 className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-4xl font-bold text-accent mb-2">{counters.cities}</div>
              <div className="text-sm text-muted-foreground">مدينة مصرية</div>
            </div>
            <div className="animate-slide-up bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-elevated" style={{ animationDelay: "0.5s" }}>
              <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-4xl font-bold text-primary mb-2">{counters.satisfaction}%</div>
              <div className="text-sm text-muted-foreground">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// RTL Icon fix
const ArrowLeft = ({ className }: { className?: string }) => (
  <ArrowRight className={className} style={{ transform: 'scaleX(-1)' }} />
);

export default Hero;
