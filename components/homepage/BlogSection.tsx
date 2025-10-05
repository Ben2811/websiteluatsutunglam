import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PencilLine, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogData } from '@/lib/utils/constants';

export default function BlogSection() {
  const { badge, heading, cta, posts } = blogData;

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <badge.icon className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">
                {badge.text}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {heading.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {heading.description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link 
              href={cta.href}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              {cta.text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden p-0 h-full flex flex-col">
              <div className="aspect-[3/2] bg-gray-200 relative overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-4">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600 mb-4 w-fit">
                  <post.category.icon className="w-3 h-3 mr-1" />
                  {post.category.text}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-3">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pt-0 flex-">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <PencilLine className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Tác giả: {post.author}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Thời gian đọc: {post.readTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex justify-center">
                <Link 
                  href={post.href}
                  className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Xem bài viết
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

