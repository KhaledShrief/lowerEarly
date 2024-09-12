"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { GoOrganization } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { SiTestcafe } from "react-icons/si";
import { GiMechanicGarage } from "react-icons/gi";
import { usePathname } from "next/navigation";


const NavigationBar = () => {
    const currentPath = usePathname();



    return (
        <Navbar className="p-3 border-b-1 bg-[#FFAD60] text-black border-gray-700 opacity-[0.8] ">
            <NavbarBrand >
                <div className="flex justify-center flex-col  items-center w-fit h-[100px]">
                    <h1 className="text-white font-bold text-[20px]">Lower Early</h1>
                    <p className=" font-serif relative top-[-12px] text-orange-500">The Art of Car Checks.</p>
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 font-extrabold" justify="center">
                <NavbarItem isActive={currentPath === "/" ? true : false}>
                    <Link color={`${currentPath === "/" ? "primary" : "foreground"}`} href="/" aria-current="page" className="flex gap-1 text-black">
                        <GoOrganization className="w-5 h-5" />
                        Lower Early MOT's
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentPath === "/mot-testing" ? true : false}>
                    <Link href="/mot-testing" color={`${currentPath === "/mot-testing" ? "primary" : "foreground"}`} className="flex gap-1 text-black">
                        <SiTestcafe className="w-5 h-5" />

                        MOT Testing
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentPath === "/cga-parts" ? true : false}>
                    <Link color={`${currentPath === "/cga-parts" ? "primary" : "foreground"}`} href="/cga-parts" className="flex gap-1 text-black">
                        <GiMechanicGarage className="w-5 h-5" />

                        CGA Part
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentPath === "/side-services" ? true : false}>
                    <Link color={`${currentPath === "/side-services" ? "primary" : "foreground"}`} href="/side-services" className="flex gap-1 text-black">
                        <GoTools className="w-5 h-5" />
                        Side Services
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} color={`${currentPath === "/login" ? "primary" : "default"}`} href="/login" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color={`${currentPath === "/signup" ? "primary" : "default"}`} href="/signup" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavigationBar;