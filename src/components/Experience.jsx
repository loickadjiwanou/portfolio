import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const { experience } = portfolioData;

  const getTypeColor = (type) => {
    const colors = {
      'Full-time': 'bg-lime-400/10 text-lime-400 border-lime-400/20',
      'Freelance': 'bg-blue-400/10 text-blue-400 border-blue-400/20',
      'Internship': 'bg-purple-400/10 text-purple-400 border-purple-400/20'
    };
    return colors[type] || colors['Full-time'];
  };

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Professional <span className="text-lime-400">Experience</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Building innovative mobile solutions across various industries
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center relative z-10">
                    <Briefcase className="h-8 w-8 text-slate-900" />
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-slate-900/50 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                        <h4 className="text-xl text-lime-400 font-semibold">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center space-x-4 text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-4">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 text-center">
              <div className="text-3xl font-black text-lime-400 mb-2">3+</div>
              <p className="text-slate-300 font-medium">Years Experience</p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 text-center">
              <div className="text-3xl font-black text-lime-400 mb-2">15+</div>
              <p className="text-slate-300 font-medium">Mobile Apps Built</p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 text-center">
              <div className="text-3xl font-black text-lime-400 mb-2">8+</div>
              <p className="text-slate-300 font-medium">Backend & Web Solutions</p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 text-center">
              <div className="text-3xl font-black text-lime-400 mb-2">5</div>
              <p className="text-slate-300 font-medium">Different Industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;