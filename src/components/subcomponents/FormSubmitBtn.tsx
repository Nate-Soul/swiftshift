import { useFormStatus } from "react-dom";

const FormSubmitBtn = () => {

    const { pending } = useFormStatus();

  return (
  <button
    type="submit"
    className="btn btn-primary shadow-custom-sm py-2 px-5 w-max"
    disabled={pending}
    >
        {pending ? 'Sending' : 'Send Message'}
        {pending && <span className="bi-airplane rotate-45 animate-bounce"></span>}
    </button>
  )
}

export default FormSubmitBtn
