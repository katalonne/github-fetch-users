import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
  position: absolute;
  bottom: 6px;
  width: 100%;
`

const Footer = () => {
  return (
    <Container>
      Copyright Catalin Besleaga 2019
    </Container>
  )
}


export default Footer;