import { IMG } from '@/data/site';

export const news = [
  {
    id: 'art-1',
    date: '2026-09-12',
    category: ['Portos e tecnologia', 'Ports and technology'],
    image: IMG.port,
    title: [
      'Gêmeos digitais e Edge AI na gestão portuária 4.0',
      'Digital twins and Edge AI in port management 4.0',
    ],
    summary: [
      'Como a infraestrutura de visão computacional na borda reduz o tempo de atracação e sustenta a conformidade ambiental em terminais de alto volume.',
      'How edge computer vision infrastructure reduces berthing time and sustains environmental compliance in high-volume terminals.',
    ],
    body: {
      pt: [
        'Terminais portuários operam sob duas pressões simultâneas: produtividade e conformidade ambiental. A resposta que temos aplicado combina sensores de campo, visão computacional na borda e um gêmeo digital que espelha a operação em tempo quase real.',
        'O ponto central é a latência. Processar imagem e sonar no próprio terminal permite que um alerta de anomalia chegue ao operador em segundos, sem depender de enlace de longa distância. O mesmo dado alimenta a trilha de evidências usada em auditorias.',
        'A camada de integração é o que transforma sensores em decisão: AIS, sistemas de pátio e boias oceanográficas passam a falar a mesma linguagem de eventos, com carimbo de tempo e rastreabilidade de origem.',
      ],
      en: [
        'Port terminals operate under two simultaneous pressures: productivity and environmental compliance. Our response combines field sensors, edge computer vision and a digital twin that mirrors the operation in near real time.',
        'Latency is the central issue. Processing imagery and sonar at the terminal itself lets an anomaly alert reach the operator within seconds, without depending on long-distance links. The same data feeds the evidence trail used in audits.',
        'The integration layer is what turns sensors into decisions: AIS, yard systems and oceanographic buoys begin to speak the same event language, with timestamps and source traceability.',
      ],
    },
    tags: ['Edge AI', 'Portos', 'Gêmeos digitais'],
  },
  {
    id: 'art-2',
    date: '2026-08-03',
    category: ['Geotecnia e mineração', 'Geotechnics and mining'],
    image: IMG.mining,
    title: [
      'Monitoramento InSAR e geomecânica preditiva para segurança de barragens',
      'InSAR monitoring and predictive geomechanics for dam safety',
    ],
    summary: [
      'A combinação de radar orbital interferométrico com telemetria subterrânea de poro-pressão estabelece um patamar mais rigoroso de segurança em estruturas de contenção.',
      'Combining interferometric orbital radar with underground pore-pressure telemetry sets a stricter safety baseline for containment structures.',
    ],
    body: {
      pt: [
        'Radar de abertura sintética permite medir deslocamentos milimétricos de superfície sem instrumentação embarcada. Quando cruzado com piezômetros e extensômetros, o dado orbital ganha contexto físico e permite distinguir ruído de tendência.',
        'Nossa abordagem trata cada estrutura como um sistema com múltiplas escalas temporais: a leitura de campo responde em minutos, o radar em dias, a inspeção visual em meses. O modelo precisa reconciliar essas escalas.',
        'O resultado prático é uma janela de antecipação maior para a equipe de operação, com histórico auditável e critérios de alarme documentados.',
      ],
      en: [
        'Synthetic aperture radar measures millimetric surface displacement without on-board instrumentation. Cross-referenced with piezometers and extensometers, orbital data gains physical context and allows noise to be separated from trend.',
        'Our approach treats each structure as a system with multiple time scales: field readings respond in minutes, radar in days, visual inspection in months. The model must reconcile these scales.',
        'The practical result is a wider anticipation window for the operations team, with an auditable history and documented alarm criteria.',
      ],
    },
    tags: ['InSAR', 'Barragens', 'Geotecnia'],
  },
  {
    id: 'art-3',
    date: '2026-07-18',
    category: ['Oxygen Ecosystem', 'Oxygen Ecosystem'],
    image: IMG.environment,
    title: [
      'Oxygen Ecosystem: valoração científica de ativos ecológicos',
      'Oxygen Ecosystem: scientific valuation of ecological assets',
    ],
    summary: [
      'Como quantificação de biomassa, LiDAR e bioacústica transformam a recuperação florestal em valor econômico auditável.',
      'How biomass quantification, LiDAR and bioacoustics turn forest recovery into auditable economic value.',
    ],
    body: {
      pt: [
        'Compensação ambiental costuma ser tratada como custo burocrático. A proposta do Oxygen Ecosystem é inverter essa lógica: medir com rigor suficiente para que a restauração se torne um ativo com histórico verificável.',
        'O método combina nuvens de pontos LiDAR para estrutura da vegetação, índices espectrais para vigor e sensores acústicos para presença de fauna. Cada camada tem incerteza declarada e protocolo de campo associado.',
        'Sem essa disciplina de medição, créditos ambientais permanecem frágeis. Com ela, o dado passa a sustentar decisões de investimento e relato corporativo.',
      ],
      en: [
        'Environmental compensation is often treated as a bureaucratic cost. Oxygen Ecosystem inverts that logic: measure rigorously enough for restoration to become an asset with a verifiable record.',
        'The method combines LiDAR point clouds for vegetation structure, spectral indices for vigour and acoustic sensors for fauna presence. Each layer carries a declared uncertainty and an associated field protocol.',
        'Without this measurement discipline, environmental credits remain fragile. With it, data can support investment decisions and corporate reporting.',
      ],
    },
    tags: ['Oxygen', 'Carbono', 'Biodiversidade'],
  },
];

