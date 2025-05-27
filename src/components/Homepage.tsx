import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import type { ArticleT } from "../interfaces/ArticleT";
import SingleArticle from "./SingleArticle";

const Homepage = () => {
  const [articles, setArticles] = useState<ArticleT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");

      if (!response.ok) {
        setError("errore nella fetch sorry");
        throw new Error();
      } else {
        const data = await response.json();
        console.log(data);
        setLoading(!loading);
        setArticles(data.results);
      }
    } catch (error) {
      console.log(error);
      setLoading(!loading);
      setError("errore nella fetch sorry");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (articles) {
    console.log(articles);
  }
  return (
    <>
      {loading && (
        <Container>
          <Row className="justify-content-center">
            <Spinner animation="border" role="status" variant="success"></Spinner>
            <Spinner animation="border" role="status" variant="success"></Spinner>
            <Spinner animation="border" role="status" variant="success"></Spinner>
          </Row>
        </Container>
      )}
      {!loading && error && (
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Errore: {error}</h1>
            </Col>
          </Row>
        </Container>
      )}
      {!loading && !error && articles && (
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1 className="text-white">Ultimi articoli</h1>
              <Row sm={12} md={4} lg={3}>
                {articles.map((art) => {
                  return <SingleArticle key={art.id} art={art} />;
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Homepage;
