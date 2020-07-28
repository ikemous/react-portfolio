import React, {Suspense, useEffect} from "react";
import {Loader, Dimmer} from "semantic-ui-react";

function LazyLoading({children})
{
    useEffect(() =>{
        document.title = "Ikemous - Loading"
    },[]);

    return (
        <Suspense fallback={
            <Dimmer active>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        }>
            {children}
        </Suspense>
    )
}

export default LazyLoading;