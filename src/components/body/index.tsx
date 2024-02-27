import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDailyNews } from "../../store";
import {
  AbstractNews,
  ArticleLink,
  Author,
  BodyContent,
  CardNews,
  Category,
  ContainerNews,
  ContentNews,
  HeadlineNews,
  PDFUri,
} from "./styles";
import { Box, Button } from "@mui/material";

export const BodyNews = () => {
  const { news, getDailyNews } = useDailyNews();

  useEffect(() => {
    getDailyNews();
  }, []);

  return (
    <ContainerNews>
      {news.map((data) => (
        <CardNews key={data.id}>
          <ContentNews>
            <HeadlineNews>{data.headline}</HeadlineNews>
            <AbstractNews>{data.abstract}</AbstractNews>
            <BodyContent>
              <strong>Content: </strong>
              <div className="wrapper">
                <p className="wrapper-text">{data.body}</p>
              </div>
            </BodyContent>
            <Author>
              <strong>Author:</strong> {data.author}
            </Author>
            <Category>
              <strong>Category:</strong> {data.section}
            </Category>
            <ArticleLink>
              <strong>Link:</strong>
              <Link to={data.article_uri}>{data.article_uri}</Link>
            </ArticleLink>
            <PDFUri>
              <strong>PDF:</strong>
              <Link to={`${data.pfd_uri && data.pfd_uri.length}`}>
                {data.pfd_uri}
              </Link>
            </PDFUri>
          </ContentNews>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            padding={"1em"}
            marginBottom={"auto"}
          >
            <Button variant="contained">
              <Link
                style={{ textDecoration: "none", color: "#FFF" }}
                to={data.article_uri}
              >
                Read More
              </Link>
            </Button>
          </Box>
        </CardNews>
      ))}
    </ContainerNews>
  );
};
