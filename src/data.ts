
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
    title: "P3 Representación",
    description: "Distribución por unidades organizacionales y territoriales.",
    category: "Gobernanza",
    type: ChartType.BAR,
    data: [
      { name: "Divisiones", value: 9 },
      { name: "Oficinas", value: 4 },
      { name: "Seremias (Regionales)", value: 16 }
    ],
    analysis: [
      "Las Seremías Regionales constituyen el bloque más representativo del diagnóstico con 16 unidades participantes.",
      "El nivel central aporta la visión estratégica de 9 Divisiones y 4 Oficinas institucionales."
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
    title: "Uso de la plataforma",
    description: "Propósito principal de la interacción con el sistema.",
    category: "Interacción y Uso",
    type: ChartType.BAR,
    data: [
      { name: "Solo carga de datos", value: 25 },
      { name: "Carga, rev. de datos", value: 6 },
      { name: "Toma de decisiones", value: 4 },
      { name: "Nada", value: 4 },
      { name: "Solo revisión de datos", value: 2 },
      { name: "Carga y avances", value: 1 },
      { name: "Solo informa avances", value: 1 },
      { name: "Rev. y decisiones", value: 1 },
      { name: "Rev, carga y decisiones", value: 1 },
      { name: "Carga, rev. y reportes", value: 1 }
    ],
    analysis: [
      "Más de la mitad declara que su uso principal se concentra en la carga de datos. La plataforma es percibida como un 'lugar donde ingresar información', más que como una herramienta de análisis.",
      "Uso moderado para seguimiento (revisión de datos): Un 22% reporta un uso que incluye revisión de datos, indicando un grupo que monitorea el avance real.",
      "Uso muy bajo para análisis e informes (6%) y decisiones (5%): El SIG no está siendo percibido como herramienta de inteligencia de gestión, sino como obligación administrativa.",
      "Un 16% de los usuarios se concentra en categorías de 'Otras' o 'Nada'."
    ]
  },
  {
    id: "P6",
    title: "P7/8 Perfiles presentes (respuestas)",
    description: "Distribución de roles y privilegios en el sistema según las respuestas obtenidas.",
    category: "Gobernanza",
    type: ChartType.PIE,
    data: [
      { name: "Administradores", value: 2 },
      { name: "Usuarios/as", value: 44 }
    ],
    analysis: [
      "Sólo 2 funcionarios tienen perfil Administrador, facultados para cargas masivas y gestión global, todo esto a través de excel.",
      "Del 96% que respondieron este formulario, opera bajo el perfil 'Usuario'.",
      "Administradores de Plataforma: Renzo Delmiglio y Paulina Gutiérrez (OPCG)."
    ]
  },
  {
    id: "P8",
    title: "Responsables de cargas másivas Institucionales",
    description: "Personal y equipos involucrados en el ingreso de información estratégica.",
    category: "Gobernanza",
    type: ChartType.PIE,
    data: [
      { name: "Encargados de carga masiva", value: 2 },
      { name: "Equipos de trabajo", value: 63 }
    ],
    analysis: [
      "Son 2 encargados institucionales para el ingreso de toda la información institucional, indicadores y proyectos de la Subsecretaría.",
      "Estos profesionales son parte de la OPCG, unidad que administra integralmente esta plataforma.",
      "Se identifican 63 equipos de trabajo que sustentan la generación y reporte de datos para el sistema."
    ]
  },
  {
    id: "P9",
    title: "Tiempo aprox. de carga másiva",
    description: "Evaluación del tiempo dedicado por administradores para procesar información masiva.",
    category: "Eficiencia",
    type: ChartType.BAR,
    data: [
      { name: "Menos de 1 día", value: 0 },
      { name: "Menos de 2 semanas", value: 0 },
      { name: "Más de 1 mes", value: 2 },
      { name: "Otros", value: 0 }
    ],
    analysis: [
      "Este indicador considera exclusivamente a los 2 funcionarios con perfil 'ADMIN' facultados para esta función.",
      "El proceso de carga masiva se extiende por más de un mes debido a la complejidad de la limpieza de datos en Excel y las validaciones técnicas requeridas.",
      "Refleja un cuello de botella crítico en la actualización oportuna de la información institucional."
    ]
  },
  {
    id: "P10",
    title: "Genera errores o rechazos la plataforma",
    description: "Frecuencia de fallos técnicos experimentados por el perfil administrador.",
    category: "Eficiencia",
    type: ChartType.BAR,
    data: [
      { name: "Frecuentemente", value: 2 },
      { name: "Ocasionalmente", value: 0 },
      { name: "rara vez", value: 0 },
      { name: "Nunca", value: 0 }
    ],
    analysis: [
      "El 100% de los administradores (2 funcionarios) reporta que la plataforma genera errores de forma frecuente.",
      "Estos fallos impactan directamente en los procesos críticos de carga masiva y consolidación de datos.",
      "Representa una de las principales fricciones técnicas identificadas en el diagnóstico del perfil experto."
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
      "El rendimiento es aceptable para la mayoría de los usuarios en condiciones normales.",
      "Los problemas de lentitud suelen coincidir con cierres de reporte masivos."
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
      "Menos de la mitad (46%) utiliza dashboards de forma completa para su gestión.",
      "El 37% gestiona 'a ciegas' respecto al sistema, apoyándose en planillas paralelas."
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
      "La mayoría (61%) logra cargar sus datos en menos de una jornada laboral.",
      "La carga no es percibida como una tarea desbordante en tiempo, aunque sí en complejidad manual."
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
      "Un 43% siente una brecha clara: mejores visualizaciones impactarían directamente en la calidad de sus decisiones.",
      "El 57% declara haber resuelto esta carencia mediante herramientas externas."
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
      "Existe una baja cultura de 'solicitar asistencia técnica' para análisis de datos.",
      "La demanda por mejores dashboards es latente pero no se formaliza como requerimiento de soporte."
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
      "El correo institucional sigue siendo el canal estándar de soporte.",
      "Se observa un interés creciente por la inmediatez del soporte vía Teams."
    ]
  },
  {
    id: "P17",
    title: "Disponibilidad deseada de plataforma",
    description: "Preferencia de acceso temporal al sistema.",
    category: "Gobernanza",
    type: ChartType.BAR,
    data: [
      { name: "Permanente", value: 31 },
      { name: "Por períodos", value: 12 },
      { name: "No aplica", value: 3 }
    ],
    analysis: [
      "67% de los encargados prefiere que la plataforma esté abierta de forma continua.",
      "El esquema actual de 'ventanas de carga' se percibe como una barrera para el flujo de trabajo."
    ]
  },
  {
    id: "P18",
    title: "Frecuencia ideal para revisiones",
    description: "Periodicidad óptima percibida para el seguimiento.",
    category: "Visualización",
    type: ChartType.BAR,
    data: [
      { name: "Mensualmente", value: 23 },
      { name: "Semanalmente", value: 13 },
      { name: "Diariamente", value: 5 },
      { name: "A petición", value: 5 }
    ],
    analysis: [
      "La mayoría prefiere ciclos de control mensuales (50%) o semanales (28%).",
      "Existe alineación con los ritmos de reporte institucional vigentes."
    ]
  },
  {
    id: "P19",
    title: "¿Aporta valor real a tu trabajo?",
    description: "Evaluación de la utilidad subjetiva percibida.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Parcialmente", value: 20 },
      { name: "Sí", value: 19 },
      { name: "No", value: 7 }
    ],
    analysis: [
      "El 85% de los funcionarios reconoce algún nivel de valor en la herramienta.",
      "Solo el 41% siente que este valor es significativo y directamente aplicable a sus funciones."
    ]
  },
  {
    id: "P20",
    title: "¿Se usa lo que cargas para decisiones?",
    description: "Percepción de la utilidad estratégica de la información cargada.",
    category: "Impacto",
    type: ChartType.BAR,
    data: [
      { name: "Siempre", value: 17 },
      { name: "A veces", value: 16 },
      { name: "Nunca", value: 8 },
      { name: "No sé", value: 5 }
    ],
    analysis: [
      "72% percibe que su trabajo de carga tiene algún impacto en la toma de decisiones.",
      "Persiste una brecha de visibilidad sobre cómo se utiliza la información en niveles directivos."
    ]
  },
  {
    id: "P21",
    title: "¿Hay duplicación de esfuerzos?",
    description: "Evaluación de la eficiencia procedimental.",
    category: "Eficiencia",
    type: ChartType.PIE,
    data: [
      { name: "Sí", value: 23 },
      { name: "No", value: 23 }
    ],
    analysis: [
      "Exactamente el 50% de los usuarios siente que duplica tareas (Excel + Sistema).",
      "Existe un fuerte incentivo para integrar procesos y eliminar dobles ingresos."
    ]
  },
  {
    id: "P22",
    title: "Casos reportados de problemas",
    description: "Categorización de fricciones operativas.",
    category: "Soporte",
    type: ChartType.BAR,
    data: [
      { name: "Sin problemas", value: 19 },
      { name: "Usabilidad", value: 12 },
      { name: "Verificación", value: 9 },
      { name: "Accesos", value: 6 }
    ],
    analysis: [
      "La principal fuente de fricción es la usabilidad de la interfaz.",
      "La carga de medios de verificación se identifica como un proceso especialmente crítico."
    ]
  },
  {
    id: "P23",
    title: "¿SIG es adecuado para seguimiento?",
    description: "Idoneidad del sistema para la monitorización de gestión.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Parcialmente", value: 22 },
      { name: "Totalmente", value: 13 },
      { name: "Poco", value: 6 },
      { name: "Nada", value: 5 }
    ],
    analysis: [
      "76% considera que el sistema cumple, al menos en parte, con los objetivos de seguimiento.",
      "La oportunidad de modernización radica en mover a ese 76% hacia una satisfacción total."
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
