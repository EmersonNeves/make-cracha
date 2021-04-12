import { Button, Image } from 'antd'
import React, { useState } from 'react'
import HeaderComponent from '../../components/header'

import logo from '../../images/logo.png'

const Home = () => {    

    return(
        <React.Fragment>
        <HeaderComponent/> 
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center", paddingTop: 70}}>
            <Image width={300} height={300} src={logo} />
        <h1 style={{paddingTop: 25}}>Bem-vindo ao sistema</h1> 
        <h3 style={{textTransform:"uppercase", fontWeight: 600}}>Selecione uma opção no menu acima para ir para o cadastro ou listagem de funcionários.</h3>
        </div>
        </React.Fragment>
    )
}

export default Home