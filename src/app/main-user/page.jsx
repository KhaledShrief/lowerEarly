"use client";
import { Button, Input } from "@nextui-org/react";

const MainUser = () => {


    return (
        <div className="p-10 flex-col gap-20 flex bg-gray-200">

            <section className="flex flex-col gap-10 w-full h-fit p-10 bg-gray-400 rounded-2xl shadow-2xl">
                <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

                    <h1 className="text-3xl font-bold">
                        Login
                    </h1>
                </header>
                <form method="POST" action="https://end-game-three.vercel.app/main-user" className="flex  gap-4 items-center   flex-col w-full h-fit">
                    <Input type="text" label="Username" name="username" />
                    <Input type="password" label="password" name="password" />
                    <Button type="submit" variant="solid" color="primary" > Login </Button>
                </form>
            </section>
        </div>
    );
};

export default MainUser;