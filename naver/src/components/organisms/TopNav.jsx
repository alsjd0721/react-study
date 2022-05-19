//import { useEffect, useState } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";

const LinkList = [
  { link: "/", names: "메인" },
  { link: "/movie", names: "영화" },
  { link: "/books", names: "책" },
];
const TopNav = () => {
  //   const { pathname } = useLocation();
  //   console.log();
  //   const [isShow, setIsShow] = useState(true);

  //   useEffect(() => {
  //     const isMain = pathname === "/";
  //     setIsShow(!isMain);
  //   }, [pathname]); //[pathname] 바뀔때마다 실행

  //   if (!isShow) return <></>;

  return (
    <>
      <Container>
        <Nav>
          {LinkList.map(({ link, names }) => (
            <Link to={link} key={link}>
              <BtnLink>{names}</BtnLink>
            </Link>
          ))}
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const BtnLink = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;

const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      background: #000;
      color: #fff;
    }
  }
`;

export default TopNav;
