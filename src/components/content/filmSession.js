import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { withTheme } from "styled-components";
import axios from "axios";

export default function FilmSession(props){
    const { filmId } = useParams()
    const [filmInfo, setFilmInfo] = useState(null);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/"+ filmId +"/showtimes");

		requisicao.then(res => {
			setFilmInfo(res.data);
            console.log(res.data);
		});

		requisicao.catch(err => {
			console.log(err.response.data);
		});
	}, []);

    function DrawDays(){
        return filmInfo.days.map((item)=> (
            <div key={item.id} className="main">
                <div className="date">
                    {item.date}<p/>
                    {item.weekday}
                </div>
                <div
                onClick={()=> {
                    props.setSesDate(item.date)
                    props.setTime(item.showtimes[0].name)
                    props.setSession(item.id)
                    returnToTop()
                }}
                className="hour">{item.showtimes[0].name}</div>

                <div
                onClick={()=> {
                    props.setSesDate(item.date)
                    props.setTime(item.showtimes[1].name)
                    props.setSession(item.id)
                    returnToTop()
                }}
                className="hour">{item.showtimes[1].name}</div>
            </div>
        ))
    }

    function returnToTop(){
        document.querySelector(".spacer").scrollIntoView({behavior : "smooth"}) // SHHHHHHHH ninguem precisa saber, e eu tbm n preciso usar useRef pra isso pelo amor de deus, tenha pena desse pobre ser aqui
    }

    if(filmInfo === null) {
		return <></>;
	}

    return(
        <ThisSession
        isclickable={props.sesDate === "--/--/----" ? false : true}
        >
            <div className="spacer" />
            <div className="content">
                <div className="film-title">
                    <img src={filmInfo.posterURL} />
                    <div>
                        <h1>{filmInfo.title}</h1>
                        <h2>{props.sesDate+', '+props.time}</h2>
                        <Link to="/">
                            <div>Prosseguir</div>
                        </Link>
                    </div>
                </div>
                <Body>
                    <DrawDays />
                </Body>
            </div>
        </ThisSession>
    );
}

const ThisSession = styled.div`
    height: 100%;
    width: 100vw;
    font-family: 'Josefin Sans', sans-serif;

    .spacer{
        height: 12vh;
    }
    .content{
        box-sizing: border-box;
        height: auto;
        box-shadow: 0px -1px 4px 2px rgba(0, 0, 0, 0.1);
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;

        .film-title{
            width: 100%;
            box-sizing: border-box;
            margin-top: 3vh;
            gap: 12px;
            display: flex;
            padding-inline: 28px;
            img{
                object-fit: cover;
                border-radius: 8px;
                height: 20vh;
                width: 33vw;
            }
            h1{
                font-size: 20px;
            }
            h2{
                font-weight: 400;
            }
            a{
                text-decoration: none;
                display: flex;
                justify-content: center;
                pointer-events: ${props => props.isclickable === true ? 'all' : 'none'};
                color: white;
                background-color: ${props => props.isclickable === true ? 'orange' : '#D8D7DD'};;
                padding-block: 12px;
                padding-inline: 32px;
                font-weight: 700;
                font-size: 18px;
                border-radius: 12px; 
            }
        }
    }
`
const Body = styled.div`
    margin-top: 4vh;
    box-sizing: border-box;

    .main{
        margin-block: 16px;
        padding: 18px;
        border-radius: 12px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 70vw;
        background-color: orange;

        .date{
            display: block;
            width: 45%;
        }
        .hour{
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            width: 45px;
            background-color: white;
        }

    }
`