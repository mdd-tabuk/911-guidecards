document.addEventListener("DOMContentLoaded", function () {
    let chatButton = document.querySelector(".chatbot-container");
    let closeButton = document.querySelector(".close-chat");
    let sendButton = document.getElementById("sendButton"); // Fix send button issue

    if (chatButton) {
        chatButton.addEventListener("click", openChatbot);
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeChatbot);
    }

    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }

    document.getElementById("chatInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

// Open Chatbot
function openChatbot() {
    let chat = document.getElementById("chatbot");
    chat.classList.add("open");
    chat.style.display = "block";
}

// Close Chatbot
function closeChatbot() {
    let chat = document.getElementById("chatbot");
    chat.classList.remove("open");
    setTimeout(() => {
        chat.style.display = "none";
    }, 300);
}

// Send Message
function sendMessage() {
    let inputField = document.getElementById("chatInput");
    let input = inputField.value.trim();
    let messages = document.getElementById("chatbotMessages");

    if (!input) return;

    // User Message
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = input;
    messages.appendChild(userMessage);

    // Clear input field
    inputField.value = "";

    // Simulated Bot Response
    let botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "Processing your request...";
    messages.appendChild(botMessage);

    messages.scrollTop = messages.scrollHeight;

    // Simulate bot response delay
    setTimeout(() => {
        botMessage.textContent = getBotResponse(input);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

// Simulated Bot Responses
function getBotResponse(userInput) {
    let responses = {
        "hello": "Hello! How can I assist you?",
        "start drill": "🚨 Starting an emergency drill... Please proceed!",
        "mva": "For Motor Vehicle Accidents (MVA), ensure safety and assess injuries.",
        "fire": "🔥 Fire emergency detected. Ensure evacuation and call firefighters!",
        "fainting": "For fainting cases, check for breathing and provide assistance.",
        "help": "I can assist with emergency procedures. Type an incident type like 'MVA' or 'fire'."
    };

    return responses[userInput.toLowerCase()] || "I'm not sure about that. Try another keyword!";
}

// Clear Chat
function clearChat() {
    document.getElementById("chatbotMessages").innerHTML = "<p class='bot-message'>Hello! I'm Amaala. Ask me what to say in an emergency or start a drill!</p>";
}
