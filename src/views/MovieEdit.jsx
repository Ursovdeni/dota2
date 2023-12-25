const React = require("react");
const Layout = require("./Layout");

function MovieEdit({ movie, user }) {
  return (
    <Layout user={user}>
      <div className="addContainer">
        <h1>Редактировать новость</h1>
        <form id="editForm" name="edit" data-movieid={movie.id}>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="title"
            defaultValue={movie.title}
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="text"
            defaultValue={movie.text}
          />
          <input
            className="form-control"
            type="text"
            name="img"
            placeholder="img"
            defaultValue={movie.img}
          />
          <button className="btn btn-dark" type="submit">
            Редактировать
          </button>
        </form>
      </div>

      <script src="/js/movie-edit.js" />
    </Layout>
  );
}

module.exports = MovieEdit;
