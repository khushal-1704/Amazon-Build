import React from 'react'
import styled from 'styled-components'

function Product({ title, price, imgUrl, rating, id }) {

    return (
        <Container>
            <Title>{title}</Title>
            <Price>{price}</Price>
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }
            </Rating>
            <CenterSection>
                <Image src={`/images/${imgUrl}`} />
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </CenterSection>
        </Container>
    )
}

export default Product


const Container = styled.div`
background-color: white;
z-index: 100;
flex: 1;
padding: 20px;
margin: 10px;
border-radius: 3px;
max-height: 400px ;
display: flex;
flex-direction: column;

`

const Title = styled.span`
font-size: 20px ;
font-weight: bold;
`

const Price = styled.span`
font-weight: 500;
margin-top: 3px;
`
const Rating = styled.div`
display: flex;
`
const Image = styled.img`
max-height: 200px;
object-fit: contain;
@media screen and (max-width:350px){
    max-width: 140px;
}
`

const CenterSection = styled.div`
margin-top: 12px;
display: grid;
place-items: center;
`

const AddToCartButton = styled.button`
width: 100px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
padding: 10px;
cursor: pointer;
transition: all 0.5s;

&:hover{
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}


`