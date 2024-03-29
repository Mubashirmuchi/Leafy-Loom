import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const SUCCESS_CODES = [200, 201, 301, 204];
import AuthService from "../service/authservice";
import { toast } from "react-toastify";

export const login = createAsyncThunk("user/login", async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await AuthService.login(params);
        if (SUCCESS_CODES.includes(response.status) && response?.data) {
            localStorage.setItem("access_token", response.data?.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            toast.success("Logged in successfull");
            return response.data;
        } else {
            return rejectWithValue(response?.response?.status === 500 ? "Something went wrong" : response?.response?.data);
        }
    } catch (err) {
        return rejectWithValue(err.message || "Something went wrong");
    }
});

export const SignUp = createAsyncThunk("user/signup", async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await AuthService.register(params);
        console.log("response signup slce", response);
        if (SUCCESS_CODES.includes(response.status) && response?.data) {
            return response.data.message;
        } else {
            return rejectWithValue(
                response?.response?.status === 500 ? "Something went wrong" : response?.response?.data.message
            );
        }
    } catch (err) {
        return rejectWithValue(err.message || "Something went wrong");
    }
});

export const logout = createAsyncThunk("user/logout", async (_, { rejectWithValue, dispatch }) => {
    try {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        return true;
    } catch (err) {
        return rejectWithValue(err.message || "Something went wrong");
    }
});

export const checkAuthorization = createAsyncThunk("user/checkAuthorization", (_, { rejectWithValue }) => {
    try {
        const tOkn = localStorage.getItem("access_token");

        const Usr = localStorage.getItem("user");
        if (Usr && tOkn) {
            const usr = JSON.parse(Usr);
            return usr;
        } else {
            return rejectWithValue("NO token found");
        }
    } catch (err) {
        return rejectWithValue("Something went wrong");
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        error: null,
        loading: false,
        isAuthenticated: false,
        isAppInitialised: false,
    },
    reducers: {
        clearError(state) {
            state.error = " ";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkAuthorization.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(checkAuthorization.fulfilled, (state, action) => {
                state.isAppInitialised = true;
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(checkAuthorization.rejected, (state, action) => {
                state.isAppInitialised = true;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
                if (action.error.message === "Request failed with status code 404") {
                    state.error = "Access denied invalid Credentials";
                    state.error = null;
                } else {
                    state.error = null;
                }
            });

        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.user = {};
            state.profile = {};
        });
        builder.addCase(logout.rejected, (state) => {
            state.error = "something went wrong";
        });
    },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
