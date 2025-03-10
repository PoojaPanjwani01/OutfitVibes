// import axios from "axios";

// // Create an instance of Axios to communicate with your backend
// const API = axios.create({
//   baseURL: "http://localhost:8000", 
// });

// // Chat Completion API Call
// export const getChatCompletion = async (prompt) => {
//   try {
//     const response = await API.post("/chat", { prompt });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching chat completion:", error);
//     throw error;
//   }
// };

// // Image Generation API Call
// export const generateImage = async (prompt) => {
//   try {
//     const response = await API.post("/image/generate", { prompt });
//     return response.data;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     throw error;
//   }
// };


import axios from "axios";

// Function to call the chat completion API
export const getChatCompletion = async (input) => {
  try {
    const response = await axios.post("/api/chat", { prompt: input });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching chat completion.");
  }
};

// Function to call the image generation API
export const generateImage = async (input) => {
  try {
    const response = await axios.post("/api/generate-image", { prompt: input });
    return response.data;
  } catch (error) {
    throw new Error("Error generating image.");
  }
};
