import React, {useEffect, useState} from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useSelector} from "react-redux";
import IconButton from '@mui/material/IconButton';
import {sortOf, sortOfRole} from "../helper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function UserList(props) {
    const users = useSelector(state => state.user.users)
    const searchName = useSelector(state => state.user.search);
    const selectRole = useSelector(state => state.user.selectRole)
    const selectGender = useSelector(state => state.user.selectGender);
    const [sortOptions, setSortOptions] = useState({
        sortByName: null,
        sortByRole: null,
        asc: null,
    });

    const [copyUsers, setUsers] = useState([])

    useEffect(() => {
        setUsers([...users])
    }, [users])

    const handleSortByName = () => {
        if (sortOptions.sortByName) {
            if (sortOptions.asc) {
                setSortOptions({
                    ...sortOptions,
                    asc: false,
                })
            } else {
                setSortOptions({
                    ...sortOptions,
                    asc: true,
                })
            }
        } else {
            setSortOptions({
                sortByName: true,
                sortByRole: null,
                asc: true,
            })
        }

        const sortUsers = sortOf(copyUsers, !sortOptions.asc, "name");
        setUsers([...sortUsers]);
    }
    const handleSortByRole = () => {
        if (sortOptions.sortByRole) {
            if (sortOptions.asc) {
                setSortOptions({
                    ...sortOptions,
                    asc: false,
                })
            } else {
                setSortOptions({
                    ...sortOptions,
                    asc: true,
                })
            }
        } else {
            setSortOptions({
                sortByName: null,
                sortByRole: true,
                asc: true,
            })
        }

        const sortUsers = sortOfRole(copyUsers, !sortOptions.asc);
        setUsers([...sortUsers]);
    }

    const getArrowName = () => {
        if (sortOptions.sortByName) {
            if (sortOptions.asc) {
                return <KeyboardArrowDownIcon/>
            } else return <KeyboardArrowUpIcon/>
        } else {
            return <KeyboardArrowDownIcon/>
        }
    }

    const getArrowRole = () => {
        if (sortOptions.sortByRole) {
            if (sortOptions.asc) {
                return <KeyboardArrowDownIcon/>
            } else return <KeyboardArrowUpIcon/>
        } else {
            return <KeyboardArrowDownIcon/>
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 1050}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell onClick={handleSortByName}>
                            Name
                            <IconButton aria-label="arrow" onClick={handleSortByName}>
                                {getArrowName()}
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">
                            Role
                            <IconButton aria-label="arrow" onClick={handleSortByRole}>
                                {getArrowRole()}
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {copyUsers.map(user => {
                        if (
                            user.name.toLowerCase().includes(searchName.toLowerCase()) &&
                            (selectRole === "" || user.role === selectRole) &&
                            (selectGender === "" || user.gender === selectGender)
                        )
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell align="right">{user.role}</TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                </TableRow>
                            )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserList;