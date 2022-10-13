import React, { useMemo } from 'react'
import { useQuery } from 'react-query';
import { getCocktails } from '../../scripts/network-functions';
import ResultCard from '../ResultCard/ResultCard';


const SearchResults = ({ searchFor }) => {
    const { data, error } = useQuery(["drink search", searchFor], () =>
        getCocktails(searchFor)
    );

    const cocktails = useMemo(() => {
        if (!data) return;
        return data.drinks;
    }, [data]);

    if (error) return <h2>an unknown error has occurred</h2>;
    return (
        // <div className={styles.main}>
        <div>
            {cocktails && cocktails.map((it) => (
            <ResultCard card={it} key={it.idDrink} />
            ))}
        </div>
    )
}

export default SearchResults