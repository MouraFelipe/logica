/* =========================================================
   TÓPICO 2 — JULGAMENTO DE PROPOSIÇÕES (valor lógico)
   ========================================================= */
const TOPIC2 = {
  id: "t2", title: "Julgamento de Proposições", pt: "Valor lógico: V ou F", level: "Tópico 2", emoji: "⚖️",
  goal: "Descobrir se uma proposição composta é verdadeira ou falsa.",
  doneMsg: "Agora você julga qualquer proposição composta, conectivo por conectivo.",
  phases: [
    {
      id: "t2p1", title: "Conjunção (e)", pt: "p ∧ q", emoji: "∧",
      goal: "Saber quando p ∧ q é verdadeira",
      reading: [
        {p: "A <b>conjunção</b> (e) só é verdadeira quando <b>as duas</b> partes são verdadeiras."},
        {ex: "V ∧ V = V", pt: "a única que dá verdadeiro"},
        {ex: "V ∧ F = F", pt: ""},
        {ex: "F ∧ V = F", pt: ""},
        {ex: "F ∧ F = F", pt: ""},
        {tip: "💡 Pense numa promessa: “Vou estudar <b>e</b> treinar”. Se faltar qualquer uma das duas, a promessa foi quebrada."}
      ],
      questions: [
        {type: "choice", kind: "Julgue", situation: "p: “2 é par” (V) · q: “3 é par” (F)", prompt: "Qual o valor de p ∧ q?",
         options: ["F", "V"], answer: 0, explain: "V ∧ F = <b>F</b>. Basta uma ser falsa."},
        {type: "choice", kind: "Interprete", prompt: "Para “Ana passou e Bia passou” ser verdadeira, é preciso que:",
         options: ["Ana e Bia tenham passado", "Pelo menos uma tenha passado", "Nenhuma tenha passado"], answer: 0,
         explain: "Na conjunção, <b>as duas</b> partes precisam ser verdadeiras."},
        {type: "choice", kind: "Certo ou errado", prompt: "Se p ∧ q é falsa, então p e q são necessariamente falsas.",
         options: CE, answer: 1, explain: "Basta <b>uma</b> ser falsa para a conjunção ser falsa."}
      ]
    },
    {
      id: "t2p2", title: "Disjunções (ou)", pt: "p ∨ q e p ⊻ q", emoji: "∨",
      goal: "Julgar o “ou” e o “ou…, ou…”",
      reading: [
        {p: "A <b>disjunção inclusiva</b> (∨) só é falsa quando <b>as duas</b> são falsas."},
        {ex: "V ∨ F = V", pt: "basta uma verdadeira"},
        {ex: "F ∨ F = F", pt: "a única que dá falso"},
        {p: "A <b>disjunção exclusiva</b> (⊻) é verdadeira quando os valores são <b>diferentes</b>."},
        {ex: "V ⊻ F = V", pt: "valores diferentes: verdadeiro"},
        {ex: "V ⊻ V = F", pt: "as duas juntas não pode"},
        {tip: "💡 “Ou…, ou…” com vírgula costuma ser a exclusiva. Só um “ou” é a inclusiva."}
      ],
      questions: [
        {type: "choice", kind: "Julgue", situation: "p (V) · q (V)", prompt: "Qual o valor de p ∨ q?",
         options: ["V", "F"], answer: 0, explain: "Na inclusiva, basta uma verdadeira: V ∨ V = <b>V</b>."},
        {type: "choice", kind: "Julgue", situation: "p (V) · q (V)", prompt: "Qual o valor de p ⊻ q?",
         options: ["F", "V"], answer: 0, explain: "Na exclusiva, as duas verdadeiras dá <b>F</b>."},
        {type: "choice", kind: "Certo ou errado", prompt: "Para que “Carlos é policial ou bombeiro” seja falsa, Carlos não pode ser nenhum dos dois.",
         options: CE, answer: 0, explain: "A disjunção inclusiva só é falsa quando <b>as duas</b> partes são falsas."}
      ]
    },
    {
      id: "t2p3", title: "Condicional", pt: "p → q", emoji: "→",
      goal: "Lembrar quando o “se…, então…” é falso",
      reading: [
        {p: "O <b>condicional</b> p → q só é falso em um caso: <b>V → F</b> (antecedente verdadeiro e consequente falso)."},
        {ex: "V → V = V", pt: ""},
        {ex: "V → F = F", pt: "o único caso falso"},
        {ex: "F → V = V", pt: ""},
        {ex: "F → F = V", pt: ""},
        {tip: "💡 Macete: <b>“Vera Fischer é falsa”</b> (V → F = F). Se o antecedente é falso, o condicional é sempre verdadeiro."}
      ],
      questions: [
        {type: "choice", kind: "Julgue", situation: "p (V) · q (F)", prompt: "Qual o valor de p → q?",
         options: ["F", "V"], answer: 0, explain: "V → F é o único caso <b>falso</b>."},
        {type: "choice", kind: "Julgue", situation: "p (F) · q (F)", prompt: "Qual o valor de p → q?",
         options: ["V", "F"], answer: 0, explain: "Antecedente falso: o condicional é sempre <b>V</b>."},
        {type: "choice", kind: "Certo ou errado", prompt: "“Se 2 + 2 = 5, então a Lua é feita de queijo” é uma proposição verdadeira.",
         options: CE, answer: 0, explain: "O antecedente (2 + 2 = 5) é falso. F → F = <b>V</b>."}
      ]
    },
    {
      id: "t2p4", title: "Bicondicional", pt: "p ↔ q", emoji: "↔",
      goal: "Julgar o “se e somente se”",
      reading: [
        {p: "O <b>bicondicional</b> p ↔ q é verdadeiro quando os dois têm o <b>mesmo valor</b>."},
        {ex: "V ↔ V = V", pt: ""},
        {ex: "V ↔ F = F", pt: ""},
        {ex: "F ↔ V = F", pt: ""},
        {ex: "F ↔ F = V", pt: "iguais: verdadeiro"},
        {tip: "💡 O ↔ é o oposto do ⊻: valores iguais dão V no ↔ e F no ⊻."}
      ],
      questions: [
        {type: "choice", kind: "Julgue", situation: "p (F) · q (F)", prompt: "Qual o valor de p ↔ q?",
         options: ["V", "F"], answer: 0, explain: "Valores iguais: <b>V</b>."},
        {type: "match", kind: "Associe", prompt: "Ligue cada regra ao conectivo",
         pairs: [["Só é V se as duas forem V", "∧"], ["Só é F se as duas forem F", "∨"], ["Só é F em V → F", "→"], ["É V com valores iguais", "↔"]],
         explain: "Esse resumo resolve a maioria das questões de julgamento."},
        {type: "choice", kind: "Certo ou errado", prompt: "Se p é V e q é F, então p ↔ q e p ⊻ q têm o mesmo valor lógico.",
         options: CE, answer: 1, explain: "p ↔ q = <b>F</b> (valores diferentes) e p ⊻ q = <b>V</b>. São opostos."}
      ]
    },
    {
      id: "t2p5", title: "Julgando compostas", pt: "Vários conectivos juntos", emoji: "🧮",
      goal: "Achar o valor de uma proposição com vários conectivos",
      reading: [
        {p: "Troque cada letra pelo valor e resolva por partes: primeiro os <b>parênteses</b>, depois a <b>negação</b>, por último o conectivo principal."},
        {ex: "p = V · q = F · r = V", pt: "valores dados"},
        {ex: "(p ∧ q) → r", pt: "(V ∧ F) → V  =  F → V  =  V"},
        {ex: "~p ∨ q", pt: "F ∨ F  =  F"},
        {tip: "💡 Se a questão diz que uma condicional é <b>falsa</b>, você já sabe tudo: o antecedente é V e o consequente é F."}
      ],
      questions: [
        {type: "choice", kind: "Julgue", situation: "p = V · q = F · r = F", prompt: "Qual o valor de (p ∨ q) → r?",
         options: ["F", "V"], answer: 0, explain: "(V ∨ F) = V. Depois V → F = <b>F</b>."},
        {type: "choice", kind: "Julgue", situation: "p = F · q = V", prompt: "Qual o valor de ~p ∧ q?",
         options: ["V", "F"], answer: 0, explain: "~p = V. Depois V ∧ V = <b>V</b>."},
        {type: "choice", kind: "Certo ou errado", prompt: "Sabendo que “Se Ana viaja, então Bia fica” é falsa, conclui-se que Bia não ficou.",
         options: CE, answer: 0, explain: "O condicional só é falso em V → F: Ana viajou (V) e Bia <b>não</b> ficou (F)."}
      ]
    }
  ]
};
