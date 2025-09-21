import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <span className="text-orange-500 font-medium tracking-wider">PROFESSIONAL EXPERIENCE</span>
              <div className="w-12 h-px bg-gradient-to-r from-orange-600 to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Career Progression
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              3+ years of progressive growth in cybersecurity at Sopra Steria
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-orange-500 via-orange-500 to-transparent hidden lg:block"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10 hidden lg:block"></div>

                  {/* Experience Card */}
                  <Card className={`bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:mr-[52%]' : 'lg:ml-[52%]'
                  }`}>
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                          <p className="text-orange-500 font-semibold text-lg">{exp.company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2 mt-4 lg:mt-0">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-orange-500/20 text-orange-400 border-orange-500/30">
                            {exp.period}
                          </Badge>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Award size={16} className="text-orange-500" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-black/50 rounded-lg border border-gray-800">
                              <TrendingUp size={16} className="text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Career Summary */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Career Growth at Sopra Steria</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Demonstrated consistent professional growth from Engineer Trainee to Senior Security Analyst, 
                  showcasing expertise in cybersecurity and leadership capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">3</div>
                    <div className="text-gray-400">Role Progressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">40%</div>
                    <div className="text-gray-400">Vulnerability Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">35%</div>
                    <div className="text-gray-400">Efficiency Improvement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;