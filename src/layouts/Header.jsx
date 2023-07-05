import { ResumePreview } from "../components/ResumePreview";
import { useRef} from "react";
import { useReactToPrint } from 'react-to-print';
import PropTypes from 'prop-types';

export default function Header({ data }) {
    const resumePreview = useRef();
    const handlePrint = useReactToPrint({
        content: ()=> resumePreview.current
    })

    return (
        <header>
            <button onClick={handlePrint}>Download</button>
            <div style={{display: "none"}}>
                <ResumePreview ref={resumePreview} data={data}/>
            </div>
        </header>
    )
}

Header.propTypes = {
    data: PropTypes.object,
  };