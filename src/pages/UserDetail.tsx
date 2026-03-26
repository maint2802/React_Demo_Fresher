import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();

  return (
    <div>
      UserDetail
      <p>user id: {params.id}</p>
    </div>
  );
};

export default UserDetail;
