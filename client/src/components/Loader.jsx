import React from 'react'
import Loading from '../assets/img/loading.gif'
import styled from 'styled-components';

const Loader = () => {
    return (
        <ContainerLoader>
            <img src={Loading} alt='Loading' width='300' height='250'/>
            <Span>Loading...</Span>
        </ContainerLoader>   
    )
}

const ContainerLoader = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0px 30px;
   min-height: calc(100vh - 96px);
`; 

const Span = styled.span`
   font-size: 20px;
   font-weight: bold;
   margin-top: 30px;
   font-family: 'Montserrat', sans-serif;
`; 

export default Loader

