"use client";
import React, { useState } from "react";
import {
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import AddWarehouseModal from "./AddWarehouseModal";
import EditWarehouseModal from "./EditWarehouseModal";
import DeleteWarehouseModal from "./DeleteWarehouseModal";
import WarehouseTableRow from "./WarehouseTableRow";

const TABLE_HEAD = [
  "Id",
  "Warehouse Name",
  "Location",
  "City",
  "Province",
  "Longitude",
  "Latitude",
  "",
  "",
];

const WarehouseTable = ({
  warehouses,
  search,
  setSearch,
  addWarehouse,
  editWarehouse,
  deleteWarehouse,
  currentPage,
  totalPages,
  setCurrentPage,
  assignWarehouseAdmin,
}) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const handleAddOpen = () => setOpenAdd(!openAdd);
  const handleEditOpen = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setOpenEdit(!openEdit);
  };
  const handleDeleteOpen = (warehouse_id) => {
    setSelectedWarehouse({ id: warehouse_id });
    setOpenDelete(!openDelete);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Card className="h-full w-full max-h-screen overflow-y-auto">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none min-h-28"
      >
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Warehouse List
            </Typography>
            <Typography color="gray" className="font-normal">
              See information about all warehouses
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={handleAddOpen}
            >
              <BuildingOfficeIcon strokeWidth={2} className="h-4 w-4" /> Add
              Warehouse
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-3 justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {warehouses && warehouses.length > 0 ? (
              warehouses.map((warehouse, index) => (
                <WarehouseTableRow
                  key={warehouse.id}
                  warehouse={warehouse}
                  isLast={index === warehouses.length - 1}
                  handleEditOpen={handleEditOpen}
                  handleDeleteOpen={handleDeleteOpen}
                />
              ))
            ) : (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="text-center p-4">
                  <Typography variant="small" color="blue-gray">
                    No warehouses found
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </CardFooter>
      <AddWarehouseModal
        open={openAdd}
        handleOpen={handleAddOpen}
        addWarehouse={addWarehouse}
      />
      <EditWarehouseModal
        open={openEdit}
        handleOpen={handleEditOpen}
        editWarehouse={editWarehouse}
        warehouse={selectedWarehouse}
      />
      <DeleteWarehouseModal
        open={openDelete}
        handleOpen={handleDeleteOpen}
        deleteWarehouse={deleteWarehouse}
        warehouseId={selectedWarehouse?.id}
      />
    </Card>
  );
};

export default WarehouseTable;
