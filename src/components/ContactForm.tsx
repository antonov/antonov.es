import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";


const ContactForm = () => {

    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void>  => {
      event.preventDefault();
      setIsLoading(true);
      const data = new FormData(event.currentTarget);
      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/contact'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }
      await fetch(endpoint, options);
      setIsLoading(false);
      setIsSent(true);
    }
    return (
      <form onSubmit={handleSubmit} className="grid grid-flow-row  md:grid-cols-2 gap-3 mt-3 relative">
        { isSent &&
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-slate-800 flex flex-row justify-center items-center text-2xl">Your message is sent! 🎉</div>
        }  
        <div className="grid grid-cols-10">
          <label htmlFor="name" className="col-span-3">Name:<span className="text-red-600">*</span></label>
          <input type="text" name="name" required={true} className="bg-transparent border-b border-neutral-600 col-span-7" placeholder="Type your name"/>
        </div>
        <div className="grid grid-cols-10">
          <label htmlFor="email" className="col-span-3">Email:<span className="text-red-600">*</span></label>
          <input type="email" name="email" required={true} className="bg-transparent border-b border-neutral-600 col-span-7" placeholder="Type your email" />
        </div>
        <div className="grid grid-cols-10">
          <label htmlFor="phone" className="col-span-3">Phone:</label>
          <input type="tel" name="phone" className="bg-transparent border-b border-neutral-600 col-span-7" placeholder="Type your phone number" />
        </div>
        <div className="grid grid-cols-10">
          <label htmlFor="budget" className="whitespace-nowrap col-span-3">Your budget:</label>
          <input type="text" name="budget" className="bg-transparent border-b border-neutral-600 col-span-7" placeholder="Type your budget" />
        </div>
        <div className="grid grid-flow-row md:col-span-2">
          <label htmlFor="message" className="mb-2">Message:<span className="text-red-500">*</span></label>
          <textarea name="message" required={true} className="w-full bg-transparent border-b border-neutral-600" placeholder="Type your message" ></textarea>
        </div>
        <div className="grid justify-end md:col-span-2">
        { isLoading
        ?  <LoadingSpinner />
        : <button className="bg-violet-500 hover:bg-violet-700 p-3 rounded">Send!</button>
        }
        </div>
      </form>
    )
};

export default ContactForm;