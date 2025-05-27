import { Card } from "react-bootstrap";
import type { ArticleT } from "../interfaces/ArticleT";
import { Link } from "react-router-dom";

interface SingleArticleProp {
  art: ArticleT;
}

const SingleArticle = (props: SingleArticleProp) => {
  const art = props.art;
  console.log(art);
  return (
    <>
      <Card className="h-75">
        <Card.Img variant="top" src={art.image_url} />
        <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Card.Text>{art.authors[0].name}</Card.Text>
          <Card.Text className="text-truncate">{art.summary}</Card.Text>
          <Link to={`/details/${art.id}`} className="btn btn-success">
            Read the full article
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleArticle;
