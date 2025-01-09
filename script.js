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
function toggleChat() {
   let chat = document.getElementById("chatbot");
   chat.style.display = (chat.style.display === "none" || chat.style.display === "") ? "block" : "none";
}
function sendMessage() {
   let input = document.getElementById("chatInput").value.toLowerCase();
   let messages = document.getElementById("chatbotMessages");
   if (!input.trim()) return;
   let userMessage = document.createElement("p");
   userMessage.classList.add("user-message");
   userMessage.textContent = input;
   messages.appendChild(userMessage);
   document.getElementById("typingIndicator").style.display = "block";
   setTimeout(() => {
       let botMessage = document.createElement("p");
       botMessage.classList.add("bot-message");
       let responses = {
           "mva": "Ask: 1️⃣ What is the exact location? 2️⃣ How many vehicles are involved? 3️⃣ Are there any injuries?",
           "theft": "Ask: 1️⃣ What was stolen? 2️⃣ When did it happen? 3️⃣ Do you see any suspects?",
           "start drill": "🚨 Emergency Drill Started! Simulating a real dispatcher scenario...",
           "fire": "🔥 What type of fire? Electrical, major, or minor?",
           "medical": "🩺 What type of emergency? Fainting or Abdominal Pain?",
           "security": "🔒 What type of security issue? MVA, Theft, or Complaint?"
       };
       botMessage.textContent = responses[input] || "I don't have a response for that. Try another incident.";
       messages.appendChild(botMessage);
       document.getElementById("typingIndicator").style.display = "none";
       document.getElementById("chatInput").value = "";
       messages.scrollTop = messages.scrollHeight;
   }, 2000);
}
function clearChat() {
   document.getElementById("chatbotMessages").innerHTML = "<p class='bot-message'>Hello! I'm Amaala. Ask me what to say in an emergency or start a drill!</p>";
}
