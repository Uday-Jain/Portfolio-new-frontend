import React from 'react';
import { Shield, Code, Brain, Award, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security Expertise",
      description: "3+ years of hands-on experience in cybersecurity with focus on Burp Suite and vulnerability assessments",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Code,
      title: "Tool Development", 
      description: "Created SBOM analysis tool supporting SPDX and CycloneDX formats for comprehensive vulnerability detection",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "16 hours of intensive AI workshop training, combining traditional security with modern AI-driven approaches",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Successfully identified 200+ vulnerabilities and improved security assessment efficiency by 35%",
      gradient: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-orange-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-orange-400/5 to-orange-500/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              <div className="backdrop-blur-md bg-orange-500/10 px-6 py-3 rounded-full border border-orange-500/30 flex items-center gap-2">
                <Sparkles size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium tracking-wider">ABOUT ME</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text">
                Cybersecurity
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text">
                Professional
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about securing digital infrastructure and developing innovative security solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Enhanced Story Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Security Journey</h3>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                  My journey in cybersecurity began at Teerthanker Mahaveer University, where I developed 
                  a passion for understanding and mitigating digital threats. This foundation led me to 
                  Sopra Steria, where I've grown from an Engineer Trainee to a Senior Security Analyst.
                </p>
                <p className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                  At Sopra Steria, I've honed my expertise in Burp Suite and vulnerability assessments, 
                  contributing to the security of critical digital infrastructure. My experience spans 
                  the entire security lifecycle - from identifying vulnerabilities to implementing 
                  robust protection measures.
                </p>
                <p className="backdrop-blur-sm bg-orange-500/10 p-4 rounded-xl border border-orange-500/20">
                  Recently, I've expanded my skill set with intensive AI training, recognizing the 
                  growing importance of AI in cybersecurity. I've also developed specialized tools 
                  like my SBOM analysis application, which helps organizations understand and secure 
                  their software supply chains.
                </p>
              </div>
            </div>

            {/* Enhanced Skills Grid */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {/* Security & Assessment */}
                <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-blue-600/5 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <h4 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                    <Shield size={18} />
                    Security & Assessment
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.slice(0, 6).map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors group-hover:scale-105 duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security Tools */}
                <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <h4 className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                    <Code size={18} />
                    Security Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.slice(0, 6).map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors group-hover:scale-105 duration-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Emerging Technologies */}
                <div className="backdrop-blur-md bg-gradient-to-r from-orange-500/20 to-orange-600/10 p-6 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group">
                  <h4 className="text-orange-400 font-semibold mb-4 flex items-center gap-2">
                    <Brain size={18} />
                    Emerging Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.emerging.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-full text-sm border border-orange-500/40 hover:bg-orange-500/40 transition-colors font-medium group-hover:scale-105 duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="backdrop-blur-md bg-white/5 border-white/10 hover:border-orange-500/50 transition-all duration-500 group hover:scale-105 shadow-2xl rounded-2xl overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-all duration-300 border border-orange-500/20">
                        <IconComponent size={28} className="text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="text-white font-semibold mb-3 text-lg">{highlight.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-20 text-center">
            <div className="backdrop-blur-xl bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-orange-500/10 border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-orange-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Ready to Secure Your Future?</h3>
                <Sparkles className="text-orange-400" size={24} />
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Let's collaborate to build robust cybersecurity solutions and protect what matters most.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 border border-orange-400/30"
              >
                Start the Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;