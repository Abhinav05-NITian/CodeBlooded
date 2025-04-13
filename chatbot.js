const prompt = document.querySelector("#prompt");
const chatcontainer = document.querySelector(".chatcontainer");
const sendbt = document.querySelector("#submit");
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

const api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBXDNPclOPrKUNLAvFaTYFq41NP-KOYGbk";

let user = { data: null };

async function typeEffect(text, container) {
  container.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    container.innerHTML += text.charAt(i);
    await new Promise(resolve => setTimeout(resolve, 15));
  }
}

async function typeEffectHTML(html, container) {
container.innerHTML = ""; // Clear container
const regex = /(<[^>]+>|[^<]+)/g; // Match tags or text
const parts = html.match(regex);

for (const part of parts) {
if (part.startsWith("<")) {
  container.innerHTML += part; // Instantly add HTML tags
} else {
  for (let char of part) {
    container.innerHTML += char;
    await new Promise(resolve => setTimeout(resolve, 15)); // Typing effect
  }
}
}
}


async function generateresponse(aichatbox) {
let text = aichatbox.querySelector(".ai-chat-area");
try {
const response = await fetch(api_url, {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "contents": [{
      "parts": [{ "text": user.data }]
    }]
  })
});
const data = await response.json();
let apiresponse = data.candidates[0].content.parts[0].text
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')   // Bold
  .replace(/^\* /gm, '<br>• ')                         // Bullet points
  .trim();

await typeEffectHTML(apiresponse, text); // Animated with HTML support
} catch (error) {
text.innerHTML = "Something went wrong. Please try again.";
console.error(error);
} finally {
chatcontainer.scrollTo({ top: chatcontainer.scrollHeight, behavior: "smooth" });
}
}



function createchatbox(html, classes) {
  const div = document.createElement("div");
  div.innerHTML = html;
  div.classList.add(classes);
  return div;
}

function handlechatresponse(message) {
  if (!message.trim()) return;
  user.data = message;

  const userHTML = `
    <img src="https://i.pinimg.com/736x/19/0e/c4/190ec45e85a736714a81a796bd48a8ad.jpg" class="chat-avatar" />
    <div class="user-chat-area">${user.data}</div>`;
  const userChatBox = createchatbox(userHTML, "user-chat-box");
  chatcontainer.appendChild(userChatBox);
  prompt.value = "";

  chatcontainer.scrollTo({ top: chatcontainer.scrollHeight, behavior: "smooth" });

  setTimeout(() => {
    const aiHTML = `
      <img src="https://img.freepik.com/free-psd/futuristic-robot-illustration_23-2150978986.jpg" class="chat-avatar" />
      <div class="ai-chat-area">...</div>`;
    const aiChatBox = createchatbox(aiHTML, "ai-chat-box");
    chatcontainer.appendChild(aiChatBox);
    generateresponse(aiChatBox);
  }, 400);
}

prompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handlechatresponse(prompt.value);
});

sendbt.addEventListener("click", () => {
  handlechatresponse(prompt.value);
});

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});