import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Header.styles.scss";

const Header = ({ data: { questions } , history  }) => {

    
  return (
    <div className="header">
      {questions.map((question) => {
        return  <Link className="question-button" key={question.id}  to={{pathname:`/questions/${question.id}`, state:question}}>
                    {question.name} <span style={{color:`${question.color}`}}>&nbsp;&#11044; </span>&nbsp;
                </Link>;
      })}
    </div>
  );
};

export default withRouter(Header)