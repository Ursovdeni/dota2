const React = require("react");
const NavBar = require("./components/NavBar");

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="icon" href="/img/logo.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <title>Dota 2</title>
      </head>
      <body>
        <header>
          <NavBar user={user} />
        </header>
        <main>
          <div className="d-flex flex-column align-items-center">
            {children}
          </div>
        </main>
        <script defer src="/js/logout.js" />
        <script defer src="/js/navbar.js" />
        <script defer src="/js/players.js" />
        <script defer src="/js/functions.js" />
        <script defer src="/js/chat.js" />
        <script defer src="/js/scriptChat.js" />
        <script defer src="/js/functions.js" />
        <footer>
          <img
            className="rootfooter_FooterLogo_2XaNu"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
          />
          <img
            className="rootfooter_FooterLogo_2XaNu"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
          />
          <p className="textFooter">
            Dota и логотип Dota являются товарными знаками и/или
            зарегистрированными товарными знаками Valve Corporation 2023.
          </p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
