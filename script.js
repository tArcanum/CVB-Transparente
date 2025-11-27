// ============================================================================
// 1. DADOS (ITENS_DB)
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

/**
 * ============================================================================
 * 2. ESTRUTURA DE DADOS: MIN-HEAP
 * Essencial para replicar a lógica do Python heapq
 * ============================================================================
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this._siftUp();
    }

    pop() {
        if (this.isEmpty()) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this._siftDown();
        }
        return root;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    // Compara items pelo elemento 'cov' (cobertura)
    _compare(a, b) {
        return a.cov - b.cov;
    }

    _siftUp() {
        let nodeIdx = this.heap.length - 1;
        while (nodeIdx > 0) {
            const parentIdx = Math.floor((nodeIdx - 1) / 2);
            if (this._compare(this.heap[nodeIdx], this.heap[parentIdx]) < 0) {
                [this.heap[nodeIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[nodeIdx]];
                nodeIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    _siftDown() {
        let nodeIdx = 0;
        while (true) {
            const leftChildIdx = 2 * nodeIdx + 1;
            const rightChildIdx = 2 * nodeIdx + 2;
            let swapIdx = null;

            if (leftChildIdx < this.heap.length) {
                if (this._compare(this.heap[leftChildIdx], this.heap[nodeIdx]) < 0) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < this.heap.length) {
                if (
                    (swapIdx === null && this._compare(this.heap[rightChildIdx], this.heap[nodeIdx]) < 0) ||
                    (swapIdx !== null && this._compare(this.heap[rightChildIdx], this.heap[leftChildIdx]) < 0)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx !== null) {
                [this.heap[nodeIdx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[nodeIdx]];
                nodeIdx = swapIdx;
            } else {
                break;
            }
        }
    }
}

/**
 * ============================================================================
 * 3. ALGORITMO OTIMIZADO (RÉPLICA EXATA PYTHON)
 * ============================================================================
 */

// Prepara os dados: Adiciona IDs e Tokeniza itens caros (> R$10)
function prepareData(rawItems) {
    return rawItems.map((item, index) => {
        const custo = item.custo;
        let isTokenizado = false;
        let custoProcessamento = custo;
        let qtdeProcessamento = item.qtde;
        const valorCotaPadrao = 1.0;

        // Se o custo for alto, quebra em tokens de ~1 real
        if (custo > 10.0) {
            isTokenizado = true;
            custoProcessamento = valorCotaPadrao;
            // Quantidade de cotas = (Custo Total do Item / 1.0) * Qtde Itens
            // NOTA: Para bater exatamente com a lógica Python "valor_cota_padrao",
            // ajustamos a quantidade para ser proporcional.
            const cotasPorUnidade = custo / valorCotaPadrao;
            qtdeProcessamento = Math.ceil(item.qtde * cotasPorUnidade);
        }

        return {
            id: index,
            nome: item.nome,
            categoria: item.categoria,
            prioridade: item.prioridade,
            
            // Dados para o algoritmo (Tokenizados ou não)
            custo: custoProcessamento, 
            qtde: qtdeProcessamento,
            
            // Dados Originais
            custo_real_original: custo, // val_real no python
            is_tokenizado: isTokenizado
        };
    });
}

