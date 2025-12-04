import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswer }) {
  console.log("oi");
  const skipped =
    (userAnswer.filter((answer) => answer === null).length /
      userAnswer.length) *
    100;
  const correct =
    (userAnswer.filter(
      (answer, index) => answer === QUESTIONS[index].answers[0]
    ).length /
      userAnswer.length) *
    100;
  const wrong = 100 - correct - skipped;

  const skippedResult = Math.round(skipped);
  const correctResult = Math.round(correct);
  const wrongResult = Math.round(wrong);
  return (
    <div id="summary">
      <img src={quizComplete} />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedResult}%</span>
          <span className="text">skiped</span>
        </p>
        <p>
          <span className="number">{correctResult}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{wrongResult}%</span>
          <span className="text">incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          }

          if (answer !== null) {
            cssClass += ` ${
              answer === QUESTIONS[index].answers[0] ? "correct" : "wrong"
            }`;
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
