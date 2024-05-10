"use client";
import { Card } from "@material-tailwind/react";

function CategoriesComponent() {
  return (
    <>
      <div className="flex justify-center gap-10 m-20">
        <a href="" className="w-52">
          <Card className="h-full overflow-hidden">
            <div className="m-0 h-3/4 rounded-none">
              <img
                src="https://www.home-designing.com/wp-content/uploads/2021/10/slatted-headboard-wall.jpg"
                alt="bedroom"
                className="h-full object-cover"
              />
            </div>
            <div>
              <h2 className="flex justify-center px-4 py-2">
                Bedroom Furniture
              </h2>
            </div>
          </Card>
        </a>

        <a href="" className="w-52">
          <Card className="h-full overflow-hidden">
            <div className="m-0 h-3/4 rounded-none">
              <img
                src="https://img.freepik.com/premium-photo/bathroom-interior-architecture-minimalist-style_60401-710.jpg"
                alt="bathroom"
                className="h-full object-cover"
              />
            </div>
            <div>
              <h2 className="flex justify-center px-4 py-2">
                Bathroom Furniture
              </h2>
            </div>
          </Card>
        </a>

        <a href="" className="w-52">
          <Card className="h-full overflow-hidden">
            <div className="m-0 h-3/4 rounded-none">
              <img
                src="https://www.thespruce.com/thmb/eTjEURSHcrDEW51dUVwOW4t9jZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/morsa-images-getty-header-cb5d4e106c994631853c0a2d151c1a00.jpg"
                alt="livingroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="flex justify-center px-4 py-2">
                livingroom Furniture
              </h2>
            </div>
          </Card>
        </a>

        <a href="" className="w-52">
          <Card className="h-full overflow-hidden">
            <div className="m-0 h-3/4 rounded-none">
              <img
                src="https://www.modholic.in/cdn/shop/files/MD-1012-BEI_07_23f9a9fa-7c43-4baa-aefe-2430abf3c0fd.jpg?v=1700155998&width=1445"
                alt="diningroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="flex justify-center px-4 py-2">
                Diningroom Furniture
              </h2>
            </div>
          </Card>
        </a>

        <a href="" className="w-52">
          <Card className="h-full overflow-hidden">
            <div className="m-0 h-3/4 rounded-none">
              <img
                src="https://kitchensolvers.com/wp-content/uploads/2024/03/AdobeStock_571310066-scaled.jpeg"
                alt="kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="flex justify-center px-4 py-2">
                Kitchen Furniture
              </h2>
            </div>
          </Card>
        </a>

        <a href="" className="w-52">
          <Card className="h-full overflow-hidden">
            <div className="m-0 h-3/4 rounded-none">
              <img
                src="https://grangettos.com/cdn/shop/articles/shutterstock_603854654_1600x.jpg?v=1617923298"
                alt="gardening"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="flex justify-center px-4 py-2">Gardening</h2>
            </div>
          </Card>
        </a>
      </div>
    </>
  );
}
export default CategoriesComponent;
