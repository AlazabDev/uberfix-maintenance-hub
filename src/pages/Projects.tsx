import { useState } from "react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

const projectImages = [
  { url: "https://al-azab.co/img/abuauf_2.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_12.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_19.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_22.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_23.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_28.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_30.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_34.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_38.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_44.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/abuauf_47.jpg", category: "أبو عوف" },
  { url: "https://al-azab.co/img/maintenance06.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance07.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance08.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance09.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance10.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance11.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance12.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance13.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance14.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance15.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance16.jpg", category: "صيانة عامة" },
  { url: "https://al-azab.co/img/maintenance17.jpg", category: "صيانة عامة" },
];

const categories = ["الكل", "أبو عوف", "صيانة عامة"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredProjects =
    selectedCategory === "الكل"
      ? projectImages
      : projectImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">أعمالنا المنفذة</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              معرض <span className="text-secondary">المشروعات</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نفخر بتقديم أعمال صيانة وتشغيل احترافية لكبرى الشركات والمنشآت في مصر
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.url}
                    alt={`مشروع ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

export default Projects;
