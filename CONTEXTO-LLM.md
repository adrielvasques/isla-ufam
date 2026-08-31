# Contexto de continuidade

Atualizado em: 2026-08-31

## Objetivo editorial

- Apresentação HTML do ISLA: **Língua, território e futuro**.
- Tom: institucional, claro e visual; imagens reais da apresentação-base devem liderar as telas.

## Estado da narrativa

- Fechado: capa com título, padrão lateral ISLA, badges de Samuel Benzecry e Adriel Santos e links para LinkedIn.
- Fechado: slides 9–11 foram remontados como telas de imagem protagonista: campos fortes alternados da paleta ISLA, imagem central ampla, um título e uma legenda sempre visível.
- Fechado: o Linklado entra em uma tela magenta/violeta com nome e símbolo em grande escala; as páginas 19–23 são telas de imagem centralizada, sem títulos ou legendas visíveis.
- Fechado: depois do mapa de território entra UMA tela do aplicativo, com as três capturas (ativação, caracteres especiais, teclado em uso) lado a lado. Três slides separados para o mesmo assunto era desperdício de tela.
- Fechado: as páginas 24 a 30 entraram como quatro telas. A colagem das páginas 24, 25 e 26 virou uma tela só; as páginas 27 e 30 ganharam o mesmo tratamento; as páginas 28 e 29 foram fundidas em uma tela nova. O deck está com 15 telas.
- Fechado: o deck ganhou uma tela institucional do próprio ISLA ao fim do bloco institucional, antes dos projetos e do Centelha. É a contrapartida do slide de abertura do Linklado, mas na identidade do instituto: fundo `--mata`, título "ISLA" grande em Swiss 721, nome por extenso em `--barro`, a frase-missão já usada na capa ("Pesquisa, tecnologia e sustentabilidade linguística na Amazônia.") e o selo circular oficial do ISLA (aro com o nome do instituto + marca do chevron no centro) grande à direita, sem moldura.
- Fechado: depois do vídeo da Vitória-Régia há uma tela Centelha 3 Amazonas (Edital FAPEAM nº 016/2025), com marca oficial, investimento previsto de R$ 5,9 milhões, até 47 projetos e apoio de até R$ 80 mil em subvenção + até R$ 50 mil em bolsas de agência de fomento por projeto.
- Fechado: após o Portal ISLA Amazônia, entra uma abertura própria da Vitória-Régia, com ilustração de folha e flor, título e missão. Em seguida, pergunta de transição tipográfica, vídeo completo em 16:9, resumo Centelha, fases e critérios condensados e arco completo da chamada à contratação (318 dias, 10,5 meses).
- Fechado: o encerramento do deck tem três telas, nesta ordem: contatos de Linklado e ISLA em uma composição dividida violeta e verde, agradecimento multilíngue inspirado na penúltima página do PDF-base e Q&A tipográfico em verde, laranja e névoa. No painel verde de contatos, usar a versão clara, secundária e centralizada do logotipo ISLA (`ISLA_Logo-Secundária-22.svg`) em escala ampla, nunca a marca verde sobre verde ou símbolo decorativo no fundo. O agradecimento usa somente as cinco frases, com respiro vertical amplo e sem ícone ou padrão decorativo. O Q&A é somente tipografia, com `Q`, `&` e `A` separados por respiro, sem símbolo decorativo. Os contatos preservados do PDF-base são `@linklado`, `linklado.com`, `@islaamazonia` e `islaamazonia.org`.
- Em aberto: prosseguir a narrativa somente a partir de uma indicação do usuário sobre quais páginas ou ideias vêm depois.

## Decisões criativas

