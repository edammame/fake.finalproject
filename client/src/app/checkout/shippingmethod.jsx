"use client";
import { Radio } from "@material-tailwind/react";
import { TbTruckDelivery } from "react-icons/tb";

function ShippingComponents() {
  return (
    <>
      <div className=" flex flex-col py-3">
        <div className=" py-4 font-bold text-xl text-[#1e2b62]">
          Select Shipping Method
        </div>
        <div className=" flex gap-2 text-sm py-2">
          <Radio
            color="blue"
            name="shipping"
            label={
              <div className=" gap-1">
                <div>JNE Ongkos Kirim Ekonomis</div>
                <div>Rp. 6000</div>
                <div className=" flex gap-1 items-center">
                  <TbTruckDelivery />
                  Estimasi 4 - 5 hari
                </div>
              </div>
            }
          />
        </div>
        <div className=" flex gap-2 text-sm py-2">
          <Radio
            color="blue"
            name="shipping"
            label={
              <div className=" gap-1">
                <div>JNE Reguler</div>
                <div>Rp. 10.000</div>
                <div className=" flex gap-1 items-center">
                  <TbTruckDelivery />
                  Estimasi 2 - 3 hari
                </div>
              </div>
            }
          />
        </div>
        <div className=" flex gap-2 text-sm py-2">
          <Radio
            color="blue"
            name="shipping"
            label={
              <div className=" gap-1">
                <div>JNE Super Speed</div>
                <div>Rp. 30.000</div>
                <div className=" flex gap-1 items-center">
                  <TbTruckDelivery />
                  Estimasi instan
                </div>
              </div>
            }
          />
        </div>
        <div className=" flex gap-2 text-sm py-2">
          <Radio
            color="blue"
            name="shipping"
            label={
              <div className=" gap-1">
                <div>JNE Yakin Esok Sampai</div>
                <div> Rp. 20.000</div>
                <div className=" flex gap-1 items-center">
                  <TbTruckDelivery />
                  Estimasi 1 - 1 hari
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
export default ShippingComponents;
