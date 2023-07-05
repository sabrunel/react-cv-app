import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { MdEditNote } from "react-icons/md";
import EditInfos from "./EditInfos";

export default function PersonalInfo({ data, updateData }) {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [infos, setInfos] = useState(data);

    function editInfos(newEmail, newAdress, newPhoneNumber) {
        setInfos((currentInfos) => {
            return {
                ...currentInfos,
                email: newEmail,
                address: newAdress,
                phoneNumber: newPhoneNumber,
            }
        })
    }

    useEffect(() => {
        updateData(infos)
      }, [infos, updateData])

    return (
        <>
            <section>
                    <div className="aside-header">
                        <h3>Personal information</h3>
                        <button onClick={() => setModalDisplay(true)} aria-label="edit infos"> <MdEditNote/> </button>
                    </div> 
                    <ul className="info-list">
                        <li className="list-group">
                        <p>Email</p>
                        <p>{infos.email}</p>
                        </li>
                        <li className="list-group">
                        <p>Address</p>
                        <p>{infos.address}</p>
                        </li>
                        <li className="list-group">
                        <p>Phone number</p>
                        <p>{infos.phoneNumber}</p>
                        </li>
                    </ul>
            </section>
            {modalDisplay && <EditInfos
                setModalDisplay={setModalDisplay}
                {...infos}
                editItem={editInfos}
                />
            }
        </>
    )
}

PersonalInfo.propTypes = {
    data: PropTypes.object,
    updateData: PropTypes.func
  };