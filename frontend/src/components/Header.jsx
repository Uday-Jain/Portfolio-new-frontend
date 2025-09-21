import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Download } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">
                {personalInfo.name.split(' ').map((name, idx) => (
                  <span key={idx} className={idx === 1 ? 'text-orange-500' : ''}>
                    {name}{idx === 0 ? ' ' : ''}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 text-xs">Security Analyst</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleDownloadResume}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <Download size={16} className="mr-2" />
              Resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 border-t border-gray-800">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  onClick={handleDownloadResume}
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
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