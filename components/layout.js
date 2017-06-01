import Link from 'next/link'
import Head from 'next/head'
export default ({ children, title = 'Thomas Greco JavaScript' }) => (
  <div className="site">
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
       <style>{`
       body {
         font-size: 16px;
         margin: 0;
         padding: 0;
         font-family: 'Lato', sans-serif;
       }
       .site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
       }
       .site-content {
         flex: 1;
       }
       body > div {
         background: #ff5400;
       }
       nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        background: #002bff;
       }
       nav a, footer a {
        color: #fff;
        text-decoration: none;
       }
      .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        }
      .banner img {
         max-width: 400px;
         margin: 1.3em;
                 animation: App-logo-spin infinite 20s linear;
        }
        .flex-col {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .flex-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      footer {
        background: #002bff;
        height: 75px;
        text-align: center;
        color: #fff;
        padding: 1em;
      }
      .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 80px;
      }

      @keyframes App-logo-spin {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
      }

        `}
      </style>
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header>
      <div className="banner">
        <img src="/static/tg-icon.png" alt=""/>
      </div>
      <div className="site-content">
    { children }
      </div>
    <footer className="flex-col">
      <p>
        Created by Thomas Greco - <a href="https://twitter.com/tgrecojs">Twitter</a>
      </p>
      <p>Thanks to Zeit and Facebook Developers</p>
    </footer>
  </div>
)