"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Carousel,
} from "@material-tailwind/react";

function LastChanceComponent() {
  const list = (
    <>
      <Card className="w-full h-[300px] xl:h-[480px] lg:h-[400px] md:h-[350px]">
        <CardHeader shadow={false} floated={false} className="h-3/4">
          <img
            src="https://siopen.balangankab.go.id/storage/merchant/products/2024/02/19/f9966c041c5c6f7bcf5a7b22244bd046.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              Apple AirPods
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              $95.00
            </Typography>
          </div>
          <p
            variant="small"
            color="gray"
            className="hidden lg:flex font-normal opacity-75 text-xs lg:text-md md:text-sm"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            <p className="text-xs top-0">Add to Cart</p>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full h-[300px] xl:h-[480px] lg:h-[400px] md:h-[350px]">
        <CardHeader shadow={false} floated={false} className="h-3/4">
          <img
            src="https://ae01.alicdn.com/kf/Sbac83274a16a4948a2d606e0f2fd9500v/Bel-pintu-anjing-cantik-kayu-lonceng-angin-Jepang-bel-pintu-gantung-dinding-dekorasi-bel-pintu-masuk.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              Apple AirPods
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              $95.00
            </Typography>
          </div>
          <p
            variant="small"
            color="gray"
            className="hidden lg:flex font-normal opacity-75 text-xs lg:text-md md:text-sm"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full h-[300px] xl:h-[480px] lg:h-[400px] md:h-[350px]">
        <CardHeader shadow={false} floated={false} className="h-3/4">
          <img
            src="https://res.cloudinary.com/ruparupa-com/image/upload/w_360,h_360,f_auto,q_auto/f_auto,q_auto:eco/v1476943652/249486_1.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              Apple AirPods
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              $95.00
            </Typography>
          </div>
          <p
            variant="small"
            color="gray"
            className="hidden lg:flex font-normal opacity-75 text-xs lg:text-md md:text-sm"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full h-[300px] xl:h-[480px] lg:h-[400px] md:h-[350px]">
        <CardHeader shadow={false} floated={false} className="h-3/4">
          <img
            src="https://i0.wp.com/www.niagasinarsentosa.co.id/wp-content/uploads/2021/02/sementigaroda-copy.png?fit=500%2C500&ssl=1"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              Apple AirPods
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium text-sm lg:text-base md:text-md"
            >
              $95.00
            </Typography>
          </div>
          <p
            variant="small"
            color="gray"
            className="hidden lg:flex font-normal opacity-75 text-xs lg:text-md md:text-sm"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
  return (
    <>
      <main className="mx-3 my-20 lg:mx-20 md:mx-8">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold my-8 flex justify-center">
          LAST CHANCE!
        </h1>
        <div className="grid grid-cols-2 md:flex justify-center h-full gap-3 xl:gap-6 lg:gap-2 md:gap-2">
          {list}
        </div>
      </main>
    </>
  );
}
export default LastChanceComponent;
