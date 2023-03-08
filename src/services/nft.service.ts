import axios from "axios";

import {ICard, INFT} from "../types";

export const getNFTs = async () => {
    const {data} = await axios.get("https://api.opensea.io/api/v1/assets");
    return nftToCard(data.assets);
};

const nftToCard = (nfts: INFT[]): ICard[] => {
    return nfts.map((nft: INFT) => {
        return {
            id: nft.id,
            label: nft.name,
            link: nft.permalink,
            image: nft.image_url,
            description: nft.description,
            author: {
                name: nft.creator.user.username || nft.collection.name,
                image: nft.creator.profile_img_url,
                link: nft.external_link,
            },
        };
    });
};