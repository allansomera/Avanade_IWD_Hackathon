import './step1.scss';
import { Link } from 'react-router-dom';
import prog from '../../assets/images/ProgressIndicator_1.png';

const Step1 = () => {
  return (
    <>
      <div className="step1">
        <div className="step1__progress-con">
          <img src={prog} />
        </div>
        <div className="step1__heading">Rate a place youve worked</div>
        <div className="step1__sub">
          Ratings are anonymous and only takes a few mins
          <br />
          Each ratign we receive contributes to help women build workpaces wher they can succeed
        </div>
        <div className="step1__company-heading">Comany Name *</div>
        <input
          className="step1__company-input"
          type="text"
          name="cname"
          placeholder="Enter Company Name"
        />
        <div className="step1__status-heading">Employment Status *</div>
        <div className="step1__form">
          <form>
            <div className="step1__label1-con">
              <label htmlFor="html">Current Employee</label>
                <input type="radio" id="html" name="fav_language" value="HTML" /> 
            </div>
            <div className="step1__label2-con">
              <label htmlFor="css">Previous Employee</label>
                <input type="radio" id="css" name="fav_language" value="CSS" /> 
            </div>
          </form>
        </div>
        <div className="step1__next">
          <Link className="step1__next-btn" to="/process/rate-step2">
            NEXT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step1;
