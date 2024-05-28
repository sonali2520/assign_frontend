/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function Filter(props) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [endYear, setEndYear] = useState('');
    const [topics, setTopics] = useState([]);
    const [sector, setSector] = useState('');
    const [region, setRegion] = useState('');
    const [pest, setPest] = useState('');
    const [source, setSource] = useState('');
    const [swot, setSwot] = useState('');
    const [country, setCountry] = useState('');

    const [allTopics, setAllTopics] = useState([]);
    const [allSectors, setAllSectors] = useState([]);
    const [allRegions, setAllRegions] = useState([]);
    const [allPests, setAllPests] = useState([]);
    const [allSources, setAllSources] = useState([]);
    const [allSwots, setAllSwots] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [allEndYear, setAllEndYear] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
                extractFilters(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        filterData();
    }, [endYear, topics, sector, region, pest, source, swot, country]);

    const extractFilters = (dataReceived) => {
        const endYearSet = new Set(dataReceived.map((item) => item.end_year));
        const topicsSet = new Set(dataReceived.map((item) => item.topic));
        const sectorsSet = new Set(dataReceived.map((item) => item.sector));
        const regionsSet = new Set(dataReceived.map((item) => item.region));
        const pestsSet = new Set(dataReceived.map((item) => item.pestle));
        const sourcesSet = new Set(dataReceived.map((item) => item.source));
        const swotsSet = new Set(dataReceived.map((item) => item.swot));
        const countriesSet = new Set(dataReceived.map((item) => item.country));

        setAllTopics(Array.from(topicsSet));
        setAllSectors(Array.from(sectorsSet));
        setAllRegions(Array.from(regionsSet));
        setAllPests(Array.from(pestsSet));
        setAllSources(Array.from(sourcesSet));
        setAllSwots(Array.from(swotsSet));
        setAllCountries(Array.from(countriesSet));
        setAllEndYear(Array.from(endYearSet));
    };

    const filterData = () => {
        let filtered = data;
        if (endYear) {
            filtered = filtered.filter((item) => item.end_year === endYear);
        }
        if (topics.length > 0) {
            filtered = filtered.filter((item) => topics.includes(item.topic));
        }
        if (sector) {
            filtered = filtered.filter((item) => item.sector === sector);
        }
        if (region) {
            filtered = filtered.filter((item) => item.region === region);
        }
        if (pest) {
            filtered = filtered.filter((item) => item.pestle === pest);
        }
        if (source) {
            filtered = filtered.filter((item) => item.source === source);
        }
        if (swot) {
            filtered = filtered.filter((item) => item.swot === swot);
        }
        if (country) {
            filtered = filtered.filter((item) => item.country === country);
        }
        setFilteredData(filtered);
    };

    return (
        <>
            <div>Filter</div>
            <div className='grid grid-cols-3 gap-4'>
                <select onChange={(e) => setEndYear(e.target.value)} value={endYear}>
                    <option value="">Select End Year</option>
                    {allEndYear.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>

                <select onChange={(e) => setTopics([e.target.value])} value={topics}>
                    <option value="">Select Topic</option>
                    {allTopics.map((topic, index) => (
                        <option key={index} value={topic}>{topic}</option>
                    ))}
                </select>

                <select onChange={(e) => setSector(e.target.value)} value={sector}>
                    <option value="">Select Sector</option>
                    {allSectors.map((sector, index) => (
                        <option key={index} value={sector}>{sector}</option>
                    ))}
                </select>

                <select onChange={(e) => setRegion(e.target.value)} value={region}>
                    <option value="">Select Region</option>
                    {allRegions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                    ))}
                </select>

                <select onChange={(e) => setPest(e.target.value)} value={pest}>
                    <option value="">Select Pest</option>
                    {allPests.map((pest, index) => (
                        <option key={index} value={pest}>{pest}</option>
                    ))}
                </select>

                <select onChange={(e) => setSource(e.target.value)} value={source}>
                    <option value="">Select Source</option>
                    {allSources.map((source, index) => (
                        <option key={index} value={source}>{source}</option>
                    ))}
                </select>

                <select onChange={(e) => setSwot(e.target.value)} value={swot}>
                    <option value="">Select SWOT</option>
                    {allSwots.map((swot, index) => (
                        <option key={index} value={swot}>{swot}</option>
                    ))}
                </select>

                <select onChange={(e) => setCountry(e.target.value)} value={country}>
                    <option value="">Select Country</option>
                    {allCountries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {filteredData.map((item, index) => (
                    <div key={index} className="card w-75 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{item?.title}</h2>
                            <p>{item?.topic}</p>
                            <p>{item?.sector}</p>
                            <p>{item?.end_year}</p>
                            <p>{item?.pestle}</p>
                            <p>{item?.source}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
  );
}