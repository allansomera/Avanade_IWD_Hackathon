import './Companies.scss';
import avanade from '../../assets/icons/Avanade Logo.png';
import deloitte from '../../assets/icons/Deloitte Logo.png';
import bestbuy from '../../assets/icons/Best Buy Logo.png';
import td from '../../assets/icons/TD Logo.png';
import star from '../../assets/icons/star.svg';
import hero from '../../assets/images/Image.png';
import { useNagivate } from 'react-router-dom';

const Companies = () => {
  // const navigate = useNagivate();
  let arr = [
    {
      logo: avanade,
      company_name: 'Avanade',
      location_name: 'Vancouver, BC',
      industry_name: 'Information Technology Support Services',
      dni: '4.9',
      stars: '4.2',
      description:
        'Avanade is the leading provider of innovative digital, cloud and advisory services, industry solutions and design-led experiences across the Microsoft ecosystems. Every day, our 56,000 professionals in 26 countries make a genuine human...',
      review_count: 342,
      salaries_count: 204,
      jobs_count: 198,
    },
    {
      logo: deloitte,
      company_name: 'Deloitte',
      location_name: 'Vancouver, BC',
      industry_name: 'Accounting and Tax',
      dni: '4.7',
      stars: '4.0',
      description:
        'At Deloitte, we are driven to inspire and help our people, organization, communities and country to thrive. Our purpose is to build a better future by accelerating and expanding access to knowledge',
      review_count: 342,
      salaries_count: 204,
      jobs_count: 198,
    },
    {
      logo: td,
      company_name: 'TD',
      location_name: 'Vancouver, BC',
      industry_name: 'Banking & Lending',
      dni: 'D&I x',
      stars: '4.2',
      description:
        'TD Bank Group is one of the larges banks in North America, with deep roots in the community dating back more than 150 years. We  offer retail, small business and commercial banking products and services to millions of customers accross...',
      review_count: 342,
      salaries_count: 204,
      jobs_count: 198,
    },
    {
      logo: bestbuy,
      company_name: 'Best Buy',
      location_name: 'Vancouver, BC',
      industry_name: 'Electronics & Appliances',
      dni: 'D&I x',
      stars: '4.2',
      description:
        'Best Buy is one of Canadas largest and most successful retailers, operating the Best Buy (www.bestbuy.ca), Best Buy Mobile and Geek Squad (www.geeksquad.ca) brands. The company offers consumers a unique shopping experince with...',
      review_count: 342,
      salaries_count: 204,
      jobs_count: 198,
    },
  ];
  return (
    <>
      <div className="companies">
        <div className="companies__top">
          <div className="companies__hero-con">
            <div className="companies__hero">
              <img className="companies__hero-pic" src={hero} />
            </div>
            <div className="companies__sub-con">
              <div className="companies__hero-sub">
                Propel your career with a company that aligns with your values
              </div>
              <div className="companies__hero-sub2">
                Let us help you find a company that values meaningful and sustainable progress
                toward gender equality. You deserve more.
              </div>
            </div>
          </div>
        </div>
        <div className="companies__mid">Explore Companies</div>
        <div className="companies__bottom">
          <div className="companies__card-con">
            {arr.map((i) => {
              return (
                <div className="card" key={i.company_name}>
                  <div className="card__left">
                    <div className="card__l-comp-pic">
                      <img className="card__src" src={i['logo']} />
                    </div>
                  </div>
                  <div className="card__right">
                    <div className="card__r-float">
                      <div className="card__f-review-con">
                        <div className="card__f-review-count">{i['review_count']}</div>
                        <div className="card__f-review-sub">Reviews</div>
                      </div>
                      <div className="card__f-salaries-con">
                        <div className="card__f-salaries-count">{i['salaries_count']}</div>
                        <div className="card__f-salaries-sub">Salaries</div>
                      </div>
                      <div className="card__f-jobs-con">
                        <div className="card__f-jobs-count">{i['jobs_count']}</div>
                        <div className="card__f-josbs-sub">Jobs</div>
                      </div>
                    </div>
                    <div className="card__r-top">
                      <div className="card__company-name">{i['company_name']}</div>
                      <div className="card__company-stars-con">
                        <div className="card__company-rating">{i['stars']}</div>
                        <img src={star} alt="" className="card__company-star-icon" />
                      </div>
                    </div>
                    <div className="card__r-mid">
                      <div className="card__location-con">
                        <div className="card__location-title">Location</div>
                        <div className="card__location-sub">{i['location_name']}</div>
                      </div>
                      <div className="card__industry-con">
                        <div className="card__industry-title">Industry</div>
                        <div className="card__industry-sub">{i['industry_name']}</div>
                      </div>
                      <div className="card__dni-con">
                        <div className="card__dni-title">D & I</div>
                        <div className="card__dni-sub">{i['dni']}</div>
                      </div>
                    </div>
                    <div className="card__r-bot">
                      <div className="card__description-con">
                        <div className="card__description-title">Description</div>
                        <div className="card__description-sub">{i['description']}</div>
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
