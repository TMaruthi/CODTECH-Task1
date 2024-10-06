import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';



const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
 

  return (
    <ChatEngine
      height="100vh"
      projectID="ee62f3ac-2053-4353-8010-1a1664c6230a"
        userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;