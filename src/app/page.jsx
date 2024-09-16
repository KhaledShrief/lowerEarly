"use client";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Link from 'next/link';


export default function Home() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay(2000)])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className="p-10 flex-col gap-3 flex bg-gray-200">

      <div className="embla " >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-0">
            <div className="embla__slide">
              <Image className='rounded-2xl ' src="/car.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/chris.jpg" alt="1" width={400} height={150} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/DSCF1505-scaled-1024x615.jpg" alt="1" width={400} height={150} />
            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/gemy2.jpeg" alt="1" width={400} height={200} />

            </div>

            <div className="embla__slide">
              <Image className='rounded-2xl' src="/DSCF1526-scaled-1024x615.jpg" alt="1" width={400} height={200} />
            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/andrew-picture-448x269.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/car1.png" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/jimy.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/Rolling-photo--scaled-1024x615.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/Julie.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/car2.png" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/ping.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/car3.png" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='rounded-2xl' src="/justin.jpg" alt="1" width={400} height={200} />

            </div>
          </div>
        </div>
        <div className='flex w-full justify-between   px-40 py-2'>

          <button className="embla__prev items-center  flex gap-2" onClick={scrollPrev}>
            <GoArrowLeft className='w-10 h-10 border-1 border-black  p-1 rounded-full' />
            <div>
              Previous
            </div>
          </button>
          <button className="embla__next items-center flex gap-2" onClick={scrollNext}>
            <div>
              Next
            </div>
            <GoArrowRight className='w-10 h-10 border-1 border-black  p-1 rounded-full' />
          </button>
        </div>
      </div>

      <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
        <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

          <h1 className="text-3xl font-bold">
            Looking after you

          </h1>
          <p className="text-xl text-gray-500">
            Lower Earley MOTs is a family run business owned and operated by mother andJulie - Lower Earley MOTs son, Julie Freebody and Andrew Aldridge. Julie is there to take care of customers and runs the office and Andrew is Chief Mechanic and Workshop Manager.            </p>
        </header>
        <article className="flex  gap-4 items-center  w-full h-fit">
          <div className="flex-[0.15] h-fit">
            <img src="/Julie.jpg" className="w-full h-[200px] rounded-2xl" />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center flex-[0.85] h-fit">
            <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
              <li className="text-xl text-gray-500 font-bold">
                Julie is no stranger to the motor trade with her family owning and running a motor repairs and MOT station in Shiplake for the last 40 years. Julie worked as their office manager for the last 16 years and during her time there has enjoyed close working relationships with her customers who return with their cars year on year. Julie prides herself on her willingness to go the extra mile for her customers, nothing is too much trouble. She will do her very best to answer all of your questions and to see that you are properly looked after a while you are visiting Lower Earley MOTs. Julie has created a welcoming reception area at Lower Earley MOTs so that you can relax while your car is being MOT’d or serviced. There is tea and coffee available, TV and Wi-Fi to keep you amused alternatively, if it’s a longer job you might like to take advantage of a courtesy car or bicycle if there is somewhere you need to be.
              </li>
            </ul>

          </div>


        </article>
      </section>

      <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
        <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

          <h1 className="text-3xl font-bold">
            Looking after your car – our workshop team


          </h1>
          <p className="text-xl text-gray-500">
            Andrew Aldridge –Workshop Manager, Chief Mechanic and MOT tester
          </p>
        </header>
        <article className="flex  gap-4 items-center  w-full h-fit">
          <div className="flex-[0.2] h-fit">
            <img src="/andrew-picture-448x269.jpg" className="w-full h-[200px] rounded-2xl" />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center flex-[0.8] h-fit">
            <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
              <li className="text-xl text-gray-500 font-bold">
                Andrew is highly skilled to NVQ level 3 in Engineering Maintenance in Mechanical and Electrical Engineering. He is an MOT approved tester for class 4 and 7 vehicles and has nearly a decade of experience working in the motor repair industry. Recent experience includes working at a BMW specialist garage where he is particularly well known for his expertise with diagnostics and fault finding.</li>
            </ul>

          </div>


        </article>
      </section>

      <section className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
        <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">

          <h1 className="text-3xl font-bold">
            Service Policy

          </h1>
          <p className="text-xl text-gray-500">
            Lower Earley MOTs Ltd offers local people the opportunity to have their cars repaired, serviced, and MOT’d on their doorstep.

            Just a few minutes’ walk from Asda, Lower Earley MOT ltd can provide all your car servicing needs as well as your annual MOT test.
          </p>
        </header>
        <article className="flex  gap-4 items-center  w-full h-fit">

          <div className="flex flex-col gap-4 items-center justify-center h-fit">
            <ul className="flex flex-col gap-8  w-full h-fit">
              <li className="text-xl text-gray-500 font-bold">
                “Why we are not like other garages” – our Servicing Policy by Andrew Aldridge Workshop Manager and Chief Technician
              </li>
              <li className="text-xl text-gray-500 font-bold">
                “Whatever you drive Lower Earley Mots can take care of it for you. We keep it simple too”
              </li>
              <li className="text-xl text-gray-500 font-bold">
                We offer a high quality Annual Service which is comparable to a full service anywhere else. When your car needs a bit more we simply add what it needs onto the service with our Service +.
              </li>
              <li className="text-xl text-gray-500 font-bold">
                If you do very little mileage, we offer “Essential Care” to change the oil and filter and do some basic safety checks. At a cost from £150 plus VAT.
              </li>
              <li className="text-xl text-gray-500 font-bold">
                You chose what best suits you and there are no hidden charges. We tell you exactly what it is going to cost you, upfront.
              </li>
              <li className="text-xl text-gray-500 font-bold">
                Unlike other garages when you book your vehicle in for a service with Lower Earley MOTs we will send you an email or text confirming the exact cost of the labour and the parts we will require to complete your service. This will include: the supply of the oil, the disposal of your used oil, all filters required, spark plugs, screen wash and antifreeze top up.
              </li>
              <li className="text-xl text-gray-500 font-bold">

                We will not waste your money replacing parts that still have plenty of life left in them so you can expect your final bill to be even lower if this is the case.
              </li>
              <li className="text-xl text-gray-500 font-bold">
                All labour is charged at £65 plus VAT per hour which we cap to two hours for Annual Servicing which means you never pay more even if it takes us longer!”
              </li>
              <li className=" flex gap-2 items-center ">
                <img src='/handshake.jpg' className='h-[8vh] w-[8vh]' /> <p className=' text-xl text-gray-500 font-bold'>
                  We are committed to excellence in customer care and aim to never let a customer walk away having experienced less than an excellent service. We want you to enjoy visiting us with your car and try to make the whole process as simple and easy for you as possible.
                </p>
              </li>
              <li className=" flex gap-2 items-center ">
                <img src='/handshake.jpg' className='h-[8vh] w-[8vh]' /> <p className=' text-xl text-gray-500 font-bold'>
                  Our staff are never too busy to talk through the service and maintenance of your car. All of our technicians work to the highest standards of competency and we guarantee all of our work for 12 months.
                </p>
              </li>
              <li className=" flex gap-2 items-center ">
                <img src='/handshake.jpg' className='h-[8vh] w-[8vh]' /> <p className=' text-xl text-gray-500 font-bold'>
                  In respect of parts, we only use only the highest-quality parts, manufactured to manufacturers’ original specification and we use high grade oils and fluids. All of our suppliers offer a guarantee and usually this is for 12months. However, this is dependant on the vehicle doing reasonable mileage during that period which is why we keep a note of your mileage on the date of any replacement parts being fitted.
                </p>
              </li>
              <li className=" flex gap-2 items-center ">
                <img src='/handshake.jpg' className='h-[8vh] w-[8vh]' /> <p className=' text-xl text-gray-500 font-bold'>
                  It doesn’t happen very often but if a part that we have fitted should need to be replaced by one of our suppliers we will deal with this on your behalf and we will not charge to refit the replacement.

                  (This policy does not replace your Consumer rights under the sale of Goods Act)                </p>
              </li>

            </ul>

          </div>


        </article>
      </section>

    </div>

  );
}
