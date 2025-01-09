const OPENAI_API_KEY = "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"; // 🔴 Replace this with your actual API key
let drillActive = false;
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
async function sendMessage() {
   let input = document.getElementById("chatInput").value.toLowerCase();
   let messages = document.getElementById("chatbotMessages");
   if (!input.trim()) return;
   let userMessage = document.createElement("p");
   userMessage.classList.add("user-message");
   userMessage.textContent = input;
   messages.appendChild(userMessage);
   document.getElementById("typingIndicator").style.display = "block";
   if (input === "start drill") {
       drillActive = true;
       await generateDrillScenario();
   } else {
       await getChatGPTResponse(input);
   }
   document.getElementById("typingIndicator").style.display = "none";
   document.getElementById("chatInput").value = "";
   messages.scrollTop = messages.scrollHeight;
}
async function generateDrillScenario() {
   let messages = document.getElementById("chatbotMessages");
   let botMessage = document.createElement("p");
   botMessage.classList.add("bot-message");
   botMessage.textContent = "🚨 Generating a real-time emergency drill scenario... 🚨";
   messages.appendChild(botMessage);
   let prompt = `Generate a realistic 911 emergency drill for a dispatcher. The drill should include a fake emergency, a description of the caller, location details, and key questions the dispatcher should ask. Keep it as realistic as possible.`;
   let scenario = await callChatGPT(prompt);
   let responseMessage = document.createElement("p");
   responseMessage.classList.add("bot-message");
   responseMessage.textContent = scenario;
   messages.appendChild(responseMessage);
}
async function getChatGPTResponse(userInput) {
   let messages = document.getElementById("chatbotMessages");
   let prompt = `You are a 911 dispatcher assistant. The user has asked: "${userInput}". Provide a professional dispatcher response.`;
   let aiResponse = await callChatGPT(prompt);
   let botMessage = document.createElement("p");
   botMessage.classList.add("bot-message");
   botMessage.textContent = aiResponse;
   messages.appendChild(botMessage);
}
async function callChatGPT(prompt) {
   try {
       let response = await fetch("https://api.openai.com/v1/chat/completions", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${OPENAI_API_KEY}`
           },
           body: JSON.stringify({
               model: "gpt-3.5-turbo",
               messages: [{ role: "system", content: prompt }],
               max_tokens: 150
           })
       });
       let data = await response.json();
       return data.choices[0].message.content.trim();
   } catch (error) {
       console.error("Error fetching ChatGPT response:", error);
       return "⚠️ Error connecting to AI. Please try again.";
   }
}
function clearChat() {
   document.getElementById("chatbotMessages").innerHTML = "<p class='bot-message'>Hello! I'm Amaala. Ask me what to say in an emergency or start a drill!</p>";
   drillActive = false;
}
