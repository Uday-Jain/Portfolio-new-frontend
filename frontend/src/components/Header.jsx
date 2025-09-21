import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Download, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, downloadResume } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Credentials', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Premium Logo with Glassmorphism */}
          <div className="flex items-center gap-4 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">
                {personalInfo.name.split(' ').map((name, idx) => (
                  <span key={idx} className={idx === 1 ? 'text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text' : ''}>
                    {name}{idx === 0 ? ' ' : ''}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <Sparkles size={10} />
                Security Analyst
              </p>
            </div>
          </div>

          {/* Desktop Navigation with Glassmorphism */}
          <nav className="hidden md:flex items-center space-x-2 backdrop-blur-md bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium px-4 py-2 rounded-xl hover:bg-orange-500/20 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA with Enhanced Styling */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleDownloadResume}
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-md bg-white/5 rounded-xl hover:scale-105 shadow-lg"
            >
              <Download size={16} className="mr-2" />
              Resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 rounded-xl hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle with Glassmorphism */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors backdrop-blur-sm bg-white/10 p-3 rounded-xl border border-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 backdrop-blur-xl bg-black/50 rounded-2xl mt-4 border border-white/10 shadow-2xl">
            <div className="space-y-2 px-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-orange-500/20 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
                <Button
                  variant="outline"
                  onClick={handleDownloadResume}
                  className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-md bg-white/5 rounded-xl"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 rounded-xl"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;