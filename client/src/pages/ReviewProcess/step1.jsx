import './step1.scss';
import { Link } from 'react-router-dom';

const Step1 = () => {
  return (
    <>
      <div className="step1">
        <div className="step__heading">Rate a place youve worked</div>
        <div className="step__sub">
          Ratings are anonymous and only takes a few mins
          <br />
          Each ratign we receive contributes to help women build workpaces wher they can succeed
        </div>
        <div className="step1__company-heading">Comany Name *</div>
        <div className="step1__company-input">
          <input type="text" name="cname" />
        </div>
        <div className="step1__status-heading">Employment Status *</div>
        <div className="step1__status-con">
          <input type="text" name="cname" />
        </div>
        <div className="step1__form">
          <form>
            <div className="step1__label1-con">
              <label for="html">Current Employee</label>
                <input type="radio" id="html" name="fav_language" value="HTML" />  <br />
            </div>
            <div className="step1__label2-con">
              <label for="css">Previous Employee</label>
                <input type="radio" id="css" name="fav_language" value="CSS" />  <br />
            </div>
          </form>
        </div>
        <div className="step1__next">
          <Link to="/process/rate-step2">NEXT</Link>
        </div>
      </div>
    </>
  );
};

export default Step1;
