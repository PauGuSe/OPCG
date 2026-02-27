
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { QuestionData, ChartType } from '../types';

interface ChartCardProps {
  question: QuestionData;
  index: number;
}

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

const ChartCard: React.FC<ChartCardProps> = ({ question, index }) => {
  const isPie = question.type === ChartType.PIE;
  const isCustom = question.type === ChartType.CUSTOM;
  const isAlert = ['P6', 'P7', 'P8', 'P9', 'P10', 'P11'].includes(question.id);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-lg text-sm">
          <p className="font-bold text-slate-800">{payload[0].name}</p>
          <p className="text-blue-600 font-semibold">{payload[0].value} Respuestas</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomContent = () => {
    if (question.id === 'P11') {
      return (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="bg-amber-50/80 border border-amber-200 p-6 rounded-xl flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-table-cells text-amber-600 text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-1">Matriz de Carga</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                Complejo adaptar la matriz de carga ya que contiene columnas y parámetros que no son propios del servicio.
              </p>
            </div>
          </div>

          <div className="bg-blue-50/80 border border-blue-200 p-6 rounded-xl flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-file-excel text-blue-600 text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Planilla y Metodología</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                La planilla es muy grande. Tiene campos que no usamos como Servicio (se comparte con otros servicios que la usan), es demasiado manual la carga. Difícil de entender para los encargados (metodología).
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (question.id === 'P24') {
      const frustrations = [
        { icon: 'fa-hand-pointer', text: 'Mucho trabajo manual y pocos reportes.', color: 'bg-red-50', iconColor: 'text-red-600' },
        { icon: 'fa-clock-rotate-left', text: 'Plataforma “antigua”, compleja y poco amigable.', color: 'bg-amber-50', iconColor: 'text-amber-600' },
        { icon: 'fa-cloud-arrow-up', text: 'Carga de datos y evidencias: engorrosa, lenta y con poca ayuda.', color: 'bg-blue-50', iconColor: 'text-blue-600' },
        { icon: 'fa-user-shield', text: 'Acceso, disponibilidad y perfil de usuario.', color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
        { icon: 'fa-eye-slash', text: 'Falta de visibilidad y de estado de la información.', color: 'bg-slate-50', iconColor: 'text-slate-600' },
        { icon: 'fa-diagram-project', text: 'Configuración de indicadores y mezcla de información.', color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
        { icon: 'fa-bell', text: 'Notificaciones y retroalimentación.', color: 'bg-violet-50', iconColor: 'text-violet-600' },
      ];

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {frustrations.map((f, i) => (
            <div key={i} className={`${f.color} border border-slate-100 p-4 rounded-xl flex gap-4 items-center shadow-sm hover:shadow-md transition-all`}>
              <div className={`w-10 h-10 rounded-lg ${f.color.replace('50', '100')} flex items-center justify-center flex-shrink-0`}>
                <i className={`fa-solid ${f.icon} ${f.iconColor} text-lg`}></i>
              </div>
              <p className="text-slate-700 text-sm font-medium leading-tight">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (question.id === 'P25') {
      const urgentFeatures = [
        { 
          icon: 'fa-gauge-high', 
          title: 'Gestión y Alertas', 
          text: 'Optimizar la carga de evidencias, generar reportes automáticos y activar notificaciones proactivas de plazos y aprobaciones.', 
          color: 'bg-blue-50', 
          iconColor: 'text-blue-600' 
        },
        { 
          icon: 'fa-users-gear', 
          title: 'Acceso Universal', 
          text: 'Universalizar el acceso para suplentes y equipos de apoyo, garantizando disponibilidad continua durante todo el ciclo institucional.', 
          color: 'bg-indigo-50', 
          iconColor: 'text-indigo-600' 
        },
        { 
          icon: 'fa-wand-magic-sparkles', 
          title: 'Modernización', 
          text: 'Simplificar la interfaz con un diseño moderno, lenguaje institucional claro y reducción de la carga técnica innecesaria.', 
          color: 'bg-emerald-50', 
          iconColor: 'text-emerald-600' 
        },
        { 
          icon: 'fa-link-slash', 
          title: 'Integración', 
          text: 'Eliminar la duplicidad de tareas integrando el SIG con otros flujos de trabajo para sustituir el uso excesivo de planillas externas.', 
          color: 'bg-amber-50', 
          iconColor: 'text-amber-600' 
        },
        { 
          icon: 'fa-chart-line', 
          title: 'Adopción', 
          text: 'Fomentar el uso del sistema demostrando beneficios claros para aquellos perfiles que aún no perciben la urgencia del cambio.', 
          color: 'bg-slate-50', 
          iconColor: 'text-slate-600' 
        },
      ];

      return (
        <div className="space-y-4 mt-4">
          {urgentFeatures.map((f, i) => (
            <div key={i} className={`${f.color} border border-slate-100 p-5 rounded-2xl flex gap-5 items-start shadow-sm hover:shadow-md transition-all`}>
              <div className={`w-12 h-12 rounded-xl ${f.color.replace('50', '100')} flex items-center justify-center flex-shrink-0`}>
                <i className={`fa-solid ${f.icon} ${f.iconColor} text-xl`}></i>
              </div>
              <div>
                <h5 className={`font-bold ${f.iconColor.replace('600', '900')} text-sm mb-1`}>{f.title}</h5>
                <p className="text-slate-700 text-xs leading-relaxed">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (question.id === 'P28') {
      const proposals = [
        { 
          category: 'BI / Dashboards y Analítica', 
          examples: 'Power BI, Tableau, MicroStrategy, QlikView, etc.',
          icon: 'fa-chart-pie',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50'
        },
        { 
          category: 'ERP / Sistemas Integrados', 
          examples: 'CGU, SAP, SAP B1, DEFONTANA, ERP Ellipse.',
          icon: 'fa-server',
          color: 'text-indigo-600',
          bgColor: 'bg-indigo-50'
        },
        { 
          category: 'Oficina y Colaboración', 
          examples: 'Excel, Trello, Planner, Project, Power Automate + Teams.',
          icon: 'fa-users-rectangle',
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-50'
        }
      ];

      return (
        <div className="flex flex-col h-full">
          <div className="h-48 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={question.data} layout="vertical" margin={{ left: 20, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 11 }}
                  width={120}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                  {question.data.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Plataformas Propuestas:</h5>
            {proposals.map((p, i) => (
              <div key={i} className={`${p.bgColor} border border-slate-100 p-3 rounded-xl flex gap-4 items-center`}>
                <div className={`w-8 h-8 rounded-lg ${p.bgColor.replace('50', '100')} flex items-center justify-center flex-shrink-0`}>
                  <i className={`fa-solid ${p.icon} ${p.color} text-sm`}></i>
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-800">{p.category}</h6>
                  <p className="text-[11px] text-slate-600 leading-tight">{p.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (question.id === 'P29') {
      const comments = [
        { 
          icon: 'fa-handshake-angle', 
          title: 'Colaboración', 
          text: 'Existe un reconocimiento positivo al apoyo del nivel central y una alta disposición de los usuarios para colaborar en el proceso de modernización.', 
          color: 'bg-blue-50', 
          iconColor: 'text-blue-600' 
        },
        { 
          icon: 'fa-chess-knight', 
          title: 'Gestión Estratégica', 
          text: 'El sistema tiene un potencial probado para el seguimiento de agendas y proyectos estratégicos que actualmente se encuentra subutilizado.', 
          color: 'bg-indigo-50', 
          iconColor: 'text-indigo-600' 
        },
        { 
          icon: 'fa-comments', 
          title: 'Acompañamiento', 
          text: 'Se requiere fortalecer la comunicación y el apoyo humano, reconociendo que los encargados suelen compartir esta función con otras tareas críticas.', 
          color: 'bg-emerald-50', 
          iconColor: 'text-emerald-600' 
        },
        { 
          icon: 'fa-file-circle-exclamation', 
          title: 'Fluidez de Uso', 
          text: 'La carga de evidencias y la búsqueda de información histórica se perciben como procesos engorrosos que limitan la gestión fluida.', 
          color: 'bg-amber-50', 
          iconColor: 'text-amber-600' 
        },
        { 
          icon: 'fa-network-wired', 
          title: 'Interoperabilidad', 
          text: 'Es fundamental integrar el SIG con otros sistemas (Presupuesto, DIPRES) para avanzar hacia un Estado Digital y eliminar planillas paralelas.', 
          color: 'bg-violet-50', 
          iconColor: 'text-violet-600' 
        },
        { 
          icon: 'fa-circle-info', 
          title: 'Otros Comentarios', 
          text: 'Un grupo de usuarios reporta poco uso o falta de acceso, lo que genera una visión neutra sobre las funcionalidades actuales.', 
          color: 'bg-slate-50', 
          iconColor: 'text-slate-600' 
        },
      ];

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {comments.map((c, i) => (
            <div key={i} className={`${c.color} border border-slate-100 p-4 rounded-2xl flex gap-4 items-start shadow-sm hover:shadow-md transition-all`}>
              <div className={`w-10 h-10 rounded-xl ${c.color.replace('50', '100')} flex items-center justify-center flex-shrink-0`}>
                <i className={`fa-solid ${c.icon} ${c.iconColor} text-lg`}></i>
              </div>
              <div>
                <h5 className={`font-bold ${c.iconColor.replace('600', '900')} text-xs mb-1`}>{c.title}</h5>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col xl:flex-row min-h-[500px]">
      {/* Chart Section */}
      <div className={`xl:w-3/5 p-6 md:p-8 flex flex-col ${isAlert ? 'bg-red-500/10' : 'bg-white'}`}>
        <div className="flex items-start gap-4 mb-6">
          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
            {question.id}
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 leading-snug">{question.title}</h3>
            <p className="text-slate-500 text-sm mt-1">{question.description}</p>
          </div>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full tracking-wider">
            {question.category}
          </span>
        </div>

        <div className="flex-1 min-h-[300px] w-full mt-4">
          {isCustom ? (
            renderCustomContent()
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              {isPie ? (
                <PieChart>
                  <Pie
                    data={question.data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {question.data.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              ) : (
                <BarChart data={question.data} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    angle={-25}
                    textAnchor="end"
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                    {question.data.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Analysis Section */}
      <div className="xl:w-2/5 bg-slate-50 border-t xl:border-t-0 xl:border-l border-slate-200 p-8 flex flex-col justify-center">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <i className="fa-solid fa-magnifying-glass-chart text-blue-500"></i>
          Análisis del Resultado
        </h4>
        
        <div className="space-y-6">
          <div className="space-y-4">
            {question.analysis.map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {question.recommendations && (
            <div className="pt-6 border-t border-slate-200">
              <h5 className="text-xs font-bold text-blue-600 uppercase mb-4 tracking-wide">Recomendaciones:</h5>
              <div className="space-y-3">
                {question.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <i className="fa-solid fa-lightbulb text-blue-400 text-xs mt-1"></i>
                    <p className="text-slate-800 text-xs font-medium leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
