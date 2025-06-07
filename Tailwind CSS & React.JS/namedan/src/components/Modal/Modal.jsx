import React from "react";

import { ButtonStyle } from "../styled_component/ButtonStyle";
import { HeadlineStyle } from "../styled_component/HeadlineStyle";

export default function Modal({
  OpenerClass,
  OpenerTxt,

  modalClass,
  children,
}) {
  return (
    // This Modal disappears if you click on the background
    <div>
      {/* The button to open modal */}
      <ButtonStyle className={OpenerClass}>
        <label htmlFor="my_modal_7" className="btn resetButton">
          {OpenerTxt}
        </label>
      </ButtonStyle>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      {/* Background effect */}
      <div className="modal" role="dialog">
        {/* The actual Modal */}
        <div className={`modalClass modal-box ${modalClass}`}>{children}</div>
        <label className="modal-backdrop !cursor-auto" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
}
