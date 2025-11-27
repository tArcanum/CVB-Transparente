// script.js - VERSÃO FINAL: ALGORITMO DE QUOCIENTES (VARIEDADE + PRIORIDADE)
// ============================================================================
// DADOS DOS ITENS
// ============================================================================

const ITENS_DB = [
  { nome: "Cestas básicas – Compra de alimentos básicos", categoria: "Alimentação", custo: 200.0, qtde: 4400, prioridade: 100 },
  { nome: "Cestas básicas – Itens de proteína", categoria: "Alimentação", custo: 80.0, qtde: 5000, prioridade: 100 },
  { nome: "Cestas básicas – Itens de limpeza", categoria: "Alimentação", custo: 50.0, qtde: 3200, prioridade: 100 },
  { nome: "Cestas básicas – Montagem e embalagem", categoria: "Alimentação", custo: 20.0, qtde: 8000, prioridade: 100 },
  { nome: "Kits de higiene – Higiene pessoal", categoria: "Higiene", custo: 50.0, qtde: 4800, prioridade: 100 },
  { nome: "Kits de higiene – Absorventes e fraldas", categoria: "Higiene", custo: 45.0, qtde: 4667, prioridade: 100 },
  { nome: "Kits de higiene – Materiais de proteção", categoria: "Higiene", custo: 35.01, qtde: 2571, prioridade: 100 },
  { nome: "Kits de higiene – Logística de aquisição", categoria: "Higiene", custo: 5000.0, qtde: 12, prioridade: 100 },
  { nome: "Logística e transporte – Frete de caminhões", categoria: "Logística", custo: 37500.0, qtde: 12, prioridade: 50 },
  { nome: "Logística e transporte – Combustível", categoria: "Logística", custo: 22500.0, qtde: 12, prioridade: 50 },
  { nome: "Logística e transporte – Pedágios e taxas", categoria: "Logística", custo: 7500.0, qtde: 12, prioridade: 50 },
  { nome: "Logística e transporte – Armazenagem temporária", categoria: "Logística", custo: 7500.0, qtde: 12, prioridade: 50 },
  { nome: "Abrigos temporários – Locação de espaços", categoria: "Abrigos", custo: 18750.0, qtde: 12, prioridade: 50 },
  { nome: "Abrigos temporários – Colchões e camas", categoria: "Abrigos", custo: 449.64, qtde: 278, prioridade: 50 },
  { nome: "Abrigos temporários – Cobertores e roupas de cama", categoria: "Abrigos", custo: 120.05, qtde: 833, prioridade: 50 },
  { nome: "Abrigos temporários – Infraestrutura de abrigo", categoria: "Abrigos", custo: 4166.67, qtde: 12, prioridade: 50 },
  { nome: "Equipamentos e EPIs – EPIs individuais", categoria: "EPIs", custo: 180.07, qtde: 833, prioridade: 80 },
  { nome: "Equipamentos e EPIs – Coletes e identificação", categoria: "EPIs", custo: 89.96, qtde: 667, prioridade: 80 },
  { nome: "Equipamentos e EPIs – Equipamentos de comunicação", categoria: "EPIs", custo: 750.0, qtde: 80, prioridade: 80 },
  { nome: "Equipamentos e EPIs – Reposição e manutenção", categoria: "EPIs", custo: 2500.0, qtde: 12, prioridade: 80 },
  { nome: "Apoio psicossocial – Equipe técnica", categoria: "Apoio Psicossocial", custo: 833.33, qtde: 180, prioridade: 80 },
  { nome: "Apoio psicossocial – Transporte da equipe", categoria: "Apoio Psicossocial", custo: 4166.67, qtde: 12, prioridade: 80 },
  { nome: "Apoio psicossocial – Materiais de atendimento", categoria: "Apoio Psicossocial", custo: 79.96, qtde: 469, prioridade: 80 },
  { nome: "Apoio psicossocial – Supervisão técnica", categoria: "Apoio Psicossocial", custo: 1041.67, qtde: 12, prioridade: 80 },
  { nome: "Insumos e medicamentos básicos – Kits de primeiros socorros", categoria: "Medicamentos", custo: 180.0, qtde: 1125, prioridade: 100 },
  { nome: "Insumos e medicamentos básicos – Medicamentos simples", categoria: "Medicamentos", custo: 13125.0, qtde: 12, prioridade: 100 },
  { nome: "Insumos e medicamentos básicos – Equipos e materiais", categoria: "Medicamentos", custo: 5625.0, qtde: 12, prioridade: 100 },
  { nome: "Insumos e medicamentos básicos – Descartes e biossegurança", categoria: "Medicamentos", custo: 1875.0, qtde: 12, prioridade: 100 },
  { nome: "Equipe de saúde – Médicos e enfermeiros", categoria: "Equipe Saúde", custo: 1693.84, qtde: 276, prioridade: 100 },
  { nome: "Equipe de saúde – Técnicos e auxiliares", categoria: "Equipe Saúde", custo: 885.42, qtde: 240, prioridade: 100 },
  { nome: "Equipe de saúde – Folha de plantões extras", categoria: "Equipe Saúde", custo: 817.31, qtde: 156, prioridade: 100 },
  { nome: "Equipe de saúde – Capacitação da equipe", categoria: "Equipe Saúde", custo: 442.71, qtde: 96, prioridade: 100 },
  { nome: "Capacitações em primeiros socorros – Material didático impresso", categoria: "Outros", custo: 10500.0, qtde: 10, prioridade: 20 },
  { nome: "Capacitações em primeiros socorros – Instrutores", categoria: "Outros", custo: 833.33, qtde: 144, prioridade: 20 },
  { nome: "Capacitações em primeiros socorros – Locação de espaços", categoria: "Outros", custo: 3750.0, qtde: 12, prioridade: 20 },
  { nome: "Capacitações em primeiros socorros – Equipamentos de demonstração", categoria: "Outros", custo: 5000.0, qtde: 6, prioridade: 20 },
  { nome: "Campanhas de prevenção – Criação de peças", categoria: "Outros", custo: 5208.33, qtde: 12, prioridade: 20 },
  { nome: "Campanhas de prevenção – Mídias digitais", categoria: "Outros", custo: 7291.67, qtde: 12, prioridade: 20 },
  { nome: "Campanhas de prevenção – Materiais impressos", categoria: "Outros", custo: 34.99, qtde: 1786, prioridade: 20 },
  { nome: "Campanhas de prevenção – Estrutura de eventos", categoria: "Outros", custo: 3125.0, qtde: 12, prioridade: 20 },
  { nome: "Atividades com crianças e adolescentes – Oficinas educativas", categoria: "Crianças", custo: 14000.0, qtde: 20, prioridade: 80 },
  { nome: "Atividades com crianças e adolescentes – Esporte e lazer", categoria: "Crianças", custo: 14583.33, qtde: 12, prioridade: 80 },
  { nome: "Atividades com crianças e adolescentes – Atividades culturais", categoria: "Crianças", custo: 11666.67, qtde: 12, prioridade: 80 },
  { nome: "Atividades com crianças e adolescentes – Lanches e alimentação", categoria: "Crianças", custo: 8750.0, qtde: 12, prioridade: 80 },
  { nome: "Atendimento a idosos – Grupos de convivência", categoria: "Idosos", custo: 10208.33, qtde: 12, prioridade: 80 },
  { nome: "Atendimento a idosos – Visitas domiciliares", categoria: "Idosos", custo: 8750.0, qtde: 12, prioridade: 80 },
  { nome: "Atendimento a idosos – Atividades de saúde", categoria: "Idosos", custo: 5833.33, qtde: 12, prioridade: 100 },
  { nome: "Atendimento a idosos – Apoio a cuidadores", categoria: "Idosos", custo: 4375.0, qtde: 12, prioridade: 80 },
  { nome: "Apoio a migrantes e refugiados – Atendimento direto", categoria: "Migrantes", custo: 833.33, qtde: 144, prioridade: 20 },
  { nome: "Apoio a migrantes e refugiados – Cursos de idioma", categoria: "Migrantes", custo: 10000.0, qtde: 10, prioridade: 20 },
  { nome: "Apoio a migrantes e refugiados – Documentação e regularização", categoria: "Migrantes", custo: 8333.33, qtde: 12, prioridade: 20 },
  { nome: "Apoio a migrantes e refugiados – Cestas de acolhimento", categoria: "Migrantes", custo: 219.78, qtde: 364, prioridade: 20 },
  { nome: "Auxílios emergenciais – Vouchers alimentação", categoria: "Auxílios", custo: 300.0, qtde: 400, prioridade: 20 },
  { nome: "Auxílios emergenciais – Vouchers transporte", categoria: "Auxílios", custo: 200.0, qtde: 375, prioridade: 20 },
  { nome: "Auxílios emergenciais – Auxílio aluguel emergencial", categoria: "Auxílios", custo: 600.0, qtde: 100, prioridade: 20 },
  { nome: "Auxílios emergenciais – Outros auxílios pontuais", categoria: "Auxílios", custo: 401.79, qtde: 112, prioridade: 20 },
  { nome: "Salários administrativos – Coordenação geral", categoria: "Administração", custo: 1666.67, qtde: 252, prioridade: 20 },
  { nome: "Salários administrativos – Equipe financeira e contábil", categoria: "Administração", custo: 1250.0, qtde: 240, prioridade: 20 },
  { nome: "Salários administrativos – RH e gestão de pessoas", categoria: "Administração", custo: 1000.0, qtde: 240, prioridade: 20 },
  { nome: "Salários administrativos – Equipe de apoio administrativo", categoria: "Administração", custo: 1000.0, qtde: 240, prioridade: 20 },
  { nome: "Encargos sociais – INSS", categoria: "Administração", custo: 16666.67, qtde: 12, prioridade: 20 },
  { nome: "Encargos sociais – FGTS", categoria: "Administração", custo: 10416.67, qtde: 12, prioridade: 20 },
  { nome: "Encargos sociais – Férias e 13º", categoria: "Administração", custo: 10416.67, qtde: 12, prioridade: 20 },
  { nome: "Encargos sociais – Outros encargos", categoria: "Administração", custo: 4166.67, qtde: 12, prioridade: 20 },
  { nome: "Aluguel da sede – Aluguel da sede administrativa", categoria: "Administração", custo: 26250.0, qtde: 12, prioridade: 20 },
  { nome: "Aluguel da sede – Aluguel de depósitos", categoria: "Administração", custo: 5250.0, qtde: 12, prioridade: 20 },
  { nome: "Aluguel da sede – Taxas condominiais", categoria: "Administração", custo: 3500.0, qtde: 12, prioridade: 20 },
  { nome: "Contas de consumo – Energia elétrica", categoria: "Administração", custo: 9000.0, qtde: 12, prioridade: 20 },
  { nome: "Contas de consumo – Água e esgoto", categoria: "Administração", custo: 5000.0, qtde: 12, prioridade: 20 },
  { nome: "Contas de consumo – Internet e telefonia", categoria: "Administração", custo: 6000.0, qtde: 12, prioridade: 20 },
  { nome: "Serviços contábeis e financeiros – Contabilidade", categoria: "Administração", custo: 8333.33, qtde: 12, prioridade: 20 },
  { nome: "Serviços contábeis e financeiros – Auditoria interna", categoria: "Administração", custo: 3333.33, qtde: 12, prioridade: 20 },
  { nome: "Serviços contábeis e financeiros – Tarifas bancárias", categoria: "Administração", custo: 3333.33, qtde: 12, prioridade: 20 },
  { nome: "Serviços contábeis e financeiros – Outros serviços financeiros", categoria: "Administração", custo: 1666.67, qtde: 12, prioridade: 20 },
  { nome: "Manutenção de veículos – Revisões periódicas", categoria: "Administração", custo: 8166.67, qtde: 12, prioridade: 20 },
  { nome: "Manutenção de veículos – Peças e reparos", categoria: "Administração", custo: 9333.33, qtde: 12, prioridade: 20 },
  { nome: "Manutenção de veículos – Documentação e IPVA", categoria: "Administração", custo: 3500.0, qtde: 12, prioridade: 20 },
  { nome: "Manutenção de veículos – Lavagens e pequenos serviços", categoria: "Administração", custo: 2333.33, qtde: 12, prioridade: 20 },
  { nome: "Seguros – Seguro frota", categoria: "Administração", custo: 6666.67, qtde: 12, prioridade: 20 },
  { nome: "Seguros – Seguro instalações", categoria: "Administração", custo: 4000.0, qtde: 12, prioridade: 20 },
  { nome: "Seguros – Responsabilidade civil", categoria: "Administração", custo: 2000.0, qtde: 12, prioridade: 20 },
  { nome: "Seguros – Outras apólices", categoria: "Administração", custo: 666.67, qtde: 12, prioridade: 20 },
  { nome: "Campanhas de marketing – Mídia digital", categoria: "Comunicação", custo: 16875.0, qtde: 12, prioridade: 20 },
  { nome: "Campanhas de marketing – Produção de conteúdo", categoria: "Comunicação", custo: 11250.0, qtde: 12, prioridade: 20 },
  { nome: "Campanhas de marketing – Materiais impressos", categoria: "Comunicação", custo: 34.99, qtde: 1929, prioridade: 20 },
  { nome: "Campanhas de marketing – Assessoria de imprensa", categoria: "Comunicação", custo: 3750.0, qtde: 12, prioridade: 20 },
  { nome: "Gestão de site e redes sociais – Hospedagem e domínios", categoria: "Comunicação", custo: 3750.0, qtde: 12, prioridade: 20 },
  { nome: "Gestão de site e redes sociais – Ferramentas e sistemas", categoria: "Comunicação", custo: 5250.0, qtde: 12, prioridade: 20 },
  { nome: "Gestão de site e redes sociais – Equipe de comunicação digital", categoria: "Comunicação", custo: 450.0, qtde: 120, prioridade: 20 },
  { nome: "Gestão de site e redes sociais – Treinamentos e atualização", categoria: "Comunicação", custo: 3600.0, qtde: 5, prioridade: 20 },
  { nome: "Eventos de arrecadação – Locação de espaço", categoria: "Comunicação", custo: 8750.0, qtde: 12, prioridade: 20 },
  { nome: "Eventos de arrecadação – Estrutura e serviços", categoria: "Comunicação", custo: 26250.0, qtde: 4, prioridade: 20 },
  { nome: "Eventos de arrecadação – Materiais de divulgação", categoria: "Comunicação", custo: 25.0, qtde: 2400, prioridade: 20 },
  { nome: "Eventos de arrecadação – Equipe de apoio", categoria: "Comunicação", custo: 416.67, qtde: 72, prioridade: 20 },
  { nome: "Relacionamento com grandes doadores – Encontros institucionais", categoria: "Comunicação", custo: 5000.0, qtde: 12, prioridade: 20 },
  { nome: "Relacionamento com grandes doadores – Materiais personalizados", categoria: "Comunicação", custo: 3750.0, qtde: 12, prioridade: 20 },
  { nome: "Relacionamento com grandes doadores – Visitas de campo", categoria: "Comunicação", custo: 2500.0, qtde: 12, prioridade: 20 },
  { nome: "Relacionamento com grandes doadores – Comunicação dirigida", categoria: "Comunicação", custo: 1250.0, qtde: 12, prioridade: 20 },
  { nome: "Auditoria independente – Honorários de auditoria", categoria: "Governança", custo: 14666.67, qtde: 12, prioridade: 20 },
  { nome: "Auditoria independente – Reembolsos de despesas", categoria: "Governança", custo: 1833.33, qtde: 12, prioridade: 20 },
  { nome: "Auditoria independente – Traduções e relatórios extras", categoria: "Governança", custo: 1833.33, qtde: 12, prioridade: 20 },
  { nome: "Reuniões de conselho e comitês – Passagens e hospedagens", categoria: "Governança", custo: 4000.0, qtde: 12, prioridade: 20 },
  { nome: "Reuniões de conselho e comitês – Infraestrutura de reuniões", categoria: "Governança", custo: 3500.0, qtde: 12, prioridade: 20 },
  { nome: "Reuniões de conselho e comitês – Documentação e atas", categoria: "Governança", custo: 1500.0, qtde: 12, prioridade: 20 },
  { nome: "Reuniões de conselho e comitês – Outros custos de governança", categoria: "Governança", custo: 1000.0, qtde: 12, prioridade: 20 },
  { nome: "Consultoria jurídica e compliance – Consultoria contratual", categoria: "Governança", custo: 5333.33, qtde: 12, prioridade: 20 },
  { nome: "Consultoria jurídica e compliance – Adequação LGPD", categoria: "Governança", custo: 4000.0, qtde: 12, prioridade: 20 },
  { nome: "Consultoria jurídica e compliance – Treinamentos em compliance", categoria: "Governança", custo: 5333.33, qtde: 6, prioridade: 20 },
  { nome: "Consultoria jurídica e compliance – Custas e taxas legais", categoria: "Governança", custo: 1333.33, qtde: 12, prioridade: 20 },
  { nome: "Capacitação em ética e integridade – Desenvolvimento de conteúdo", categoria: "Governança", custo: 4800.0, qtde: 5, prioridade: 20 },
  { nome: "Capacitação em ética e integridade – Facilitação de workshops", categoria: "Governança", custo: 5333.33, qtde: 6, prioridade: 20 },
  { nome: "Capacitação em ética e integridade – Materiais para participantes", categoria: "Governança", custo: 40.0, qtde: 400, prioridade: 20 },
  { nome: "Capacitação em ética e integridade – Avaliação e acompanhamento", categoria: "Governança", custo: 1000.0, qtde: 8, prioridade: 20 },
];

