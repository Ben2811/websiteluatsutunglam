'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { SidebarItems } from '@/lib/utils/sidebar';
import { 
  ScaleIcon 
} 

from 'lucide-react'

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      {/* Toggle Button - Always visible */}
      {!isExpanded && (
        <Button
          onClick={() => setIsExpanded(true)}
          variant="default"
          className="bg-blue-600 hover:bg-primary shadow-lg w-12 h-12 flex items-center justify-center rounded-1/2"
          title="Mở tra cứu văn bản pháp luật"
        >
          <ScaleIcon className="w-12 h-12 text-yellow-500" />
        </Button>
      )}

      {/* Sidebar Content */}
      {isExpanded && (
        <Card className="w-80 p-0 animate-in slide-in-from-left duration-300">
          {/* Header with close button */}
          <CardHeader className="bg-primary text-white rounded-t-xl p-3 flex items-center justify-between !gap-0">
            <h3 className="text-sm font-bold text-center flex-1">
              TRA CỨU VĂN BẢN PHÁP LUẬT
            </h3>
            <Button
              onClick={() => setIsExpanded(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:text-white hover:bg-blue-700 h-8 w-8"
              title="Đóng"
            >
              <span className="text-lg">◀</span>
            </Button>
          </CardHeader>

          {/* Content */}
          <CardContent className="p-4">
            <div className="flex flex-col gap-3">
              {SidebarItems.map((site, index) => (
                <Link 
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group border border-gray-200 hover:border-blue-300"
                >
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image
                      src={site.logo}
                      alt={site.name}
                      width={48}
                      height={48}
                      className="rounded object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-sm">
                      {site.name}
                    </h4>
                    <p className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                      {site.url.replace('https://', '').replace('http://', '')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};