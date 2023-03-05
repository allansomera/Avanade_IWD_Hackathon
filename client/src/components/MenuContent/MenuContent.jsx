import './MenuContent.scss';
import Companies from '../Companies/Companies';
import Salaries from '../Salaries/Salaries';

const MenuContent = ({ header }) => {
  const contentSection =
    header === 'Companies' ? (
      <Companies />
    ) : (
      <div className="salaries-content-con">
        <Salaries />
      </div>
    );
  return (
    <>
      <div className="menu-content">
        <section className="menu-content__content-section">{contentSection}</section>
      </div>
    </>
  );
};

export default MenuContent;
