import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
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
            <div key={item.id}>
                {item.date}
            </div>
        ))
    }

    if(filmInfo === null) {
		return <></>;
	}

    return(
        <ThisSession>
            <div className="spacer" />
            <div className="content">
                <div className="film-title">
                    <img src={filmInfo.posterURL} />
                    <div>
                        <h1>{filmInfo.title}</h1>
                        <h2>{props.session}</h2>
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
        height: 88vh;
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
        }
    }
`
const Body = styled.div`
    margin-top: 4vh;

    div{
         margin-block: 12px;
         
    }
`