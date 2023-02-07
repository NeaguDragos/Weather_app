import { useState, useRef } from "react";
import Card from "../components/card/card";
import { Button } from "react-bootstrap";

const Home = () => {
  const saved = localStorage.getItem("saved-weather");
  const savedCards = saved ? JSON.parse(saved) : [null];
  const [cards, setCards] = useState(savedCards);
  const cardsArr = useRef([]);

  // useEffect(() => {
  //     console.log("Home-ready!")
  //     return () => localStorage.setItem("saved-weather", JSON.stringify(cardsArr.current));
  // }, [])

  const addCard = () => {
    // const temp = [...cards];
    // temp.push(null);
    // setCards(temp);
    setCards((state) => [...state, null]);
  };

  const handleCardOnSearch = (location, index) => {
    cardsArr.current[index] = location;
    localStorage.setItem("saved-weather", JSON.stringify(cardsArr.current));
  };

  const handleOnDelete = (arrIndex) => {
    const saved = localStorage.getItem("saved-weather");
    const savedArr = JSON.parse(saved);
    savedArr.splice(arrIndex, 1);
    localStorage.setItem("saved-weather", JSON.stringify(savedArr));
    let temp = [...cards];
    temp.splice(arrIndex, 1);
    setCards(temp);
  };

  return (
    <>
      <Button data-test-id="add-card-button" className="m-3" onClick={addCard}>
        add card
      </Button>
      <div className="d-flex flex-wrap justify-content-center">
        {cards.map((location, index) => (
          <Card
            key={location + index}
            onSearch={(loc) => handleCardOnSearch(loc, index)}
            location={location}
            onClose={() => handleOnDelete(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
