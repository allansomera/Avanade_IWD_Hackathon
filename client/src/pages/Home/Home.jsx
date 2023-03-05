import './Home.scss';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {
  const [clickedItem, setClickedItem] = useState('Companies');
  return (
    <>
      <div className="home">
        <section className="home__main">
          <div className="home__menu">
            <Menu clickedItem={clickedItem} setClickedItem={setClickedItem} />
          </div>
          <div className="home__content">
            <MenuContent header={clickedItem} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
