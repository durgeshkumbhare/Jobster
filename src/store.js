import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/UserSlice";
import jobSlice from "./features/Job/jobSlice";
import AllJobsSlice from "./features/AllJobs/AllJobsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: AllJobsSlice,
  },
});
