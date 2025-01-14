Setup Instructions for Backend and Frontend


Backend Setup
1. Prerequisites:

Node.js (LTS version recommended)
MongoDB (or any other database of choice)

2. Clone the Repository:
  git clone [repository_url]
  cd [repository_name]

3. Navigate to Backend Directory:
 cd server 

4. Install Dependencies:
  npm install

5. Environment Configuration:

Create a .env file in the backend directory and set the necessary environment variables, such as:

PORT=3000
MONGODB_URI=[Your MongoDB Connection URI]
SECRET_KEY=[Your JWT Secret Key]


6. Start the Backend Server:
npm start

7. Database Setup:

Ensure your database is running and set up the necessary collections or schemas.



Frontend Setup
1. Navigate to Frontend Directory:

<!-- cd deliverysystem --> back to main folder


2. Install Dependencies:
npm install

3. Environment Configuration:

Create a .env file in the frontend directory and set the necessary environment variables:
REACT_APP_BACKEND_URL=http://localhost:3000

4. Start the Frontend Development Server:
npm run dev

Frontend Features:

Ensure the frontend is properly connected to the backend by verifying API calls in development mode.






Overview of this project and some feature 

This project is a food delivery platform designed to provide users with the ability to view a variety of menu items, add items to a cart, and place orders with specified quantities. The platform ensures a seamless experience for both users and administrators by handling cart management, user authentication, and order processing efficiently.



Frontend Features:

Menu Viewing: Users can view the menu with various categories and items.
Adding to Cart: Users can add selected menu items to their cart, specifying quantities for each item.
Order Processing: Users can review their cart and place orders. The platform ensures that quantities and prices are correctly calculated and displayed.

User Authentication: Secure login and registration system to access the platform.
Cart Management: Real-time cart updates with item details and quantities.
Order Placement: Users can finalize their order by reviewing their cart and submitting the order for processing.
Responsive Design: Both backend and frontend are optimized for performance and user experience.


Challenges
As a fresher, one of the main challenges faced during the development of this food delivery platform was building and implementing complex logic, especially in areas such as cart management, order processing, and user authentication.



As a fresher, one of the challenges faced during the development process was the time spent resolving a simple setup issue. Specifically, I spent nearly 3 to 4 hours troubleshooting a minor mistake in the backend configuration, where I inadvertently forgot to implement CORS (Cross-Origin Resource Sharing) in the index.js file before defining the routes.

Throughout this time, I repeatedly checked the API routes but was unable to successfully connect the frontend and backend. Despite numerous attempts to debug the issue, I was unable to identify the root cause. After reflecting on the process, I realized my mistake only when revisiting a previous project’s backend setup, where I had correctly included CORS before setting up the routes.

This experience taught me the importance of attention to detail and the value of revisiting previous knowledge to ensure foundational components are correctly implemented. Overcoming such challenges has helped me develop a deeper understanding of backend setup processes and further strengthened my problem-solving skills.