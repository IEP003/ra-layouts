import { useCallback, useState } from "react";
import { products } from "../product";
import { IconSwitch } from "../IconSwitch/IconSwitch";
import { CardsView } from "../CardsView/CardsView"

export function Store() {
    const [icon, setIcon] = useState('view_module');
    const [viewMode, setViewMode] = useState('module');

    const onSwitch = useCallback(() => {
        setIcon((prevIcon) => {
           return prevIcon === "view_list" ? "view_module" : "view_list"
        });

        setViewMode((prevViewMode) => {
            return prevViewMode === "list" ? "module" : "list"
        });
        
    }, [])

    return (
        <>
        <IconSwitch icon={icon} onSwitch={onSwitch}/>
        <CardsView product={products} viewMode={viewMode}/>
        </>
    )
}
  
   

