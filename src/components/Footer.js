import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 border-b border-gray-800 pb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Haro Bashar</h3>
            <p className="text-gray-400">
              Python Developer specializing in automation and web development solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Haro321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/haro-bashar-06610130a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 text-center">
          <p className="flex items-center justify-center text-gray-400 mb-4">
            <span>Built with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>and</span>
            <Coffee className="w-4 h-4 mx-2 text-amber-500" />
            <span>by Haro Bashar</span>
          </p>
          <p className="flex items-center justify-center text-gray-500 text-sm">
            <Code className="w-4 h-4 mr-2" />
            <span>
              © {new Date().getFullYear()} All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;