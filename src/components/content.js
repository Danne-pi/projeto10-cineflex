import { useState } from "react";
import AboutFilm from "./content/aboutFilm";
import FilmSelection from "./content/filmSelection";


export default function Content(){
    const [pageState, setPageState] = useState(0)
    const [filmId, setFilmId] = useState(1)

    return (
        <>
        {filmId != null ?
            <AboutFilm />
        : null}
        
        {pageState === 0 ?
            <FilmSelection />
        :pageState === 1 ?
            null
        :   null}
        </>
    )
   
}