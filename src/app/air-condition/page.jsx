"use client"
import { MdAir } from "react-icons/md";
import React, { useState, useEffect } from 'react'
import useMainUser from '../hooks/mainUser';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";

const AirCondition = () => {

    const [data, setData] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const session = useMainUser();
    useEffect(() => {
        fetch('https://end-game-three.vercel.app/air')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

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
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(e.target); // Creates a new FormData object with the form
        formData.append('id', selectedItem._id); // Ensure the ID is added to the formData

        try {
            const response = await fetch(`https://end-game-three.vercel.app/air/${selectedItem._id}`, {
                method: "PUT",
                body: formData, // FormData contains both text and file data
            });
            if (response.ok) {
                const updatedItem = await response.json();
                setData((prevData) =>
                    prevData.map(item =>
                        item._id === updatedItem._id ? updatedItem : item
                    )
                );
                onOpenChange(false); // Close modal
            } else {
                console.error("Error updating data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    ;


    console.log(data)
    return <div className="p-10 flex-col gap-20 flex bg-gray-200">
        {data.map((item) => {
            return (
                <section key={item._id} className="flex flex-col gap-10 w-full h-fit p-10 bg-white rounded-2xl shadow-2xl">
                    <header className="flex  gap-1 items-center justify-center w-full h-fit">
                        <div className="flex-[0.5]  border-b-2 border-gray-500 p-8">

                            <h1 className="text-3xl text-gray-500  font-bold">
                                {item.title}
                            </h1>
                        </div>
                        <div className="flex-[0.5] flex justify-center">
                            <MdAir className="h-[20vh] text-yellow-400 w-[30vh]" />
                        </div>
                    </header>
                    <article className="flex  gap-4 items-start  w-full h-full">
                        <div className="flex flex-col gap-4 items-center justify-center flex-[0.5] h-fit">
                            <ul className="flex flex-col gap-8 items-start justify-start w-full h-fit">
                                <li className="text-xl text-gray-500 font-bold">{item.content}</li>

                                <li className="text-xl text-gray-500 font-bold">{item.questionOne}</li>
                                <li className="text-xl text-gray-500 font-bold">{item.answerOne}</li>
                                <li className="text-xl text-gray-500 font-bold">{item.questionTwo}</li>
                                <li className="text-xl text-gray-500 font-bold">{item.answerTwo}</li>
                                <li className="text-xl text-gray-500 font-bold">{item.questionThree}</li>
                                <li className="text-xl text-gray-500 font-bold">{item.answerThree}</li>


                            </ul>

                        </div>
                        <div className="flex-[0.5] flex h-full">
                            <img src={item.image} className="w-full h-[450px] rounded-2xl" />
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
                                                <ModalBody className="overflow-y-scroll max-h-[50vh]">

                                                    <Input type="text" name="title" onChange={(e) => { handelChange(e) }} value={selectedItem.title} />
                                                    <Textarea value={selectedItem.content} name="content" onChange={(e) => { handelChange(e) }}></Textarea>

                                                    <Textarea value={selectedItem.questionOne} name="questionOne" onChange={(e) => { handelChange(e) }}></Textarea>
                                                    <Textarea value={selectedItem.answerOne} name="answerOne" onChange={(e) => { handelChange(e) }}></Textarea>
                                                    <Textarea value={selectedItem.questionTwo} name="questionTwo" onChange={(e) => { handelChange(e) }}></Textarea>
                                                    <Textarea value={selectedItem.answerTwo} name="answerTwo" onChange={(e) => { handelChange(e) }}></Textarea>
                                                    <Textarea value={selectedItem.questionThree} name="questionThree" onChange={(e) => { handelChange(e) }}></Textarea>
                                                    <Textarea value={selectedItem.answerThree} name="answerThree" onChange={(e) => { handelChange(e) }}></Textarea>


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
}
export default AirCondition