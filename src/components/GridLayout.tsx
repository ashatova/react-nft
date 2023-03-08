import React, {useEffect, useState} from "react";

import Card from "./Card";
import DialogCard from "./DialogCard";

import {getNFTs} from "../services/nft.service";

import {ICard} from "../types";

const GridLayout = () => {
    const [gridData, setGridData] = useState<ICard[]>([]);
    const [modalCard, setModalCard] = useState<ICard>();
    const [modalCardLoaded, setModalCardLoaded] = useState<boolean>(false);
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    useEffect(() => {
        getNFTs()
            .then((data: ICard[]) => {
                setGridData(data);
            })
            .finally(() => setModalCardLoaded(true));
    }, [setGridData]);

    const modalOpen = (card: ICard): void => {
        setModalOpened(true);
        setModalCard(card);
    };

    const modalClose = (): void => {
        setModalOpened(false);
    };
    return (
        <div>
            <div className="container mx-auto p-6 
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    modalCardLoaded && !!gridData.length &&
                    gridData.map((card: ICard) => (
                        <Card card={card} modalOpen={modalOpen}/>
                    ))
                }
            </div>
            {
                modalCard &&
                <DialogCard card={modalCard} opened={modalOpened} modalClose={modalClose}/>
            }
            {
                modalCardLoaded && !gridData.length &&
                <p className="text-center">
                  No Available NFTs
                </p>
            }
        </div>

    );
};
export default GridLayout;