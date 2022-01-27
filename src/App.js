import Feedbackform from "./components/feedback/Feedbackform";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackStats from "./components/feedback/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <div className="container">
        <Header
          headerText="Feedback UI"
          bgColor="rgba(0,0,0,0.4)"
          textColor="#ff6a95"
        />
        <Feedbackform />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