- A referência dominante para os slides de conteúdo é `referencias/aplicacoes/ISLA - UFAM.pptx.pdf`: fundo forte, imagem central destacada e pouca informação textual.
- Paleta: verde `#043831` no mapa, laranja `#c56a19` nos sistemas de escrita e verde `#387b5c` na amostra manuscrita; bordas alternam laranja e verde-escuro.
- Não recolocar cards, textos interpretativos, linhas decorativas, paginação ou controles visíveis nos slides 9–11.
- Legendas têm precedência sobre o aumento de imagem: manter uma faixa de respiro visível abaixo de cada figura.
- Legendas devem ser identificações curtas da imagem; no slide 11, usar apenas “Amostra de escrita cursiva”.
- A borda colorida precisa acompanhar o conteúdo renderizado da figura, sem caixa larga, fundo ou halo branco adicional via CSS.
- Animação é apenas fade e só roda em tela cheia; fora dela a tela abre totalmente composta.
- O bloco Linklado usa identidade própria: magenta/violeta, roxo-escuro e verde-lima. O símbolo circular recuperado da página 18 permanece em grande escala; não usar o rótulo “ISLA apresenta”.
- Os nomes “Juliano Portela & Samuel Minev-Benzecry” são uma linha de crédito visível e ampliada na transição do Linklado.
- A abertura do Linklado traz apenas os símbolos circulares de App Store e Google Play como sinalizadores visuais; não há URLs associadas.
- Os símbolos das lojas são as marcas oficiais (maçã da Apple e triângulo do Google Play), monocromáticas em branco sobre o disco roxo-escuro; não redesenhar à mão. Tamanhos diferentes por compensação óptica: maçã a 52% com `translateY(-3%)`, Play a 47% com `translateX(3%)`.
- Nas páginas 19–23, as imagens ficam centralizadas e ocupam a maior parte da área útil, sem título ou legenda; a moldura é roxo-escuro, diretamente no limite da imagem.
- Nas páginas 19–23, aplicar uma compensação vertical óptica de `-6.5%`: o centro geométrico da figura fica levemente abaixo do seu centro percebido.
- A tela do aplicativo NÃO usa o magenta do deck: o magenta da interface do Linklado brigava com o `--linklado-violeta` do fundo. Elas usam o laranja `--barro` da paleta ISLA, com moldura de celular em verde-escuro `--mata`.
- O formato é de pitch de aplicativo, não de imagem protagonista: título grande em Swiss 721 centralizado, uma linha de apoio abaixo dele e os três celulares em fila, cada um com legenda de duas linhas (rótulo em verde-escuro e um benefício curto em branco). Sem rótulo do tipo “O aplicativo” acima do título.
- A ativação do Linklado tem quatro passos, não dois.
- No PDF, as páginas 24, 25 e 26 são a mesma colagem construída em três cliques, uma foto por vez. No deck isso virou UMA tela e a construção é emulada pelos atrasos de entrada (150ms, 950ms e 1750ms), na ordem original das fotos. As posições e a sobreposição são as medidas da página 26: a foto da comunidade ao fundo, a da leitura do Omawa por cima de todas e a Witoto no meio.
- Essa construção só roda em tela cheia, como todo o resto da animação do deck. Fora dela a colagem abre montada.
- As páginas 27 e 30 usam o mesmo tratamento das 24-26: posicionamento absoluto com as coordenadas medidas na própria página (detecção de bounding box contra o fundo magenta, não estimativa a olho) e entrada escalonada da esquerda para a direita, 150ms / 950ms / 1750ms para três itens e 150ms / 950ms para dois.
- As páginas 28 e 29 foram fundidas em uma tela só, e das quatro fotos ficaram três: a do notebook com o cartaz do Projeto Linklados saiu a pedido do usuário. O arquivo segue no acervo, só não é usado.
- A composição dessa tela fundida é nova, não vem do PDF: a caixa de livros ocupa a esquerda em altura cheia e as duas fotos de campo dividem a direita empilhadas, com a mesma largura entre si. Entrada em sequência (150ms / 950ms / 1750ms).
- Nenhuma das três é cortada, e por isso sobra magenta nas laterais, cerca de 14% de cada lado contra 5% em cima e embaixo. É o limite geométrico: duas fotos deitadas empilhadas ao lado de uma em pé formam um conjunto de proporção ~1,4, mais estreito que o palco 16:9. Só dá para preencher mais recortando as imagens.
- As capturas entram sem o cromo do sistema: barra de status (68px do topo) e barra de navegação do Android (a partir de y=1506) são recortadas.

