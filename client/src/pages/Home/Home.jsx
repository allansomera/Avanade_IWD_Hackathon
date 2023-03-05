import './Home.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import MenuContent from '../../components/MenuContent/MenuContent';

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
