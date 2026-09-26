\# Exercise 3: Resilient Component Architecture



\## Task Decomposition



\### Objective

Build a resilient data-driven component that handles four UI states:

Loading, Live Data, Empty, and Error.



\---



\## State Machine



\### State 1: Loading

\*\*Sub-task:\*\* T-03A



\*\*Purpose:\*\*  

Display a loading placeholder while data is being fetched.



\*\*Requirements:\*\*

\- Implement a skeleton loading interface.

\- Use pure CSS shimmer animation.

\- Do not use external loading libraries.



\*\*Transition:\*\*

\- Loading -> Live Data: data is fetched successfully and contains records.

\- Loading -> Empty: data is fetched successfully but contains no records.

\- Loading -> Error: data fetching fails.



\---



\### State 2: Live Data

\*\*Sub-task:\*\* T-03B



\*\*Purpose:\*\*  

Display the successfully loaded data.



\*\*Requirements:\*\*

\- Use Flexbox for metadata badges.

\- Use CSS Grid for the data list.

\- Keep the component responsive.



\*\*Transition:\*\*

\- Live Data -> Loading: data is requested again.



\---



\### State 3: Empty

\*\*Sub-task:\*\* T-03C



\*\*Purpose:\*\*  

Provide clear feedback when the request succeeds but no data is available.



\*\*Requirements:\*\*

\- Display an accessible empty-state message.

\- Clearly distinguish the empty state from an error.



\*\*Transition:\*\*

\- Empty -> Loading: data is requested again.



\---



\### State 4: Error

\*\*Sub-task:\*\* T-03C



\*\*Purpose:\*\*  

Inform the user when data loading fails.



\*\*Requirements:\*\*

\- Display an accessible error message.

\- Provide a Retry trigger.

\- Retry must return the component to the Loading state.



\*\*Transition:\*\*

\- Error -> Loading: user activates Retry.



\---



\## AI Collaboration Rule



Each state must be implemented as an individual sub-task.



Do not prompt AI to generate all four states at once.



Implementation order:



1\. T-03A - Loading Skeleton

2\. T-03B - Live Data

3\. T-03C - Empty State

4\. T-03C - Error State and Retry



Each implementation state will be reviewed and committed separately before proceeding to the next state.

