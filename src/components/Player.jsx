import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default () =>
  <Wrapper>
    <Iframe
      src="https://player.vimeo.com/video/302689426?color=ef0000&byline=0&portrait=0" // eslint-disable-line max-len
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen />
  </Wrapper>
