import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { MdEditNote } from "react-icons/md";
import EditIntro from "./EditIntro";

export default function Intro( { data, updateData } ) {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [intro, setIntro] = useState(data);

    function editIntro(newName, newTitle, newAbout) {
        setIntro((currentIntro) => {
            return {
                ...currentIntro,
                name: newName,
                title: newTitle,
                about: newAbout,
            }
        })
    }

    useEffect(() => {
        updateData(intro)
    }, [intro, updateData])

    return (
        <>
            <section className="intro-section">
                <header>
                    <div className="heading-container">
                        <h1>{intro.name}</h1>
                        <h2>{intro.title}</h2>
                    </div>
                    <button onClick={() => setModalDisplay(true)} aria-label="edit biography"> <MdEditNote/> </button>
                </header>
                <p> {intro.about}</p>
            </section>
            {modalDisplay && <EditIntro
            setModalDisplay={setModalDisplay}
            {...intro}
            editItem={editIntro}
            />}
        </>
    )
}

Intro.propTypes = {
    data: PropTypes.object,
    updateData: PropTypes.func
  };