const Dbf = () => {
    return <div className="p-10 flex-col gap-20 flex bg-gray-200">
        <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl">
            <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

                <h1 className="text-3xl font-bold">
                    DPF Cleaning

                </h1>
                <p className="text-xl text-gray-500">
                    Like any filter, your DPF can become blocked by engine produced particulates. The main constituent of these particulates is ‘Soot’!
                </p>
            </header>
            <article className="flex  gap-4 items-center  w-full h-fit">
                <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                    <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                        <li className="text-xl text-gray-500 font-bold">Cleaning the DPF – Cost £100.00 +VAT this is for a DPF already removed from a vehicle</li>
                        <li className="text-xl text-gray-500 font-bold">Removing the DPF and cleaning can also be done for you but please ring to get a quote</li>

                    </ul>

                </div>
                <div className="flex-[0.5] h-fit">
                    <video className="w-full h-[300px] rounded-2xl" controls autoPlay loop muted>
                        <source src="/dpf.mp4" type="video/mp4" />
                    </video>
                </div>

            </article>
        </section>
        <section className="flex flex-col gap-10 w-full h-fit bg-white p-10 rounded-2xl">
            <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

                <h1 className="text-3xl font-bold">
                    What’s a DPF?

                </h1>
                <p className="text-xl text-gray-500">
                    The modern diesel vehicles have seemingly vastly improved as they now run without the obligatory ‘black smoke’ which was the signature of the older diesel engines. This has been achieved by the manufacturers adding a Diesel Particulate Filter
                    (DPF) into the exhaust of the modern diesel vehicles, to catch the engine
                    particulates.
                </p>
            </header>
            <article className="flex  gap-4 items-center  w-full h-fit">
                <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                    <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                        <li className="text-xl text-gray-500 font-bold">The particulates are trapped when the car is driven at low speeds in the city centres, and whatever has been collected in the filter would then be blown out and expelled when the car is driven at higher speeds on the outer city roads and motor ways. So the when the modern diesel cars are driven at speed on the motorway, emitting a cloud of smoke, the chances are that its engine is working as it should and that the ECU is performing a ‘regeneration cycle’.</li>
                    </ul>

                </div>
                <div className="flex-[0.5] h-fit">
                    <video className="w-full h-[300px] rounded-2xl" controls autoPlay loop muted>
                        <source src="/dpf.mp4" type="video/mp4" />
                    </video>
                </div>

            </article>
        </section>
        <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl">
            <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

                <h1 className="text-3xl font-bold">
                    Why do DPFs get blocked up?

                </h1>
                <p className="text-xl text-gray-500">
                    There are two most likely causes for a blocked DPF. Firstly and most commonly if you travel relatively short distances in traffic and never take the car on dual carriageways and motorways at higher speeds                </p>
            </header>
            <article className="flex  gap-4 items-center  w-full h-fit">
                <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                    <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                        <li className="text-xl text-gray-500 font-bold">This will cause the vehicle to eventually slip into ‘Limp Mode’, and warning lights and messages will advise you to take the car to your nearest manufacturer supported dealer. Secondly the DPF may simply come to the end of its natural life. Even if you have driven plenty of motorway miles and you have been lucky to have experienced a chain of successful regenerations, a DPF will not last forever. Each ‘regeneration’ will leave a very fine layer of ash residue behind, and this will eventually become the cause of the ultimate blockage. Further forced regeneration cycles will not clear this. The units will need replacing sooner or later.</li>
                        <li className="text-xl text-gray-500 font-bold">A blocked DPF core fills the entire canister, causing the engine to work much harder than needed, in order to push the gasses through it. The more blocked it gets, the more back pressure it causes. The net result of the blockage in this instance was poor fuel economy and performance.</li>
                    </ul>

                </div>
                <div className="flex-[0.5] h-fit">
                    <video className="w-full h-[300px] rounded-2xl" controls autoPlay loop muted>
                        <source src="/dpf.mp4" type="video/mp4" />
                    </video>
                </div>

            </article>
        </section>
    </div>;
};

export default Dbf;