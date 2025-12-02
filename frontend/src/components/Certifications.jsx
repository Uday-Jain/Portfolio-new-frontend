import React from 'react';
import { Award, Calendar, ExternalLink, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { certifications, education } from '../data/mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <span className="text-orange-500 font-medium tracking-wider">CREDENTIALS</span>
              <div className="w-12 h-px bg-gradient-to-r from-orange-600 to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certifications & Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continuous learning and professional development in cybersecurity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Certifications Column */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-orange-500" size={28} />
                Professional Certifications
              </h3>
              
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors mb-2">
                            {cert.name}
                          </h4>
                          <p className="text-orange-500 font-medium mb-2">{cert.issuer}</p>
                          <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 ml-4">
                          <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                            {cert.year}
                          </Badge>
                          {cert.duration && (
                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                              <Clock size={12} />
                              <span>{cert.duration}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Special highlighting for AI Workshop */}
                      {cert.name.includes('AI Workshop') && (
                        <div className="mt-4 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            Intensive Hands-on Training
                          </div>
                          <p className="text-gray-300 text-sm mt-2">
                            Comprehensive AI applications in cybersecurity with practical implementation experience
                          </p>
                        </div>
                      )}
                      
                      <div className="mt-4 flex justify-end">
                        <Button variant="ghost" size="sm" className="text-orange-500 hover:text-white hover:bg-orange-500" onClick={() => window.open(cert.certificateUrl, '_blank')>
                          <ExternalLink size={14} className="mr-2" />
                          Verify
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Academic Background
              </h3>

              <Card className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{education.degree}</h4>
                    <p className="text-orange-500 font-medium mb-1">{education.field}</p>
                    <p className="text-gray-400 text-sm">{education.university}</p>
                    <p className="text-gray-400 text-sm">{education.location}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-300">Duration</span>
                      <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                        {education.duration}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-300">Performance</span>
                      <span className="text-white font-semibold">{education.gpa}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h5 className="text-white font-semibold mb-3">Relevant Coursework</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {education.relevantCourses.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Continuing Education */}
              <div className="mt-8">
                <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                    <p className="text-gray-300 text-sm">
                      Committed to staying current with emerging cybersecurity trends and technologies
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Professional Development Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">{certifications.length}</div>
                    <div className="text-gray-400 text-sm">Professional Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">16</div>
                    <div className="text-gray-400 text-sm">AI Training Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
                    <div className="text-gray-400 text-sm">Years of Study</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">2024</div>
                    <div className="text-gray-400 text-sm">Latest Certification</div>
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

export default Certifications;
