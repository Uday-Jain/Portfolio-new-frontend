import React from 'react';
import { ArrowRight, Download, MapPin, Mail, Linkedin, Shield, Lock, Code } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, downloadResume } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const response = await downloadResume();
      toast({
        title: "Resume Download",
        description: response.message,
      });
    } catch (error) {
      toast({
        title: "Download Error", 
        description: "Failed to download resume. Please try again.",
        variant: "destructive"
      });
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Security Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 text-orange-500/20 animate-pulse">
          <Shield size={64} />
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 text-orange-500/15 animate-bounce" style={{animationDelay: '1s'}}>
          <Lock size={48} />
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 text-orange-500/10 animate-pulse" style={{animationDelay: '2s'}}>
          <Code size={56} />
        </div>
        
        {/* Glassmorphism Background Shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-orange-400/8 to-orange-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/6 to-orange-600/3 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Glassmorphism Greeting Card */}
          <div className="mb-8 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl inline-block shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-medium tracking-wider text-sm">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>
          
          {/* Professional Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <span className="text-orange-500 font-medium tracking-wider backdrop-blur-sm bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
              CYBERSECURITY EXPERT
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-orange-500 to-orange-600"></div>
          </div>
          
          {/* Main Title with Enhanced Typography */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white drop-shadow-2xl animate-fade-in">{personalInfo.name.split(' ')[0]}</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text animate-gradient-x drop-shadow-lg">
              {personalInfo.name.split(' ')[1]}
            </span>
          </h1>
          
          {/* Glassmorphism Subtitle Card */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="text-xl md:text-3xl text-gray-200 mb-4 leading-relaxed font-light">
              <p className="mb-2">{personalInfo.title}</p>
              <p className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text font-semibold">
                {personalInfo.subtitle}
              </p>
            </div>
            
            {/* Contact Info with Glassmorphism */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin size={16} className="text-orange-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-orange-500/20 transition-all duration-300">
                <Mail size={16} className="text-orange-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-orange-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-orange-500/20 transition-all duration-300">
                <Linkedin size={16} className="text-orange-500" />
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          {/* Summary with Enhanced Glassmorphism */}
          <div className="backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 mb-12 shadow-2xl">
            <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold group transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 backdrop-blur-sm border border-orange-400/30 rounded-2xl hover:scale-105"
            >
              Get In Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-4 text-lg font-semibold group transition-all duration-300 backdrop-blur-md bg-white/5 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
          
          {/* Premium Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years Experience", icon: Shield },
              { value: "200+", label: "Vulnerabilities Found", icon: Lock },
              { value: "4", label: "Certifications", icon: "🏆" },
              { value: "2", label: "Security Tools Built", icon: Code }
            ].map((stat, index) => {
              const IconComponent = typeof stat.icon === 'string' ? null : stat.icon;
              return (
                <div key={index} className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105 shadow-xl">
                  <div className="flex justify-center mb-3">
                    {IconComponent ? (
                      <IconComponent size={24} className="text-orange-500 group-hover:scale-110 transition-transform" />
                    ) : (
                      <span className="text-2xl">{stat.icon}</span>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Floating Security Expertise Badges */}
          <div className="flex flex-wrap gap-4 mt-12 justify-center">
            {["Burp Suite", "SBOM Analysis", "AI Security", "Vulnerability Assessment"].map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-orange-500/10 border border-orange-500/30 px-6 py-3 rounded-full text-orange-300 font-medium hover:bg-orange-500/20 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-orange-500 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;