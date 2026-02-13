
import React, { useState } from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = () => {
    const element = document.getElementById('report-content');
    if (!element) return;

    setIsExporting(true);

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'Reporte_Diagnostico_SIG_2025.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        letterRendering: true,
        logging: false 
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Usar la librería global cargada en index.html
    const html2pdf = (window as any).html2pdf;

    html2pdf().set(opt).from(element).save().then(() => {
      setIsExporting(false);
    }).catch((err: any) => {
      console.error('Error generando PDF:', err);
      setIsExporting(false);
      // Fallback a impresión nativa si falla
      window.print();
    });
  };

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 z-30 sticky top-0 no-print">
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

      <nav className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={onNavigateHome}
          className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
        >
          Inicio
        </button>
        <button 
          onClick={handleExportPDF}
          disabled={isExporting}
          className={`${
            isExporting ? 'bg-slate-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'
          } text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all flex items-center gap-2 shadow-sm active:scale-95`}
        >
          <i className={`fa-solid ${isExporting ? 'fa-circle-notch fa-spin' : 'fa-file-pdf'}`}></i>
          <span className="hidden sm:inline">
            {isExporting ? 'Generando PDF...' : 'Exportar PDF'}
          </span>
          <span className="sm:hidden">{isExporting ? '...' : 'PDF'}</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
