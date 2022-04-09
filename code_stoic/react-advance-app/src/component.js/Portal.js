import { createPortal } from "react-dom";

function Portal() {
  return createPortal(<div>Portal</div>, document.getElementById("portal"));
}

export default Portal;
