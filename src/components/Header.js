import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <a>
              <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
               <CustomMenu/>
           </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
justify-content: space-between;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
`
const Menu = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
    display : flex;
    align-items:center;
  a{
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
}  
`
const CustomMenu = styled(MenuIcon)`
    

`