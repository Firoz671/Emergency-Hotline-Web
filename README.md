**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Answer: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
If I just need a single element by its id, I use getElementById. It’s straightforward and always gives me just one element (or null if nothing matches).
When I want multiple elements that share the same class, I reach for getElementsByClassName. The catch here is that it returns a live collection, so if the DOM changes, 
that collection changes too. I usually have to loop through it to do anything useful.
querySelector is my go-to when I need a bit more flexibility. 
It lets me use any CSS selector, but it only returns the first matching element. 
On the other hand, querySelectorAll grabs all matching elements and gives me a static NodeList, which doesn’t update automatically if the DOM changes. 
That means if new elements are added later, I’d have to query again.

**2.How do you create and insert a new element into the DOM?**
The process is pretty simple. First, I create the element using document.createElement(). After that, I usually add some text or attributes so it’s not just an empty shell. 
Then, I find the parent element where I want to put it, and finally, I attach the new element using something like appendChild().

**3.What is Event Bubbling and how does it work?**
Event bubbling is basically how events travel through the DOM. If I click on a button inside a div, the click event doesn’t stop at the button—it “bubbles up” to the div, 
then the parent of that div, and so on, until it reaches the top of the DOM tree. So one event can be caught by multiple levels of elements.

**4.What is Event Delegation in JavaScript? Why is it useful?**
Event delegation is when instead of adding an event listener to every single child element, 
I just put one listener on the parent. Thanks to bubbling, the parent can still “hear” when its children are clicked or interacted with.

The beauty of this approach is that it saves me from attaching tons of listeners, which is more efficient. 
Plus, it works even if new child elements get added later—I don’t have to worry about wiring them up individually.

**5.What is the difference between preventDefault() and stopPropagation() methods?**
preventDefault() is what I use when I don’t want the browser’s default behavior to happen—for example, stopping a form from submitting when I click the submit button.
stopPropagation() is what I use when I don’t want the event to bubble up the DOM. So if I click on a button, I can stop the event there and prevent its parent elements from reacting.