- Ao explorar as páginas 1 a 8 do PDF-base para essa decisão, ficou claro que elas contam uma transição "ontem → hoje → amanhã" (páginas 2-7, animação de entrada/saída de texto letra a letra, capturada como frames no PDF, mesmo mecanismo das páginas 24-26) e trazem um depoimento de uma colaboradora indígena (página 8, Rosilda Tukano, São Gabriel da Cachoeira). Nenhuma dessas páginas foi adaptada ainda; ficam para quando o usuário indicar.
- A tela Woolaroo segue a gramática editorial de parceria: uma grade compacta e centralizada, com conteúdo textual ampliado à esquerda e o vídeo em retrato como objeto protagonista à direita. O vídeo fica dentro de uma carcaça de celular escura, com aro laranja fino e cantos arredondados — não como uma mídia solta apenas contornada. Sem legenda, o celular usa toda a altura útil do slide.
- O vídeo Woolaroo roda automaticamente, sem os controles nativos: a barra de reprodução preta não faz parte do conteúdo e compete com o enquadramento de celular.
- O arquivo do vídeo Woolaroo também traz faixas pretas laterais de 24 px. A carcaça usa a proporção da área útil (672 × 1280, ou 21/40) e `object-fit: cover` para recortá-las sem editar o asset.
- O acesso ao Woolaroo é um link textual sublinhado com a URL legível, sem seta, botão, card ou ícone de “ver projeto”.
- A tela do Portal ISLA Amazônia não usa composição lateral: o título é “Database ISLA Amazônia”, o WebView é o elemento dominante e o CKAN aparece apenas como crédito técnico pequeno (“Powered by CKAN”) no rodapé. Não usar subtítulo, URL, legenda ou outro elemento que reduza a área do navegador. A marca é o arquivo oficial do repositório CKAN, obtido de `https://raw.githubusercontent.com/ckan/ckan/master/ckan/public/base/images/ckan-logo.png`.
- A tela Centelha usa fundo `--nevoa`, sem símbolo do ISLA e sem menção a ODS. O topo é uma única grade alinhada: marca Centelha grande à esquerda e título/subtítulo à direita, ocupando a mesma faixa vertical. Abaixo, uma única faixa verde centralizada reúne os números, que são a hierarquia principal; o bloco de impacto socioambiental ocupa o espaço restante, centralizado. Não exibir referência ao edital no palco. O teto de R$ 130 mil é explicado diretamente: até R$ 80 mil de subvenção + até R$ 50 mil em bolsas de agência de fomento — sem nota de rodapé.
- A abertura da Vitória-Régia é uma tela de identidade, não um card institucional: fundo `--barro`, título em Swiss 721 com “Vitória-” em verde e “Régia” em `--nevoa`, subtítulo verde e a ilustração de folha e flor em escala ampla, ancorada no canto inferior direito. Não usar rótulo “Uma iniciativa”. A pergunta tipográfica vem imediatamente depois dessa capa, em fundo claro e com destaque laranja em “Vitória-Régia”; o vídeo integral vem logo em seguida, ocupando o palco sem badge, identificação sobreposta ou outro elemento gráfico. O resumo Centelha, com valores de investimento e fomento, vem logo após o vídeo. Em seguida vêm os critérios e, por último, a duração. Essas telas usam dados do Edital nº 016/2025 (3ª retificação, `referencias/AM - 3ª Retificação do Edital - 19.06.2026`). A tela de duração cobre o arco completo da chamada à contratação: 30/10/2025 a 13/09/2026, total de 318 dias, cerca de 10,5 meses; inclui resultado final, prazo documental e fim da contratação. Não usar rótulos no topo dessa tela. O título fica deliberadamente em duas linhas e a régua usa quatro colunas iguais, com marcadores, datas e descrições centralizados. A tela de critérios usa fundo laranja, título único “Critérios de avaliação em duas fases.” sem kicker e apresenta os critérios em duas etapas numeradas, fechadas por uma faixa verde com a fórmula cumulativa confirmada no edital: `Nota final = (Nota Fase 1 + Nota Fase 2) / 2`. Paleta institucional apenas, sem violeta do Linklado.

## Assets e implementação

