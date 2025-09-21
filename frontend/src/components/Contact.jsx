import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from 'lucide-react';
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
        title: "Error",
        description: "Failed to send message. Please try again.",
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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <span className="text-orange-500 font-medium tracking-wider">GET IN TOUCH</span>
              <div className="w-12 h-px bg-gradient-to-r from-orange-600 to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss cybersecurity opportunities or have questions about my experience? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="bg-black border-gray-800 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Mail className="text-orange-500" size={28} />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Linkedin size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                      <a 
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                      >
                        Professional Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-medium group transition-all duration-300"
                >
                  <Download size={20} className="mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 text-lg font-medium transition-all duration-300"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn Profile
                </Button>
              </div>

              {/* Availability Status */}
              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30 mt-8">
                <CardContent className="p-6 text-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse"></div>
                  <h4 className="text-white font-semibold mb-2">Available for Opportunities</h4>
                  <p className="text-gray-300 text-sm">
                    Currently seeking new cybersecurity roles and exciting challenges
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
                  <p className="text-gray-400">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company or organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about the opportunity or ask any questions you have..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-medium group transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Security?</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how my cybersecurity expertise can help protect your organization's digital assets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500 mb-2">24h</div>
                    <div className="text-gray-400 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500 mb-2">3+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500 mb-2">100%</div>
                    <div className="text-gray-400 text-sm">Commitment</div>
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