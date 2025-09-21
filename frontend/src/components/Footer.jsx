import React from 'react';
import { Shield, Mail, Linkedin, Github, ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
                    <span className="text-orange-500"> {personalInfo.name.split(' ')[1]}</span>
                  </h3>
                  <p className="text-gray-400 text-sm">Cybersecurity Expert</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Passionate cybersecurity professional dedicated to securing digital infrastructure 
                and developing innovative security solutions for organizations worldwide.
              </p>
              <div className="flex gap-4">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                >
                  <Mail size={18} className="text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                >
                  <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href={personalInfo.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                >
                  <Github size={18} className="text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Navigation</h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'About Me', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Certifications', id: 'certifications' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-orange-500 font-medium mb-2">Email</h5>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <h5 className="text-orange-500 font-medium mb-2">Location</h5>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
                <div>
                  <h5 className="text-orange-500 font-medium mb-2">Availability</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white w-full transition-all duration-300"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} {personalInfo.name}. Made with</span>
                <Heart size={14} className="text-red-500 fill-current" />
                <span>for cybersecurity excellence.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Scroll to top</span>
                <Button
                  onClick={scrollToTop}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg transition-colors group"
                >
                  <ArrowUp size={16} className="text-gray-400 group-hover:text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;