import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Search,
  FileText,
  MessageSquare,
  Award,
  BarChart,
  Rocket,
  Building2,
} from 'lucide-react';

export default function ServicesSection() {
  const coreServices = [
    {
      icon: Search,
      title: 'End-to-End Recruitment',
      description:
        'Full-cycle recruitment from job description creation to offer acceptance. We handle sourcing, screening, interviewing, and closing.',
    },
    {
      icon: Briefcase,
      title: 'Talent Strategy Consulting',
      description:
        'Strategic guidance on hiring plans, compensation benchmarking, and building your employer brand in the Indian market.',
    },
    {
      icon: FileText,
      title: 'Process Optimization',
      description:
        'Design and implement efficient hiring processes, interview frameworks, and evaluation criteria tailored to your needs.',
    },
    {
      icon: MessageSquare,
      title: 'Candidate Experience',
      description:
        'Create exceptional candidate experiences that strengthen your employer brand and improve offer acceptance rates.',
    },
    {
      icon: Award,
      title: 'Executive Search',
      description:
        'Specialized search for senior leadership and critical roles requiring deep market knowledge and discretion.',
    },
    {
      icon: BarChart,
      title: 'Hiring Analytics',
      description:
        'Data-driven insights on your hiring funnel, time-to-hire, and recruitment ROI to continuously improve outcomes.',
    },
  ];

  const startupServices = [
    'Rapid team scaling for growth stages',
    'Startup-friendly pricing models',
    'Founder-level strategic partnership',
    'Tech talent specialization',
    'Equity compensation guidance',
  ];

  const globalServices = [
    'India market entry support',
    'Compliance and legal guidance',
    'Cultural integration consulting',
    'Remote team building expertise',
    'Global-local hybrid models',
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Talent
              <span className="block text-primary mt-2">Acquisition Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we provide everything you need to build exceptional teams.
            </p>
          </div>

          {/* Core Services */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specialized Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Startups */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      For Startups
                    </Badge>
                    <CardTitle className="text-2xl">Indian Startups</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized support for fast-growing Indian startups navigating rapid scaling challenges.
                </p>
                <ul className="space-y-3">
                  {startupServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* For Global Firms */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      For Global Firms
                    </Badge>
                    <CardTitle className="text-2xl">India Market Entry</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert guidance for international companies establishing or expanding operations in India.
                </p>
                <ul className="space-y-3">
                  {globalServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
