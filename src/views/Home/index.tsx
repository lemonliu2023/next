import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
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

export default Home;
