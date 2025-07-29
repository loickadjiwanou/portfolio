import React from 'react';
import { Github, Linkedin, Mail, Smartphone, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/mock';
import myImage from '../assets/moi2.png';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* <div className="bg-lime-400 p-2 rounded-lg">
                  <Smartphone className="h-6 w-6 text-slate-900" />
                </div> */}
                <div 
                  className="bg-lime-400 p-2 rounded-lg h-10 w-10 bg-cover bg-center"
                  style={{backgroundImage: `url(${myImage})`}}
                >
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">{personal.name}</h3>
                  <p className="text-slate-400">{personal.title}</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Building innovative software solutions that bridge technology and user experience. 
                Passionate about creating apps that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'App Store', href: '#apps' },
                  { name: 'Cv', href: '#cv' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-slate-400 hover:text-lime-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center space-x-3 text-slate-400 hover:text-lime-400 transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span>{personal.email}</span>
                </a>
                <p className="flex items-center space-x-3 text-slate-400">
                  <span>📱</span>
                  <span>{personal.phone}</span>
                </p>
                <p className="flex items-center space-x-3 text-slate-400">
                  <span>📍</span>
                  <span>{personal.location}</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href={`https://github.com/${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg text-slate-400 hover:text-lime-400 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={`https://linkedin.com/in/${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg text-slate-400 hover:text-lime-400 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} {personal.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">Built with React & Tailwind CSS</span>
              <button
                onClick={scrollToTop}
                className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:text-lime-400 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Availability Status */}
          <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
              <span className="text-lime-400 font-semibold">Available for New Projects</span>
            </div>
            <p className="text-slate-400 text-sm">
              Ready to bring your software ideas to life. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;