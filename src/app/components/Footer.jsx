import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Footer = () => {

    return (<>
        <div className="w-full h-fit bg-[#4E31AA] border-gray-800 border-t-1 p-10 flex flex-col justify-center items-center">
            <Card className="max-w-[340px]">
                <CardHeader className="justify-center">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                        </div>
                    </div>

                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                    </p>
                </CardBody>
                <CardFooter className="flex gap-1">
                    <FaStar className="text-orange-500 w-5 h-5" />
                    <FaStar className="text-orange-500 w-5 h-5" />
                    <FaStar className="text-orange-500 w-5 h-5" />
                    <FaStar className="text-orange-500 w-5 h-5" />
                    <FaStar className="text-orange-500 w-5 h-5" />

                </CardFooter>
            </Card>
        </div>
        <div className="w-full h-fit bg-[#4E31AA] border-gray-800 border-t-1 p-10 flex justify-center items-center">
            <div className="flex justify-between items-center">
                <div className="text-white text-center flex flex-col text-2xl flex[0.5]">
                    <Link href="#">Home</Link>
                    <Link href="#">Service Policy and About Us</Link>
                    <Link href="#">Contact Us</Link>
                </div>
                <div className="text-white text-center flex flex-col text-2xl flex[0.5]">
                    <Link href="#">Home</Link>
                    <Link href="#">Service Policy and About Us</Link>
                    <Link href="#">Contact Us</Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;