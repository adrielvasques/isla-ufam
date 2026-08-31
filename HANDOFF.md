# Handoff — 4 telas do edital Centelha AM

Documento de passagem de bastão. Trabalho em andamento, interrompido antes da implementação.
Leia junto com `CLAUDE.md` (arquitetura) e `CONTEXTO-LLM.md` (decisões já fechadas).

---

## O que o usuário pediu

Quatro telas novas, **no final da pilha** (data-slide 18, 19, 20, 21), com dados do edital:

1. **Quanto tempo durou o processo**, da divulgação até o prazo do resultado.
2. **Quantas fases e os critérios de cada fase.**
3. **O vídeo da Vitória-Régia** (`referencias/assets/Texto do seu parágrafo.mp4`) em destaque.
4. **Uma frase**: "mas afinal, o que é a Vitória-Régia?"

Instrução explícita: *"siga as diretrizes de design como fontes e hierarquia atuais"*.

---

## Estado: o que já foi feito

- Edital localizado, lido e todos os dados extraídos (estão abaixo, não precisa reabrir o PDF).
- Vídeo localizado e inspecionado.
- **Nada foi escrito ainda** em `index.html` nem em `src/style.css` para essas quatro telas.
- A compressão do vídeo foi iniciada e **interrompida pelo usuário**. Ver "Pendências".

---

## Dados do edital (já extraídos, prontos para usar)

Arquivo: `referencias/AM - 3ª Retificação do Edital - 19.06.2026`
(é um PDF de 39 páginas, sem extensão no nome; `pdftotext -layout` funciona nele)

**Identificação:** Resolução n.º 037/2025, Edital n.º 016/2025.
Programa Centelha AM, 3ª edição. FAPEAM / SEDECTI-AM / MCTI / FINEP / CNPq / CONFAP / Fundação CERTI.

### Cronograma completo (item 11 do edital)

| Atividade | Início | Término |
|---|---|---|
| Lançamento da chamada pública | 30/10/2025 | |
| Fase 1, submissão das ideias inovadoras | 31/10/2025 | 15/01/2026 |
| Seleção e avaliação, Fase 1 | 16/01/2026 | 02/03/2026 |
| Resultado preliminar, Fase 1 | 03/03/2026 | |
| Recursos administrativos, Fase 1 | 04/03/2026 | 13/03/2026 |
| Resultado final, Fase 1 | 13/04/2026 | |
| Fase 2, submissão dos projetos de fomento | 14/04/2026 | 05/05/2026 |
| Seleção e avaliação, Fase 2 | 06/05/2026 | 08/06/2026 |
| Resultado preliminar, Fase 2 | 09/06/2026 | |
| Recursos administrativos, Fase 2 | 10/06/2026 | 19/06/2026 |
| **Resultado final e publicação no D.O.E.** | **15/07/2026** | |
| Constituição da empresa e documentos | 16/07/2026 | 14/08/2026 |
| Contratação dos projetos | 15/08/2026 | 13/09/2026 |
| Chamada de suplentes | 14/09/2026 | 14/10/2026 |
| Acompanhamento | até 12 meses após a contratação | |

**Números para a tela 1 (já calculados):**
- Lançamento (30/10/2025) até resultado final (15/07/2026) = **258 dias**, cerca de **8,5 meses**.
- Lançamento até o resultado final da Fase 1 (13/04/2026) = 165 dias.

### Fases (item 4.2)

São **duas fases distintas e eliminatórias**:
- **Fase 1: Ideias Inovadoras**
- **Fase 2: Projetos de Fomento**

Da Fase 1 passam **até 200 ideias** para a Fase 2, uma por proponente.
A nota da Fase 1 compõe a nota final da Fase 2.

### Critérios da Fase 1 (item 10.1), cada um de 1 a 5

| Critério | Aspecto avaliado |
|---|---|
| Solução (S) | Solução proposta e grau de inovação |
| Mercado (M) | Oportunidade de mercado |
| Impacto socioambiental (I) | Potencial de impacto socioambiental e benefícios gerados |
| Equipe executora (E) | Domínio tecnológico e capacidade de execução da equipe |

Fórmula: **NOTA FASE 1 = (2S + M + E + I) / 5** (Solução tem peso 2)

### Critérios da Fase 2 (item 10.2), cada sub-aspecto de 1 a 5

