import React, {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

import Author from "./Author";

import {ICard} from "../types";

const DialogCard = (props: { card: ICard, modalClose: () => void, opened: boolean }) => {
    const {card, modalClose, opened} = props;
    return (
        <>
            <Transition appear show={opened} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={modalClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform transition-all overflow-hidden align-middle
rounded-md bg-white text-left  shadow-xl  p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium text-gray-900"
                                    >
                                        {card.label}
                                    </Dialog.Title>

                                    <div className="mt-4 bg-slate-500">
                                        <img className="w-full object-cover"
                                             src={card.image}
                                             alt={card.label}/>
                                    </div>
                                    <Dialog.Description
                                        as="p"
                                        className="mt-4 text-sm text-gray-500"
                                    >
                                        {card.description}
                                    </Dialog.Description>
                                    <div className="flex items-center justify-between mt-4">
                                        <Author author={card.author}/>
                                        <a href={card.link} target="_blank" rel="noreferrer"
                                           className="px-4 py-2 text-md font-medium text-white
                                            rounded-md border border-transparent 
                                            bg-blue-500 hover:bg-blue-400">
                                            Buy
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
export default DialogCard;











