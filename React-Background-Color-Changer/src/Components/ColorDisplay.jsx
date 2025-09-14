import React from 'react'
import { Typography, Tag } from 'antd';

const {Title} = Typography

function ColorDisplay({bgColor}) {
  return (
    <div style={{marginBottom: 20}}>
          <Title level={3}>Change Background</Title>
          <Tag color={bgColor} style={{fontSize: '16px', padding: '5px 15px'}}>
              {bgColor}
          </Tag>
    </div>
  )
}

export default ColorDisplay