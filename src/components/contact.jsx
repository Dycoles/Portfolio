import { BsEnvelope, BsLinkedin, BsGithub } from 'react-icons/bs';
function Contact() {
    return (
        <section className="p-8 text-center" id="contact">
            <h2 className="text-2xl font-bold mb-8">Contact</h2>
            <div className="flex justify-center gap-60 text-4xl">
                <a className="hover:text-blue-600" href="mailto:colesdylan12@gmail.com"><BsEnvelope /></a>
                <a className="hover:text-blue-600" href="https://www.linkedin.com/in/dycoles/"><BsLinkedin /></a>
                <a className="hover:text-blue-600" href="https://github.com/dycoles"><BsGithub /></a>
            </div>
        </section>
    );
}

export default Contact;