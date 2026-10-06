/**
 * CARLOS ALBERTO — ARQUITETURA & RIGOR TÉCNICO
 * Modular Vanilla JavaScript Engine
 * Modules: i18n Dictionary, Sonner Toast System, Video Controls, Accordion, Mobile Drawer, Scroll Observer
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION DICTIONARY (PT / ES / EN)
     ========================================================================== */
  const translations = {
    pt: {
      'nav.role': 'ARQUITETURA & OFÍCIO',
      'nav.problem': 'O Problema',
      'nav.services': 'Serviços',
      'nav.method': 'Metodologia',
      'nav.timeline': 'Trajetória',
      'nav.faq': 'Dúvidas',
      'cta.contact': 'Contactar',

      'hero.badge': 'ARQUITETURA & MATERIALIZAÇÃO TÉCNICA · MADEIRA & REMOTO',
      'hero.title': 'Da ideia conceptual à precisão executiva e à peça tangível.',
      'hero.description': 'Desenvolvo planimetria técnica CAD/BIM sem margem de erro, modelação arquitetónica de alta fidelidade e prototipagem física de precisão (madeira, corte a laser e metal) para ateliês de arquitetura e projetos privados que exigem rigor absoluto.',
      'hero.availability': 'Disponibilidade Imediata para Novos Projetos',
      'hero.grad': 'Licenciatura em Arquitetura (UJAP)',
      'hero.precision': 'Rigor Geométrico & Construtivo',
      'hero.languages': 'Comunicação Sem Fronteiras',
      'hero.videoLabel': 'Registo de Processo Construtivo & Espaço',
      'hero.videoSubtitle': 'Da Concepção Técnica à Matéria',
      'hero.location': 'Madeira, Portugal · Disponível Remotamente',

      'problem.tag': 'O DESAFIO REAL',
      'problem.title': 'Prazos a esgotar, ateliês sobrecarregados ou projetos parados por falta de rigor técnico?',
      'problem.subtitle': 'Na rotina de projetos de arquitetura e obras particulares, os mesmos nós voltam a repetir-se, custando tempo, dinheiro e noites sem dormir:',
      'problem.p1Title': 'Gargalos no Desenho Técnico Executivo',
      'problem.p1Desc': 'Entregas de licenciamento ou obra acumuladas. A sua equipa principal precisa de criar conceitos e atender clientes, mas consome semanas inteiras a retificar cotas, mapas de vãos e pormenores construtivos.',
      'problem.p2Title': 'Erros e Surpresas em Fase de Obra',
      'problem.p2Desc': 'Um projeto conceptual sem plantas executivas precisas gera desvios orçamentais graves. Empreiteiros a improvisar no terreno por ausência de detalhes construtivos milimétricos e compatibilizados.',
      'problem.p3Title': 'Distância entre o Ficheiro Digital e a Matéria Real',
      'problem.p3Desc': 'Dificuldade em comunicar volumes complexos a clientes ou fabricar peças exclusivas (madeira sob medida, pormenores em chapa metálica) antes de investir em produções caras sem protótipo prévio.',
      'problem.captionTag': 'RIGOR CONSTRUTIVO',
      'problem.captionText': 'Cada traço corresponde a uma dimensão física verificada. Sem margem para improviso.',

      'services.tag': 'SERVIÇOS DE SUPORTE & FABRICAÇÃO',
      'services.title': 'O que muda ao integrar o meu trabalho no seu fluxo',
      'services.subtitle': 'Três eixos práticos concebidos para aliviar a carga do seu ateliê e materializar espaços com precisão cirúrgica:',
      'services.s1Pill': 'PLANOS & EXECUÇÃO',
      'services.s1Title': 'Planimetria Técnica & Desenho Executivo',
      'services.s1Desc': 'Levantamento, revisão e depuração integral de peças desenhadas. Plantas cotadas, cortes longitudinais/transversais, alçados e mapas de vãos prontos para submissão legal e execução em estaleiro de obra.',
      'services.s1Item1': 'Plantas de cotas e acabamentos milimétricos',
      'services.s1Item2': 'Pormenores construtivos em escalas 1:10 e 1:20',
      'services.s1Item3': 'Mapas de vãos e compatibilização de especialidades',
      'services.s2Pill': 'MODELAÇÃO & VISÃO',
      'services.s2Title': 'Modelação Arquitetónica & Análise Volumétrica',
      'services.s2Desc': 'Construção de modelos tridimensionais limpos e geometricamente exatos para estudo de proporção, iluminação natural e impacto urbano. Apresentações que convencem clientes finais e desfazem incertezas.',
      'services.s2Item1': 'Modelos volumétricos rigorosos e otimizados',
      'services.s2Item2': 'Axonometrias explodidas e estudos solares',
      'services.s2Item3': 'Apoio a remodelações e reabilitação de interiores',
      'services.s3Pill': 'OFICINA & MATÉRIA',
      'services.s3Title': 'Prototipagem Física, Madeira & Metal',
      'services.s3Desc': 'Capacidade única de materializar em oficina física: maquetes arquitetónicas de estudo/exposição, marcenaria de detalhe, pirografia técnica em madeira maciça e peças recortadas/gravadas em chapa metálica.',
      'services.s3Item1': 'Maquetes volumétricas em bétula, latão e acrílico',
      'services.s3Item2': 'Pirografia artística e desenhos técnicos gravados em madeira',
      'services.s3Item3': 'Corte, furação e gravação em lâminas de metal',
      'services.bento1Tag': 'MAQUETISMO TÉCNICO',
      'services.bento1Title': 'Compreensão Espacial Tangível em Escala 1:30',
      'services.bento1Sub': 'Bétula selecionada, latão trabalhado e acrílico acetinado.',
      'services.bento2Tag': 'FABRICAÇÃO & PIROGRAFIA',
      'services.bento2Title': 'Fusão de Carpintaria de Precisão & Metal',
      'services.bento2Sub': 'Gravações botânicas ou técnicas em madeira de nogueira.',

      'method.tag': 'RIGOR & POSTURA PROFISSIONAL',
      'method.title': 'A garantia de um parceiro de confiança',
      'method.subtitle': 'A técnica sem disciplina não resolve prazos. Conheça as diretrizes que regem cada colaboração:',
      'method.t1Title': 'Pontualidade & Compromisso Inabalável',
      'method.t1Desc': 'Os prazos acordados são respeitados com rigor absoluto. Comunicação antecipada de cada marco e entregas faseadas sem desculpas nem surpresas de última hora.',
      'method.t2Title': 'Atenção Extrema às Indicações',
      'method.t2Desc': 'Capacidade de interpretar e seguir à risca os padrões gráficos, layers e convenções adotadas pelo seu ateliê. O projeto é executado de forma correta à primeira tentativa.',
      'method.t3Title': 'Otimização Prática de Soluções',
      'method.t3Desc': 'Espírito prático e analítico. Encontrar a forma mais limpa, económica e inteligente de resolver um nó construtivo difícil sem complicar a execução.',
      'method.t4Title': 'Domínio Integrado: Software & Ferramentas',
      'method.t4Desc': 'Conhecimento aprofundado tanto de ecossistemas digitais de arquitetura quanto de ferramentas de oficina, corte de precisão, calibração mecânica e seleção de materiais.',

      'timeline.tag': 'FORMAÇÃO & BASE',
      'timeline.title': 'Fundamentos sólidos e evolução contínua',
      'timeline.subtitle': 'Uma formação académica rigorosa aliada à prática oficinal diária:',
      'timeline.s1Tag': 'LICENCIATURA OFICIAL',
      'timeline.s1Title': 'Licenciatura em Arquitetura',
      'timeline.s1Desc': 'Conclusão do percurso formativo em arquitetura com ênfase em geometria descritiva, cálculo estrutural, tecnologia dos materiais, composição espacial e desenho urbano.',
      'timeline.s2Year': 'HOJE',
      'timeline.s2Tag': 'BASE OPERATIVA EUROPEIA',
      'timeline.s2Title': 'Atuação a partir da Madeira para o Mundo',
      'timeline.s2Inst': 'Funchal / Madeira, Portugal · Colaboração Remota',
      'timeline.s2Desc': 'Instalação em Portugal, combinando apoio a ateliês locais com parcerias técnicas à distância para Espanha, Portugal continental e clientes da América Latina.',
      'timeline.s3Year': 'OFÍCIO',
      'timeline.s3Tag': 'OFICINA TÉCNICA',
      'timeline.s3Title': 'Prática em Marcenaria, Metal e Pirografia',
      'timeline.s3Inst': 'Atelier de Fabrico Físico & Prototipagem',
      'timeline.s3Desc': 'Desenvolvimento contínuo de técnicas manuais e mecanizadas: corte e gravação de chapas metálicas, pirografia arquitetónica sobre madeira e maquetismo de detalhe.',

      'faq.tag': 'CLAREZA TOTAL',
      'faq.title': 'Perguntas Frequentes',
      'faq.subtitle': 'Respostas diretas sobre como podemos colaborar de forma fluida:',
      'faq.q1': 'Como colaboramos se o seu ateliê estiver fora da Madeira?',
      'faq.a1': 'O fluxo remoto é extremamente ágil e estandardizado. Partilhamos pastas em nuvem (Google Drive, Dropbox ou OneDrive), alinhamos especificações por videochamada e defino marcos claros com ficheiros versionados. Trabalho nos fusos horários de Portugal/Europa e América com total disponibilidade de contacto.',
      'faq.q2': 'Em que formatos entrega os desenhos técnicos e modelos?',
      'faq.a2': 'Entrego ficheiros em DWG (AutoCAD organizado por camadas rigorosas), PDF vetoriais prontos a imprimir à escala, modelos IFC/OBJ para compatibilização e ficheiros DXF ou vetoriais limpos prontos para máquinas de corte a laser ou CNC.',
      'faq.q3': 'Aceita trabalhos pontuais ou apenas colaborações contínuas?',
      'faq.a3': 'Aceito ambas as modalidades. Posso assumir um pacote específico de desenho técnico para desatar um pico urgente de entregas ou estabelecer uma colaboração regular por avença/horas com ateliês que precisem de suporte técnico mensal flexível.',
      'faq.q4': 'Como solicito um orçamento ou estimativa de prazo?',
      'faq.a4': 'Basta clicar em "Contactar" abaixo para enviar um e-mail direto com uma breve descrição do que precisa (ou os ficheiros base se já existirem). Respondo no próprio dia ou num prazo máximo de 24 horas úteis com uma proposta de prazo e orçamento sem qualquer compromisso.',

      'contact.badgeRole': 'Arquiteto & Maker',
      'contact.profileSub': 'Licenciado em Arquitetura · UJAP 2022',
      'contact.tag': 'CONTACTO DIRETO',
      'contact.title': 'Vamos dar forma ao seu próximo projeto?',
      'contact.desc': 'Quer seja para desatar um pico urgente de desenho no seu ateliê, encomendar uma maquete física ou materializar uma peça à medida em madeira e metal, fale diretamente comigo.',
      'contact.sendEmail': 'Enviar E-mail Direto',
      'contact.copyEmail': 'Copiar E-mail',
      'contact.emailCopied': 'E-mail copiado para a área de transferência!',
      'contact.emailLabel': 'Endereço:',
      'contact.socialsLabel': 'Redes sociais verificadas:',
      'footer.rights': 'Todos os direitos reservados. Arquitetura & Materialização.',
      'footer.location': 'Madeira, Portugal · Disponibilidade Local & Internacional'
    },

    es: {
      'nav.role': 'ARQUITECTURA & OFICIO',
      'nav.problem': 'El Problema',
      'nav.services': 'Servicios',
      'nav.method': 'Metodología',
      'nav.timeline': 'Trayectoria',
      'nav.faq': 'Dudas',
      'cta.contact': 'Contactar',

      'hero.badge': 'ARQUITECTURA & MATERIALIZACIÓN TÉCNICA · MADEIRA & REMOTO',
      'hero.title': 'De la idea conceptual a la precisión ejecutiva y la pieza tangible.',
      'hero.description': 'Desarrollo planimetría técnica CAD/BIM sin margen de error, modelado arquitectónico de alta fidelidad y prototipado físico de precisión (madera, corte láser y metal) para estudios de arquitectura y proyectos privados que exigen rigor absoluto.',
      'hero.availability': 'Disponibilidad Inmediata para Nuevos Proyectos',
      'hero.grad': 'Licenciado en Arquitectura (UJAP)',
      'hero.precision': 'Rigor Geométrico & Constructivo',
      'hero.languages': 'Comunicación Sin Fronteras',
      'hero.videoLabel': 'Registro de Proceso Constructivo & Espacio',
      'hero.videoSubtitle': 'De la Concepción Técnica a la Materia',
      'hero.location': 'Madeira, Portugal · Disponible Remotamente',

      'problem.tag': 'EL DESAFÍO REAL',
      'problem.title': '¿Plazos al límite, despachos sobrecargados o proyectos parados por falta de rigor técnico?',
      'problem.subtitle': 'En la rutina de estudios de arquitectura y proyectos particulares, los mismos cuellos de botella se repiten, costando tiempo, dinero y noches sin dormir:',
      'problem.p1Title': 'Cuellos de Botella en Dibujo Ejecutivo',
      'problem.p1Desc': 'Entregas de licencias u obras acumuladas. Tu equipo principal necesita crear conceptos y atender clientes, pero gasta semanas enteras rectificando cotas, carpinterías y detalles constructivos.',
      'problem.p2Title': 'Errores y Sorpresas en Fase de Obra',
      'problem.p2Desc': 'Un proyecto conceptual sin planos ejecutivos exactos genera graves desvíos presupuestarios. Constructores improvisando en obra por falta de detalles constructivos milimétricos y compatibilizados.',
      'problem.p3Title': 'Distancia entre el Archivo Digital y la Materia Real',
      'problem.p3Desc': 'Dificultad para comunicar volúmenes complejos a clientes o fabricar piezas singulares (madera a medida, detalles en chapa metálica) antes de encargar producciones costosas sin prototipo previo.',
      'problem.captionTag': 'RIGOR CONSTRUCTIVO',
      'problem.captionText': 'Cada trazo corresponde a una dimensión física verificada. Sin margen para la improvisación.',

      'services.tag': 'SERVICIOS DE SOPORTE & FABRICACIÓN',
      'services.title': 'Qué cambia al integrar mi trabajo en tu flujo',
      'services.subtitle': 'Tres ejes prácticos diseñados para aliviar la carga de tu estudio y materializar espacios con precisión quirúrgica:',
      'services.s1Pill': 'PLANOS & EJECUCIÓN',
      'services.s1Title': 'Planimetría Técnica & Dibujo Ejecutivo',
      'services.s1Desc': 'Levantamiento, revisión y depuración integral de planos técnicos. Plantas acotadas, secciones longitudinales/transversales, alzados y detalles constructivos listos para licencias y obra.',
      'services.s1Item1': 'Plantas de cotas y acabados milimétricos',
      'services.s1Item2': 'Detalles constructivos en escalas 1:10 y 1:20',
      'services.s1Item3': 'Planillas de carpintería y compatibilización técnica',
      'services.s2Pill': 'MODELADO & VISIÓN',
      'services.s2Title': 'Modelado Arquitectónico & Análisis Espacial',
      'services.s2Desc': 'Construcción de modelos tridimensionales limpios y geométricamente exactos para análisis espacial, asoleamiento e impacto visual. Presentaciones que convencen a clientes y despejan dudas.',
      'services.s2Item1': 'Modelos volumétricos rigurosos y optimizados',
      'services.s2Item2': 'Axonometrías explotadas y análisis solar',
      'services.s2Item3': 'Soporte en reformas y diseño interior',
      'services.s3Pill': 'TALLER & MATERIA',
      'services.s3Title': 'Prototipado Físico, Madera & Metal',
      'services.s3Desc': 'Capacidad única de materializar en taller físico: maquetas arquitectónicas de estudio y concurso, ebanistería de detalle, pirograbado técnico en madera maciza y piezas en lámina metálica.',
      'services.s3Item1': 'Maquetas volumétricas en abedul, latón y acrílico',
      'services.s3Item2': 'Pirograbado artístico y planos grabados en madera',
      'services.s3Item3': 'Corte, perforación y grabado en láminas de metal',
      'services.bento1Tag': 'MAQUETISMO TÉCNICO',
      'services.bento1Title': 'Comprensión Espacial Tangible en Escala 1:30',
      'services.bento1Sub': 'Abedul seleccionado, latón trabajado y acrílico satinado.',
      'services.bento2Tag': 'FABRICACIÓN & PIROGRABADO',
      'services.bento2Title': 'Fusión de Carpintería de Precisión & Metal',
      'services.bento2Sub': 'Grabados técnicos o botánicos en madera de nogal.',

      'method.tag': 'RIGOR & POSTURA PROFESIONAL',
      'method.title': 'La garantía de un socio de confianza',
      'method.subtitle': 'La técnica sin disciplina no resuelve plazos. Estas son las directrices que rigen cada colaboración:',
      'method.t1Title': 'Puntualidad & Compromiso Inquebrantable',
      'method.t1Desc': 'Los plazos acordados se cumplen con rigor absoluto. Comunicación proactiva de cada hito y entregas escalonadas sin excusas ni sorpresas de último momento.',
      'method.t2Title': 'Atención Minuciosa a las Instrucciones',
      'method.t2Desc': 'Capacidad de interpretar y seguir fielmente los estándares gráficos, capas y criterios de tu despacho. El trabajo se ejecuta correctamente a la primera.',
      'method.t3Title': 'Optimización Práctica de Soluciones',
      'method.t3Desc': 'Enfoque práctico y resolutivo. Encontrar la vía más limpia, constructiva y eficiente para resolver nudos complejos sin encarecer la ejecución.',
      'method.t4Title': 'Dominio Integrado: Software & Taller',
      'method.t4Desc': 'Conocimiento exhaustivo tanto de software CAD/BIM de arquitectura como de herramientas de taller, corte milimétrico, calibración y selección de materiales.',

      'timeline.tag': 'FORMACIÓN & BASE',
      'timeline.title': 'Fundamentos sólidos y evolución continua',
      'timeline.subtitle': 'Una formación académica rigurosa unida a la práctica técnica en taller:',
      'timeline.s1Tag': 'TÍTULO OFICIAL',
      'timeline.s1Title': 'Licenciatura en Arquitectura',
      'timeline.s1Desc': 'Culminación del programa universitario de 5 años con énfasis en geometría descriptiva, estructuras, tecnología de materiales, composición y urbanismo.',
      'timeline.s2Year': 'HOY',
      'timeline.s2Tag': 'BASE OPERATIVA EUROPEA',
      'timeline.s2Title': 'Actividad desde Madeira para el Mundo',
      'timeline.s2Inst': 'Funchal / Madeira, Portugal · Colaboración Remota',
      'timeline.s2Desc': 'Establecimiento en Portugal, combinando soporte a estudios locales con colaboraciones remotas para España, Portugal peninsular y Latinoamérica.',
      'timeline.s3Year': 'OFICIO',
      'timeline.s3Tag': 'TALLER TÉCNICO',
      'timeline.s3Title': 'Práctica en Madera, Metal y Pirograbado',
      'timeline.s3Inst': 'Taller de Fabricación Física & Prototipado',
      'timeline.s3Desc': 'Desarrollo constante de técnicas manuales y mecanizadas: corte y grabado de chapas de metal, pirograbado arquitectónico sobre madera y maquetación fina.',

      'faq.tag': 'CLARIDAD TOTAL',
      'faq.title': 'Preguntas Frecuentes',
      'faq.subtitle': 'Respuestas directas sobre cómo colaboramos de manera fluida:',
      'faq.q1': '¿Cómo colaboramos si tu estudio está fuera de Madeira?',
      'faq.a1': 'El flujo a distancia es ágil y estructurado. Compartimos carpetas en la nube (Drive, Dropbox, OneDrive), sincronizamos especificaciones por videollamada y entrego archivos versionados. Trabajo con total disponibilidad en husos horarios europeos y americanos.',
      'faq.q2': '¿En qué formatos entregas los planos y modelos?',
      'faq.a2': 'Entrego archivos DWG organizados por capas técnicas, PDF vectoriales listos para imprimir a escala, modelos IFC/OBJ para compatibilización y archivos DXF limpios para corte CNC o láser.',
      'faq.q3': '¿Aceptas encargos puntuales o solo colaboraciones continuas?',
      'faq.a3': 'Acepto ambas modalidades: paquetes cerrados de dibujo técnico para resolver picos de trabajo urgentes, o colaboración periódica por horas para estudios con demanda continua.',
      'faq.q4': '¿Cómo solicito un presupuesto o plazo de entrega?',
      'faq.a4': 'Haz clic en "Contactar" abajo para enviar un correo directo con los detalles de tu proyecto. Responderé en el mismo día o en un máximo de 24 horas laborables con una propuesta clara y sin compromiso.',

      'contact.badgeRole': 'Arquitecto & Maker',
      'contact.profileSub': 'Graduado en Arquitectura · UJAP 2022',
      'contact.tag': 'CONTACTO DIRECTO',
      'contact.title': '¿Damos forma a tu próximo proyecto?',
      'contact.desc': 'Ya sea para desatascar entregas urgentes de planos en tu estudio, encargar una maqueta física o crear una pieza a medida en madera y metal, hablemos directamente.',
      'contact.sendEmail': 'Enviar Correo Directo',
      'contact.copyEmail': 'Copiar Correo',
      'contact.emailCopied': '¡Correo copiado al portapapeles!',
      'contact.emailLabel': 'Dirección:',
      'contact.socialsLabel': 'Redes sociales verificadas:',
      'footer.rights': 'Todos los derechos reservados. Arquitectura & Materialización.',
      'footer.location': 'Madeira, Portugal · Disponibilidad Local & Internacional'
    },

    en: {
      'nav.role': 'ARCHITECTURE & CRAFT',
      'nav.problem': 'The Challenge',
      'nav.services': 'Services',
      'nav.method': 'Methodology',
      'nav.timeline': 'Milestones',
      'nav.faq': 'FAQ',
      'cta.contact': 'Contact',

      'hero.badge': 'ARCHITECTURE & TECHNICAL FABRICATION · MADEIRA & REMOTE',
      'hero.title': 'From conceptual vision to executive precision and tangible craft.',
      'hero.description': 'Delivering flawless CAD/BIM technical plans, high-fidelity architectural visualization, and bespoke physical prototyping (woodworking, laser cutting, and sheet metal) for design studios and private clients requiring uncompromised rigor.',
      'hero.availability': 'Immediate Availability for New Commissions',
      'hero.grad': 'Architecture Degree (UJAP)',
      'hero.precision': 'Geometric & Structural Rigor',
      'hero.languages': 'Bilingual Technical Communication',
      'hero.videoLabel': 'Construction & Spatial Documentation Reel',
      'hero.videoSubtitle': 'From Technical Conception to Material Form',
      'hero.location': 'Madeira, Portugal · Remote Global Availability',

      'problem.tag': 'THE REAL CHALLENGE',
      'problem.title': 'Tight deadlines, overwhelmed studios, or projects delayed by lack of technical depth?',
      'problem.subtitle': 'In everyday architectural practice and custom construction, the same friction points arise, costing time, budget, and peace of mind:',
      'problem.p1Title': 'Executive Drafting Bottlenecks',
      'problem.p1Desc': 'Permit filings and construction deadlines piling up. Your senior team needs to focus on concepts and clients, yet spends weeks redrafting dimensioned plans, schedules, and details.',
      'problem.p2Title': 'Costly On-Site Construction Discrepancies',
      'problem.p2Desc': 'Conceptual drawings without millimeter-exact executive detailing lead to site errors. Contractors improvising on site due to uncoordinated plans and missing specifications.',
      'problem.p3Title': 'The Gap Between Screen Pixels and Physical Matter',
      'problem.p3Desc': 'Difficulty presenting complex volumetric studies to clients, or fabricating bespoke architectural elements (custom woodwork, laser-cut metal) without a proven physical prototype.',
      'problem.captionTag': 'CONSTRUCTIVE RIGOR',
      'problem.captionText': 'Every line corresponds to a verified physical dimension. Zero guesswork.',

      'services.tag': 'SUPPORT & FABRICATION SERVICES',
      'services.title': 'What changes when integrating my work into your pipeline',
      'services.subtitle': 'Three structured disciplines designed to relieve studio strain and bring architecture into physical reality:',
      'services.s1Pill': 'DRAWINGS & EXECUTION',
      'services.s1Title': 'Executive Technical Plans & Detailing',
      'services.s1Desc': 'End-to-end drafting, revision, and refinement of architectural sets. Dimensioned plans, sections, elevations, and construction details ready for municipal filing and site execution.',
      'services.s1Item1': 'Millimetric dimensioning and finishes schedules',
      'services.s1Item2': 'Construction detailing at 1:10 and 1:20 scales',
      'services.s1Item3': 'Window/door schedules and trade coordination',
      'services.s2Pill': 'MODELING & VISION',
      'services.s2Title': 'Architectural Modeling & Volumetric Studies',
      'services.s2Desc': 'Clean, geometrically rigorous 3D models for spatial analysis, solar exposure studies, and high-impact presentations that eliminate client hesitation.',
      'services.s2Item1': 'Clean, mathematically sound volumetric models',
      'services.s2Item2': 'Exploded axonometrics and daylight analysis',
      'services.s2Item3': 'Renovation and spatial layout support',
      'services.s3Pill': 'WORKSHOP & CRAFT',
      'services.s3Title': 'Physical Prototyping, Wood & Metal',
      'services.s3Desc': 'Rare hands-on atelier fabrication: architectural scale models, precision carpentry, pyrography detail on hardwood, and laser-cut engraved sheet metal fixtures.',
      'services.s3Item1': 'Scale models in birch plywood, brass, and acrylic',
      'services.s3Item2': 'Architectural pyrography and burnt timber drawings',
      'services.s3Item3': 'Cutting, drilling, and engraving in metal sheets',
      'services.bento1Tag': 'SCALE PROTOTYPING',
      'services.bento1Title': 'Tangible Spatial Reality at 1:30 Scale',
      'services.bento1Sub': 'Fine birchwood, milled brass, and frosted acrylic.',
      'services.bento2Tag': 'CRAFT & PYROGRAPHY',
      'services.bento2Title': 'Precision Joinery Meets Machined Metal',
      'services.bento2Sub': 'Detailed architectural engravings on solid walnut.',

      'method.tag': 'PROFESSIONAL DISCIPLINE',
      'method.title': 'The guarantee of a dependable technical ally',
      'method.subtitle': 'Technical skill without reliability fails deadlines. Here are the core pillars behind every collaboration:',
      'method.t1Title': 'Uncompromising Punctuality',
      'method.t1Desc': 'Agreed deadlines are non-negotiable commitments. Proactive milestone tracking and phased deliverables with zero excuses or eleventh-hour delays.',
      'method.t2Title': 'Meticulous Adherence to Instructions',
      'method.t2Desc': 'Trained ability to follow your studio’s graphic guidelines, layering conventions, and technical criteria. Work is done right on the first pass.',
      'method.t3Title': 'Practical Problem-Solving Instinct',
      'method.t3Desc': 'Hands-on pragmatic mindset. Finding the most elegant, buildable, and cost-efficient solution to complex construction details without unnecessary complication.',
      'method.t4Title': 'Integrated Mastery: Software & Shop Tools',
      'method.t4Desc': 'Comprehensive command of CAD/BIM digital environments alongside workshop machines, precision saws, calibration gauges, and material properties.',

      'timeline.tag': 'ACADEMIC FOUNDATION',
      'timeline.title': 'Solid fundamentals, continuous refinement',
      'timeline.subtitle': 'Five years of university architecture education paired with active daily workshop practice:',
      'timeline.s1Tag': 'OFFICIAL DEGREE',
      'timeline.s1Title': 'Bachelor of Architecture',
      'timeline.s1Desc': 'Graduated from Universidad José Antonio Páez with a rigorous curriculum in descriptive geometry, structural calculations, building materials, and urban design.',
      'timeline.s2Year': 'NOW',
      'timeline.s2Tag': 'EUROPEAN BASE',
      'timeline.s2Title': 'Operating from Madeira, Portugal to the World',
      'timeline.s2Inst': 'Funchal / Madeira, Portugal · Remote & On-Site',
      'timeline.s2Desc': 'Established in Portugal, combining collaboration with local studios and remote workflows across Spain, mainland Portugal, and Latin America.',
      'timeline.s3Year': 'CRAFT',
      'timeline.s3Tag': 'WORKSHOP PRACTICE',
      'timeline.s3Title': 'Hands-on Wood, Metal & Pyrography Atelier',
      'timeline.s3Inst': 'Physical Prototyping & Maker Workshop',
      'timeline.s3Desc': 'Active development in manual and digital fabrication: sheet metal cutting, fine architectural pyrography, and exhibition-grade scale modeling.',

      'faq.tag': 'TOTAL CLARITY',
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Straightforward answers on working together seamlessly:',
      'faq.q1': 'How do we collaborate if your studio is outside Madeira?',
      'faq.a1': 'Remote collaboration is clean and streamlined. We use cloud shared folders (Google Drive, Dropbox, OneDrive), review specs via video calls, and provide version-controlled deliverables. Available across European and American time zones.',
      'faq.q2': 'In which file formats do you deliver drawings and models?',
      'faq.a2': 'Deliverables include layered DWG files, print-ready vector PDFs, IFC/OBJ models for coordination, and clean DXF files ready for CNC or laser cutting machines.',
      'faq.q3': 'Do you take one-off tasks or only ongoing retained contracts?',
      'faq.a3': 'Both. I can handle a specific sprint to clear an urgent deadline, or establish a flexible monthly hourly retainer for studios needing ongoing technical support.',
      'faq.q4': 'How do I request a quote or delivery estimate?',
      'faq.a4': 'Simply click "Contact" below to send a direct email outlining your project needs. I will reply within 24 business hours with a clear timeline and budget proposal.',

      'contact.badgeRole': 'Architect & Maker',
      'contact.profileSub': 'Architecture Graduate · UJAP 2022',
      'contact.tag': 'DIRECT CONTACT',
      'contact.title': 'Shall we bring your next project into reality?',
      'contact.desc': 'Whether you need to resolve an urgent drafting sprint, commission a physical scale model, or craft a bespoke wood/metal fixture, reach out directly.',
      'contact.sendEmail': 'Send Direct Email',
      'contact.copyEmail': 'Copy Email Address',
      'contact.emailCopied': 'Email address copied to clipboard!',
      'contact.emailLabel': 'Address:',
      'contact.socialsLabel': 'Verified Social Profiles:',
      'footer.rights': 'All rights reserved. Architecture & Technical Craft.',
      'footer.location': 'Madeira, Portugal · Local & International Reach'
    }
  };

  /* ==========================================================================
     2. I18N ENGINE & AUTOMATIC DETECTION
     ========================================================================== */
  let currentLang = 'pt';

  function detectPreferredLanguage() {
    const saved = localStorage.getItem('ca_preferred_lang');
    if (saved && translations[saved]) return saved;

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('en')) return 'en';
    return 'pt'; // Default for Madeira / Portugal
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ca_preferred_lang', lang);
    document.documentElement.lang = lang;

    // Update active state in UI buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Translate DOM elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  function initI18n() {
    const lang = detectPreferredLanguage();
    applyLanguage(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        applyLanguage(selectedLang);
      });
    });
  }

  /* ==========================================================================
     3. SONNER-INSPIRED TOAST ENGINE
     ========================================================================== */
  function showToast(message, duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg class="toast-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger enter animation on next microtask
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Dismiss timer
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  }

  /* ==========================================================================
     4. ONE-CLICK EMAIL COPY & DIRECT ACTION
     ========================================================================== */
  const EMAIL_ADDRESS = 'carlosbasilio.arq@gmail.com';

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        // Fall back below
      }
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    let success = false;
    try {
      success = document.execCommand('copy');
    } catch (err) {
      success = false;
    }
    document.body.removeChild(textArea);
    return success;
  }

  function initContactActions() {
    const copyBtn = document.getElementById('btn-copy-mail');
    const copyText = document.getElementById('copy-email-text');

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        await copyToClipboard(EMAIL_ADDRESS);
        const feedbackMsg = translations[currentLang]['contact.emailCopied'] || 'E-mail copiado!';
        showToast(feedbackMsg);

        if (copyText) {
          const originalText = copyText.textContent;
          copyText.textContent = '✓ ' + (currentLang === 'pt' ? 'Copiado!' : currentLang === 'es' ? '¡Copiado!' : 'Copied!');
          setTimeout(() => {
            copyText.textContent = originalText;
          }, 2500);
        }
      });
    }

    // Set mailto subject
    const mailToBtn = document.getElementById('btn-mail-to');
    if (mailToBtn) {
      mailToBtn.href = `mailto:${EMAIL_ADDRESS}?subject=Contacto%20de%20Projeto%20Arquitet%C3%B3nico`;
    }
  }

  /* ==========================================================================
     5. VIDEO CONTROLS & INTERACTION
     ========================================================================== */
  function initVideoPlayer() {
    const video = document.getElementById('hero-video');
    const playBtn = document.getElementById('video-play-toggle');
    const soundBtn = document.getElementById('video-sound-toggle');
    const overlay = document.getElementById('video-overlay');

    if (!video || !playBtn) return;

    const playIcon = playBtn.querySelector('.icon-play');
    const pauseIcon = playBtn.querySelector('.icon-pause');

    function togglePlayback() {
      if (video.paused) {
        video.play().then(() => {
          if (playIcon) playIcon.style.display = 'none';
          if (pauseIcon) pauseIcon.style.display = 'block';
        }).catch(() => {
          // Auto-play prevention fallback
        });
      } else {
        video.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    }

    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlayback();
    });

    video.addEventListener('click', togglePlayback);

    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        soundBtn.style.opacity = video.muted ? '0.5' : '1';
        showToast(video.muted ? 'Som desligado' : 'Som ativado', 1500);
      });
    }

    video.addEventListener('ended', () => {
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
    });
  }

  /* ==========================================================================
     6. ACCORDION FAQ LOGIC
     ========================================================================== */
  function initFaqAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const targetId = trigger.getAttribute('aria-controls');
        const answer = document.getElementById(targetId);

        // Close other items for neatness
        faqTriggers.forEach(other => {
          if (other !== trigger) {
            other.setAttribute('aria-expanded', 'false');
            const otherAns = document.getElementById(other.getAttribute('aria-controls'));
            if (otherAns) otherAns.hidden = true;
          }
        });

        trigger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        if (answer) {
          answer.hidden = isExpanded;
        }
      });
    });
  }

  /* ==========================================================================
     7. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('mobile-overlay');
    if (!toggle || !overlay) return;

    function openMenu() {
      toggle.setAttribute('aria-expanded', 'true');
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu();
      else openMenu();
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeMenu();
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ==========================================================================
     8. SCROLL REVEAL OBSERVER (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollReveal() {
    document.documentElement.classList.add('js-ready');
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '100px 0px 50px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    // Fallback timer to ensure nothing stays hidden under edge conditions
    setTimeout(() => {
      reveals.forEach(el => el.classList.add('revealed'));
    }, 1800);
  }

  /* ==========================================================================
     9. DYNAMIC FOOTER YEAR
     ========================================================================== */
  function initCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  /* ==========================================================================
     10. INITIALIZATION LIFECYCLE
     ========================================================================== */
  function initAll() {
    initI18n();
    initContactActions();
    initVideoPlayer();
    initFaqAccordion();
    initMobileMenu();
    initScrollReveal();
    initCurrentYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();
