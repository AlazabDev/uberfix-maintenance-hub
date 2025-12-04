import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, MapPin, TrendingUp, Sparkles, Shield, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [counters, setCounters] = useState({
    branches: 0,
    technicians: 0,
    cities: 0,
    satisfaction: 0
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.08) 0%, hsl(var(--background)) 50%)`
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-secondary/15 to-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Icons */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="w-16 h-16 bg-card/80 backdrop-blur-md rounded-2xl shadow-elevated flex items-center justify-center border border-border/50">
          <Shield className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-[12%] hidden lg:block"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-14 h-14 bg-card/80 backdrop-blur-md rounded-2xl shadow-elevated flex items-center justify-center border border-border/50">
          <Clock className="w-7 h-7 text-secondary" />
        </div>
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-48 left-[20%] hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-12 h-12 bg-card/80 backdrop-blur-md rounded-xl shadow-elevated flex items-center justify-center border border-border/50">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-8 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">إدارة صيانة العلامات التجارية وسلاسل الإمداد</span>
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-l from-primary via-primary to-secondary bg-clip-text text-transparent">
                  UberFix
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-l from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                />
              </span>
              <br />
              <span className="text-foreground text-5xl md:text-6xl font-bold mt-4 block">
                حلول صيانة وتشغيل ذكية
              </span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            نظام متكامل لإدارة صيانة فروع العلامات التجارية الكبرى في مصر
            <br />
            <span className="text-primary font-bold text-lg md:text-xl inline-flex items-center gap-2 mt-2">
              <Building2 className="w-5 h-5" />
              من شركة العزب المعمارية - الريادة في إدارة الصيانة الاحترافية
            </span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-l from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-xl shadow-primary/25 group px-8 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
              onClick={() => window.open('https://uberfix.shop', '_blank')}
            >
              ابدأ الآن مجاناً
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://uberfix.shop/about', '_blank')}
            >
              <MapPin className="ml-2 h-5 w-5" />
              شاهد الخريطة التفاعلية
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-16 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">خدمة على مدار الساعة</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">ضمان جودة الخدمة</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm">فنيين معتمدين</span>
            </div>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            <StatCard 
              icon={<MapPin className="w-7 h-7" />}
              value={counters.branches}
              label="موقع نشط"
              color="primary"
              prefix="+"
              delay={0}
            />
            <StatCard 
              icon={<Users className="w-7 h-7" />}
              value={counters.technicians}
              label="فني محترف"
              color="secondary"
              prefix="+"
              delay={0.1}
            />
            <StatCard 
              icon={<Building2 className="w-7 h-7" />}
              value={counters.cities}
              label="مدينة مصرية"
              color="accent"
              delay={0.2}
            />
            <StatCard 
              icon={<TrendingUp className="w-7 h-7" />}
              value={counters.satisfaction}
              label="رضا العملاء"
              color="primary"
              suffix="%"
              delay={0.3}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: 'primary' | 'secondary' | 'accent';
  prefix?: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, color, prefix = '', suffix = '', delay = 0 }: StatCardProps) => {
  const colorClasses = {
    primary: 'text-primary border-primary/30 hover:border-primary/60',
    secondary: 'text-secondary border-secondary/30 hover:border-secondary/60',
    accent: 'text-accent border-accent/30 hover:border-accent/60',
  };

  const glowClasses = {
    primary: 'group-hover:shadow-primary/20',
    secondary: 'group-hover:shadow-secondary/20',
    accent: 'group-hover:shadow-accent/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.5 }}
      className="group"
    >
      <div className={`relative bg-card/60 backdrop-blur-md rounded-2xl p-6 border-2 ${colorClasses[color]} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${glowClasses[color]}`}>
        <div className={`${colorClasses[color].split(' ')[0]} mb-3 mx-auto w-fit`}>
          {icon}
        </div>
        <div className={`text-3xl md:text-4xl font-black ${colorClasses[color].split(' ')[0]} mb-1 tabular-nums`}>
          {prefix}{value.toLocaleString()}{suffix}
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

const ArrowLeft = ({ className }: { className?: string }) => (
  <ArrowRight className={className} style={{ transform: 'scaleX(-1)' }} />
);

export default Hero;
