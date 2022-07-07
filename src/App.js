import HouseInfo from "./HouseInfo";
import NavBar from "./NavBar";
import content from "./data/content";

const App = () => {
  return (
    <div className="container">
      <NavBar company={"Housing.com"}/>
      <div class="col-10">
        <div className="d-flex flex-wrap align-items-center">
              {content.map((item, ind) => { 
                return <HouseInfo 
                imageUrl={item.imageUrl}
                size={item.size}
                price={item.price}
                loc={item.loc}
                />
              })}
            </div>
        </div>
    </div>
  )
}

export default App;