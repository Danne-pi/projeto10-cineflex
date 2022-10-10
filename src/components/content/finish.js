import styled from "styled-components"


export default function Finish(){
    return (
        <ThisFinish>
            <div className="content">
                <h1>Pedido feito com sucesso!</h1>
            </div>
        </ThisFinish>
    )
}

const ThisFinish = styled.div`
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
`