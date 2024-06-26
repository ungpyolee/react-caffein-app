import React from 'react';
import Header from './components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            {/* hero */}

            <div>현직자와 소통하여 배우는 실무 스킬, 퍼스널 트레이닝</div>
            <main>
                <section>인기부트캠프</section>
                <section>특가 할인 캠프</section>

                <section>커뮤니티</section>
            </main>
            <footer>caffein</footer>
        </div>
    );
};

export default Home;
