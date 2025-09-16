import React from 'react'
import { Tooltip } from 'antd'
import {HeartOutlined, HeartFilled} from '@ant-design/icons'


function LikeIcon({liked, onToggle}) {
  return (
      
    <Tooltip title={liked ? 'Unlike' : "Like"}>
      <button 
      onClick={onToggle}
      style={{
       fontSize: '35px',
       cursor: 'pointer',
       color: liked ? '#cf1322' : 'Grey',
       background: 'trasparent',
       border: '2px solid grey',
       borderRadius: "50%",
       padding: '6px 15px'
      }}>
         {liked ? <HeartFilled /> : <HeartOutlined />}
      </button>
    </Tooltip>
      
  )
}

export default LikeIcon