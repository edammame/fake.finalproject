"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Description() {
  const [activeTab, setActiveTab] = useState("html");
  const [desc, setDesc] = useState([]);
  const productSearch = useSelector((state) => state.product);

  const fetchProduct = () => {
    axiosInstance()
      .get("/products/", {
        params: {
          description: productSearch.description,
        },
      })
      .then((res) => {
        setDesc(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, [productSearch]);

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
          {desc.map((desc, key) => (
            <Tab
              key={key}
              {...desc}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {desc}
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
