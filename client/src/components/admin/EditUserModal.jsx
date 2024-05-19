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

const EditUserModal = ({ open, handleOpen, editUser, user }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: "",
        gender: user.gender,
        role: user.role,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    editUser(user.id, formData);
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Edit User</DialogHeader>
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
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          <Select
            label="Role"
            name="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e })}
          >
            <Option value="user">User</Option>
            <Option value="admin">Admin</Option>
            <Option value="superAdmin">Super Admin</Option>
          </Select>
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

export default EditUserModal;
