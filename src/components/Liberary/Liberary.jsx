import React, { useState } from 'react'
import './Liberary.css'
import Menu from './Menu'
import CatMenu from './CatMenu'
import MenuItems from './MenuItems'


function Liberary() {

    // /////// احنا كتبنا تعبير النيو ست عشان لما نلوب ع الزراير ماتكتبش القيم المتكرره وضفنا الأوول عشان مش من ضمن الكاتيجري
    const catMenuHandle = [...new Set( Menu.map((item)=> item.category)) ,'all']
    console.log(catMenuHandle);

    const [items, setItems] = useState(Menu)
    const [catItems , setCatItems] = useState(catMenuHandle)


    const filterItem =(categoryButton)=>{
        if(categoryButton === 'all'){
            setItems(Menu)
            return;
        }
        
        let newItems = Menu.filter((menuItem)=>{
            return menuItem.category === categoryButton
        })
        setItems(newItems)
    }
    return (
        <>
            <h1 className='mt-5 text-center main-heading'>
                Order Your Favourite Dish
            </h1>
            <hr />

            {/* //// Our CatMenu Buttons //// */}
            <CatMenu filterItem={filterItem} catItems={catItems}/>
           
            {/*////  Our MenuItems List ///// */}

            <MenuItems items={items}/>

           



        </>
    )
}

export default Liberary