import React from "react";

import {IAuthor} from "../types";

const Author = (props: { author: IAuthor }) => {
    const {author} = props;
    return (
        <div className="flex items-center text-gray-600 text-xs font-medium">
            <img className="w-10 h-10 rounded-full mr-2 bg-gray"
                 src={author.image}
                 alt={author.name}/>
            <div>
                <span>By </span>
                {author?.link ?
                    <a href={author.link} target="_blank" rel="noreferrer"
                       className="font-medium text-blue-600 hover:underline">
                        {author?.name}
                    </a> :
                    <span>{author?.name}</span>
                }
            </div>
        </div>
    );
};
export default Author;