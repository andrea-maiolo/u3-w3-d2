import { Button, Card } from "react-bootstrap";
import type { ArticleT } from "../interfaces/ArticleT";
import { Link } from "react-router-dom";

interface SingleArticleProp {
  art: ArticleT;
}

const SingleArticle = (props: SingleArticleProp) => {
  const art = props.art;
  console.log(art);

  const myDate = new Date(art.updated_at).toLocaleDateString("it-IT", { year: "2-digit", month: "2-digit" });

  return (
    <>
      <Card className="h-25 text-bg-dark">
        <Card.Img variant="top" src={art.image_url} className="img-fluid" />
        <Card.Body>
          <Card.Title className="text-truncate">{art.title}</Card.Title>
          <Card.Text>{art.authors[0].name}</Card.Text>
          <Card.Text className="text-truncate">{art.summary}</Card.Text>
          <Card.Text>{art.news_site}</Card.Text>
          <Card.Text>{myDate}</Card.Text>
          <Link to={`/details/${art.id}`} className="btn btn-success">
            Read the details of the article
          </Link>
          <Button className="mt-3" target="_blank" href={art.url} variant="success">
            Go to external article
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleArticle;
