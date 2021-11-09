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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    
    const values = store.getState()
    const pdt = values.productList.products


    console.log(pdt)
    let sorted = _.orderBy(pdt, ['[im:releaseDate].label',], ['asc'])
    console.log(sorted)

    let i, j, text = [], prices = [];
    for (i = 0; i < sorted.length; i++) {
        text.push(sorted[i]["im:price"].attributes.amount)
    }
    for (j = 0; j < sorted.length; j++) {
        prices.push(sorted[j]["im:name"].label)
    }
    
    useEffect(()=>{
        setDataVal(sorted)
        setCharPrice(text)
        setCharName(prices)
    },[product])

   




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
            <ChartView charName={charName} charPrice={charPrice} />
            <GridView setInputs={setInputs} sorted={sorted} doSearch={doSearch} setgroup={setgroup} btnSort={btnSort} dataVal={dataVal} />
        </div>
    )
}

/* useEffect(() => {
        axios.get("https://itunes.apple.com/us/rss/toppaidapplications/limit=100/json")
            .then((response) => {
                let i, j, text = [], prices = [];
                for (i = 0; i < response.data.feed.entry.length; i++) {
                    text.push(response.data.feed.entry[i]["im:price"].attributes.amount)
                }
                for (j = 0; j < response.data.feed.entry.length; j++) {
                    prices.push(response.data.feed.entry[j].title.label)
                }
                setCharPrice(text)
                setCharName(prices)
                let sorted = _.orderBy(response.data.feed.entry, ['[im:releaseDate].label',], ['asc'])
                setDataVal(sorted)

            }).catch((error) => {
                console.log('could not fetch datas from api')
            })


    }, [])
    */