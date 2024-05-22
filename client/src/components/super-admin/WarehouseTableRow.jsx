import React from "react";
import {
  Typography,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { AiFillDelete } from "react-icons/ai";

const UserTableRow = ({ user, isLast, handleEditOpen, handleDeleteOpen }) => {
  const { id, first_name, last_name, email, role, gender, is_verified } = user;
  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

  return (
    <tr>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
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
        <Typography variant="small" color="blue-gray" className="font-normal">
          {role}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {gender}
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
          <IconButton variant="text" onClick={() => handleEditOpen(user)}>
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
      <td className={classes}>
        <Tooltip content="Delete User">
          <IconButton variant="text" onClick={() => handleDeleteOpen(id)}>
            <AiFillDelete className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
};

export default UserTableRow;
