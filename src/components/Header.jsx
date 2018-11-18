import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Wrapper = styled.header`
  margin: 2rem 0;
  text-align: center;
`

export default () =>
  <Wrapper>
    <Logo />
  </Wrapper>
