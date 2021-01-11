import logo from '../../assests/logo.gif';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        height: 60,
        paddingBottom: "1rem"
    },
});

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}            
            className={classes.root}
            style={{ backgroundColor: "#202121"}}
        >                        
            <img src={logo} alt="loading..." style={{ height: 60, objectFit: "contain" }} />            
        </BottomNavigation>
    );
}

export default Header