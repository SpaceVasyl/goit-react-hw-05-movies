import React from "react";
import { Header } from "components/Header/Header";
import { Trending } from "components/Trending/Trending";
export const Home = () => {
    return <><Header/>
    <div>
        'This is homepage'
        <Trending/>
    </div>
    </>
}