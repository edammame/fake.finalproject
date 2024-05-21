"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";
import UserTableRow from "./UserTableRow";

const TABLE_HEAD = ["Id", "User", "Role", "Gender", "Verified", "", ""];

const UserTable = ({
  users,
  search,
  setSearch,
  addUser,
  editUser,
  deleteUser,
}) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddOpen = () => setOpenAdd(!openAdd);
  const handleEditOpen = (user) => {
    setSelectedUser(user);
    setOpenEdit(!openEdit);
  };
  const handleDeleteOpen = (user_id) => {
    setSelectedUser({ id: user_id });
    setOpenDelete(!openDelete);
  };

  return (
    <Card className="h-full w-full mt-3">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Users list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all users
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={handleAddOpen}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add User
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
        <table className="mt-4 w-full min-w-max table-auto text-left">
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
            {users
              .filter((user) =>
                `${user.first_name} ${user.last_name}`
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((user, index) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  isLast={index === users.length - 1}
                  handleEditOpen={handleEditOpen}
                  handleDeleteOpen={handleDeleteOpen}
                />
              ))}
          </tbody>
        </table>
      </CardBody>

      <AddUserModal
        open={openAdd}
        handleOpen={handleAddOpen}
        addUser={addUser}
      />
      <EditUserModal
        open={openEdit}
        handleOpen={handleEditOpen}
        editUser={editUser}
        user={selectedUser}
      />
      <DeleteUserModal
        open={openDelete}
        handleOpen={handleDeleteOpen}
        deleteUser={deleteUser}
        userId={selectedUser?.id}
      />
    </Card>
  );
};

export default UserTable;
