import './Companies.scss';

const Companies = () => {
  let company = {
    company_name: 'Company Name',
    location_name: 'location x',
    industry_name: 'industry x',
    dni: 'D&I x',
    stars: '4.2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    review_count: 342,
    salaries_count: 204,
    jobs_count: 198,
  };
  let arr = [1, 2, 3];
  return (
    <>
      <div className="companies">
        <div className="companies__top">
          <div className="companies__hero-con">
            <div className="companies__hero"></div>
            <div className="companies__hero-sub">
              propel your career with a company that aligns with your values
            </div>
          </div>
          <div className="companies__user-con">
            <div className="companies__user-pfp"></div>
            <div className="companies__user-name">Username</div>
            <div className="companies__user-info">
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
        <div className="companies__mid">Explore Companies</div>
        <div className="companies__bottom">
          <div className="companies__card-con">
            {arr.map((i) => {
              return (
                <div className="card" key={i}>
                  <div className="card__left">
                    <div className="card__l-comp-pic"></div>
                  </div>
                  <div className="card__right">
                    <div className="card__r-float">
                      <div className="card__f-review-con">
                        <div className="card__f-review-count">
                          {company['review_count']}
                        </div>
                        <div className="card__f-review-sub">Reviews</div>
                      </div>
                      <div className="card__f-salaries-con">
                        <div className="card__f-salaries-count">
                          {company['salaries_count']}
                        </div>
                        <div className="card__f-salaries-sub">Salaries</div>
                      </div>
                      <div className="card__f-jobs-con">
                        <div className="card__f-jobs-count">
                          {company['jobs_count']}
                        </div>
                        <div className="card__f-josbs-sub">Jobs</div>
                      </div>
                    </div>
                    <div className="card__r-top">
                      <div className="card__company-name">
                        {company['company_name']}
                      </div>
                      <div className="card__company-stars">
                        {company['stars']}
                      </div>
                    </div>
                    <div className="card__r-mid">
                      <div className="card__location-con">
                        <div className="card__location-title">Location</div>
                        <div className="card__location-sub">
                          {company['location_name']}
                        </div>
                      </div>
                      <div className="card__industry-con">
                        <div className="card__industry-title">Industry</div>
                        <div className="card__industry-sub">
                          {company['industry_name']}
                        </div>
                      </div>
                      <div className="card__dni-con">
                        <div className="card__dni-title">D & I</div>
                        <div className="card__dni-sub">{company['dni']}</div>
                      </div>
                    </div>
                    <div className="card__r-bot">
                      <div className="card__description-con">
                        <div className="card__description-title">
                          Description
                        </div>
                        <div className="card__description-sub">
                          {company['description']}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
