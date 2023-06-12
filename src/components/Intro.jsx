import { useState } from "react";
import { MdEditNote } from "react-icons/md";
import EditIntro from "./EditIntro";

export default function Intro() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [intro, setIntro] = useState({
        name: "Draven Darkthorn",
        title: "Underworld Strategist",
        about: "A mastermind strategist with a genius-level intellect, I excel in the art of manipulation and the weaving of intricate schemes. My advanced combat training makes me a formidable adversary in physical confrontations. Yet, it is my mastery of dark arts that truly sets me apart. I can provide valuable expertise in devising intricate plans, coordinating resources, and ensuring the success of my employers' nefarious endeavors.",
    })

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

    return (
        <>
            <section>
                <header className="section-header">
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