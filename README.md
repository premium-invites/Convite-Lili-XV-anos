# Convite interativo — Lili XV anos

**Data:** 13/02/2027 • **Horário:** 18h  
**Hospedagem:** GitHub Pages (arquivos estáticos)

## Estrutura pronta

- `index.html`: abertura lateral (arte estática até adicionar o vídeo), página principal, presentes e pop-up Info.
- `config.js`: campos editáveis, posições dos botões, WhatsApp, Pix e mapa.
- `assets/opening.webp`: carta da Lili com flores e lacre.
- `assets/principal.webp`: página principal com apenas 3 botões.
- `assets/presentes.webp`: sugestões e os botões visuais Pix, Voltar e Info.
- `assets/info.webp`: arte 3:4 do Pedro Vieira para o modal.
- `assets/preview-whatsapp.jpg`: imagem real JPEG **1200×630 px** para WhatsApp.
- `assets/musica.mp3`: música enviada com o projeto-base; confirme se será usada no convite da Lili.

## Antes de publicar (IMPORTANTE)

No arquivo `config.js` preencher:

1. `whatsapp.numero`: celular para confirmar presença (55+DDD+número).
2. `mapa`: link real da localização (https://...).
3. `pix.chave`: chave Pix de presentes. **Não foi informada**, portanto a cópia avisa que falta preencher.
4. `contatoCriador.numero`: WhatsApp do Pedro Vieira para o botão **Mais informações**.

**Nenhum contato, endereço ou Pix da antiga cliente foi reaproveitado.**

### URL do repositório e prévia do WhatsApp

Depois de criar o repositório, abra `index.html` e substitua **todas** as ocorrências de:

`https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

pela URL real do convite, por exemplo `https://meuusuario.github.io/convite-lili/`.

Sem isso, a página pode abrir, mas a prévia do WhatsApp **não funcionará**. A imagem já está no caminho `assets/preview-whatsapp.jpg`.

## Vídeo da abertura (ainda não fornecido)

No momento, `telas.video` está em `false`. Ao clicar em **Abrir convite**, aparece diretamente a página principal com música — o convite não exibirá tela preta por tentar abrir um MP4 antigo.

Para usar o vídeo animado da carta:

1. Faça o vídeo a partir da imagem da Lili e salve como `assets/video.mp4` (H.264 para máxima compatibilidade).
2. Edite `config.js`: `telas.video: true`.
3. Se desejar, toque em **Pular vídeo** para ir diretamente à página principal.

## Pop-up Info

Acesse a página de presentes e toque no botão **Info**. A imagem 3:4 aparece menor que a tela, centralizada e com o fundo **desfocado**. Toque no **X** (ou fora da imagem) para fechar e ir à **página principal**. O CTA **Mais informações** usa o número configurado em `contatoCriador.numero`.

## Editor de cliques

Abra `.../convite-lili/?editor=1` para ajustar as áreas de clique:

- Confirmação de presença, Localização e Presentes;
- Pix (copiar chave);
- Voltar — Presentes;
- Info (pop-up).

No editor, arraste e redimensione os botões, clique em **Copiar código** e cole as posições em `config.js`. Salvar apenas no navegador **não atualiza o GitHub**.

## GitHub Pages

1. Crie repositório público e envie **o conteúdo desta pasta** (index.html e config.js na raiz, junto da pasta assets).
2. Vá em **Settings → Pages → Deploy from a branch → main / (root)**.
3. Aguarde a publicação. Abra a URL em aba anônima para testar.
4. Verifique toque da carta, música, os 3 botões, a cópia Pix, Info, X, botão Voltar, WhatsApp do criador, e a imagem de prévia.
5. Quando trocar a prévia ou compartilhar pela primeira vez, teste enviando o link a si mesmo; WhatsApp pode manter prévias em cache.

**Atenção:** este pacote foi montado e validado estruturalmente; o funcionamento dos links externos e prévia em produção depende de completar os dados acima e testar no endereço público.
