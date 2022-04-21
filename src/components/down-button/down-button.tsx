import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';

export function DownButton() {
    const [warningVisible, setWarningVisible] = useState(false);

    //styling for warning in middle of screen
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //shows a warning for 1.5 seconds
    const onButton = () => {
        setWarningVisible(true);
        setTimeout(function () {
            setWarningVisible(false);
        }, 1500);
    }

    return (<div>
        {/* button at bottom right of screen showing error if no species selected */}
        <Fab className="DownButton" onClick={onButton}>
            <KeyboardArrowDownIcon />
        </Fab>

        <Modal
            open={warningVisible}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Please select a pet species.
                </Typography>
            </Box>
        </Modal>
    </div>)

}