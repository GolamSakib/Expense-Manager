import { useState } from 'react';
import CustomForm from '../components/CustomForm';
import Layout from '../layout/layout';
import CustomTable from '../components/CustomTable';

const Expenses = () => {

  return (
    <Layout>
      <CustomForm type="Expense"/>
      <h3 className="text-2xl text-center my-3">
        Total: Tk.
      </h3>
      <CustomTable />
    </Layout>
  );
};

export default Expenses;
