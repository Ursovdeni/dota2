const React = require("react");
const Layout = require("../Layout");

function Primal_beast({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PRIMAL BEAST</h1>
        <p>
          Primal Beast свирепо расталкивает врагов и союзников, чтобы вклиниться
          в битву и устроить переполох. Этот зверь являет неминуемую угрозу для
          любого противника, наказывая своих обидчиков и упиваясь возможностью
          схватить добычу и вбить её в землю, пока от неё не останется лишь
          кровавое месиво.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Primal_beast;
