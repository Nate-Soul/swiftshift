"use client";

import { useRef, useState } from "react";

import FormSubmitBtn from "./FormSubmitBtn";

interface PurchaseSiteFormProps {
  title: string;
};

const BuySiteForm: React.FC<PurchaseSiteFormProps> = ({ title }) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const formRef = useRef<HTMLFormElement>(null);

    const [formErrorMsg, setFormErrorMsg] = useState({
        firstNameErr: "",
        lastNameErr: "",
        emailAdddressErr: "",
        phoneNumberErr: "",
        messagePurposeErr: "",
    });

    const handleFormSubmit = async (formData: FormData) => {        
        const formActionUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTfNed3fDtYghFTvFRjG3HQ-1PS0cgarkyzbB9yQKKLPxl2g/formResponse";

        try {
            await fetch(formActionUrl, {
                method: "POST",
                body: formData,
                mode: "no-cors"
            });
            setSuccessMsg("Thank you for your interest! We'll get back to you shortly");
            setTimeout(() => {
                setSuccessMsg("");
            }, 5000);

            if(formRef.current) {
              formRef.current.reset();
            }
        } catch (err) {
            setErrMsg("Message not sent! Something went wrong, please try again later.");
            setTimeout(() => {
                setErrMsg("");
            }, 5000);
        }
    };

  return (
    <>
      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dark-500 font-black mb-10">
        {title}
      </h4>
      <form
        ref={formRef}
        action={handleFormSubmit} 
        className="grid grid-cols-2 gap-4"
      >
        <div className="col-span-full lg:col-span-1 form-group flex flex-col gap-y-2">
          <label htmlFor="firstName" className="text-dark-400 text-lg">
            First name
          </label>
          <input
            type="text"
            name="entry.2093182717"
            id="firstName"
            className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300"
            required
          />
          {formErrorMsg.firstNameErr && (<small className="text-sm text-red-500">{formErrorMsg.firstNameErr}</small>)}
        </div>
        <div className="col-span-full lg:col-span-1 form-group flex flex-col gap-y-2">
          <label htmlFor="lastName" className="text-dark-400 text-lg">
            Last name
          </label>
          <input
            type="text"
            name="entry.822924096"
            id="lastName"
            className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300"
            required
          />
          {formErrorMsg.lastNameErr && (<small className="text-sm text-red-500">{formErrorMsg.lastNameErr}</small>)}
        </div>
        <div className="col-span-full lg:col-span-1 form-group flex flex-col gap-y-2">
          <label htmlFor="emailAddress" className="text-dark-400 text-lg">
            Email
          </label>
          <input
            type="email"
            name="entry.1282167033"
            id="emailAddress"
            className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300"
            required
          />
          {formErrorMsg.emailAdddressErr && (<small className="text-sm text-red-500">{formErrorMsg.emailAdddressErr}</small>)}
        </div>
        <div className="col-span-full lg:col-span-1 form-group flex flex-col gap-y-2">
          <label htmlFor="phoneNumber" className="text-dark-400 text-lg">
            Phone number
          </label>
          <input
            type="tel"
            name="entry.1940179019"
            id="phoneNumber"
            className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300"
            required
          />
          {formErrorMsg.phoneNumberErr && (<small className="text-sm text-red-500">{formErrorMsg.phoneNumberErr}</small>)}
        </div>
        <div className="col-span-full form-group flex flex-col gap-y-2">
          <label htmlFor="messagePurpose" className="text-dark-400 text-lg">
            Purpose of Message
          </label>
          <textarea
            name="entry.753894063"
            id="messagePurpose"
            className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300"
            rows={4}
            required
          ></textarea>
          {formErrorMsg.messagePurposeErr && (<small className="text-sm text-red-500">{formErrorMsg.messagePurposeErr}</small>)}
        </div>
        <div className="col-span-full form-group flex flex-col gap-y-2">
          <label htmlFor="additionalInfo" className="text-dark-400 text-lg">
            Additional Information
          </label>
          <textarea
            name="entry.1918728663"
            id="additionalInfo"
            className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300"
            rows={2}
          ></textarea>
        </div>
        <div>
            <input type="hidden" name="form_action_url" value="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTfNed3fDtYghFTvFRjG3HQ-1PS0cgarkyzbB9yQKKLPxl2g/formResponse" />
            <FormSubmitBtn/>
            {(successMsg || errMsg) && <div className="mt-5 p-2 shadow-custom-sm rounded-md bg-white">
                {successMsg !== "" && (<p className="text-green-600">{successMsg}</p>)}
                {errMsg !== "" && (<p className="text-red-500">{errMsg}</p>)}
            </div>}
        </div>
      </form>
    </>
  );
};

export default BuySiteForm;
