import React from "react";
import Cabecera from "./componentes/cabecera/cabecera";
import Contacto from "./componentes/contacto/contacto";
import Contenedor from "./componentes/contenedor/contenedor";
import Menu from "./componentes/menu/menu";
import Pie from "./componentes/pie/pie";
function App() {
  return (
    <>
      <Menu />
      {/* <!-- !PAGE CONTENT! --> */}
      <div className="w3-main" style={{ marginLeft: "300px" }}>
        <Cabecera />
        <Contenedor/>        
        <Contacto/>
        <Pie/>
      </div>

    </>
  );
}

export default App;
