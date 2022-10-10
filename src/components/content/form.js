import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function FinishForm(props){
    const navigate = useNavigate()
    const [name, setname] = useState("")
    const [cpf, setCpf] = useState("")

    function submit(e){
        e.preventDefault()
        console.log(name,cpf, props.chairIDS)
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const body = {
            ids: props.chairIDS,
            name: name,
            cpf: cpf
        }
        const promise = axios.post(URL, body)

        promise.then(()=>{
            navigate("/finish")
        })
        promise.catch(()=>{

        })
    }

    return(
      <ThisForm onSubmit={submit}>
        <div>
            <label htmlFor="name">E-mail</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={e=> setname(e.target.value)}
                required
            />
            <label htmlFor="cpf">CPF</label>
            <input
                type="cpf"
                id="cpf"
                value={cpf}
                onChange={e=> setCpf(e.target.value)}
                required
            />
        </div>
        <button type="submit">Confirmar</button>
      </ThisForm>
    )
}

const ThisForm = styled.form`
    width: 100%;
    display: flex;
    margin-bottom: 5vh;
    align-items: center;
    justify-content: space-evenly;

    div{
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 6px;
        margin-block: 4px;
        border-radius: 12px;
        border: 2px solid #D4D4D4;
    }
    button{
        height: 60px;
        border: none;
        background-color: orange;
        border-radius: 8px;
    }
`