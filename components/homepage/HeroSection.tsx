"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from '@/lib/utils/constants';

export default function HeroSection() {
  const { badge, heading, buttons, features } = heroData;

  return (
    <section className="bg-white py-16 lg:py-24">
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
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {heading.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {heading.description}
              </p>
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
                  {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                  {button.text}
                </Link>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg w-2/3 h-full flex items-center justify-center overflow-hidden mx-auto">
              <Image 
                src="/no_image.jpg" 
                alt="Hình ảnh sẽ được thêm vào sau" 
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

