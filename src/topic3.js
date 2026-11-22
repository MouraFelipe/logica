/* =========================================================
   TÓPICO 3 — NEGAÇÃO DE PROPOSIÇÕES
   ========================================================= */
const TOPIC3 = {
  id: "t3", title: "Negação de Proposições", pt: "Negar do jeito certo", level: "Tópico 3", emoji: "🔄",
  goal: "Negar proposições simples, compostas e com quantificadores.",
  doneMsg: "Agora você nega qualquer proposição sem cair nas pegadinhas da banca.",
  phases: [
    {
      id: "t3p1", title: "Negação simples", pt: "~p", emoji: "🚫",
      goal: "Negar uma proposição simples",
      reading: [
        {p: "Negar é <b>inverter o valor lógico</b>. Se p é V, ~p é F."},
        {ex: "p: Ana é alta.", pt: "~p: Ana não é alta."},
        {ex: "Não é verdade que Ana é alta.", pt: "outra forma de escrever ~p"},
        {ex: "~(~p) = p", pt: "a dupla negação volta ao original"},
        {tip: "💡 A negação de “Ana é alta” <b>não</b> é “Ana é baixa”: ela pode ter altura média. O certo é “Ana não é alta”."}
      ],
      questions: [
        {type: "choice", kind: "Negue", prompt: "Qual é a negação de “O céu está nublado”?",
         options: ["O céu não está nublado.", "O céu está limpo.", "O céu está ensolarado."], answer: 0,
         explain: "Negar é só dizer que <b>não</b> está nublado. “Limpo” é um antônimo, não a negação."},
        {type: "choice", kind: "Certo ou errado", prompt: "A negação de “João é rico” é “João é pobre”.",
         options: CE, answer: 1, explain: "João pode ser classe média. A negação é <b>“João não é rico”</b>."},
        {type: "choice", kind: "Simplifique", prompt: "~(~p) é igual a:",
         options: ["p", "~p", "Nenhuma das duas"], answer: 0, explain: "Negar duas vezes volta ao original: <b>p</b>."}
      ]
    },
    {
      id: "t3p2", title: "Negar o “e” e o “ou”", pt: "Leis de De Morgan", emoji: "🔀",
      goal: "Negar “e” e “ou” com as Leis de De Morgan",
      reading: [
        {p: "Para negar <b>e</b> ou <b>ou</b>: negue as duas partes e <b>troque o conectivo</b>."},
        {ex: "~(p ∧ q) ⇔ ~p ∨ ~q", pt: "nega o e: vira ou"},
        {ex: "~(p ∨ q) ⇔ ~p ∧ ~q", pt: "nega o ou: vira e"},
        {ex: "Estudo e trabalho.", pt: "Negação: Não estudo ou não trabalho."},
        {tip: "💡 Macete: <b>nega tudo e troca o conectivo</b> (e ↔ ou)."}
      ],
      questions: [
        {type: "choice", kind: "Negue", prompt: "Negação de “Pedro é policial e Ana é juíza”:",
         options: ["Pedro não é policial ou Ana não é juíza.", "Pedro não é policial e Ana não é juíza.", "Pedro é policial ou Ana é juíza."], answer: 0,
         explain: "Nega as duas e troca <b>e</b> por <b>ou</b>."},
        {type: "choice", kind: "Negue", prompt: "Negação de “Vou à praia ou ao clube”:",
         options: ["Não vou à praia e não vou ao clube.", "Não vou à praia ou não vou ao clube.", "Vou à praia e ao clube."], answer: 0,
         explain: "Nega as duas e troca <b>ou</b> por <b>e</b>."},
        {type: "choice", kind: "Símbolos", prompt: "~(p ∨ ~q) é equivalente a:",
         options: ["~p ∧ q", "~p ∨ q", "p ∧ ~q"], answer: 0,
         explain: "Nega p (~p), nega ~q (vira q) e troca ∨ por <b>∧</b>: ~p ∧ q."}
      ]
    },
    {
      id: "t3p3", title: "Negar o condicional", pt: "~(p → q)", emoji: "↩️",
      goal: "Negar o “se…, então…”",
      reading: [
        {p: "A negação de p → q é <b>p ∧ ~q</b>: mantém a primeira, troca por <b>e</b> e nega a segunda."},
        {ex: "~(p → q) ⇔ p ∧ ~q", pt: ""},
        {ex: "Se chove, então fico em casa.", pt: "Negação: Chove e não fico em casa."},
        {tip: "💡 Macete <b>MA-NE</b>: <b>MA</b>ntém a primeira e <b>NE</b>ga a segunda, com “e” no meio. A negação de um condicional <b>nunca</b> é outro condicional."}
      ],
      questions: [
        {type: "choice", kind: "Negue", prompt: "Negação de “Se estudo, então passo”:",
         options: ["Estudo e não passo.", "Se não estudo, então não passo.", "Não estudo e passo."], answer: 0,
         explain: "MA-NE: mantém “estudo”, nega “passo”, com <b>e</b> no meio."},
        {type: "choice", kind: "Negue", prompt: "Negação de “Se Carlos é aprovado, então não viaja”:",
         options: ["Carlos é aprovado e viaja.", "Carlos não é aprovado e viaja.", "Se Carlos não é aprovado, então viaja."], answer: 0,
         explain: "Mantém “é aprovado” e nega “não viaja”, que vira <b>viaja</b>."},
        {type: "choice", kind: "Certo ou errado", prompt: "A negação de “Se há sol, então vou à praia” é “Se não há sol, então não vou à praia”.",
         options: CE, answer: 1, explain: "A negação do condicional não é condicional. O certo é <b>“Há sol e não vou à praia”</b>."}
      ]
    },
    {
      id: "t3p4", title: "Negar ↔ e ⊻", pt: "Um vira o outro", emoji: "🔁",
      goal: "Negar o bicondicional e o “ou…, ou…”",
      reading: [
        {p: "Negar o <b>↔</b> dá o <b>⊻</b>, e negar o ⊻ dá o ↔."},
        {ex: "~(p ↔ q) ⇔ p ⊻ q", pt: ""},
        {ex: "~(p ⊻ q) ⇔ p ↔ q", pt: ""},
        {ex: "Vou se e somente se você for.", pt: "Negação: Ou eu vou, ou você vai."},
        {tip: "💡 Faz sentido: o ↔ é V com valores iguais e o ⊻ é V com valores diferentes. Um é exatamente o oposto do outro."}
      ],
      questions: [
        {type: "choice", kind: "Negue", prompt: "Negação de “Ana viaja se e somente se Bia fica”:",
         options: ["Ou Ana viaja, ou Bia fica.", "Ana não viaja se e somente se Bia não fica.", "Ana viaja e Bia não fica."], answer: 0,
         explain: "~(p ↔ q) = <b>p ⊻ q</b>: “Ou Ana viaja, ou Bia fica”."},
        {type: "choice", kind: "Certo ou errado", prompt: "~(p ⊻ q) é equivalente a p ↔ q.",
         options: CE, answer: 0, explain: "Negar o ⊻ dá o <b>↔</b>."},
        {type: "match", kind: "Associe", prompt: "Ligue cada negação ao seu resultado",
         pairs: [["~(p ∧ q)", "~p ∨ ~q"], ["~(p ∨ q)", "~p ∧ ~q"], ["~(p → q)", "p ∧ ~q"], ["~(p ↔ q)", "p ⊻ q"]],
         explain: "Essas quatro negações resolvem a maioria das questões do tópico."}
      ]
    },
    {
      id: "t3p5", title: "Todo, algum, nenhum", pt: "Negando quantificadores", emoji: "👥",
      goal: "Negar frases com todo, algum e nenhum",
      reading: [
        {p: "Com quantificadores, a negação também tem regra própria."},
        {ex: "Todo A é B.", pt: "Negação: Algum A não é B."},
        {ex: "Algum A é B.", pt: "Negação: Nenhum A é B."},
        {ex: "Nenhum A é B.", pt: "Negação: Algum A é B."},
        {tip: "💡 A negação de “Todo político é honesto” <b>não</b> é “Nenhum político é honesto”. Basta <b>um</b> não ser: “Algum político não é honesto”."}
      ],
      questions: [
        {type: "choice", kind: "Negue", prompt: "Negação de “Todos os candidatos foram aprovados”:",
         options: ["Algum candidato não foi aprovado.", "Nenhum candidato foi aprovado.", "Todos os candidatos foram reprovados."], answer: 0,
         explain: "Para derrubar o “todos”, basta <b>um</b> não ter sido aprovado."},
        {type: "choice", kind: "Negue", prompt: "Negação de “Algum aluno faltou”:",
         options: ["Nenhum aluno faltou.", "Algum aluno não faltou.", "Todos os alunos faltaram."], answer: 0,
         explain: "A negação de “algum é” é <b>“nenhum é”</b>."},
        {type: "choice", kind: "Certo ou errado", prompt: "A negação de “Nenhum gato é preto” é “Algum gato é preto”.",
         options: CE, answer: 0, explain: "Para derrubar o “nenhum”, basta existir <b>um</b> gato preto."}
      ]
    }
  ]
};

/* próximos tópicos (aparecem como "em breve") */
const UPCOMING = [
  {title: "Equivalência de Proposições", pt: "Frases diferentes, mesmo sentido", level: "Tópico 4", emoji: "🟰"},
  {title: "Estruturas Lógicas", pt: "Deduções com premissas", level: "Tópico 5", emoji: "🏗️"},
  {title: "Tautologia, Contradição e Contingência", pt: "Sempre V, sempre F ou depende", level: "Tópico 6", emoji: "♾️"},
  {title: "Argumento Válido e Inválido", pt: "A conclusão segue das premissas?", level: "Tópico 7", emoji: "✅"},
  {title: "Interpretação dos Quantificadores", pt: "Todo, algum, nenhum", level: "Tópico 8", emoji: "👥"},
  {title: "Diagramas Lógicos", pt: "Conjuntos e diagramas de Venn", level: "Tópico 9", emoji: "⭕"},
  {title: "Métodos Complementares", pt: "Atalhos para resolver mais rápido", level: "Tópico 10", emoji: "🧰"},
  {title: "Lógica de Associação", pt: "Quem é quem: tabelas de associação", level: "Tópico 11", emoji: "🧷"}
];
