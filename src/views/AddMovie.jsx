const React = require("react");
const Layout = require("./Layout");

function AddMovie({ user }) {
  return (
    <Layout user={user}>
      <div className="addContainer">
        <h1>Добавить новость</h1>
        <form action="/api/news" method="POST">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="title"
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="text"
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="img"
            placeholder="img"
          />
          <br />
          <button className="btn btn-dark" type="submit">
            Создать
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = AddMovie;
