import React, { useState } from 'react';
import { Search, Bell, Menu, X, Sun, Moon, HelpCircle, Package } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <span className={`ml-2 text-xl font-semibold ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>Estoque Fácil</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'scale-105' : ''
            }`}>
              <input
                type="text"
                placeholder="Busque provedores, produtos..."
                className={`w-full ${
                  isScrolled 
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                    : 'bg-white/10 text-white placeholder-white/60'
                } border-2 border-transparent rounded-full py-2 px-4 pl-12 focus:outline-none focus:border-blue-500 transition-all`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${
                isScrolled ? 'text-gray-400' : 'text-white/60'
              }`} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className={`${
              isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/80'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
              <HelpCircle className="h-6 w-6" />
            </button>
            <button className={`${
              isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/80'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative`}>
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center text-white">
                3
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className={`${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/80'
              } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <button className={`px-4 py-2 text-sm font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                : 'text-white/90 hover:text-white'
            } transition-colors`}>
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Cadastrar-se
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Busque provedores, produtos..."
              className={`w-full ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                  : 'bg-white/10 text-white placeholder-white/60'
              } border-2 border-transparent rounded-full py-2 px-4 pl-12 focus:outline-none focus:border-blue-500`}
            />
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${
              isScrolled ? 'text-gray-400' : 'text-white/60'
            }`} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white dark:bg-gray-800 shadow-lg`}>
        <div className="px-4 py-4 space-y-4">
          <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Login</button>
          <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Cadastrar-se</button>
          <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Suporte</button>
          <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Notificações</button>
          <button
            onClick={toggleTheme}
            className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 flex items-center"
          >
            {isDark ? (
              <>
                <Sun className="h-5 w-5 mr-2" /> Modo Claro
              </>
            ) : (
              <>
                <Moon className="h-5 w-5 mr-2" /> Modo Escuro
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}