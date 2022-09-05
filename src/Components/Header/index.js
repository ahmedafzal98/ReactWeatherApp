
import React from 'react'
import { Header } from '../Header'
import { Menu } from './Menu'
import logo from '../../logo_white_cropped.png';
export default function () {
    return (
        <div style={{ margin: 10, height: 120, flex: 1, flexDirection: 'row', display: 'flex' }}>


            {/* LOGO */}
            <div style={{ height: 100, flex: 0.2, margin: 5 }}>

                <div class="logo">

                    <img src={logo} alt="" srcset="" />

                </div>
            </div>

            {/* SEARCH FIELD */}
            <div style={{ backgroundColor: 'yellow', height: 100, flex: 0.2, margin: 5 }}>

            </div>


            <Menu />
        </div>
    )
}





















// // menu


// function menu() {

// }


// const menu = (a, b) => {

//     return 2 * (a + b);
// }


// // <ReactSearchAutocomplete
// //     placeholder='Weather in Your City'
// //     items={posts}
// //     onSearch={fetchItemData}
// //     onHover={handleOnHover}
// //     onSelect={handleOnSelect}
// //     onFocus={handleOnFocus}
// //     autoFocus
// //     formatResult={formatResult}
// // />

// // const ReactSearchAutocomplete = (props) => {

// //     return (

// //         <div>{props.placeholder}

// //             <button onClick={props.onSearch(2)}></button>
// //         </div>

// //     )
// // }



// // <ReactSearchAutocomplete
// //     placeholder='Weather in Your City'
// //     onSearch="asas"
// // />







// const add = (props) => {

//     return props.a + props.b
// }

// const numbers = {
//     a: 10,
//     b: 10
// }

// add(numbers);








