import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

const EditWarehouseModal = ({ open, handleOpen, editWarehouse, warehouse }) => {
  const [formData, setFormData] = useState({
    warehouse_name: "",
    location: "",
    city: "",
    province: "",
    longtitude: "",
    latitude: "",
  });

  useEffect(() => {
    if (warehouse) {
      setFormData({
        warehouse_name: warehouse.warehouse_name,
        location: warehouse.location,
        city: warehouse.city,
        province: warehouse.province,
        longtitude: warehouse.longtitude,
        latitude: warehouse.latitude,
      });
    }
  }, [warehouse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    editWarehouse(warehouse.id, formData);
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Edit Warehouse</DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          <Input
            label="Warehouse Name"
            name="warehouse_name"
            value={formData.warehouse_name}
            onChange={handleChange}
          />
          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <Input
            label="Province"
            name="province"
            value={formData.province}
            onChange={handleChange}
          />
          <Input
            label="Longitude"
            name="longtitude"
            value={formData.longtitude}
            onChange={handleChange}
          />
          <Input
            label="Latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen}>
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleSubmit}>
          Save Changes
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default EditWarehouseModal;
