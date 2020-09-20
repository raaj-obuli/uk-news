import React from 'react';
import { debounce } from 'throttle-debounce';

import './search.scss';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
            value: value
        });

        this.onChange({
            keyword: value
        });
    }

    componentDidMount() {
        const { onChange } = this.props;

        this.onChange = debounce(300, onChange);
    }

    componentWillUnmount() {
        this.onChange.cancel();
    }

    render() {
        const { value } = this.state;

        return (
            <div className="Search">
                <input type={value} placeholder="Enter keyword to filter" onChange={this.handleChange} />
            </div>
        );
    }
}

export default Search;
