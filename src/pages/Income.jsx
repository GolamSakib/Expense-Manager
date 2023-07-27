import { useState } from "react";
import CustomForm from "../components/CustomForm";
import Layout from "../layout/layout";
import CustomTable from "../components/CustomTable";

const Income = () => {
  const [income, setIncome] = useState([]);
  return (
    <Layout>
      <CustomForm type="Income" value={income} setter={setIncome} />
      <h3 className="text-2xl text-center my-3">
        Total: &nbsp;
        {income.reduce((acc, income) => {
          return Number(income.amount) + Number(acc);
        }, 0)}
        &nbsp; Tk.
      </h3>
      <CustomTable data={income} />
    </Layout>
  );
};

export default Income;
