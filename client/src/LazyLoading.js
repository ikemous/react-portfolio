import React, {Suspense} from "react";
import {Loader, Dimmer} from "semantic-ui-react";
const App = React.lazy(() => import("./App.js"));

function LazyLoading()
{
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