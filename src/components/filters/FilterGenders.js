import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import {setGender} from "../../store/userSlice";

function FilterGenders(props) {
    const dispatch = useDispatch();
    const selectGender = useSelector(state => state.user.selectGender);

    const handleChange = (e) => {
        if(e.target.value === "all") {
            dispatch(setGender(""));
        }
        else dispatch(setGender(e.target.value));
    }
    return (
        <Grid xs={3} md={3}>
            <FormControl fullWidth>
                <InputLabel id="gender-select">Gender</InputLabel>
                <Select
                    labelId="gender-select"
                    id="Gender"
                    value={selectGender === "" ? "all" : selectGender}
                    label="Gender"
                    onChange={handleChange}
                >
                    <MenuItem value="all">all</MenuItem>
                    <MenuItem value="male">male</MenuItem>
                    <MenuItem value="female">female</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default FilterGenders;