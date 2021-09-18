import React from 'react'
import styled from 'styled-components'

function CartItem() {
    return (
        <Container>
            {/* <ImageContainer>
                <img src="https://m.media-amazon.com/images/I/711V0Z3HWGL._SL1500_.jpg" alt="" />
            </ImageContainer>
            <CartItem>
                <CartItemInfoTop>
                    <h2>ASUS ROG Strix Scar 17</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        5
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer>
                        Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItem>
            <PriceContainer>1,49,000</PriceContainer> */}
        </Container>
    )
}

export default CartItem


const Container = styled.div``

const ImageContainer = styled.div``
const CartItemInfo = styled.div``
const CartItemInfoTop = styled.div``
const CartItemInfoBottom = styled.div``
const CartItemQuantityContainer = styled.div``
const CartItemDeleteContainer = styled.div``
const PriceContainer = styled.div``