import Opportunities from "./pages/Opportunities"
import OpportunityDetail from "./pages/OpportunityDetail";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Opportunities />
      <Route
        path="/opportunities/:id"
        element={<OpportunityDetail />}
      />

    </div>
  )
}

export default App
