import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import './normalize.css'
import './layout.css'

const Layout = styled.div`
  background-color: #000;
`

export default ({ children }) =>
  <Layout>
    <Helmet
      title={'midvinter.tv är ett kreativt kollektiv i Göteborg'}
      meta={[
        { name: 'description', content: 'midvinter är ett kreativt kollektiv och produktionsbolag i Göteborg med fokus på musikvideo och content' }, // eslint-disable-line max-len
        { name: 'keywords', content: 'kortfilm produktionsbolad musikvideo Göteborg Brännpunkt Novemberfestivalen' } // eslint-disable-line max-len
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }, // eslint-disable-line max-len
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      ]}
    />
    {children}
  </Layout>
