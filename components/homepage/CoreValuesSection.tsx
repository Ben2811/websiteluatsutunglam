import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { coreValuesData } from "@/lib/utils/constants"

export default function CoreValuesSection() {
  const { badge, heading, cards } = coreValuesData

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-background border border-primary/20 rounded-full mb-8">
            {React.createElement(badge.icon, { className: "w-5 h-5 text-primary mr-3" })}
            <span className="text-primary text-sm font-medium legal-text">{badge.text}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 legal-heading">{heading.title}</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-8 legal-heading">{heading.subtitle}</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto legal-text">{heading.description}</p>
        </div>

        {/* Professional Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="text-center h-full flex flex-col bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-secondary border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(card.icon, { className: "w-10 h-10 text-primary" })}
                </div>
                <CardTitle className="text-xl font-bold text-foreground legal-heading">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-6">
                <CardDescription className="text-muted-foreground legal-text text-base leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Link
                  href={card.link.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors legal-text"
                >
                  {React.createElement(card.link.icon, { className: "w-4 h-4 mr-2" })}
                  {card.link.text}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
