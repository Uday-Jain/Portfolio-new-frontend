import React from 'react';
import { Shield, Code, Brain, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security Expertise",
      description: "3+ years of hands-on experience in cybersecurity with focus on OWASP ZAP and vulnerability assessments"
    },
    {
      icon: Code,
      title: "Tool Development", 
      description: "Created SBOM analysis tool supporting SPDX and CycloneDX formats for comprehensive vulnerability detection"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "16 hours of intensive AI workshop training, combining traditional security with modern AI-driven approaches"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Successfully identified 200+ vulnerabilities and improved security assessment efficiency by 35%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <span className="text-orange-500 font-medium tracking-wider">ABOUT ME</span>
              <div className="w-12 h-px bg-gradient-to-r from-orange-600 to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity Professional
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about securing digital infrastructure and developing innovative security solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Story */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Security Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My journey in cybersecurity began at Teerthanker Mahaveer University, where I developed 
                  a passion for understanding and mitigating digital threats. This foundation led me to 
                  Sopra Steria, where I've grown from an Engineer Trainee to a Senior Security Analyst.
                </p>
                <p>
                  At Sopra Steria, I've honed my expertise in OWASP ZAP and vulnerability assessments, 
                  contributing to the security of critical digital infrastructure. My experience spans 
                  the entire security lifecycle - from identifying vulnerabilities to implementing 
                  robust protection measures.
                </p>
                <p>
                  Recently, I've expanded my skill set with intensive AI training, recognizing the 
                  growing importance of AI in cybersecurity. I've also developed specialized tools 
                  like my SBOM analysis application, which helps organizations understand and secure 
                  their software supply chains.
                </p>
              </div>
            </div>

            {/* Right Column - Skills Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 gap-6">
                {/* Technical Skills */}
                <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-orange-500 font-semibold mb-4">Security & Assessment</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.slice(0, 6).map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-orange-500 font-semibold mb-4">Security Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.slice(0, 6).map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Emerging Tech */}
                <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-orange-500 font-semibold mb-4">Emerging Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.emerging.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="bg-black/50 border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                      <IconComponent size={24} className="text-orange-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;