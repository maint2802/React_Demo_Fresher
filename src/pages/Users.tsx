import axios from "axios";
import { useEffect, useState } from "react";
import type { User } from "../types/types";
import { Link, useNavigate } from "react-router-dom";
const usersApi = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(usersApi).then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  const nav = useNavigate();

  const handleToDetail = (id: number) => {
    nav("/users/" + id);
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>id: {user.id}</p>
            <p>usesrname: {user.username}</p>
            <p>company name: {user.company.name}</p>
            <button onClick={() => handleToDetail(user.id)}>Detail</button>
            <Link to={"/users/" + user.id}>Detail</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