| Critério | Sub-aspectos |
|---|---|
| Solução (S) | Evidências do estágio de desenvolvimento (EDD), Potencial de desenvolvimento tecnológico (PDT) |
| Impacto socioambiental (I) | Potencial de impacto positivo (PI), Externalidades socioambientais (EX) |
| Mercado (M) | Fornecimento de valor para o mercado (FV), Potencial de escala (PE) |
| Consistência da proposta (CP) | Modelo de negócio (MN), Cronograma físico (CF), Orçamento (O) |
| Equipe executora (E) | Domínio tecnológico (DT), Capacidade de execução (CE) |

Fórmula: **NOTA FASE 2 = (S + M + E + 2CP + I) / 6** (Consistência tem peso 2)

Sub-fórmulas: S = (EED + 2·PDT)/3 · I = (PI + EX)/2 · M = (FV + PE)/2 · CP = (MN + 2·CF + 2·O)/5 · E = (DT + CE)/2

**Regra eliminatória:** proposta com nota menor que 2 em Consistência da Proposta (CP) é eliminada.

### Recursos financeiros (item 2), caso queira usar

- R$ 3.760.000,00 no total (R$ 3.008.000 do FNDCT/FINEP + R$ 752.000 da FAPEAM).
- Até **47 projetos**, de até **R$ 80.000** cada.
- Mais até R$ 50.000 por projeto em bolsas do CNPq.

---

## O vídeo da Vitória-Régia

Origem: `referencias/assets/Texto do seu parágrafo.mp4`

- 1280x720 (paisagem 16:9, mesma proporção do palco), 181 segundos, **74 MB**, H.264 + AAC.
- É uma reportagem de TV (bancada "PIX News"), aparece a deputada Joenia.

**Precisa comprimir antes de entrar no deck.** 74 MB é pesado demais para o bundle.
O comando abaixo estava prestes a rodar quando o usuário interrompeu, então **confirme com ele antes de executar**:

```bash
ffmpeg -y -i "referencias/assets/Texto do seu parágrafo.mp4" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 25 -preset slow \
  -c:a aac -b:a 128k -movflags +faststart \
  referencias/assets/Projetos/vitoria-regia.mp4
```

Como o vídeo é 16:9, ele pode ocupar quase a tela toda (diferente do vídeo do Woolaroo, que é retrato).

**Contexto do nome:** a página 1 do PDF-base (`referencias/aplicacoes/ISLA - UFAM.pptx.pdf`) traz o título
original da apresentação: *"Vitória-Régia: Uma Iniciativa para a Preservação Digital de Línguas Indígenas"*.
Isso responde à pergunta da tela 4, se for preciso.

---

## Estado atual do deck: 18 telas (data-slide 0 a 17)

| # | Tela |
|---|---|
| 0 | Capa |
| 1 | Mapa das famílias linguísticas (pág. 9 do PDF) |
| 2 | Sistemas de escrita (pág. 10) |
| 3 | Escrita manuscrita (pág. 11) |
| 4 | Abertura do Linklado |
| 5 a 9 | Fotos do Linklado (págs. 19 a 23) |
| 10 | O aplicativo (três celulares lado a lado) |
| 11 | Colagem animada (págs. 24 a 26) |
| 12 | Capas de livro (pág. 27) |
| 13 | Livros entregues e campo (págs. 28 e 29 fundidas) |
| 14 | Prêmio Jabuti (pág. 30) |
| 15 | ISLA institucional (fecho, selo circular) |
| 16 | Woolaroo (com vídeo retrato) |
| 17 | Portal CKAN (iframe navegável de verdade) |

**As quatro telas novas entram como 18, 19, 20 e 21.**

---

## Diretrizes de design a seguir

Palco fixo 16:9. **Nada de pixel fixo em layout** — só `%` e `clamp(min, vw, max)`.

### Tipografia
- Títulos: `font-family: 'Swiss 721', Impact, sans-serif`, `font-weight: 900`, `letter-spacing: -0.045em`, `line-height: 0.88` a `0.9`
- Corpo: Heron Sans (é o padrão herdado do `:root`)

### Hierarquia já estabelecida nas telas de projeto (`.project-slide`), use como base

