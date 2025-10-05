import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData } from '@/lib/utils/constants';

export default function ServicesSection() {
  const { badge, heading, services, cta } = servicesData;

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <badge.icon className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium">
              {badge.text}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {heading.title}
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
            {heading.subtitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {heading.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 text-sm mb-4">
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

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link 
            href={cta.href}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            {cta.text}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
