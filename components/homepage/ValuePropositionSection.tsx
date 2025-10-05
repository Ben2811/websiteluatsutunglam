import React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { valuePropositionData } from "@/lib/utils/constants"

export default function ValuePropositionSection() {
  const { badge, heading, features, buttons, stats } = valuePropositionData

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-secondary border border-primary/20 rounded-full">
              {React.createElement(badge.icon, { className: "w-5 h-5 text-primary mr-3" })}
              <span className="text-primary text-sm font-medium legal-text">{badge.text}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight legal-heading">
                {heading.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed legal-text">{heading.description}</p>
            </div>

            {/* Professional Service Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    {React.createElement(feature.icon, { className: "w-8 h-8 text-primary" })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-xl mb-3 legal-heading">{feature.title}</h3>
                    <p className="text-muted-foreground legal-text leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                    button.variant === "primary"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {React.createElement(button.icon, { className: "w-5 h-5 mr-3" })}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Professional Stats */}
          <div className="space-y-8">
            {/* Top Row - Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.slice(0, 2).map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border border-primary/10 rounded-2xl bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                      {React.createElement(stat.icon, { className: "w-10 h-10 text-primary" })}
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-3 legal-heading">{stat.title}</div>
                    <div className="text-sm text-muted-foreground legal-text">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Row - One Card Centered */}
            <div className="flex justify-center">
              <Card className="text-center border border-primary/10 rounded-2xl bg-background w-full max-w-[calc(50%-1rem)] hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {React.createElement(stats[2].icon, { className: "w-10 h-10 text-primary" })}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-3 legal-heading">{stats[2].title}</div>
                  <div className="text-sm text-muted-foreground legal-text">{stats[2].description}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
