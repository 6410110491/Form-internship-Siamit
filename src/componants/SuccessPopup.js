import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SuccessPopup(props) {
    return (
        (props.trigger ?
            <div className="popup" onClick={() =>
                props.setTrigger(false)}>
                <div className="popup_inner">
                    <div className='text-popup'>Successfully</div>
                    <CheckCircleIcon className='check-icon'
                        sx={{ fontSize: "10rem" }} />
                    <button className='closebutton' onClick={() =>
                        props.setTrigger(false)}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
            : ""
        )
    )
}

export default SuccessPopup