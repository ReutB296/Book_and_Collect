import './search.css';
import {useState, useEffect, useRef} from 'react';

export default function Search(){
    const [value, setValue] = useState('');
    const inputRef = useRef("");
    
    const search = () =>{
        setValue(inputRef.current.value);
    }
  

    return(
        <div className="search_container">
            <input ref={inputRef} value={value} onChange={search}></input>
        </div>
    )

}