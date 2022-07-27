import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../Api/Api';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const handlerOnClick = async () => {
    const response = await logOut();

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    } else {
      navigate('/auth/login', { replace: true });
    }
  };

  return (
    <section className="sign sign--congrat">
      <div className="sign__container sign__container--congrat">
        <div className="sign__logobox sign__logobox--congrat">
          <p className="sign__logomain">InCode</p>
          <p className="sign__logounder">Finance</p>
        </div>
        <img
          alt="congratulation"
          className="sign__congratmainimg"
          src="./images/congrat.svg"
        />
        <p className="sign__congrattext">Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</p>
        <button
          type="button"
          className="sign__button sign__button--congrat"
          onClick={() => {
            handlerOnClick();
          }}
        >
          <span className="sign__buttonname">See you</span>
        </button>
        <img
          alt="congratulationpeople"
          className="sign__congratpeopleimg"
          src="./images/people.svg"
        />

      </div>
    </section>
  );
};
