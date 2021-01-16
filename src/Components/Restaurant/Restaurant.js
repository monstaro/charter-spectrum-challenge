import React from 'react';
import './Restaurant.css';

const Restaurant = (props) => {
  const { name } = props;
    return (
        <div className="restaurant-card">
        <table>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
            { name }
        </div>
    )
}

export default Restaurant;
