import { useState } from 'react'

const data = [
    { name: '珍珠奶茶', description: '香濃奶茶搭配QQ珍珠', price: 50, stock: 20 },
    { name: '冬瓜檸檬', description: '清新冬瓜配上新鮮檸檬', price: 45, stock: 18 },
    { name: '翡翠檸檬', description: '綠茶與檸檬的完美結合', price: 55, stock: 34 },
    { name: '四季春茶', description: '香醇四季春茶，回甘無比', price: 45, stock: 10 },
    { name: '阿薩姆奶茶', description: '阿薩姆紅茶搭配香醇鮮奶', price: 50, stock: 25 },
    { name: '檸檬冰茶', description: '檸檬與冰茶的清新組合', price: 45, stock: 20 },
    { name: '芒果綠茶', description: '芒果與綠茶的獨特風味', price: 55, stock: 18 },
    { name: '抹茶拿鐵', description: '抹茶與鮮奶的絕配', price: 60, stock: 20 },
]

function DataTable() {
    const [items, setItems] = useState(data)

    function handleDecrease(index) {
        const newData = [...items] //複製一份data
        newData[index].stock--
        return setItems(newData)
    }
    function handleIncrease(index) {
        const newData = [...items] //複製一份data
        newData[index].stock++
        return setItems(newData)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">品項</th>
                    <th scope="col">描述</th>
                    <th scope="col">價格</th>
                    <th scope="col">庫存</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <small>{item.description}</small>
                            </td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handleDecrease(index)}>-</button>
                                {item.stock}
                                <button onClick={() => handleIncrease(index)}>+</button>
                            </td>
                        </tr>
                    )
                })}
                <tr>
                    <td>珍珠奶茶</td>
                    <td>
                        <small>香濃奶茶搭配QQ珍珠</small>
                    </td>
                    <td>50</td>
                    <td>
                        <button>-</button>20<button>+</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default DataTable
