import { useState } from 'react';
import { Steps } from 'antd';
import { RobotOutlined, UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons';
import IntentList from './components/IntentList';
import OtherSteps from './components/OtherSteps';
import './App.css';

const { Step } = Steps;
function App() {
  const [current, setCurrent] = useState('pre_defined');
  return (
    <>
      <div className="intent-stage">
        <img src="/chatbot.png" alt="chatbot" className="intent-stage__image" />
        <h1 className="intent-stage__title">Select default intent</h1>
        <h2 className="intent-stage__subtitle">
          Let's start with setting up your chat bot, select any of the pre-trained intent with question to boost up your
          setup of your chat for your application
        </h2>
        <Steps>
          <Step status="wait" title="Login" icon={<RobotOutlined />} onClick={() => setCurrent('pre_defined')} />
          <Step status="wait" title="Create bot" icon={<UserOutlined />} onClick={() => setCurrent('create')} />
          <Step status="wait" title="Verification" icon={<SolutionOutlined />} onClick={() => setCurrent('verify')} />
          <Step status="wait" title="Done" icon={<SmileOutlined />} onClick={() => setCurrent('done')} />
        </Steps>
      </div>
      {current === 'pre_defined' && <IntentList />}
      {current === 'create' && <OtherSteps text="Create your list from here..." />}
      {current === 'verify' && <OtherSteps text="Verify your changes..." />}
      {current === 'done' && <OtherSteps text="Let's help your customer..." />}
    </>
  );
}

export default App;
