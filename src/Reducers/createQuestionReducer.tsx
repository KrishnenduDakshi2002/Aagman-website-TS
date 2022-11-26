import React, { useReducer } from "react";

const CreateQuestionInitialState = {
  question: "",
  description: "",
  tags: [],
};

const CreateQuestionActions = {
  QUESTION_UPDATE: "question_update",
  DESCRIPTION_UPDATE: "description_update",
  TAGS_UPDATE: "tags_update",
};

interface State {
  question: string;
  description: string;
  tags: Array<string>;
}

interface DispatchAction {
  type: string;
  payload: any;
}

const CreateQuestionDispatchFunction = (state: State, action: DispatchAction) => {
  switch (action.type) {
    case CreateQuestionActions.QUESTION_UPDATE:
      return { ...state, question: action.payload };
    case CreateQuestionActions.DESCRIPTION_UPDATE:
      return { ...state, description: action.payload };
    case CreateQuestionActions.TAGS_UPDATE:
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export {
    CreateQuestionDispatchFunction,
    CreateQuestionActions,
    CreateQuestionInitialState
}