// Algoritmo Core: allocate_balanced (Réplica do knapsack_solver.py)
function allocateBalanced(itemsDisponiveis, orcamentoDisponivel) {
    let resultado = {}; // ID -> Qtde Comprada (cotas)
    itemsDisponiveis.forEach(i => resultado[i.id] = 0);

    let custoTotalAlocado = 0.0;
    let orcamentoRestante = orcamentoDisponivel;

    // Mapa auxiliar para acesso rápido
    const itemData = {};
    itemsDisponiveis.forEach(item => {
        itemData[item.id] = {
            item: item,
            val_real: item.custo_real_original,
            custo: item.custo, // custo da cota (token)
            qtde: item.qtde,   // estoque total de cotas
            prio: item.prioridade
        };
    });

    let targetLevel = 1.0; // Começa em 1.0 (Python logic)

    while (orcamentoRestante >= 0.01) {
        
        // 1. Identifica itens "ativos"
        let activeCandidates = [];
        
        itemsDisponiveis.forEach(item => {
            const id = item.id;
            const bought = resultado[id];
            
            // Verifica estoque
            if (bought >= item.qtde) return; 

            // Calcula cobertura atual
            // Fórmula Python: curr_cov = (bought * item["custo"]) / item_data[id_]["val_real"]
            // bought é qtd de cotas. item["custo"] é preço da cota.
            const currCov = (bought * itemData[id].custo) / itemData[id].val_real;

            if (currCov < targetLevel - 1e-6) {
                // Checa se tem dinheiro para pelo menos 1 unidade/cota
                if (orcamentoRestante >= itemData[id].custo) {
                    activeCandidates.push({
                        item: item,
                        cov: currCov
                    });
                }
            }
        });

        // 2. Se não tem candidatos para essa meta, aumenta a meta ou encerra
        if (activeCandidates.length === 0) {
            // Verifica se sobrou estoque em algum lugar
            const anyStock = itemsDisponiveis.some(i => resultado[i.id] < i.qtde);
            if (!anyStock) break; // Acabou estoque de tudo

            targetLevel += 1.0; // Sobe o nível (Python: target_level += 1.0)
            continue;
        }

        // 3. Filtra apenas a ELITE (Maior Prioridade Disponível)
        const maxPrio = Math.max(...activeCandidates.map(c => c.item.prioridade));
        
        // Cria Min-Heap
        const heap = new MinHeap();
        activeCandidates.forEach(cand => {
            if (cand.item.prioridade === maxPrio) {
                // Heap armazena { cov, cost, id }
                // Mas aqui guardamos objeto completo para facilitar
                heap.push({
                    cov: cand.cov,
                    cost: itemData[cand.item.id].custo,
                    id: cand.item.id
                });
            }
        });

        // 4. Processamento em LOTE dentro do Heap
        while (!heap.isEmpty() && orcamentoRestante >= 0.01) {
            const top = heap.pop(); // Remove o menor (menor cobertura)
            const id = top.id;
            const cov = top.cov;
            const cost = top.cost;

            // Descobre cobertura do próximo para calcular o GAP
            const nextNode = heap.peek();
            let nextCov = nextNode ? nextNode.cov : targetLevel;

            let gap = nextCov - cov;

            // Variável para qtd a comprar
            let quotasToBuy = 0;

            if (gap < 1e-9) {
                quotasToBuy = 1;
            } else {
                // Mágica Matemática do Python:
                // quotas_float = (gap * val_real) / cost
                const valReal = itemData[id].val_real;
                const quotasFloat = (gap * valReal) / cost;
                quotasToBuy = Math.floor(quotasFloat);
                if (quotasToBuy < 1) quotasToBuy = 1;
            }

            // Restrições (Orçamento e Estoque)
            const stockLeft = itemData[id].qtde - resultado[id];
            quotasToBuy = Math.min(quotasToBuy, stockLeft);

            const maxAfford = Math.floor(orcamentoRestante / cost);
            quotasToBuy = Math.min(quotasToBuy, maxAfford);

            if (quotasToBuy <= 0) {
                continue;
            }

            // Executa a compra
            const totalCost = quotasToBuy * cost;
            resultado[id] += quotasToBuy;
            orcamentoRestante -= totalCost;
            custoTotalAlocado += totalCost;

            // Recalcula nova cobertura
            const newBought = resultado[id];
            const newCov = (newBought * cost) / itemData[id].val_real;

            // Se ainda não terminou e está abaixo da meta, volta pro Heap
            if (newBought < itemData[id].qtde && newCov < targetLevel - 1e-6) {
                if (orcamentoRestante >= cost) {
                    heap.push({
                        cov: newCov,
                        cost: cost,
                        id: id
                    });
                }
            }
        }
    }

    return { allocated: resultado, remainingBudget: orcamentoRestante };
}

