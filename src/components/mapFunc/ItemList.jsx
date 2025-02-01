import { useState } from "react"

export function ItemList(){
    const [itemList,setItemList] = useState(['Apple','Banana','Cherry','Dates','Eggplant','Fig','Grapes','Honeydew','Ice Cream','Jackfruit','Kiwi','Lemon','Mango','Nectarine','Orange','Peach','Quince','Raspberry','Strawberry','Tomato','Ugli Fruit','Vanilla','Watermelon','Xigua','Yam','Zucchini']);

    return <ul>
    {itemList.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
    </ul>
}