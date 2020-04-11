import React, { Component } from "react";
import Question from "./question";
import { loadQuestions } from "../helpers/QuestionsHelper";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null,
      loading: true,
      score: 0,
    };
  }
  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      this.setState(
        {
          questions,
        },
        () => {
          this.changeQuestion();
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  changeQuestion = (bonus = 0) => {
    const randomQuestionIndex = Math.floor(
      Math.random() * this.state.questions.length
    );
    const currentQuestion = this.state.questions[randomQuestionIndex];
    const remainingQuestions = [...this.state.questions];
    remainingQuestions.splice(randomQuestionIndex, 1);

    this.setState((prevState) => ({
      questions: remainingQuestions,
      currentQuestion,
      loading: false,
      score: prevState.score + bonus,
    }));
    console.log(this.state.score);
  };

  render() {
    return (
      <>
        {this.state.loading && <div id="loader" />}
        {!this.state.loading && this.state.currentQuestion && (
          <Question
            question={this.state.currentQuestion}
            changeQuestion={this.changeQuestion}
          />
        )}
      </>
    );
  }
}
