import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#apps');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-8">
            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">Available for new opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              {personal.name.split(' ')[0]}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-300 mb-8">
            {personal.title}
          </h2>

          {/* Bio */}
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personal.bio}
          </p>

          {/* Location and Contact Info */}
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-12 text-slate-400">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-lime-400" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-lime-400" />
              <span>{personal.email}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-400/25"
            >
              View My Work
            </button>
            <a
              href={`mailto:${personal.email}`}
              className="border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={`https://github.com/${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-lime-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href={`https://linkedin.com/in/${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-lime-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="text-slate-400 hover:text-lime-400 transition-colors duration-300 animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;