const InjectorTesting = () => {
    return (<div className="p-10 flex-col gap-20 flex bg-gray-200">
        <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
            <header className="flex  gap-1 items-center justify-center w-full h-fit">
                <div className="flex-[0.5]  border-b-2 border-gray-500 p-8">

                    <h1 className="text-3xl text-gray-500  font-bold">
                        Injector Testing
                    </h1>
                </div>
                <div className="flex-[0.5] flex justify-center">

                    {/* <img src="/IconTyre.jpg" className="h-[20vh] w-[30vh]" /> */}
                </div>

            </header>
            <article className="flex  gap-4 items-center  w-full h-fit">
                <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                    <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                        <li className="text-xl text-gray-500 font-bold">We are pleased to be able to now offer testing of diesel injectors £25+vat per injector and can do the majority of injectors (diesel only) on this machine</li>

                    </ul>

                </div>
                <div className="flex-[0.5] flex justify-end h-fit">
                    <img src="/injector.jpg" className="w-[60%] h-[350px] rounded-2xl" />
                </div>

            </article>
        </section>
    </div>)
};

export default InjectorTesting;