document.getElementById("send-button").addEventListener("click", sendMessage);

document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = document.getElementById("user-input").value.trim();
  const chatbox = document.getElementById("chatbox");

  if (!userMessage) return; // Ignorar entradas vazias

  // Criar mensagem do usuário
  const userMessageElement = createMessageElement(userMessage, "user-message");
  chatbox.appendChild(userMessageElement);

  // Criar resposta do bot
  const botMessageElement = document.createElement("p");
  botMessageElement.className = "bot-message";

  // Lógica de resposta do chatbot
  if (userMessage.toLowerCase().includes("proximo jogo") || userMessage.toLowerCase().includes("quando") || userMessage.toLowerCase().includes("horario")) {
    botMessageElement.textContent = "O próximo jogo da Fúria é hoje às 19h contra a Pain 🤏.";
  } else if (userMessage.toLowerCase().includes("jogadores")) {
    botMessageElement.textContent = "Os jogadores da Fúria são: KSCERATO, yuriih, FalleN, molodoy e YEKINDAR.";
  } else if (userMessage.toLowerCase().includes("assistir") || userMessage.toLowerCase().includes("ver") || userMessage.toLowerCase().includes("passa")) {
    // Mensagem explicativa e link clicável separado
    botMessageElement.textContent = "Você pode assistir aos jogos no canal oficial da Fúria na Twitch acessando esse link aqui: ";
    const anchor = document.createElement("a");
    anchor.href = "https://www.twitch.tv/furiatv"; // Link para o site
    anchor.target = "_blank"; // Abrir em nova aba
    anchor.textContent = "Twitch da Fúria"; // Texto do link
    botMessageElement.appendChild(anchor); // Adicionar o link ao elemento da mensagem
  } else if (userMessage.toLowerCase().includes("molodoy")) {
    botMessageElement.textContent = "HAHAHAHAHA é o que todo mundo está se perguntando! Molodoy é o novo AWPer do time de CS2 da nossa Fúria. É um jovem talento do Cazaquistão que surpreendeu nossos caça talentos e promete surpreender os fãs e os adversários também.";
  } else if (userMessage.toLowerCase().includes("yekindar") || userMessage.toLowerCase().includes("novidade")) {
    botMessageElement.textContent = "A Fúria está apostando na internacionalização do elenco de CS2. A novidade é a aquisição do player YEKINDAR como standin, jogador que conta com grande experiência e vai agregar muito o nosso time 👊🌍";
  } else if (userMessage.toLowerCase().includes("obrigada")) {
    botMessageElement.textContent = "Imagina! Sempre uma honra ajudar uma Furiosa!";
  } else if (userMessage.toLowerCase().includes("obrigado")) {
    botMessageElement.textContent = "Imagina! Sempre uma honra ajudar um Furioso!";
  } else {
    botMessageElement.textContent = "Desculpe, não entendi. Pode tentar outra pergunta?";
  }

  // Adicionar mensagem do bot ao chatbox com delay
  setTimeout(() => {
    chatbox.appendChild(botMessageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Garantir rolagem para a última mensagem
  }, 500);

  // Limpar entrada do usuário
  document.getElementById("user-input").value = "";
}

function createMessageElement(content, className) {
  const messageElement = document.createElement("p");
  messageElement.className = className;
  messageElement.textContent = content;
  return messageElement;
}
