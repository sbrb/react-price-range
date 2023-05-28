import React, { useEffect, useState } from "react";
import { dataList } from "./dataList";
import Slider from "@material-ui/core/Slider";

const Home = () => {
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPrice]);

  return (
    <div className="home_panelList-wrap">
      <div className="home_panel-wrap">
        <div className="input-group">
          <p className="label-range">React Price Range</p>
          <Slider
            value={selectedPrice}
            onChange={handleChangePrice}
            valueLabelDisplay="on"
            min={1000}
            max={5000}
          />
        </div>
      </div>
      <div className="home_list-wrap">
        <div className="list-wrap">
          {list.map((item) => (
            <div className="listItem-wrap">
              <img src={item.coverSrc} alt="" />
              <h4>{item.title}</h4>
              {item.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
