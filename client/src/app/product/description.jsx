import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";

function Description() {
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "Product Details",
      value: "html",
      desc: `Ini nanti diganti pake axios, jadi ngefetch data dari database. Sementara begini dulu karena seedingnya masih gabisa, jd data dummynya masih blm ada hiks`,
    },
    {
      label: "Stock Information",
      value: "react",
      desc: `diisi stock dengan cara ngeget stock, nanti akan ketauan qty brp di warehouse mana aja.
      sebenernya ini agak ikutin loket.com, product detailnya supaya ga polos bgt ada animasi dikit`,
    },
  ];
  return (
    <>
      <Tabs value={activeTab} className=" max-w-[60%]">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}
export default Description;
