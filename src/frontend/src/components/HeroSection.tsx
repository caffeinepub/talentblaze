import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Target, TrendingUp, Briefcase, Award, Zap } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Infographic Background Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-accent/5">
        {/* Decorative Icons - Top Left */}
        <div className="absolute top-20 left-10 opacity-[0.07]">
          <Users className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute top-40 left-32 opacity-[0.05]">
          <Target className="w-24 h-24 text-accent-foreground" />
        </div>
        
        {/* Decorative Icons - Top Right */}
        <div className="absolute top-32 right-20 opacity-[0.06]">
          <TrendingUp className="w-28 h-28 text-primary" />
        </div>
        <div className="absolute top-20 right-48 opacity-[0.05]">
          <Briefcase className="w-20 h-20 text-accent-foreground" />
        </div>
        
        {/* Decorative Icons - Bottom Left */}
        <div className="absolute bottom-32 left-24 opacity-[0.06]">
          <Award className="w-28 h-28 text-primary" />
        </div>
        <div className="absolute bottom-20 left-52 opacity-[0.05]">
          <Zap className="w-24 h-24 text-accent-foreground" />
        </div>
        
        {/* Decorative Icons - Bottom Right */}
        <div className="absolute bottom-40 right-32 opacity-[0.07]">
          <Users className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute bottom-24 right-16 opacity-[0.05]">
          <Target className="w-20 h-20 text-accent-foreground" />
        </div>

        {/* Subtle gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Styled Talentblaze Text */}
          <div className="flex justify-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent drop-shadow-sm">
                Talentblaze
              </span>
            </h1>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/20">
            <Sparkles className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Fractional Talent Acquisition Excellence
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Scale Your Team with
            <span className="block text-primary mt-2">India's Top Talent</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Expert fractional talent acquisition services for startups and growing companies in India. 
            Get the hiring expertise you need, exactly when you need it—without the full-time commitment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base px-8 py-6 rounded-xl"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-foreground/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-foreground/70">Client Focused</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">India</div>
              <div className="text-sm text-foreground/70">Market Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
