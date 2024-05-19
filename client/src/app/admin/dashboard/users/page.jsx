"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "@/components/admin/UserTable";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:8000/manageusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust based on your auth setup
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function addUser(userData) {
    try {
      await axios.post("http://localhost:8000/manageusers", userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust based on your auth setup
        },
      });
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  async function editUser(userId, userData) {
    try {
      const updatedData = { ...userData };
      if (!userData.password) {
        delete updatedData.password;
      }
      await axios.put(
        `http://localhost:8000/manageusers/${userId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust based on your auth setup
          },
        }
      );
      fetchUsers();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  }

  async function deleteUser(userId) {
    try {
      await axios.delete(`http://localhost:8000/manageusers/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust based on your auth setup
        },
      });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <UserTable
      users={users}
      search={search}
      setSearch={setSearch}
      addUser={addUser}
      editUser={editUser}
      deleteUser={deleteUser}
    />
  );
}

export default UsersPage;
