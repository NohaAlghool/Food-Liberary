import React from 'react'

function CatMenu({filterItem, catItems}) {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-center">
                    {
                        catItems.map((catBut , index)=>
                        <button  key={index} className='btn btn-warning mx-1' onClick={() => filterItem(catBut)}>{catBut}</button>
                        )
                    }
                   
                </div>
            </div>
        </>
    )
}

export default CatMenu