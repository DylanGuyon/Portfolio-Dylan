import React from 'react';
import './contact.css'; 

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-content">
                <div className="contact-text">
                    <h2>Contactez-moi</h2>
                    <p>Pour toute question ou proposition de collaboration/d&apos;alternance, n&apos;hésitez pas à me contacter.</p>
                    <a href="mailto:dylanguyon91@gmail.com">dylanguyon91@gmail.com</a>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form">
                        <label htmlFor="name">Nom/Prénom</label>
                        <input type="text" id="name" placeholder="Votre nom et prénom" required />
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Votre email" required />
                        
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Votre message" required></textarea>

                        <div className="checkbox-container">
                            <input type="checkbox" id="rgpd" required />
                            <label htmlFor="rgpd">J&apos;accepte les termes de la politique de confidentialité.</label>
                        </div>
                        
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
