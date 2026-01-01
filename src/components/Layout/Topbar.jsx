import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Topbar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" LinkComponent={Link} to="/">Dashboard</Button>
                <Button color="inherit" LinkComponent={Link} to="/floor4">Floor 4</Button>
                <Button color="inherit" LinkComponent={Link} to="/floor15">Floor 15</Button>
            </Toolbar>

        </AppBar>
    )
}
export default Topbar;