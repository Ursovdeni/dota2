const React = require("react");

function MovieCard({ movie, user }) {
  console.log("------------->>>>>>>>>>>>>", user);
  return (
    <div className="movieCard">
      <img src={movie.img} className="cardImage" alt="..." />
      <div className="cardOverlay">
        <h5 className="cardTitle">{movie.title}</h5>
        <p className="cardText">{movie.text}</p>
        {user?.userName === "admin" && (
            <a
              href={`/news/${movie.id}`}
              className="btn btn-secondary detailButton"
            >
              Подробнее
            </a>
        )}
      </div>
    </div>
  );
}

module.exports = MovieCard;
