export const services = [
  {
    slug: 'engineering',
    icon: 'Wrench',
    title: ['Engenharia multidisciplinar', 'Multidisciplinary engineering'],
    summary: [
      'Soluções integradas de engenharia de alta complexidade para desafios estruturais e industriais.',
      'Integrated high-complexity engineering for demanding structural and industrial challenges.',
    ],
    disciplines: {
      pt: ['Ambiental', 'Civil', 'Elétrica', 'Mecânica', 'Naval', 'Florestal', 'Minas', 'Geológica', 'Segurança', 'Energia'],
      en: ['Environmental', 'Civil', 'Electrical', 'Mechanical', 'Naval', 'Forestry', 'Mining', 'Geological', 'Safety', 'Energy'],
    },
    stack: ['BIM 4D/5D', 'Análise por elementos finitos (FEA)', 'Simulação CFD', 'Sensores estruturais', 'LiDAR geotécnico'],
    industries: [['Mineração', 'Mining'], ['Portos e marítimo', 'Ports and maritime'], ['Energia', 'Energy'], ['Infraestrutura', 'Infrastructure'], ['Indústria pesada', 'Heavy industry']],
    scope: [
      ['Estudos de viabilidade, concepção e engenharia básica.', 'Feasibility studies, concept and basic engineering.'],
      ['Projeto executivo, detalhamento e compatibilização multidisciplinar.', 'Detailed design, shop drawings and multidiscipline coordination.'],
      ['Memoriais de cálculo, especificações técnicas e apoio à contratação.', 'Calculation reports, technical specifications and procurement support.'],
      ['Instrumentação, comissionamento e verificação de desempenho.', 'Instrumentation, commissioning and performance verification.'],
    ],
    markets: ['datacenter-solar', 'ports-maritime', 'solar-plants'],
  },
  {
    slug: 'environment',
    icon: 'Leaf',
    title: ['Meio ambiente e inteligência ecológica', 'Environment and ecological intelligence'],
    summary: [
      'Gestão ambiental científica, auditoria, perícia e regeneração ecossistêmica com sensoriamento remoto e IA.',
      'Scientific environmental management, auditing, forensics and ecosystem regeneration with remote sensing and AI.',
    ],
    disciplines: {
      pt: ['Licenciamento', 'Monitoramento contínuo', 'Compliance', 'Auditoria', 'Perícia forense', 'PRAD', 'Restauração ecológica', 'Biodiversidade', 'Recursos hídricos', 'Resíduos industriais', 'Remediação', 'Sensoriamento remoto', 'GIS', 'ESG'],
      en: ['Licensing', 'Continuous monitoring', 'Compliance', 'Auditing', 'Forensic analysis', 'Degraded land recovery', 'Ecological restoration', 'Biodiversity', 'Water resources', 'Industrial waste', 'Remediation', 'Remote sensing', 'GIS', 'ESG'],
    },
    stack: ['Sentinel / Landsat', 'UAVs hiperespectrais', 'IoT limnológico', 'Modelagem hidrológica SWAT', 'Bioacústica computacional'],
    industries: [['Agronegócio', 'Agribusiness'], ['Florestal', 'Forestry'], ['Mineração', 'Mining'], ['Óleo e gás', 'Oil and gas'], ['Setor público', 'Public sector'], ['Infraestrutura', 'Infrastructure']],
    scope: [
      ['Diagnóstico ambiental, inventário de biodiversidade e linha de base.', 'Environmental diagnosis, biodiversity inventory and baseline.'],
      ['Licenciamento, condicionantes e relação com órgãos reguladores.', 'Licensing, conditions and regulatory authority liaison.'],
      ['Monitoramento contínuo por satélite, drone e sensores de campo.', 'Continuous monitoring by satellite, drone and field sensors.'],
      ['PRAD, restauração ecológica e relatórios auditáveis de carbono.', 'Degraded land recovery, ecological restoration and auditable carbon reporting.'],
    ],
    markets: ['environmental-monitoring', 'biomethane', 'solar-plants'],
  },
  {
    slug: 'energy',
    icon: 'Zap',
    title: ['Energia e transição energética', 'Energy and energy transition'],
    summary: [
      'Geração renovável, microredes resilientes, armazenamento e infraestrutura de alta eficiência para data centers.',
      'Renewable generation, resilient microgrids, storage and high-efficiency data center infrastructure.',
    ],
    disciplines: {
      pt: ['Solar fotovoltaica', 'Renovável híbrida', 'Eficiência industrial', 'Gestão e tarifação', 'Subestações e linhas', 'Smart grids', 'Qualidade de energia', 'Data center power', 'Microredes', 'BESS'],
      en: ['Solar PV', 'Hybrid renewables', 'Industrial efficiency', 'Energy management', 'Substations and lines', 'Smart grids', 'Power quality', 'Data center power', 'Microgrids', 'BESS'],
    },
    stack: ['SCADA de BESS', 'PVSyst', 'Controladores de microrede', 'Inversores inteligentes', 'Termografia com IA'],
    industries: [['Data centers', 'Data centers'], ['Indústria química', 'Chemical industry'], ['Parques logísticos', 'Logistics parks'], ['Operações remotas', 'Remote operations'], ['Utilities', 'Utilities']],
    scope: [
      ['Estudo de recursos, simulação energética e dimensionamento.', 'Resource assessment, energy simulation and sizing.'],
      ['Projeto de usinas, subestações e sistemas de armazenamento.', 'Plant, substation and storage system design.'],
      ['Integração com a rede, proteção elétrica e qualidade de energia.', 'Grid integration, electrical protection and power quality.'],
      ['Operação assistida, telemetria e manutenção preditiva.', 'Assisted operation, telemetry and predictive maintenance.'],
    ],
    markets: ['datacenter-solar', 'solar-plants', 'green-hydrogen'],
  },
  {
    slug: 'technology',
    icon: 'Cpu',
    title: ['PentaHydra: tecnologia e engenharia de IA', 'PentaHydra: technology and AI engineering'],
    summary: [
      'IA aplicada ao mundo físico, sistemas embarcados, Edge AI e gêmeos digitais industriais.',
      'AI applied to the physical world, embedded systems, Edge AI and industrial digital twins.',
    ],
    disciplines: {
      pt: ['IA generativa', 'Engenharia de IA e MLOps', 'Agentes autônomos', 'Dados em tempo real', 'Analytics preditivo', 'Cibersegurança OT/IT', 'Sistemas embarcados', 'IoT', 'Edge AI', 'Automação', 'Gêmeos digitais', 'Arquitetura cloud/edge', 'APIs corporativas', 'Integração de legados'],
      en: ['Generative AI', 'AI engineering and MLOps', 'Autonomous agents', 'Real-time data', 'Predictive analytics', 'OT/IT cybersecurity', 'Embedded systems', 'IoT', 'Edge AI', 'Automation', 'Digital twins', 'Cloud/edge architecture', 'Enterprise APIs', 'Legacy integration'],
    },
    stack: ['PyTorch', 'NVIDIA TensorRT', 'Rust / C++', 'Edge TPU', 'Kafka / MQTT', 'WebAssembly', 'Docker / Kubernetes'],
    industries: [['Verticais industriais', 'Industrial verticals'], ['Defesa', 'Defense'], ['Aeroespacial', 'Aerospace'], ['Telecom', 'Telecom'], ['Agtech', 'Agtech']],
    scope: [
      ['Arquitetura de soluções de IA, dados e integração de sistemas.', 'AI, data and system integration solution architecture.'],
      ['Treinamento, otimização e implantação de modelos em produção.', 'Model training, optimization and production deployment.'],
      ['Edge AI, firmware e sistemas embarcados de alta confiabilidade.', 'Edge AI, firmware and high-reliability embedded systems.'],
      ['Gêmeos digitais, dashboards operacionais e APIs de baixa latência.', 'Digital twins, operational dashboards and low-latency APIs.'],
    ],
    markets: ['environmental-monitoring', 'ports-maritime', 'datacenter-solar'],
  },
  {
    slug: 'industry',
    icon: 'Factory',
    title: ['Indústria 4.0 e inteligência operacional', 'Industry 4.0 and operational intelligence'],
    summary: [
      'Automação, manutenção preditiva, termografia e telemetria de maquinário pesado.',
      'Automation, predictive maintenance, thermography and heavy machinery telemetry.',
    ],
    disciplines: {
      pt: ['Automação industrial', 'Manutenção preditiva e RCM', 'Monitoramento contínuo', 'Processos químicos e físicos', 'Ativos críticos', 'Transformação digital fabril', 'OEE', 'IIoT'],
      en: ['Industrial automation', 'Predictive maintenance and RCM', 'Continuous monitoring', 'Chemical and physical processes', 'Critical assets', 'Factory digital transformation', 'OEE', 'IIoT'],
    },
    stack: ['OPC UA', 'Modbus TCP', 'Acelerômetros triaxiais', 'SCADA digital', 'Gateways de borda'],
    industries: [['Automotivo', 'Automotive'], ['Manufatura', 'Manufacturing'], ['Química', 'Chemicals'], ['Farmacêutica', 'Pharmaceutical'], ['Papel e celulose', 'Pulp and paper']],
    scope: [
      ['Mapeamento de ativos críticos e plano de instrumentação.', 'Critical asset mapping and instrumentation plan.'],
      ['Coleta em tempo real, historiadores e integração com MES/ERP.', 'Real-time acquisition, historians and MES/ERP integration.'],
      ['Modelos de falha, limites de alarme e rotinas de manutenção.', 'Failure models, alarm limits and maintenance routines.'],
      ['Dashboards de OEE, consumo e disponibilidade.', 'OEE, consumption and availability dashboards.'],
    ],
    markets: ['green-hydrogen', 'ports-maritime'],
  },
  {
    slug: 'mining',
    icon: 'Pickaxe',
    title: ['Mineração e inteligência mineralógica', 'Mining and mineral intelligence'],
    summary: [
      'Monitoramento geológico, sensoriamento de barragens de rejeitos, controle de poeira e logística de mina.',
      'Geological monitoring, tailings dam sensing, dust control and mine logistics.',
    ],
    disciplines: {
      pt: ['Geotecnia de barragens', 'Estabilidade de taludes', 'Instrumentação', 'Planejamento de mina', 'Controle ambiental', 'Logística de mina', 'Conformidade ANM'],
      en: ['Dam geotechnics', 'Slope stability', 'Instrumentation', 'Mine planning', 'Environmental control', 'Mine logistics', 'ANM compliance'],
    },
    stack: ['InSAR', 'Piezômetros IoT', 'Drones LiDAR', 'Radar de parede', 'IA geoespacial'],
    industries: [['Ferro', 'Iron ore'], ['Cobre', 'Copper'], ['Lítio', 'Lithium'], ['Agregados', 'Aggregates'], ['Fertilizantes', 'Fertilizers']],
    scope: [
      ['Caracterização geotécnica e instrumentação de estruturas.', 'Geotechnical characterization and structural instrumentation.'],
      ['Monitoramento de deslocamentos por satélite e radar.', 'Displacement monitoring by satellite and radar.'],
      ['Planos de contingência, auditoria e conformidade regulatória.', 'Contingency plans, auditing and regulatory compliance.'],
      ['Integração de dados de campo em plataforma única de decisão.', 'Field data integration into a single decision platform.'],
    ],
    markets: ['environmental-monitoring'],
  },
  {
    slug: 'forestry',
    icon: 'Trees',
    title: ['Engenharia florestal e carbono', 'Forestry engineering and carbon'],
    summary: [
      'Inventário florestal por LiDAR, inteligência de biomassa e rastreamento de desmatamento.',
      'LiDAR forest inventory, biomass intelligence and deforestation tracking.',
    ],
    disciplines: {
      pt: ['Inventário florestal', 'Biomassa e carbono', 'Restauração', 'Silvicultura', 'Monitoramento de desmatamento', 'MRV'],
      en: ['Forest inventory', 'Biomass and carbon', 'Restoration', 'Silviculture', 'Deforestation monitoring', 'MRV'],
    },
    stack: ['LiDAR aerotransportado', 'NDVI / EVI', 'Câmeras trap com Edge AI', 'Registro de créditos'],
    industries: [['Silvicultura', 'Silviculture'], ['Conservação', 'Conservation'], ['Mercado de carbono', 'Carbon markets'], ['Celulose', 'Pulp']],
    scope: [
      ['Inventário por sensoriamento remoto e validação de campo.', 'Remote sensing inventory with field validation.'],
      ['Modelagem de biomassa e estoque de carbono.', 'Biomass and carbon stock modelling.'],
      ['Monitoramento de mudança de uso do solo e alertas.', 'Land use change monitoring and alerts.'],
      ['Relatórios MRV para auditoria independente.', 'MRV reporting for independent audit.'],
    ],
    markets: ['environmental-monitoring', 'biomethane'],
  },
  {
    slug: 'agriculture',
    icon: 'Sprout',
    title: ['Agricultura de precisão e irrigação inteligente', 'Precision agriculture and smart irrigation'],
    summary: [
      'Controle remoto de pivôs, automação de bombas, fertirrigação e sensores de solo.',
      'Remote pivot control, pump automation, fertigation and soil sensors.',
    ],
    disciplines: {
      pt: ['Automação de irrigação', 'Fertirrigação', 'Sensores de solo', 'Hidrologia', 'Telemetria rural', 'Eficiência energética'],
      en: ['Irrigation automation', 'Fertigation', 'Soil sensors', 'Hydrology', 'Rural telemetry', 'Energy efficiency'],
    },
    stack: ['LoRaWAN 915 MHz', 'Sensores TDR/FDR', 'Sentinel-2', 'Válvulas eletro-hidráulicas', 'Edge AI em campo'],
    industries: [['Grãos', 'Grains'], ['Fruticultura', 'Fruit'], ['Cana', 'Sugarcane'], ['Cafeicultura', 'Coffee']],
    scope: [
      ['Diagnóstico hídrico e energético da operação.', 'Water and energy diagnosis of the operation.'],
      ['Automação de pivôs, bombas e válvulas com telemetria.', 'Pivot, pump and valve automation with telemetry.'],
      ['Sensoriamento de umidade e condutividade em profundidade.', 'Deep soil moisture and conductivity sensing.'],
      ['Painéis de consumo, produtividade e alertas operacionais.', 'Consumption, productivity and alert dashboards.'],
    ],
    markets: ['biomethane', 'environmental-monitoring'],
  },
  {
    slug: 'ports-maritime',
    icon: 'Anchor',
    title: ['Portos inteligentes, marítimo e logística', 'Smart ports, maritime and logistics'],
    summary: [
      'Monitoramento MARPOL, rastreio de navios, qualidade de águas portuárias e inteligência de contêineres.',
      'MARPOL monitoring, vessel tracking, port water quality and container intelligence.',
    ],
    disciplines: {
      pt: ['Operações portuárias', 'MARPOL', 'AIS/VTS', 'Batimetria', 'Qualidade da água', 'Logística de pátio', 'Segurança marítima'],
      en: ['Port operations', 'MARPOL', 'AIS/VTS', 'Bathymetry', 'Water quality', 'Yard logistics', 'Maritime safety'],
    },
    stack: ['Boias multiparamétricas', 'Transponders AIS', 'OCR de contêineres', 'LiDAR de vento', 'Gêmeo digital portuário'],
    industries: [['Terminais portuários', 'Port terminals'], ['Armadores', 'Shipowners'], ['Logística', 'Logistics'], ['Autoridades portuárias', 'Port authorities']],
    scope: [
      ['Diagnóstico operacional e desenho de arquitetura de dados.', 'Operational diagnosis and data architecture design.'],
      ['Rede de sensores, câmeras e monitoramento de efluentes.', 'Sensor, camera and effluent monitoring network.'],
      ['Integração com sistemas de atracação e autoridades.', 'Integration with berthing systems and authorities.'],
      ['Relatórios de conformidade e indicadores de produtividade.', 'Compliance reporting and productivity indicators.'],
    ],
    markets: ['ports-maritime'],
  },
  {
    slug: 'offshore-oil-gas',
    icon: 'Compass',
    title: ['Offshore, óleo e gás', 'Offshore, oil and gas'],
    summary: [
      'Integridade de dutos, monitoramento de dispersão de óleo, Edge AI em plataformas e segurança de redes.',
      'Pipeline integrity, oil spill monitoring, offshore Edge AI and network security.',
    ],
    disciplines: {
      pt: ['Integridade de dutos', 'Inspeção subsea', 'Dispersão de óleo', 'Sistemas ATEX', 'Cibersegurança de redes', 'Análise de risco'],
      en: ['Pipeline integrity', 'Subsea inspection', 'Oil dispersion', 'ATEX systems', 'Network cybersecurity', 'Risk analysis'],
    },
    stack: ['Sonar acústico', 'Sistemas ATEX zona 1/2', 'Visão computacional subsea', 'Radar SAR de óleo'],
    industries: [['Exploração e produção', 'Exploration and production'], ['Refino', 'Refining'], ['Terminais', 'Terminals']],
    scope: [
      ['Plano de inspeção e integridade de ativos subsea.', 'Subsea asset inspection and integrity plan.'],
      ['Processamento embarcado de imagem e sonar em tempo real.', 'Real-time on-board image and sonar processing.'],
      ['Modelagem de dispersão e planos de resposta.', 'Dispersion modelling and response plans.'],
      ['Segurança de redes OT e segmentação de ambientes.', 'OT network security and environment segmentation.'],
    ],
    markets: ['ports-maritime', 'environmental-monitoring'],
  },
  {
    slug: 'infrastructure',
    icon: 'Building2',
    title: ['Infraestrutura crítica e cidades inteligentes', 'Critical infrastructure and smart cities'],
    summary: [
      'Pontes, rodovias, túneis, saneamento e aeroportos com instrumentação viva e gêmeos digitais.',
      'Bridges, highways, tunnels, sanitation and airports with live instrumentation and digital twins.',
    ],
    disciplines: {
      pt: ['Estruturas', 'Geotecnia', 'Saneamento', 'Mobilidade', 'Instrumentação', 'Gêmeos digitais', 'Gestão de ativos'],
      en: ['Structures', 'Geotechnics', 'Sanitation', 'Mobility', 'Instrumentation', 'Digital twins', 'Asset management'],
    },
    stack: ['GPR', 'Extensômetros de fibra óptica', 'LiDAR terrestre', 'Drones fotogramétricos'],
    industries: [['Concessões', 'Concessions'], ['Municípios', 'Municipalities'], ['Aeroportos', 'Airports'], ['Saneamento', 'Sanitation']],
    scope: [
      ['Inspeção, diagnóstico e plano de recuperação estrutural.', 'Inspection, diagnosis and structural recovery plan.'],
      ['Instrumentação e monitoramento de integridade em serviço.', 'Instrumentation and in-service integrity monitoring.'],
      ['Gêmeo digital e gestão de ciclo de vida do ativo.', 'Digital twin and asset lifecycle management.'],
      ['Integração com operação, tráfego e planos de contingência.', 'Integration with operations, traffic and contingency plans.'],
    ],
    markets: ['datacenter-solar', 'ports-maritime'],
  },
  {
    slug: 'safety',
    icon: 'ShieldCheck',
    title: ['Segurança operacional e engenharia de risco', 'Operational safety and risk engineering'],
    summary: [
      'Análise de risco, planos de emergência, segurança de processos e cultura de segurança.',
      'Risk analysis, emergency plans, process safety and safety culture.',
    ],
    disciplines: {
      pt: ['Análise de risco', 'Segurança de processos', 'Planos de emergência', 'HAZOP', 'Permissão de trabalho', 'Treinamento'],
      en: ['Risk analysis', 'Process safety', 'Emergency plans', 'HAZOP', 'Permit to work', 'Training'],
    },
    stack: ['HAZOP / LOPA', 'Análise de árvore de falhas', 'Simulação de dispersão', 'Auditoria de campo'],
    industries: [['Mineração', 'Mining'], ['Química', 'Chemicals'], ['Energia', 'Energy'], ['Portos', 'Ports']],
    scope: [
      ['Identificação de perigos e avaliação de riscos operacionais.', 'Hazard identification and operational risk assessment.'],
      ['Planos de resposta a emergência e simulação de cenários.', 'Emergency response plans and scenario simulation.'],
      ['Auditoria de conformidade e programas de comportamento seguro.', 'Compliance auditing and safe behaviour programs.'],
      ['Integração de segurança em projetos e comissionamento.', 'Safety integration in design and commissioning.'],
    ],
    markets: ['ports-maritime', 'green-hydrogen'],
  },
  {
    slug: 'esg',
    icon: 'Gauge',
    title: ['Governança ESG e métricas', 'ESG governance and metrics'],
    summary: [
      'Estrutura de indicadores, relato de sustentabilidade e rastreabilidade de compromissos.',
      'Indicator frameworks, sustainability reporting and commitment traceability.',
    ],
    disciplines: {
      pt: ['Materialidade', 'Indicadores ESG', 'Relato corporativo', 'Due diligence', 'Engajamento de stakeholders', 'Auditoria de dados'],
      en: ['Materiality', 'ESG indicators', 'Corporate reporting', 'Due diligence', 'Stakeholder engagement', 'Data assurance'],
    },
    stack: ['GRI / SASB', 'Inventário de emissões', 'Rastreabilidade de dados', 'Painéis de indicadores'],
    industries: [['Indústria', 'Industry'], ['Energia', 'Energy'], ['Agronegócio', 'Agribusiness'], ['Serviços financeiros', 'Financial services']],
    scope: [
      ['Matriz de materialidade e definição de indicadores.', 'Materiality matrix and indicator definition.'],
      ['Consolidação de dados e verificação de consistência.', 'Data consolidation and consistency verification.'],
      ['Relato corporativo e comunicação com partes interessadas.', 'Corporate reporting and stakeholder communication.'],
      ['Planos de melhoria e acompanhamento de metas.', 'Improvement plans and target tracking.'],
    ],
    markets: ['environmental-monitoring', 'solar-plants'],
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

export const featuredServices = services.slice(0, 6);