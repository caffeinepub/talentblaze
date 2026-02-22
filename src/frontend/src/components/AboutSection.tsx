import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Users, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Fractional Talent Acquisition,
              <span className="block text-primary mt-2">Redefined</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring enterprise-level talent acquisition expertise to growing companies without
              the enterprise price tag.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">What is Fractional Talent Acquisition?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fractional talent acquisition means you get access to experienced recruitment
                professionals on a part-time or project basis. Instead of hiring a full-time
                recruiter, you leverage our expertise exactly when and how you need it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This model is perfect for startups and scale-ups that need professional hiring
                support but aren't ready for a full-time talent team. You get strategic guidance,
                proven processes, and access to top talent networks—all while maintaining flexibility
                and controlling costs.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Why Talentblaze?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in the unique challenges of the Indian market. Whether you're a local
                startup scaling rapidly or a global company establishing your India presence, we
                understand the nuances of hiring in this dynamic ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines deep local market knowledge with global best practices, ensuring
                you attract and hire the right talent efficiently. We handle everything from
                employer branding to offer negotiation, letting you focus on building your business.
              </p>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Cost Effective</h4>
                <p className="text-sm text-muted-foreground">
                  Get expert hiring support at a fraction of the cost of a full-time hire.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Scalable</h4>
                <p className="text-sm text-muted-foreground">
                  Scale our involvement up or down based on your hiring needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Expert Team</h4>
                <p className="text-sm text-muted-foreground">
                  Access seasoned recruiters with proven track records.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Local Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of the Indian talent market and culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
