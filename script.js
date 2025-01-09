// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    let chatButton = document.querySelector(".chatbot-container");
    let closeButton = document.querySelector(".close-chat");

    // Ensure the chatbot button opens the chat
    if (chatButton) {
        chatButton.addEventListener("click", openChatbot);
    }

    // Ensure the close button hides the chat
    if (closeButton) {
        closeButton.addEventListener("click", closeChatbot);
    }
});

// Function to Open Chatbot
function openChatbot() {
    let chat = document.getElementById("chatbot");
    chat.classList.add("open");
    chat.style.display = "block"; // Ensure visibility
}

// Function to Close Chatbot
function closeChatbot() {
    let chat = document.getElementById("chatbot");
    chat.classList.remove("open");
    setTimeout(() => {
        chat.style.display = "none"; // Hide after animation
    }, 300);
}

// Search Incident Function
function searchIncident() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let pages = {
        "mva": "security.html",
        "theft": "security.html",
        "complaint": "security.html",
        "electrical fire": "fire.html",
        "major fire": "fire.html",
        "minor fire": "fire.html",
        "fainting": "medical.html",
        "abdominal pain": "medical.html"
    };

    if (pages[input]) {
        window.location.href = pages[input];
    } else {
        alert("Incident not found! Please try again.");
    }
}

// Clear Chat
function clearChat() {
    document.getElementById("chatbotMessages").innerHTML = "<p class='bot-message'>Hello! I'm Amaala. Ask me what to say in an emergency or start a drill!</p>";
}
