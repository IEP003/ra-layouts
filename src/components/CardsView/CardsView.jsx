import { ShopCard } from "../ShopCard/ShopCard"
import './cardsView.css'


export const CardsView = ({ product, viewMode }) => {
    return (
        <>
            <div className={`cards_${viewMode}`}>
                {product.map((card, index) => (
                    <ShopCard key={index} card={card} viewMode={viewMode}/>
                ))}
            </div>
        </>  
      )
}