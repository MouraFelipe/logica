/* =========================================================
   TÓPICO 1 — LÓGICA PROPOSICIONAL
   Leitura: {p} (texto, aceita HTML) | {ex, pt} (exemplo + legenda) | {tip}
   Pergunta: type choice | match | build · kind · situation · prompt · options/answer · explain (aceita HTML)
   ========================================================= */
const CE = ["Certo", "Errado"];   // questões no estilo Cebraspe
const TOPIC1 = {
  id: "t1", title: "Lógica Proposicional", pt: "A base de tudo", level: "Tópico 1", emoji: "🧩",
  goal: "Reconhecer proposições, conectivos e montar o tamanho de uma tabela-verdade.",
  doneMsg: "Agora você reconhece proposições, conectivos e sabe quantas linhas tem uma tabela-verdade.",
  phases: [
    {
      id: "t1p1", title: "O que é proposição", pt: "Frase que pode ser V ou F", emoji: "💬",
      goal: "Reconhecer o que é e o que não é proposição",
      reading: [
        {p: "<b>Proposição</b> é uma frase <b>declarativa</b> que pode ser julgada como <b>verdadeira (V)</b> ou <b>falsa (F)</b>, nunca as duas ao mesmo tempo."},
        {ex: "Porto Alegre é a capital do RS.", pt: "É proposição (verdadeira)"},
        {ex: "2 + 2 = 5", pt: "É proposição (falsa, mas é proposição)"},
        {ex: "Que dia lindo!", pt: "Não é: exclamação"},
        {ex: "Você estudou hoje?", pt: "Não é: pergunta"},
        {ex: "Estude lógica.", pt: "Não é: ordem"},
        {ex: "x + 3 = 10", pt: "Não é: sentença aberta (depende do valor de x)"},
        {tip: "💡 A banca adora: <b>pergunta, exclamação, ordem e sentença aberta</b> não são proposições. Paradoxo (“Esta frase é falsa”) também não."}
      ],
      questions: [
        {type: "choice", kind: "Identifique", prompt: "Qual das frases é uma proposição?",
         options: ["O Brasil fica na Europa.", "Feche a porta.", "Será que vai chover?", "x é maior que 5."], answer: 0,
         explain: "É declarativa e pode ser julgada: é <b>falsa</b>, mas é proposição. As outras são ordem, pergunta e sentença aberta."},
        {type: "choice", kind: "Certo ou errado", prompt: "“Ele é o melhor jogador do time” é uma proposição.",
         options: CE, answer: 1,
         explain: "Não dá para saber quem é “ele”: é uma <b>sentença aberta</b>, não pode ser julgada como V ou F."},
        {type: "match", kind: "Associe", prompt: "Ligue cada frase ao que ela é",
         pairs: [["Que prova difícil!", "Exclamação"], ["Leia o edital.", "Ordem"], ["y − 2 = 8", "Sentença aberta"], ["7 é um número primo.", "Proposição"]],
         explain: "Só a declarativa que pode ser julgada (7 é primo: V) é proposição."}
      ]
    },
    {
      id: "t1p2", title: "Conectivos", pt: "e, ou, se…então, se e somente se", emoji: "🔗",
      goal: "Conhecer os conectivos e seus símbolos",
      reading: [
        {p: "Proposições simples se juntam com <b>conectivos</b> e formam proposições <b>compostas</b>."},
        {ex: "p ∧ q", pt: "Conjunção: p e q"},
        {ex: "p ∨ q", pt: "Disjunção: p ou q"},
        {ex: "p ⊻ q", pt: "Disjunção exclusiva: ou p ou q (só uma)"},
        {ex: "p → q", pt: "Condicional: se p, então q"},
        {ex: "p ↔ q", pt: "Bicondicional: p se e somente se q"},
        {ex: "~p", pt: "Negação: não p (também aparece como ¬p)"},
        {tip: "💡 O condicional também aparece como “q, se p”, “quando p, q” e “p implica q”. Leia com calma: a banca disfarça o conectivo."}
      ],
      questions: [
        {type: "match", kind: "Associe", prompt: "Ligue cada símbolo ao seu conectivo",
         pairs: [["∧", "e"], ["∨", "ou"], ["→", "se…, então…"], ["↔", "se e somente se"]],
         explain: "Esses quatro símbolos aparecem em quase toda prova."},
        {type: "choice", kind: "Identifique", prompt: "Em “Se estudo, então passo”, qual é o conectivo?",
         options: ["Condicional (→)", "Conjunção (∧)", "Bicondicional (↔)"], answer: 0,
         explain: "“Se…, então…” é o <b>condicional</b>."},
        {type: "choice", kind: "Identifique", prompt: "“Ou vou ao cinema, ou vou ao teatro” (não as duas coisas) usa qual conectivo?",
         options: ["Disjunção exclusiva (⊻)", "Disjunção inclusiva (∨)", "Conjunção (∧)"], answer: 0,
         explain: "“Ou…, ou…” indica que só uma pode acontecer: <b>disjunção exclusiva</b>."}
      ]
    },
    {
      id: "t1p3", title: "Simples ou composta", pt: "Contando as proposições", emoji: "🔢",
      goal: "Contar as proposições simples e escrever em símbolos",
      reading: [
        {p: "Proposição <b>simples</b> tem uma ideia só. <b>Composta</b> junta duas ou mais com conectivos."},
        {ex: "João é médico.", pt: "Simples"},
        {ex: "João é médico e Ana é advogada.", pt: "Composta: p ∧ q"},
        {ex: "Se chover, então não vou à praia.", pt: "Composta: p → ~q"},
        {tip: "💡 “João e Ana são médicos” são duas proposições: “João é médico” e “Ana é médica”."}
      ],
      questions: [
        {type: "choice", kind: "Conte", prompt: "Quantas proposições simples há em: “Se Ana estuda e Bia trabalha, então Caio viaja”?",
         options: ["3", "2", "1"], answer: 0,
         explain: "p: Ana estuda · q: Bia trabalha · r: Caio viaja. Fica <b>(p ∧ q) → r</b>."},
        {type: "choice", kind: "Traduza", situation: "p: chove · q: a rua fica seca",
         prompt: "Como fica, em símbolos, “Se chove, então a rua não fica seca”?",
         options: ["p → ~q", "~p → q", "p ∧ ~q"], answer: 0,
         explain: "“Se chove” = p, “então” = →, “não fica seca” = ~q."},
        {type: "choice", kind: "Certo ou errado", prompt: "“Paulo é engenheiro ou advogado” é uma proposição simples.",
         options: CE, answer: 1,
         explain: "Equivale a “Paulo é engenheiro <b>ou</b> Paulo é advogado”: é <b>composta</b>."}
      ]
    },
    {
      id: "t1p4", title: "Tabela-verdade", pt: "Quantas linhas?", emoji: "📋",
      goal: "Saber quantas linhas tem uma tabela-verdade",
      reading: [
        {p: "A tabela-verdade mostra todas as combinações de V e F. Com <b>n</b> proposições simples, ela tem <b>2ⁿ linhas</b>."},
        {ex: "1 proposição", pt: "2 linhas"},
        {ex: "2 proposições", pt: "4 linhas"},
        {ex: "3 proposições", pt: "8 linhas"},
        {ex: "4 proposições", pt: "16 linhas"},
        {tip: "💡 Conte só as proposições <b>diferentes</b>. Em (p ∧ q) → p, só existem p e q: 4 linhas."}
      ],
      questions: [
        {type: "choice", kind: "Calcule", prompt: "Quantas linhas tem a tabela-verdade de (p ∨ q) → r?",
         options: ["8", "6", "4"], answer: 0,
         explain: "São 3 proposições (p, q, r): 2³ = <b>8</b>."},
        {type: "choice", kind: "Calcule", prompt: "Quantas linhas tem a tabela-verdade de (p → q) ∧ (q → p)?",
         options: ["4", "8", "16"], answer: 0,
         explain: "Aparecem 4 letras, mas só 2 diferentes (p e q): 2² = <b>4</b>."},
        {type: "choice", kind: "Certo ou errado", prompt: "A tabela-verdade de uma proposição com 5 proposições simples tem 32 linhas.",
         options: CE, answer: 0,
         explain: "2⁵ = 2 × 2 × 2 × 2 × 2 = <b>32</b>."}
      ]
    }
  ]
};
