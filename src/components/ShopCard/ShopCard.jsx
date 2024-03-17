import './shopCard.css'

export const ShopCard = ({ card, viewMode }) => {
    return (<>
        <div className={`card item_${viewMode}`}>
            <h3 className="name center">{card.name}</h3>
            <span className="color center">{card.color}</span>
            <img src={card.img} alt={card.name} />
            <div className="price red">
                <div className="summ">${card.price}</div>
                <button className="cart">Add to cart</button>
            </div>
        </div>
    </>)
}