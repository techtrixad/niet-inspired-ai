
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const programCategories = [
  {
    title: "Engineering",
    programs: [
      "B.Tech Computer Science & Engineering",
      "B.Tech Information Technology",
      "B.Tech Electronics & Communication",
      "B.Tech Mechanical Engineering",
      "B.Tech Civil Engineering",
      "M.Tech Computer Science & Engineering"
    ]
  },
  {
    title: "Management",
    programs: [
      "Bachelor of Business Administration (BBA)",
      "Master of Business Administration (MBA)",
      "Post Graduate Diploma in Management (PGDM)"
    ]
  },
  {
    title: "Pharmacy",
    programs: [
      "Bachelor of Pharmacy (B.Pharm)",
      "Master of Pharmacy (M.Pharm)"
    ]
  },
  {
    title: "Computer Applications",
    programs: [
      "Bachelor of Computer Applications (BCA)",
      "Master of Computer Applications (MCA)"
    ]
  }
];

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCategories = searchTerm ? 
    programCategories.map(category => ({
      ...category,
      programs: category.programs.filter(program => 
        program.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.programs.length > 0) : 
    programCategories;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-primary font-medium md:text-4xl">Take charge of your passion</p>
        </div>
        
        <div className="max-w-md mx-auto mb-10 relative">
          <Input
            type="text"
            placeholder="Find a program of study..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-6 rounded-full border-gray-300"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary p-4">
                <h3 className="text-white font-bold text-lg">{category.title}</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {category.programs.map((program, idx) => (
                    <li key={idx} className="text-gray-700 hover:text-primary">
                      <a href="#" className="block py-2 px-2 hover:bg-gray-50 rounded transition">
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border-t">
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
