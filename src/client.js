import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import useFetch from 'react-fetch-hook';
import PostInstruction from './postInstruction';

function App() {
    const {isLoading, data} = useFetch('http://localhost:4001');
    if(isLoading) {
        return 'Loading...';
    }
    return (
    <PostInstruction/>
    //<pre>{JSON.stringify(data, null, 4)}</pre>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));
