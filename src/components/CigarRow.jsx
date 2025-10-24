
function CigarRow(row) {
    return (
        <tr>
            <td><img src={row.image} alt={row.name} /></td>
            <td>{row.name}</td>
            <td>{row.type}</td>
            <td>{row.location}</td>
            <td>{row.price}</td>
        </tr>
    );
};

export default CigarRow;