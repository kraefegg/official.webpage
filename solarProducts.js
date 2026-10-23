export const SOLAR_PARTNER = {
  name: 'Aldo Solar',
  role: ['Fornecedor oficial homologado de equipamentos fotovoltaicos', 'Official homologated photovoltaic equipment supplier'],
  kraefeggRole: ['Engenharia consultiva, projetos executivos, ART, homologação junto à concessionária e comissionamento', 'Consulting engineering, detailed design, technical liability, utility homologation and commissioning'],
  statement: [
    'A Kraefegg M.O. presta serviços de engenharia de alta precisão e a Aldo Solar é nossa fornecedora oficial de equipamentos fotovoltaicos.',
    'Kraefegg M.O. delivers high-precision engineering services and Aldo Solar is our official photovoltaic equipment supplier.',
  ],
  phones: [
    { display: '+55 (61) 99885-0946', raw: '+5561998850946', label: ['Brasília / Centro-Oeste', 'Brasília / Central-West'] },
    { display: '+55 (83) 99919-4789', raw: '+5583999194789', label: ['Nordeste', 'Northeast'] },
  ],
  email: 'procurement@kraefegg.com',
};

const product = (id, code, name, model, kwp, phase, inverter, module, category) => ({
  id,
  code,
  name,
  model,
  kwp,
  phase,
  inverter,
  module,
  category,
  supplier: 'Aldo Solar',
});

export const solarCategories = [
  { id: 'all', label: ['Todos', 'All'] },
  { id: 'distributed', label: ['Geração distribuída', 'Distributed generation'] },
  { id: 'commercial', label: ['Comercial', 'Commercial'] },
  { id: 'industrial', label: ['Industrial', 'Industrial'] },
  { id: 'utility', label: ['Utility scale', 'Utility scale'] },
];

export const solarProducts = [
  product('aldo-589640-9', '589640-9', 'Gerador solar GoodWe 1,86 kWp', 'GF 1,86 kWp · Jinko Tiger Neo 620 W · GW3300-XS · mono 220 V', 1.86, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-589644-9', '589644-9', 'Gerador solar GoodWe 2,48 kWp', 'GF 2,48 kWp · Jinko Tiger Neo 620 W · GW3300-XS · mono 220 V', 2.48, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-572334-9', '572334-9', 'Gerador solar GoodWe 2,48 kWp (linha homologada)', 'GF 2,48 kWp · Jinko Tiger Neo 620 W · GW3300-XS · mono 220 V', 2.48, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-589651-9', '589651-9', 'Gerador solar GoodWe 3,10 kWp', 'GF 3,10 kWp · Jinko Tiger Neo 620 W · GW3300-XS · mono 220 V', 3.1, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-571276-9', '571276-9', 'Gerador solar CHINT 3,10 kWp', 'GF 3,10 kWp · Jinko Tiger Neo 620 W · CPS SCA5KTL-PSM1/EU · mono 220 V', 3.1, 'MONOFÁSICO', 'CHINT', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-589643-9', '589643-9', 'Gerador solar GoodWe 3,72 kWp', 'GF 3,72 kWp · Jinko Tiger Neo 620 W · GW3300-XS · mono 220 V', 3.72, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-588695-9', '588695-9', 'Gerador solar Growatt 3,10 kWp', 'GF 3,10 kWp · Jinko Tiger Neo 620 W · MIN6000TL-X2 · mono 220 V', 3.1, 'MONOFÁSICO', 'Growatt', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-579743-9', '579743-9', 'Gerador solar CHINT 3,72 kWp', 'GF 3,72 kWp · Jinko Tiger Neo 620 W · CPS SCA5KTL-PSM1/EU · mono 220 V', 3.72, 'MONOFÁSICO', 'CHINT', 'Jinko Tiger Neo', 'distributed'),
  product('aldo-643131-9', '643131-9', 'Gerador solar Solplanet 4,34 kWp', 'GF 4,34 kWp · Leapton 620 W bifacial · estrutura parafuso madeira · mono 220 V', 4.34, 'MONOFÁSICO', 'Solplanet', 'Leapton', 'commercial'),
  product('aldo-589647-9', '589647-9', 'Gerador solar GoodWe 4,34 kWp', 'GF 4,34 kWp · Jinko Tiger Neo 620 W · GW3300-XS · mono 220 V', 4.34, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'commercial'),
  product('aldo-643111-9', '643111-9', 'Gerador solar GoodWe 4,96 kWp', 'GF 4,96 kWp · Leapton 620 W bifacial · estrutura parafuso madeira · mono 220 V', 4.96, 'MONOFÁSICO', 'GoodWe', 'Leapton', 'commercial'),
  product('aldo-579749-9', '579749-9', 'Gerador solar CHINT 4,34 kWp', 'GF 4,34 kWp · Jinko Tiger Neo 620 W · CPS SCA5KTL-PSM1/EU · mono 220 V', 4.34, 'MONOFÁSICO', 'CHINT', 'Jinko Tiger Neo', 'commercial'),
  product('aldo-589273-9', '589273-9', 'Gerador solar híbrido GoodWe com suporte a baterias', 'GF 0,62 kWp a 6 kW · Jinko Tiger Neo 620 W · GW6000-ESBR20 · mono 220 V', 0.62, 'MONOFÁSICO', 'GoodWe', 'Jinko Tiger Neo', 'commercial'),
  product('kmo-ind-500k', 'KMO-IND-500K-5MW', 'Complexo solar industrial para autossuficiência energética', 'Usina fotovoltaica de autoprodução e mercado livre · 500 kWp a 5 MWp', 1500, 'TRIFÁSICO INDUSTRIAL', 'Projeto dedicado', 'Módulos bifaciais', 'industrial'),
  product('kmo-data-10m', 'KMO-DATA-10M-100MW', 'Usina solar dedicada para data centers de alta densidade', 'Usina behind-the-meter com BESS de alta taxa C · 10 a 100 MWp', 25000, 'TRIFÁSICO INDUSTRIAL', 'Projeto dedicado', 'Módulos bifaciais', 'utility'),
  product('kmo-h2v-50m', 'KMO-H2V-50M-300MW', 'Usina solar para produção de hidrogênio verde', 'Parque solar dedicado a eletrolisadores PEM e dessalinização SWRO · 20 a 300 MWp', 75000, 'TRIFÁSICO INDUSTRIAL', 'Projeto dedicado', 'Módulos bifaciais', 'utility'),
];

export const solarProductById = (id) => solarProducts.find((p) => p.id === id);

export const solarServices = [
  ['Projeto executivo e memorial descritivo', 'Detailed design and technical report'],
  ['Homologação junto à concessionária', 'Utility homologation'],
  ['ART e responsabilidade técnica', 'Technical liability and ART'],
  ['Comissionamento e ensaios', 'Commissioning and testing'],
  ['Monitoramento e O&M', 'Monitoring and O&M'],
  ['Integração com BESS', 'BESS integration'],
];