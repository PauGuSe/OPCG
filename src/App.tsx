
import React, { useState, useMemo } from 'react';
import { questions, statsSummary, categories } from './data';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChartCard from './components/ChartCard';
import Home from './views/Home';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Ordenación natural de preguntas para asegurar el orden P1, P2, ..., P10, P11
  const sortedAndFilteredQuestions = useMemo(() => {
    const filtered = selectedCategory === 'Todos' 
      ? questions 
      : questions.filter(q => q.category === selectedCategory);
    
    return [...filtered].sort((a, b) => {
      return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
    });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigateHome={() => setCurrentView('home')} />
      
      <div className="flex-1 flex overflow-hidden">
        {currentView === 'dashboard' && (
          <Sidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50">
          <div id="report-content">
            {/* Encabezado exclusivo para el PDF */}
            <div className="print-header mb-10 text-center border-b-4 border-blue-600 pb-6">
              <h1 className="text-4xl font-black text-blue-700">Anexo 1: Análisis Diagnóstico</h1>
              <h2 className="text-2xl font-bold text-slate-600 mt-2">Reporte Completo de Resultados Modernización 2025</h2>
              <div className="flex justify-between items-end mt-8">
                <p className="text-slate-500 font-medium">Oficina de Planificación y Control de Gestión (OPCG)</p>
                <p className="text-xs text-slate-400">Fecha de emisión: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            {currentView === 'home' ? (
              <Home onStart={() => setCurrentView('dashboard')} stats={statsSummary} />
            ) : (
              <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-800">Visualización de Resultados</h1>
                    <p className="text-slate-500 mt-1">
                      Mostrando {sortedAndFilteredQuestions.length} indicadores en orden secuencial
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm">
                    <span className="text-slate-500 whitespace-nowrap">Categoría:</span>
                    <div className="relative flex items-center">
                      <select 
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="lg:hidden font-bold text-blue-600 bg-transparent border-none p-0 pr-5 focus:ring-0 cursor-pointer appearance-none"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <span className="hidden lg:block font-bold text-blue-600">{selectedCategory}</span>
                      <i className="fa-solid fa-chevron-down absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-blue-400 lg:hidden pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-12 pb-20">
                  {sortedAndFilteredQuestions.map((q, idx) => (
                    <React.Fragment key={q.id}>
                      {q.id === 'P6' && (
                        <div className="flex items-center gap-3 p-5 bg-white border border-slate-200 rounded-xl shadow-sm border-l-4 border-l-red-400">
                          <div className="w-6 h-6 bg-red-500/10 border border-red-200 rounded flex-shrink-0"></div>
                          <p className="text-slate-700 font-semibold text-sm">
                            Desde la pregunta 6 hasta la 11 las respuestas fueron proporcionadas por los ADMIN de plataforma
                          </p>
                        </div>
                      )}
                      <ChartCard question={q} index={idx + 1} />
                    </React.Fragment>
                  ))}
                </div>
                
                {sortedAndFilteredQuestions.length === 0 && (
                  <div className="text-center py-20 no-print">
                    <div className="text-slate-300 text-6xl mb-4">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h3 className="text-xl font-medium text-slate-600">No hay indicadores en esta categoría</h3>
                    <button 
                      onClick={() => setSelectedCategory('Todos')}
                      className="mt-4 text-blue-600 hover:underline"
                    >
                      Ver todos los resultados
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
