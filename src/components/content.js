import { useState } from "react";
import AboutFilm from "./content/aboutFilm";
import FilmSelection from "./content/filmSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmSession from "./content/filmSession";


export default function Content(){
    const [pageState, setPageState] = useState(0)
    const [filmId, setFilmId] = useState(null)

    return (
        <BrowserRouter>
        {filmId != null ?
            <AboutFilm 
            filmId = {filmId}
            setFilmId = {setFilmId}
            />
        : null}
            <Routes>
                <Route path="/" element={<FilmSelection setFilmId = {setFilmId}/>}/>
                <Route path="/film/:filmId" element={<FilmSession />}/>
            </Routes>
        </BrowserRouter>
    )
   
}