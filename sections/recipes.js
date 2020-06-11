
import Spoon from '../images/spoon.jpeg'

const Recipes = () => (
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
        .recipes {
          background: rgb(207, 217, 48);
          display: flex;
          flex-wrap: wrap;
          width: 100vw;
          height: 60vh;
          padding: 0;
          margin-top: 2em;
          text-align: center;
          box-sizing: border-box;
        }
        .recipes img{
          width: 50%;
          height: 60vh;
        }

        .recipes h2 {
          justify-content: center;
          align-content: center;
          margin-top: 4em;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
        }
        .recipes p {
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          padding: 1em;
          letter-spacing: 3px;
          width: 50vw;
          height: 60vh;
          color: white;
          text-align: center;
        }

        .recipes a {
          color: white;
          font-size: 12px;
          width: 100px;
          text-decoration: none;
          border: 3px solid white;
          padding: 1em;
        }
        .recipes a:hover {
          background: white;
          color: rgb(207, 217, 48);
        }
         {
          height: 30px;
        }
      `}
    </style>
    <div className='recipes'>
    <img src={Spoon}/>
      <p>
        <h2>How We Kick It</h2>
        Find inspiration and check out some of our latest recipes
        <div className='break'/>
        <a href='/about'>View Recipes</a>
      </p>
      
    </div>
  </div>
)

export default Recipes
