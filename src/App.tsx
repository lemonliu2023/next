import { FloatButton } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="app" style={{ height: "100%" }}>
      <Outlet />
      <FloatButton
        icon={<HomeOutlined />}
        tooltip={<div>回到主页</div>}
        onClick={() => navigate("/home")}
      />
    </div>
  );
};

export default App;
