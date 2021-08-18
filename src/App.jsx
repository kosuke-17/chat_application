import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App =  () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="699b831c-515a-4e95-acae-b33927095690"
      userName="Tamura Kosuke"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}
export default App