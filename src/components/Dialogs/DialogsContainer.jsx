import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateTextMessageCreator} from './../../redux/dialogs_reducer';

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = (text) => {
    let action = sendMessageCreator({id: 3, me: 'me', message: text});
    props.store.dispatch(action);
  }
  let changeMessage = (text) => {
    let action = updateTextMessageCreator(text);
    props.store.dispatch(action);
  }

  return (
    <Dialogs dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      currentTextMessage={state.dialogsPage.currentTextMessage}
      sendMessage={sendMessage}
      changeMessage={changeMessage}/>
    )
}

export default DialogsContainer;
