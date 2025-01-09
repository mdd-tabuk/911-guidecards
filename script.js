let drillActive = false;
let drillIncident = "";
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
           "mva": "📍 Location? 🚗 How many vehicles? 🚑 Any injuries?",
           "theft": "📍 Location? 🏠 What was stolen? ⏳ When did it happen? 👀 Any suspects?",
           "complaint": "📍 Location? 🔍 What is the complaint? ⏳ How long has it been happening?",
           "electrical fire": "📍 Location? 🔥 What is burning? 🚒 Is the fire spreading?",
           "major fire": "📍 Location? 🏢 What building is on fire? 🚑 Any injuries?",
           "minor fire": "📍 Location? 🔥 Is the fire contained? 🌫️ Any smoke inhalation?",
           "fainting": "📍 Location? 👤 Is the person breathing? 🏥 Any medical history?",
           "abdominal pain": "📍 Location? ⚕️ How severe is the pain? 🍽️ Any recent food allergies?"
       };
       if (input === "start drill") {
           drillActive = true;
           let incidentKeys = Object.keys(responses);
           drillIncident = incidentKeys[Math.floor(Math.random() * incidentKeys)]; // Select random incident
           botMessage.textContent = `🚨 DRILL MODE ACTIVATED 🚨 \nSimulating a ${drillIncident.replace("-", " ")}. Begin questioning!`;
       } else if (drillActive) {
           botMessage.textContent = responses[drillIncident] || "Continue questioning for the drill.";
       } else {
           botMessage.textContent = responses[input] || "I don't have a response for that. Try another incident.";
       }
       messages.appendChild(botMessage);
       document.getElementById("typingIndicator").style.display = "none";
       document.getElementById("chatInput").value = "";
       messages.scrollTop = messages.scrollHeight;
   }, 2000);
}
function clearChat() {
   document.getElementById("chatbotMessages").innerHTML = "<p class='bot-message'>Hello! I'm Amaala. Ask me what to say in an emergency or start a drill!</p>";
   drillActive = false;
   drillIncident = "";
}
