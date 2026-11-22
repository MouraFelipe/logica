/* =========================================================
   MARCA E FALAS (sem mascote)
   O app usa um único tema. As falas aparecem em balões: [frase, complemento].
   ========================================================= */
const MASCOTS = {
  logi: {
    name: "Lógica", speciesPt: "", colorPt: "", personality: "",
    pal: {body:"#9DB4CC", accent:"#2F5D8C", accentD:"#22466B", soft:"#E6EEF6"},
    msgs: {
      welcome:  [["Bora treinar lógica?","Uma fase por vez, sem pressa."],["Bom te ver de novo!","Hoje é dia de ganhar pontos na prova."],["Cada questão conta.","Quem treina aqui, acerta lá."]],
      happy:    [["Certo!","Raciocínio afiado."],["Isso mesmo!","A banca não te pegou."],["Mandou bem!","Segue assim."]],
      sad:      [["Quase!","Leia a explicação com calma."],["Faz parte.","Errar aqui é melhor que errar na prova."],["Opa!","Essa vai para a revisão."]],
      oops:     [["Faltou pouco!","Errar aqui é melhor que errar na prova."],["Tudo bem.","Leia as explicações e tente de novo."]],
      excited:  [["Fase concluída!","Mais um passo rumo à aprovação."],["Muito bem!","Esse conteúdo cai muito."],["Show!","Siga para a próxima."]],
      celebrate:[["Tópico completo!","Agora é revisar e fazer questões de prova."],["Que evolução!","Esse tópico já é seu."]],
      surprise: [["Pegadinha à vista!","Leia tudo antes de responder."]],
      gift:     [["Conquista liberada!","Continue assim."]],
      streak:   [["Dia {n}!","Constância é o que aprova."],["{n} dias seguidos!","Você está criando o hábito."],["{n} dias!","Pouco por dia vale muito."]],
      encourage:[["Continue assim!","Constância vence a prova."],["Você está evoluindo.","Cada acerto é um ponto a mais."],["Respire e leia com calma.","A pressa é inimiga do raciocínio."],["Mais 5 feitas!","Bora para as próximas."]]
    }
  }
};
const _bags = {};
function mascotLine(id, mood){
  const src = MASCOTS.logi.msgs, key = mood, list = src[mood] || src.encourage;
  if (!_bags[key] || !_bags[key].length){ _bags[key] = list.map((_,i)=>i).sort(()=>Math.random()-.5); }
  return list[_bags[key].pop()];
}
function applyTheme(){
  const p = MASCOTS.logi.pal, r = document.documentElement.style;
  r.setProperty("--accent", p.accent); r.setProperty("--accent-d", p.accentD);
  r.setProperty("--soft", p.soft); r.setProperty("--mbody", p.body);
}
/* ícone do app (usado só no menu "Perfil") */
function mascotSVG(){ return `<svg viewBox="0 0 40 40" class="msvg"><rect x="3" y="3" width="34" height="34" rx="10" fill="var(--accent)"/><text x="20" y="26" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" font-family="system-ui,sans-serif">p→q</text></svg>`; }
const PRIZES = {};
const CHALLENGES = [];
