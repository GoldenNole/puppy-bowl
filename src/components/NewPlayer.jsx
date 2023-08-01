import React, { useState } from 'react';

const NewPlayer = () => {
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players`;
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageURL, setImgURL] = useState("");

  // ***************************************Add New Player***************************************
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("name", name),
    console.log("breed", breed),
    console.log("status", status),
    console.log("imageURL", imageURL)
    try {
      const response = await fetch(APIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          breed: breed,
          status: status,
          imageURL: imageURL
        })
      });

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  };

  return(
    <div>
      <form className="players-container" onSubmit={handleSubmit} >
        <h2> Add Dog </h2>
        <img id ="dogimg" src= "https://media.istockphoto.com/id/639255368/vector/vector-black-silhouette-of-a-dog.jpg?s=612x612&w=0&k=20&c=LxmhSbJvDDhjkC56P1P9rW-SdVXejpTZroOd_6WlYDk=" alt="dog" />

        <label value = {name} onChange={(e) => setName(e.target.value)} >Name: <input /> </label>
        <br/>

        <label value = {breed} onChange={(e) => setBreed(e.target.value)}>Breed:<input /> </label>
        <br />

        <label value = {status} onChange={(e) => setStatus(e.target.value)}>Status: <input />  </label>
        <br/>

        <label value = {imageURL} onChange={(e) => setImgURL(e.target.value)}>Image: <input /></label>
        <br/>

        <button className="btn">Submit</button>
      </form>
    </div>
        )
  
};

export default NewPlayer;