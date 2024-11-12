import React from 'react'
import CreateCustomer from '../src/components/form/CreateCustomer';
import Customer from '../src/components/form/Customer';
import AccountOperations from '../src/components/form/AccountOperator';
import BalanceDisplay from '../src/components/form/BalanceDisplay';

export const Bank = () => {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  )
}
