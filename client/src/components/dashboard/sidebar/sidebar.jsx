"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { functionLogout } from "@/redux/slices/userSlice";
import Link from "next/link";

function SidebarPage() {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(functionLogout());
  };

  return (
    <Card className=" min-h-[100vh] w-full max-w-[20rem] p-4 shadow-2xl">
      <div className=" sticky top-0">
        <div className=" mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            {userSelector?.first_name + " " + userSelector?.last_name}
          </Typography>
        </div>
        <List>
          <Link href="/admin/dashboard">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link href="/admin/dashboard/users">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Users
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem onClick={logout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
export default SidebarPage;
