import { useState } from 'react'

function Hooks() {
    // let a =1;
    //[值，修改值的函数] = useState(初始值)
    const [a, setA] = useState(1)
    const [text, setText] = useState('卡卡西')
    function handleClick() {
        setA(a + 1)
        console.log(a)
    }
    const handleOnChange = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }
    return (
        <div>
            <h1>Hooks</h1>
            <button
                onClick={() => {
                    setA(a + 1)
                    console.log(a)
                }}>
                {a}
            </button>
            <button onClick={handleClick}>{a}</button>
            {text}
            <input
                type="text"
                value={text}
                onChange={(event) => {
                    console.log(event.target.value)
                    setText(event.target.value)
                }}
            />
            <input type="text" value={text} onChange={handleOnChange} />
        </div>
    )
}
export default Hooks
