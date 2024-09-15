const Tyres = () => {
    return <div className="p-10 flex-col gap-20 flex bg-gray-200">
        <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
            <header className="flex  gap-1 items-center justify-center w-full h-fit">
                <div className="flex-[0.5]  border-b-2 border-gray-500 p-8">

                    <h1 className="text-3xl text-gray-500  font-bold">
                        Need New Tyres and don’t want to pay over the top for them?
                    </h1>
                </div>
                <div className="flex-[0.5] flex justify-center">

                    <img src="/IconTyre.jpg" className="h-[20vh] w-[30vh]" />
                </div>

            </header>
            <article className="flex  gap-4 items-center  w-full h-fit">
                <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                    <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                        <li className="text-xl text-gray-500 font-bold">We offer customers very competitively priced tyres which we will fit using our brand new 3D alignment system Perfectly tracked and balanced to make sure you get the best possible long lasting</li>
                        <li className="text-xl text-gray-500 font-bold">Why not call us on 0118 931 2220 for a quote today</li>
                        <li className="text-xl text-gray-500 font-bold">Free Tyre Check We offer a free tyre safety test to all our customers. We will check that your tyres are not below the legal limit, not damaged, showing signs of ageing, wearing abnormally and we ensure that the tyres fitted are suitable for your vehicle.</li>

                    </ul>

                </div>
                <div className="flex-[0.5] flex justify-end h-fit">
                    <img src="/tyre2.jfif" className="w-[80%] h-[250px] rounded-2xl" />
                </div>

            </article>
        </section>
    </div>
}
export default Tyres