import { HiArrowDown, HiArrowLongDown, HiArrowUp } from "react-icons/hi2";

function DashboardPage() {
  return (
    <main>
      <div className=" flex items-center">
        <div className="h-[250px] w-[350px] shadow-md ml-10">
          <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
            Users
          </span>
          <div className="flex item-center justify-center mt-3">
            <span className=" font-semibold">10</span>
          </div>
          <div className="flex items-center justify-center mt-3">
            <HiArrowUp className="text-3xl text-green-700" />
            <HiArrowLongDown className="text-3xl text-red-700" />
          </div>
          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold"> Compared to the last month</span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default DashboardPage;
