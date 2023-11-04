import React from 'react'
import { Button, Card, Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'



const HeaderPrincipal = () => {
    
  return (
    <>
     <div className='header'>
      <img src='../src/img/logo.png' alt='logo' className='logo'/>
      <h1 className='titulo' >Asociacion de Psicologia</h1>
      
    </div>
    <h1 className='eslogan'>Eslogan</h1>
    <p>Esta asocion nos va a permitir ayudar a la gente a conocerce mejor...... y de mas aqui va su descripcion</p>
    <h2>Acerca de nosotros</h2>
    <Link to="/acercaNosotros" >Acerca de nosotros </Link></>
  
  )
  
}

export default HeaderPrincipal
