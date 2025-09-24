import React from 'react'
import { Typography } from 'antd'

const {Paragraph} = Typography

function ToggleText({isVisible}) {
  return (
    <>
       {isVisible && ( 

        <Paragraph style={{marginTop: 16, fontSize: '18px'}}>
                    👋 Hello! I am Akbar Raza & I am Frontend Developer.
        </Paragraph>
       )}
    </>
  )
}

export default ToggleText