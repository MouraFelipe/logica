# Lógica

**Raciocínio lógico para concursos**, em fases curtas, com questões no estilo das bancas (múltipla escolha e Certo/Errado).

👉 **Treinar:** https://mourafelipe.github.io/logica/

<img src="qrcode.png" width="240" alt="QR code do Lógica">

## App no celular
No site, o Lógica pode ser instalado na tela inicial e abre como app, até sem internet (`manifest.webmanifest`, `sw.js` e ícones `icon-*.png`). No Perfil, o card "Lógica no celular" mostra o botão ou o passo a passo para instalar.

## Como funciona
- **Tópicos e fases:** cada tópico tem de 4 a 5 fases; cada fase tem um objetivo, um resumo com macetes de prova e 3 questões.
- **Questões:** múltipla escolha, Certo/Errado (estilo Cebraspe) e associar.
- **Revisão:** o que você erra vai para a Revisão, para treinar depois.
- **Sequência de dias (🔥), XP e conquistas.** A cada 5 questões há uma pausa com incentivo ou dica de estudo.
- **Progresso:** fica salvo no navegador.

## Conteúdo atual
- Tópico 1 — Lógica Proposicional: proposição, conectivos, simples e composta, tabela-verdade. 4 fases, 12 questões.
- Tópico 2 — Julgamento de Proposições: ∧, ∨, ⊻, →, ↔ e proposições compostas. 5 fases, 15 questões.
- Tópico 3 — Negação de Proposições: negação simples, De Morgan, condicional, ↔ e ⊻, todo/algum/nenhum. 5 fases, 15 questões.
- Tópicos 4 a 11 aparecem como "em breve": Equivalência, Estruturas Lógicas, Tautologia/Contradição/Contingência, Argumento Válido e Inválido, Quantificadores, Diagramas Lógicos, Métodos Complementares e Lógica de Associação.

## Editar
- Conteúdo: `src/topic1.js`, `src/topic2.js` e `src/topic3.js` (novos tópicos seguem o mesmo formato e entram em `COURSES`, em `src/app.html`, e em `src/build.py`)
- Falas, cores e ícone: `src/brand.js`
- App: `src/app.html`
- Gerar o `index.html`: `python3 src/build.py`
- Teste dos tópicos (joga todas as fases): `python tests/test_topicos.py` (precisa do Playwright)
