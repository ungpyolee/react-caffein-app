import React from 'react';
import styled from 'styled-components';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import 'swiper/css';

const Header = () => {
    return (
        <Layout>
            <div className="wrapper">
                <Nav>
                    <div className="icon-logo">
                        <MdOutlineLocalCafe size={32} />
                        <p>Caffein</p>
                    </div>

                    <div className="icon-profile">
                        <FaRegCircleUser size={32} />
                    </div>
                </Nav>
                <HeaderHero>
                    <Title>{`개발은 \n 카페인과 함께`}</Title>
                    <HeroImage image="https://plus.unsplash.com/premium_photo-1673984588721-9be1d3c9d592?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </HeaderHero>
            </div>
        </Layout>
    );
};

export default Header;

const Layout = styled.div`
    background-color: #000;

    .wrapper {
        max-width: 960px;
        margin: 0 auto;
        color: #fff;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .icon-logo {
        display: flex;
        align-items: center;
        P {
            font-weight: 700;
            font-size: 1.5rem;
            margin-left: 0.25rem;
        }
    }
`;

const HeaderHero = styled.div`
    padding: 4rem 1rem 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const HeroImage = styled.div<{ image: string }>`
    background-image: url(${(props) => props.image});
    background-size: cover; /* 추가: 이미지가 전체 배경을 덮도록 설정 */
    background-position: center; /* 추가: 이미지가 중앙에 위치하도록 설정 */
    width: 400px;
    aspect-ratio: 2/1.25;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5);
`;
const Title = styled.h1`
    white-space: pre-line;
    color: rgb(255, 255, 220);
`;
