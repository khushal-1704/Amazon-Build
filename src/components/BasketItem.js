import React from 'react'
import styled from 'styled-components'

function BasketItem() {
    return (
        <Container>
            <ProductImg>
                {/* <img src="/images/ipad.jpg" alt="" /> */}
            </ProductImg>
            <ProductDetails>
                <Name>2021 Apple iPad Pro with Apple M1 chip</Name>
                <Rating>⭐⭐⭐</Rating>
                <Price>1,00,000.00</Price>
            </ProductDetails>
        </Container>
    )
}

export default BasketItem


const Container = styled.div`
margin-top: 5px;
width: 100%;
height: 200px;
background-color: bisque;
`
const ProductDetails = styled.div``

const ProductImg = styled.div``

const Name = styled.div``

const Rating = styled.div``

const Price = styled.div