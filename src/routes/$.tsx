import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "@modern-js/runtime/dist/types/router";

function Page404() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="当前页面未找到"
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          返回首页
        </Button>
      }
    />
  );
}

export default Page404;
