// login

import instance from "./instance";

export async function login() {
  const data = {
    user: {
      email: "mai111@gmail.com",
      password: "123456",
    },
  };
  const res = instance.post("users/login", data);
  return res;
}

export async function getCurrentUser() {
  const res = await instance.get("user");
  return res.data.user;
}
