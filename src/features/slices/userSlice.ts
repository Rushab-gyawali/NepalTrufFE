import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetailData } from "../../util/types";

interface userState {
  userDetail: UserDetailData | null;
}

const initialState: userState = {
  userDetail: null,
};

const userSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    setUserDetail(state, action: PayloadAction<UserDetailData>) {
      state.userDetail = action.payload;
    },
  },
});

export const { setUserDetail } = userSlice.actions;

export default userSlice.reducer;
