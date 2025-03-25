import React, { useState } from 'react';
import './App.css';

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

const ContactItem = ({ contact, index, editContact, deleteContact }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editContact(index, { name, email });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName(contact.name);
        setEmail(contact.email);
    };

    return (
        <div className="contact-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <p>{name}</p>
                    <p>{email}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteContact(index)}>Delete</button>
                </>
            )}
        </div>
    );
};

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const editContact = (index, updatedContact) => {
        const updatedContacts = contacts.map((contact, i) => (i === index ? updatedContact : contact));
        setContacts(updatedContacts);
    };

    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    return (
        <div className="contact-list">
            <h2>Contact List</h2>
            <ContactForm addContact={addContact} />
            {contacts.map((contact, index) => (
                <ContactItem
                    key={index}
                    index={index}
                    contact={contact}
                    editContact={editContact}
                    deleteContact={deleteContact}
                />
            ))}
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <ContactList />
        </div>
    );
};

export default App;
