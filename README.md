1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
In JavaScript, there are multiple ways to select elements from the DOM.
getElementById() selects an element by its ID and returns only one element, since IDs must be unique, making it very fast.
For example, document.getElementById("box").
getElementsByClassName() selects elements by their class name and returns an HTMLCollection, which is live and can contain multiple elements.
It automatically updates if the DOM changes, like document.getElementsByClassName("item").
On the other hand, querySelector() selects the first element that matches any CSS selector, including ID, class, tag, or attribute,
for example,document.querySelector(".item").
querySelectorAll() is similar but returns all matching elements as a static NodeList, which does not automatically update
if the DOM changes, like document.querySelectorAll(".item").

3. How to create and insert a new element in the DOM
To add a new element in the DOM, first use document.createElement() to create the element.
Then you can add content, text, or attributes to it. Finally, you insert it into the DOM using methods like appendChild() or append().
For example, to create a paragraph:

const p = document.createElement("p");  
p.textContent = "This is a new paragraph.";  
document.body.appendChild(p);
This will add the paragraph at the end of the body of the page.

3. What is Event Bubbling and how it works
Event Bubbling is a process where an event starts at the target element and then moves upward through its parent elements in the DOM.
For example, if a button is inside a div and you click it, first the button’s click event runs, then the div’s event runs, then the body, and so on.
It “bubbles up” the DOM tree. This happens automatically unless you stop it with stopPropagation().

4. What is Event Delegation and why is it useful
Event Delegation means attaching a single event listener to a parent element instead of adding it to many child elements individually.
The parent then listens for events that happen on its children. This is useful because you only need one listener instead of many,
which improves performance. It also works for dynamic elements, meaning new child elements added later will still respond to events.
For example, instead of adding a click listener to every button inside a div, you can add one listener to the div and check which button was clicked using the event object.

5. Difference between preventDefault() and stopPropagation()
The preventDefault() method stops the browser’s default action for an event.
For example, clicking a link <a> but preventing it from navigating anywhere.
The stopPropagation() method stops the event from bubbling up to parent elements.
For example, clicking a button inside a div won’t trigger the div’s click event if you use stopPropagation().
These methods help you control how events behave on your page.
