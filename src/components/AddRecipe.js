import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import AddRecForm from "./AddRecForm";
import axios from "axios";

const AddRecipe = () => {
  const [inputData, setInputData] = useState({
    name: "",
    image: "",
    likes: "",
    author: "",
    avatar: "",
    instruction: "",
    country: "",
    flag: "",
    description: "",
    ingredN1: "",
    ingredN2: "",
    ingredN3: "",
    ingredN4: "",
    ingredN5: "",
    ingredQ1: "",
    ingredQ2: "",
    ingredQ3: "",
    ingredQ4: "",
    ingredQ5: "",
  });

  const [countryList, setCountryList] = useState({
    country: "",
    countrycode: "",
    flagurl: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [updatePopup, setUpdatePopup] = useState(false);

  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all").then((res) => {
  //     setCountryList(res.data.map((key) => [key.flags.png, key.ccn3, key.name.common]));
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all").then((res) => {
  //     setCountryList(() =>
  //       res.data
  //         .map((key) => ({
  //           // [countryList.id]: key.id,
  //           [countryList.country]: key.name.common,
  //           [countryList.countrycode]: key.ccn3,
  //           [countryList.flagurl]: key.flags.png,
  //         }))
  //         .sort()
  //     );
  //   });
  //   sendToJson();
  // }, []);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      // setCountryList(() => {
      setCountryList(
        res.data
          .map(
            (key) => [key.name.common, key.ccn3, key.flags.png]

            // [countryList.country]: key.name.common,
            // [countryList.countrycode]: key.ccn3,
            // [countryList.flagurl]: key.flags.png,
          )
          .sort()
      );

      // setData(countryList.foreach((e) => e.foreach(["country"]=e[0],["countrycode"]=e[1],["flag"]=e[2])));
      // setData(countryList.foreach((e) => JSON.stringify(Object.assign({}, e))));

      {
        /* {console.log(JSON.stringify(Object.assign({}, countryList)))} */
      }
    });

    // });
    // });
    // }, []);

    // sendToJson();
  }, []);

  // useEffect(() => {
  // const sendToJson = () => {
  //   console.log(countryList);
  //   axios.put("http://localhost:3010/countries/", countryList).then((res) => res.data);
  // ;}, []);
  // };

  const sendToJson = () => {
    console.log(countryList);
    axios.post("http://localhost:3010/countries/", countryList).then((res) => console.log(res));
    // .catch((error) => console.log(error)));
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3010/countries/").then((res) => setCountryList(() => res));
  // }, []);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const popupHandler = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  const submitHandler = () => {
    axios
      // .post("http://localhost:3010/notes/", { ...this.state.inputData })
      .post("http://localhost:3010/recipes/", inputData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    // this.setState({ showPopup: false });
    closeHandler();
    // window.location.reload();
  };

  const closeHandler = () => {
    window.location.reload();
  };

  return (
    <div>
      {console.log(countryList)}
      {/* {console.log(JSON.stringify(Object.assign({}, countryList)))} */}
      {/* {console.log(data)} */}
      {/* {console.log(countryList[0].forEach((e) => JSON.stringify(Object.assign({}, e))))} */}

      {/* Add new recipe form; */}
      {/* <AddRecForm change={inputHandler} submit={popupHandler} /> */}

      {/* {showPopup && <Popup close={closeHandler} {...inputData} submit={submitHandler} />} */}
    </div>
  );
};

export default AddRecipe;
