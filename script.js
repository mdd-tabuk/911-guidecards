/* General Styles */
body {
   font-family: Arial, sans-serif;
   background-color: #f4f4f4;
   margin: 0;
   padding: 0;
   text-align: center;
}
.header {
   background-color: #222;
   color: white;
   padding: 20px;
   font-size: 24px;
}
/* Floating Bot Icon */
.chatbot-container {
   position: fixed;
   bottom: 20px;
   right: 20px;
   cursor: pointer;
}
.chatbot-container img {
   width: 60px;
   height: 60px;
   transition: transform 0.2s ease-in-out;
}
.chatbot-container img:hover {
   transform: scale(1.1);
}
/* Chatbot Box (Hidden by Default) */
.chatbot-box {
   display: none;
   width: 350px;
   height: 500px;
   background: white;
   border-radius: 12px;
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
   position: fixed;
   bottom: 20px;
   right: 20px;
   padding: 15px;
   text-align: left;
   transform: scale(0.8);
   opacity: 0;
   transition: transform 0.3s ease, opacity 0.3s ease;
}
/* Chatbot Open Animation (macOS-like effect) */
.chatbot-box.open {
   display: block;
   transform: scale(1);
   opacity: 1;
}
/* Chatbot Header */
.chatbot-header {
   background-color: #007bff;
   color: white;
   padding: 10px;
   font-size: 16px;
   text-align: center;
   border-radius: 12px 12px 0 0;
}
/* Chatbot Close Button */
.close-chat {
   position: absolute;
   right: 10px;
   top: 5px;
   background: none;
   border: none;
   color: white;
   font-size: 18px;
   cursor: pointer;
}
/* Typing Indicator */
.typing-indicator {
   display: none;
   font-style: italic;
   color: gray;
   padding: 5px;
}
