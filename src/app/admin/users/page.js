"use client";
import { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.success) {
          setUsers(data.users);
        } else {
          setError("Failed to load users.");
        }
      } catch (err) {
        setError("An error occurred while fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main>
     <NavbarAdmin/>
    
    <div className="md:ml-40 p-4 w-80">
        <h1 className="text-4xl font-bold">User List</h1>
       <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>

            </tr>
           
        </thead>
        <tbody>
         {users.map((user, index)=>(
            <tr key={index}>
                <td>
                    {user.username}
                </td>
                <td>
                    {user.password}
                </td>
            </tr>
         ))}
            </tbody>
       </table>
      
    </div>
    </main>
  );
}
