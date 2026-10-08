/**
 * CARLOS ALBERTO DE BASILIO — ARQUITETURA & RIGOR TÉCNICO
 * Modular Vanilla JavaScript Engine
 * Modules: i18n Dictionary, Sonner Toast System, Video Controls, Privacy Modal, Accordion, Mobile Drawer, Scroll Observer
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
      'nav.projects': 'Trabalhos',
      'projects.badge': 'Portfólio & Desenhos Técnicos',
      'projects.title': 'Trabalhos & Planimetria Executiva',
      'projects.subtitle': 'Do planeamento urbano ao pormenor construtivo milimétrico: documentação executiva do Centro Cultural Artístico desenvolvida por Carlos Alberto de Basilio.',
      'projects.filterAll': 'Todos (12)',
      'projects.filterArch': 'Plantas de Arquitetura',
      'projects.filterElev': 'Alçados & Cortes',
      'projects.filterDetails': 'Pormenores & Tridilosa',
      'projects.filterStruct': 'Engenharia & Estrutura',
      'projects.ctxProjectLabel': 'Projeto de Tese',
      'projects.ctxAreaLabel': 'Área de Intervenção',
      'projects.ctxScopeLabel': 'Âmbito Técnico',
      'projects.ctxSoftLabel': 'Software & Rigor',
      'projects.zoomHint': 'Clique para ampliar',
      'projects.expandBtn': 'Ampliar Plano',
      'projects.scale': 'Escala',
      'projects.date': 'Data',
      'projects.author': 'Autor',
      'nav.method': 'Metodologia',
      'nav.timeline': 'Trajetória',
      'nav.faq': 'Dúvidas',
      'cta.contact': 'Contactar',

      'hero.title': 'Da ideia conceptual à precisão executiva e à peça tangível.',
      'hero.description': 'Apoio técnico a ateliers de arquitetura em modelação 3D, supervisão de obras no terreno na Madeira e fabricação física à medida (maquetes, madeira e corte de metal) com rigor milimétrico.',
      'hero.location': 'Madeira, Portugal · Disponível Remotamente',

      'problem.title': 'Prazos a esgotar, ateliês sobrecarregados ou projetos parados por falta de rigor técnico?',
      'problem.subtitle': 'Na rotina de projetos de arquitetura e obras particulares, os mesmos nós voltam a repetir-se, custando tempo, dinheiro e noites sem dormir:',
      'problem.p1Title': 'Gargalos no Desenho Técnico Executivo',
      'problem.p1Desc': 'Entregas de licenciamento ou obra acumuladas. A sua equipa principal precisa de criar conceitos e atender clientes, mas consome semanas inteiras a retificar cotas, mapas de vãos e pormenores construtivos.',
      'problem.p2Title': 'Erros e Surpresas em Fase de Obra',
      'problem.p2Desc': 'Falta de acompanhamento e fiscalização contínua no terreno. Sem supervisão técnica rigorosa em obra, surgem desvios imprevistos e improvisações por parte de empreiteiros.',
      'problem.p3Title': 'Distância entre o Ficheiro Digital e a Matéria Real',
      'problem.p3Desc': 'Dificuldade em comunicar volumes complexos a clientes ou fabricar peças exclusivas (madeira sob medida, pormenores em chapa metálica) antes de investir em produções caras sem protótipo prévio.',
      'problem.captionText': 'Cada traço corresponde a uma dimensão física verificada. Sem margem para improviso.',

      'services.title': 'O que muda ao integrar o meu trabalho no seu fluxo',
      'services.subtitle': 'Três eixos práticos e autorizados concebidos para aliviar a carga do seu ateliê e fiscalizar a execução real:',
      'services.s1Title': 'Supervisão de Obras & Fiscalização',
      'services.s1Desc': 'Acompanhamento e controlo técnico de execução presencial em estaleiros de obra na Madeira. Verificação rigorosa do cumprimento dos projetos de execução, cadernos de encargos e qualidade dos acabamentos.',
      'services.s1Item1': 'Acompanhamento e inspeção de obra presencial na Madeira',
      'services.s1Item2': 'Controlo de conformidade técnica e verificação de medições',
      'services.s1Item3': 'Relatórios de progresso e deteção precoce de desvios',
      'services.s2Title': 'Modelação 3D, Figuras & Visualização',
      'services.s2Desc': 'Construção de modelos tridimensionais limpos, figuras 3D e estudos volumétricos de alta fidelidade para apoio a gabinetes de arquitetura, promotores e projetos particulares.',
      'services.s2Item1': 'Modelos 3D volumétricos precisos e figuras tridimensionais',
      'services.s2Item2': 'Estudos de proporção, insolação e axonometrias explicativas',
      'services.s2Item3': 'Apoio técnico remoto em desenho CAD para ateliers externos',
      'services.s3Title': 'Prototipagem Física, Madeira & Metal',
      'services.s3Desc': 'Materialização física em atelier: maquetes arquitetónicas de estudo/exposição à escala, marcenaria de detalhe, pirografia de precisão e corte/gravação em lâminas de metal.',
      'services.s3Item1': 'Maquetes volumétricas em bétula, latão e acrílico',
      'services.s3Item2': 'Pirografia artística e desenhos técnicos gravados em madeira',
      'services.s3Item3': 'Corte, furação e gravação em lâminas metálicas',
      'services.bento1Title': 'Compreensão Espacial Tangível em Escala 1:30',
      'services.bento1Sub': 'Bétula selecionada, latão trabalhado e acrílico acetinado.',
      'services.bento2Title': 'Fusão de Carpintaria de Precisão & Metal',
      'services.bento2Sub': 'Gravações botânicas ou técnicas em madeira de nogueira.',

      'method.title': 'A garantia de um parceiro de confiança',
      'method.subtitle': 'A técnica sem disciplina não resolve prazos. Conheça as diretrizes que regem cada colaboração:',
      'method.t1Title': 'Pontualidade & Compromisso Inabalável',
      'method.t1Desc': 'Os prazos acordados são respeitados com rigor absoluto. Comunicação antecipada de cada marco e entregas faseadas sem desculpas nem surpresas de última hora.',
      'method.t2Title': 'Atenção Extrema às Indicações',
      'method.t2Desc': 'Capacidade de interpretar e seguir à risca os padrões gráficos, layers e convenções adotadas pelo seu ateliê. O projeto é executado de forma correta à primeira tentativa.',
      'method.t3Title': 'Otimização Prática de Soluções',
      'method.t3Desc': 'Espírito prático e analítico. Encontrar a forma mais limpa, económica e inteligente de resolver um nó construtivo difícil sem complicar a execução.',
      'method.t4Title': 'Domínio Integrado: Software & Ferramentas',
      'method.t4Desc': 'Conhecimento aprofundado tanto de ferramentas digitais 3D/CAD quanto de instrumentos de oficina, corte de precisão, calibração mecânica e materiais.',

      'timeline.title': 'Fundamentos sólidos e evolução contínua',
      'timeline.subtitle': 'Formação académica em arquitetura aliada à supervisão prática e à produção oficinal:',
      'timeline.s1Title': 'Licenciatura em Arquitetura',
      'timeline.s1Desc': 'Conclusão do percurso formativo em arquitetura com ênfase em geometria descritiva, cálculo estrutural, tecnologia dos materiais, composição espacial e desenho urbano.',
      'timeline.s2Year': 'HOJE',
      'timeline.s2Title': 'Supervisão de Obras & Modelação 3D',
      'timeline.s2Inst': 'Funchal / Madeira, Portugal · Atuação Técnica & Remota',
      'timeline.s2Desc': 'Residência na Madeira. Atuação concentrada na supervisão técnica de obras no terreno, modelação tridimensional e apoio a ateliers de arquitetura (sem assinatura independente de projetos em Portugal até conclusão da inscrição na Ordem dos Arquitectos).',
      'timeline.s3Year': 'OFÍCIO',
      'timeline.s3Title': 'Prática em Marcenaria, Metal e Pirografia',
      'timeline.s3Inst': 'Atelier de Fabrico Físico & Prototipagem',
      'timeline.s3Desc': 'Desenvolvimento contínuo de técnicas manuais e mecanizadas: corte e gravação de chapas metálicas, pirografia arquitetónica sobre madeira e maquetismo de detalhe.',

      'faq.title': 'Perguntas Frequentes',
      'faq.subtitle': 'Respostas diretas sobre como podemos colaborar de forma fluida:',
      'faq.q1': 'Que tipo de serviços pode prestar legalmente em Portugal?',
      'faq.a1': 'Em Portugal, atuo como supervisor e fiscal técnico de obras no terreno, especialista em modelação e figuras 3D, e na produção física de maquetes e peças em madeira/metal. Para ateliers e gabinetes, presto apoio técnico e de desenho. Não assino projetos de arquitetura independentes em Portugal até à homologação da inscrição na Ordem dos Arquitectos.',
      'faq.q2': 'Como colaboramos se o seu ateliê estiver fora da Madeira?',
      'faq.a2': 'O fluxo remoto de modelação 3D e apoio de desenho é ágil e estandardizado. Partilhamos pastas em nuvem (Drive, Dropbox, OneDrive), alinhamos especificações por videochamada e defino marcos claros com ficheiros versionados. Trabalho nos fusos horários da Europa e América com total disponibilidade.',
      'faq.q3': 'Em que formatos entrega os desenhos técnicos e modelos 3D?',
      'faq.a3': 'Entrego ficheiros em DWG (AutoCAD organizado por camadas rigorosas), PDF vetoriais prontos a imprimir à escala, modelos IFC/OBJ/SKP para compatibilização e ficheiros DXF ou vetoriais limpos prontos para máquinas de corte a laser ou CNC.',
      'faq.q4': 'Como solicito uma proposta ou agendo uma reunião?',
      'faq.a4': 'Basta clicar em "Contactar" para enviar um e-mail direto ou copiar o endereço para a sua caixa de correio com um breve resumo do que necessita. Respondo no próprio dia ou num prazo máximo de 24 horas úteis com disponibilidade imediata.',

      'contact.profileSub': 'Licenciado em Arquitetura (UJAP 2022) · Supervisão & Modelação 3D',
      'contact.title': 'Vamos dar forma ao seu próximo projeto?',
      'contact.desc': 'Quer seja para acompanhamento e supervisão técnica de obras no terreno na Madeira, modelação tridimensional ou materialização de peças singulares em madeira e metal, fale diretamente comigo.',
      'contact.sendEmail': 'Enviar E-mail Direto',
      'contact.copyEmail': 'Copiar E-mail',
      'contact.emailCopied': 'E-mail copiado para a área de transferência!',
      'contact.emailLabel': 'Endereço:',

      'footer.desc': 'Arquiteto graduado pela UJAP (2022). Supervisão e fiscalização técnica de obras na Madeira, modelação 3D e fabricação física em madeira e metal.',
      'footer.contactsLabel': 'Contactos',
      'footer.socialsLabel': 'Redes sociais',
      'footer.privacy': 'Política de Privacidade',
      'footer.rights': 'Todos os direitos reservados.',

      'privacy.title': 'Política de Privacidade',
      'privacy.p1': 'Este website tem caráter exclusivamente informativo e de portfólio profissional de Carlos Alberto de Basilio.',
      'privacy.item1': 'Sem Cookies de Rastreio: Não utilizamos cookies analíticos invasivos nem partilhamos dados com redes de publicidade.',
      'privacy.item2': 'Contacto Profissional: Ao contactar por e-mail (carlosbasilio.arq@gmail.com), os seus dados serão utilizados estritamente para responder à sua consulta de serviços técnicos.',
      'privacy.item3': 'Confidencialidade: Os planos, especificações e informações de obras partilhadas são tratados com sigilo profissional e rigor técnico.',
      'privacy.foot': 'Para qualquer questão ou eliminação dos seus dados de contacto, envie mensagem para carlosbasilio.arq@gmail.com.'
    },

    es: {
      'nav.role': 'ARQUITECTURA & OFICIO',
      'nav.problem': 'El Problema',
      'nav.services': 'Servicios',
      'nav.projects': 'Trabajos',
      'projects.badge': 'Portafolio & Planos Técnicos',
      'projects.title': 'Trabajos & Planimetría Ejecutiva',
      'projects.subtitle': 'De la conceptualización urbana al detalle constructivo milimétrico: documentación ejecutiva del Centro Cultural Artístico desarrollada por Carlos Alberto de Basilio.',
      'projects.filterAll': 'Todos (12)',
      'projects.filterArch': 'Plantas de Arquitectura',
      'projects.filterElev': 'Fachadas & Cortes',
      'projects.filterDetails': 'Detalles & Tridilosa',
      'projects.filterStruct': 'Ingeniería & Estructura',
      'projects.ctxProjectLabel': 'Proyecto de Grado',
      'projects.ctxAreaLabel': 'Área de Intervención',
      'projects.ctxScopeLabel': 'Ámbito Técnico',
      'projects.ctxSoftLabel': 'Software & Rigor',
      'projects.zoomHint': 'Clic para ampliar',
      'projects.expandBtn': 'Ampliar Plano',
      'projects.scale': 'Escala',
      'projects.date': 'Fecha',
      'projects.author': 'Autor',
      'nav.method': 'Metodología',
      'nav.timeline': 'Trayectoria',
      'nav.faq': 'Dudas',
      'cta.contact': 'Contactar',

      'hero.title': 'De la idea conceptual a la precisión ejecutiva y la pieza tangible.',
      'hero.description': 'Apoyo técnico a estudios de arquitectura en modelado 3D, supervisión de obras en terreno en Madeira y fabricación física a medida (maquetas, madera y corte de metal) con rigor milimétrico.',
      'hero.location': 'Madeira, Portugal · Disponible Remotamente',

      'problem.title': '¿Plazos al límite, despachos sobrecargados o proyectos parados por falta de rigor técnico?',
      'problem.subtitle': 'En la rutina de estudios de arquitectura y proyectos particulares, los mismos cuellos de botella se repiten, costando tiempo, dinero y noches sin dormir:',
      'problem.p1Title': 'Cuellos de Botella en Dibujo Ejecutivo',
      'problem.p1Desc': 'Entregas de licencias u obras acumuladas. Tu equipo principal necesita crear conceptos y atender clientes, pero gasta semanas enteras rectificando cotas, carpinterías y detalles constructivos.',
      'problem.p2Title': 'Errores y Sorpresas en Fase de Obra',
      'problem.p2Desc': 'Falta de supervisión y fiscalización continua en obra. Sin control técnico riguroso en terreno, surgen desvíos imprevistos e improvisaciones por parte de constructores.',
      'problem.p3Title': 'Distancia entre el Archivo Digital y la Materia Real',
      'problem.p3Desc': 'Dificultad para comunicar volúmenes complejos a clientes o fabricar piezas singulares (madera a medida, detalles en chapa metálica) antes de encargar producciones costosas sin prototipo previo.',
      'problem.captionText': 'Cada trazo corresponde a una dimensión física verificada. Sin margen para la improvisación.',

      'services.title': 'Qué cambia al integrar mi trabajo en tu flujo',
      'services.subtitle': 'Tres ejes prácticos y autorizados diseñados para aliviar la carga de tu estudio y fiscalizar la ejecución real:',
      'services.s1Title': 'Supervisión de Obras & Fiscalización',
      'services.s1Desc': 'Acompañamiento y control técnico de ejecución presencial en obras en Madeira. Verificación rigurosa del cumplimiento de planos ejecutivos, especificaciones y calidad de acabados.',
      'services.s1Item1': 'Acompañamiento e inspección de obra presencial en Madeira',
      'services.s1Item2': 'Control de conformidad técnica y verificación de mediciones',
      'services.s1Item3': 'Informes de progreso y detección temprana de desvíos',
      'services.s2Title': 'Modelado 3D, Figuras & Visualización',
      'services.s2Desc': 'Construcción de modelos tridimensionales limpios, figuras 3D y estudios volumétricos de alta fidelidad para soporte a despachos de arquitectura, promotores y proyectos particulares.',
      'services.s2Item1': 'Modelos 3D volumétricos precisos y figuras tridimensionales',
      'services.s2Item2': 'Estudios de proporción, asoleamiento y axonometrías explicativas',
      'services.s2Item3': 'Apoyo técnico remoto en dibujo CAD para estudios externos',
      'services.s3Title': 'Prototipado Físico, Madera & Metal',
      'services.s3Desc': 'Materialización física en taller: maquetas arquitectónicas de estudio y concurso a escala, ebanistería de detalle, pirograbado de precisión y corte/grabado en láminas metálicas.',
      'services.s3Item1': 'Maquetas volumétricas en abedul, latón y acrílico',
      'services.s3Item2': 'Pirograbado artístico y planos técnicos grabados en madera',
      'services.s3Item3': 'Corte, perforación y grabado en láminas de metal',
      'services.bento1Title': 'Comprensión Espacial Tangible en Escala 1:30',
      'services.bento1Sub': 'Abedul seleccionado, latón trabajado y acrílico satinado.',
      'services.bento2Title': 'Fusión de Carpintería de Precisión & Metal',
      'services.bento2Sub': 'Grabados técnicos o botánicos en madera de nogal.',

      'method.title': 'La garantía de un socio de confianza',
      'method.subtitle': 'La técnica sin disciplina no resuelve plazos. Estas son las directrices que rigen cada colaboración:',
      'method.t1Title': 'Puntualidad & Compromiso Inquebrantable',
      'method.t1Desc': 'Los plazos acordados se cumplen con rigor absoluto. Comunicación proactiva de cada hito y entregas escalonadas sin excusas ni sorpresas de último momento.',
      'method.t2Title': 'Atención Minuciosa a las Instrucciones',
      'method.t2Desc': 'Capacidad de interpretar y seguir fielmente los estándares gráficos, capas y criterios de tu despacho. El trabajo se ejecuta correctamente a la primera.',
      'method.t3Title': 'Optimización Práctica de Soluciones',
      'method.t3Desc': 'Enfoque práctico y resolutivo. Encontrar la vía más limpia, constructiva y eficiente para resolver nudos complejos sin encarecer la ejecución.',
      'method.t4Title': 'Dominio Integrado: Software & Herramientas',
      'method.t4Desc': 'Conocimiento exhaustivo tanto de software CAD/3D de arquitectura como de herramientas de taller, corte milimétrico, calibración y materiales.',

      'timeline.title': 'Fundamentos sólidos y evolución continua',
      'timeline.subtitle': 'Formación académica en arquitectura unida a la supervisión técnica en obra y al trabajo en taller:',
      'timeline.s1Title': 'Licenciatura en Arquitectura',
      'timeline.s1Desc': 'Culminación del programa universitario de 5 años con énfasis en geometría descriptiva, estructuras, tecnología de materiales, composición y urbanismo.',
      'timeline.s2Year': 'HOY',
      'timeline.s2Title': 'Supervisión de Obras & Modelado 3D',
      'timeline.s2Inst': 'Funchal / Madeira, Portugal · Actividad Técnica & Remota',
      'timeline.s2Desc': 'Residencia en Madeira. Actividad centrada en la supervisión e inspección técnica de obras en terreno, modelado y figuras 3D, y soporte a estudios de arquitectura (sin firma independiente de proyectos en Portugal hasta convalidación en la Ordem dos Arquitectos).',
      'timeline.s3Year': 'OFICIO',
      'timeline.s3Title': 'Práctica en Madera, Metal y Pirograbado',
      'timeline.s3Inst': 'Taller de Fabricación Física & Prototipado',
      'timeline.s3Desc': 'Desarrollo constante de técnicas manuales y mecanizadas: corte y grabado de chapas de metal, pirograbado arquitectónico sobre madera y maquetación fina.',

      'faq.title': 'Preguntas Frecuentes',
      'faq.subtitle': 'Respuestas directas sobre cómo colaboramos de manera fluida:',
      'faq.q1': '¿Qué tipo de servicios puede prestar legalmente en Portugal?',
      'faq.a1': 'En Portugal, actúo como supervisor e inspector técnico de obras en terreno, especialista en modelado y figuras 3D, y en la producción física de maquetas y piezas en madera/metal. Para despachos y estudios, presto apoyo técnico y de dibujo. No firmo proyectos de arquitectura independientes en Portugal hasta convalidar la colegiatura en la Ordem dos Arquitectos.',
      'faq.q2': '¿Cómo colaboramos si tu estudio está fuera de Madeira?',
      'faq.a2': 'El flujo a distancia para modelado 3D y soporte CAD es ágil y estructurado. Compartimos carpetas en la nube (Drive, Dropbox, OneDrive), sincronizamos especificaciones por videollamada y entrego archivos versionados. Trabajo con total disponibilidad en husos horarios europeos y americanos.',
      'faq.q3': '¿En qué formatos entregas los planos y modelos 3D?',
      'faq.a3': 'Entrego archivos DWG organizados por capas técnicas, PDF vectoriales listos para imprimir a escala, modelos IFC/OBJ/SKP para compatibilización y archivos DXF limpios para corte CNC o láser.',
      'faq.q4': '¿Cómo solicito un presupuesto o agendo una reunión?',
      'faq.a4': 'Haz clic en "Contactar" para enviar un correo directo o copiar la dirección con un resumen de lo que necesitas. Responderé en el mismo día o en un máximo de 24 horas laborables con total disponibilidad.',

      'contact.profileSub': 'Graduado en Arquitectura (UJAP 2022) · Supervisión & Modelado 3D',
      'contact.title': '¿Damos forma a tu próximo proyecto?',
      'contact.desc': 'Ya sea para supervisión y fiscalización técnica de obras en terreno en Madeira, modelado tridimensional o materialización de piezas a medida en madera y metal, hablemos directamente.',
      'contact.sendEmail': 'Enviar Correo Directo',
      'contact.copyEmail': 'Copiar Correo',
      'contact.emailCopied': '¡Correo copiado al portapapeles!',
      'contact.emailLabel': 'Dirección:',

      'footer.desc': 'Graduado en Arquitectura por la UJAP (2022). Supervisión y fiscalización técnica de obras en Madeira, modelado 3D y piezas en madera y metal.',
      'footer.contactsLabel': 'Contactos',
      'footer.socialsLabel': 'Redes sociales',
      'footer.privacy': 'Política de Privacidad',
      'footer.rights': 'Todos los derechos reservados.',

      'privacy.title': 'Política de Privacidad',
      'privacy.p1': 'Este sitio web es un espacio de portafolio profesional y presentación técnica de Carlos Alberto de Basilio.',
      'privacy.item1': 'Sin Cookies de Rastreo: No utilizamos cookies analíticas invasivas ni compartimos datos con redes publicitarias.',
      'privacy.item2': 'Contacto Profesional: Al contactar por correo electrónico (carlosbasilio.arq@gmail.com), tus datos se utilizarán estrictamente para responder a tu consulta técnica.',
      'privacy.item3': 'Confidencialidad: Los planos, modelos e información de obra compartidos se tratan bajo estricto secreto profesional.',
      'privacy.foot': 'Para cualquier consulta o eliminación de tus datos de contacto, escribe a carlosbasilio.arq@gmail.com.'
    },

    en: {
      'nav.role': 'ARCHITECTURE & CRAFT',
      'nav.problem': 'The Challenge',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'projects.badge': 'Portfolio & Executive Blueprints',
      'projects.title': 'Works & Executive Blueprints',
      'projects.subtitle': 'From urban planning to millimeter-accurate detailing: complete executive documentation for the Arts Cultural Center drafted by Carlos Alberto de Basilio.',
      'projects.filterAll': 'All (12)',
      'projects.filterArch': 'Floor Plans',
      'projects.filterElev': 'Elevations & Sections',
      'projects.filterDetails': 'Details & Spatial Truss',
      'projects.filterStruct': 'Structural Engineering',
      'projects.ctxProjectLabel': 'Thesis Project',
      'projects.ctxAreaLabel': 'Built Area',
      'projects.ctxScopeLabel': 'Technical Scope',
      'projects.ctxSoftLabel': 'Software & Drafting',
      'projects.zoomHint': 'Click to enlarge',
      'projects.expandBtn': 'Enlarge Sheet',
      'projects.scale': 'Scale',
      'projects.date': 'Date',
      'projects.author': 'Author',
      'nav.method': 'Methodology',
      'nav.timeline': 'Milestones',
      'nav.faq': 'FAQ',
      'cta.contact': 'Contact',

      'hero.title': 'From conceptual idea to executive precision and tangible craft.',
      'hero.description': 'Technical support for architectural studios in 3D modeling, on-site construction supervision in Madeira, and bespoke physical fabrication (scale models, wood and metal cutting) with millimetric precision.',
      'hero.location': 'Madeira, Portugal · Remote Availability',

      'problem.title': 'Tight deadlines, overwhelmed studios, or projects delayed by lack of technical depth?',
      'problem.subtitle': 'In everyday architectural practice and custom construction, the same friction points arise, costing time, budget, and peace of mind:',
      'problem.p1Title': 'Executive Drafting Bottlenecks',
      'problem.p1Desc': 'Permit filings and construction deadlines piling up. Your senior team needs to focus on concepts and clients, yet spends weeks redrafting dimensioned plans, schedules, and details.',
      'problem.p2Title': 'On-Site Construction Errors & Discrepancies',
      'problem.p2Desc': 'Lack of continuous on-site inspection. Without rigorous technical site supervision, unforeseen deviations and contractor guesswork compromise project quality.',
      'problem.p3Title': 'The Gap Between Screen Pixels and Physical Matter',
      'problem.p3Desc': 'Difficulty presenting complex volumetric studies to clients, or fabricating bespoke architectural elements (custom woodwork, laser-cut metal) without a proven physical prototype.',
      'problem.captionText': 'Every line corresponds to a verified physical dimension. Zero guesswork.',

      'services.title': 'What changes when integrating my work into your pipeline',
      'services.subtitle': 'Three authorized and practical disciplines designed to relieve studio strain and supervise real execution:',
      'services.s1Title': 'Site Supervision & Construction Inspection',
      'services.s1Desc': 'On-site technical supervision and quality inspection on construction sites in Madeira. Rigorous verification of executive drawings, specifications, and finish quality.',
      'services.s1Item1': 'On-site construction supervision and inspections in Madeira',
      'services.s1Item2': 'Technical compliance control and measurement verification',
      'services.s1Item3': 'Progress reports and early discrepancy detection',
      'services.s2Title': '3D Modeling, Figures & Visualization',
      'services.s2Desc': 'Creation of clean 3D models, 3D figures, and high-fidelity volumetric studies supporting architectural practices, developers, and private projects.',
      'services.s2Item1': 'Precise volumetric 3D models and spatial figures',
      'services.s2Item2': 'Proportion studies, solar analysis, and explanatory axonometrics',
      'services.s2Item3': 'Remote technical CAD drafting support for external studios',
      'services.s3Title': 'Physical Prototyping, Wood & Metal',
      'services.s3Desc': 'Hands-on atelier fabrication: architectural scale models, precision carpentry, fine pyrography on hardwood, and laser-cut engraved sheet metal fixtures.',
      'services.s3Item1': 'Scale models in birch plywood, brass, and acrylic',
      'services.s3Item2': 'Architectural pyrography and burnt timber drawings',
      'services.s3Item3': 'Cutting, drilling, and engraving in metal sheets',
      'services.bento1Title': 'Tangible Spatial Reality at 1:30 Scale',
      'services.bento1Sub': 'Fine birchwood, milled brass, and frosted acrylic.',
      'services.bento2Title': 'Precision Joinery Meets Machined Metal',
      'services.bento2Sub': 'Detailed architectural engravings on solid walnut.',

      'method.title': 'The guarantee of a dependable technical ally',
      'method.subtitle': 'Technical skill without reliability fails deadlines. Here are the core pillars behind every collaboration:',
      'method.t1Title': 'Uncompromising Punctuality',
      'method.t1Desc': 'Agreed deadlines are non-negotiable commitments. Proactive milestone tracking and phased deliverables with zero excuses or eleventh-hour delays.',
      'method.t2Title': 'Meticulous Adherence to Instructions',
      'method.t2Desc': 'Trained ability to follow your studio’s graphic guidelines, layering conventions, and technical criteria. Work is done right on the first pass.',
      'method.t3Title': 'Practical Problem-Solving Instinct',
      'method.t3Desc': 'Hands-on pragmatic mindset. Finding the most elegant, buildable, and cost-efficient solution to complex construction details without unnecessary complication.',
      'method.t4Title': 'Integrated Mastery: Software & Tools',
      'method.t4Desc': 'Comprehensive command of 3D/CAD digital environments alongside workshop machines, precision saws, calibration gauges, and materials.',

      'timeline.title': 'Solid fundamentals, continuous refinement',
      'timeline.subtitle': 'University architecture foundation paired with active site supervision and workshop practice:',
      'timeline.s1Title': 'Bachelor of Architecture',
      'timeline.s1Desc': 'Graduated from Universidad José Antonio Páez with a rigorous curriculum in descriptive geometry, structural calculations, building materials, and urban design.',
      'timeline.s2Year': 'NOW',
      'timeline.s2Title': 'Site Supervision & 3D Modeling',
      'timeline.s2Inst': 'Funchal / Madeira, Portugal · Technical & Remote Practice',
      'timeline.s2Desc': 'Based in Madeira. Focus on on-site construction supervision, 3D modeling, and technical CAD support for architectural studios (independent project signing in Portugal pending Ordem dos Arquitectos registration).',
      'timeline.s3Year': 'CRAFT',
      'timeline.s3Title': 'Hands-on Wood, Metal & Pyrography Atelier',
      'timeline.s3Inst': 'Physical Prototyping & Maker Workshop',
      'timeline.s3Desc': 'Active development in manual and digital fabrication: sheet metal cutting, fine architectural pyrography, and exhibition-grade scale modeling.',

      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Straightforward answers on working together seamlessly:',
      'faq.q1': 'What services can you legally provide in Portugal?',
      'faq.a1': 'In Portugal, I operate as an on-site technical construction supervisor, specialist in 3D modeling and 3D figures, and maker of physical scale models and wood/metal pieces. For architecture studios, I provide technical CAD support. I do not independently sign architectural building projects in Portugal until my registration with the Ordem dos Arquitectos is completed.',
      'faq.q2': 'How do we collaborate if your studio is outside Madeira?',
      'faq.a2': 'Remote collaboration for 3D modeling and CAD support is streamlined. We use shared cloud folders (Drive, Dropbox, OneDrive), review specs via video calls, and provide version-controlled deliverables across European and American time zones.',
      'faq.q3': 'In which file formats do you deliver technical drawings and 3D models?',
      'faq.a3': 'Deliverables include layered DWG files, print-ready vector PDFs, IFC/OBJ/SKP models for coordination, and clean DXF files ready for CNC or laser cutting machines.',
      'faq.q4': 'How do I request a proposal or schedule a meeting?',
      'faq.a4': 'Simply click "Contact" below to send a direct email or copy my address with a summary of your project. I will reply within 24 business hours with full availability.',

      'contact.profileSub': 'Architecture Graduate (UJAP 2022) · Site Supervision & 3D Modeling',
      'contact.title': 'Shall we bring your next project into reality?',
      'contact.desc': 'Whether you need on-site technical supervision in Madeira, 3D modeling, or bespoke craft in wood and metal, reach out directly.',
      'contact.sendEmail': 'Send Direct Email',
      'contact.copyEmail': 'Copy Email Address',
      'contact.emailCopied': 'Email address copied to clipboard!',
      'contact.emailLabel': 'Address:',

      'footer.desc': 'Architecture graduate (UJAP 2022). On-site construction supervision in Madeira, 3D modeling, and bespoke craft in wood and metal.',
      'footer.contactsLabel': 'Contacts',
      'footer.socialsLabel': 'Social media',
      'footer.privacy': 'Privacy Policy',
      'footer.rights': 'All rights reserved.',

      'privacy.title': 'Privacy Policy',
      'privacy.p1': 'This website is a professional portfolio and technical showcase for Carlos Alberto de Basilio.',
      'privacy.item1': 'Zero Tracking Cookies: We do not use invasive analytical cookies nor share browsing data with ad networks.',
      'privacy.item2': 'Professional Inquiries: When contacting via email (carlosbasilio.arq@gmail.com), your details are strictly used to reply to your technical inquiry.',
      'privacy.item3': 'Confidentiality: Drawings, models, and project specs shared with us are treated with strict professional discretion.',
      'privacy.foot': 'For any questions or removal of your contact details, please write to carlosbasilio.arq@gmail.com.'
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

    // Re-render active blueprint slide to update localized title/description
    if (typeof renderBlueprintSlide === 'function') {
      renderBlueprintSlide(currentBlueprintIndex);
    }
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
     3. SONNER-INSPIRED TOAST ENGINE (SAFE DOM HARDENED)
     ========================================================================== */
  function showToast(message, duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'toast-icon');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2.5');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20 6L9 17l-5-5');
    svg.appendChild(path);

    const span = document.createElement('span');
    span.textContent = String(message); // Safe textContent prevents XSS

    toast.appendChild(svg);
    toast.appendChild(span);
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
     5. VIDEO CONTROLS & INTERACTION (CLEAN DISAPPEAR ON PLAY)
     ========================================================================== */
  function initVideoPlayer() {
    const video = document.getElementById('hero-video');
    const playBtn = document.getElementById('video-play-toggle');
    const videoBox = document.getElementById('hero-video-box');

    if (!video) return;

    function setPlayingState(isPlaying) {
      if (videoBox) {
        videoBox.classList.toggle('is-playing', isPlaying);
      }
      if (playBtn) {
        playBtn.setAttribute('aria-label', isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo');
      }
    }

    function togglePlayback() {
      if (video.paused) {
        video.play().then(() => {
          setPlayingState(true);
        }).catch(() => {
          // Auto-play prevention fallback
        });
      } else {
        video.pause();
        setPlayingState(false);
      }
    }

    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlayback();
      });
    }

    video.addEventListener('click', () => {
      togglePlayback();
    });

    video.addEventListener('play', () => setPlayingState(true));
    video.addEventListener('pause', () => setPlayingState(false));
    video.addEventListener('ended', () => setPlayingState(false));
  }


  /* ==========================================================================
     5.1. ARCHITECTURAL BLUEPRINT WORKS SLIDER & LIGHTBOX ENGINE
     ========================================================================== */
  const blueprintSlides = [
    {
      code: 'A-1',
      category: 'urbanismo',
      scale: '1:150',
      date: '14/07/2021',
      title_pt: 'Implantação & Enquadramento Urbano',
      title_es: 'Implantación & Encuadre Urbano',
      title_en: 'Site Plan & Urban Integration',
      desc_pt: 'Integração volumétrica do Centro Cultural na malha histórica entre a Calle Libertad e a Escola Arturo Michelena.',
      desc_es: 'Integración volumétrica del Centro Cultural en la trama histórica entre la Calle Libertad y la Escuela Arturo Michelena.',
      desc_en: 'Volumetric integration of the Arts Cultural Center within the historic grid along Calle Libertad.',
      image: 'assets/images/blueprints/plano-a1-implantacion.webp'
    },
    {
      code: 'A-2',
      category: 'arquitetura',
      scale: '1:100',
      date: '14/07/2021',
      title_pt: 'Planta Baixa Executiva (+0,30 m)',
      title_es: 'Planta Baja Ejecutiva (+0,30 m)',
      title_en: 'Executive Ground Floor Plan (+0.30 m)',
      desc_pt: 'Distribuição programática: receção, salões de música, pátio central ajardinado, auditório, café e zonas técnicas.',
      desc_es: 'Distribución programática: recepción, salones de música, patio central ajardinado, auditorio, café y áreas técnicas.',
      desc_en: 'Programmatic layout: reception lobby, music halls, landscaped central courtyard, auditorium, café, and services.',
      image: 'assets/images/blueprints/plano-a2-planta-baja.webp'
    },
    {
      code: 'A-3',
      category: 'arquitetura',
      scale: '1:100',
      date: '14/07/2021',
      title_pt: 'Planta Nível 1 (+4,00 m)',
      title_es: 'Planta Nivel 1 (+4,00 m)',
      title_en: 'Level 1 Floor Plan (+4.00 m)',
      desc_pt: 'Módulo de salas de artes plásticas, setor administrativo, biblioteca e circulação periférica sobre o pátio.',
      desc_es: 'Módulo de talleres de artes plásticas, sector administrativo, biblioteca y circulación perimetral sobre el patio.',
      desc_en: 'Fine arts studio module, administrative suite, library, and perimeter circulation overlooking the courtyard.',
      image: 'assets/images/blueprints/plano-a3-planta-nivel-1.webp'
    },
    {
      code: 'A-4',
      category: 'arquitetura',
      scale: '1:100',
      date: '14/07/2021',
      title_pt: 'Planta Nível 2 (+8,00 m)',
      title_es: 'Planta Nivel 2 (+8,00 m)',
      title_en: 'Level 2 Floor Plan (+8.00 m)',
      desc_pt: 'Piso superior com galeria de exposições, amplos terraços ao ar livre, quiosque de café e salão polivalente.',
      desc_es: 'Piso superior con galería de exposiciones, amplias terrazas al aire libre, kiosco de café y salón de usos múltiples.',
      desc_en: 'Top level featuring exhibition art gallery, spacious open-air terraces, coffee lounge, and multi-purpose hall.',
      image: 'assets/images/blueprints/plano-a4-planta-nivel-2.webp'
    },
    {
      code: 'A-5',
      category: 'fachadas',
      scale: '1:75',
      date: '14/07/2021',
      title_pt: 'Alçados Principais: Fachadas Este & Norte',
      title_es: 'Fachadas Principales: Alzados Este & Norte',
      title_en: 'Main Elevations: East & North Facades',
      desc_pt: 'Estudo de alçados urbanos com pele paramétrica de alumínio ranhurado, ritmo de vãos e revestimento mineral.',
      desc_es: 'Estudio de fachadas urbanas con piel de aluminio ranurado, ritmo de vanos y revestimiento mineral blanco.',
      desc_en: 'Urban elevations featuring custom grooved aluminum sun-shading skin, window rhythms, and mineral plaster.',
      image: 'assets/images/blueprints/plano-a5-fachadas-este-norte.webp'
    },
    {
      code: 'A-6',
      category: 'fachadas',
      scale: '1:75',
      date: '14/07/2021',
      title_pt: 'Alçados Laterais: Fachadas Oeste & Sul',
      title_es: 'Fachadas Laterales: Alzados Oeste & Sur',
      title_en: 'Side Elevations: West & South Facades',
      desc_pt: 'Fachadas de transição urbana com grelhas de ventilação natural, controlo solar e caixilharias metálicas.',
      desc_es: 'Fachadas de transición urbana con rejillas de ventilación natural, control solar y carpinterías metálicas.',
      desc_en: 'Transition elevations with natural ventilation louvers, solar control, and industrial metal window framing.',
      image: 'assets/images/blueprints/plano-a6-fachadas-oeste-sur.webp'
    },
    {
      code: 'A-7',
      category: 'fachadas',
      scale: '1:100',
      date: '14/07/2021',
      title_pt: 'Cortes Gerais Longitudinais A-A\' & B-B\'',
      title_es: 'Cortes Generales Longitudinales A-A\' & B-B\'',
      title_en: 'Building Sections A-A\' & B-B\'',
      desc_pt: 'Secções construtivas ilustrando o pé-direito duplo, a treliça espacial tridilosa sobre o pátio e iluminação zenital.',
      desc_es: 'Secciones constructivas ilustrando la doble altura, la estructura tridilosa sobre el patio e iluminación cenital.',
      desc_en: 'Cross-sections illustrating double-height volumes, spatial truss (tridilosa) roof over courtyard, and skylights.',
      image: 'assets/images/blueprints/plano-a7-cortes-generales.webp'
    },
    {
      code: 'A-8',
      category: 'arquitetura',
      scale: '1:150',
      date: '14/07/2021',
      title_pt: 'Planta de Coberturas & Drenagem',
      title_es: 'Planta de Cubiertas & Drenaje',
      title_en: 'Roof Plan & Stormwater Drainage',
      desc_pt: 'Desenho executivo da cobertura metálica em tridilosa, claraboias de iluminação zenital e cálculo de caleiras.',
      desc_es: 'Plano ejecutivo de cubierta metálica en tridilosa, claraboyas de luz cenital y pendientes de desagüe pluvial.',
      desc_en: 'Executive drawing of metal spatial roof truss, zenithal skylights, and stormwater collection grading.',
      image: 'assets/images/blueprints/plano-a8-planta-techo.webp'
    },
    {
      code: 'A-9',
      category: 'pormenores',
      scale: 'Indicadas (1:10 / 1:50)',
      date: '14/07/2021',
      title_pt: 'Pormenores Construtivos & Tridilosa',
      title_es: 'Detalles Constructivos & Tridilosa',
      title_en: 'Construction Detailing & Spatial Truss',
      desc_pt: 'Detalhes de fixação da pele de alumínio, nó espacial da tridilosa metálica, isolamento acústico em cortiça e caixilhos.',
      desc_es: 'Detalles de anclaje de piel de aluminio, nudo espacial de tridilosa metálica, aislamiento de corcho y remates.',
      desc_en: 'Assembly details for aluminum facade skin, spatial truss node connection, cork acoustic paneling, and sills.',
      image: 'assets/images/blueprints/plano-a9-detalhes-construtivos.webp'
    },
    {
      code: 'A-10',
      category: 'pormenores',
      scale: 'Indicada',
      date: '14/07/2021',
      title_pt: 'Núcleos de Circulação & Elevadores',
      title_es: 'Núcleos de Circulación & Ascensores',
      title_en: 'Vertical Circulation & Elevator Cores',
      desc_pt: 'Secções técnicas e axadrezados tridimensionais dos ascensores hidráulicos e caixas de escada de emergência.',
      desc_es: 'Secciones técnicas y axonométricas de ascensores hidráulicos y cajas de escalera de evacuación.',
      desc_en: 'Technical vertical sections and axonometrics of hydraulic elevators and fire egress stairwells.',
      image: 'assets/images/blueprints/plano-a10-circulacion-vertical.webp'
    },
    {
      code: 'E-1',
      category: 'estruturas',
      scale: '1:100',
      date: '14/07/2021',
      title_pt: 'Engenharia de Fundações & Sapatas',
      title_es: 'Ingeniería de Fundaciones & Zapatas',
      title_en: 'Structural Foundation & Footings',
      desc_pt: 'Planta estrutural de fundações com dimensionamento de sapatas isoladas em betão armado, pedestais e vigas de travamento.',
      desc_es: 'Plano estructural de fundaciones con dimensionamiento de zapatas aisladas en concreto armado y vigas de riostra.',
      desc_en: 'Structural foundation layout with reinforced concrete spread footings, pedestals, and seismic tie beams.',
      image: 'assets/images/blueprints/plano-e1-fundaciones.webp'
    },
    {
      code: 'E-2',
      category: 'estruturas',
      scale: '1:100',
      date: '14/07/2021',
      title_pt: 'Estrutura do Nível 1 & Lajes Nervuradas',
      title_es: 'Estructura Nivel 1 & Losas Nervadas',
      title_en: 'Level 1 Structural Framing & Ribbed Slabs',
      desc_pt: 'Planta de cofragem e cálculo de lajes nervuradas unidirecionais em betão armado e pórticos sismorresistentes.',
      desc_es: 'Plano de encofrado y cálculo de losas nervadas unidireccionales en concreto armado y pórticos sismorresistentes.',
      desc_en: 'Formwork and structural design of one-way reinforced concrete ribbed slabs and lateral-resisting frames.',
      image: 'assets/images/blueprints/plano-e2-estructura-nivel-1.webp'
    }
  ];

  let currentBlueprintIndex = 0;
  let activeFilter = 'all';
  let filteredSlides = [...blueprintSlides];

  function getLocalizedText(obj, prefix) {
    if (currentLang === 'es') return obj[prefix + '_es'] || obj[prefix + '_pt'];
    if (currentLang === 'en') return obj[prefix + '_en'] || obj[prefix + '_pt'];
    return obj[prefix + '_pt'];
  }

  function getCategoryLabel(cat) {
    const map = {
      all: currentLang === 'es' ? 'Todos' : currentLang === 'en' ? 'All' : 'Todos',
      arquitetura: currentLang === 'es' ? 'Arquitectura' : currentLang === 'en' ? 'Architecture' : 'Arquitetura',
      fachadas: currentLang === 'es' ? 'Fachadas & Cortes' : currentLang === 'en' ? 'Elevations' : 'Alçados & Cortes',
      pormenores: currentLang === 'es' ? 'Detalles Construtivos' : currentLang === 'en' ? 'Details' : 'Pormenores',
      estruturas: currentLang === 'es' ? 'Estructura & Cálculo' : currentLang === 'en' ? 'Structures' : 'Estruturas',
      urbanismo: currentLang === 'es' ? 'Urbanismo' : currentLang === 'en' ? 'Urban Planning' : 'Urbanismo'
    };
    return map[cat] || cat;
  }

  function renderBlueprintSlide(index) {
    const track = document.getElementById('blueprint-track');
    const counterCurrent = document.getElementById('blueprint-current');
    const counterTotal = document.getElementById('blueprint-total');
    const dotsContainer = document.getElementById('blueprint-dots');

    if (!track || filteredSlides.length === 0) return;

    if (index < 0) index = filteredSlides.length - 1;
    if (index >= filteredSlides.length) index = 0;
    currentBlueprintIndex = index;

    function escapeHTML(str) {
      if (str == null) return '';
      return String(str).replace(/[&<>"']/g, match => {
        switch (match) {
          case '&': return '&amp;';
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '"': return '&quot;';
          case "'": return '&#39;';
          default: return match;
        }
      });
    }

    const item = filteredSlides[currentBlueprintIndex];
    const title = getLocalizedText(item, 'title');
    const desc = getLocalizedText(item, 'desc');
    const zoomText = translations[currentLang]['projects.zoomHint'] || 'Clique para ampliar';
    const expandBtnText = translations[currentLang]['projects.expandBtn'] || 'Ampliar Plano';
    const scaleLabel = translations[currentLang]['projects.scale'] || 'Escala';
    const dateLabel = translations[currentLang]['projects.date'] || 'Data';
    const authorLabel = translations[currentLang]['projects.author'] || 'Autor';

    track.innerHTML = `
      <article class="blueprint-slide active" aria-roledescription="slide" aria-label="${escapeHTML(item.code)} - ${escapeHTML(title)}">
        <!-- Left Visual Box -->
        <div class="blueprint-canvas-box" id="blueprint-canvas-trigger" role="button" tabindex="0" aria-label="${escapeHTML(expandBtnText)}: ${escapeHTML(item.code)}">
          <div class="blueprint-zoom-hint" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            <span>${escapeHTML(zoomText)}</span>
          </div>
          <img 
            src="${escapeHTML(item.image)}" 
            alt="Plano arquitetónico ${escapeHTML(item.code)} — ${escapeHTML(title)}" 
            class="blueprint-img"
            loading="eager"
            id="active-blueprint-img">
        </div>

        <!-- Right Specifications Column -->
        <div class="blueprint-details-column">
          <div>
            <div class="blueprint-meta-header">
              <span class="sheet-code-pill">${escapeHTML(item.code)}</span>
              <span class="sheet-category-pill">${escapeHTML(getCategoryLabel(item.category))}</span>
            </div>

            <h3 class="sheet-title">${escapeHTML(title)}</h3>
            <p class="sheet-description">${escapeHTML(desc)}</p>

            <ul class="sheet-spec-list">
              <li class="sheet-spec-item">
                <span>${escapeHTML(scaleLabel)}:</span>
                <strong>${escapeHTML(item.scale)}</strong>
              </li>
              <li class="sheet-spec-item">
                <span>${escapeHTML(dateLabel)}:</span>
                <strong>${escapeHTML(item.date)}</strong>
              </li>
              <li class="sheet-spec-item">
                <span>${escapeHTML(authorLabel)}:</span>
                <strong>Carlos Alberto de Basilio</strong>
              </li>
            </ul>
          </div>

          <div class="sheet-actions-row">
            <button type="button" class="btn-blueprint-expand" id="btn-blueprint-modal" aria-label="${escapeHTML(expandBtnText)}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              <span>${escapeHTML(expandBtnText)}</span>
            </button>
          </div>
        </div>
      </article>
    `;

    // Wire click on canvas & button to open lightbox
    const canvas = document.getElementById('blueprint-canvas-trigger');
    const expandBtn = document.getElementById('btn-blueprint-modal');
    if (canvas) canvas.addEventListener('click', openBlueprintLightbox);
    if (canvas) canvas.addEventListener('keydown', (e) => { if (e.key === 'Enter') openBlueprintLightbox(); });
    if (expandBtn) expandBtn.addEventListener('click', openBlueprintLightbox);

    // Update Counter
    if (counterCurrent) counterCurrent.textContent = String(currentBlueprintIndex + 1).padStart(2, '0');
    if (counterTotal) counterTotal.textContent = String(filteredSlides.length).padStart(2, '0');

    // Update Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      filteredSlides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `blueprint-dot ${idx === currentBlueprintIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para a prancha ${idx + 1}`);
        dot.addEventListener('click', () => renderBlueprintSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }
  }

  function openBlueprintLightbox() {
    const lightbox = document.getElementById('blueprint-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCode = document.getElementById('lightbox-code');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');

    if (!lightbox || filteredSlides.length === 0) return;

    const item = filteredSlides[currentBlueprintIndex];
    const title = getLocalizedText(item, 'title');
    const desc = getLocalizedText(item, 'desc');

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = `${item.code} — ${title}`;
    }
    if (lightboxCode) lightboxCode.textContent = item.code;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;

    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    } else {
      lightbox.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeBlueprintLightbox() {
    const lightbox = document.getElementById('blueprint-lightbox');
    if (!lightbox) return;
    if (typeof lightbox.close === 'function') {
      lightbox.close();
    } else {
      lightbox.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  function initBlueprintSlider() {
    const prevBtn = document.getElementById('blueprint-prev');
    const nextBtn = document.getElementById('blueprint-next');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightbox = document.getElementById('blueprint-lightbox');
    const filterPills = document.querySelectorAll('.filter-pill');

    if (!document.getElementById('blueprint-viewport')) return;

    // Filter clicks
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        activeFilter = pill.getAttribute('data-filter');
        if (activeFilter === 'all') {
          filteredSlides = [...blueprintSlides];
        } else {
          filteredSlides = blueprintSlides.filter(s => s.category === activeFilter);
        }
        renderBlueprintSlide(0);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        renderBlueprintSlide(currentBlueprintIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        renderBlueprintSlide(currentBlueprintIndex + 1);
      });
    }

    // Lightbox Controls
    if (lightboxClose) lightboxClose.addEventListener('click', closeBlueprintLightbox);

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => {
        renderBlueprintSlide(currentBlueprintIndex - 1);
        openBlueprintLightbox();
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => {
        renderBlueprintSlide(currentBlueprintIndex + 1);
        openBlueprintLightbox();
      });
    }

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeBlueprintLightbox();
      });
      lightbox.addEventListener('close', () => {
        document.body.style.overflow = '';
      });
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (lightbox && lightbox.open) {
        if (e.key === 'ArrowLeft') {
          renderBlueprintSlide(currentBlueprintIndex - 1);
          openBlueprintLightbox();
        } else if (e.key === 'ArrowRight') {
          renderBlueprintSlide(currentBlueprintIndex + 1);
          openBlueprintLightbox();
        } else if (e.key === 'Escape') {
          closeBlueprintLightbox();
        }
      }
    });

    // Touch Swipe support on viewport
    const viewport = document.getElementById('blueprint-viewport');
    if (viewport) {
      let touchStartX = 0;
      viewport.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) renderBlueprintSlide(currentBlueprintIndex + 1);
          else renderBlueprintSlide(currentBlueprintIndex - 1);
        }
      }, { passive: true });
    }

    // Initial render
    renderBlueprintSlide(0);
  }

  /* ==========================================================================
     6. PRIVACY POLICY MODAL (ACCESSIBLE NATIVE DIALOG)
     ========================================================================== */
  function initPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    const openBtn = document.getElementById('open-privacy-btn');
    const closeBtn = document.getElementById('privacy-close-btn');

    if (!modal) return;

    function openModal() {
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      document.body.style.overflow = '';
    }

    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                          rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog || e.target === modal) {
        closeModal();
      }
    });

    modal.addEventListener('close', () => {
      document.body.style.overflow = '';
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
    initBlueprintSlider();
    initPrivacyModal();
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
