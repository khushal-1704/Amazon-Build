import React from 'react'
import styled from 'styled-components'
import BasketItem from './BasketItem'
import SubTotal from './SubTotal'

function Cart() {
    return (
        <Container>
            <Container__banner src="/images/banner.jpg" alt="" />
            <Container__item >

                <Cart__left >
                    <h1>Your Shopping Basket</h1>
                    {/* <BasketItem /> */}
                    <Empty>

                        <img src="/images/empty-cart-cop.jpg" alt="" />
                    </Empty>
                </Cart__left>

                <Cart__right >
                    <SubTotal />
                </Cart__right>


            </Container__item>

        </Container>
    )
}

export default Cart

const Container = styled.div` 
display: flex;
padding: 14px 18px 0 18px;
flex-direction: column;

`
const Container__banner = styled.img`
height: 300px;
`
const Container__item = styled.div`
margin-top: 20px;
display: flex;
@media screen and (max-width:600px){
    flex-direction: column;
}

`

const Cart__left = styled.div`
padding: 10px 15px;
width: 70%;
background-color: #fff;
border-radius: 5px;
margin-right: 5px;
height: 100vh;
margin-bottom: 10px;

h1 {
    padding-bottom:5px ;
    border-bottom: 2px solid #febd69;
}

`

const Empty = styled.div`
position: relative;


img{
    height: 500px;
}
p{
position: absolute;
bottom: 120px;
left: 30%;
color: lightgray;
}
@media screen and (max-width:600px){
    img{
        height: 250px;
    }
    p{
        bottom: 70px;
        left: 33%;
    }
}
@media screen and (max-width:400px){
    img{
        height: 100px ;
        padding-left: 60px;
    }
    p{
        bottom: 10px;
        left: 34%;
    }
}
@media screen and (max-width:250px){
    img{
        position: absolute;
        left: 0;
    }
}
`

const Cart__right = styled.div`
width: 30%;
background-color:  #fff;
border: 1px solid #febd69;
border-radius: 10px;
padding: 5px 10px;
height: 128px;

@media screen and (max-width:600px){
    width: 70%;
}

`