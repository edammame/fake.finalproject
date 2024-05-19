"use client";
import React, { useEffect, useState } from "react";
import UserTable from "@/components/admin/UserTable";
import { axiosInstance } from "@/axios/axios";
import { useDebounce } from "use-debounce";
import { Alert } from "@material-tailwind/react";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 500);
  const [alert, setAlert] = useState({ message: "", type: "" });

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
      showAlert("User added successfully", "success");
    } catch (error) {
      console.error("Error adding user:", error);
      showAlert("Error adding user", "error");
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
      showAlert("User edited successfully", "success");
    } catch (error) {
      console.error("Error editing user:", error);
      showAlert("Error editing user", "error");
    }
  }

  async function deleteUser(user_id) {
    try {
      await axiosInstance().delete(`/manageusers/${user_id}`);
      fetchUsers();
      showAlert("User deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting user:", error);
      showAlert("Error deleting user", "error");
    }
  }

  function showAlert(message, type) {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: "" }), 3000);
  }

  return (
    <div>
      {alert.message && (
        <Alert color={alert.type === "success" ? "green" : "red"}>
          {alert.message}
        </Alert>
      )}
      <UserTable
        users={users}
        search={search}
        setSearch={setSearch}
        addUser={addUser}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default UsersPage;
