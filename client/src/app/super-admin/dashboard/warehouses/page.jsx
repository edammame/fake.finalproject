"use client";
import React, { useEffect, useState } from "react";
import WarehouseTable from "@/components/super-admin/WarehouseTable"; // Update to WarehouseTable
import { axiosInstance } from "@/axios/axios";
import { useDebounce } from "use-debounce";
import { Alert } from "@material-tailwind/react";

function WarehousePage() {
  const [warehouses, setWarehouses] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [value] = useDebounce(search, 500);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const itemsPerPage = 10;

  useEffect(() => {
    fetchWarehouses();
  }, [value, currentPage]);

  async function fetchWarehouses() {
    try {
      const response = await axiosInstance().get("/warehouses/", {
        params: { search: value, page: currentPage, limit: itemsPerPage },
      });
      setWarehouses(response.data.warehouses);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching warehouses:", error);
    }
  }

  async function addWarehouse(warehouseData) {
    try {
      await axiosInstance().post("/warehouses/", warehouseData);
      fetchWarehouses();
      showAlert("Warehouse added successfully", "success");
    } catch (error) {
      console.error("Error adding warehouse:", error);
      showAlert("Error adding warehouse", "error");
    }
  }

  async function editWarehouse(warehouse_id, warehouseData) {
    try {
      const updatedData = { ...warehouseData };
      await axiosInstance().patch(`/warehouses/${warehouse_id}`, updatedData);
      fetchWarehouses();
      showAlert("Warehouse edited successfully", "success");
    } catch (error) {
      console.error("Error editing warehouse:", error);
      showAlert("Error editing warehouse", "error");
    }
  }

  async function deleteWarehouse(warehouse_id) {
    try {
      await axiosInstance().delete(`/warehouses/${warehouse_id}`);
      fetchWarehouses();
      showAlert("Warehouse deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting warehouse:", error);
      showAlert("Error deleting warehouse", "error");
    }
  }

  async function assignWarehouseAdmin(warehouse_id, user_id) {
    try {
      await axiosInstance().post(`/warehouses/assign-admin`, {
        warehouse_id,
        user_id,
      });
      fetchWarehouses();
      showAlert("Warehouse admin assigned successfully", "success");
    } catch (error) {
      console.error("Error assigning warehouse admin:", error);
      showAlert("Error assigning warehouse admin", "error");
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
      <WarehouseTable
        warehouses={warehouses}
        search={search}
        setSearch={setSearch}
        addWarehouse={addWarehouse}
        editWarehouse={editWarehouse}
        deleteWarehouse={deleteWarehouse}
        assignWarehouseAdmin={assignWarehouseAdmin}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default WarehousePage;
