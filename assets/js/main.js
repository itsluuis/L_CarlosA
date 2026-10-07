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
      'footer.privacy': 'Privacidade & Termos',
      'footer.rights': 'Todos os direitos reservados.'
    },

    es: {
      'nav.role': 'ARQUITECTURA & OFICIO',
      'nav.problem': 'El Problema',
      'nav.services': 'Servicios',
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
      'footer.privacy': 'Política de privacidad',
      'footer.rights': 'Todos los derechos reservados.'
    },

    en: {
      'nav.role': 'ARCHITECTURE & CRAFT',
      'nav.problem': 'The Challenge',
      'nav.services': 'Services',
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
      'footer.rights': 'All rights reserved.'
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
