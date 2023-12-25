const React = require("react");
const Layout = require("./Layout");
const MovieCard = require("./components/MovieCard");

function Movies({ movies, user }) {
  return (
    <Layout user={user}>
      <div className="moviesContainer">
        <h1 className="moviesTitle">Новости</h1>
        <div className="moviesGrid">
          {user?.userName === "admin" && (
            <a
              href={`/news/new`}
              className="btn btn-secondary detailButton btnAdd addNewsA"
            >
              Создать новость
            </a>
          )}
          {movies.map((movie) => (
            <MovieCard user={user} key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Movies;