export const newsById = (id) => news.find((n) => n.id === id);

export const careers = [
  {
    id: 'car-1',
    title: ['Especialista sênior em engenharia geotécnica e instrumentação', 'Senior geotechnical engineering and instrumentation specialist'],
    area: ['Mineração e geotecnia', 'Mining and geotechnics'],
    type: ['Tempo integral', 'Full time'],
    location: ['Brasil — remoto com campo', 'Brazil — remote with field work'],
    skills: ['Geotecnia de barragens', 'Análise numérica FLAC3D/Plaxis', 'Instrumentação geotécnica', 'Conformidade ANM/ICOLD'],
  },
  {
    id: 'car-2',
    title: ['Engenheiro de Edge AI e sistemas embarcados', 'Edge AI and embedded systems engineer'],
    area: ['PentaHydra', 'PentaHydra'],
    type: ['Tempo integral', 'Full time'],
    location: ['Brasil — híbrido', 'Brazil — hybrid'],
    skills: ['C++ / Rust', 'NVIDIA Jetson / TensorRT', 'YOLO / Vision Transformers', 'Modbus / OPC UA'],
  },
  {
    id: 'car-3',
    title: ['Cientista ambiental sênior e perícia técnica', 'Senior environmental scientist and technical forensics'],
    area: ['Oxygen Ecosystem', 'Oxygen Ecosystem'],
    type: ['Tempo integral', 'Full time'],
    location: ['Brasil — remoto com campo', 'Brazil — remote with field work'],
    skills: ['PRAD e restauração ecológica', 'Sensoriamento remoto e GIS', 'Legislação CONAMA/IBAMA', 'Bioacústica'],
  },
  {
    id: 'car-4',
    title: ['Engenheiro naval e automação portuária', 'Naval engineer and port automation'],
    area: ['Portos e marítimo', 'Ports and maritime'],
    type: ['Tempo integral', 'Full time'],
    location: ['Brasil — litoral', 'Brazil — coastal'],
    skills: ['Convenção MARPOL', 'AIS e VTS', 'Cold ironing', 'CFD'],
  },
  {
    id: 'car-5',
    title: ['Arquiteto de cibersegurança industrial e redes OT', 'Industrial cybersecurity and OT network architect'],
    area: ['Tecnologia', 'Technology'],
    type: ['Tempo integral', 'Full time'],
    location: ['Remoto', 'Remote'],
    skills: ['ISA/IEC 62443', 'Defesa de redes SCADA', 'Segmentação zero-trust', 'Deep packet inspection'],
  },
  {
    id: 'car-6',
    title: ['Pesquisador associado em microredes e BESS', 'Associate researcher in microgrids and BESS'],
    area: ['Energia', 'Energy'],
    type: ['Colaboração / pesquisa', 'Collaboration / research'],
    location: ['Brasil — híbrido', 'Brazil — hybrid'],
    skills: ['Modelagem BESS LFP', 'SCADA de smart grid', 'Controle preditivo (MPC)', 'Data center power'],
  },
];

