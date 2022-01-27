import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import './SecoundNav.css'
import Categories from '../images/menu.png'
const DropDownList = () => {
  return (
    <div>
      <NavDropdown title={<span >
          <p  className="txt"> Browse Categories</p>
        <div className="icondisplay">
        <img className="imgIcon" src={Categories} alt="user" width='25px'/>
        <p>Categories</p>
        </div>
        </span>
       } id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">
          <NavDropdown title="Activities, Events & Outdoors" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              Activities, Events & Outdoors
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              Adventure & Outdoors
              <p>Bungy Jumping, Camping, Horse Riding,....</p>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Fun & Leisure</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4"> Kids Activities</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <NavDropdown title="Automotive" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              Automotive Parts & Accessories
              <p>Automotive Accessories, Car Parts, Motorbike Parts, Tyres</p>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              {" "}
              Car Electronics
              <p>
                {" "}
                Car Alarms, Car Amplifiers, Car GPS, Car Handsfree, Car Speakers
              </p>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">
              Wash, Repairs & Maintenance
              <p> Automotive Servicing, Car Wash &</p>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">
          <NavDropdown title="Baby, Kids & Toys" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              Baby Essentials
              <p>
                {" "}
                Baby Feeding, Baby Gates, Baby Health & Safety, Baby Monitors,
                Bathing & Changing{" "}
              </p>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              {" "}
              Baby Gear
              <p>
                {" "}
                Baby Travel Accessories, Car Seats & Strollers, Carriers &
                Slings, High Chairs & Boosters, Jumpers & Bouncers
              </p>{" "}
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">
              {" "}
              Clothing & Accessories - Boys Boys Accessories, Boys Bags, Boys
              Bodysuits, Boys Growsuits, Boys Hats & Caps
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">
          <NavDropdown title="Books & Magazines" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              Children's Books
              <p> Colouring Books, Pre-School, Story Time </p>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              Fiction
              <p>
                {" "}
                Action & Adventure, Crime & Thriller, General Fiction, Romance
                Fiction
              </p>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Non-Fiction
              <p> Biographies, Cooking Books, General No</p>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
        <NavDropdown title="Clothing & Fashion - Men's" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            Action Men's Accessories
            <p>
              {" "}
              Men's Beanies, Men's Belts & Braces, Men's Gloves, Men's Hats &
              Caps, Men's Scarves & Snoods
            </p>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">
            Men's Bags
            <p>
              Men's Backpacks, Men's Briefcases, Men's Messenger Bags, Men's
              Satchels, Men's Sport Bags
            </p>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Men's Jewellery & Watches
            <p>
              Men's Boat Shoes, Men's Boots, Men's Brogues, Men's Dress Shoes,
              Men's Loafers & Drivers
            </p>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Clothing & Fashion - Women's" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Socks & Hosiery</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">
            Women's Accessories
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Women's Bags</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Women's Shoes</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Fitness & Sports" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Men's Socks & Underwear Mens Boxers Mers Brieh Men's Socks"
          id="nav-dropdown"
        >
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Holidays, Hotels & Travel" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            Backyard & Indoor Games
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Gym & Training</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Water Sports</NavDropdown.Item>
        </NavDropdown>
      </NavDropdown>
    </div>
  );
};

export default DropDownList;
