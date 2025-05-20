
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-12 px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary block mb-1">GET</span>
              <span className="text-primary block mb-1">FUTURE</span>
              <span className="text-primary block">READY!</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-md">
              An Autonomous Institute preparing students for excellence in technology, innovation and leadership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Explore Programs
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Virtual Tour
              </Button>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-2">ADMISSION HELP</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> admission@niet.co.in
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +91-8010-500-700
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/30"></div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Student success" 
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm p-5 rounded-lg max-w-xs">
              <div className="text-right">
                <h3 className="text-3xl font-bold text-gray-800">51 LPA</h3>
                <p className="text-xl font-medium">Highest Package</p>
                <p className="text-gray-600">Batch 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
