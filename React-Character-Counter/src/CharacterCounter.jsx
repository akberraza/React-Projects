import React, { useState } from 'react'
import { Card } from 'antd'
import TextAreaInput from './Components/TextAreaInput'
import CounterDisplay from './Components/CounterDisplay'


function CharacterCounter() {

    const [text, settext] = useState('')

    return (
        <div
            style={{
                textAlign: 'center',
            }}>
            <h1 style={{ marginTop: 40 }}>Character Counter</h1>

            <Card 
                title='📝 Character Counter'
                style={{
                    maxWidth: 500,
                    margin: '0 auto',
                    padding: 20,
                    borderRadius: 12,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
            >

                <TextAreaInput text={text} settext={settext} />
                <CounterDisplay  count={text.length}  />
            </Card>

        </div>
    )
}

export default CharacterCounter