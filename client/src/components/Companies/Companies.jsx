import './Companies.scss';

const Companies = () => {
  let company = {
    company_name: 'Company Name',
    location_name: 'location x',
    industry_name: 'industry x',
    dni: 'D&I x',
    stars: '4.2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  };
  let arr = [1, 2, 3];
  return (
    <>
      <div className="companies">
        <div className="companies__top">
          <div className="companies__hero"></div>
          <div className="companies__user-con">
            <div className="companies__user-pfp"></div>
            <div className="companies__user-info"></div>
          </div>
        </div>
        <div className="companies__mid">Explore Companies</div>
        <div className="companies__bottom">
          <div className="companies__card-con">
            {arr.map((i) => {
              return (
                <div className="card" key={i}>
                  <div className="card__left"></div>
                  <div className="card__right">
                    <div className="card__r-top">
                      <div className="card__company-name-header">
                        {company['company_name']}
                      </div>
                      <div className="card__company-stars">
                        {company['stars']}
                      </div>
                    </div>
                    <div className="card__r-mid">
                      <div className="card__location">
                        {company['location']}
                      </div>
                      <div className="card__Industry">
                        {company['industry_name']}
                      </div>
                      <div className="card__dni">{company['dni']}</div>
                    </div>
                    <div className="card__r-bot">
                      <div className="card__description">
                        {company['description']}
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
