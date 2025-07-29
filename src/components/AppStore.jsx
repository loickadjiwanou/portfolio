import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Github, Smartphone, X } from 'lucide-react';
import { portfolioData, appCategories } from '../data/mock';

const AppStore = () => {
  const { apps } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  // Filter apps based on category and search term
  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    const colors = {
      'Live': 'bg-lime-400/10 text-lime-400 border-lime-400/20',
      'Demo': 'bg-blue-400/10 text-blue-400 border-blue-400/20',
      'Completed': 'bg-purple-400/10 text-purple-400 border-purple-400/20'
    };
    return colors[status] || colors['Live'];
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Business': 'bg-emerald-400/10 text-emerald-400',
      'Travel': 'bg-blue-400/10 text-blue-400',
      'Agriculture': 'bg-green-400/10 text-green-400',
      'Education': 'bg-purple-400/10 text-purple-400',
      'Social': 'bg-pink-400/10 text-pink-400'
    };
    return colors[category] || colors['Business'];
  };

  return (
    <section id="apps" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              App <span className="text-lime-400">Store</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore my portfolio of mobile and web applications across different industries
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-full pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2.5">
              {appCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-lime-400 text-slate-900'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* App Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={app.images[0]}
                    alt={app.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(app.category)}`}>
                      {app.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{app.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {app.techStack.length > 3 && (
                      <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                        +{app.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Client */}
                  <p className="text-slate-500 text-sm mb-4">Client: {app.client}</p>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedApp(app)}
                    className="w-full bg-lime-400 text-slate-900 py-3 rounded-full font-bold hover:bg-lime-300 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Smartphone className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredApps.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700">
                <Smartphone className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No apps found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}

          <div className="mt-20">
            <p className="text-base text-slate-400 max-w-2xl mx-auto text-center mb-2">
              Curious to see more of my global software development projects?
            </p>
            <p className="text-base text-slate-400 max-w-2xl mx-auto text-center mb-6">
              Visit my GitHub: <a href="https://github.com/loickadjiwanou" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:underline">loickadjiwanou</a>
            </p>
            <p className="text-base text-slate-400 max-w-2xl mx-auto text-center mb-8">
              Or download my mobile app <span className="text-lime-400 font-semibold">Storeit</span> to explore my full library of mobile apps, web solutions, and backend projects.
            </p>
            <div className="flex justify-center items-center gap-4 mt-2">
              <div className="relative flex flex-col items-center">
                <a href="#" className="cursor-not-allowed opacity-70" onClick={(e) => e.preventDefault()}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
                <span className="text-xs text-yellow-400 mt-1 font-semibold">App in development</span>
              </div>
              <div className="relative flex flex-col items-center">
                <a href="#" className="cursor-not-allowed opacity-70" onClick={(e) => e.preventDefault()}>
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
                <span className="text-xs text-yellow-400 mt-1 font-semibold">App in development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white">{selectedApp.name}</h3>
              <button
                onClick={() => setSelectedApp(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Images */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {selectedApp.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedApp.name} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* App Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Description</h4>
                  <p className="text-slate-300 leading-relaxed mb-6">{selectedApp.longDescription}</p>
                  
                  <h4 className="text-xl font-semibold text-white mb-4">Features</h4>
                  <ul className="space-y-2">
                    {selectedApp.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedApp.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-lime-400/10 text-lime-400 px-3 py-2 rounded-full text-sm border border-lime-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400 font-medium">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedApp.status)}`}>
                        {selectedApp.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400 font-medium">Category:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedApp.category)}`}>
                        {selectedApp.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400 font-medium">Client:</span>
                      <span className="text-white">{selectedApp.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AppStore;