import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const DeleteWarehouseModal = ({
  open,
  handleOpen,
  deleteWarehouse,
  warehouseId,
}) => {
  const handleDelete = () => {
    deleteWarehouse(warehouseId);
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Delete Warehouse</DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete this warehouse?</p>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen}>
          Cancel
        </Button>
        <Button variant="gradient" color="red" onClick={handleDelete}>
          Delete Warehouse
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DeleteWarehouseModal;
