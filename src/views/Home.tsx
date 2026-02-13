
import React from 'react';
import { StatsSummary } from '../types';

interface HomeProps {
  onStart: () => void;
  stats: StatsSummary;
}

const Home: React.FC<HomeProps> = ({ onStart, stats }) => {
  return (
    <div className="max-w-5xl mx-auto py-10 flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6 max-w-2xl">
        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Reporte Diagnóstico 2025
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          Anexo 1: <span className="text-blue-600">Análisis Diagnóstico</span>
          <span className="block text-2xl md:text-3xl text-slate-400 mt-2 font-bold italic">- Formulario -</span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Análisis detallado de las respuestas al formulario de Microsoft sobre la modernización de la Oficina de Planificación y Control de Gestión.
        </p>
        <div className="pt-8">
          <button 
            onClick={onStart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
          >
            Explorar Resultados
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
        <StatItem 
          label="Funcionarios Convocados" 
          value="63" 
          icon="fa-users" 
          color="bg-slate-100 text-slate-600" 
        />
        <StatItem 
          label="Total Participantes" 
          value={stats.totalParticipants.toString()} 
          icon="fa-check-double" 
          color="bg-blue-100 text-blue-600" 
          subtext={`Tasa de participación: ${stats.participationRate}`}
        />
        <StatItem 
          label="Titulares (Participación)" 
          value={stats.titularesRate} 
          icon="fa-user-tie" 
          color="bg-green-100 text-green-600" 
          subtext="Universo Altamente Representativo"
        />
        <StatItem 
          label="Suplentes (Participación)" 
          value={stats.suplentesRate} 
          icon="fa-user-clock" 
          color="bg-orange-100 text-orange-600" 
          subtext="Oportunidad de Fortalecimiento"
        />
      </div>

      {/* General Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <i className="fa-solid fa-circle-info text-blue-500"></i>
            Contexto General
          </h3>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              El proceso de levantamiento se realizó entre el <span className="font-semibold text-slate-800">07 de agosto y el 15 de septiembre</span>, con el objetivo de diagnosticar el estado actual de la gestión y el uso de herramientas tecnológicas en la institución.
            </p>
            <p>
              La alta participación de los titulares (<span className="text-green-600 font-bold">94%</span>) otorga una solidez estratégica a los resultados, permitiendo tomar decisiones informadas sobre el futuro del Sistema Integrado de Gestión (SIG).
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <i className="fa-solid fa-bullseye text-blue-400"></i>
            Hallazgos Clave
          </h3>
          <ul className="space-y-5">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-1 text-blue-400 text-xs"></i>
              </div>
              <p className="text-sm text-slate-300">Existe una clara brecha entre la <span className="text-white font-medium">carga de datos</span> y su uso para la <span className="text-white font-medium">toma de decisiones</span>.</p>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-2 text-blue-400 text-xs"></i>
              </div>
              <p className="text-sm text-slate-300">La percepción de la plataforma SIG es considerada una <span className="text-white font-medium">obligación administrativa (repositorio)</span>, pero aporta poco valor en <span className="text-white font-medium">visualización, elaboración de reportes</span> y <span className="text-white font-medium">toma de decisiones</span>.</p>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-3 text-blue-400 text-xs"></i>
              </div>
              <p className="text-sm text-slate-300">Demanda latente por <span className="text-white font-medium">acceso permanente</span> y visualizaciones dinámicas (dashboards).</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

interface StatItemProps {
  label: string;
  value: string;
  icon: string;
  color: string;
  subtext?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, icon, color, subtext }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-xl mb-4`}>
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <span className="text-3xl font-black text-slate-800 mb-1">{value}</span>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    {subtext && <p className="text-[10px] text-slate-500 mt-2 italic">{subtext}</p>}
  </div>
);

export default Home;
