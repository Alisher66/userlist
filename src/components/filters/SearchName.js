import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../store/userSlice";

function SearchName(props) {
    const dispatch = useDispatch();
    const searchName = useSelector(state => state.user.search);

    const handleChangeName = (e) => {
        dispatch(setSearch(e.target.value));
    }

    return (
        <Grid xs={5} md={5}>
            <TextField fullWidth id="name" label="Search name" variant="outlined" onChange={handleChangeName} value={searchName} />
        </Grid>
    );
}

export default SearchName;