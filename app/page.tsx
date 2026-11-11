import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Greeting name="Avyuktha" />

      <ProductCard title="Wireless Mouse" price={29} inStock={true} />
      <ProductCard title="Mechanical Keyboard" price={89} inStock={false} />
    </main>
  );
}