import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Topbar(){
    const [floors, setFloors] = useState([]);

    useEffect(() => {
        axios.get('/api/floors/')
            .then(response => {
                setFloors(response.data);
            })
            .catch(error => {
                console.error("Error fetching floors:", error);
            });
    }, []);

    return(
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" LinkComponent={Link} to="/">Dashboard</Button>
                <Button color="inherit" LinkComponent={Link} to="/floors/1">Floor 4</Button>
                <Button color="inherit" LinkComponent={Link} to="/floors/2?zone=left">Floor 15-left</Button>
                <Button color="inherit" LinkComponent={Link} to="/floors/2?zone=right">Floor 15-right</Button>
            </Toolbar>

        </AppBar>
    )
}
export default Topbar;