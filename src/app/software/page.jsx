import { CgSoftwareDownload } from "react-icons/cg";

const Software = () => {
    return (
        <div className="p-10 flex-col gap-20 flex bg-gray-200">
            <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
                <header className="flex  gap-1 items-center justify-center w-full h-fit">
                    {/* <div className="flex-[0.5]  border-b-2 border-gray-500 p-8">

                        <h1 className="text-3xl text-gray-500  font-bold">

                        </h1>
                    </div>
                    <div className="flex-[0.5] flex justify-end">

                        <CgSoftwareDownload className="h-[20vh] w-[30vh] text-yellow-400" />
                    </div> */}

                </header>
                <article className="flex  gap-4 items-center  w-full h-fit">
                    <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                        <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                            <li className="text-xl text-gray-500 font-bold">We are building garage management system and websites to your requirements</li>
                            <li className="text-xl text-gray-500 font-bold">Please Ask</li>

                        </ul>

                    </div>
                    <div className="flex-[0.5] flex justify-end h-fit">
                        <img src="/programing.jfif" className="w-[50%] h-[250px] rounded-2xl" />
                    </div>

                </article>
            </section>
        </div>
    )
}
export default Software