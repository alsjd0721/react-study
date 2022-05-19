import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ link, image, title }) => (
          <Item>
            <a href={link} target="_blank" rel="noreferrer">
              <Tumbmail src={image} />
              <Title
                dangerouslySetInnerHTML={{
                  //__html: `<div onClick="alert('이것도 너프해보시지')">안녕하세요 ^^</div>`,
                  __html: title,
                }}
              />
            </a>
          </Item>
        ))}
      </List>
    </>
  );
};
const List = styled.ul`
  padding: 10px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Item = styled.li``;
const Tumbmail = styled.img`
  width: 100%;
`;

const Title = styled.p``;
export default MovieList;
