import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Work+Sans&display=swap');
        nav {
            margin-bottom: 0;
            width: 100vw;
            height: 120px;
            display: block;
            background: rgb(238,65,136);
          }
          #topNav {
            font-size: 14px;
            list-style: none;
            display: flex;
            margin-top: 0;
            width: 100vw;
            text-align: center;
            justify-content: center;
            align-content: center;
            padding: 0;
          }
          #name {
            display: flex;
            text-align: center;
            justify-content: center;
            align-content: center;
            padding: 1em;
            letter-spacing: 2px;
            font-style: bold;
            font-family: 'Work Sans', sans-serif;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 800;
          }
          #logo{
              height: 90px;
              padding-right: 50vw;

          }
          li {
            margin: 1em;
            text-align: right;
            letter-spacing: 3px;
            align-content:center;
            justify-content: center;
            font-weight: 800;
          }
          a {
            text-decoration: none;
            text-transform: lowercase;
            color:white;
            font-size: 14px;  
            font-family: 'work sans',sans-serif;
          }
          a::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: rgba(0,0,0,.7);
            transition .1s;
        }
        a:hover{
          color:rgb(166,213,223);
          font-style: italic;
          transition: 3s ease;
        }
          }
        `}
      </style>
      <Link href='/'>
        <a id='name' title='Home'>
          The Good Chili
        </a>
      </Link>{' '}
      <ul id='topNav'>
        <li></li>
        <li>
          <Link href='/shop'>
            <a title='shop'>Shop</a>
          </Link>
        </li>
        <li>
          <Link href='/roots'>
            <a title='Our Roots'>Our Roots</a>
          </Link>{' '}
        </li>
        <li>
          <Link href='/spices'>
            <a title='All That Spices'>All That Spices</a>
          </Link>
        </li>
        <li>
          <Link href='/recipes'>
            <a title='How We Kick It'>How We Kick It</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a title='Contact Us'>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
