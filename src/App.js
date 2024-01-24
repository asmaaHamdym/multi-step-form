import React from "react";
import FormStepper from "./components/FormStepper";
import "./App.css";

function App() {
  const [step, setStep] = React.useState(0);
  const handleStep = (step) => {
    setStep(step);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="onboarding_left">
          <div className="onboarding_left_image">
            <img
              src="https://cdn.pixabay.com/photo/2023/07/19/03/23/girl-8135986_640.png"
              alt="user on computer"
            />
          </div>
        </div>
        <div className="onboarding_right">
          {
            /**when step is 0, show main screen */
            step === 0 && (
              <div className="first-step">
                <h2>Welcome</h2>
                <p>Please Sign up to continue</p>
                <div className="first-step-buttons">
                  <button className="btn btn-fb">Sign up with Facebook</button>
                  <button className="btn btn-tw">Sign up with Twitter</button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleStep(1)}
                  >
                    Sign up with Email
                  </button>
                </div>
              </div>
            )
          }

          {
            /**if the stepper is higher than 0, render the stepper */
            step > 0 && <FormStepper onStepChange={handleStep} step={step} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
