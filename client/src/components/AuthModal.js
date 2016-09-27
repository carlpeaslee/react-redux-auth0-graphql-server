import React from 'react'
import {Modal} from 'react-bootstrap'

function AuthModal(props) {
    return (
      <div>
        <Modal
          show={props.lockModalShowing}
        >
          <Modal.body>
            <div id={'authDiv'}>blarp</div>
          </Modal.body>
        </Modal>
      </div>
    )
  }

export default AuthModal;
