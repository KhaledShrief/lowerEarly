"use client";
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input } from "@nextui-org/react";
import useMainUser from "./hooks/mainUser"; // Import the hook
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { TbDragDrop } from "react-icons/tb";
import { useRef } from 'react';

export default function Home() {

  const session = useMainUser(); // Use the hook to fetch session data
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay(2000)]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Track the item being edited
  const [carousel, setCarousel] = useState([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  const carouselData = async () => {
    const response = await fetch("https://end-game-three.vercel.app/carsuel");
    const data = await response.json();
    setCarousel(data);
    return data;
  }


  const getData = async () => {
    const response = await fetch("https://end-game-three.vercel.app/home");
    const data = await response.json();
    setData(data);
    return data;
  }

  useEffect(() => {
    getData();
    carouselData();
  }, []);
  console.log(carousel, "carousel")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get('new-image'));
    try {
      const response = await fetch(`https://end-game-three.vercel.app/main-data/${formData.get('id')}`, {
        method: "PUT",
        body: formData
      });

      if (response.ok) {
        const updatedItem = await response.json(); // Get updated data from the server
        setData((prevData) => {
          // Update the data array with the modified item
          return prevData.map(item =>
            item._id === updatedItem._id ? updatedItem : item
          );
        });
        onOpenChange(false); // Close the modal after successful submission
      } else {
        console.error("Error updating data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleEdit = (item) => {
    setSelectedItem(item); // Set the selected item for the modal
    onOpen(); // Open the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem((prev) => ({
      ...prev,
      [name]: value, // Update the field being changed
    }));
  };


  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleClick = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };
  const handleClick2 = () => {
    // Trigger the file input click
    fileInputRef2.current.click();
  };

  const handleFileChange2 = (event, id) => {
    // Handle the selected file here
    const upload = event.target.files[0];
    const formData = new FormData();
    formData.append('replace-image', upload);
    if (upload) {
      fetch(`https://end-game-three.vercel.app/replacing-image/${id}`, {
        method: 'Put',
        body: formData,

      })
        .then((response) => response.json())
        .then((data) => {
          setCarousel((prev) => prev.map((item) => (item._id === id ? data : item))); // Replace the image data
        });
    }
  };
  const handleFileChange = (event) => {
    // Handle the selected file here
    const file = event.target.files[0];

  };

  const handelDelete = async (id) => {
    const response = await fetch(`https://end-game-three.vercel.app/delete-image/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setCarousel((prev) => prev.filter((item) => item._id !== id));
    } else {
      console.error("Error deleting data");
    }
    console.log("delete");
  }

  const addImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://end-game-three.vercel.app/adding-image", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      setCarousel((prev) => [...prev, data]);
      console.log(data);
    } else {
      console.error("Error adding data");
    }
  };
  return (
    <div className="p-10 flex-col gap-3 flex bg-gray-200">
      <div className="embla " >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-0">
            {carousel.map((image) => {
              return (
                <div className="embla__slide relative" key={image._id}>
                  <img className='rounded-2xl ' src={image.image} alt="1" width={400} height={200} />

                  {session && (
                    <div className='w-full h-fit absolute top-2  px-7 flex justify-center '>
                      <div className='h-fit w-full flex justify-between py-1 px-2 text-white items-center rounded-md bg-slate-950'>
                        <button className='p-1 rounded-md border-1 border-gray-600' onClick={handleClick2} >
                          <input type='file' className='hidden' name='replace-image' ref={fileInputRef2} onChange={(e) => handleFileChange2(e, image._id)} />
                          <FaArrowRotateRight className='h-4 w-4 text-gray-300' />
                        </button>


                        <TbDragDrop className='h-4 w-4 text-gray-300' />


                        <button className='p-1 rounded-md border-1 border-gray-600' onClick={() => handelDelete(image._id)} >

                          <FaTrashAlt className='h-4 w-4 text-red-800' />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
            {session && (
              <div className="embla__slide ">
                <img className='rounded-2xl cursor-pointer' src="/plus.png" alt="1" width={400} height={200} onClick={handleClick} />
                <form onSubmit={addImage}>

                  <input type='file' className='hidden' name='new-image' ref={fileInputRef} onChange={handleFileChange} />
                  <Button variant='shadow' color='primary' type='submit'>Save</Button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className='flex w-full justify-between   px-[20rem] py-3'>

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

      {data.map((item) => {
        return (
          <section key={item._id} className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
            <header className="flex flex-col gap-4 items-center justify-center w-full h-fit">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="text-xl text-gray-500">{item.header}</p>
            </header>
            <article className="flex gap-4 items-center w-full h-fit">
              <div className="flex-[0.15] h-fit">
                <img src={item.image} className="w-full h-[200px] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center flex-[0.85] h-fit">
                <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                  <li className="text-xl text-gray-500 font-bold">{item.content}</li>
                  {item.advise.length > 0 && item.advise.map((a, index) => <li key={index}>{a}</li>)}
                </ul>
              </div>
            </article>
            {session && (
              <>
                <div className='w-full h-fit flex justify-end'>
                  <Button variant='shadow' color='primary' onPress={() => handleEdit(item)}>Edit</Button>
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true} size='4xl' isKeyboardDismissDisabled={true}>
                  <ModalContent className='relative z-[-1]'>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Edit</ModalHeader>
                        <form onSubmit={handleSubmit}>
                          <ModalBody>
                            {selectedItem && (
                              <>
                                <Input
                                  type="text"
                                  name="title"
                                  value={selectedItem.title}
                                  onChange={handleInputChange} // Allow editing the title
                                />
                                <Textarea
                                  name="header"
                                  value={selectedItem.header}
                                  onChange={handleInputChange} // Allow editing the header
                                >
                                  {selectedItem.header}
                                </Textarea>
                                <Textarea
                                  name="content"
                                  value={selectedItem.content}
                                  onChange={handleInputChange} // Allow editing the content
                                >
                                  {selectedItem.content}
                                </Textarea>
                                {selectedItem.advise.length > 0 &&
                                  selectedItem.advise.map((a, index) => (
                                    <Textarea
                                      key={index}
                                      name="advise"
                                      value={a}
                                      onChange={(e) => {
                                        const newAdvise = [...selectedItem.advise];
                                        newAdvise[index] = e.target.value; // Update individual advise items
                                        setSelectedItem((prev) => ({
                                          ...prev,
                                          advise: newAdvise,
                                        }));
                                      }}
                                    >
                                      {a}
                                    </Textarea>
                                  ))}
                                <Input type="file" name="new-image" />
                                <img src={selectedItem.image} width={300} height={300} />
                                <input type="hidden" name="image" value={selectedItem.image} />
                                <input type="hidden" name="id" value={selectedItem._id} />
                              </>
                            )}
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                              Close
                            </Button>
                            <Button color="primary" type="submit" onPress={onClose}>
                              Save
                            </Button>
                          </ModalFooter>
                        </form>;

                      </>
                    )}
                  </ModalContent>
                </Modal>
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}