// ============================================================================
// INICIALIZAÇÃO E CONFIGURAÇÃO DOS DADOS
// ============================================================================

// GERAÇÃO DE IDs ÚNICOS
ITENS_DB.forEach((item, index) => {
  item.id = index; 
});

// ============================================================================
// LÓGICA DO SOLVER (Algoritmo de Quocientes / D'Hondt Adaptado)
// ============================================================================

function calculateDonation(orcamento) {
  // 1. Prepara o estado inicial
  // Cada item começa com R$ 0 alocados
  const allocation = ITENS_DB.map(item => ({
    ...item,
    alocado: 0,
    qtde_cotas: 0 // Cotas de R$ 1,00 (metafóricas)
  }));

  let remainingBudget = orcamento;
  
  // Define o "passo" da doação. 
  // Se o orçamento for gigante (ex: 1 milhão), o passo aumenta para não travar o browser.
  // Se for pequeno (ex: 50 reais), o passo é de R$ 1,00.
  const step = Math.max(1, remainingBudget / 3000); 

  // 2. Loop de Distribuição
  while (remainingBudget >= step) {
    
    // Encontra o item com o maior "Score de Necessidade"
    let winner = null;
    let maxScore = -1;

    for (let i = 0; i < allocation.length; i++) {
      const item = allocation[i];

      // Se o item já está 100% financiado (alocado >= custo total do estoque), pula
      const custoTotalEstoque = item.custo * item.qtde;
      if (item.alocado >= custoTotalEstoque) continue;

      // FÓRMULA MÁGICA: Score = Prioridade / (Valor Já Alocado + step)
      // Isso garante que itens de alta prioridade ganhem muito no começo,
      // mas conforme enchem, o score cai e dá vez aos menores.
      const score = item.prioridade / (item.alocado + step);

      if (score > maxScore) {
        maxScore = score;
        winner = item;
      }
    }

    // Se não sobrou ninguém pra receber dinheiro (tudo 100%), para.
    if (!winner) break;

    // 3. Aloca o dinheiro para o vencedor da rodada
    // Garante que não aloca mais do que o necessário para fechar o estoque
    const spaceLeft = (winner.custo * winner.qtde) - winner.alocado;
    const amountToGive = Math.min(step, spaceLeft, remainingBudget);

    winner.alocado += amountToGive;
    remainingBudget -= amountToGive;
  }

  // 4. Formatação Final para a Interface
  let itensEscolhidos = [];
  allocation.forEach((item) => {
     // Calcula quantas "unidades" ou fração de unidade isso representa
     let qtdUnidades = item.alocado / item.custo;
     
     if (qtdUnidades > 0) {
       itensEscolhidos.push({
         nome: item.nome,
         categoria: item.categoria,
         qtd: qtdUnidades, // Qtd fracionada (ex: 0.5 ou 2.3)
         subtotal: item.alocado,
         custo_real_unitario: item.custo, 
         prioridade: item.prioridade
       });
     }
  });

  return {
    itens_escolhidos: itensEscolhidos.sort((a, b) => b.subtotal - a.subtotal),
    tipo_estrategia: "Distribuição Proporcional por Prioridade"
  };
}

