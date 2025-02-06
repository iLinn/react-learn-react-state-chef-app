import './Main.css';
import Card from '../card/Card';

const TRAVEL_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

function MainContent() {
  const cardsElements = TRAVEL_DATA.map((travelData) => (
    <Card
      key={travelData.id}
      {...travelData}
    />
  ));

  return (
    <main>
      {cardsElements}
    </main>
  );
}

export default MainContent;