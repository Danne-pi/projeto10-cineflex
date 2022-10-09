import styled from "styled-components"

export default function Title(){
    return(
        <ThisTitle>
            <h1>Cine<p>flex</p></h1>
        </ThisTitle>
    )
}

const ThisTitle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 10vh;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);


    h1{
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            color: orange;
        }
    }
`