import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';

function SearchPage() {
    const [searchFor, setSearchFor] = useState("");

    return (
        <div>
            {/* <div className={styles.main}> */}
            <div>
                <SearchBar setSearchTerm={setSearchFor} />
                {!!searchFor ? <SearchResults searchFor={searchFor} /> : null}
            </div>
        </div>
    )
}

export default SearchPage;