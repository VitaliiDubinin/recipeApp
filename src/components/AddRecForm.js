import React, { useEffect, useState } from "react";
import axios from "axios";

// const AddRecForm = (props) => {
const AddRecForm = () => {
  //   return <div>Message from Add Rec Form</div>;

  const [data, setData] = useState({
    name: "",
    image: "",
    author: "",
    description: "",
    // countrycode: "",
    country2: "",
    ingreds: [],
    instruction: "",
  });

  const [ingredients, setIngredients] = useState([{ id: 1, ingredN: "", ingredQ: "" }]);

  // countries state is for saving data from restcountries API
  const [countries, setCountries] = useState([]);

  // Getting data for all 250 countries
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      // setCountries(res.data);
      setCountries(
        // countries.sort(function (a, b) {
        res.data.sort(function (a, b) {
          const contA = a.name.common.toUpperCase();
          const contB = b.name.common.toUpperCase();
          if (contA < contB) {
            return -1;
          }
          if (contA > contB) {
            return 1;
          }

          return 0;
        })
      );
    });
  }, []);

  // This event handler is reacting to our select event handler. We get the value from select, and then we find the correct alpha2Code. After that, we save valid code to the Data state.
  const changeCountry = (e) => {
    // console.log(countries, e.target.value);
    const correctCountry = countries.find((c) => c.cca2 === e.target.value);

    setData({ ...data, country2: correctCountry.cca2 });
    // console.log(correctCountry);
  };

  // basic onChange event for regular inputs
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Bit more complicated event handler for getting data from ingredients. First, we spread the current ingredients state and then look for that specific object in the array. We use the index, which is passed to the event handler. After updating the value in inputs, we will overwrite the Data state and add the ingredients array.
  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const incList = [...ingredients];
    incList[i][name] = value;
    setIngredients(incList);
    setData({ ...data, ingreds: ingredients });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1, ingredN: "", ingredQ: "" };
    setIngredients([...ingredients, newInc]);
  };

  // After we have all data collected from inputs, we post the Data object from state.
  const submitData = () => {
    axios.post("http://localhost:3010/recipes", data);
    // axios.post("https://my-json-server.typicode.com/vitaliidubinin/jsonforrecipeapp/recipes", data);
    // axios
    //   .post("https://github.com/vitaliidubinin/jsonforrecipeapp/blob/master/db.json", data)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
  };

  return (
    // Please note that you have to declare each input handler separately because we have three different kinds of input handlers. Otherwise, the latest handler will overwrite the previous ones.

    // <form onSubmit={console.log(data)}>

    <form className="inputForm" onSubmit={submitData}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea type="text" name="description" id="desc" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="countryCode">Recipe is from:</label>
        <select name="country2" id="countryCode" onChange={changeCountry}>
          <option value="FI"> please select</option>
          {countries.map((c) => (
            <option key={c.cca2} value={c.cca2}>
              {c.name.common}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="image">Image url</label>
        <input type="url" name="image" id="image" onChange={changeData} />
      </div>
      <p>Ingredients:</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input type="text" name="ingredQ" id="quantity" className="feedback-input" onChange={(e) => changeIncData(e, i)} />
            </div>
            <div>
              <label htmlFor="incName">Ingredient</label>
              <input type="text" name="ingredN" id="incName" className="feedback-input" onChange={(e) => changeIncData(e, i)} />
            </div>
          </div>
        );
      })}
      <button className="adingbut" onClick={addMore}>
        Add more ingredients
      </button>
      <div>
        <label htmlFor="instruct">Instructions</label>
        <textarea type="text" name="instruction" id="instruct" className="feedback-input" onChange={changeData} />
      </div>
      <input className="adrepbut" type="submit" value="Add recipe" />
    </form>

    // <form className="inputForm" onChange={props.change} onSubmit={props.submit}>
    //   <label forhtml="name">Name</label>
    //   <input type="text" name="name" id="name" className="feedback-input" required defaultValue={props.name} />

    //   <label forhtml="image">image, format "http://...."</label>
    //   <input type="text" name="image" id="image" className="feedback-input" required defaultValue={props.image} />

    //   <label forhtml="author">Author</label>
    //   <input type="text" name="author" id="author" className="feedback-input" required defaultValue={props.author} />

    //   <label forhtml="avatar">Avatar, format "http://...."</label>
    //   <input type="text" name="avatar" id="avatar" className="feedback-input" required defaultValue={props.avatar} />

    //   <label forhtml="instruction">Instruction</label>
    //   <input type="text" name="instruction" id="instruction" className="feedback-input" required defaultValue={props.instruction} />

    //   {/* <label forHtml="country">Country</label>
    //   <input type="text" name="country" id="country" className="feedback-input" required defaultValue={props.country} /> */}

    //   <label forhtml="role">Country</label>
    //   <select name="country" className="feedback-input" id="country" required defaultValue={props.country}>
    //     <option value="">please choose</option>
    //     <option value="Teacher">BG</option>
    //     <option value="Student">IT</option>
    //     <option value="Other">NZ</option>
    //   </select>

    //   <label forhtml="flag">Flag</label>
    //   <input type="text" name="flag" id="flag" className="feedback-input" required defaultValue={props.flag} />

    //   <label forhtml="desription">Description</label>
    //   <input type="text" name="desription" id="desription" className="feedback-input" required defaultValue={props.desription} />

    //   <label forhtml="ingredN1">Ingredient 1</label>
    //   <input type="text" name="ingredN1" id="ingredN1" className="feedback-input" required defaultValue={props.ingredN1} />

    //   <label forhtml="ingredQ1">Q-ty</label>
    //   <input type="text" name="ingredQ1" id="ingredQ1" className="feedback-input" required defaultValue={props.ingredQ1} />

    //   <label forhtml="ingredN2">Ingredient 2</label>
    //   <input type="text" name="ingredN2" id="ingredN2" className="feedback-input" required defaultValue={props.ingredN2} />

    //   <label forhtml="ingredQ2">Q-ty</label>
    //   <input type="text" name="ingredQ2" id="ingredQ2" className="feedback-input" required defaultValue={props.ingredQ2} />

    //   <label forhtml="ingredN3">Ingredient 3</label>
    //   <input type="text" name="ingredN3" id="ingredN3" className="feedback-input" required defaultValue={props.ingredN3} />

    //   <label forhtml="ingredQ3">Q-ty</label>
    //   <input type="text" name="ingredQ3" id="ingredQ3" className="feedback-input" required defaultValue={props.ingredQ3} />

    //   <label forhtml="ingredN4">Ingredient 4</label>
    //   <input type="text" name="ingredN4" id="ingredN4" className="feedback-input" required defaultValue={props.ingredN4} />

    //   <label forhtml="ingredQ4">Q-ty</label>
    //   <input type="text" name="ingredQ4" id="ingredQ4" className="feedback-input" required defaultValue={props.ingredQ4} />

    //   <label forhtml="ingredN5">Ingredient 5</label>
    //   <input type="text" name="ingredN5" id="ingredN5" className="feedback-input" required defaultValue={props.ingredN5} />

    //   <label forhtml="ingredQ5">Q-ty</label>
    //   <input type="text" name="ingredQ5" id="ingredQ5" className="feedback-input" required defaultValue={props.ingredQ5} />

    //   <label forhtml="role">Message</label>
    //   {/* <textarea name="text" className="feedback-input" onChange={messageHandler}></textarea> */}
    //   <textarea name="message" id="message" className="feedback-input" required defaultValue={props.message} />
    //   {/* <input type="submit" value="SEND" onClick={popupHandler} /> */}
    //   <input type="submit" value="send" />
  );
};

export default AddRecForm;
