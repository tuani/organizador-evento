function montarOpcoes(opcoes, id) {
    const select = document.querySelector(`${id}`);

    opcoes.forEach((item, index) => {
      const option = `<option for="${index + 1}">${item}</option>`;
      select.innerHTML += option;
    });
  }

  const opcoesEvento = [
    "Workshops e Oficinas",
    "Exposições e Feiras",
    "Concertos e Shows",
    "Festivais Locais",
    "Eventos Esportivos",
    "Eventos de Caridade",
    "Confraternizações",
    "Eventos de Networking",
    "Eventos de Arte e Cultura",
  ];

  const opcoesLocal = {
    "Workshops e Oficinas": [
      "Espaço cultural ou comunitário",
      "Galeria de arte local",
      "Estúdio de arte ou design",
      "Biblioteca pública",
    ],
    "Exposições e Feiras": [
      "Centro de Exposições e Feiras da região",
      "Pavilhão de exposições dentro de um parque de eventos",
      "Shopping center com espaço para exposições temporárias",
      "Galeria de arte ou museu local",
    ],
    "Concertos e Shows": [
      "Teatro da cidade",
      "Arena ou estádio esportivo",
      "Sala de concertos ou casa de shows",
      "Clube noturno ou bar com palco para música ao vivo",
    ],
    "Festivais Locais": [
      "Praça central da cidade",
      "Parque municipal",
      "Área de eventos ao ar livre",
      "Centro cultural ou de artes",
    ],
    "Eventos Esportivos": [
      "Estádio esportivo local",
      "Ginásio ou campo esportivo da escola",
      "Parque com trilhas ou quadras esportivas",
      "Clube esportivo com instalações para eventos",
    ],
    "Eventos de Caridade": [
      "Salão comunitário",
      "Igreja local",
      "Instalações de uma empresa apoiadora",
    ],
    "Confraternizações": [
      "Restaurante ou bar com espaço para eventos privados",
      "Jardim ou área ao ar livre em uma propriedade particular",
      "Clube social ou recreativo",
    ],
    "Eventos de Networking": [
      "Coworking space",
      "Café ou lounge com ambiente propício para networking",
      "Centro de negócios local",
      "Espaço de eventos em uma incubadora de startups",
    ],
    "Eventos de Arte e Cultura": [
      "Museu de arte local",
      "Teatro comunitário",
      "Centro cultural da cidade",
      "Espaço de galeria de arte ou estúdio de artista",
    ],
  };

  const evento = document.querySelector("#evento");

  evento.addEventListener("change", () => {
    const eventoValue = evento.value;
    document.querySelector("#local").innerHTML = "";
    montarOpcoes(opcoesLocal[eventoValue], "#local");
  });
  montarOpcoes(opcoesEvento, "#evento");