// Wrapper Principal (Bridge)
function calculateDonation(amount) {
    if (typeof ITENS_DB === 'undefined') {
        console.error("ERRO: ITENS_DB não carregado.");
        return { tipo_estrategia: "Erro", itens_escolhidos: [] };
    }

    // 1. Prepara dados (Tokeniza)
    const allItems = prepareData(ITENS_DB);

    // 2. Define Buckets (Regra do Python: allocate)
    const isMicro = amount < 10.0;
    const opPct = isMicro ? 0.0 : 0.20; // 20%
    const impPct = isMicro ? 1.0 : 0.80; // 80%

    let orcOp = amount * opPct;
    let orcImp = amount * impPct;

    // Separa por prioridade < 60 e >= 60
    const itemsOp = allItems.filter(i => i.prioridade < 60);
    const itemsImp = allItems.filter(i => i.prioridade >= 60);

    // 3. Executa Alocação
    const resOp = allocateBalanced(itemsOp, orcOp);
    
    // Sobra do operacional flui para impacto
    // Python: allocate_balanced(itens_imp, orc_imp + (orc_op - custo_op))
    // Aqui sabemos que orcOp - custoOp = resOp.remainingBudget
    orcImp += resOp.remainingBudget;

    const resImp = allocateBalanced(itemsImp, orcImp);

    // 4. Formatação de Saída
    let itensEscolhidos = [];

    const processResult = (allocationMap, sourceItems) => {
        sourceItems.forEach(item => {
            const qtdTokensComprados = allocationMap[item.id] || 0;
            if (qtdTokensComprados > 0) {
                const totalGasto = qtdTokensComprados * item.custo;
                
                // Reconverte para unidades "reais"
                // Se item.custo (token) != item.custo_real_original, então foi tokenizado
                let qtdReal = totalGasto / item.custo_real_original;

                itensEscolhidos.push({
                    id: item.id,
                    nome: item.nome,
                    categoria: item.categoria,
                    prioridade: item.prioridade,
                    subtotal: totalGasto,
                    custo_real_unitario: item.custo_real_original,
                    qtd: Number(qtdReal.toFixed(2))
                });
            }
        });
    };

    processResult(resOp.allocated, itemsOp);
    processResult(resImp.allocated, itemsImp);

    // Ordena por subtotal
    itensEscolhidos.sort((a, b) => b.subtotal - a.subtotal);

    return {
        tipo_estrategia: isMicro ? "Foco Total em Impacto Direto" : "Distribuição Balanceada (80% Impacto / 20% Operacional)",
        itens_escolhidos: itensEscolhidos
    };
}


/**
 * ============================================================================
 * 4. INTERFACE (Frontend UI)
 * ============================================================================
 */

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
    let rawPct = 0;
    if (item.custo_real_unitario > 0) {
        rawPct = (item.subtotal / item.custo_real_unitario) * 100;
    }
    
    let porcentagemDisplay;
    if (rawPct < 1 && rawPct > 0) {
       porcentagemDisplay = rawPct.toFixed(1);
    } else {
       porcentagemDisplay = Math.round(rawPct);
    }
    
    // Ajuste visual para quando compra múltiplas unidades
    let textoImpacto;
    if (rawPct > 100) {
        textoImpacto = `<strong>${item.qtd.toFixed(1)}</strong> unidades`;
    } else {
        textoImpacto = `<strong>${porcentagemDisplay}%</strong> de uma unidade`;
    }

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
      grid.innerHTML = `<p style="text-align:center; color:#888; grid-column:1/-1;">Valor insuficiente para comprar itens prioritários ou estoque esgotado.</p>`;
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
        // Limpa formatação de moeda se houver (ex: R$ 1.000,00 -> 1000.00)
        let cleanVal = String(val).replace(/[^\d,.-]/g, '').replace(',','.');
        const num = parseFloat(cleanVal);
        
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
  
  // Roda uma vez se já tiver valor no input
  if (input.value) handleUpdate(input.value);
}