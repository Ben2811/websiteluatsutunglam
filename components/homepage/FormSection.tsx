"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactData } from "@/lib/utils/constants"

export default function ContactFormSection() {
  const { badge, heading, contactInfo, form: formData } = contactData
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Legal consultation request:", formState)
    // Handle confidential form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Professional Contact Information */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-secondary border border-primary/20 rounded-full mb-8">
                {React.createElement(badge.icon, { className: "w-5 h-5 text-primary mr-3" })}
                <span className="text-primary text-sm font-medium legal-text">{badge.text}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 legal-heading">{heading.title}</h2>
              <p className="text-lg text-muted-foreground mb-10 legal-text">{heading.description}</p>
            </div>

            {/* Professional Contact Items */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-20 h-20 bg-secondary border border-primary/20 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    {React.createElement(item.icon, { className: "w-10 h-10 text-primary" })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-3 legal-heading">{item.title}</h3>
                    <div className="text-base text-muted-foreground legal-text">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="mb-2">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {contactData.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-200 legal-button ${
                    button.variant === "primary"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {button.icon && React.createElement(button.icon, { className: "w-5 h-5 mr-3" })}
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Professional Contact Form */}
          <Card className="shadow-2xl border-primary/10 bg-background">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-foreground legal-heading">{formData.title}</CardTitle>
              <p className="text-muted-foreground mt-3 legal-text">
               Vui lòng điền thông tin vào mẫu. Đội ngũ của chúng tôi sẽ liên hệ nhanh chóng để lên lịch buổi thảo luận kín đáo, nơi bạn có thể chia sẻ nhu cầu của mình một cách thoải mái.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium legal-text mb-2">
                    {formData.fields.name.label}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={formData.fields.name.placeholder}
                    className="border-primary/20 focus:border-primary focus:ring-primary h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-medium legal-text mb-2">
                    {formData.fields.email.label}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={formData.fields.email.placeholder}
                    className="border-primary/20 focus:border-primary focus:ring-primary h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium legal-text mb-2">
                    {formData.fields.phone.label}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={formData.fields.phone.placeholder}
                    className="border-primary/20 focus:border-primary focus:ring-primary h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium legal-text mb-2">
                    {formData.fields.message.label}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={formData.fields.message.placeholder}
                    className="min-h-[120px] resize-none border-primary/20 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 px-8 rounded-lg transition-all duration-200 legal-button shadow-lg hover:shadow-xl"
                >
                  {React.createElement(formData.submitButton.icon, { className: "w-5 h-5 mr-3" })}
                  {formData.submitButton.text}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
