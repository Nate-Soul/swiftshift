
type contactFormProps = {
    title: string;
}

const ContactForm = ( { title } : contactFormProps ) => {
  return (
    <>
    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dark-500 font-black mb-10">{title}</h4>
    <form action="#" className="flex flex-col gap-y-4">
        <div className="form-group flex flex-col gap-y-2">
            <label htmlFor="fullName" className="text-dark-400 text-lg">Full name</label>
            <input type="text" name="fullname" id="fullName" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
        </div>
        <div className="form-group flex flex-col gap-y-2">
            <label htmlFor="emailAddress" className="text-dark-400 text-lg">Email</label>
            <input type="email" name="email_address" id="emailAddress" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
        </div>
        <div className="form-group flex flex-col gap-y-2">
            <label htmlFor="phoneNumber" className="text-dark-400 text-lg">Phone number</label>
            <input type="tel" name="phone_number" id="phoneNumber" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
        </div>
        <div className="form-group flex flex-col gap-y-2">
            <label htmlFor="movingFrom" className="text-dark-400 text-lg">Moving from</label>
            <input type="text" name="moving_from" id="movingFrom" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
        </div>
        <div className="form-group flex flex-col gap-y-2">
            <label htmlFor="movingTo" className="text-dark-400 text-lg">Moving to</label>
            <input type="text" name="moving_to" id="movingTo" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
        </div>
        <div className="form-group flex flex-col gap-y-2">
            <label htmlFor="AdditionalInfo" className="text-dark-400 text-lg">Additional Information</label>
            <textarea name="additional_info" id="AdditionalInfo" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" rows={5}></textarea>
        </div>
        <button type="submit" className="btn btn-primary shadow-custom-sm py-2 px-5 w-max">Send Message</button>
    </form>
    </>
  )
}

export default ContactForm
