import api from "./axiosClient";

export const user = {
  async getAll() {
    const { data } = await api.get("/users");
    return data;
  },
  async createOne({ name }) {
    const { data } = await api.post("/users", { name });
    return data;
  },
};
