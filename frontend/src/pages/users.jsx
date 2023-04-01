import { useEffect, useState } from "react";
import service from "./../services";

function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    service.user.getAll().then((allUsers) => {
      setUsers(allUsers);
    });
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default UserPage;
