import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const categories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 'snake', name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80' },
      { id: 'peace-lily', name: 'Peace Lily', price: 22, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7d?auto=format&fit=crop&w=500&q=80' },
      { id: 'spider', name: 'Spider Plant', price: 16, image: 'https://images.unsplash.com/photo-1614594575810-835ff6e79b0f?auto=format&fit=crop&w=500&q=80' },
      { id: 'rubber', name: 'Rubber Plant', price: 25, image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=500&q=80' },
      { id: 'aloe', name: 'Aloe Vera', price: 14, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=500&q=80' },
      { id: 'bamboo-palm', name: 'Bamboo Palm', price: 28, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    name: 'Low Light Plants',
    plants: [
      { id: 'zz', name: 'ZZ Plant', price: 20, image: 'https://images.unsplash.com/photo-1632320387745-87f129b2f257?auto=format&fit=crop&w=500&q=80' },
      { id: 'pothos', name: 'Golden Pothos', price: 15, image: 'https://images.unsplash.com/photo-1614594575810-835ff6e79b0f?auto=format&fit=crop&w=500&q=80' },
      { id: 'cast-iron', name: 'Cast Iron Plant', price: 24, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80' },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 19, image: 'https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=500&q=80' },
      { id: 'aglaonema', name: 'Chinese Evergreen', price: 21, image: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=500&q=80' },
      { id: 'dracaena', name: 'Dracaena', price: 23, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    name: 'Flowering Plants',
    plants: [
      { id: 'orchid', name: 'Orchid', price: 30, image: 'https://images.unsplash.com/photo-1567410213210-48bb2b5c900b?auto=format&fit=crop&w=500&q=80' },
      { id: 'anthurium', name: 'Anthurium', price: 27, image: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?auto=format&fit=crop&w=500&q=80' },
      { id: 'begonia', name: 'Begonia', price: 17, image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=500&q=80' },
      { id: 'african-violet', name: 'African Violet', price: 16, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=500&q=80' },
      { id: 'kalanchoe', name: 'Kalanchoe', price: 18, image: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&w=500&q=80' },
      { id: 'bromeliad', name: 'Bromeliad', price: 26, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page-shell">
      <h1 className="page-title">Our Plants</h1>
      <p className="page-subtitle">Choose from our hand-picked collection of beautiful houseplants.</p>

      {categories.map((category) => (
        <section key={category.name} className="plant-category">
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
