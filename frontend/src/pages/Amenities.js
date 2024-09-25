import React, {useState} from 'react'
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import YardIcon from "@mui/icons-material/Yard";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
const Amenities = () => {
  const [selected, onChange] = useState([]);

  const handleCbClick = (e) => {
    console.log("Before:", selected);
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
    console.log("After", selected);
  };

  return (
    <div>
      <div className="ameneties-container">
            <h1>Ameneties</h1>
            <div className="ameneties">
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Wifi")}
                  name={"Wifi"}
                  onChange={handleCbClick}
                />
                <WifiOutlinedIcon />
                <span>Wifi</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Kitchen")}
                  name={"Kitchen"}
                  onChange={handleCbClick}
                />
                <KitchenOutlinedIcon />
                <span>Kitchen</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Parking")}
                  name={"Parking"}
                  onChange={handleCbClick}
                />
                <LocalParkingOutlinedIcon />
                <span>Parking</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Security")}
                  name={"Security"}
                  onChange={handleCbClick}
                />
                <SecurityOutlinedIcon />
                <span>Security</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Garden")}
                  name={"Garden"}
                  onChange={handleCbClick}
                />
                <YardIcon />
                <span>Garden</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Pets allowed")}
                  name={"Pets allowed"}
                  onChange={handleCbClick}
                />
                <PetsOutlinedIcon />
                <span>Pets allowed</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Central air conditioning")}
                  name={"Central air conditioning"}
                  onChange={handleCbClick}
                />
                <AcUnitOutlinedIcon />
                <span>Central Air Conditioning</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("TV")}
                  name={"TV"}
                  onChange={handleCbClick}
                />
                <TvOutlinedIcon />
                <span>TV</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.includes("Pool")}
                  name={"Pool"}
                  onChange={handleCbClick}
                />
                <PoolOutlinedIcon />
              </label>
              <button type="submit" className="save-button">
                Save Listing
              </button>
            </div>
          </div>
    </div>
  )
}

export default Amenities