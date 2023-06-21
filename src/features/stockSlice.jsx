import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    products:[],  //todo const [products, setProduct] = useState([]) products initialState icerisindeki producsta denk gelir. setProduct reducers a denk gelir. useState icindeki bos array productsin onundekine denk gelir.
    firms:[],
    brands:[],
    categories:[],
    sales:[],
    purchases:[],


  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, {payload})=>{
        state.loading = false;
        state[payload.urlEnd] = payload.data
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
