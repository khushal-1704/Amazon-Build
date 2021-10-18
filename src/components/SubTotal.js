import React from 'react'
import styled from 'styled-components'

function SubTotal() {
    return (
        <Container>
            <h2>Subtotal</h2>
            <Money>
                ₹ 0.00
            </Money>
            <Free>

            </Free>
            <Dispatch>
                Dispatch for Free
            </Dispatch>
        </Container>
    )
}

export default SubTotal

const Container = styled.div`
height: auto;
@media screen and (max-width:400px){
    height: auto;
}

 h2 {
border-bottom: 1px solid gray;
}
@media screen and (max-width:400px){
    height: auto;
    h2{
        font-size: 15px;
    }
}
`

const Money = styled.div`
font-size: 30px;
font-weight: bold;
margin: 10px ;
@media screen and (max-width:400px){
    font-size: 20px;
}
@media screen and (max-width:300px){
    font-size: 15px;
}
`
const Free = styled.div`
font-weight: bolder;
color: #b76f13;
margin-bottom: 5px;
`


const Dispatch = styled.button`
width: 100%;
height: 30px;
background-color: #febd69;
border: 1px solid black;
border-radius: 5px;
font-size: 15px;
cursor: pointer;
transition: all  cubic-bezier(0.075, 0.82, 0.165, 1) ;

:hover{
    display: none;
    
}
@media screen and (max-width:400px){
    font-size: 10px;
    font-weight: 800;
}
@media screen and (max-width:290px){
    /* height: auto; */
}
`