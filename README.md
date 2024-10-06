```markdown
# MAPD713 Assignment 1 - Aditya Janjanam

## Project Description
This project is a Node.js-based HTTP server to handle product data using GET, POST, and DELETE requests. It includes features such as logging, request counters, and the ability to add, retrieve, and delete product information.

## Features
- **POST**: Add new product data (in-memory storage)
- **GET**: Retrieve all product data
- **DELETE**: Remove all products
- **Logging**: Logs each request and server startup information
- **Request counters** for GET and POST requests

## Prerequisites
Before running the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Git](https://git-scm.com/)
- [Git LFS](https://git-lfs.github.com/) (for handling large files)

### Step 1: Clone the Repository
To get a copy of this project locally, run the following command in your terminal:

```bash
git clone https://github.com/adityajanjanam/MAPD713-A1-AdityaJanjanam.git
```

### Step 2: Navigate to the Project Directory
Move into the project directory with:

```bash
cd MAPD713-A1-AdityaJanjanam
```

### Step 3: Install the Required Dependencies
Make sure to install all necessary project dependencies by running:

```bash
npm install
```

### Step 4: Set Up Git LFS (If not already set up)
If you haven't set up Git LFS yet, run the following commands to track large files such as videos:

```bash
git lfs install
git lfs pull
```

### Step 5: Run the Server
To start the server locally, run:

```bash
node server.js
```

The server will start running on the default port `5000`. You can now make HTTP requests (GET, POST, DELETE) to interact with the product data at `http://127.0.0.1:5000/products`.

## API Endpoints

### 1. Create a Product

- **Endpoint:** `POST /products`
- **Request Body:**
    ```json
    {
      "name": "Product Name",
      "description": "Product Description",
      "price": 10.99
    }
    ```

### 2. Get All Products

- **Endpoint:** `GET /products`
- **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "Product Name",
        "description": "Product Description",
        "price": 10.99
      }
    ]
    ```

### 3. Delete All Products

- **Endpoint:** `DELETE /products`
- **Response:** `204 No Content`

## Testing with Postman

1. Open Postman.
2. Use the following methods to interact with the API endpoints:

   - **POST** `/products` 
     - Set the request type to POST.
     - Go to the **Body** tab, select **raw**, and choose **JSON** format.
     - Example request body:
       ```json
       {
         "name": "Product1",
         "description": "This is a test product.",
         "price": 99.99
       }
       ```
   - **GET** `/products`
     - Set the request type to GET.
     - No body is required; just enter the URL `http://127.0.0.1:5000/products` in the request field.
   - **DELETE** `/products`
     - Set the request type to DELETE.
     - No body is required; just enter the URL `http://127.0.0.1:5000/products` in the request field.

## Testing with cURL

You can also test the API using cURL commands in your terminal:

- **Add a new product:**
    ```bash
    curl -X POST http://127.0.0.1:5000/products -H "Content-Type: application/json" -d '{"name": "Product1", "description": "This is a test product.", "price": 99.99}'
    ```

- **Get all products:**
    ```bash
    curl http://127.0.0.1:5000/products
    ```

- **Delete all products:**
    ```bash
    curl -X DELETE http://127.0.0.1:5000/products
    ```

## Project Structure
Here’s a quick look at the project's file structure:

```
MAPD713-A1-AdityaJanjanam/
│
├── server.js              # Main server file
├── package.json           # Project configuration and dependencies
├── package-lock.json      # Locked versions of dependencies
├── .gitignore             # Files to be ignored by Git
├── Sequence Diagram.jpeg   # Sequence diagram for the project
└── Assignment1 Demo Video.mp4  # Demonstration video of the project
```

## Note:
Make sure to use **Git LFS** for handling large files like videos. If you’re pulling the repository for the first time, run `git lfs install` and `git lfs pull` to ensure all large files are downloaded properly.

## License
This project is open-source under the MIT License.
```
