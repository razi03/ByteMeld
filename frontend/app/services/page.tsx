import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Code2,
  Smartphone,
  Bot,
  LineChart,
  Database,
  Cloud,
} from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
    ],
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'AI Solutions',
    description:
      'Cutting-edge AI tools and integrations that automate and enhance your business processes.',
    features: [
      'Custom AI Models',
      'Chatbots',
      'Natural Language Processing',
      'Machine Learning Integration',
    ],
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Marketing Funnels',
    description:
      'Strategic digital marketing funnels that convert visitors into loyal customers.',
    features: [
      'Landing Pages',
      'Email Automation',
      'A/B Testing',
      'Conversion Optimization',
    ],
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'CRM Solutions',
    description:
      'Comprehensive CRM implementations and customizations to streamline your business operations.',
    features: [
      'GoHighLevel Integration',
      'HubSpot Setup',
      'Zoho Customization',
      'Monday.com Workflows',
    ],
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and services for reliable application hosting and deployment.',
    features: [
      'Cloud Architecture',
      'DevOps Implementation',
      'Serverless Solutions',
      'Performance Optimization',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive digital solutions tailored to your business needs.
                From web development to AI integration, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="bg-background">
                  <CardHeader>
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding your needs and project requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Creating a detailed roadmap for success
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Implementing solutions with precision
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing maintenance and optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and find the perfect solution for your business.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}