import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PencilLine, Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogData } from "@/lib/utils/constants"

export default function BlogSection() {
  const { badge, heading, cta, posts } = blogData

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Professional Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center px-6 py-3 bg-background border border-primary/20 rounded-full mb-8">
              {React.createElement(badge.icon, { className: "w-5 h-5 text-primary mr-3" })}
              <span className="text-primary text-sm font-medium legal-text">{badge.text}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 legal-heading">{heading.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl legal-text">{heading.description}</p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 legal-button shadow-lg hover:shadow-xl"
            >
              {cta.text}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>

        {/* Professional Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden p-0 h-full flex flex-col bg-background border-primary/10 hover:border-primary/30"
            >
              <div className="aspect-[3/2] bg-muted relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-8 pb-4">
                <div className="inline-flex items-center px-4 py-2 bg-secondary border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 w-fit legal-text">
                  {React.createElement(post.category.icon, { className: "w-4 h-4 mr-2" })}
                  {post.category.text}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-4 line-clamp-3 legal-heading">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base line-clamp-3 legal-text">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pt-0 flex-1">
                <div className="flex items-center text-sm text-muted-foreground mb-3 legal-text">
                  <PencilLine className="w-4 h-4 mr-2 text-primary" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-3 legal-text">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>Reading time: {post.readTime}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground legal-text">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-6 flex justify-center">
                <Link
                  href={post.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 legal-button"
                >
                  Read Article
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
