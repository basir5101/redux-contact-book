import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { addContact } from '../../actions/contactAction';

const AddContact = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const createContact = e =>{
        const newContact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addContact(newContact))
        history.push('/')
        e.preventDefault();
    }

    return (
        <div className = 'card border-0 shadow'>
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit = {(e) => createContact(e)}>
                    <div className = 'form-group'>
                        <input onChange = {(e) => setName(e.target.value)} value = {name} type="text" placeholder = 'inter your name' className="form-control"/>
                    </div>
                    <div className = 'form-group'>
                        <input onChange = {(e) => setPhone(e.target.value)} value =  {phone} type="text" placeholder = 'inter your Phone Number' className="form-control"/>
                    </div>
                    <div className = 'form-group'>
                        <input onChange = {(e) => setEmail(e.target.value)} value = {email} type="text" placeholder = 'inter your Email Address' className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Create contact</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;