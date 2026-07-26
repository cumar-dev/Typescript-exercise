import ProductCard from "./ProductCard"
import WelcomeComponent from "./WelcomeComponent"

function App() {
 
  return (
  <>
  <WelcomeComponent 
  username="omar"
  premium = {true}
  />
  <ProductCard 
  name="T-shirt"
  price={20}
  description="welcome here you can get different T-shirts companies like: Nike, Adidas and Puma"
  />
  </>
  )
}

export default App
