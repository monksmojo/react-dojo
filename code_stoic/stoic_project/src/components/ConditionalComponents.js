import { useState } from "react";

function ConditionalComponent() {
  // conditional component with
  const [display, setDisplay] = useState(true);
  let output;
  if (display) {
    output = <h3>This is true conditional component</h3>;
  } else {
    output = <h3>this is false conditional component</h3>;
  }

  return display ? (
    <div>
      {output}
      <h3>ternary condition true statement</h3>
    </div>
  ) : (
    <div>
      {output}
      <h3>ternary condition false statement</h3>
    </div>
  );
}
export default ConditionalComponent;
