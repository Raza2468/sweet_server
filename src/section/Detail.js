import React from 'react'
// import { Component } from 'react';
import { useGlobalState, useGlobalStateUpdate } from '../contexts/AuthContexts'
// import { Link } from 'react-router-dom'
// import { Colors } from './Colors'
import "./Detail.css"
import { useContext, useState } from "react";
// import { Component } from 'react';



// class Detail extends Component {
function Detail(e) {

    const context = useGlobalState()
    const [read, Write] = useState({product:[]})
    // console.log(e.match.params.id );
    // console.log(context.products);
    // state = {
    //     product: []
    // }
    // const [dataproduct, setproduct] = useState({product: []})


    function getProduct() {
        if (e.match.params.id) {
            const res = context.products;
            const data = res.filter(item => {
                return (
                    item._id === e.match.params.id
                )
            })
            // setproduct({ product:data})
            // setData({
            //     products: data
            // })
            Write ({product:data})
            
        }
    }

    
    // function componentDidMount(){
        
        getProduct()
        // }
        // console.log("ya data", read);



    // state = {
    //     product: []
    // }
    // const getProduct = () => {
    //     if (setData.match.params.id) {
    //         const res = this.context.products;
    //         const data = res.filter(item => {
    //             return item._id === this.props.match.params.id
    //         })
    //         // console.log(data);
    //         this.setState({ product: data })
    //     }
    // }
    // getProduct()
    // componentDidMount=()=>{
    // }

    // render() {
    // console.log(context.products);


    // const { product } = read

    return (
        <div>
            dd
        </div>


    )
}
export default Detail

                // <div>
                //     {product.map(item => (
                //         <div className="detail" key={item._id}>
                //             <img src={item.src} alt="" />
                //             <div className="box">
                //                 <div className="row">
                //                     <h2>{item.title}</h2>
                //                     <span>${item.price}</span>
                //                 </div>
                //                 {/* <span>${item.colors}</span> */}
                //                 <Colors colors={item.colors} />
                //                 <p>{item.description}</p>

                //                 <Link to="/cart" className="cart">
                //                     Add to Cart
                //                         </Link>
                //             </div>
                //         </div>
                //     )
                //     )}
                // </div>

                // const App = () => {
                //     const [countries, setCountries] = useState([])
                //     const [countriesFilter, setCountriesFilter] = useState('')
                //     const [filteredCountries, setFilteredCountries] = useState([])
                //     useEffect(() => {
                //     axios
                //     .get('https://restcountries.eu/rest/v2/all')
                //     .then(response => {
                //     setCountries(response.data)
                //     })
                //     }, [])
                //     const handleCountriesChange = (event) => {
                //     setCountriesFilter(event.target.value)
                //     }
                //     const test = () => {
                    
                //     setFilteredCountries(countries.filter(country =>
                //     country.name.toLowerCase().includes(countriesFilter.toLowerCase())))
                //     }
                //     return (
                //     <div>
                //     Search countries:<input onChange={handleCountriesChange}></input>
                //     <ul>{test()}</ul>
                //     </div>
                //     )
                //     }
                //     export default App