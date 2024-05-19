import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const DeleteUserModal = ({ open, handleOpen, deleteUser, userId }) => {
  const handleDelete = () => {
    deleteUser(userId);
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Delete User</DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete this user?</p>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen}>
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleDelete}>
          Delete
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DeleteUserModal;
