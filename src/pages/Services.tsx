import { Card } from "@/components/ui/card";
import { Wrench, Home, Building2, Zap, Droplet, Wind, Hammer, Paintbrush, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Zap,
    title: "الأعمال الكهربائية",
    description: "تركيب وصيانة الأنظمة الكهربائية، إصلاح الأعطال، وتوصيل الإضاءة",
    image: "https://al-azab.co/img/Electrical_Help.jpg",
  },
  {
    icon: Droplet,
    title: "أعمال السباكة",
    description: "صيانة وتركيب السباكة، إصلاح التسريبات، وتركيب الأدوات الصحية",
    image: "https://al-azab.co/img/maintenance01.jpg",
  },
  {
    icon: Wind,
    title: "صيانة التكييفات",
    description: "تركيب وصيانة أجهزة التكييف والتبريد بجميع أنواعها",
    image: "https://al-azab.co/img/maintenance02.jpg",
  },
  {
    icon: Hammer,
    title: "أعمال النجارة",
    description: "تركيب وصيانة الأبواب، الشبابيك، والأثاث الخشبي",
    image: "https://al-azab.co/img/Furniture_Assembly.jpeg",
  },
  {
    icon: Paintbrush,
    title: "الدهانات والديكور",
    description: "أعمال الدهانات الداخلية والخارجية وتنفيذ الديكورات",
    image: "https://al-azab.co/img/maintenance03.jpg",
  },
  {
    icon: Home,
    title: "التنظيف والصيانة العامة",
    description: "خدمات التنظيف الشامل والصيانة الدورية للمنازل والمباني",
    image: "https://al-azab.co/img/Home_Apartment_Cleaning.jpg",
  },
  {
    icon: Building2,
    title: "صيانة المباني",
    description: "صيانة شاملة للمباني السكنية والتجارية والإدارية",
    image: "https://al-azab.co/img/maintenance04.jpg",
  },
  {
    icon: Camera,
    title: "أنظمة الأمان والمراقبة",
    description: "تركيب وصيانة كاميرات المراقبة وأنظمة الإنذار",
    image: "https://al-azab.co/img/maintenance05.jpg",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-hero" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium">خدماتنا المتنوعة</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              خدمات <span className="text-secondary">الصيانة الشاملة</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة متكاملة من خدمات الصيانة والتشغيل لجميع أنواع المنشآت
              بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
