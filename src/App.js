import "./App.css";
import { Fragment } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </>
      </div>
    </Fragment>
  );
};

export default App;
