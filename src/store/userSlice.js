import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {roles} from "../helper";

const initialState = {
    users: [],
    search: "",
    selectRole: "",
    selectGender: "",
    status: "",
}

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch("https://dummyjson.com/users")

            if (!response.ok) {
                throw new Error("Server error!")
            }

            const data = await response.json();
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.users = []
        },
        setSearch: (state,action) => {
            state.search = action.payload
        },
        setRole: (state, action) => {
            state.selectRole = action.payload;
        },
        setGender: (state, action) => {
            state.selectGender = action.payload;
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = "resolved";

            const tempUsers = action.payload.users.map(user => {
                let rand = parseInt(Math.random() * roles.length)
                return {
                    id: user.id,
                    name: user.firstName,
                    gender:user.gender,
                    role: roles[rand].role
                }
            })

            state.users = tempUsers;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})


export const {clearUser, setSearch, setRole, setGender} = userSlice.actions;

export default userSlice.reducer