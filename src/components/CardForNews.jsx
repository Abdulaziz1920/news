import PropTypes from "prop-types";
const CardForNews = (props) => {
  const { urlToImage, title, description, author, publishedAt } = props;
  return (
    <div>
      <div className="items">
        <img width={340} height={220} src={urlToImage} alt="" />
        <h1>{title}</h1>
        <p className="line-clamp">{description}</p>
        <div className="author">
          <h2>{author}</h2>
          <p>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

CardForNews.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default CardForNews;
