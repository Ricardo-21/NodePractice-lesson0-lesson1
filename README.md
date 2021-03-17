# NodePractice-lesson0-lesson1

## Lesson 0

### Exercise 1:

What I see when we run `node marcy.js` is an empty object. This is because when we 'require' we are exporting
an object from the named file. The reason it is empty is because we have not filled that object with anything!

### Exercise 2: 

What I see now is that the object is populated with the respected key-value pairs that I have put in `lab.js`

### Exercise 3:

The reason that this isn't undefined is because we can reference the function inside the file that we are
exporting it from. This is no different than referencing or invoking a function inside an object.

### Exercise 4: 

Surprisingly we only see the console log run once and not multiple times. This is because of `require.cache` which only allows it to run once as long as it's not modified.

### Exercise 5: 

In this exercise the client would of course be the web browser which is making a request to the server which happens to be our local machine!

## Lesson 1 

### Question 0:

The reason, HTTP codes are important is because it lets developers know whether or not they recieved the information with no problems. If there is a problem the HTTP codes can help identify these problems.

### Question 1: 

The difference between a URI and a URL is that a URL is a locator, it is what the `L` stands for. On the other hand a URI is an identifier!

### Question 2: 

The purpose of query parameters is that we can use them in order to get more information from the user. We can then either display the query params or use them in another way, such as a search.

