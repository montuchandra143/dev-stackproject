Project Name:
dev-stackproject

Title & Description:
This is a skill-based website where developers can choose technologies and skills based on their category and build their ideal tech stack.

Technologies Used: 
React (Vite)
TypeScript
Tailwind CSS
daisyUI
React Icons

Features: 
Interactive Stack Selection: Users can select their preferred technologies from various tech cards and add them directly to the "Your Stack" pane.
Real-time Counter & Management: Users can view the number of selected technologies in real-time, remove any individual item as needed, or clear the entire list at once.

What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript code.

What is the difference between props and state?
Props: Used to pass data from a parent component to a child component.
State: Represents a component's internal data storage that can change or be updated over time.

What does the useState hook do, and where did you use it in this project?
The useState hook helps store and update data or state within a component.

What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook is primarily used in React components for tasks such as fetching data or making API calls.
It is required to load data from the local data.json file.

Why does every item in a .map() list need a unique key prop?
The primary reason for assigning a unique `key` prop to each item in a list created using `.map()` is to enable React to identify each item individually. When an item is added, removed, or modified, React uses this `key` to easily determine exactly which item has changed; consequently, it updates only that specific item instead of re-rendering the entire list.

What is conditional rendering? Show one place you used it (example: the empty stack message).?
Conditional rendering refers to displaying or hiding specific components or elements in the user interface (UI) based on a condition. Standard JavaScript `if/else` statements or ternary operators (? :) are used for this purpose.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
1. Sending data from parent to child (using Props):
When a parent component wants to send data, it passes the data much like an HTML tag attribute; in React, this is known as "props."
2. Sending data from child to parent (using a callback function):
A child cannot send data directly to the parent. Therefore, the parent component creates a function and passes it to the child as a prop.




