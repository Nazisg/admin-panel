import React, { useState } from "react";
import styles from "../styles/Modal.module.scss";
import downSvg from "../images/downSvg.png";
import axios from "axios";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select..");
  const [itemNameValue, setItemNameValue] = useState("");
  const [itemEmailValue, setItemEmailValue] = useState("");
  const [itemlangValue, setItemlangValue] = useState("");
  const [itemOccupValue, setItemOccupValue] = useState("");
  const [itemObjectValue, setItemObjectValue] = useState("");
  const [itemSubsValue, setItemSubsValue] = useState("");


  const cancelItem = () => {
    setShowModal(false);
  };
  function ItemName(e) {
    setItemNameValue(e.target.value);
  }
  function ItemEmail(e) {
    setItemEmailValue(e.target.value);
  }
  function ItemLang(e) {
    setItemlangValue(e.target.value);
  }
  function ItemOccup(e) {
    setItemOccupValue(e.target.value);
  }
  function ItemObject(e) {
    setItemObjectValue(e.target.value);
  } 
  function ItemSubs(e) {
    setItemSubsValue(e.target.value);
  }
  const options = [
    "Afghanistan",
    "Algeria",
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const Save = () => {
    const newObj = {
      fullName: itemNameValue,
      email: itemEmailValue,
      language:itemlangValue,
      occupation:itemOccupValue,
      objective:itemObjectValue,
      subscription:itemSubsValue
    };
    axios
      .post("http://localhost:3000/data", newObj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  return (
    <div className={styles.modalBg} onClick={cancelItem}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>New Client</h3>
        <form className={styles.form}>
          <input type="file" />
          <input type="text" placeholder="Full Name" onChange={ItemName} />
          <input type="email" placeholder="Email" onChange={ItemEmail}/>
          <input type="text" placeholder="Language" onChange={ItemLang}/>
          <input type="text" placeholder="Occupation" onChange={ItemOccup}/>
          <input type="text" placeholder="Objective" onChange={ItemObject}/>
          <input type="text" placeholder="Subscription" onChange={ItemSubs}/>
          <div className={styles.dropdown}>
            <div className={styles.select} onClick={toggleDropdown}>
              <p>{selectedOption}</p>
              <img src={downSvg} />
            </div>
            {isOpen && (
              <ul className={styles.content}>
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.btnBox}>
            <button onClick={cancelItem}>Cancel</button>
            <button className={styles.save} onClick={Save}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
