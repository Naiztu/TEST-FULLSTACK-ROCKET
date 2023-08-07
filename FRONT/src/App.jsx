import "./App.css";
import DataAlert from "./components/DataAlert";
import FormContact from "./components/FormContact";
import FormDateBirth from "./components/FormDateBirth";
import FormName from "./components/FormName";
import HeaderMain from "./components/HeaderMain";
import useDataSession from "./hooks/useDataSession";
import { useForm } from "./hooks/useForm";

function App() {
  const { item } = useDataSession("data");
  const { data, handle, submit } = useForm(item);

  return (
    <>
      <form className="container" onSubmit={submit}>
        <HeaderMain />
        <FormName handle={handle} data={data} />
        <FormDateBirth handle={handle} data={data} />
        <FormContact handle={handle} data={data} />
        <div className="message">
          {"Si tus datos son correctos por favor continuamos"}
        </div>
        <div className="button-container">
          <button>Inicar</button>
        </div>
        <DataAlert
          data={{
            Nombre: `${data.name || ""}`,
            "Segundo nombre": `${data.secondName || ""}`,
            "Apellido paterno": `${data.lastName || ""}`,
            "Apellido materno": `${data.secondLastName || ""}`,
            "Fecha de nacimiento": `${data.dayBirth || "0"}/${
              data.monthBirth || "0"
            }/${data.yearBirth || "0"}`,
            "Correo electrónico": `${data.email || ""}`,
            "Teléfono celular": `${data.phone || ""}`,
          }}
        />
      </form>
    </>
  );
}

export default App;
