import Head from 'next/head'
import Chilis from './images/chiliPeppers.jpg'
import Roots from './sections/Roots'
const Home = () => (
  <div className='container'>
    <style jsx>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Work+Sans&display=swap');
        :root {
          --green: rgb(207, 217, 48);
          --blue: rgb(166, 213, 223);
          --pink: rgb(238, 65, 136);
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
          margin-top: 1em;
          line-height: 2em;
        }
        header {
          display: flex;
          width: 100vw;
          height: 80vh;
          flex-direction: column;
          background-clip: border-box;
          background: 40% url(${Chilis});
          padding: 0;
          margin: 0;
          margin-bottom: auto;
          box-sizing: border-box;
        }
        .content {
          background: rgb(207, 217, 48);
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 50vw;
          display: flex;
          padding: 0;
          flex-direction: column;
          height: 60vw;
          text-align: center;
        }
        .content p {
          color: white;
          margin: auto;
          font-size: 22px;
        }
        .content a {
          color: white;
          font-size: 12px;
          width: 100px;
          text-decoration: none;
          border: 3px solid white;
          padding: 1em;
        }

        .content a:hover {
          color: white;
          background: rgb(166, 213, 223);
        }
        #header-spacer{
            height: 30px;
        }

      `}
    </style>
    <Head>
      <script
        src='https://kit.fontawesome.com/6f92a9206c.js'
        crossOrigin='anonymous'
      />
      <meta name='description' content='' />
      <title>The Good Chili - Home</title>
    </Head>
    <header>
      <div className='content'>
        <p>
          We are what we eat. <br/>
          We believe in living<br/>
          adventurously,
          <br/>
          healthily,
          <br/> and
          sustainably.
          <div id='header-spacer'/>
          <a href='/shop'>Buy Now</a>
          </p>
          
      </div>
    </header>

    <Roots/>     
  </div>
)

export default Home
