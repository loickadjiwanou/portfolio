import React from 'react';
import { Smartphone, Server, Database, Code, GitBranch, Settings } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-8 w-8" />,
      skills: skills.mobile,
      color: 'lime'
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-8 w-8" />,
      skills: skills.backend,
      color: 'emerald'
    },
    {
      title: 'Databases',
      icon: <Database className="h-8 w-8" />,
      skills: skills.databases,
      color: 'blue'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="h-8 w-8" />,
      skills: skills.programming,
      color: 'purple'
    },
    {
      title: 'Code Management',
      icon: <GitBranch className="h-8 w-8" />,
      skills: skills.codeManagement,
      color: 'orange'
    },
    {
      title: 'Others',
      icon: <Settings className="h-8 w-8" />,
      skills: [...skills.others, ...skills.systems],
      color: 'pink'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      lime: 'bg-lime-400/10 text-lime-400 border-lime-400/20',
      emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
      blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
      purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
      orange: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
      pink: 'bg-pink-400/10 text-pink-400 border-pink-400/20'
    };
    return colors[color] || colors.lime;
  };

  const getIconColorClasses = (color) => {
    const colors = {
      lime: 'bg-lime-400/10 text-lime-400',
      emerald: 'bg-emerald-400/10 text-emerald-400',
      blue: 'bg-blue-400/10 text-blue-400',
      purple: 'bg-purple-400/10 text-purple-400',
      orange: 'bg-orange-400/10 text-orange-400',
      pink: 'bg-pink-400/10 text-pink-400'
    };
    return colors[color] || colors.lime;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Technical <span className="text-lime-400">Skills</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Full mobile development stack expertise, along with solid experience in web development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${getIconColorClasses(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Strengths */}
          <div className="mt-16 bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Strengths</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-lime-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-lime-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Cross-Platform Mobile</h4>
                <p className="text-slate-400">Expert in React Native and Expo, with strong expertise in native iOS/Android development</p>
              </div>
              
              <div className="text-center">
                <div className="bg-lime-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-lime-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Development</h4>
                <p className="text-slate-400">Complete mobile solutions from backend APIs to user interfaces</p>
              </div>
              
              <div className="text-center">
                <div className="bg-lime-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-lime-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">System Integration</h4>
                <p className="text-slate-400">Seamless integration with third-party services and offline capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;