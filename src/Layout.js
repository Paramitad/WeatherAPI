import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
import Logout from './Logout';


const options = [{ value: "Manchester", label: "Manchester" },
{ value: "London", label: "London" }];

class AppLayout extends React.Component {
    state = {
        Option: null,
        Temperature: undefined,
        city: undefined,
        country: undefined,
        visibility: undefined,
        description: undefined,
        error: undefined
    }

    handleChangeEvent = async (Option) => {
        const city = Option.value;
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=808f23dab5c8a305b61f085ceeafcb16`)
        const data = await apiCall.json()
        console.log("Data", data);
        if (city) {
            this.setState({
                city: data.name,
                visibility: data.visibility,
                description: data.weather[0].description
            })
        }
        else {
            this.setState({
                city: undefined,
                visibility: undefined,
                description: undefined,
                error: "Please enter city"
            })
    }
}
render() {
    return (
        <div>
            <h1>Select City</h1>
            <Select className="dropdown" onChange={this.handleChangeEvent} options={options} />
            <WeatherDetails
                city={this.state.city}
                visibility={this.state.visibility}
                description={this.state.description}
                error={this.state.error}
            />
            <Logout/>
        </div>
    )
}
}
export default AppLayout;