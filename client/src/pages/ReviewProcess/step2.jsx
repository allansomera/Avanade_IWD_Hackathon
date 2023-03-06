import './step2.scss';
import { Link } from 'react-router-dom';
import prog from '../../assets/images/ProgressIndicator_2.png';

const Step2 = () => {
  return (
    <>
      <div className="step2">
        <div className="step2__progress-con">
          <img src={prog} />
        </div>
        <div className="step2__heading">Job Information</div>
        <div className="step2__combo1">
          <div className="step2__job-location-con">
            <div className="step2__job-location-header"> Job Location *</div>
            <input className="step2__job-location-input" type="text" placeholder="Job Location" />
          </div>
          <div className="step2__job-title-con">
            <div className="step2__job-title-header"> Job Title*</div>
            <select className="step2__job-title-input" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>
                Job Title
              </option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div>
        </div>
        <div className="step2__combo2">
          <div className="step2__job-type-con">
            <div className="step2__job-type-header"> Job Type*</div>

            <select className="step2__job-type-input" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>
                Job Type
              </option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div>
          <div className="step2__job-level-con">
            <div className="step2__job-level-header"> Job Level*</div>

            <select className="step2__job-level-input" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>
                Job Type
              </option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div>
        </div>
      </div>
      <div className="step2__next">
        <Link className="step2__next-btn" to="/process/rate-step3">
          NEXT
        </Link>
      </div>
    </>
  );
};

export default Step2;
