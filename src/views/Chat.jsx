const React = require("react");
const Layout = require("./Layout");

function Chat({ user }) {
  return <Layout user={user}>
    <div className="editContainer">
      <h1>Чат пока недоступен</h1>
    </div>
  </Layout>
}

module.exports = Chat;
