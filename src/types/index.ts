export interface ICard {
    id: number;
    label: string;
    link: string;
    image: string;
    description: string;
    author: IAuthor;
}

export interface IAuthor {
    name: string;
    image: string;
    link: string;
}

export interface INFT {
    name: string;
    id: number;
    permalink: string;
    image_url: string;
    external_link: string;
    description: string;
    collection: {
        name: string;
    };
    creator: {
        profile_img_url: string;
        user: {
            username: string;
        };
    };
}