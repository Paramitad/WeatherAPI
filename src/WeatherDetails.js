import React from 'react';

class WeatherDetails extends React.Component {

    render() {
        return (
            <div>
                Location: {this.props.city}
                <br></br>
                Visibility:{this.props.visibility}
                <br></br>
                Description:{this.props.description}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

export default WeatherDetails;