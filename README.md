### HTML GENERATOR

#### Description

This project provides a web application for uploading a list of keywords, processing them to generate HTML pages, and storing both keywords and their corresponding HTML content in MongoDB. Users can then view and download these generated HTML pages.

#### Technology Stack

-   **Backend**: Node.js (Express framework)
-   **Database**: MongoDB
-   **Frontend**: React (or any frontend framework/library)
-   **File Upload**: Multer for handling file uploads in Node.js

#### Installation and Setup

##### Backend

1. **Clone the repository**

    ```
    git clone <repository-url>
    cd <project-folder>
    ```

2. **Install dependencies**

    ```
    npm install
    ```

3. **Run the server**
    ```
    npm start
    ```
    This will start the backend server at `http://localhost:3000`.

##### Frontend

1. **Navigate to the frontend directory**

    ```
    cd frontend
    ```

2. **Install dependencies**

    ```
    npm install
    ```

3. **Build the frontend**

    ```
    npm run build
    ```

4. **Start the frontend server**
    ```
    npm start
    ```
    This will start the frontend server at `http://localhost:3000`.

#### Backend API Routes

-   **File Upload**: Handle file upload (expects a `.xlsx` file containing keywords).
    ```
    POST /upload
    ```
-   **Get all keywords**: Retrieve all keywords stored in MongoDB.

    ```
    GET /keywords
    ```

-   **View HTML page**: Retrieve a specific HTML page by its ID.

    ```
    GET /keywords/view-html/:id
    ```

-   **Download HTML page**: Download a specific HTML page by its ID.
    ```
    GET /keywords/download-html/:id
    ```

#### Frontend Pages

-   **Upload Interface**: `/`

    -   UI for uploading a `.xlsx` file containing keywords.

-   **Discover Keywords and HTML**: `/discover`
    -   Interface to view keywords and download their generated HTML pages.

#### Functional Requirements

-   **File Upload**: Users can upload a `.xlsx` file containing keywords.
-   **Keyword Extraction**: Keywords are extracted from the uploaded file and stored in MongoDB.
-   **HTML Generation**: For each keyword, a corresponding HTML page is generated.
-   **Storage**: Keywords and their generated HTML pages are stored in MongoDB.
-   **Display and Download**: Users can view and download the generated HTML pages.

#### Non-Functional Requirements

-   **Code Quality**: Ensure clean, well-documented code following best practices.
-   **Error Handling**: Implement robust error handling and validation.
-   **User Experience**: Design an intuitive, responsive interface.

#### Deliverables

-   Fully functional web application meeting all specified requirements.
-   Clean, documented codebase.
-   Deployment-ready build for both frontend and backend.

#### Notes

Ensure MongoDB is properly set up and accessible before running the application. Adjust environment variables (`PORT`, `MONGODB_URI`, etc.) as needed for deployment or local development.

---