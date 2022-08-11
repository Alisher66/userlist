import React, {useEffect} from 'react';
import Container from '@mui/material/Container';
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/userSlice";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import SearchName from "./filters/SearchName";
import FilterRole from "./filters/FilterRole";
import FilterGenders from "./filters/FilterGenders";
import UserList from "./UserList";




function Users(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Box sx={{flexGrow: 1, mb: "100px", paddingTop: "100px"}}>
                <Grid container spacing={2}>
                    <SearchName />
                    <FilterRole />
                    <FilterGenders />
                </Grid>
            </Box>
            <UserList />
        </Container>
    );
}

export default Users;