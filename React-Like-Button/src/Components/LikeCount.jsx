import React from 'react'
import { Typography } from 'antd'
const {Title} = Typography

function LikeCount({count}) {
  return (
   <Title level={3} style={{marginTop: 20}}> {count}  Like</Title>
)
}

export default LikeCount