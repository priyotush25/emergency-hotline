1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    getElementById → single element, fastest.
    getElementsByClassName → live collection, only by class.
    querySelector(All) → flexible, supports any CSS selector.

2.  How do you create and insert a new element into the DOM?

    1. Create element
       let el = document.createElement("div");

    2. Set content or attributes
       el.textContent = "Hello";

    3. Insert into DOM
       document.body.appendChild(el);

3.  What is Event Bubbling and how does it work?
    Event Bubbling: An event starts on the target element and propagates up through its parents.

    element.addEventListener("click", function (e) {
    console.log("Clicked");
    // e.stopPropagation(); // stops bubbling
    });

4.  What is Event Delegation in JavaScript? Why is it useful?
    Event Delegation: Attach a single listener to a parent to handle events on its children, including dynamic ones.

    document.getElementById("parent").addEventListener("click", function (e) => {
    if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
    }
    });

5.  What is the difference between preventDefault() and stopPropagation() methods?
    preventDefault() Prevents the browser’s default action (e.g., form submit, link navigation)
    stopPropagation() Stops the event from bubbling (or capturing) to parent elements
