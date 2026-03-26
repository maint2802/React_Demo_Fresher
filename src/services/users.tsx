import axios from "axios";

const usersApi = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const res = await axios.get(usersApi);
  return res.data;
}