export const showcases = [
  {
    id: 'sc-1',
    title: ['Visão computacional multimodal para portos', 'Multimodal computer vision for ports'],
    domain: ['Portos e marítimo', 'Ports and maritime'],
    type: ['Simulação', 'Simulation'],
    description: [
      'Classificação de contêineres IMO, detecção de manchas na lâmina d’água e leitura OCR de alta velocidade com processamento local.',
      'IMO container classification, water-surface sheen detection and high-speed OCR reading with local processing.',
    ],
    metrics: [
      ['Latência de inferência', 'Inference latency', 'ms'],
      ['Precisão de detecção', 'Detection accuracy', '%'],
      ['Câmeras simultâneas', 'Concurrent feeds', 'ch'],
    ],
    image: IMG.port,
  },
  {
    id: 'sc-2',
    title: ['Telemetria biométrica de dossel e carbono', 'Biometric canopy and carbon telemetry'],
    domain: ['Oxygen / Florestal', 'Oxygen / Forestry'],
    type: ['Protótipo', 'Prototype'],
    description: [
      'Satélites multiespectrais e voos LiDAR para estimativa volumétrica de biomassa e acompanhamento de sequestro de carbono.',
      'Multispectral satellites and LiDAR flights for volumetric biomass estimation and carbon sequestration tracking.',
    ],
    metrics: [
      ['Resolução espacial', 'Spatial resolution', 'cm/px'],
      ['Área modelada', 'Modelled area', 'ha'],
      ['Saúde do dossel (NDVI)', 'Canopy health (NDVI)', 'pts'],
    ],
    image: IMG.environment,
  },
  {
    id: 'sc-3',
    title: ['Gêmeo digital de indústria pesada', 'Heavy industry digital twin'],
    domain: ['Indústria 4.0', 'Industry 4.0'],
    type: ['Simulação', 'Simulation'],
    description: [
      'Gêmeo termomecânico de turbogerador simulando fadiga de mancais sob gradientes térmicos e projetando vida útil restante.',
      'Thermomechanical twin of a turbogenerator simulating bearing fatigue under thermal gradients and projecting remaining life.',
    ],
    metrics: [
      ['Amostragem acústica', 'Acoustic sampling', 'kHz'],
      ['Vibração RMS', 'Vibration RMS', 'mm/s'],
      ['Vida útil estimada', 'Estimated life', 'hrs'],
    ],
    image: IMG.datacenter,
  },
  {
    id: 'sc-4',
    title: ['Irrigação autônoma e balanço hídrico', 'Autonomous irrigation and water balance'],
    domain: ['Agricultura', 'Agriculture'],
    type: ['Conceito', 'Concept'],
    description: [
      'Balanceamento entre demanda hídrica da cultura, disponibilidade do aquífero e janela tarifária de energia.',
      'Balancing crop water demand, aquifer availability and energy tariff windows.',
    ],
    metrics: [
      ['Pivôs integrados', 'Integrated pivots', 'un'],
      ['Sondas de solo', 'Soil probes', 'un'],
      ['Janela tarifária', 'Tariff window', 'h'],
    ],
    image: IMG.solar,
  },
  {
    id: 'sc-5',
    title: ['InSAR e poro-pressão em barragens', 'InSAR and pore pressure on dams'],
    domain: ['Mineração', 'Mining'],
    type: ['Protótipo', 'Prototype'],
    description: [
      'Fusão de radar orbital com telemetria subterrânea para detecção precoce de tendências de instabilidade.',
      'Fusion of orbital radar with underground telemetry for early detection of instability trends.',
    ],
    metrics: [
      ['Precisão InSAR', 'InSAR precision', 'mm'],
      ['Pontos de controle', 'Control points', 'un'],
      ['Revisita orbital', 'Orbital revisit', 'd'],
    ],
    image: IMG.mining,
  },
  {
    id: 'sc-6',
    title: ['Orquestração de atracação e energia de berço', 'Berth orchestration and shore energy'],
    domain: ['Portos', 'Ports'],
    type: ['Simulação', 'Simulation'],
    description: [
      'Modelo de fila e janelas de atracação integrado à telemetria de consumo de energia em berço (cold ironing).',
      'Queue and berthing window model integrated with shore-power consumption telemetry (cold ironing).',
    ],
    metrics: [
      ['Navios modelados', 'Modelled vessels', 'un'],
      ['Janelas de atracação', 'Berthing windows', 'h'],
      ['Consumo em berço', 'Shore consumption', 'kWh'],
    ],
    image: IMG.port,
  },
];

