import React from "react";
import { Progress } from "antd";

 function CounterDisplay({ count, max = 100 }) {
  const percent = Math.min((count / max) * 100, 100);

  return (
    <div style={{ marginTop: 15 }}>
      <p>
        Characters: <b>{count}</b> / {max}
      </p>
      <Progress percent={percent} status={percent < 100 ? "active" : "exception"} />
    </div>
  );
}

export default CounterDisplay