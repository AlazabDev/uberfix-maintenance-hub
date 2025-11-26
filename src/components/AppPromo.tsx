import { Smartphone, Download, UserPlus, Wrench, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AppPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20" dir="rtl">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium">متاح على جميع الأجهزة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            انضم إلى شبكة <span className="text-primary">UberFix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            سواء كنت عميلاً أو فنياً، التطبيق متاح لك مجاناً على جميع الأجهزة
          </p>
        </div>

        {/* البطاقات الرئيسية */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* للفنيين */}
          <Card className="p-8 hover:shadow-elevated transition-all animate-scale-in border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">للفنيين المحترفين</h3>
                <p className="text-muted-foreground">انضم إلينا مجاناً</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">تسجيل مجاني تماماً</p>
                  <p className="text-sm text-muted-foreground">سجل الآن واحصل على طلبات صيانة فوراً</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">جميع التخصصات مقبولة</p>
                  <p className="text-sm text-muted-foreground">كهرباء، سباكة، تكييف، نجارة، وأكثر...</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">دخل مستمر ومضمون</p>
                  <p className="text-sm text-muted-foreground">اعمل مع علامات تجارية كبرى في جميع أنحاء مصر</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">تغطية على مستوى الجمهورية</p>
                  <p className="text-sm text-muted-foreground">أكثر من 250 موقع في 15 محافظة</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elevated group">
              <UserPlus className="ml-2 h-5 w-5" />
              سجل كفني الآن
            </Button>
          </Card>

          {/* للعملاء */}
          <Card className="p-8 hover:shadow-elevated transition-all animate-scale-in border-2 hover:border-secondary/50 bg-gradient-to-br from-card to-secondary/5" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-secondary/10 rounded-2xl">
                <Smartphone className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">للعملاء والشركات</h3>
                <p className="text-muted-foreground">إدارة ذكية للصيانة</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">إدارة شاملة لكل فروعك</p>
                  <p className="text-sm text-muted-foreground">تتبع جميع عمليات الصيانة من مكان واحد</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">تقارير وتحليلات فورية</p>
                  <p className="text-sm text-muted-foreground">اتخذ قرارات مبنية على البيانات</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">فنيون معتمدون وموثوقون</p>
                  <p className="text-sm text-muted-foreground">نختار أفضل الفنيين لخدمة علامتك التجارية</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">متاح على الهواتف والويب</p>
                  <p className="text-sm text-muted-foreground">تطبيق سهل الاستخدام لجميع الأجهزة</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="w-full border-2 hover:bg-secondary/10 group">
              <Download className="ml-2 h-5 w-5" />
              حمّل التطبيق
            </Button>
          </Card>
        </div>

        {/* شريط الأيقونات */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">متاح قريباً على</h3>
            <p className="text-muted-foreground">حمّل التطبيق على جهازك المفضل</p>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Android</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-sm font-medium text-foreground">iOS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">Web App</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