// ============================================================================
// INTERFACE (UI)
// ============================================================================

const CATEGORY_ICONS = {
  "Alimentação": "🍎", "Higiene": "🧼", "Medicamentos": "💊",
  "Saúde": "🩺", "Equipe": "👩‍⚕️", "Psicossocial": "🧠",
  "Crianças": "🧸", "Idosos": "👴", "Logística": "🚚",
  "Abrigos": "⛺", "Água": "💧", "EPIs": "😷", "Outros": "📦",
  "Reserva": "🛡️", "Administração": "📁"
};

function parseExcelName(fullName) {
  if (!fullName) return { cat: "Geral", item: "Item diverso" };
  let cleanName = fullName.replace(/Cota de |Cota: /g, "");
  let parts = cleanName.split(/ [–—-] /);
  if (parts.length >= 2) {
    return {
      cat: parts[0].trim(),
      item: parts.slice(1).join(" - ").trim()
    };
  }
  return { cat: "Geral", item: cleanName };
}

function getIcon(category, name) {
  const searchStr = (category + " " + name).toLowerCase();
  if (searchStr.includes("água")) return "💧";
  for (const [key, icon] of Object.entries(CATEGORY_ICONS)) {
    if (searchStr.includes(key.toLowerCase())) return icon;
  }
  return "❤️"; 
}

