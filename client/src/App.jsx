import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
// import Overview from './pages/Company/Overview';
import CompanyOverview from './pages/Home/CompanyOverview';
import Post from './pages/Company/Post';
import ReviewProcess from './pages/ReviewProcess/ReviewProcess';
import CompanyReview from './pages/Company/CompanyReview';
import Step1 from './pages/ReviewProcess/step1';
import Step2 from './pages/ReviewProcess/step2';
import Step3 from './pages/ReviewProcess/step3';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />}>
              <Route path="overview" element={<CompanyOverview />} />
              <Route path="post" element={<Post />} />
              <Route path="review" element={<CompanyReview />} />
            </Route>
            <Route path="process" element={<ReviewProcess />}>
              <Route path="rate-step1" element={<Step1 />} />
              <Route path="rate-step2" element={<Step2 />} />
              <Route path="rate-step3" element={<Step3 />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
