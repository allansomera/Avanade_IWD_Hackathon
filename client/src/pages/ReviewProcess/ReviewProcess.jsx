import './ReviewProcess.scss';
import { Link, Outlet } from 'react-router-dom';
import Step1 from './step1';

const ReviewProcess = () => {
  return (
    <>
      <div className="reviewprocess">
        <div className="reviewprocess__content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ReviewProcess;
