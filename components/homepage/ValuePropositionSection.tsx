import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { valuePropositionData } from '@/lib/utils/constants';

export default function ValuePropositionSection() {
  const { badge, heading, features, buttons, stats } = valuePropositionData;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <badge.icon className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">
                {badge.text}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {heading.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {heading.description}
              </p>
            </div>

            {/* Service Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors ${
                    button.variant === 'primary' 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <button.icon className="w-5 h-5 mr-2" />
                  {button.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            {/* Top Row - Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <Card key={index} className="text-center border border-gray-200 rounded-2xl bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Bottom Row - One Card Centered */}
            <div className="flex justify-center">
              <Card className="text-center border border-gray-200 rounded-2xl bg-white w-full max-w-[calc(50%-0.75rem)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {React.createElement(stats[2].icon, { className: "w-8 h-8 text-blue-600" })}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stats[2].title}</div>
                  <div className="text-sm text-gray-600">{stats[2].description}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

