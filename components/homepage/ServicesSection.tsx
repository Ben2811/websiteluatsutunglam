import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { servicesData } from "@/lib/utils/constants"

/**
 * Professional section badge for legal practice areas
 */
function PracticeAreaBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="inline-flex items-center px-6 py-3 bg-background border border-primary/20 rounded-full mb-8">
      <Icon className="w-5 h-5 text-primary mr-3" />
      <span className="text-primary text-sm font-medium legal-text">{text}</span>
    </div>
  )
}

/**
 * Professional service card for legal practice areas
 */
function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  buttonText,
}: {
  icon: React.ElementType
  title: string
  description: string
  href: string
  buttonText: string
}) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-background border-primary/10 hover:border-primary/30">
      <CardHeader className="pb-4">
        <div className="w-16 h-16 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground legal-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <CardDescription className="text-muted-foreground text-base mb-6 legal-text leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center pt-0">
        <Link
          href={href}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 legal-button"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  )
}

/**
 * Professional call-to-action for practice areas
 */
function PracticeAreasCTA({ href, text }: { href: string; text: string }) {
  return (
    <div className="text-center mt-12">
      <Link
        href={href}
        className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 legal-button shadow-lg hover:shadow-xl"
      >
        {text}
        <ArrowRight className="w-5 h-5 ml-3" />
      </Link>
    </div>
  )
}

/**
 * Professional services section displaying legal practice areas
 */
export default function ServicesSection() {
  const { badge, heading, services, cta } = servicesData

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Professional Section Header */}
        <div className="text-center mb-16">
          <PracticeAreaBadge icon={badge.icon} text={badge.text} />
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 legal-heading">{heading.title}</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-8 legal-heading">{heading.subtitle}</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto legal-text">{heading.description}</p>
        </div>

        {/* Professional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              buttonText={service.buttonText}
            />
          ))}
        </div>

        {/* Professional Call-to-Action */}
        <PracticeAreasCTA href={cta.href} text={cta.text} />
      </div>
    </section>
  )
}
