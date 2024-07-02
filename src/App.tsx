import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="app">
      <main>
        <h1>Welcome to the Next</h1>
        <div className="button-box">
          <Space>
            <Button
              type="primary"
              onClick={() => {
                navigate('/threejs');
              }}
            >
              Threejs
            </Button>
            <Button
              onClick={() => {
                navigate('/markdown');
              }}
            >
              Markdown
            </Button>
          </Space>
        </div>
      </main>
    </div>
  );
};

export default App;
