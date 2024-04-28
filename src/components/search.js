


function Search({searchBar}){

    
    return(

        <div class="input-group">
        <input
        type="text"
        class="form-control m-2"
        placeholder="Recent Transactions"
        onChange={searchBar}
        ></input>
        </div>
    )
}

export default Search;
