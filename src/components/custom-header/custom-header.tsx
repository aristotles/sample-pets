import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
export function CustomHeader() {
    return (
        <div style={{height:"48px", backgroundColor:'white', placeItems: "center", display: "grid", width: "100%", fontFamily:'pet', color:'#064574' }}>Parma Pets</div>
    )
}