import BentoComponents from "@/components/home/bento";
import CarouselComponent from "@/components/home/carousel";
import CategoriesComponent from "@/components/home/categories";
import DrawerComponent from "@/components/home/drawer";
import FooterComponent from "@/components/home/footer";
import LastChanceComponent from "@/components/home/lastchance";
import NavbarComponent from "@/components/home/navbar";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <DrawerComponent />
      <CarouselComponent />
      <CategoriesComponent />
      <LastChanceComponent />
      <BentoComponents />
      <FooterComponent />
    </>
  );
}
