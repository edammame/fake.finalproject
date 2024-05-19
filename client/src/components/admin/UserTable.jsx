"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AiFillDelete } from "react-icons/ai";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { useDebounce } from "use-debounce";

// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Active",
//     value: "active",
//   },
//   {
//     label: "Inactive",
//     value: "inactive",
//   },
// ];

const TABLE_HEAD = ["Id", "User", "Role", "Verified", "", ""];

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
          {/* <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs> */}
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
              .map(
                (
                  {
                    id,
                    first_name,
                    last_name,
                    email,
                    role,
                    password,
                    is_verified,
                    gender,
                  },
                  index
                ) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={`https://robohash.org/${email}`}
                            alt={first_name}
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {first_name} {last_name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {role}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={is_verified ? "Verified" : "Not Verified"}
                          color={is_verified ? "green" : "blue-gray"}
                        />
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton
                            variant="text"
                            onClick={() =>
                              handleEditOpen({
                                id,
                                first_name,
                                last_name,
                                email,
                                password,
                                role,
                                is_verified,
                              })
                            }
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Delete User">
                          <IconButton
                            variant="text"
                            onClick={() => handleDeleteOpen(id)}
                          >
                            <AiFillDelete className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
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
