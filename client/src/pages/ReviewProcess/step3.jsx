import './step3.scss';
import star from '../../assets/icons/star.svg';

const Step3 = () => {
  let entries = [
    { id: 1, title: 'Equal Opportunies for Woman and Men' },
    { id: 2, title: 'Maternity & Adoptive Leave' },
    { id: 3, title: 'Salary Satisfaction' },
    { id: 4, title: 'Women in Leadership' },
    { id: 5, title: 'Harassment and discrimination' },
    { id: 6, title: 'Gender diversity' },
    { id: 7, title: 'Overall' },
  ];

  const Star = ({ rated }) => {
    return <img src={star} alt="star" className={rated ? 'star__icon-filled' : 'star__icon'} />;
  };
  return (
    <>
      <div className="step3">
        <div className="step3__heading"> Rating </div>
        <div className="step3__entries">
          {entries.map((i) => {
            return (
              <>
                <div className="step3__combo-con">
                  <div className="step3__c-top">
                    <div className="step3__title">{i.title}</div>
                    <div className="step3__star-con">
                      <div className="step3__star-rating">5.0</div>
                      <div className="step3__star-icon-list">
                        {[1, 2, 3, 4, 5].map((s) => {
                          return <img className="step3__star-icon" src={star} />;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="step3__c-bot">
                    <textarea
                      className="step3__textarea"
                      placeholder="(Optional Share your experience if you have any)"
                    ></textarea>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Step3;
