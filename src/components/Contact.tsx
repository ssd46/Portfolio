
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll respond as soon as possible.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-angular mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential job opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 border-t-4 border-t-java flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-java/10 mb-4">
              <Mail className="h-6 w-6 text-java" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-gray-700">contact@johndoe.dev</p>
            <a href="mailto:contact@johndoe.dev" className="text-java hover:underline mt-2">Send Email</a>
          </Card>
          
          <Card className="p-6 border-t-4 border-t-angular flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-angular/10 mb-4">
              <Phone className="h-6 w-6 text-angular" />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
            <a href="tel:+15551234567" className="text-angular hover:underline mt-2">Call Now</a>
          </Card>
          
          <Card className="p-6 border-t-4 border-t-java flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-java/10 mb-4">
              <MapPin className="h-6 w-6 text-java" />
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-700">San Francisco, California</p>
            <p className="text-java mt-2">Available for remote work</p>
          </Card>
        </div>
        
        <Card className="mt-12 p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-java hover:bg-java-dark"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
