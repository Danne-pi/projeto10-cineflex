import styled from "styled-components"


export default function AboutFilm(){
    return (
        <>
        <Shadow />
        <ThisAbout>
            
        </ThisAbout>
        </>
    )
}

const ThisAbout = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 90vw;
    height:75vh;
    z-index: 9;
    
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
`