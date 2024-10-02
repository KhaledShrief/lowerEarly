"use client"
import React, { useState, useEffect } from 'react'
import useMainUser from '../hooks/mainUser';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";

const Software = () => {
    const [data, setData] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const session = useMainUser();
    useEffect(() => {
        fetch('https://end-game-three.vercel.app/software')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    console.log(data)


    const handelChange = (e) => {
        const { name, value } = e.target;
        setSelectedItem((prev) => ({
            ...prev,
            [name]: value, // Update the field being changed
        }));
    };
    const handleEdit = (item) => {
        setSelectedItem(item); // Set the selected item for the modal
        onOpen(); // Open the modal
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get('new-image'));
        try {
            const response = await fetch(`https://end-game-three.vercel.app/software/${formData.get('id')}`, {
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
            console.log(updatedItem);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="p-10 flex-col gap-20 flex bg-gray-200">
            {data.map((item) => {
                return (
                    <section key={item._id} className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
                        <header className="flex  gap-1 items-center justify-center w-full h-fit">

                        </header>
                        <article className="flex  gap-4 items-center  w-full h-fit">
                            <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                                <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                                    <li className="text-xl text-gray-500 font-bold">{item.content}</li>


                                </ul>

                            </div>
                            <div className="flex-[0.5] flex justify-end h-fit">
                                <img src={item.image} className="w-[50%] h-[250px] rounded-2xl" />
                            </div>

                        </article>
                        {session && (
                            <>
                                <div className='w-full h-fit flex justify-end'>

                                    <Button onPress={() => handleEdit(item)} variant="shadow" color="primary">Edit</Button>
                                </div>
                                <Modal size="5xl" className="text-white" isOpen={isOpen} onOpenChange={onOpenChange}>
                                    <ModalContent>
                                        {(onClose) => (
                                            <>
                                                <ModalHeader className="flex flex-col gap-1">Edit</ModalHeader>
                                                <form onSubmit={handleSubmit}>
                                                    <ModalBody>

                                                        <Textarea value={selectedItem.content} name="content" onChange={(e) => { handelChange(e) }}></Textarea>
                                                        <Input type="file" name="new-image" />
                                                        <Input type="hidden" name="id" value={selectedItem._id} />
                                                        <img src={selectedItem.image} width={300} name="image" height={300} />
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="light" onPress={onClose}>
                                                            Close
                                                        </Button>
                                                        <Button color="primary" type="submit" onPress={onClose}>
                                                            Save
                                                        </Button>
                                                    </ModalFooter>
                                                </form>
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                            </>

                        )}
                    </section>
                )
            })}
        </div>
    )
}
export default Software