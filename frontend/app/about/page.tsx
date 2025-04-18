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
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Technical Excellence',
    description:
      'We maintain the highest standards in our code and technical solutions, ensuring scalability and maintainability.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Client Partnership',
    description:
      'We view our clients as partners, working collaboratively to achieve their business objectives.',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Innovation First',
    description:
      'We stay at the forefront of technology, bringing innovative solutions to complex problems.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Rapid Delivery',
    description:
      'We believe in agile development and rapid iteration while maintaining quality.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Technical Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    description: 'With over 15 years of experience in software development and AI, Sarah leads our technical strategy and innovation initiatives.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Development',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    description: 'Marcus brings 10+ years of full-stack development expertise, specializing in scalable applications and cloud architecture.',
  },
  {
    name: 'Aisha Patel',
    role: 'AI Solutions Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    description: 'Aisha leads our AI initiatives, bringing cutting-edge machine learning solutions to our clients\' challenges.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                About ByteMeld
              </h1>
              <p className="text-xl text-muted-foreground">
                We are a team of passionate developers, designers, and digital
                craftsmen dedicated to creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="bg-background">
                  <CardHeader>
                    <div className="mb-4 text-primary">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="bg-background">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To empower businesses with innovative digital solutions that drive
                growth and create lasting impact. We combine technical excellence
                with creative problem-solving to deliver exceptional results for our
                clients.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}