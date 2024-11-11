import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // Adjust this to your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});
