import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just create a mailto link with the form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Loick,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Get In <span className="text-lime-400">Touch</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Let's discuss your next software or mobile app project, or any collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-white font-semibold hover:text-lime-400 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-white font-semibold hover:text-lime-400 transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white font-semibold">{personal.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href={`https://github.com/${personal.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 p-3 rounded-lg text-slate-300 hover:text-lime-400 hover:bg-slate-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${personal.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 p-3 rounded-lg text-slate-300 hover:text-lime-400 hover:bg-slate-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-lime-400 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-white">Available for Work</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I'm currently available for new software development projects and collaborations. 
                  Whether you need a full-stack mobile solution or want to discuss your app idea, 
                  I'd love to hear from you!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-lime-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-lime-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-400 text-slate-900 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>I'll get back to you within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;