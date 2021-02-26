// import React, { Component } from "react";
import React, { useContext, useState } from "react";

// const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const DataContext = React.createContext()
 const useGlobalState = () => useContext(DataContext)
 const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

// class DataProvider extends Component(){
function DataProvider({children}) {
    // const [data, setData] = useState({
    const [data, setData] = useState({
        products: [
            {
                "_id": "1",
                "title": "Chamchm 01",
                "src": "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, dolores nesciunt debitis repudiandae, nihil aperiam itaque in repellat explicabo minus beatae, aut magni ut? Ea animi nisi ex quam.",
                "colors": ["orange", "red", "green", "blue"],
                "price": 750,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Mix 02",
                "src": "https://image.shutterstock.com/image-photo/mix-mithai-260nw-308679107.jpg",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, dolores nesciunt debitis repudiandae, nihil aperiam itaque in repellat explicabo minus beatae, aut magni ut? Ea animi nisi ex quam.",
                "colors": ["orange", "red", "green", "blue"],
                "price": 750,
                "count": 2
            },
            {
                "_id": "3",
                "title": "Lucha 03",
                "src": "https://i.pinimg.com/originals/0f/08/21/0f082122f9dd0bc4a61ca90ca9438998.jpg",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, dolores nesciunt debitis repudiandae, nihil aperiam itaque in repellat explicabo minus beatae, aut magni ut? Ea animi nisi ex quam.",
                "colors": ["orange", "red", "green", "blue"],
                "price": 750,
                "count": 3
            },
            {
                "_id": "4",
                "title": "Cake 04",
                "src": "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/317/317257/cupcakes.jpg?w=1155&h=1541",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, dolores nesciunt debitis repudiandae, nihil aperiam itaque in repellat explicabo minus beatae, aut magni ut? Ea animi nisi ex quam.",
                "colors": ["orange", "red", "green", "blue"],
                "price": 750,
                "count": 4
            },
        ],
        cart: []
    })

    // })
    const addCart = (id) => {
        const { products, cart } = this.state;
        const cheak = cart.every(item => {
            return (
                item._id !== id
            )
        })
        if (cheak) {

            const data = products.filter(product => {
                return (
                    product._id === id
                )
            })
            this.setState({ cart: [...cart, ...data] })
            console.log(data)

        } else {
            alert("The product has been added cart.")
        }

    }

    // render() {
    const { products, cart } = data;
    // const {addCart} = data;
    return (

        // <DataContext.Provider value={{ products, addCart, cart }}>
        <DataContext.Provider value={{ products, cart ,addCart}}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
            {/* {this.props.children} */}
        </DataContext.Provider>

    )
}


export {
    DataProvider,
    DataContext,
    useGlobalStateUpdate,
    useGlobalState

}



// const GlobalStateUpdateContext = React.createContext()

// export const useGlobalState = () => useContext(GlobalStateContext)
// export const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

// export function GlobalStateProvider({ children }) {
//     const [data, setData] = useState({
//         user: null,
//         darkTheme: true
//     })

//     return (
//         <GlobalStateContext.Provider value={data}>
//             <GlobalStateUpdateContext.Provider value={setData}>
//                 {children}
//             </GlobalStateUpdateContext.Provider>
//         </GlobalStateContext.Provider>
//     )
// } 