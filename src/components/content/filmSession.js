import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function FilmSession(){
    const { filmId } = useParams()
    return(
        <ThisSession>
            <div className="spacer" />
            <div className="content">
                {filmId}
            </div>
        </ThisSession>
    );
}

const ThisSession = styled.div`
    height: 100%;
    width: 100vw;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;

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
        justify-content: center;
        align-items: center;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
    }
`