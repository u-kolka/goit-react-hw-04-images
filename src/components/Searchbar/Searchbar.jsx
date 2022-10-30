import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function Searchbar ({onSearch}) {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (query.trim() === '') {
            return toast.info('🦄 Please enter a word to search.');
        }

        onSearch(query);
    };

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label"></span>
                </button>

                <input
                    className="SearchForm-input"
                    name="search"
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};