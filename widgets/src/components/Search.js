import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('puppies');
    const [results, setResults] = useState([]);

    // useEffect - React will rerender after a state change. There are three possible values to pass
    // 1. [] - Runs once at initial render
    // 2. Nothing - Runs once at initial render and runs again after every rerender
    // 3. [data] - Runs at initial render and runs again after every rerender IF data has change since last rerender
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            console.log(data);

            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000)
    
            // This return or clean up function is not invoked on first render. The first render will return a reference
            // to this function to be used later. Whenever the useEffect runs again, in this case because of change to
            // the term state, the clean up function will be called first before the useEffect code is processed acting
            // as a clean up.
            return() => {
                clearTimeout(timeoutId);
            }
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Search Term </label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;