import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';


function Header() {


    return (

        <Container>
            <Link to='/'>
                <HeaderLogo>
                    <img src='/images/amazon-logo.png' alt="logo" />
                </HeaderLogo>
            </Link>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption>
                    <OptionLineOne>Hello , Aalok</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>& Order</OptionLineTwo>
                </HeaderOption>


                <HeaderOptionCart >
                    <Tag to='/cart'>
                        <ShoppingBasketIcon style={{ color: 'white' }} />
                        <CartCount >0</CartCount>
                    </Tag>
                </HeaderOptionCart>


            </HeaderNavItems>


        </Container>


    )
}


export default Header

const Container = styled.div`
height: 60px;
background-color: #0f1111;
display: flex;
align-items: center;
justify-content: space-between;
color: white;

`

const HeaderLogo = styled.div`
img{
    width: 100px;
    margin-left: 11px;
    @media screen and (max-width:600px){
width: 60px;
}
}
`

const HeaderOptionAddress = styled.div`
padding-left: 9px;
display: flex;
align-items: center;
@media screen and (max-width:600px){
    display: none;
}


`


const OptionLineOne = styled.div`


`


const OptionLineTwo = styled.div`
font-weight: 700;

`

const HeaderSearch = styled.div`
display: flex;
flex-grow: 1;
height: 40px;
border-radius: 4px;
overflow: hidden;
margin-left: 4px;
:focus-within{
    box-shadow: 0 0 0 3px #F90;
}
@media screen and (max-width:600px){
flex-grow: inherit;
}
@media screen and (max-width:300px){
    height: 30px;
}
`

const HeaderSearchInput = styled.input`
flex-grow: 1;
border:0;
@media screen and (max-width:300px){
width: 10px;
display: none;
}
:focus{
    border: none;
}
`

const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width: 45px;
color: black;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media screen and (max-width:300px){
    width: 40px;
}

`


const HeaderNavItems = styled.div`
display: flex;

`


const HeaderOption = styled.div`
padding:10px 9px 10px 9px;
@media screen and (max-width:600px){
    display: none;
}

`

const HeaderOptionCart = styled.div`
cursor: pointer;
display: flex;

align-items: center;
padding-right: 9px;



`

const Tag = styled(Link)`
display: flex;
`

const CartCount = styled.div`
padding-left: 4px;
color: #F90;
padding-left: 4px;
font-weight: 700;
color: #f08804;

`