import { useState } from "react";
import { MdEditNote } from "react-icons/md";
import EditInfos from "./EditInfos";

export default function Skills() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [infos, setInfos] = useState({
        email: "draven.darkthorn@shadowmail.com",
        address: "123 Shadow Street, Dark City, USA",
        phoneNumber: "+1 (555) 123-4567",
    })

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

    return (
        <>
            <section>
                <header className="aside-header">
                    <h3>Personal information</h3>
                    <button onClick={() => setModalDisplay(true)} aria-label="edit infos"> <MdEditNote/> </button>
                </header> 
                <div className="info-list">
                    <div className="info-group">
                     <p>Email</p>
                     <p>{infos.email}</p>
                    </div>
                    <div className="info-group">
                     <p>Address</p>
                     <p>{infos.address}</p>
                    </div>
                    <div className="info-group">
                     <p>Phone number</p>
                     <p>{infos.phoneNumber}</p>
                    </div>
                </div>
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