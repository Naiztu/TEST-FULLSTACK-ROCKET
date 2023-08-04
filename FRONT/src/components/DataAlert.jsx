export default function DataAlert({ data ={} }) {
  return (
    <>
      <div className="data-alert">
        {Object.keys(data).map((key) => {
          return (
            <div key={key}>
              <span>{key}{": "}</span>
              <span>{data[key]}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
