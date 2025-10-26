import "./../css/Cigars.css";
import CigarRow from "../components/CigarRow";

const Cigars = () => {
    return (
        <div id="cigar">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location Produced</th>
                    <th>Price</th>
                </tr>
                <CigarRow
                    image="./images/cigar1.jpg"
                    name="Cohiba Behike"
                    type="Premium Cigar"
                    location="Cuba"
                    price="$11.99"/>
                <CigarRow
                    image="./images/cigar2.jpg"
                    name="Arturo Fuente Opus X"
                    type="Premium Cigar"
                    location="Dominican Republic"
                    price="$15.99"/>
                <CigarRow
                    image="./images/cigar3.jpg"
                    name="Padrón 1964 Anniversary Series"
                    type="Premium Cigar"
                    location="Nicaragua"
                    price="$36.99"/>
                <CigarRow
                    image="./images/cigar4.jpg"
                    name="Montecristo No. 2"
                    type="Premium Cigar"
                    location="Cuba"
                    price="$19.99"/>
            </table>
        </div>
    );
};

export default Cigars;