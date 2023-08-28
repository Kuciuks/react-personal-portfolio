import { useForm } from 'react-hook-form'
import '../Styles/ContactMePage.css'
export default function ContactMePage() {

    const {register, handleSubmit, formState:{errors}} = useForm()
    
    const handleFormSubmit = (e) => {
        e.preventDefault;
        console.log(e)
    }

    return (
        <div className='contact-container'>
            <h1>Contact me</h1>
            <form className='contact-form' onSubmit={handleSubmit(handleFormSubmit)}>

                <label htmlFor="user-name">Name</label>
                <input type="text" id='user-name' {...register("user_name",{
                    pattern: {
                        value: /^[A-Za-z0-9\s]+$/,
                        message: "Using invalid symbols!"
                    },
                    required: "Required field!"
                })}/>
                <p>{errors.user_name?.message}</p>


                <label htmlFor="user-surname">Surname</label>
                <input type="text" id='user-surname' {...register("user_surname",{
                    pattern: {
                        value: /^[A-Za-z0-9\s]+$/,
                        message: "Using invalid symbols!"
                    },
                    required: "Required field"
                })}/>
                <p>{errors.user_surname?.message}</p>


                <label htmlFor="user-email">Email</label>
                <input type="text" id='user-email' {...register("user_email",{
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Using invalid symbols"
                    },
                    required: "Required field!"
                })}/>
                <p>{errors.user_email?.message}</p>


                <label htmlFor="user-message">Message</label>
                <textarea name="message" id="user-message" cols="30" rows="5" {...register("user_message",{
                    minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long!"
                    },
                    required: "Required field!"
                })}/>
                <p>{errors.user_message?.message}</p>
                

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
