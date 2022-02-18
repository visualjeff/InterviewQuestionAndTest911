import "./styles.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

/*
  Question:

    1. Fix the button?
    2. Update status prop.
    3. Render out the status in StatusReport component.
    4. PropType the props
    5. 

    Can you print out the status?
*/

const ButtonQuestion = ({ setStatus }) => {
  const handleEvent = () => {
    // Set the status to true
    setStatus(true);
    console.log("Button was pressed");
  };

  return (
    <div className="App">
      <h1>Interview Question</h1>
      <h2>Follow the instructions in the source</h2>

      <Box pt="10px">
        <Button
          data-testid="button-element"
          variant="contained"
          onClick={handleEvent}
        >
          test
        </Button>
      </Box>
    </div>
  );
};

const StatusReport = ({ status }) => {
  return (
    <Box data-testid="status-element" pt="10px">
      Success? {String(status)}
    </Box>
  );
};

export default function App() {
  const [status, setStatus] = React.useState(false);

  return (
    <>
      <ButtonQuestion setStatus={setStatus} />
      <StatusReport status={status} />
    </>
  );
}
