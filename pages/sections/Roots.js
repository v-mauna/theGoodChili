import Kitchen from '../images/kitchen.jpg'
import Spoon from '../images/spoon.jpeg'
import RootImg from '../images/roots.jpg'

const Roots = () => (
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
          box-sizing: border-box;
          font-size: 16px;
          margin-top: 1em;
          line-height: 2em;
        }
        .roots {
          display: flex;
          background: linear-gradient(-90deg, rgb(166, 213, 223) 50%, white 45%);
          width: 100vw;
          height: 40vw;
          padding: 0;
          margin: 0;
          margin-bottom: auto;
          box-sizing: border-box;
        }

        .roots h2{
          text-transform: uppercase;
          font-family: 'Poppins',sans-serif;
        }
        .roots p{
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 50vw;
          margin: auto;
          padding: 1em;
          height: 60vw;
          color: white;
          text-align: center;
        }
        .roots img{
          width: 50vw;
        }

        .roots a {
          color: white;
          font-size: 12px;
          width: 100px;
          text-decoration: none;
          border: 3px solid white;
          padding: 1em;
        }
        .roots a:hover{
          background: white;
          color: rgb(166, 213, 223);
        }
        .break{
          height: 30px;
        }
      `}
    </style>
    <div className='roots'>
    <img src={RootImg}/>
      <p>
      <h2>Our Roots</h2>
      <br/>
      Once upon a time there was a girl with a high MSG sensitivity and an insatiable appetite for everything in the Asian grocer aisle…
      <div className='break'/>
      <a href='/about'>Learn More</a>
      </p>
     
    </div>
  </div>
)

export default Roots
