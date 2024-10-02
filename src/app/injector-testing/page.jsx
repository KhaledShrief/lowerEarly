"use client";
import { useEffect, useState } from "react";
import useMainUser from "../hooks/mainUser";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";

const InjectorTesting = () => {
    const [data, setData] = useState([]);
    const session = useMainUser();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const getData = async () => {
        const response = await fetch("https://end-game-three.vercel.app/injector-testing");
        const data = await response.json();
        setData(data);
        return data;

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get('new-image'));
        try {
            const response = await fetch(`https://end-game-three.vercel.app/injector-testing/${formData.get('id')}`, {
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

    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    return (<div className="p-10 flex-col gap-20 flex bg-gray-200">
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

                        </div>

                    </header>
                    <article className="flex  gap-4 items-center  w-full h-fit">
                        <div className="flex flex-col gap-4 items-center justify-center flex-[0.8] h-fit">
                            <ul className="flex flex-col gap-8 items-center justify-center w-full h-fit">
                                <li className="text-xl text-gray-500 font-bold">{item.content}</li>

                            </ul>

                        </div>
                        <div className="flex-[0.2] flex justify-end h-fit">
                            <img src={item.image} className="w-full h-[350px] rounded-2xl" />
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

                                                    <Input value={selectedItem.title} name="title" onChange={(e) => { handelChange(e) }} />
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

    </div>)
};

export default InjectorTesting;