import React from "react";
import { MainContainer } from "./style";
import bonfireGif from "../../static/images/bonfire.gif"
export default function HomePage() {
    return (
        <MainContainer>
            <h2>Descansa aí, meu bom.</h2>
            <img src={bonfireGif} alt="bonfire"/>
        </MainContainer>
    )
}