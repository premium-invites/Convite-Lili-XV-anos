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
    chave: "11932019567",
    posicao: {"left":24.621952379536875,"top":69.29892933618844,"width":49.956095240926246,"height":5.429336188436831}
  },
  info: { // botao Info da pagina de presentes
    ativo: true,
    posicao: {"left":52.3926845218632,"top":77.67773019271948,"width":33.41707143069469,"height":5.250535331905781}
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
    presentes: { mostrarTexto:false, posicao: {"left":14.431708332094765,"top":77.57066381156316,"width":33.49755952557891,"height":5.250535331905781} },
  },
  hotspots: {
        confirm: { left:14.273172616747422, top:66.55546038543898, width:17.67316667162094, height:9.788008565310493 },
        map: { left:41.736589280936954, top:66.44839400428266, width:17.2195059599893, height:9.788008565310493 },
        gift: { left:67.42439285395797, top:66.44839400428266, width:18.15365476650516, height:10.21627408993576 }
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
