import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexwrap: "wrap",
    justifyContent: "center",
    alignItms: "center",
  };
    return (
      <div style={styles}>
          <Product title="Logitech MX Master" idx={0}/> 
          <Product title="Apple Pencil (2nd Gen)" idx={1}/>
          <Product title="Zebronics Zeb-trans" idx={2}/>
          <Product title="Petronics Tod 23" idx={3}/>
      </div>
    );
}

export default ProductTab;