import React from 'react';
import { Download, FileText } from 'lucide-react';

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/loick-adjiwanou-cv.pdf';
    link.download = 'loick-adjiwanou-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              Resume
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Download my complete resume to discover in detail my professional background, 
            skills and achievements.
          </p>

          {/* CV Preview Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Resume
              </h3>
              
              <p className="text-slate-600 mb-6 text-center">
                Complete PDF document with all my professional information
              </p>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-400/25 flex items-center space-x-3"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-slate-500 text-sm">
            <p>PDF Format • Last updated: {new Date().toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;