import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
    render() {
        const { favAnimals } = this.props;
        // console.log(this.props);
        
        return (
            <ul>
                {favAnimals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        );
    }
}
export default UserFavoriteAnimals;