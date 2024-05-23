import React from "react";
import { Typography, IconButton, Tooltip } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { AiFillDelete } from "react-icons/ai";

const WarehouseTableRow = ({
  warehouse,
  isLast,
  handleEditOpen,
  handleDeleteOpen,
}) => {
  const { id, warehouse_name, location, city, province, longtitude, latitude } =
    warehouse;
  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

  return (
    <tr>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {id}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {warehouse_name}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {location}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {city}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {province}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {longtitude}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {latitude}
        </Typography>
      </td>
      <td className={classes}>
        <Tooltip content="Edit Warehouse">
          <IconButton variant="text" onClick={() => handleEditOpen(warehouse)}>
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
      <td className={classes}>
        <Tooltip content="Delete Warehouse">
          <IconButton variant="text" onClick={() => handleDeleteOpen(id)}>
            <AiFillDelete className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
};

export default WarehouseTableRow;
