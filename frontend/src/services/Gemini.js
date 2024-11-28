import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyC9J2aOe89A330_TPtQ4oF7MARAv - wEomM";
console.log(apiKey);

if (!apiKey) {
  console.error("Google API key is missing!");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
});
