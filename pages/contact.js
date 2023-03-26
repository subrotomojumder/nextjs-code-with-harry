import styles from '../styles/Contact.module.css';
import Swal from 'sweetalert2'

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const message = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            concern: form.concern.value
        };
        fetch('http://localhost:3000/api/postcontact/', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Successful',
                    'Thanks for your message',
                    'question'
                )
                form.reset()
            })
            .catch(e => {
                alert(e.message)
            })
    }
    return (
        <div className={styles.container}>
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.input_div}>
                    <label htmlFor="name" >Enter your name</label>
                    <input type="name" className="form-control" id="name" aria-describedby="name" />
                </div>
                <div className={styles.input_div}>
                    <label htmlFor="email" >Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className={styles.input_div}>
                    <label htmlFor="phone" >Phone number</label>
                    <input type="phone" className="form-control" id="phone" aria-describedby="phone" />
                </div>
                <div className={styles.input_div}>
                    <label htmlFor="concern" >Elaborate Concern</label>
                    <textarea type="concern" className="form-control" id="concern" aria-describedby="concern" />
                </div>
                <button type="submit" className="btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;