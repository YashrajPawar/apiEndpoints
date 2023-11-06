# API Endpoints and Usage

**Add a New Book**

Endpoint: POST /api/book/createBook
Description: This endpoint allows you to add a new book to the database.
Usage: Send a POST request to /api/book/createBook with a JSON body containing the book's information (title, author, summary).


**View a List of All Books**

Endpoint: GET /api/book/allBooks
Description: This endpoint retrieves a list of all the books in the database.
Usage: Send a GET request to /api/book/allBooks


**View Details of a Specific Book by its ID**

Endpoint: GET /api/book/getBook/:id
Description: This endpoint retrieves all the details of a specific book based on its unique ID.
Usage: Send a GET request to /api/book/getBook/:id, where :id is the unique identifier of the book you want to retrieve.


**Update a Book's Details**

Endpoint: PATCH /api/book/update/:id
Description: This endpoint allows you to update the details of a specific book by its ID.
Usage: Send a PATCH request to /api/book/update/:id, where :id is the unique identifier of the book you want to update.


**Delete a Book**

Endpoint: DELETE /api/book/delete/:id
Description: This endpoint allows you to delete a book from the database based on its unique ID.
Usage: Send a DELETE request to /api/book/delete/:id, where :id is the unique identifier of the book you want to delete.



# Instructions to set up and run the application locally



**1. Prerequisites:**
 Install Node on the machine

**2. Clone the Repository:**
git clone https://github.com/YashrajPawar/apiEndpoints.git


**3. Navigate to the Project Directory:**
cd apiEndPoints


**4. Install the Dependencies:**
npm install


**5. Configure the Environment:**
Install the dotenv package and put the mongoDB atlas link .env file and make sure that process.env.variableName is present index.js as the connection will be established. 


**6. Run the Application:**
To avoid the manual starting of the server install nodemon package and enter npm run dev.
To manually start for every change enter npm run start.


**7. Stopping the Application:**
Press Ctrl + C twice in the terminal to stop the Application.


# Decisions and Assumptions during the Development Process

# Decision
As in the assignment document, the assignment is related to CRUD operations w.r.t Book, As I got the mail in the afternoon and I saw the deadline is today itself
so I decided to CRUD operations w.r.t Book. But initially, I was planning to create a User initially then the user creates the Book and only after authentication, the user 
will be allowed to update/modify only his details(Book).

# Assumptions
In Update a book's details part i have used PATCH request most of them use PUT request to update but I used PATCH because I thought modifying the title, and summary was fine
but modifying author details did not sound good to me. Suppose an XYZ author has written the book "A Thought" and then modifying the XYZ author with a new name for me this thought did not fit so
i assumed not to update the author details since the author is an author himself till the book is present. 
PATCH method I have used because I did not want to modify the whole Book I just wanted to modify some pieces of information about the Book.




