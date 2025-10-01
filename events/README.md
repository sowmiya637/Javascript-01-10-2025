#  To-Do List with Event Handling (JavaScript)

This project demonstrates **JavaScript event handling** concepts, including:

- Event listeners  
- Event objects  
- Event bubbling  
- Event delegation  


1. **Add Task**
   - Form input allows the user to add a new task.
   - Uses `event.preventDefault()` to stop the form from refreshing the page.

2. **Event Delegation**
   - One listener on the parent `<ul>` handles clicks on all `<li>` tasks.
   - Works for dynamically added tasks.

3. **Event Object**
   - `event.target` identifies which element triggered the event.
   - Used to highlight clicked tasks and show alerts.

4. **Event Bubbling**
   - Clicking a task triggers both the task listener and its parent container listener.
   - Demonstrates how events propagate from child to parent.

5. **Stop Propagation**
   - Certain tasks (e.g., "Practice Events") stop bubbling using `event.stopPropagation()`.


