import React from 'react';
import { ArrowRight, Download, MapPin, Mail, Linkedin } from 'lucide-react';
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
    <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-orange-500/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-orange-500/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-orange-500/10 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <span className="text-orange-500 font-medium tracking-wider">CYBERSECURITY EXPERT</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
            <br />
            <span className="text-orange-500">{personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            <p className="mb-2">{personalInfo.title}</p>
            <p className="text-orange-400 font-medium">{personalInfo.subtitle}</p>
          </div>
          
          {/* Location and Contact Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-orange-500 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} className="text-orange-500" />
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          {/* Summary */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl leading-relaxed">
            {personalInfo.summary}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium group transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get In Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-medium group transition-all duration-300"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-400 text-sm">Vulnerabilities Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
              <div className="text-gray-400 text-sm">Security Tools Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;