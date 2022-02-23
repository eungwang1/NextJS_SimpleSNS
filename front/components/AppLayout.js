import App from "next/app";
import propTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import { useState } from "react";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>노드버드</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <SearchInput enterButton />
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn ? (
              <UserProfile setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            )}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a
              href="https://cafe.naver.com/gathertown"
              target="_blank"
              rel="noreferrer noopener"
            >
              Made by Eungwang
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

// 타입스크립트일 경우 필요없다.
AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
