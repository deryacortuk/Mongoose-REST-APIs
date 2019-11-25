## **Async/Await**
In general JavaScript is running code in a non-blocking way, which means that code taking some time to finish (like accessing an API, reading content from the local file system etc.) is being executed in the background and in parallel the code execution is continued. This behaviour is being described by term asynchronous programming.

Because JavaScript is executed in that non-blocking way you have to take additional measures to deal with that code if you need to have the result available before further code is being executed. JavaScript offers various possibilities of doing so. 
 
 ES 2017 introduced  Asynchronous functions. Async functions are essentially a cleaner way to work with asynchronous code in JavaScript.
 
  **What is Async/Await?**

-   The newest way to write asynchronous code in JavaScript.
-   It is non blocking (just like promises and callbacks).
-   Async/Await was created to simplify the process of working with and writing chained promises.
-   Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.