function aggregateItems(items) {
  const groups = {};
  items.forEach(item => {
    const parsed = parseExcelName(item.nome);
    const groupKey = parsed.item;
    if (!groups[groupKey]) {
      groups[groupKey] = {
        nome: parsed.item,
        categoria: parsed.cat,
        subtotal: 0,
        qtd: 0,
        custo_real_unitario: item.custo_real_unitario
      };
    }
    groups[groupKey].subtotal += item.subtotal;
    groups[groupKey].qtd += item.qtd; 
  });
  return Object.values(groups).sort((a, b) => b.subtotal - a.subtotal);
}

function getDiverseSelection(items, maxCards) {
  const visible = [];
  const categoriesFound = new Set();
  const usedNames = new Set();

  // 1. Tenta pegar 1 de cada categoria
  for (const item of items) {
    if (visible.length >= maxCards) break;
    if (!categoriesFound.has(item.categoria)) {
      visible.push(item);
      categoriesFound.add(item.categoria);
      usedNames.add(item.nome);
    }
  }

  // 2. Completa com o resto
  for (const item of items) {
    if (visible.length >= maxCards) break;
    if (!usedNames.has(item.nome)) {
      visible.push(item);
      usedNames.add(item.nome);
    }
  }
  
  const hidden = items.filter(i => !usedNames.has(i.nome));
  return { visible, hidden };
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupDonationCalculator();
});

