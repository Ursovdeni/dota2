const React = require("react");
const Layout = require("../Layout");

function Player({ user }) {
  return (
    <Layout user={user}>
      <div className="mmrContainer">
        {user ? (
          <form id="playerForm">
            <button type="submit">Получить информацию</button>
          </form>
        ) : (
          <label htmlFor="accountID">
            Пожалуйста, войдите или зарегистрируйтесь
          </label>
        )}

        <div id="resultContainer"></div>
      </div>
    </Layout>
  );
}

module.exports = Player;
