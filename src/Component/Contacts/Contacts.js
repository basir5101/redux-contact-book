import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { clearAllContact, deleteAllContact, deleteContact, selectAllContact } from '../../actions/contactAction';

const Contacts = () => {
    const [selectAll, setSelectAll] = useState(false)
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contact.contacts);
    const selectedContact = useSelector(state => state.contact.selectedContact)
    useEffect(
        () =>{
            if(selectAll){
                dispatch(selectAllContact(contacts.map(contact => contact.id)))
            } else{
                dispatch(clearAllContact())
            }
        }
        ,[selectAll])

    return (
        <div>
            {
                selectedContact.length > 0 ? (
                    <button onClick = {() => dispatch(deleteAllContact())} className="btn btn-danger">Delete All</button>
                ): null
            }
            <table className="table shadow">
                <thead className = 'bg-success text-white'>
                    <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input  onClick = {() => setSelectAll(!selectAll)} id = 'selectAll' type="checkbox" className="custom-control-input"/>
                            <label htmlFor="selectAll" className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>E-main</th>
                    <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact =>{
                           return <tr key = {contact.id}>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input defaultChecked = {selectAll}  type="checkbox" className="custom-control-input"/>
                                        <label  className="custom-control-label"></label>
                                    </div>
                                </td>
                                <td> <Avatar className = 'mr-2' name = {contact.name} size = {45} round = {true} /> {contact.name}</td>
                                <td> {contact.phone} </td>
                                <td> {contact.email} </td>
                                <td className = 'actions'>
                                    <Link to={`/contact/edit/${contact.id}`}>
                                        <span className="material-icons mr-2">edit</span>
                                    </Link>
                                        <span onClick = {() => dispatch(deleteContact(contact.id))} className="material-icons text-danger">remove_circle</span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;