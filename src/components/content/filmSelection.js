import styled from "styled-components"
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function FilmSelection(props){
    const [items, setItems] = useState(null);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(res => {
			setItems(res.data);
		});

		requisicao.catch(err => {
			console.log(err.response.data);
		});
	}, []);

    function ShowFilms(){
        return items.map((item)=>(
            <div 
            key={item.id}
            onClick={()=> props.setFilmId(item.id)}
            >
                <img src={item.posterURL} alt=""/>
            </div>
        ))
    }


    if(items === null) {
		return <></>;
	}

     
    return(
        <ThisContent>
            <div className="content">
                <h1>Selecione o Filme:</h1>
                <div className="film-list">
                    <ShowFilms />
                </div>
            </div>
        </ThisContent>
    )
}

const ThisContent = styled.div`
    height: 100%;
    width: 100vw;
    
    .content{
        box-shadow: 0px -1px 4px 2px rgba(0, 0, 0, 0.1);
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 12vh;
        border-radius: 25px;

        h1{
            margin-top: 42px;
            margin-bottom: 32px;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 400;
            font-size: 24px;
            text-align: center;
            padding-top: 6px;
            justify-content: center;
            align-items: center;
        }
    }

    .film-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 9vw;
        padding-inline: 10vw;
        margin-bottom: 10vh;

        div{
            width: 33vw;
            height: 20vh;
            background-color: white;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);


            img{
                object-fit: cover;
                border-radius: 8px;
                width: 90%;
                height: 90%;
            }
        }
    }
`