import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
// import db from '../firebase';


function Home() {
    const [products, setProducts] = useState([])



    return (
        <Container>
            <Banner />
            <Content>
                <RowOne>
                    <Product title='2021 Apple iPad Pro with Apple M1 chip ' price='₹1,20,000.00' rating={4} imgUrl="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg" />

                    <Product title='New Apple iPhone 12 Pro (512GB) - Gold' price='₹1,39,900.00' rating={5} imgUrl='https://m.media-amazon.com/images/I/71cSV-RTBSL._SL1500_.jpg' />

                    <Product title='Samsung Galaxy A52s 5G (Violet, 6GB RAM, 128GB Storage)' price='₹35,999.00' rating={4} imgUrl='
                    https://m.media-amazon.com/images/I/914kfP8ImAL._SL1500_.jpg' />

                </RowOne>

                <RowOne>
                    <Product title='AmazonBasics 127cm (50 inch)' price='₹36,999' rating={2} imgUrl='https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg' />
                    <Product title='eAirtec 164 cm (65 Inches) 4K Ultra HD Smart ' price='₹51,000.00' rating={3} imgUrl='https://m.media-amazon.com/images/I/71h-XEvqZsL._SL1500_.jpg' />

                </RowOne>
                <RowOne>
                    <Product title='ASUS ROG Zephyrus G14 (2021), ' price='₹1,14,990.00' rating={4} imgUrl='https://m.media-amazon.com/images/I/61f-pIrfGzS._SL1024_.jpg' />
                    <Product title='ASUS ROG Strix Scar 17 (2020)' price='₹1,49,592.00' rating={3} imgUrl='https://m.media-amazon.com/images/I/711V0Z3HWGL._SL1500_.jpg' />
                    <Product title='MSI Bravo 15 Ryzen 7 4800H 15.6"' price='₹74,990.00' rating={5} imgUrl='https://m.media-amazon.com/images/I/71b46EnIzBL._SL1500_.jpg' />
                    <Product title='ASUS ROG Strix Scar 17 (2021)' price='₹2,75,000.00' rating={3} imgUrl='https://m.media-amazon.com/images/I/81QbtqiRKeL._SL1500_.jpg' />

                </RowOne>

            </Content>
            <Footer></Footer>
        </Container>
    )
}

export default Home


const Container = styled.div`
max-width: 1500px;
margin: 0 auto;
`


const Banner = styled.div`
background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg");
min-height: 600px;
background-position: center;
background-size: cover;
z-index: 1 ;
mask-image: linear-gradient(to bottom , rgba(0 , 0 , 0 , 1), rgba(0 , 0 , 0 , 0));

`


const Content = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px ;
padding-right: 10px;
margin-top: -350px;
display:flex ;
`

const RowOne = styled.div`
display: flex;
`


const Footer = styled.div``