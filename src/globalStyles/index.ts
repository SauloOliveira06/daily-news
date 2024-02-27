import styled from "styled-components";

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
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

export const HeaderNews = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 130px;
  border-bottom: 2px solid #3c3c3c;
`;
