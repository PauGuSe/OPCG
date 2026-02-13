
import { QuestionData, ChartType } from './types';

export const statsSummary = {
  totalParticipants: 46,
  participationRate: "73%",
  titularesRate: "94%",
  suplentesRate: "48%"
};

export const questions: QuestionData[] = [
  {
    id: "P1",
    title: "Estamento Institucional",
    description: "Distribución de los participantes según rol",
    category: "Gobernanza",
    type: ChartType.PIE,
    data: [
      { name: "Titulares", value: 32, percentage: "69.6%" },
      { name: "Suplentes", value: 14, percentage: "30.4%" }
    ],
    analysis: [
      "Siete de cada diez participantes son funcionarios titulares (32 de un total de 46).",
      "Se destaca la altísima tasa de participación de los titulares (32 de 34, equivalente al 94.1%), lo que otorga gran representatividad estratégica a los resultados."
    ]
  },
  {
    id: "P1_B",
    title: "Cargo actual",
    description: "Distribución según Cargo",
    category: "Gobernanza",
    type: ChartType.PIE,
    data: [
      { name: "Profesionales", value: 36, percentage: "78.3%" },
      { name: "Jefaturas", value: 4, percentage: "8.7%" },
      { name: "Asistentes ejecutivas/os", value: 6, percentage: "13.0%" }
    ],
    analysis: [
      "La mayoría de los cargos son analistas o jefaturas, lo que normalmente implica formación universitaria y experiencia en materias técnicas (gestión, proyectos, normativa sectorial, género y DDHH, relaciones internacionales, etc.). Esto es una buena base para el rol de encargado/a de gestión.",
      "Los cargos de apoyo aportan capacidad organizativa y de seguimiento de tareas, pero requieren refuerzo en análisis de datos, indicadores, uso de sistemas y comprensión de marcos de planificación y control de gestión para que el rol no quede reducido a tareas administrativas."
    ]
  },
  {
    id: "P2",
    title: "Ubicación geográfica de los participantes",
    description: "Distribución de respuestas entre Nivel Central y Direcciones Regionales.",
    category: "Gobernanza",
    type: ChartType.BAR,
    data: [
      { name: "Nivel Central", value: 25 },
      { name: "Regional", value: 21 }
    ],
    analysis: [
      "Existe un equilibrio estratégico entre el Nivel Central (54%) y las Regiones (46%), garantizando una visión nacional e integral de la institución.",
      "En el Nivel Central destaca la participación de Titulares Divisionales (Gestión, OPCG y Auditoría), mientras que en regiones Titulares Regionales (rol CDC) y Suplentes Regionales (rol CDC).",
      "La participación mayoritaria de titulares en ambos niveles asegura coherencia con la responsabilidad institucional del rol de encargado/a de gestión."
    ]
  },
  {
    id: "P3",
    title: "Antigüedad en el Cargo Actual",
    description: "Experiencia temporal de los funcionarios en sus funciones vigentes.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Más de 5 años", value: 15 },
      { name: "2 a 5 años", value: 18 },
      { name: "1 a 2 años", value: 8 },
      { name: "Menos de 1 año", value: 5 }
    ],
    analysis: [
      "Existe un núcleo de funcionarios con alta experiencia (70% con más de 2 años).",
      "La curva de aprendizaje del SIG ya debería estar superada para la mayoría."
    ]
  },
  {
    id: "P4",
    title: "¿Cuál es tu nivel de interacción con la plataforma SIG (CMI-GPE)?",
    description: "Mide la frecuencia y profundidad con la que los funcionarios utilizan el Sistema Integrado de Gestión.",
    category: "Interacción y Uso",
    type: ChartType.PIE,
    data: [
      { name: "Media", value: 19, percentage: "40.4%" },
      { name: "Baja", value: 13, percentage: "27.7%" },
      { name: "Alta", value: 9, percentage: "19.1%" },
      { name: "Nula", value: 6, percentage: "12.8%" }
    ],
    analysis: [
      "El 60% de los funcionarios tiene una interacción media o alta.",
      "Casi 1 de cada 4 titulares (27%) no usa el SIG con la frecuencia esperada.",
      "Existe una brecha de cumplimiento en el rol formal."
    ],
    recommendations: [
      "Internalizar el uso del sistema como una tarea propia y no solo administrativa.",
      "Reducir la brecha de uso en el nivel central, donde la interacción baja es mayor (48%)."
    ]
  },
  {
    id: "P5",
    title: "Frecuencia de acceso semanal",
    description: "Veces que el usuario ingresa a la plataforma en una semana típica.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Diario", value: 4 },
      { name: "2-3 veces", value: 12 },
      { name: "Una vez", value: 20 },
      { name: "Rara vez", value: 10 }
    ],
    analysis: [
      "El acceso es mayoritariamente puntual, coincidiendo con hitos de reporte.",
      "La plataforma no es una herramienta de consulta cotidiana aún."
    ]
  },
  {
    id: "P12",
    title: "¿Puedes visualizar los datos cargados en algún tipo de dashboard?",
    description: "Evaluación de la capacidad de visualización de información para la toma de decisiones.",
    category: "Visualización",
    type: ChartType.BAR,
    data: [
      { name: "Sí", value: 21, percentage: "45.7%" },
      { name: "No", value: 17, percentage: "37.0%" },
      { name: "Parcialmente", value: 8, percentage: "17.4%" }
    ],
    analysis: [
      "Menos de la mitad (46%) visualiza dashboards de forma completa.",
      "El 37% gestiona 'a ciegas' o con planillas paralelas.",
      "Los dashboards se perciben como un accesorio y no como insumo central."
    ],
    recommendations: [
      "Asegurar acceso universal a tableros mínimos.",
      "Mejorar la visibilidad de los dashboards existentes."
    ]
  },
  {
    id: "P13",
    title: "Tiempo aproximado para cargar datos del reporte",
    description: "Esfuerzo temporal dedicado a la actualización de información en la plataforma.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Menos de 1 día", value: 28, percentage: "61%" },
      { name: "Menos de una semana", value: 10, percentage: "22%" },
      { name: "No realiza carga", value: 6, percentage: "13%" },
      { name: "1 semana", value: 1, percentage: "2%" },
      { name: "2-3 días", value: 1, percentage: "2%" }
    ],
    analysis: [
      "La mayoría (61%) carga datos en menos de un día.",
      "La carga no es, en promedio, una tarea desbordante, pero sí manual.",
      "Riesgo de 'maratones de último minuto' que afectan la calidad de los datos."
    ]
  },
  {
    id: "P14",
    title: "¿La falta de visualización limita el análisis o decisiones?",
    description: "Percepción de la limitación por carencia de herramientas de BI.",
    category: "Visualización",
    type: ChartType.PIE,
    data: [
      { name: "No", value: 26, percentage: "56.5%" },
      { name: "Sí", value: 20, percentage: "43.5%" }
    ],
    analysis: [
      "Un 43% siente una brecha clara: con mejores visualizaciones decidiría mejor.",
      "El 57% restante usa herramientas propias (Excel) y rutinas manuales."
    ]
  },
  {
    id: "P15",
    title: "¿Has solicitado a soporte la visualización de datos?",
    description: "Proactividad en la búsqueda de mejoras para la visualización.",
    category: "Soporte",
    type: ChartType.PIE,
    data: [
      { name: "No", value: 41, percentage: "89.1%" },
      { name: "Sí", value: 5, percentage: "10.9%" }
    ],
    analysis: [
      "Baja cultura de 'solicitar asistencia'.",
      "Existe una demanda latente que no llega al equipo técnico."
    ]
  },
  {
    id: "P17",
    title: "Disponibilidad deseada de la plataforma",
    description: "Preferencia de acceso temporal a las herramientas del SIG.",
    category: "Gobernanza",
    type: ChartType.BAR,
    data: [
      { name: "Permanente", value: 31, percentage: "67.4%" },
      { name: "Por períodos", value: 12, percentage: "26.1%" },
      { name: "No aplica", value: 2, percentage: "4.3%" },
      { name: "No es necesario", value: 1, percentage: "2.2%" }
    ],
    analysis: [
      "2 de cada 3 encargados quieren la plataforma siempre abierta.",
      "El modelo de 'ventanas de reporte' se percibe como limitante."
    ]
  },
  {
    id: "P18",
    title: "Frecuencia ideal para revisar visualizaciones",
    description: "Periodicidad óptima para el seguimiento de indicadores.",
    category: "Visualización",
    type: ChartType.BAR,
    data: [
      { name: "Mensualmente", value: 23, percentage: "50%" },
      { name: "Semanalmente", value: 13, percentage: "28%" },
      { name: "Diariamente", value: 5, percentage: "11%" },
      { name: "Sólo a petición", value: 5, percentage: "11%" }
    ],
    analysis: [
      "La mayoría prefiere un control mensual o semanal.",
      "Alineación con los ciclos de gestión institucional."
    ]
  },
  {
    id: "P19",
    title: "¿Aporta valor real a tu trabajo?",
    description: "Evaluación de la utilidad percibida de la herramienta SIG.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Parcialmente", value: 20, percentage: "43.5%" },
      { name: "Sí", value: 19, percentage: "41.3%" },
      { name: "No", value: 7, percentage: "15.2%" }
    ],
    analysis: [
      "El 85% reconoce algún nivel de valor en la plataforma.",
      "Solo el 41% siente que ese valor es real y suficiente."
    ]
  },
  {
    id: "P20",
    title: "¿Lo que cargas se usa para decisiones institucionales?",
    description: "Percepción de la trazabilidad de la información hacia el nivel directivo.",
    category: "Impacto",
    type: ChartType.BAR,
    data: [
      { name: "Siempre", value: 17, percentage: "37.0%" },
      { name: "A veces", value: 16, percentage: "34.8%" },
      { name: "Nunca", value: 8, percentage: "17.4%" },
      { name: "No sé", value: 5, percentage: "10.9%" }
    ],
    analysis: [
      "71.8% percibe que su información se usa al menos algunas veces.",
      "Brecha de 'línea de vista' entre lo operativo and lo estratégico."
    ]
  },
  {
    id: "P21",
    title: "¿Hay duplicación de esfuerzos al cargar datos?",
    description: "Evaluación de la eficiencia en los procesos de reporte.",
    category: "Eficiencia",
    type: ChartType.PIE,
    data: [
      { name: "Sí", value: 23, percentage: "50%" },
      { name: "No", value: 23, percentage: "50%" }
    ],
    analysis: [
      "La mitad de la muestra siente que repite trabajo en múltiples lugares (Excel + SIG).",
      "Percepción de ineficiencia por procesos no integrados."
    ]
  },
  {
    id: "P22",
    title: "Casos reportados de problemas con SIG",
    description: "Categorización de fricciones en el uso del sistema.",
    category: "Soporte",
    type: ChartType.BAR,
    data: [
      { name: "No problemas", value: 19 },
      { name: "Carga/Usabilidad", value: 12 },
      { name: "Medios verificación", value: 9 },
      { name: "Claves acceso", value: 3 },
      { name: "No ha utilizado", value: 3 }
    ],
    analysis: [
      "Los problemas se concentran en usabilidad (diseño poco intuitivo).",
      "Dificultad específica en la carga de medios de verificación."
    ]
  },
  {
    id: "P23",
    title: "¿SIG es adecuado para seguimiento?",
    description: "Idoneidad del sistema para la monitorización de indicadores y proyectos.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Parcialmente", value: 22, percentage: "47.8%" },
      { name: "Totalmente", value: 13, percentage: "28.3%" },
      { name: "Poco", value: 6, percentage: "13.0%" },
      { name: "Nada", value: 4, percentage: "8.7%" },
      { name: "No sé", value: 1, percentage: "2.2%" }
    ],
    analysis: [
      "76% reconoce que es al menos parcialmente adecuado.",
      "Solo 1 de cada 3 lo considera plenamente adecuado."
    ]
  }
];

export const categories = [
  "Todos",
  "Interacción y Uso",
  "Visualización",
  "Impacto",
  "Gobernanza",
  "Eficiencia",
  "Soporte"
];
