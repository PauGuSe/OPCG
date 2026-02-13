
import React from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 z-30 sticky top-0">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={onNavigateHome}
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl shadow-md group-hover:bg-blue-700 transition-colors flex-shrink-0">
          <i className="fa-solid fa-chart-line"></i>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-bold text-slate-800 text-lg md:text-xl leading-tight truncate">
            OPCG
          </h2>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider whitespace-nowrap">
            Diagnóstico Modernización - Etapa 1
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <button 
          onClick={onNavigateHome}
          className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
        >
          Inicio
        </button>
        <a 
          href="#" 
          className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          Exportar PDF
        </a>
      </nav>
    </header>
  );
};

export default Header;
