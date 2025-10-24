import "./../css/Wine.css";
import WineRow from "../components/WineRow";

const Wine = () => {
    return (
        <div id="wine">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location Produced</th>
                    <th>Pair With</th>
                    <th>Price</th>
                </tr>
                <WineRow
                image="../images/wine1.jpg"
                name="Chateau Margaux"
                type="Red Wine"
                location="France"
                pair="Lamb, beef, and duck"
                price="$32.99"/>
                <WineRow
                image="../images/wine2.jpg"
                name="Pahlmeyer Merlot"
                type="Red Wine"
                location="USA"
                pair="Dark chocolate and duck"
                price="$27.99"/>
                <WineRow
                image="../images/wine3.jpg"
                name="Antinori Tignanello"
                type="Red Wine"
                location="Italy"
                pair="Boar and cheese"
                price="$45.99"/>
                <WineRow
                image="../images/wine4.jpg"
                name="Domaine de la Romanee-Conti"
                type="Red Wine"
                location="France"
                pair="Lamb and mushroom based dishes"
                price="$23.99"/>
            </table>
        </div>
    );
};

export default Wine;