import { Layout } from "antd";
const { Footer } = Layout;

function FooterPage() {
  return (
    <Footer style={{ textAlign: "center" }}>
      {`©2021 Created by <Joel Nieto />`}
    </Footer>
  );
}

export default FooterPage;
