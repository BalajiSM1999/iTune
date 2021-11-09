import React, { useState } from 'react'


export default function GridView({ setInputs, sorted, doSearch, setgroup, btnSort, dataVal }) {
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
                    dataVal.map((row) => (
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