function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  if (navToggle && navList) navToggle.addEventListener("click", () => navList.classList.toggle("is-open"));
  
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if(target) {
        document.querySelectorAll(".section").forEach(s => s.classList.remove("is-visible"));
        target.classList.add("is-visible");
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function setupDonationCalculator() {
  const input = document.getElementById("donationAmount");
  const buttons = document.querySelectorAll(".amount-btn");
  const grid = document.querySelector(".impact-grid");
  const helpText = document.getElementById("donation-help");
  const MAX_CARDS = 4;

  if (!input || !grid) return;

  const createCard = (item) => {
    const card = document.createElement("div");
    card.className = "impact-card";
    
    const icon = getIcon(item.categoria, item.nome);
    const valorFormatado = item.subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    
    // Porcentagem
    let rawPct = (item.subtotal / item.custo_real_unitario) * 100;
    let porcentagemDisplay;
    if (rawPct < 1) {
       porcentagemDisplay = rawPct.toFixed(1);
       if (porcentagemDisplay === "0.0") porcentagemDisplay = "0.1";
    } else {
       porcentagemDisplay = Math.round(rawPct);
    }
    const textoImpacto = `<strong>${porcentagemDisplay}%</strong> do valor da unidade`;

    card.innerHTML = `
      <div class="card-icon-bubble">${icon}</div>
      <h4 class="impact-label">${item.nome}</h4>
      <span class="impact-subtitle">${item.categoria}</span>
      <div class="impact-value-box">
        <span class="impact-price">${valorFormatado}</span>
        <span class="impact-qtd" style="margin-top:4px; font-size:0.85rem; color:#666;">${textoImpacto}</span>
      </div>
    `;
    return card;
  };

  const renderResults = (data) => {
    grid.innerHTML = "";
    if(data.tipo_estrategia && helpText) helpText.innerHTML = `<strong>Resultado:</strong> ${data.tipo_estrategia}`;

    if (!data.itens_escolhidos || data.itens_escolhidos.length === 0) {
      grid.innerHTML = `<p style="text-align:center; color:#888; grid-column:1/-1;">Valor insuficiente.</p>`;
      return;
    }

    const aggregatedItems = aggregateItems(data.itens_escolhidos);
    const selection = getDiverseSelection(aggregatedItems, MAX_CARDS);

    selection.visible.forEach(item => grid.appendChild(createCard(item)));

    if (selection.hidden.length > 0) {
      const totalOthers = selection.hidden.reduce((acc, curr) => acc + curr.subtotal, 0);
      const formattedTotal = totalOthers.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      const btnContainer = document.createElement("div");
      btnContainer.className = "show-more-container";
      const btn = document.createElement("button");
      btn.className = "btn-show-more";
      btn.innerHTML = `Ver mais <strong>${selection.hidden.length} itens</strong> (R$ ${formattedTotal})`;
      btn.addEventListener("click", () => {
        selection.hidden.forEach(item => grid.insertBefore(createCard(item), btnContainer));
        btnContainer.remove();
      });
      btnContainer.appendChild(btn);
      grid.appendChild(btnContainer);
    }
  };

  // Debounce
  let timerId;
  const handleUpdate = (val) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        const num = parseFloat(val);
        if (!isNaN(num) && num > 0) {
            const result = calculateDonation(num);
            renderResults(result);
            buttons.forEach(btn => btn.classList.toggle("is-active", parseFloat(btn.dataset.amount) === num));
        }
    }, 200);
  };

  input.addEventListener("input", (e) => handleUpdate(e.target.value));
  buttons.forEach(btn => btn.addEventListener("click", () => {
    input.value = btn.dataset.amount;
    handleUpdate(btn.dataset.amount);
  }));
  
  handleUpdate(input.value);
}