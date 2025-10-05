import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { coreValuesData } from '@/lib/utils/constants';

export default function CoreValuesSection() {
  const { badge, heading, cards } = coreValuesData;

  return (
    <section className="bg-white py-12 lg:py-16">
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="text-center h-full flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-gray-600">
                  {card.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link 
                  href={card.link.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <card.link.icon className="w-4 h-4 mr-2" />
                  {card.link.text}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
