/* CONVITE LILI — CONFIGURAÇÃO CENTRAL
   PREENCHER os campos de WhatsApp, endereço e Pix antes da publicação.
   Use ?editor=1 para ajustar as áreas clicáveis e depois copiar as posições. */
window.CONFIG = {
  nome: "Lili — XV anos",
  whatsapp: {
    numero: "+5511932019567", // DDI+DDD+numero, só dígitos. NÃO reutilizar contatos do convite-base.
    mensagem: "Olá! Gostaria de confirmar minha presença no aniversário de 15 anos da Lili, em 13/02/2027."
  },
  mapa: "https://www.google.com/maps/place/R.+Francisco+de+Melo+Palheta,+1271+-+Parque+Boa+Esperan%C3%A7a,+S%C3%A3o+Paulo+-+SP,+08341-235/@-23.6036805,-46.4518006,21z/data=!4m6!3m5!1s0x94ce68a6825f85a9:0xc5eeed0d27a7a2d2!8m2!3d-23.6036655!4d-46.4517775!16s%2Fg%2F11p5tqb_h8?entry=ttu&g_ep=EgoyMDI2MTExNi4wIKXMDSoASAFQAw%3D%3D", // Link REAL do local da festa
  contatoCriador: {
    numero: "+5588988692212", // WhatsApp do Pedro Vieira; DDI + DDD + numero, só dígitos
    mensagem: "Olá, Pedro Vieira! Gostei do convite digital da Lili e quero saber mais sobre a criação de um convite personalizado."
  },
  telas: {
    video: false, // Ligue quando adicionar assets/video.mp4 da Lili
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: false,
    manual: false,
    contagem: false
  },
  pix: {
    ativo: true,
    chave: "11932019567", // Inserir a chave Pix real. Sem valor fictício.
    posicao: {left:23.1, top:67.8, width:53.0, height:6.5}
  },
  info: { // botao Info da pagina de presentes
    ativo: true,
    posicao: {left:50.3, top:76.5, width:35.7, height:6.0}
  },
  textos: {
    abrir: "Abrir convite",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },
  tema: {
    cor: "#f4c9ce",
    corBotaoVoltar: "transparent",
    corTextoBotaoVoltar: "transparent"
  },
  botoesVoltar: {
    presentes: {mostrarTexto:false, posicao:{left:13.1, top:76.5, width:35.4, height:6.0}}
  },
  hotspots: {
    confirm: {left:11.8, top:64.2, width:23.0, height:13.0},
    map: {left:36.6, top:64.2, width:25.4, height:13.0},
    gift: {left:64.0, top:64.2, width:23.1, height:13.0}
  },
  contagem: {
    dataEvento: "2027-02-13T18:00:00",
    textoFinal: "A festa começou!",
    corNumero: "#434d31",
    corLegenda: "#434d31",
    posicao: {left:22,top:48,width:56,height:6}
  },
  musica: { volume: 0.50 }
};
