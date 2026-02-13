
import React, { useState, useMemo } from 'react';
import { questions, statsSummary, categories } from './data';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChartCard from './components/ChartCard';
import Home from './views/Home';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'Todos') return questions;
    return questions.filter(q => q.category === selectedCategory);
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

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          {currentView === 'home' ? (
            <Home onStart={() => setCurrentView('dashboard')} stats={statsSummary} />
          ) : (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800">Visualización de Resultados</h1>
                  <p className="text-slate-500 mt-1">
                    Mostrando {filteredQuestions.length} indicadores en la categoría: <span className="font-semibold">{selectedCategory}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm">
                  <span className="text-slate-500">Muestra Total:</span>
                  <span className="font-bold text-blue-600">46 Funcionarios</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-12 pb-20">
                {filteredQuestions.map((q, idx) => (
                  <ChartCard key={q.id} question={q} index={idx + 1} />
                ))}
              </div>
              
              {filteredQuestions.length === 0 && (
                <div className="text-center py-20">
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
        </main>
      </div>
    </div>
  );
};

export default App;
