# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o projeto

Apresentação (deck) em HTML/CSS/JS puro servida por Vite: **"Língua, território e futuro — ISLA"**. Não há framework de slides, nem testes, nem lint. Todo o conteúdo é em português e destinado a projeção ao vivo.

## Comandos

```bash
npm install
npm run dev      # servidor de desenvolvimento Vite
npm run build    # gera dist/
npm run preview  # serve dist/ para conferência
```

`npm run build` é a única verificação automatizada disponível — rode-a depois de mexer em `index.html`, `src/` ou nos caminhos de assets, porque erros de caminho só aparecem na resolução do Vite. `vite.config.js` configura `base: './'`, gerando caminhos relativos compatíveis com GitHub Pages e hospedagem em subdiretórios.

## Leia antes de editar

`CONTEXTO-LLM.md` é o registro vivo de decisões editoriais e criativas (paleta por slide, o que não recolocar, regras de legenda, offsets ópticos, estado da narrativa). Ele tem precedência sobre inferências feitas a partir do código, e deve ser atualizado quando uma decisão nova for tomada ou uma antiga for revista.

## Arquitetura

Três arquivos carregam o projeto inteiro:

- **`index.html`** — todo o markup dos slides. Cada `<section class="slide">` dentro de `<main class="deck">` é uma tela; **a ordem no DOM é a ordem da apresentação**. O atributo `data-slide` é apenas rótulo; a navegação usa o índice do `querySelectorAll`. O hash da URL é 1-based (`#2` abre a segunda seção).
- **`src/main.js`** — navegação por teclado (←/→/Space, PageUp/PageDown, Home/End, com wrap circular), sem nenhum controle visível. Também injeta o logo via `import` de SVG e faz o *gate* de exibição: o deck só ganha `.is-ready` depois de fontes + imagens carregarem, com fallback de 1400 ms.
- **`src/style.css`** — palco, tipografia e animações.

### Duas convenções que quebram silenciosamente se ignoradas

1. **Animação só existe em tela cheia.** `syncFullscreenState()` combina três heurísticas (`document.fullscreenElement`, `display-mode: fullscreen` e comparação do viewport com `window.screen`) para alternar `.is-fullscreen` no deck. As regras em `style.css` usam esse estado: fora de tela cheia, todo `[data-animate]` abre com `opacity: 1` e `animation: none`; em tela cheia, os fades rodam com delays escalonados. Ao adicionar um elemento animado, marque-o com `data-animate` e declare o `animation-delay` correspondente junto dos demais no fim do CSS.

2. **Caminhos de assets têm duas formas.** Em `index.html` as imagens usam caminho absoluto a partir da raiz (`/referencias/assets/...`); em `src/style.css` e `src/main.js` usam caminho relativo (`../referencias/assets/...`). Ambos são resolvidos e hasheados pelo Vite no build — misturar as formas quebra a resolução.

### Palco e escala

O deck é um palco de proporção fixa 16:9 (`width: min(100vw, 177.778vh)`), centralizado, com os slides em `position: absolute; inset: 0` e troca por opacidade. Consequência prática: **nenhuma medida de layout deve ser em pixels fixos**. Use porcentagens e `clamp(min, vw, max)`, como todo o CSS existente faz, para que a composição sobreviva a qualquer resolução de projetor.

Paleta e fontes vêm de variáveis em `:root` (`--mata`, `--mata-clara`, `--barro`, `--nevoa`, `--folha` para o ISLA; `--linklado-violeta`, `--linklado-escuro`, `--linklado-lima` para o bloco Linklado). As `@font-face` (Swiss 721, Heron Sans) apontam diretamente para os arquivos em `referencias/assets/Fonte/`.

### Estruturas de slide reutilizáveis

- `.cover-slide` — capa com logo, título, subtítulo, cards de apresentadores e `.edge-pattern` (faixa lateral com máscara CSS sobre o pattern do ISLA).
- `.image-focus-slide` — grade `título / figura` sobre fundo chapado da paleta, com borda colorida rente à imagem renderizada e legenda curta. Base dos slides 9–11.
- Telas do Linklado (`.linklado-*`) — herdam `.image-focus-slide` mas suprimem título e legenda, ampliam a figura e aplicam `translateY(-6.5%)` como compensação óptica deliberada.

## A pasta `referencias/`

É um acervo de origem, **não código do projeto**: o PDF da apresentação-base (`referencias/aplicacoes/ISLA - UFAM.pptx.pdf`), o brandbook, fontes, logos, pattern e as imagens já extraídas em `referencias/assets/Slides/09-11/` e `referencias/assets/Slides/19-23/`. Slides novos devem partir de imagens desse acervo, não de arte inventada.

## Notas

- `three` está declarado como dependência mas não é usado em nenhum lugar do código.
- O diretório não é um repositório git — não há histórico para consultar.
