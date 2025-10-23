//import './../css/CheeseRow.css';

function CheeseRow(row) {
    return (
        <tr>
            {/*<td><img src={require('./../images/rouge.jpg')} alt="Not working"/></td>*/}
            <td><img src={row.image} alt={row.name} /></td>
            <td>{row.name}</td>
            <td>{row.type}</td>
            <td>{row.locationProduced}</td>
            <td>{row.timeAged}</td>
        </tr>
    );
};

export default CheeseRow;
