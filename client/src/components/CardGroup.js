import React from "react";

function CardGroup({children})
{
    return(
        <article className="ui cards col-sm-12 aboutCards">
            {children}
        </article>
    );
};

export default CardGroup;