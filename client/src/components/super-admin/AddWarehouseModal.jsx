import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@material-tailwind/react";

const AddWarehouseModal = ({ open, handleOpen, addWarehouse }) => {
  const [formData, setFormData] = useState({
    warehouse_name: "",
    location: "",
    city: "",
    province: "",
  });

  useEffect(() => {
    if (!open) {
      setFormData({
        warehouse_name: "",
        location: "",
        city: "",
        province: "",
      });
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    addWarehouse(formData);
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Add Warehouse</DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          <Input
            label="Warehouse Name"
            name="warehouse_name"
            value={formData.warehouse_name}
            onChange={handleChange}
            autoComplete="off"
          />
          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="off"
          />
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            autoComplete="off"
          />
          <Input
            label="Province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen}>
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleSubmit}>
          Add Warehouse
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddWarehouseModal;
