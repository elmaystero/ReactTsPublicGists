import { StoreState } from "../types/store";
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllGistsService } from "../../components/services/HelperService";

const initState: StoreState = {
  gists: [],
  allGists: []
};

export const fetchGists = createAsyncThunk('users/fetchUsers', async () => {
const data = await getAllGistsService();
  return data.data;
})


const systemSlice = createSlice({
  name: "system",
  initialState: initState,
  reducers: {
    setGists(state, action) {
      state.gists = action.payload;
    },
    filterGists(state, action) {
      debugger;
      var r =  state.allGists.filter((item, index) => item.owner.login.toString().includes( action.payload.userName));
      console.log(r);
      state.gists =r;
    }
  },
  extraReducers:{
    [fetchGists.fulfilled.toString()]: (state, action) => {
      state.gists = action.payload;
      state.allGists = action.payload;
    }
  },
});

export const { setGists, filterGists } = systemSlice.actions;
export const selectGists = (state: StoreState) => state.gists;
export default systemSlice.reducer;
