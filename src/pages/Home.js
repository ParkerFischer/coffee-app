import React, {useState} from 'react';
import orders from "../orders.json"


function Home(){

    const [coffeeShop, setCoffeeShop] = useState("Starbucks");
    const [season, setSeason] = useState("Spring");
    const [temperature, setTemperature] = useState("Iced");
    const [filteredOrders, setFilteredOrders] = useState([]);
  
    const handleChange = () => {
      const filtered = orders.filter(
        (shop) => shop.coffeeShop === coffeeShop && shop.season === season && shop.temperature === temperature
      );
      setFilteredOrders(filtered);
    };
  
    return (
      <div className="outline">
        <select value={coffeeShop} onChange={(e) => setCoffeeShop(e.target.value)}>
          <option value="Starbucks">Starbucks</option>
          <option value="Moka">Moka</option>
          <option value="Bethany">Bethany</option>
          <option value="Cabin Coffee">Cabin Coffee</option>
        </select>
        <br />
        <br />
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
        <br />
        <br />
        <select value={temperature} onChange={(e) => setTemperature(e.target.value)}>
          <option value="Iced">Iced</option>
          <option value="Hot">Hot</option>
        </select>
        <br />
        <br />
        <button onClick={handleChange}>Filter</button>
        <br />
        <br />
        <ul>
          {filteredOrders.map((coffeeShop) => (
            <li key={coffeeShop.order}>{coffeeShop.order}</li>
          ))}
        </ul>
      </div>
);

}

export default Home