```css
.project-kicker  { clamp(12px, 0.95vw, 18px); uppercase; letter-spacing: 0.2em; color: var(--barro); }
.project-copy h2 { clamp(44px, 5vw, 100px); Swiss 721 900; }
.project-lede    { clamp(14px, 1.15vw, 22px); color: rgb(255 255 255 / 82%); }
.project-link    { botão sólido var(--barro), padding 0.7em 1.3em, radius clamp(4px, 0.3vw, 8px) }
```

### Paleta
`--mata #043831` (fundo institucional) · `--barro #c56a19` (destaque) · `--folha #b0bb9b` · `--nevoa #dedfda`

O bloco Linklado usa violeta próprio; **as telas do edital não devem usar violeta**, são institucionais (verde e laranja).

### Animação
Marcar cada elemento com `data-animate` e declarar o `animation-delay` junto com os outros, no fim do CSS.
Ritmo usado no deck: 120ms para o texto, 280ms para a mídia. Em sequências de itens: 150 / 950 / 1750ms.

---

## Regras permanentes do usuário

1. **Tela nova sempre entra no final da pilha.** Nunca intercalar, a menos que ele diga explicitamente a posição.
2. **Nunca usar travessões (—) na copy visível.** Usar vírgula, ponto, ou reescrever. Em `alt`/`aria-label` tudo bem.
3. **Conferir visualmente antes de dizer que está pronto:** `npm run build`, servir o `dist/`, screenshot com Chrome headless e olhar.
4. Atualizar o `CONTEXTO-LLM.md` a cada decisão nova.

---

## Armadilhas técnicas descobertas nesta sessão

- **`pkill -f "http.server 8080"` mata o próprio shell.** O padrão casa com a linha de comando do bash que está rodando o comando composto. Isso já engoliu silenciosamente duas atualizações de arquivo (saída 144, sem output). Use o PID salvo em arquivo, ou simplesmente deixe o servidor rodando.
- **O hash da URL é 1-based.** `#12` abre o slide de índice 11. Para ver `data-slide="N"`, acesse `#N+1`.
- **Animação só roda em tela cheia.** Fora dela o CSS força `opacity: 1; animation: none`. Para testar o escalonamento, injete `is-ready` e `is-fullscreen` no `.deck` via script e leia `getComputedStyle().animationDelay`.
- **Padding em `%` no CSS resolve contra a LARGURA**, inclusive no eixo vertical. Num palco 16:9, `padding: 5%` no topo equivale a 8,9% da altura.
- **`min-height: 0`** é obrigatório em item de flex/grid que contenha imagem ou vídeo alto, senão o `min-height: auto` impede o encolhimento e a mídia vaza do slide.
- **Especificidade:** `.pai p` (0,2,0) vence `.classe-do-filho` (0,1,0). Dê classe explícita a cada parágrafo em vez de confiar no seletor de elemento.
- **O ImageMagick desta máquina não tem `rsvg-convert`** e renderiza SVG com fundo branco chapado. Para conferir SVG, use Chrome headless com um HTML de teste.
- **Vídeo no deck:** `<video autoplay muted loop playsinline controls>`. O `muted` é necessário para o autoplay não ser bloqueado.
- **Iframe de origem cruzada rouba o teclado.** Depois de clicar dentro do iframe do portal CKAN, as setas param de navegar o deck até clicar fora. É comportamento do navegador, não bug. Já existe uma legenda no slide avisando disso.

---

## Sugestão de implementação das quatro telas

Só uma proposta, o usuário ainda não validou o desenho.

**Tela 18, duração do processo.** Número grande como herói ("258 dias"), rótulo em cima, uma linha de apoio
com as duas datas âncora, e talvez uma régua horizontal com os marcos do cronograma.

**Tela 19, fases e critérios.** Duas colunas, uma por fase, cada uma com o nome da fase, seus critérios e a
fórmula da nota. Vale destacar os pesos (Solução peso 2 na Fase 1, Consistência peso 2 na Fase 2) e a regra
eliminatória do CP menor que 2.

**Tela 20, vídeo.** Como o vídeo é 16:9 igual ao palco, ele pode ocupar quase tudo. Moldura em `var(--barro)`
seguindo a linguagem das outras mídias, com um rótulo curto.

**Tela 21, a pergunta.** Tela tipográfica, fundo `var(--mata)`, só a frase em Swiss 721 grande e centralizada:
"Mas afinal, o que é a Vitória-Régia?". É um gancho de transição, então não precisa responder na mesma tela.
