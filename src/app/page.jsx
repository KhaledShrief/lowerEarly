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
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-0">
            <div className="embla__slide">
              <Image className='' src="/chris.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/DSCF1505-scaled-1024x615.jpg" alt="1" width={400} height={200} />
            </div>
            <div className="embla__slide">
              <Image className='' src="/gemy.jpg" alt="1" width={400} height={200} />

            </div>

            <div className="embla__slide">
              <Image className='' src="/DSCF1526-scaled-1024x615.jpg" alt="1" width={400} height={200} />
            </div>
            <div className="embla__slide">
              <Image className='' src="/andrew-picture-448x269.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/Air-con-pic--scaled-1024x615.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/jimy.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/Rolling-photo--scaled-1024x615.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/julie.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/Rolling-photos--scaled-1024x615.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/ping.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/Diagnostics-pic-scaled-1024x615.jpg" alt="1" width={400} height={200} />

            </div>
            <div className="embla__slide">
              <Image className='' src="/justin.jpg" alt="1" width={400} height={200} />

            </div>
          </div>
        </div>
        <div className='flex w-fit gap-2 p-2'>

          <button className="embla__prev border-1 border-black w-fit p-1 rounded-full" onClick={scrollPrev}>
            <GoArrowLeft className='w-5 h-5' />
          </button>
          <button className="embla__next border-1 border-black w-fit p-1 rounded-full" onClick={scrollNext}>
            <GoArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>

      <div className='w-full p-3 flex items-center h-fit justify-between'>
        <div className='flex-[0.5] p-2 flex-col gap-2 h-fit '>
          <h1>
            CONTACT ADDRESS
          </h1>
          <p>
            Lower Earley MOTs
          </p>
          <p>

            Cutbush Park Industrial Estate
          </p>
          <p>

            Lower Earley
            RG6 4UT
          </p>

          <h1>
            CONTACT DETAILS
          </h1>
          <p>

            Tel: 0118 931 2220
          </p>
          <p>

            Email: info@lowerearleymots.com
          </p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <Link className='text-red-500 underline' href="https://www.google.co.uk/maps/place/Reading,+Wokingham+RG6+4UT/@51.4208423,-0.9268754,18z/data=!3m1!4b1!4m2!3m1!1s0x4876835bc39c1c69:0x4e5c41064d4a84d5">
            Click here or on the image below for directions.
          </Link>
          <Link href="https://www.google.co.uk/maps/place/Reading,+Wokingham+RG6+4UT/@51.4208423,-0.9268754,18z/data=!3m1!4b1!4m2!3m1!1s0x4876835bc39c1c69:0x4e5c41064d4a84d5">
            <img src="/location-map-380x254.jpg" alt="logo" className='h-fit' />
          </Link>

        </div>
      </div>
    </>
  );
}
