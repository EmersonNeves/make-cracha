import React from 'react'
import {Layout, Menu, Image} from 'antd'
// import Logo from '../images/logo/hospital.svg'
import { Link } from 'react-router-dom'

const {Header} = Layout

const HeaderComponent = () => {
    return(
        <>
        <Header style={{padding: '0 250px', position: "fixed", right: 0, zIndex: 9, width: "100%"}}>
                <div>
                    <Menu theme="dark" mode="horizontal">
                    <Image src={""} style={{width:50, color:"white"}}/>
                            <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/cadastro"></Link>Cadastro</Menu.Item>
                        <Menu.Item key="3"><Link to="/listagem">Listagem</Link></Menu.Item>
                    </Menu>
                    </div>
            </Header>
            </>
    )
}

export default HeaderComponent