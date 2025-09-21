import React from 'react';
import { ExternalLink, Github, Code, Shield, CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <span className="text-orange-500 font-medium tracking-wider">SECURITY PROJECTS</span>
              <div className="w-12 h-px bg-gradient-to-r from-orange-600 to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation in Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom security tools and frameworks built to address real-world cybersecurity challenges
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black border-gray-800 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        {project.title.includes('SBOM') ? 
                          <Shield size={24} className="text-orange-500" /> : 
                          <Code size={24} className="text-orange-500" />
                        }
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-orange-500/20 text-orange-400 border-orange-500/30">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar size={14} />
                          <span>{project.year}</span>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <Badge variant={project.status === 'Production Ready' ? 'default' : 'secondary'} 
                                 className={project.status === 'Production Ready' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30'}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Code size={16} className="text-orange-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="mb-6 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <h4 className="text-orange-400 font-semibold mb-2">Impact & Results</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                    <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300">
                      <ExternalLink size={16} className="mr-2" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
                <p className="text-gray-300 text-lg mb-6">
                  I'm always looking for new opportunities to apply my security expertise and build innovative solutions.
                </p>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
                >
                  Discuss Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;