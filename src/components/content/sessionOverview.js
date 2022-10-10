import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FinishForm from "./form";

export default function SessionOverview(props){
    const { sessionId } = useParams()
    const [sessionInfo, setSessionInfo] = useState(null);
    const [chairIDS, setChairIDS] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/"+ sessionId +"/seats");

		requisicao.then(res => {
			setSessionInfo(res.data);
            console.log(res.data);
		});

		requisicao.catch(err => {
			console.log(err.response.data);
		});
	}, []);

    function SelectChair(idx, id){
        let newArr = []
        let idList = chairIDS
        for (let i = 0; i < props.sessionChairs.length; i++) {
            if(idx === i){
                newArr.push(!props.sessionChairs[i])
                if(!idList.includes(id)){
                    idList.push(id)
                }
                else{
                    idList = idList.filter(e => e !== id)
                }
            }
            else{
                newArr.push(props.sessionChairs[i])
            }
        }
        setChairIDS(idList)
        // console.log(idList)
        return newArr
    }

    function DrawSeats(){
        return sessionInfo.seats.map((item, index)=> (
            item.isAvailable ?
            <LibreSeat 
                onClick={()=>props.setSessionChairs(SelectChair(index, item.id))}
                transform={props.sessionChairs[index] ? '-4px' : '0'}
                color={props.sessionChairs[index] ? '#0E7D71' : '#C3CFD9'}
                key={item.id}
                >{item.name}
            </LibreSeat>
            :<UsedSeat
                key={item.id}
                >{item.name}
            </UsedSeat>
        ))
    }

    if(sessionInfo === null) {
		return <></>;
	}


    return (
        <ThisSession>
            <div className="spacer" />
            <div className="content">
                <div className="film-title">
                    <img src={sessionInfo.movie.posterURL} />
                    <div>
                        <h1>{sessionInfo.movie.title}</h1>
                        <h2>{props.sesDate+', '+props.time}</h2>
                    </div>
                </div>
                <h2>Assentos:</h2>
                <div className="seats">
                    <DrawSeats />
                </div>
                <div className="lyric">
                <div>
                    <Indicator color="#0E7D71"/>
                    <h3>Selecionado</h3>
                </div>
                <div>
                    <Indicator color="#C3CFD9"/>
                    <h3>Disponível</h3>
                </div>
                <div>
                    <Indicator color="#F5D575"/>
                    <h3>Indisponível</h3>
                </div>
            </div>
            <h3>Dados do comprador:</h3>
            <FinishForm chairIDS={chairIDS}/>
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
        border-radius: 25px;

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

        h2{
            margin-bottom: 0;
        }
    
        .seats{
            justify-content: center;
            padding: 18px;
            display: flex;
            flex-wrap: wrap;
            gap: 3vw;
        }
        .lyric{
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            h3{
                font-size: 14px;
                text-align: center;
                font-weight: 400;
            }
        }
    }
    h3{
        margin-top: 4vh;
        margin-bottom: 1vh;
        margin-bottom: 0;
    }
`
const UsedSeat = styled.div`
    background-color: #F5D575;
    border-radius: 50px;
    width: 6vw;
    height: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LibreSeat = styled.div`
    border-radius: 50px;
    width: 6vw;
    height: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=> props.color};
    transform: translateY(${props=> props.transform});
`
const Indicator = styled.div`
    width: 8vw;
    height: 8vw;
    border-radius: 50px;
    background-color: ${props=> props.color};
`