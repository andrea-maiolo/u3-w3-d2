import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import type { ArticleT } from "../interfaces/ArticleT";

const DetailPage = () => {
  const params = useParams();
  console.log(params);

  const [currentArticle, setCurrentArticle] = useState<ArticleT | null>(null);

  const fetchSingleArticle = async () => {
    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`);
      if (!response.ok) {
        throw new Error();
      } else {
        const data = await response.json();
        console.log(data);
        setCurrentArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <>
      {currentArticle && (
        <Card className="h-75">
          <Card.Img variant="top" src={currentArticle.image_url} />
          <Card.Body>
            <Card.Title>{currentArticle.title}</Card.Title>
            <Card.Text>{currentArticle.authors[0].name}</Card.Text>
            <Card.Text>{currentArticle.summary}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default DetailPage;
