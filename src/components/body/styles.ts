import styled from "styled-components";

export const ContainerNews = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 2em;
  padding-right: 40px;
  padding-left: 40px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;

export const CardNews = styled.div`
  max-width: 350px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #9c9c9c;
  overflow: hidden;
`;

export const ContentNews = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  height: 450px;
`;

export const HeadlineNews = styled.h3`
  font-weight: 600;
`;

export const AbstractNews = styled.h5`
  font-weight: 550;
  margin: 0 0 20px;
`;

export const BodyContent = styled.div`
  .wrapper {
    max-width: 400px;
  }

  .wrapper-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: auto;
  }
`;

export const Author = styled.p`
  font-weight: 500;
  margin: 20px 0 0;
`;

export const Category = styled.p`
  font-weight: 400;
  margin: 5px 0 0;
`;

export const ArticleLink = styled.p`
  font-weight: 400;
  margin: 5px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PDFUri = styled.p`
  font-weight: 400;
  margin: 5px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
