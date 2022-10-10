import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


export default function AboutFilm(props){
    
    const [filmInfo, setFilmInfo] = useState(null);
    const [thisOpacity, setThisOpacity] = useState(0);
    const [openWatch, setOpenWatch] = useState(false); 

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/"+ props.filmId +"/showtimes");

		requisicao.then(res => {
			setFilmInfo(res.data);
		});

		requisicao.catch(err => {
			console.log(err.response.data);
		});
	}, []);

    function DrawInfo(){
        return (
            <>
            <img src={filmInfo.posterURL}/>
            <h1>{filmInfo.title}</h1>
            <h2>{filmInfo.releaseDate.slice(0, -14)}</h2>
            <div className="desc-wrap">
                <h3>{filmInfo.overview.slice(0,130)+`...`}</h3>
            </div>
            <h3 className="continue" >Continue lendo</h3>
            <button onClick={()=> animateTransition(0)}><Link to={"/film/"+props.filmId}>Ver sessões</Link></button>
            </>
        );
    }

    if(filmInfo === null) {
		return <></>;
	}

    function animateTransition(val){
        if(val===1){
            setTimeout(() => {
                setThisOpacity(1);
                setOpenWatch(true);
            }, 50);    
        }
        else{
            setThisOpacity(0)
                setTimeout(() => {
                    props.setFilmId(null)
                    setOpenWatch(false)
            }, 600);
        }
    }
    
    if(openWatch === false){
        animateTransition(1)
    }

    return (
        <>
        <Shadow thisOpacity = {thisOpacity}/>
        <ThisAbout thisOpacity = {thisOpacity}>
            <ion-icon
            name="close"
            onClick={()=> animateTransition(0)}
            />
            <DrawInfo />
        </ThisAbout>
        </>
    );
}

const ThisAbout = styled.div`
    box-sizing: border-box;
    border-radius: 20px;
    position: fixed;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 90vw;
    height:85vh;
    z-index: 9;
    opacity: ${props => props.thisOpacity};
    transition: opacity 0.5s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 28px;


    ion-icon{
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 16px;
        font-size: 30px;
    }

    img{
        border-radius: 8px;
        object-fit: cover;
        width: 70%;
        height: 45%;
    }

    h1{
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 24px;
        margin-bottom: 0;
    }
    h2{
        margin-top: 2vh;
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
    }
    .desc-wrap{
        width: 100%;
        height: 70px;
        margin-bottom: 0;

        h3{
            margin-top: 0;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 400;
            font-size: 16px;
        }
    }
    .continue{
        margin-top: 0;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #211E4E;
    }
    button{
        margin-top: 4vh;
        font-family: 'Josefin Sans', sans-serif;
        border-radius: 8px;
        font-size: 24px;
        font-weight: 700;
        height: 50px;
        width: 80%;
        border: none;
        background-color: orange;

        a{
            color: white;
            text-decoration: none;
        }
    }
`
const Shadow = styled.div`
    user-select: none;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    background-color: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
    opacity: ${props => props.thisOpacity};
    transition: opacity 0.5s ease-out;
`