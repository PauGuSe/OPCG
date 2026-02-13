
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
      "La mayoría de los cargos son analistas o jefaturas, lo que normalmente implica formación universitaria y experiencia en materias técnicas.",
      "Los cargos de apoyo aportan capacidad organizativa, pero requieren refuerzo en análisis de datos."
    ]
  },
  {
    id: "P2",
    title: "Ubicación geográfica",
    description: "Distribución de respuestas entre Nivel Central y Direcciones Regionales.",
    category: "Gobernanza",
    type: ChartType.BAR,
    data: [
      { name: "Nivel Central", value: 25 },
      { name: "Regional", value: 21 }
    ],
    analysis: [
      "Existe un equilibrio estratégico entre el Nivel Central (54%) y las Regiones (46%).",
      "La participación asegura coherencia con la responsabilidad institucional del rol."
    ]
  },
  {
    id: "P3",
    title: "Antigüedad en el Cargo",
    description: "Experiencia temporal de los funcionarios.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Más de 5 años", value: 15 },
      { name: "2 a 5 años", value: 18 },
      { name: "1 a 2 años", value: 8 },
      { name: "Menos de 1 año", value: 5 }
    ],
    analysis: [
      "Núcleo de funcionarios con alta experiencia (70% con más de 2 años).",
      "La curva de aprendizaje del SIG ya debería estar superada para la mayoría."
    ]
  },
  {
    id: "P4",
    title: "Nivel de interacción con plataforma SIG",
    description: "Frecuencia y profundidad de uso del sistema.",
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
      "Casi 1 de cada 4 titulares (27%) no usa el SIG con la frecuencia esperada."
    ]
  },
  {
    id: "P5",
    title: "Frecuencia de acceso semanal",
    description: "Veces que el usuario ingresa en una semana típica.",
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
    id: "P6",
    title: "Dispositivos de acceso",
    description: "Equipos utilizados para acceder a la plataforma.",
    category: "Interacción y Uso",
    type: ChartType.PIE,
    data: [
      { name: "Computador Institucional", value: 42 },
      { name: "Computador Personal", value: 4 }
    ],
    analysis: [
      "El acceso es casi exclusivamente institucional, reforzando la seguridad.",
      "Se sugiere habilitar accesos seguros desde otros entornos si es necesario."
    ]
  },
  {
    id: "P7",
    title: "Horario preferente de uso",
    description: "Franja horaria con mayor actividad.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Mañana (8-12)", value: 25 },
      { name: "Tarde (14-18)", value: 18 },
      { name: "Fuera de horario", value: 3 }
    ],
    analysis: [
      "La mayor carga se realiza durante la mañana.",
      "Buen balance de vida laboral y cumplimiento de plazos."
    ]
  },
  {
    id: "P8",
    title: "Módulos más utilizados",
    description: "Secciones del sistema con mayor flujo.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Planificación", value: 30 },
      { name: "Control de Gestión", value: 22 },
      { name: "Reportes", value: 15 }
    ],
    analysis: [
      "El módulo de Planificación es el corazón del sistema para los usuarios.",
      "Control de Gestión muestra un uso secundario pero relevante."
    ]
  },
  {
    id: "P9",
    title: "Satisfacción con la Interfaz",
    description: "Percepción visual y de navegación.",
    category: "Usabilidad",
    type: ChartType.PIE,
    data: [
      { name: "Satisfecho", value: 15 },
      { name: "Neutral", value: 20 },
      { name: "Insatisfecho", value: 11 }
    ],
    analysis: [
      "La mayoría se mantiene en una posición neutral.",
      "Existe un espacio de mejora en la experiencia de usuario (UX)."
    ]
  },
  {
    id: "P10",
    title: "Claridad de las instrucciones",
    description: "Comprensión de los manuales y guías de carga.",
    category: "Usabilidad",
    type: ChartType.BAR,
    data: [
      { name: "Muy Claro", value: 10 },
      { name: "Claro", value: 22 },
      { name: "Poco Claro", value: 14 }
    ],
    analysis: [
      "Nivel de claridad aceptable (70%), pero hay un 30% con dificultades.",
      "Necesidad de actualizar manuales y simplificar el lenguaje técnico."
    ]
  },
  {
    id: "P11",
    title: "Velocidad de carga del sistema",
    description: "Rendimiento técnico percibido.",
    category: "Usabilidad",
    type: ChartType.PIE,
    data: [
      { name: "Rápido", value: 12 },
      { name: "Aceptable", value: 26 },
      { name: "Lento", value: 8 }
    ],
    analysis: [
      "El rendimiento es aceptable para la mayoría de los usuarios.",
      "Los picos de carga coinciden con cierres de reporte."
    ]
  },
  {
    id: "P12",
    title: "¿Visualizas los datos en dashboards?",
    description: "Evaluación de la capacidad de visualización de información.",
    category: "Visualización",
    type: ChartType.BAR,
    data: [
      { name: "Sí", value: 21 },
      { name: "No", value: 17 },
      { name: "Parcialmente", value: 8 }
    ],
    analysis: [
      "Menos de la mitad (46%) visualiza dashboards de forma completa.",
      "El 37% gestiona 'a ciegas' o con planillas paralelas."
    ]
  },
  {
    id: "P13",
    title: "Tiempo para carga de datos",
    description: "Esfuerzo temporal dedicado a la actualización.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Menos de 1 día", value: 28 },
      { name: "Menos de una semana", value: 10 },
      { name: "No realiza carga", value: 6 },
      { name: "Más de 1 semana", value: 2 }
    ],
    analysis: [
      "La mayoría (61%) carga datos en menos de un día.",
      "La carga no es una tarea desbordante, pero sí manual."
    ]
  },
  {
    id: "P14",
    title: "¿Falta de visualización limita decisiones?",
    description: "Percepción de la limitación por carencia de BI.",
    category: "Visualización",
    type: ChartType.PIE,
    data: [
      { name: "No", value: 26 },
      { name: "Sí", value: 20 }
    ],
    analysis: [
      "Un 43% siente una brecha clara: mejores visualizaciones ayudarían.",
      "El 57% usa herramientas propias externas."
    ]
  },
  {
    id: "P15",
    title: "¿Has solicitado soporte para visualizar?",
    description: "Proactividad en la búsqueda de mejoras.",
    category: "Soporte",
    type: ChartType.PIE,
    data: [
      { name: "No", value: 41 },
      { name: "Sí", value: 5 }
    ],
    analysis: [
      "Baja cultura de 'solicitar asistencia'.",
      "Existe una demanda latente que no llega al equipo técnico."
    ]
  },
  {
    id: "P16",
    title: "Canal de soporte preferido",
    description: "Vías de comunicación para resolver dudas.",
    category: "Soporte",
    type: ChartType.BAR,
    data: [
      { name: "Correo", value: 30 },
      { name: "Teams/Chat", value: 10 },
      { name: "Teléfono", value: 6 }
    ],
    analysis: [
      "El correo sigue siendo el estándar institucional.",
      "Creciente interés por el soporte en tiempo real vía chat."
    ]
  },
  {
    id: "P17",
    title: "Disponibilidad deseada de plataforma",
    description: "Preferencia de acceso temporal.",
    category: "Gobernanza",
    type: ChartType.BAR,
    data: [
      { name: "Permanente", value: 31 },
      { name: "Por períodos", value: 12 },
      { name: "No aplica", value: 3 }
    ],
    analysis: [
      "2 de cada 3 encargados quieren la plataforma siempre abierta.",
      "El modelo de 'ventanas' se percibe como limitante."
    ]
  },
  {
    id: "P18",
    title: "Frecuencia ideal para revisiones",
    description: "Periodicidad óptima para seguimiento.",
    category: "Visualización",
    type: ChartType.BAR,
    data: [
      { name: "Mensualmente", value: 23 },
      { name: "Semanalmente", value: 13 },
      { name: "Diariamente", value: 5 },
      { name: "A petición", value: 5 }
    ],
    analysis: [
      "La mayoría prefiere un control mensual o semanal.",
      "Alineación con los ciclos de gestión institucional."
    ]
  },
  {
    id: "P19",
    title: "¿Aporta valor real a tu trabajo?",
    description: "Evaluación de la utilidad percibida.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Parcialmente", value: 20 },
      { name: "Sí", value: 19 },
      { name: "No", value: 7 }
    ],
    analysis: [
      "El 85% reconoce algún nivel de valor en la plataforma.",
      "Solo el 41% siente que ese valor es real y suficiente."
    ]
  },
  {
    id: "P20",
    title: "¿Se usa lo que cargas para decisiones?",
    description: "Percepción de la trazabilidad hacia directivos.",
    category: "Impacto",
    type: ChartType.BAR,
    data: [
      { name: "Siempre", value: 17 },
      { name: "A veces", value: 16 },
      { name: "Nunca", value: 8 },
      { name: "No sé", value: 5 }
    ],
    analysis: [
      "71.8% percibe uso al menos algunas veces.",
      "Brecha de 'línea de vista' entre lo operativo y estratégico."
    ]
  },
  {
    id: "P21",
    title: "¿Hay duplicación de esfuerzos?",
    description: "Evaluación de la eficiencia en los procesos.",
    category: "Eficiencia",
    type: ChartType.PIE,
    data: [
      { name: "Sí", value: 23 },
      { name: "No", value: 23 }
    ],
    analysis: [
      "La mitad siente que repite trabajo (Excel + SIG).",
      "Percepción de ineficiencia por procesos no integrados."
    ]
  },
  {
    id: "P22",
    title: "Casos reportados de problemas",
    description: "Categorización de fricciones.",
    category: "Soporte",
    type: ChartType.BAR,
    data: [
      { name: "No problemas", value: 19 },
      { name: "Usabilidad", value: 12 },
      { name: "Verificación", value: 9 },
      { name: "Accesos", value: 6 }
    ],
    analysis: [
      "Los problemas se concentran en usabilidad.",
      "Dificultad específica en la carga de medios de verificación."
    ]
  },
  {
    id: "P23",
    title: "¿SIG es adecuado para seguimiento?",
    description: "Idoneidad del sistema para monitorización.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Parcialmente", value: 22 },
      { name: "Totalmente", value: 13 },
      { name: "Poco", value: 6 },
      { name: "Nada", value: 5 }
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
  "Soporte",
  "Usabilidad"
];
