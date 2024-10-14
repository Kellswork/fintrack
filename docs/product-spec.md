# Project Spec

[picture or screenshot of the app]

## 0. Project Overview
Finance(FinTrack or TrackFunds) keeps track of your money and saves for the future. Finance is looking to create a successful MVP.

## 1. Finance Software System
This section describers the entire Finance software system. This includes the users of the system, as well as all the applications, databases, and APIs the system is made of. The application that we're building ( personal finance web app ) is a part of this system.

### System Context
This is a zoomed out view of the Finance app system and the context around it. The system context diagram below follows the guidelines of the C4 Model for visualizing software architecture.

#### System Users
- 👩🏻 **Users** -- Person who wants to track their svaings, budget their expensnes,and track their overall spending , savings, and transactions.


**External Systems**
To be Updated if any is used. For now, No third party system is needed.
Future: Third party systems can be used to manage banking transcations.

### System Containers
- Users web app[React SPA] -- This is the web application that users will use to make budgets, save and see transactions.
- Core API [ Golang ] — REST API used by web app within the system to manage Users information, save budget, savings and tarnsacttons details. 
- Core Database [PostgreSQL] — Main data store for the application. The Core API reads from and writes to this database.

#### Container Diagram
[System Containers Diagram]

## 2. FullSnack Users Web Application
This section describes the web application we are building in more detail. It's meant to give you a high-level understanding of the app we're designing the architecture for.

### Functional Requirements
This section lists some of the main functional requirements of FullSnack's web app. This is more of a functionality overview to help guide some of your architectural decisions.

#### Overview(Dashboard)
- Userss can see all the information at a glance and easily navigate to other pages.
-  when Users deletes a budget, it should be deleted from the overview page

#### Authentication
- Users can view the app without being authenticated.
- Users can create an account using email, phone number, or social media accounts.
- Users can authenticate using their created account credentials.
- Authenticated Users can reset their passwords if forgotten.

#### Transactions
- Users can view all transactions on the transactions page with pagination for every ten transactions.
- Users can Search, sort, and filter transactions

#### Pots
- Users can create saving pots.
- Users can read saving pots.
- Users can update saving pots.
- Users can delete saving pots.
- Users can add money to saving pots.
- Users can widthraw money to saving pots.

##### Budgets
- Users can add a new budget
- Users can see all budgets they've created.
- Users can update budgets
- Users can delete budgets
- Users can view the latest three transactions for each budget category created.
- Users can see a donut pie chart as visualisation tool for 
- Users can click the "see all" to navigate to the transactions page, with the filter set to the relevant catergory.

#### Searching, Sorting and Filtering
- Users can search for a name, or amount(stretch) on the transaction table.
- Users can search for an amount(stretch) on the transaction table.
- Users can sort from a list of options in the transaction table.
- Users can filter transcation by categries, which are: Entertainment, Bills, Groceries, Dining Out, Transportation, Personal Care, Education, Lifestyle, Shopping, General. The results shown is only from the selectd catergory.
- Users can search for a name on the recurring bills/transcations
- Users can sort the recurring bills based on some options.

#### Recurring Bills
- Users can see a list of all re-occuring transactions
- Users can see recurring transactions theyve paid for
- Users can see what payments are due to be peaid soon

### Architectural Requirements
👉🏽 Check out the requirements doc.