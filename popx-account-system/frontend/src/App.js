// src/App.js
import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import AccountSettingsScreen from './components/AccountSettingsScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState(null);

  const handleLoginSuccess = (user) => {
    setUserData(user);
    setCurrentScreen('accountSettings');
  };

  const handleCreateAccount = (user) => {
    setUserData(user);
    setCurrentScreen('accountSettings');
  };

  return (
    <div className="app-container">
      {currentScreen === 'welcome' && (
        <WelcomeScreen 
          onCreateAccount={() => setCurrentScreen('createAccount')}
          onLogin={() => setCurrentScreen('login')}
        />
      )}
      {currentScreen === 'login' && (
        <LoginScreen 
          onBack={() => setCurrentScreen('welcome')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {currentScreen === 'createAccount' && (
        <CreateAccountScreen 
          onBack={() => setCurrentScreen('welcome')}
          onCreateAccount={handleCreateAccount}
        />
      )}
      {currentScreen === 'accountSettings' && (
        <AccountSettingsScreen 
          userData={userData}
          onLogout={() => {
            setUserData(null);
            setCurrentScreen('welcome');
          }}
        />
      )}
    </div>
  );
}

export default App;