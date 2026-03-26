import type { User } from "../types/types";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers } from "../services/users";
import { useFetch } from "../customHooks/useFetch";
const Users = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const { data: users, isLoading, error } = useFetch<User[]>(fetchUsers);

  console.log(users);

  const nav = useNavigate();

  const handleToDetail = (id: number) => {
    nav("/users/" + id);
  };

  if (isLoading) return <div>isLoading</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      {users &&
        users.map((user) => {
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

// instance
