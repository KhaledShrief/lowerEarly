"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownTrigger, DropdownMenu, DropdownItem, Dropdown } from "@nextui-org/react";
import { GoOrganization } from "react-icons/go";
import { GoTools } from "react-icons/go";
import { SiTestcafe } from "react-icons/si";
import { GiMechanicGarage } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { GiTyre } from "react-icons/gi";
import { FaCarBurst } from "react-icons/fa6";
import { TbCarTurbine } from "react-icons/tb";
import { CgSoftwareDownload } from "react-icons/cg";


const NavigationBar = () => {
    const currentPath = usePathname();



    return (
        <Navbar className=" border-b-1 bg-[#FFAD60] text-black border-gray-700 opacity-[0.8] ">
            <NavbarBrand >
                <Image src="/lower_earley-logo.png" width={250} height={200} />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 font-extrabold" justify="center">
                <NavbarItem isActive={currentPath === "/" ? true : false}>
                    <Link color={`${currentPath === "/" ? "primary" : "foreground"}`} href="/" aria-current="page" className="flex gap-1 text-black">
                        <GoOrganization className="w-5 h-5" />
                        Lower Earley MOT&apos;s
                    </Link>
                </NavbarItem>
                {/* <NavbarItem isActive={currentPath === "/mot-testing" ? true : false}>
                    <Link href="https://lowerearleymots.co.uk/bookings" color={`${currentPath === "/mot-testing" ? "primary" : "foreground"}`} className="flex gap-1 text-black">
                        <SiTestcafe className="w-5 h-5" />

                        MOT Testing
                    </Link>
                </NavbarItem> */}
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-black font-extrabold"
                                endContent={<IoIosArrowDown className="w-5 h-5" />}
                                radius="sm"
                                variant="light"
                            >
                                <SiTestcafe className="w-5 h-5" />
                                MOT Testing
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="injector-testing"
                            className="text-white"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<img src="/images.png" className="w-5 h-5" />}
                            href="https://lowerearleymots.co.uk/bookings"
                        >

                            Booking
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
                <NavbarItem isActive={currentPath === "/cga-parts" ? true : false}>
                    <Link color={`${currentPath === "/cga-parts" ? "primary" : "foreground"}`} href="https://cgaparts.lowerearleymots.co.uk/" className="flex gap-1 text-black">
                        <GiMechanicGarage className="w-5 h-5" />

                        CGA Parts
                    </Link>
                </NavbarItem>
                {/* <NavbarItem isActive={currentPath === "/side-services" ? true : false}>
                    <Link color={`${currentPath === "/side-services" ? "primary" : "foreground"}`} href="/side-services" className="flex gap-1 text-black">
                        <GoTools className="w-5 h-5" />
                        Side Services
                    </Link>
                </NavbarItem> */}
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-black font-extrabold"
                                endContent={<IoIosArrowDown className="w-5 h-5" />}
                                radius="sm"
                                variant="light"
                            >
                                <GoTools className="w-5 h-5" />
                                Side Services
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="dpf"
                            className="text-white"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<FaCarBurst className="w-5 h-5" />}
                            href="/dpf"
                        >

                            DPF

                        </DropdownItem>
                        <DropdownItem
                            key="air-condition"
                            className="text-white"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<MdAir className="w-5 h-5" />}
                            href="/air-condition"
                        >

                            Air Condition

                        </DropdownItem>
                        <DropdownItem
                            key="tyres"
                            className="text-white"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<GiTyre className="w-5 h-5" />}
                            href="/tyres"
                        >

                            Tyres

                        </DropdownItem>
                        <DropdownItem
                            key="injector-testing"
                            className="text-white"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<TbCarTurbine className="w-5 h-5" />}
                            href="/injector-testing"
                        >

                            Injector Testing

                        </DropdownItem>
                        <DropdownItem
                            key="software"
                            className="text-white"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<CgSoftwareDownload className="w-5 h-5" />}
                            href="/software"
                        >
                            Software
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}

export default NavigationBar;