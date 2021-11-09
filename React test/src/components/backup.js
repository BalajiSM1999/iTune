/*
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ChartView from './charts'

export default function MainPage() {
    const [data, setData] = useState([])
    const [group, setgroup] = useState('')
    const [chart, setChart] = useState('')
    const [inputs, setInputs] = useState('')
    const [charName, setCharName] = useState([])
    const [charPrice, setCharPrice] = useState([])

    const titleRef= useRef('')
    const divRef= useRef('')

    //data fetch
    useEffect(() => {
        axios.get("https://itunes.apple.com/us/rss/toppaidapplications/limit=100/json")
            .then((response) => {
                console.log(response.data.feed.entry)
                setData(response.data.feed.entry)
            })
    }, [])

    // set chart inputs
    function getCharvalues() {
        setChart("error")
        var i, j, text = [], prices = [];
        for (i = 0; i < data.length; i++) {
            text.push(data[i]["im:price"].attributes.amount)
        }
        for (j = 0; j < data.length; j++) {
            prices.push(data[j].title.label)
        }
        setCharPrice(text)
        setCharName(prices)
    }

    //sorting
    function btnSort() {
        var list, i, switching, b, a, shouldSwitch;
        list = document.querySelector("#divided");
        switching = true;

        while (switching) {
            switching = false;
            a = list.getElementsByClassName("card");
            b = list.getElementsByClassName(group)
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                a[i].parentNode.insertBefore(a[i + 1], a[i]);
                switching = true;
            }
        }
    }


    //filtering
    function doSearch() {
        console.log(titleRef)
        var filter, found, div, element, row, i, j;
        filter = inputs.toUpperCase();
        div = document.querySelector("#divided");
        element = div.getElementsByClassName("card");
        for (i = 0; i < element.length; i++) {
            row = element[i].getElementsByTagName("h5");
            for (j = 0; j < row.length; j++) {
                if (row[j].innerHTML.toUpperCase().indexOf(filter) > -1) {

                    found = true
                }
            }
            if (found) {
                element[i].style.display = "";
                found = false;
            } else {
                element[i].style.display = "none";
            }
        }

        var a, selName = [], selectPrice = [];

        for (a = 0; a < data.length; a++) {

            if (data[a].title.label.toUpperCase().includes(filter)) {
                selName.push(data[a].title.label)
                setCharName(selName)
                selectPrice.push(data[a]["im:price"].attributes.amount)
                setCharPrice(selectPrice)
            }

        }
    }
 
    return (
        <div>
            <h1 className="heading">iTune Top Paid Applications</h1>

            <button className="btn-primary" data-testid="btn" onClick={getCharvalues}>View Charts</button>
            {chart ? (

                <ChartView charName={charName} charPrice={charPrice} />
            ) : ""}<br></br>

            <div className="funcs">
                <div className="search">
                    <p>Search: <input type="text" onChange={e =>setInputs(e.target.value)} id="searchTerm" placeholder="filter by app name" onKeyPress={doSearch} /></p>

                </div>


                <div className="dropdown">
                    <button className="dropbtn" title="drop-btn">Sort By</button>
                    <div className="dropdown-content" id="sort-content">
                        <a onMouseDown={() => setgroup("card-title")} onClick={btnSort}>Name</a>
                        <a onMouseDown={() => setgroup("card-price")} onClick={btnSort}>Price</a>
                        <a onMouseDown={() => setgroup("card-label")} onClick={btnSort}>Category</a>
                        <a onMouseDown={() => setgroup("card-date")} onClick={btnSort}>Date</a>

                    </div>
                </div>

            </div>

            <div id="divided" ref={divRef}>

                {
                    data.map((row) => (
                        <div key={row.title.label} className="card-main">
                            <div className="card">
                                <img className="card-img" alt="icons" src={row["im:image"][0].label}></img>
                                <h5 ref={titleRef} className="card-title">{row.title.label}</h5>
                                <p className="card-label">{row.category.attributes.label}</p>
                                <p className="card-price" value={row["im:price"].attributes.amount}>{row["im:price"].label}</p>
                                <p className="card-dates">{row["im:releaseDate"].attributes.label}</p>
                                <p className="card-date" value={row["im:releaseDate"].label}>{row["im:releaseDate"].label}</p>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}


*/


