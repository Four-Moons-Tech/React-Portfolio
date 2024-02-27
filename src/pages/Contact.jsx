import {useState} from 'react'
function Contact(){

    let [error, setError] = useState("")

    function handleForm(e){
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

        
        if (!form.email.value.includes("@")) {
            
        }

    }

    return (
        <section>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter your name" name="name"/> <br />
                <input type="email" placeholder="Enter your email address" name="email"/> <br />
                <textarea  placeholder ="Your message"cols="30" rows="10" name="message"></textarea> <br />
                <button>
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