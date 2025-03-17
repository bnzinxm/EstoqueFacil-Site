import React, { useState } from 'react';
import { Search, Bell, Menu, X, Sun, Moon, HelpCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-blue-600/95 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Caixa Fácil" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-semibold text-white">Estoque Fácil</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'scale-105' : ''
            }`}>
              <input
                type="text"
                placeholder="Busque provedores, produtos..."
                className="w-full bg-white/10 text-white placeholder-white/60 border-2 border-white/20 rounded-full py-2 px-4 pl-12 focus:outline-none focus:border-white/40 transition-all"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white/80 hover:text-white transition-colors">
              <HelpCircle className="h-6 w-6" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
              <a href="/login">Login</a>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-colors">
            <a href="/register">Registrar-se</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
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
              className="w-full bg-white/10 text-white placeholder-white/60 border-2 border-white/20 rounded-full py-2 px-4 pl-12 focus:outline-none focus:border-white/40"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-blue-700`}>
        <div className="px-4 py-4 space-y-4">
          <button className="w-full text-left text-white/80 hover:text-white py-2">Login</button>
          <button className="w-full text-left text-white/80 hover:text-white py-2">Cadastrar-se</button>
          <button className="w-full text-left text-white/80 hover:text-white py-2">Suporte</button>
          <button className="w-full text-left text-white/80 hover:text-white py-2">Notificações</button>
          <button
            onClick={toggleTheme}
            className="w-full text-left text-white/80 hover:text-white py-2 flex items-center"
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