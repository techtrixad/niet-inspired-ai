
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Shape Your Future?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join NIET and be part of an institution that's committed to academic excellence and 
          preparing students for the challenges of tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-primary hover:bg-gray-100">
            Apply Online 2025
          </Button>
          <Button variant="outline" className="border-white hover:bg-white/20">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
