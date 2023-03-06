import './step2.scss';
import { Link } from 'react-router-dom';

const Step2 = () => {
  return (
    <>
      <div className="step2">
        <div className="step2__heading">Job Information</div>
        <div className="step2__combo1">
          <div className="step2__job-location-con">
            <div className="step2__job-location-header"> Job Location *</div>
            <div className="step2__job-location-input">
              <input type="text" />
            </div>
          </div>
          <div className="step2__job-title-con">
            <div className="step2__job-title-header"> Job Title*</div>
            <div className="step2__job-title-input">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="step2__combo2">
          <div className="step2__job-type-con">
            <div className="step2__job-type-header"> Job Type*</div>
            <div className="step2__job-type-input">
              <input type="text" />
            </div>
          </div>
          <div className="step2__job-level-con">
            <div className="step2__job-level-header"> Job Level*</div>
            <div className="step2__job-level-input">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="step2__link">
        <Link to="/process/rate-step3">NEXT</Link>
      </div>
    </>
  );
};

export default Step2;
