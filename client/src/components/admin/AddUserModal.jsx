import React, { useState } from "react";
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

const AddUserModal = ({ open, handleOpen, addUser }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    addUser(formData);
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Add User</DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          <Input
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e })}
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
          <Select
            label="Role"
            name="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e })}
          >
            <Option value="User">User</Option>
            <Option value="Admin">Admin</Option>
            <Option value="Super Admin">Super Admin</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen}>
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleSubmit}>
          Add User
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddUserModal;
