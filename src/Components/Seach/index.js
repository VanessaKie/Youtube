import React from 'react';


class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            search: '',
        }
    }

    handleSearch = (e) => {
        const input = e.target.value;
        this.setState({
            search: input
        })        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchVideo(this.state.search);
        this.setState({
            search: '',
        })
    } 

    render() {
    return(
        <div className="search row mb-4 mt-2">
            <form onSubmit={this.handleSubmit}>
                <div className='col'>
                    <input className="form-control ds-input " type='text' onChange={this.handleSearch} placeholder='Search ...' value={this.state.search} />
                </div>
            </form>
        </div>

    )
}
}

export default Search;