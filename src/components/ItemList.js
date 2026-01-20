const ItemList = ({itemlist}) => {
    console.log(itemlist)
    return (
        <div>
            <ul>
           { itemlist.map(item => 
           <div key= {item.card.info.id} className="border-b-2 border-b-gray-400 p-2 text-left">

            <div className="m-2 py-2"><span>{item.card.info.name}</span> 
            <span> - ₹{item.card.info.price/100}</span>
            
            <p className="text-sm">{item.card.info.description}</p>
            </div>
           </div>)}
           </ul>
        </div>
    )
}

export default ItemList
