"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2, Smartphone, Bot, LineChart, Database, Cloud } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { NewsletterForm } from "@/components/newsletter-form"
import Image from "next/image"

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Solutions",
    description:
      "Cutting-edge AI tools and integrations that automate and enhance your business processes.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Marketing Funnels",
    description:
      "Strategic digital marketing funnels that convert visitors into loyal customers.",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "CRM Solutions",
    description:
      "Comprehensive CRM implementations and customizations to streamline your business operations.",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services for reliable application hosting and deployment.",
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex min-h-screen flex-col" ref={containerRef}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
          {/* Video Background with Parallax */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ y, opacity }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/video-placeholder.jpg"
            >
              <source src="/hero-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </motion.div>

          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl lg:max-w-4xl text-center"
            >
              <div className="mb-8 flex justify-center">
                <Code2 className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Bridging Code & Creativity for Impactful Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We transform your ideas into powerful digital solutions. From web applications
                to AI integrations, we build the future of technology.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/work">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/50 py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16">
              Our Services
            </h2>
            <div 
              ref={servicesRef}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16">
              What Our Clients Say
            </h2>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/90 px-6 py-20 sm:px-12 sm:py-28 shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                  Let&apos;s discuss how we can help you achieve your goals with our cutting-edge solutions.
                </p>
                <div className="mt-10">
                  <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Newsletter */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">ByteMeld</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Bridging Code & Creativity for Impactful Solutions
              </p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
                <NewsletterForm />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Solutions</li>
                <li>Marketing Funnels</li>
                <li>CRM Solutions</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/work">Our Work</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://twitter.com/bytemeld">Twitter</Link></li>
                <li><Link href="https://linkedin.com/company/bytemeld">LinkedIn</Link></li>
                <li><Link href="https://github.com/bytemeld">GitHub</Link></li>
                <li><Link href="https://instagram.com/bytemeld">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ByteMeld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}