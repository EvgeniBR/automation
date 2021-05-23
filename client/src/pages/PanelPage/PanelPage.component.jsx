import React from "react";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor.component";
import "./PanelPage.styles.scss";

const PanelPage = () => {
  return (
    <div>
      <div className="pane top-pane">
        <fieldset>
          <legend>Question namber one</legend>
          <p>write code inside addFunction function that accepts 2 parameters and returns the added value </p>
        </fieldset>
      </div>
      <div className="pane bottom-pane">
      <MonacoEditor />
      </div>
    </div>
  );
};

export default PanelPage;
