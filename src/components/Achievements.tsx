
import React from 'react';

const achievementData = [
  {
    icon: "🏆",
    title: "Ranked among the Top Engineering Institutes of India",
    subtitle: "(Rank Band 101-150) and 40th in Pharmacy"
  },
  {
    icon: "🥇",
    title: "1st Autonomous Private Institute",
    subtitle: "in Uttar Pradesh"
  },
  {
    icon: "🎓",
    title: "NAAC Accredited Grade 'A' 3.23",
    subtitle: ""
  },
  {
    icon: "🏅",
    title: "NBA Accredited",
    subtitle: "(CSE, ECE, ME, IT, BT, B.Pharma, MBA, MCA, PGDM)"
  },
  {
    icon: "⭐",
    title: "Highest 4 Star Rating for Innovation and Entrepreneurship",
    subtitle: "by IIC 2023 (GOI)"
  },
  {
    icon: "💎",
    title: "Awarded 'Diamond' Rating",
    subtitle: "by I-Gauge"
  }
];

const Achievements = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementData.map((achievement, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
