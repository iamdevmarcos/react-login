import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "Marc", email: "marc@gmail.com" },
    };
    const res = await api.post("/validate", { token });
    return res.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "Marc", email: "marc@gmail.com" },
      token: "123450923kd",
    };
    const res = await api.post("/signin", { email, password });
    return res.data;
  },
  logout: async () => {
    return { status: true };
    const res = await api.post("/logout");
    return res.data;
  },
});
