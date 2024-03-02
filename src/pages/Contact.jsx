import { useState } from 'react'
function Contact() {

    let [error, setError] = useState("")

    function handleForm(e) {
        e.preventDefault()

        let form = e.target
        if (
            !form.name.value ||
            !form.email.value ||
            !form.message.value
        ) {
            setError("All fields required")
            return
        }



    }
    

    return (
        <section className='background'>
            <form onSubmit={handleForm} >
                <div className='mb-4'>
                    <input type="text" className='form-control-lg' placeholder="Enter your name" name="name" /> <br />
                </div>
                <div className='mb-4'>
                    <input type="email" className='form-control-lg' placeholder="Enter your email address" name="email" /> <br />
                </div>
                <div className='mb-4'>
                    <textarea className='form-control-lg' placeholder="Your message" cols="30" rows="10" name="message"></textarea> <br />
                </div>
                <button className='form-control-lg'>
                    Submit
                </button>
                <span>
                    {error}
                </span>
            </form>

        </section>
    )
}


export default Contact;