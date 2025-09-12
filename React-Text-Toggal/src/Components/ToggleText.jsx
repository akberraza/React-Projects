import React from 'react'
import { Typography } from 'antd'

const {Paragraph} = Typography

function ToggleText({isVisible}) {
  return (
    <>
       {isVisible && ( 

        <Paragraph style={{marginTop: 16, fontSize: '18px'}}>
                    👋 Hello Jani! Ye text toggle ho raha hai.
        </Paragraph>
       )}
    </>
  )
}

export default ToggleText