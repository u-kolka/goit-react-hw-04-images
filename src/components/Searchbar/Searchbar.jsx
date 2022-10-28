import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {

    static propTypes = {
        onSearch: PropTypes.func.isRequired,
    }

    state = {
        query: '',
    }

    handleSubmit = event => {
        event.preventDefault();

        const { query } = this.state;
        if (query.trim() === '') {
            return toast.info('🦄 Please enter a word to search.');
        }

        this.props.onSearch(query);
    };

        handleChange = event => {
        this.setState({ query: event.currentTarget.value.toLowerCase() });
    };
    
    render() {

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label"></span>
                    </button>

                    <input 
                        className="SearchForm-input"
                        name="search"
                        value={this.state.query}
                        onChange={this.handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
