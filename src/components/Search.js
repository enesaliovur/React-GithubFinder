import React, {useState} from 'react';

const Search = ({searchUser, setAlert, showClearButton, clearSearch}) => {
    const [keyword, setKeyword] = useState('')


    const onChange = (e) => {
        setKeyword(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if (keyword === '') {
            setAlert('Lütfen bir anahtar kelime giriniz', 'danger')
        } else {
            searchUser(keyword)
            setKeyword('')
        }

    }



    return (
        <div className="container">
            <form onSubmit={onSubmit} className="w-75 m-auto">
                <div className="input-group my-3">
                    <input onChange={onChange} type="text" value={keyword}
                           className="form-control"/>
                    <div className="input-group-append">

                        <button type="submit" className="btn btn-sm btn-dark">Search</button>
                    </div>
                </div>
            </form>
            {showClearButton &&
            <button onClick={clearSearch} className="btn btn-block btn-primary">Clear Search</button>}


        </div>


    );
}


export default Search;
