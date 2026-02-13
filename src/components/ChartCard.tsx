
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

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col xl:flex-row min-h-[500px]">
      {/* Chart Section */}
      <div className="xl:w-3/5 p-6 md:p-8 flex flex-col">
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
