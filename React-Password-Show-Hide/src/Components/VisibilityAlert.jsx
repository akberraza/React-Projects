import React from 'react';
import { Alert } from 'antd';

function VisibilityAlert({showPassword}) {
  if(!showPassword) return null;
  return (
    <Alert 
      message='Password is visible!'
      type='warning'
      showIcon
      style={{marginTop: 15 }}
    />
  )
}

export default VisibilityAlert