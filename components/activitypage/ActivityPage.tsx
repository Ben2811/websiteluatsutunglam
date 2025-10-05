"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { activityData } from '@/lib/utils/activity';

export default function ActivityPage() {
  const { hero, services, whyChooseUs, cta } = activityData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <Image 
                src="/logo.jpg" 
                alt="Logo Văn phòng Luật sư Tùng Lâm" 
                width={120}
                height={120}
                className="mx-auto rounded-full"
              />
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-8">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {hero.heading.title}
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 leading-tight">
                {hero.heading.subtitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {hero.buttons.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors ${
                    button.variant === 'primary' 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <services.badge.icon className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">
                {services.badge.text}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {services.heading.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {services.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.practiceAreas.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                  >
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {whyChooseUs.heading.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {whyChooseUs.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="pt-6 flex-1">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed ">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              {cta.heading.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {cta.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta.buttons.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors ${
                    button.variant === 'primary' 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600'
                  }`}
                >
                  {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


