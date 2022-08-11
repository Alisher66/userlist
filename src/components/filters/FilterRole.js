import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {roles} from "../../helper";
import {setRole} from "../../store/userSlice";

function FilterRole(props) {
    const dispatch = useDispatch();
    const selectRole = useSelector(state => state.user.selectRole);

    const handleChange = (e) => {
        if(e.target.value === "all") {
            dispatch(setRole(""));
        }
        else dispatch(setRole(e.target.value));
    }
    return (
        <Grid xs={3} md={3} mdOffset="auto">
            <FormControl fullWidth>
                <InputLabel id="role-select">Role</InputLabel>
                <Select
                    labelId="role-select"
                    id="role"
                    value={selectRole === "" ? "all" : selectRole}
                    label="Role"
                    onChange={handleChange}
                >
                    <MenuItem value="all">all</MenuItem>
                    {roles.map(item => {
                        return (
                            <MenuItem key={item.role} value={item.role}>{item.role}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Grid>
    );
}

export default FilterRole;