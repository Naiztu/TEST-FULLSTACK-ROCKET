import { FaClipboardQuestion } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";

export default function HeaderMain() {
  return (
    <>
      <header>
        <div className="column">
          <h1>{"Titulo de formulario"}</h1>
          <div className="row">
            <LuAlarmClock />
            <h2>{"Subtitulo de formulario"}</h2>
          </div>
        </div>
        <div>
          <FaClipboardQuestion size={60} color="white" />
        </div>
      </header>
    </>
  );
}
