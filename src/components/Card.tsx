import React from "react";

import Author from "./Author";

import {ICard} from "../types";

const Card = (props: { card: ICard, modalOpen: (card: ICard) => void }) => {
    const {card, modalOpen} = props;

    const buyButtonClicked = () => modalOpen(card);

    return (
        <div
            className="flex flex-col justify-between 
            col-span-1 max-w-xs  overflow-hidden 
            bg-white rounded-lg shadow-md border-2">
            <div
                onClick={buyButtonClicked}
                className="cursor-pointer">
                <div className="bg-slate-500 h-60">
                    <img className="w-full max-h-60 object-cover"
                         src={card.image}
                         alt={card.label}/>
                </div>
                <p className="p-3 font-bold font-lg">
                    {card.label}
                </p>
            </div>
            <div className="flex items-center justify-between p-3 border-t-2">
                <Author author={card.author}/>
                <a href={card.link} target="_blank" rel="noreferrer"
                   className="px-4 py-2 text-md font-medium text-white
                    rounded-md border border-transparent 
                    bg-blue-500 hover:bg-blue-400">
                    Buy
                </a>
            </div>
        </div>
    );
};
export default Card;