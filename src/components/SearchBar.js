import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchBarInput(this.state.term);
    }
    render() {
        return (
            <div className="container mt-2">
                <form onSubmit={this.onFormSubmit} className="border">
                    <div className="field m-2">
                    <label>Image Search</label>
                        <br/>
                        <input style={{width: '100%'}} type="text"
                        placeholder="Search images"
                        value={this.state.term} 

                        onChange={e => this.setState({term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar