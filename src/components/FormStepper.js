import React from "react";
import FormStepperHeader from "./FormStepperHeader";
type FormStepperProps = {
  onStepChange: Function,
  step: number,
};

const FormStepper: React.FC<FormStepperProps> = ({ onStepChange, step }) => {
  // data state
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    password: "",
    jobtitle: "",
    education: "",
    location: "",
  });

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const __tempObject = { ...data };
    __tempObject[e.target.name] = e.target.value;
    setData(__tempObject);
  };

  return (
    <div className="form-stepper">
      <FormStepperHeader />
      <div className="form_stepper__body">
        {/* Basic Info form ==step1 */}
        {step === 1 && (
          <div className="form-stepper__step1">
            <h2>Basic Info</h2>
            <div className="input-group">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                name="email"
                onChange={handleInputChange}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )}

        {/* Background form ==step2 */}
        {step === 2 && (
          <div className="form-stepper__step1">
            <h2>Background</h2>
            <div className="input-group">
              <label htmlFor="jobtitle">Job title</label>
              <input type="text" name="jobtitle" onChange={handleInputChange} />

              <label htmlFor="education">Education</label>
              <input
                type="text"
                required
                name="education"
                onChange={handleInputChange}
              />

              <label htmlFor="Location">Location</label>
              <input type="text" name="Location" onChange={handleInputChange} />
            </div>
          </div>
        )}
        {/* final form   ==step3 */}
        <div className="form-stepper__step1"></div>
      </div>
      <div className="form-stepper__action">
        {step > 1 && (
          <button
            className="btn btn-back"
            onClick={() => onStepChange(step - 1)}
          >
            Back
          </button>
        )}

        <button
          className="btn btn-next"
          onClick={() => onStepChange(step + 1)}
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormStepper;
