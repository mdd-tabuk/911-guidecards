// Open chatbot with smooth animation
function openChatbot() {
   let chat = document.getElementById("chatbot");
   chat.classList.add("open");
}
// Close chatbot
function closeChatbot() {
   let chat = document.getElementById("chatbot");
   chat.classList.remove("open");
}
// Fixes for Bot Not Launching
document.addEventListener("DOMContentLoaded", function () {
   let chatIcon = document.querySelector(".chatbot-toggle");
   if (chatIcon) {
       chatIcon.addEventListener("click", openChatbot);
   }
});
// Search Incident
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
function clearChat() {
   document.getElementById("chatbotMessages").innerHTML = "<p class='bot-message'>Hello! I'm Amaala. Ask me what to say in an emergency or start a drill!</p>";
}
