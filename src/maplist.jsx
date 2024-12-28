function Maplist() {
    const services = ["", "Cow", "Snake", "Lizard"];
    const animalsList = services.map((service) => <li key={service}>{service}</li>)
  
    return (
      <div>
        <h2>Available Games: </h2>
        <ul>
          {animalsList}
        </ul>
      </div>
    );
  }

  export default Maplist;