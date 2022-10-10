import styled, {createGlobalStyle} from "styled-components";
import Title from "./components/title";
import AboutFilm from "./components/content/aboutFilm";
import FilmSelection from "./components/content/filmSelection";
import FilmSession from "./components/content/filmSession";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SessionOverview from "./components/content/sessionOverview";
import Finish from "./components/content/finish";


export function LoadBlankChairs(){
  let arr =[]
  for (let i = 0; i < 50; i++) {
    arr.push(false)
  }
  console.log(arr)
  return arr
}

export default function App() {
  const [filmId, setFilmId] = useState(null)
  const [session, setSession] = useState(null)
  const [time, setTime] = useState("--:--")
  const [sesDate, setSesDate] = useState("--/--/----")
  const [sessionChairs, setSessionChairs] = useState(LoadBlankChairs)



  return (
    <>
    <GlobalStyle />
    <ThisApp>
      <Title />
      <>
      <BrowserRouter>
        {filmId != null ?
            <AboutFilm 
            filmId = {filmId}
            setFilmId = {setFilmId}
            />
        : null}
            <Routes>
                <Route path="/" 
                element={<FilmSelection
                  setFilmId = {setFilmId}
                  setSession={setSession}
                  setTime={setTime}
                  setSesDate={setSesDate}
                  />}/>
                <Route path="/film/:filmId"
                element={<FilmSession 
                  session={session}
                  time={time}
                  sesDate={sesDate}
                  setSession={setSession}
                  setTime={setTime}
                  setSesDate={setSesDate}
                  setSessionChairs={setSessionChairs}
                  />}/>
                <Route path="/session/:sessionId" 
                element ={<SessionOverview 
                  time={time}
                  sesDate={sesDate}
                  sessionChairs={sessionChairs}
                  setSessionChairs={setSessionChairs}
                  />}/>
                <Route path="/finish/" element={<Finish session={session} sessionChairs={sessionChairs}/>} />
            </Routes>
        </BrowserRouter>
        </>
    </ThisApp>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  background-color: #F5F5F5;
}
`

const ThisApp = styled.div`
  width: 100vw;
  height: 100vh;
`