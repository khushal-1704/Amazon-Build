import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
// import db from '../firebase';


function Home() {

    return (
        <Container>
            <Banner />
            <Content>
                <RowOne>
                    <Product title='2021 Apple iPad Pro with Apple M1 chip ' price='₹1,20,000.00' rating={4} imgUrl="ipad.jpg" id={1} />

                    <Product title='New Apple iPhone 12 Pro (512GB) - Gold' price='₹1,39,900.00' rating={5} imgUrl="iphone.jpg" id={2} />

                    <Product title='Samsung Galaxy A52s 5G (Violet, 6GB RAM, 128GB Storage)' price='₹35,999.00' rating={4} imgUrl='phone1.jpg' id={3} />

                </RowOne>

                <RowOne>
                    <Product title='AmazonBasics 127cm (50 inch)' price='₹36,999' rating={2} imgUrl='tv.jpg' id={4} />
                    <Product title='eAirtec 164 cm (65 Inches) 4K Ultra HD Smart ' price='₹51,000.00' rating={3} imgUrl='tv2.jpg' id={5} />

                </RowOne>
                <RowOne>
                    <Product title='ASUS ROG Zephyrus G14 (2021), ' price='₹1,14,990.00' rating={4} imgUrl='lp1.jpg' id={6} />
                    <Product title='ASUS ROG Strix Scar 17 (2020)' price='₹1,49,592.00' rating={3} imgUrl='lp2.jpg' id={7} />
                    <Product title='MSI Bravo 15 Ryzen 7 4800H 15.6"' price='₹74,990.00' rating={5} imgUrl='lp3.jpg' id={8} />
                    <Product title='ASUS ROG Strix Scar 17 (2021)' price='₹2,75,000.00' rating={3} imgUrl='lp4.jpg' id={9} />

                </RowOne>

            </Content>
            <Footer></Footer>
        </Container>
    )
}

export default Home;


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
`

const RowOne = styled.div`
display: flex;
flex-wrap: wrap;
`


const Footer = styled.div``