- `referencias/assets/Slides/09-11/`: imagens extraídas e consolidadas do PDF para os slides 9–11.
- `referencias/assets/Slides/19-23/`: imagens extraídas e consolidadas do PDF para as páginas 19–23; `referencias/assets/Linklado/simbolo-linklado-redondo.png` contém o símbolo circular recuperado da página 18.
- `referencias/assets/Linklado/lojas/`: SVGs oficiais das marcas App Store e Google Play (fonte dos traçados inline em `index.html`).
- `referencias/assets/Selo/isla-selo-laranja.svg`: cópia limpa (sem espaço no caminho) do selo oficial do ISLA, original em `referencias/assets/Elementos de apoio/Vetorizados/ISLA_Selo-44.svg`. O acervo também tem a versão branca (`ISLA_Selo-45.svg`) e outros elementos de apoio (ícones de Confiança, Responsabilidade Cultural, Atemporalidade) ainda não usados.
- `referencias/assets/Projetos/ckan-logo-oficial.png`: marca branca oficial do CKAN, usada na tela do Portal ISLA Amazônia.
- `referencias/assets/Projetos/centelha-amazonas-oficial.png`: marca oficial do Centelha Amazonas, obtida em `https://am.programacentelha.com.br/assets/inicio/Logotipos_Centelha_Estaduais-AM-94183b836de2b997e6815c1a33831ac8.png`.
- `referencias/assets/Projetos/vitoria-regia.mp4`: reportagem PIX News sobre a Vitória-Régia, comprimida a partir de `referencias/assets/Texto do seu parágrafo.mp4`; mantém 1280×720, 60 fps e 181 s em H.264/AAC, com 29 MB (antes, 71 MB).
- `referencias/assets/Projetos/vitoria-regia-poster.jpg`: quadro real extraído aos 12 s do vídeo, usado como pôster antes da reprodução.
- `referencias/assets/Projetos/vitoria-regia-simbolo.png`: ilustração de folha e flor trazida de `/home/adriel/Documentos/meus_repos/vitoria_regia/frontend/src/assets/vitoria-regia-com-flor.png`, usada na abertura da Vitória-Régia.
- `referencias/AM - 3ª Retificação do Edital - 19.06.2026`: PDF-fonte dos dados das telas 19 e 20.
- `referencias/assets/Slides/24-30/`: as 12 imagens das páginas 24 a 30, extraídas com `pdfimages` do PDF-base. Cada imagem no PDF vinha com um smask que era só o arredondamento de canto; foi descartado, porque o CSS já arredonda e desenha a borda.
- `referencias/assets/Linklado/app/`: capturas do aplicativo já recortadas, vindas de `referencias/telas_linklado/`. Das seis imagens originais só três são únicas — as outras são repetições da mesma tela.
- `index.html`: conteúdo e estrutura dos quatro slides.
- `src/style.css`: composição, fontes e animações.
- `src/main.js`: navegação por teclado (←/→, PageUp/PageDown, Home/End) e contador automático no formato `01 / 27`; o contador fica discreto no canto inferior direito, adapta a cor ao fundo e não aparece nas capas do ISLA, Linklado e Vitória-Régia.
- `vite.config.js`: usa `base: './'` para que os assets gerados sejam relativos e funcionem no GitHub Pages.

## Restrições de execução

- O projeto fica em `/home/adriel/Documentos/repos/isla-ufam`; `referencias/` é a biblioteca de fontes e assets.
- Validado com `npm run build` em 2026-08-30. Tela cheia e tipografia ainda dependem da conferência do usuário no ambiente de apresentação.
- Dados do Centelha confirmados em 2026-08-31 na página oficial estadual `https://programacentelha.com.br/am/` e no Edital FAPEAM nº 016/2025. O site registra resultado final da Fase 2; o cronograma da terceira retificação prevê contratação entre 15 de agosto e 13 de setembro de 2026.
- O projeto está publicado em `https://adrielvasques.github.io/isla-ufam/` via workflow `.github/workflows/deploy-pages.yml`; a configuração `base: './'` é obrigatória para não gerar referências a `/assets` fora do subdiretório do Pages.

## Próxima ação

Esperar a próxima orientação do usuário. Do PDF-base ainda não foram adaptadas as páginas 1 a 8, 12 a 17 e 31 a 34.
