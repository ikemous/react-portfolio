import React, {Suspense, useEffect, useState} from "react";
import {Loader, Dimmer} from "semantic-ui-react";
const App = React.lazy(() => import("./App.js"));

function LazyLoading()
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
            <App />
        </Suspense>
    )
}

export default LazyLoading;