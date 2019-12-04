import React from "react";
import {Loader, Dimmer} from "semantic-ui-react";

const Loading = () =>(
    <Dimmer active inverted>
        <Loader active inline="centered" />
    </Dimmer>
);

export default Loading;