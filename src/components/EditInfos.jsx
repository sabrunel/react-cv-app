import { useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types';

export default function EditInfos({setModalDisplay, email, address, phoneNumber, editItem}) {
    const [newEmail, setNewEmail] = useState(email);
    const [newAddress, setNewAddress] = useState(address);
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
    
    function submitHandler(e) {
        e.preventDefault();
        editItem(newEmail, newAddress, newPhoneNumber);
        setModalDisplay(false);
    }
    return (
        <>
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Edit personal information</h2>
                    <button onClick={() => setModalDisplay(false)} aria-label="close modal"> <MdClose/> </button>
                </div>
                <div className="modal-body">
                    <form action="" id="edit-infos-form" onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Phone number</label>
                            <input type="text" id="desription" value={newPhoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={() => setModalDisplay(false)} aria-label="cancel modications">Cancel</button>
                    <button type="submit" form="edit-infos-form" aria-label="confirm modications">Update</button>
                </div>
            </div>
        </>
    )
}

EditInfos.propTypes = {
    setModalDisplay: PropTypes.func,
    email: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
    editItem: PropTypes.func,
};