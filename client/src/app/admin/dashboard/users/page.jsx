"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "@/components/admin/UserTable";
import { axiosInstance } from "@/axios/axios";
import { useDebounce } from "use-debounce";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 500);

  useEffect(() => {
    fetchUsers();
  }, [value]);

  async function fetchUsers() {
    try {
      const response = await axiosInstance().get("/manageusers/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function addUser(userData) {
    try {
      await axiosInstance().post("/manageusers/", userData);
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  async function editUser(user_id, userData) {
    try {
      const updatedData = { ...userData };
      if (!userData.password) {
        delete updatedData.password;
      }
      await axiosInstance().patch(`/manageusers/${user_id}`, updatedData);
      fetchUsers();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  }

  async function deleteUser(user_id) {
    try {
      await axiosInstance().delete(`/manageusers/${user_id}`);
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
