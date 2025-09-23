import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, Sparkles, Zap, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { personalInfo, submitContactForm, downloadResume } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);
      toast({
        title: "Message Sent!",
        description: response.message,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "EmailJS Setup Required",
        description: "Please configure EmailJS credentials in mock.js. Check EMAILJS_SETUP.md for instructions.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/8 to-orange-600/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-orange-400/6 to-orange-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/4 to-orange-600/2 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              <div className="backdrop-blur-md bg-orange-500/10 px-6 py-3 rounded-full border border-orange-500/30 flex items-center gap-2">
                <Zap size={16} className="text-orange-400" />
                <span className="text-orange-400 font-medium tracking-wider">GET IN TOUCH</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text">
                Let's Work
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss cybersecurity opportunities or have questions about my experience? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enhanced Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="backdrop-blur-md bg-white/5 border-white/10 shadow-2xl rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={20} />
                    </div>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-orange-500/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <Mail size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-orange-500/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <MapPin size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-orange-500/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <Linkedin size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                      <a 
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        Professional Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Quick Actions */}
              <div className="space-y-4">
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 rounded-2xl border border-orange-400/30"
                >
                  <Download size={20} className="mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                  className="w-full border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-md bg-white/5 rounded-2xl hover:scale-105"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn Profile
                </Button>
              </div>

              {/* Premium Availability Status */}
              <Card className="backdrop-blur-md bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <Sparkles className="text-green-400" size={16} />
                  </div>
                  <h4 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
                    <Shield size={16} />
                    Available for Opportunities
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Currently seeking new cybersecurity roles and exciting challenges
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-md bg-white/5 border-white/10 shadow-2xl rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Send className="text-white" size={20} />
                    </div>
                    Send a Message
                  </CardTitle>
                  <p className="text-gray-400 text-lg">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="backdrop-blur-md bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl h-12 transition-all duration-300 hover:bg-white/15"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="backdrop-blur-md bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl h-12 transition-all duration-300 hover:bg-white/15"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white font-medium">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company or organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="backdrop-blur-md bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl h-12 transition-all duration-300 hover:bg-white/15"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about the opportunity or ask any questions you have..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="backdrop-blur-md bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500/20 resize-none rounded-xl transition-all duration-300 hover:bg-white/15"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 text-lg font-semibold group transition-all duration-300 disabled:opacity-50 hover:scale-105 shadow-lg hover:shadow-orange-500/25 rounded-2xl border border-orange-400/30"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-20 text-center">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-orange-500/10 border-orange-500/30 shadow-2xl rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles className="text-orange-400" size={28} />
                  <h3 className="text-3xl font-bold text-white">Ready to Enhance Your Security?</h3>
                  <Shield className="text-orange-400" size={28} />
                </div>
                <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                  Let's discuss how my cybersecurity expertise can help protect your organization's digital assets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text mb-2">24h</div>
                    <div className="text-gray-400 font-medium">Response Time</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text mb-2">3+</div>
                    <div className="text-gray-400 font-medium">Years Experience</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text mb-2">100%</div>
                    <div className="text-gray-400 font-medium">Commitment</div>
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

export default Contact;