import ImageProfile from "../assets/images/profile.png";
import DataAlert from "./DataAlert";

export default function FormName({ handle, data }) {
  const { name, secondName, lastName, secondLastName } = data;
  return (
    <>
      <div className="form">
        <img src={ImageProfile} alt="" />
        <div>
          <h1>{"¿Cuál es tu nombre?"}</h1>
          <input
            type="text"
            minLength={3}
            maxLength={50}
            placeholder="Nombre"
            onChange={handle}
            id="name"
            value={name}
          />
          <input
            type="text"
            maxLength={50}
            placeholder="Segundo nombre"
            onChange={handle}
            id="secondName"
            value={secondName}
          />
          <input
            type="text"
            maxLength={50}
            placeholder="Apellido paterno"
            onChange={handle}
            id="lastName"
            value={lastName}
          />
          <input
            type="text"
            maxLength={50}
            placeholder="Apellido materno"
            onChange={handle}
            id="secondLastName"
            value={secondLastName}
          />
        </div>
      </div>
      <DataAlert
        data={{
          Nombre: `${name || ""}`,
          "Segundo nombre": `${secondName || ""}`,
          "Apellido paterno": `${lastName || ""}`,
          "Apellido materno": `${secondLastName || ""}`,
        }}
      />
    </>
  );
}
