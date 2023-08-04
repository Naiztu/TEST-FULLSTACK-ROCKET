import ImageProfile from "../assets/images/profile.png";
import DataAlert from "./DataAlert";

export default function FormContact({ handle, data }) {
  const { email, phone } = data;
  return (
    <>
      <div className="form">
        <img src={ImageProfile} alt="" />
        <div>
          <h1>{"Datos de contacto"}</h1>
          <input
            type="email"
            placeholder="Correo electrónico"
            onChange={handle}
            id="email"
            value={email}
          />
          <input
            type="number"
            maxLength={10}
            minLength={10}
            placeholder="Teléfono celular"
            onChange={handle}
            id="phone"
            value={phone}
          />
        </div>
      </div>
      <DataAlert
        data={{
          "Correo electrónico": `${email || ""}`,
          "Teléfono celular": `${phone || ""}`,
        }}
      />
    </>
  );
}
