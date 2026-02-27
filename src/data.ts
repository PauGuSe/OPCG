
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
    title: "Dificultades del proceso",
    description: "Principales fricciones identificadas en la gestión de datos.",
    category: "Usabilidad",
    type: ChartType.CUSTOM,
    data: [],
    analysis: [
      "Se identifica una desconexión entre la estructura de la matriz de carga y las necesidades específicas del servicio.",
      "La carga manual y la complejidad de la metodología actual generan una barrera significativa para los encargados."
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
    title: "¿Falta de visualización limita el análisis o decisiones?",
    description: "Percepción de la limitación por carencia de visualización",
    category: "Visualización",
    type: ChartType.PIE,
    data: [
      { name: "No", value: 26 },
      { name: "Sí", value: 20 }
    ],
    analysis: [
      "Un 43% (Sí) siente una brecha clara: mejores visualizaciones impactarían directamente en la calidad de sus análisis y decisiones.",
      "El 57% (No) declara que la falta de visualización gráfica no limita su análisis o toma de decisiones."
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
    title: "Tipos de Visualización utiles (texto libre)",
    description: "Categorización de requerimientos de visualización según respuestas abiertas.",
    category: "Visualización",
    type: ChartType.PIE,
    data: [
      { name: "Dashboard de cumplimiento", value: 70, percentage: "70%" },
      { name: "Dashboard comparativo e integrado", value: 15, percentage: "15%" },
      { name: "Dashboard analítico", value: 15, percentage: "15%" }
    ],
    analysis: [
      "El 70% de los usuarios prioriza dashboards de cumplimiento enfocados en porcentajes de avance, estado de indicadores y detección de atrasos.",
      "Un 15% requiere herramientas comparativas e históricas (Regional vs Nacional, Divisiones) para priorización y política.",
      "El 15% restante busca análisis avanzados que integren presupuesto, licitaciones y cruce de variables estratégicas."
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
    description: "Periodicidad óptima para revisar datos y visualizar tableros",
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
  },
  {
    id: "P24",
    title: "Principales Frustraciones (texto abierto)",
    description: "Identificación de puntos de dolor recurrentes en la experiencia del usuario.",
    category: "Usabilidad",
    type: ChartType.CUSTOM,
    data: [],
    analysis: [
      "La carga manual y la falta de reportes automáticos son las frustraciones más citadas.",
      "La percepción de una plataforma 'antigua' genera resistencia en usuarios que buscan agilidad.",
      "Existen brechas críticas en la visibilidad del estado de la información y la retroalimentación del sistema."
    ]
  },
  {
    id: "P25",
    title: "Funcionalidades urgentes de implementar (texto abierto)",
    description: "Prioridades de desarrollo y mejora desde la perspectiva del usuario final.",
    category: "Impacto",
    type: ChartType.CUSTOM,
    data: [],
    analysis: [
      "La demanda principal se centra en transformar el SIG de un repositorio pasivo a una herramienta de gestión activa con alertas y reportes.",
      "La simplificación de la interfaz y la integración con flujos existentes son críticas para reducir la duplicidad de trabajo con Excel.",
      "Garantizar el acceso continuo y homogéneo para todos los roles de apoyo es una deuda técnica pendiente."
    ]
  },
  {
    id: "P26",
    title: "Funcionalidades que mejorarían el proceso de reporte (selección múltiple)",
    description: "Identificación de herramientas clave para optimizar la gestión de información.",
    category: "Eficiencia",
    type: ChartType.BAR,
    data: [
      { name: "Generación de reportes", value: 29, percentage: "63%" },
      { name: "Acceso permanente", value: 26, percentage: "56.5%" },
      { name: "Dashboards y visualización", value: 25, percentage: "54.3%" },
      { name: "Revisión de cumplimientos", value: 25, percentage: "54.3%" },
      { name: "Carga de datos", value: 23, percentage: "50%" },
      { name: "Comunicación en plataforma", value: 13, percentage: "28.3%" },
      { name: "Menos trabajo manual", value: 8, percentage: "17.4%" },
      { name: "Otras", value: 4, percentage: "8.7%" }
    ],
    analysis: [
      "La generación automática de reportes es la funcionalidad más demandada (63%), evidenciando la necesidad de salidas de datos útiles.",
      "Más de la mitad de los usuarios (56.5%) considera crítico tener acceso permanente a la plataforma sin cierres de ciclos.",
      "La visualización mediante dashboards y la revisión ágil de medios de verificación (MVs) empatan con un 54.3% de interés."
    ]
  },
  {
    id: "P27",
    title: "¿Crees que se debería mantenerse SIG (Sistema integrado de gestión)?",
    description: "Opinión sobre la continuidad y evolución del sistema actual.",
    category: "Impacto",
    type: ChartType.PIE,
    data: [
      { name: "Mejorar SIG/Modernizar", value: 70, percentage: "70%" },
      { name: "Otras respuestas", value: 14, percentage: "14%" },
      { name: "Mantener sin cambios", value: 9, percentage: "9%" },
      { name: "Buscar otras plataformas", value: 7, percentage: "7%" }
    ],
    analysis: [
      "Existe un consenso abrumador (70%) a favor de mantener el SIG pero bajo un proceso profundo de modernización y mejora.",
      "Solo un 9% de los usuarios considera que el sistema debe mantenerse tal como está, lo que valida la urgencia del cambio.",
      "Un pequeño porcentaje (7%) sugiere explorar alternativas externas, mientras que el resto aporta visiones diversas sobre la transición."
    ]
  },
  {
    id: "P28",
    title: "Otras herramientas que conoces que podrían ser opción",
    description: "Conocimiento de alternativas tecnológicas y propuestas de los usuarios.",
    category: "Impacto",
    type: ChartType.CUSTOM,
    data: [
      { name: "No conozco ninguna", value: 34 },
      { name: "Propone plataforma", value: 10 },
      { name: "Sólo conozco SIG", value: 2 }
    ],
    analysis: [
      "La mayoría de los usuarios (74%) no identifica alternativas al SIG, lo que indica una alta dependencia del sistema institucional.",
      "Un 22% de los encuestados propone activamente herramientas de mercado, destacando soluciones de BI y ERPs consolidados.",
      "Existe una tendencia a sugerir herramientas de colaboración (Office 365) para cubrir brechas de comunicación y seguimiento."
    ]
  },
  {
    id: "P29",
    title: "Comentarios o propuestas (texto abierto)",
    description: "Recopilación de sugerencias finales y visiones estratégicas de los usuarios.",
    category: "Impacto",
    type: ChartType.CUSTOM,
    data: [],
    analysis: [
      "Existe una alta disposición al cambio y reconocimiento al esfuerzo del nivel central, lo que facilita la implementación de mejoras.",
      "Se identifica un potencial subutilizado del SIG para la gestión estratégica más allá del cumplimiento normativo (CDC/PMG).",
      "La interoperabilidad y la reducción de procesos paralelos en Excel son las demandas estructurales más recurrentes."
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