/*
   <div className="dropdown">
                    <button className="dropbtn" title="drop-btn">Sort By</button>
                    <div className="dropdown-content" id="sort-content">
                        <a onMouseDown={() => setgroup("title.label")} onClick={btnSort}>Name</a>
                        <a onMouseDown={() => setgroup("['im:price'].attributes.amount")} onClick={btnSort}>Price</a>
                        <a onMouseDown={() => setgroup("category.attributes.label")} onClick={btnSort}>Category</a>
                        <a onMouseDown={() => setgroup("[im:releaseDate].label")} onClick={btnSort}>Date</a>

                    </div>
                </div>



                 <div className="funcs">
                <div className="search">
                    <p>Search: <input type="text" onChange={e => setInputs(e.target.value)} id="searchTerm" placeholder="filter by app name" onKeyPress={doSearch} /></p>

                </div>

                <select className="select" onChange={e => setgroup(e.target.value)} onClick={btnSort}>
                    <option value="[im:releaseDate].label">Date</option>
                    <option value="title.label">Name</option>
                    <option value="['im:price'].attributes.amount">Price</option>
                    <option value="category.attributes.label">Category</option>
                </select>


            </div>


            <div id="divided">

                {
                    data.map((row) => (
                        <div key={row.title.label} className="card-main">
                            <div className="card">
                                <div>
                                    <img className="card-img" alt="icons" src={row["im:image"][0].label}></img>
                                    <h5 className="card-title">{row.title.label}</h5>
                                    <p className="card-label">{row.category.attributes.label}</p>
                                    <p className="card-price" value={row["im:price"].attributes.amount}>{row["im:price"].label}</p>
                                    <p className="card-dates">{row["im:releaseDate"].attributes.label}</p>
                                    <p className="card-date" value={row["im:releaseDate"].label}>{row["im:releaseDate"].label}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>


            main.js..............
            

import axios from 'axios'
import _, { lte } from 'lodash'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { listProducts, sortProducts } from '../redux/action'
import store from '../store'
import ChartView from './charts'
import GridView from './grid'

export default function MainPage() {
    const [dataVal, setDataVal] = useState([])
    const [group, setgroup] = useState('')
    const [inputs, setInputs] = useState('')
    const [charName, setCharName] = useState([])
    const [charPrice, setCharPrice] = useState([])

    
    const product = useSelector((state) => state.productList.products);

    const values= store.getState()
            const pdt= values.productList.products

    const[val, setVal]=useState([])
    console.log(val)

        useEffect(()=>{
            const values= store.getState()
            const pdt= values.productList.products
            setVal(pdt)
            console.log(val)
        },[])
    
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts());
        dispatch(sortProducts(product))
    }, [dispatch]);

    useEffect(() => {
        
        let i, j, text = [], prices = [];
        for (i = 0; i < product.length; i++) {
            text.push(product[i]["im:price"].attributes.amount)
        }
        console.log(text)
    }, []);
    

    function SetValues() {
       
        let i, j, text = [], prices = [];
        for (i = 0; i < product.length; i++) {
            text.push(product[i]["im:price"].attributes.amount)
        }
        for (j = 0; j < product.length; j++) {
            prices.push(product[j]["im:name"].label)
        }
        setCharPrice(text)
        setCharName(prices)
        let sorted = _.orderBy(product, ['[im:releaseDate].label',], ['asc'])
        setDataVal(sorted)
        localStorage.setItem('charPrice',JSON.stringify(text) );
        localStorage.setItem('charName',JSON.stringify(prices) );
        sessionStorage.setItem('charName',JSON.stringify(prices) );
    }




    //sorting
    function btnSort() {
        let sorted = _.orderBy(dataVal, [group,], ['asc'])
        setDataVal(sorted)
    }

    //filtering
    function doSearch() {
        let filters;
        filters = inputs.toUpperCase();
        let filtered = _.filter(dataVal, function (o) {
            return o.title.label.toUpperCase().includes(filters);
        });
        setDataVal(filtered)

        let a, selName = [], selectPrice = [];

        for (a = 0; a < dataVal.length; a++) {

            if (dataVal[a].title.label.toUpperCase().includes(filters)) {
                selName.push(dataVal[a]["im:name"].label)
                setCharName(selName)
                selectPrice.push(dataVal[a]["im:price"].attributes.amount)
                setCharPrice(selectPrice)
            }

        }
    }

    return (
        <div>
            <button data-testid="btn" onClick={SetValues}>get</button>
            <ChartView charName={charName} charPrice={charPrice} />
            <GridView setInputs={setInputs}  doSearch={doSearch} setgroup={setgroup} btnSort={btnSort} dataVal={dataVal} />
        </div>
    )
}


            grid.js...........
            import React, { useState } from 'react'


export default function GridView({ setInputs, doSearch, setgroup, btnSort, dataVal }) {

    return (
        <div>
            <div className="funcs">
                <div className="search">
                    <p>Search: <input type="text" onChange={e => setInputs(e.target.value)} id="searchTerm" placeholder="filter by app name" onKeyPress={doSearch} /></p>

                </div>

                <select className="select" onChange={e => setgroup(e.target.value)} onClick={btnSort}>
                    <option value="[im:releaseDate].label">Date</option>
                    <option value="title.label">Name</option>
                    <option value="['im:price'].attributes.amount">Price</option>
                    <option value="category.attributes.label">Category</option>
                </select>


            </div>


            <div id="divided">

                {
                  dataVal&&  dataVal.map((row) => (
                        <div key={row.title.label} className="card-main">
                            <div className="card">
                                <div className="card-cls">
                                    <img className="card-img" alt="icons" src={row["im:image"][0].label}></img>
                                   <div className="card-content">
                                    <h5 className="card-title">{row["im:name"].label}</h5>
                                    <p className="card-label">{row.category.attributes.label}</p>
                                    <p className="card-price" value={row["im:price"].attributes.amount}>{row["im:price"].label}</p>
                                    <p className="card-dates">{row["im:releaseDate"].attributes.label}</p>
                                    <p className="card-date" value={row["im:releaseDate"].label}>{row["im:releaseDate"].label}</p>
                                   </div>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}


chart.js
import React from 'react'
import { Pie } from 'react-chartjs-2'

export default function ChartView({ charName, charPrice }) {

    return (
        <div>
            <h1 className="heading">iTune Top Paid Applications</h1>

            <div className="charts">
                <Pie
                    data={{
                        labels: charName,
                        datasets: [
                            {
                                label: 'no of apps',
                                data: charPrice,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            },

                        ],
                    }}
                    height={400}
                    width={600}
                />
            </div>
        </div>
    )
}


*/