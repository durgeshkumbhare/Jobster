import { Routes, Route } from "react-router-dom";
import { Error, Landing, ProtectedRoute, Register } from "./pages";
import {
  AddJobs,
  AllJobs,
  Profile,
  SharedLayouts,
  Stats,
} from "./pages/Dashborad";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayouts />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
