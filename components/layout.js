import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

const Layout = props => (
  <div>
    <style jsx>
      <link
        href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
        rel='stylesheet'
      />
      {`
        #main {
          display: flex;
          flex-direction: column;
          padding: 1em;
          margin: 1em;
        }
        @media (max-width: 700px) {
          #main {
            display: block;
            box-sizing: border-box;
            width: 100vw;
            left: 0;
            margin: 0;
            padding: 0;
          }
        }
      `}
    </style>
    <Head>
      <title>The Good Chili</title>
    </Head>
    <div id='main'>
      <Navbar />
      <div className='container'>{props.children}</div>
    </div>
  </div>
)

export default Layout