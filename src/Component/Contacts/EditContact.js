import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateContact, getContact } from '../../actions/contactAction';

const EditContact = () => {
    const {id} = useParams();
    const history = useHistory();
    const contact = useSelector(state =>state.contact.contact &&  state.contact.contact[0]);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    useEffect( () =>{
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    },[contact])

    const onUpdateContact = e =>{
        e.preventDefault()

        const update_contact = Object.assign(contact, {name: name, phone:phone, email: email})
        
        dispatch(updateContact(update_contact))
        history.push('/');
    }

    return (
        <div className = 'card border-0 shadow'>
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit = { e => onUpdateContact(e)} >
                    <div className = 'form-group'>
                        <input onChange = {(e) => setName(e.target.value)} value = {name} type="text" placeholder = 'inter your name' className="form-control"/>
                    </div>
                    <div className = 'form-group'>
                        <input onChange = {(e) => setPhone(e.target.value)} value =  {phone} type="text" placeholder = 'inter your Phone Number' className="form-control"/>
                    </div>
                    <div className = 'form-group'>
                        <input onChange = {(e) => setEmail(e.target.value)} value = {email} type="text" placeholder = 'inter your Email Address' className="form-control"/>
                    </div>
                    <button className="btn btn-warning">Update Contact</button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;