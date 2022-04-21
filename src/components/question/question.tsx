import "./style.css";
import "react-widgets/styles.css";

//Text component for rendering a text question to ask the user.
export function Question(props: { passedText: string }) {
  return <div className="questionClass">{props.passedText}</div>
}