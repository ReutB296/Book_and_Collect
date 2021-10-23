import './search.css';
import {useState, useRef, useEffect, useCallback} from 'react';
import debounce from 'lodash.debounce';

export default function Search(){
    const [value, setValue] = useState('');
    const [serachResults, setSerachResults] = useState([]);
    const inputRef = useRef("");

    const search = useCallback(debounce(() => {
        console.log("value from search",value)
        fetch('/api/Books/search', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value})
        })
            .then(response => response.json())
            .then(data => {setSerachResults(data);
                           console.log(serachResults);
                           
            }).catch(err => {
                console.log(err);
            });
    }, 700), [value]);

    const onSearch = () =>{
        setValue(inputRef.current.value);
    }

    useEffect(() =>{
        if (value !== ''){
            console.log("value useeffect", value)
            search();
            return search.cancel;
        }else{
            setSerachResults([]);
        }

    }, [value, search]);

     
  
    return(
        <div className="search_container">
            <div className="headerContainer">
                {/* <h1 className="search_h1">Search a book</h1> */}
                <div className="input_container">
                    <input className="inputSearch" placeholder="Search a book..." ref={inputRef} value={value} onChange={onSearch}/>
                    <button className="searchBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#828282" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </button>
                </div>
            </div>
            <div className="results_container">
                { serachResults.length !== 0 ?
                        <ul>
                            { serachResults.map (book =>
                            <li>
                                <div className="bookCover"><img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`}/></div>
                                <div className="searchcontainer">
                                        <div className="titleSearch">{book.title}</div>
                                        <div className="first_publish_year">{book.first_publish_year}</div>
                                        {book.language.map(language => <span>{language}</span>)}
                                </div>
                            </li>

                            )}
                        </ul>
                :
                ""
                }
            </div>
        </div>
    )

}