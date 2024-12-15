import logo from './logo.svg';
import './App.css';
import FoodCard from './FoodCard';

const App = () =>{
  const foods = [
    {
      name: "Pizza Margherita",
      description: "Mozerella pendiri, pomidor sousu ve reyhan",
      price: "10 Azn",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Hamburger",
      description: "Ət,pendir,kahı və sous ilə hazırlanan klassik burger.",
      price: "8 Azn",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Şorbalar",
      description: "Gündəlik təzə tərəvəzlərdən hazırlanan isti şorba",
      price: "5 Azn",
      image: "https://via.placeholder.com/200"
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Restoran Menyusu</h1>
      <div style={styles.grid}>
      {foods.map((food, index) => (
          <FoodCard
            key={index}
            name={food.name}
            description={food.description}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default App;