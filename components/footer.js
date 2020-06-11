const Footer = () => (
    <footer id='footer'>
      <style jsx>
        {`
          #footer {
            display: relative;
            box-sizing: border-box;
            left: 0px;
            bottom: 0;
            height: 100px;
            min-width: 100%;
            color: rgb(238,65,136);
            margin: 0;
            padding-top: 1em;
            text-align: center;
          }
          #footerName {
            font-family: 'Arimo', sans-serif;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 3px;
            padding-top: 1em;
          }
          #links a{
            text-decoration: none;
            font-family: 'Arimo', sans-serif;
            margin-right: 2em;
            color: white;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 3px;
          }
         .footer__socials:hover > a{
            opacity: .8;
          }
  
          .footer__socials:hover > a:hover{
            opacity: 1.0;
          }
  
           a:hover{
            color: red;
          }
          .fab {
            padding: 10px;
            font-size: 18px;
            width: 30px;
            text-align: center;
            color:rgba(0,0,0,.8);
            text-decoration: none;
            margin-right: 1em;
            align-content: center;
          }
          a:hover{
            color: red;
            transform: translate(0,-10%);
          }
          #footerName {
            margin-top: 0;
          }
          #footerName:hover{
            transition: all ease-out 3s;
            color: red;
          }
          @media(max-width:700px){
            #footer{
              width: 100vw;
            }
          }
        `}
      </style>
      <div className='footer__content'>
        <div className='footer__socials'>
          <a
            className='fab fa-twitter'
            href='https://twitter.com/'
          />
          <a
            className='fab fa-facebook-f'
            href='https://www.facebook.com/'
          />
          <a
            className='fab fa-instagram'
            href='https://www.instagram.com/'
          />
          <p id='footerName'>
          © The Good Chili 2020
          </p>
        </div>
      </div>
    </footer>
  )
  
  export default Footer
  