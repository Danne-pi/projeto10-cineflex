import styled from "styled-components"


export default function Finish(props){
    return (
        <ThisFinish>
            <div className="content">
                <h2>Pedido feito com sucesso!</h2>
                <h3>Filme e Sessao</h3>
                <h4></h4>
                <h3>Ingressos</h3>
                <h4></h4>
                <h3>Comprador</h3>
                <h4></h4>
            </div>
        </ThisFinish>
    )
}

const ThisFinish = styled.div`
    height: 100%;
    width: 100vw;
    font-family: 'Josefin Sans', sans-serif;
    
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
            font-weight: 400;
            text-align: center;
            padding-top: 6px;
            justify-content: center;
            align-items: center;
        }
    }
`