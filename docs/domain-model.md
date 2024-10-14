# Domain Model

## Entities

- user
- transactions
- budget
- saving pot
- recurring bills

## Attributes and Operations

### User

- name: string;
- email: string;
- password: string;

### Budget

- budgetCategory: string
- maximumSpend: number
- theme: string
- spent: number;
- remaining: number;
- latestSpending: Transactions[];

**Operations**:

- `createBudget(budgetData): void`
- `readBudget(budgetId): Budget`
- `updateBudget(budgetId, newBudgetData): void`
- `deleteBudget(budgetId): void`
- `fetchTopThreeTransactions(): Transactions[]` - Fetch the top 3 transactions for the budget category.

### Saving Pot

- potName: string
- target: number
- theme: string
- totalSaved: number;

**Operations**:

- `createSavingPot(potData): void`
- `readSavingPot(potId): SavingPot`
- `updateSavingPot(potId, newPotData): void`
- `deleteSavingPot(potId): void`

### Recurring bills

- billTitle: string
- totalBills: number
- duedate: Date
- amount: number
- isPaid: boolean

**Operations**: ( I will have to review this when imoplementing the recurring bill)

- `getPaidBills(month: Date): RecurringBill[]` - Fetch all recurring bills that have been paid for a specific month.
- `getUpcomingBills(latestTransactionDate: Date): RecurringBill[]` - Fetch all unpaid bills due within five days of the latest transaction.
- `addRecurringBill(billData): RecurringBill` - Add a new recurring bill.
- `markBillAsPaid(billId): void` - Mark a recurring bill as paid for the month.

### transactions

- recipent/sender: string
- category: BudgetCategory
- transactionDate: Date
- amount: number

**Operations**:

- `addTransaction(transactionData): void` - Log a new transaction.
- `viewTransactionsByCategory(category): Transactions[]` - View all transactions for a specific budget category.
- `markAsRecurring(billId): void` - Mark a transaction as related to a recurring bill.

### Relationships Between Entities ( To remove later )

1. **User ↔ Budget**:
   - A user can create multiple budgets.
   - Each budget is tied to a **BudgetCategory** and contains references to the top 3 transactions related to that category.
2. **User ↔ Saving Pot**:

   - A user can create and manage multiple saving pots.

3. **Budget ↔ Transactions**:

   - Each budget tracks a specific category of spending.
   - The budget fetches transactions (top 3) from the **Transaction** entity.

4. **Recurring Bill ↔ Transactions**:

   - Recurring bills are tied to transactions, ensuring that only one transaction per vendor is logged monthly.
   - A recurring bill generates or references a transaction once paid.

5. **User ↔ Transactions**:
   - Users can log transactions, which may or may not be linked to a recurring bill or a budget category.
