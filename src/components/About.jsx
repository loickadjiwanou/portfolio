import React from 'react';
import { User, Calendar, MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              About <span className="text-lime-400">Me</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Passionate about leveraging technology to build innovative and impactful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <User className="h-5 w-5 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Full Name</p>
                      <p className="text-white font-semibold">{personal.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <Calendar className="h-5 w-5 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Date of Birth</p>
                      <p className="text-white font-semibold">{personal.birthDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <MapPin className="h-5 w-5 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white font-semibold">{personal.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-lime-400/10 p-3 rounded-lg">
                      <Globe className="h-5 w-5 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Languages</p>
                      <p className="text-white font-semibold">French (Fluent), English (Good)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {['Robotics', 'Artificial Intelligence', 'Formula 1', 'Sport'].map((interest) => (
                    <span
                      key={interest}
                      className="bg-lime-400/10 text-lime-400 px-4 py-2 rounded-full text-sm font-medium border border-lime-400/20"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio and Education */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  {personal.bio}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  With strong expertise in mobile development and backend technologies,
                  I specialize in creating seamless user experiences across iOS and Android platforms. 
                  My experience spans from enterprise ticketing solutions to agricultural management systems, 
                  always focusing on innovative solutions that solve real-world problems.
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-lime-400 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-lime-400 rounded-full -left-2 top-1"></div>
                      <h4 className="font-semibold text-white text-lg">{edu.degree}</h4>
                      <p className="text-lime-400 font-medium">{edu.institution}</p>
                      <p className="text-slate-400">{edu.location}</p>
                      <p className="text-slate-500 text-sm">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;