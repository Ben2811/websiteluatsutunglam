"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { heroData } from "@/lib/utils/constants"

/**
 * Professional badge component for legal credentials
 */
function LegalBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="inline-flex items-center px-6 py-3 bg-secondary border border-primary/20 rounded-full">
      <Icon className="w-5 h-5 text-primary mr-3" />
      <span className="text-primary text-sm font-medium legal-text">{text}</span>
    </div>
  )
}

/**
 * Professional call-to-action button for legal services
 */
function LegalButton({
  href,
  text,
  icon: Icon,
  variant,
}: {
  href: string
  text: string
  icon?: React.ElementType
  variant: "primary" | "secondary"
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button"
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {Icon && <Icon className="w-5 h-5 mr-3" />}
      {text}
    </Link>
  )
}

/**
 * Professional feature highlight for legal services
 */
function LegalFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="flex items-start">
      <div className="w-16 h-16 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground text-base mb-2 legal-heading">{title}</h3>
        <p className="text-sm text-muted-foreground legal-text">{description}</p>
      </div>
    </div>
  )
}

/**
 * Professional hero section for legal practice website
 */
export default function HeroSection() {
  const { badge, heading, buttons, features } = heroData

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Professional Badge */}
            <LegalBadge icon={badge.icon} text={badge.text} />

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight legal-heading">
                {heading.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed legal-text max-w-2xl">
                {heading.description}
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {buttons.map((button, idx) => (
                <LegalButton
                  key={idx}
                  href={button.href}
                  text={button.text}
                  icon={button.icon}
                  variant={button.variant}
                />
              ))}
            </div>

            {/* Professional Features */}
            <div className="grid grid-cols-1 gap-8 pt-8">
              {features.map((feature, idx) => (
                <LegalFeature key={idx} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-muted rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src="/no_image.jpg"
                alt="Sterling & Associates Legal Office"
                width={480}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}