export const researchLines = [
  {
    title: ['Geomecânica preditiva', 'Predictive geomechanics'],
    description: [
      'Modelos numéricos e fusão de sensores para antecipar instabilidade em estruturas geotécnicas.',
      'Numerical models and sensor fusion to anticipate instability in geotechnical structures.',
    ],
  },
  {
    title: ['Inteligência ambiental', 'Environmental intelligence'],
    description: [
      'Métodos de medição de biodiversidade, biomassa e função ecossistêmica com incerteza declarada.',
      'Methods for measuring biodiversity, biomass and ecosystem function with declared uncertainty.',
    ],
  },
  {
    title: ['Edge AI industrial', 'Industrial Edge AI'],
    description: [
      'Inferência em ambientes hostis com restrição térmica, energética e de conectividade.',
      'Inference in harsh environments with thermal, energy and connectivity constraints.',
    ],
  },
  {
    title: ['Microredes e armazenamento', 'Microgrids and storage'],
    description: [
      'Controle de sistemas híbridos com geração variável, armazenamento e cargas críticas.',
      'Control of hybrid systems with variable generation, storage and critical loads.',
    ],
  },
];

export const partners = [
  {
    id: 'ptn-1',
    name: 'Advanced Computing & Edge Hardware Consortium',
    category: ['Tecnologia', 'Technology'],
    description: [
      'Co-desenvolvimento de arquiteturas de processamento para inferência neural em ambientes industriais hostis.',
      'Co-development of processing architectures for neural inference in harsh industrial environments.',
    ],
    focus: ['Edge TPU, aceleração de hardware e sistemas embarcados', 'Edge TPU, hardware acceleration and embedded systems'],
  },
  {
    id: 'ptn-2',
    name: 'Orbital Earth Observation & SAR Satellite Alliance',
    category: ['Tecnologia', 'Technology'],
    description: [
      'Integração de feeds orbitais SAR e multiespectrais para monitoramento geotécnico e florestal.',
      'Integration of SAR and multispectral orbital feeds for geotechnical and forestry monitoring.',
    ],
    focus: ['InSAR milimétrico, desmatamento e GIS', 'Millimetric InSAR, deforestation and GIS'],
  },
  {
    id: 'ptn-3',
    name: 'International Maritime Environmental Standards Council',
    category: ['Institucional', 'Institutional'],
    description: [
      'Alinhamento metodológico com diretrizes globais de descarbonização portuária e protocolos MARPOL.',
      'Methodological alignment with global port decarbonization guidelines and MARPOL protocols.',
    ],
    focus: ['Conformidade portuária e descarbonização', 'Port compliance and decarbonization'],
  },
  {
    id: 'ptn-4',
    name: 'Geotechnical Safety & Mining Innovation Lab',
    category: ['Pesquisa', 'Research'],
    description: [
      'Pesquisa e validação de modelos de predição de liquefação em barragens e taludes.',
      'Research and validation of liquefaction prediction models for dams and slopes.',
    ],
    focus: ['Geomecânica computacional', 'Computational geomechanics'],
  },
  {
    id: 'ptn-5',
    name: 'Ecological Restoration & Carbon Integrity Protocol',
    category: ['Estratégico', 'Strategic'],
    description: [
      'Auditoria cruzada e verificação de créditos de biodiversidade e carbono gerados pelo Oxygen Ecosystem.',
      'Cross-auditing and verification of biodiversity and carbon credits generated by Oxygen Ecosystem.',
    ],
    focus: ['Ativos ecológicos e MRV científico', 'Ecological assets and scientific MRV'],
  },
  {
    id: 'ptn-6',
    name: 'Industrial Automation & Fieldbus Standards Group',
    category: ['Engenharia', 'Engineering'],
    description: [
      'Compatibilização de drivers de baixa latência para Modbus, Profinet e OPC UA.',
      'Low-latency driver interoperability for Modbus, Profinet and OPC UA.',
    ],
    focus: ['Interoperabilidade OT/IT e SCADA', 'OT/IT interoperability and SCADA'],
  },
];