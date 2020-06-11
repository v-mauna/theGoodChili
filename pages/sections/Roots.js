

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
          background:repeating-linear-gradient(
          -35deg,
          rgb(238, 65, 136),
          rgb(238, 65, 136) 10px,
          white 10px,
          white 20px );
          display: flex;
          width: 100vw;
          height: 60vh;
          padding: 0;
          margin: auto;
          box-sizing: border-box;
        }

        .roots h2{
          text-transform: uppercase;
          font-family: 'Poppins',sans-serif;
        }
        .roots p{
          font-size: 14px;
          background: white;
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 50vw;
          margin: auto;
          padding: 1em;
          height: 50vh;
          color: rgb(238, 65, 136);
          text-align: center;
        }
        .roots img{
          width: 50vw;
          opacity: .8;
        }

        .roots a {
          color: rgb(238, 65, 136);
          font-size: 12px;
          width: 100px;
          text-decoration: none;
          border: 3px solid rgb(238, 65, 136);
          padding: 1em;
        }
        .roots a:hover{
          background: rgb(238, 65, 136);
          color: white;
        }
{
          height: 30px;
        }
      `}
    </style>
    <div className='roots'>

      <p>
      <h2>Our Roots</h2>
      <br/>
      Once upon a time there was a girl with a high MSG sensitivity and an insatiable appetite for everything in the Asian grocer aisle…
      <div className='break'/>
      <a href='/about'>Tell Me More</a>
      </p>
     
    </div>
  </div>
)

export default Roots
