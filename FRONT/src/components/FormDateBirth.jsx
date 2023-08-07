import ImageProfile from "../assets/images/profile.png";
import DataAlert from "./DataAlert";

export default function FormDateBirth({ handle, data }) {
  const { dayBirth, monthBirth, yearBirth } = data;
  return (
    <>
      <div className="form">
        <img src={ImageProfile} alt="" />
        <div>
          <h1>{"¿Cuál es tu fecha de nacimiento?"}</h1>
          <input
            type="number"
            min="1"
            max="31"
            maxLength={2}
            minLength={1}
            placeholder="Día"
            id="dayBirth"
            value={dayBirth}
            onChange={handle}
          />
          <input
            type="number"
            min="1"
            max="12"
            maxLength={2}
            minLength={1}
            placeholder="Número de Mes"
            id="monthBirth"
            value={monthBirth}
            onChange={handle}
          />
          <input
            type="number"
            min="1900"
            max="2021"
            maxLength={4}
            minLength={4}
            placeholder="Año"
            id="yearBirth"
            value={yearBirth}
            onChange={handle}
          />
        </div>
      </div>
      <DataAlert
        data={{
          "Fecha de nacimiento": `${dayBirth || 0}/${monthBirth || 0}/${
            yearBirth || 0
          }`,
        }}
      />
    </>
  );
}
