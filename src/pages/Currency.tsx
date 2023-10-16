import Input from "../components/Input";
import Table from "../components/Table";

const Currency = () => {
  return (
    <>
      <div className="input-fields-container p-container">
        <div className="input-fields">
          <Input labelText={"Currencies name"} />
          <Input type="number" labelText={"Exchange rate"} />
          <Input type="number" labelText={"Selling price"} />
        </div>
        <div className="input-fields">
          <Input type="number" labelText={"Buying rate"} />
          <Input type="number" labelText={"Max buying rate"} />
          <div style={{ flex: 1 }}></div>
        </div>
      </div>
      <Table
        titles={[
          "Currencie",
          "Exchange rate",
          "Buying rate",
          "Selling rate",
          "Minima  rate",
          "Maximum  rate",
          "Currency symbolone",
          "Main currency",
          "Delete",
        ]}
        data={[
            [" "," "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "," "],
        ]}
      />
    </>
  );
};

export default Currency;
