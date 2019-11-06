# express_http_RequestAndResponse_CheckingAgainstArray
A express http request and response app using req.query to check against an array and view in Postman. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_http_RequestAndResponse_CheckingAgainstArray: 

    express --view=hbs express_http_RequestAndResponse_CheckingAgainstArray 

(6) Once the process is complete, navigate into the express_http_RequestAndResponse_CheckingAgainstArray directory: 

    cd express_http_RequestAndResponse_CheckingAgainstArray  

(7) Now in the express_http_RequestAndResponse_CheckingAgainstArray directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon

(9) Start the server with Nodemon with the following command: 

    nodemon

VS CODE

(10) Open in VS code: ![open in vs code - index js (_CheckingAgainstArray)](https://user-images.githubusercontent.com/35668707/67612946-801dcf80-f75c-11e9-9033-8ebe0cb683a3.JPG)


(11) Navigate to the routes/index.js file and add an array string to check against in Postman: ![add an array string to check against in Postman - index js (_CheckingAgainstArray)](https://user-images.githubusercontent.com/35668707/67612956-9a57ad80-f75c-11e9-9c99-4cd18d318043.JPG)


POSTMAN

(12) In Postman, navigate to localserver:3000 and use the GET route to see changes for both scenarios:
![Use GET route to check against array in Postman - Yes in array](https://user-images.githubusercontent.com/35668707/67612992-05a17f80-f75d-11e9-875f-32dc8767872c.JPG)

![Use GET route to check against array in Postman - No not in array](https://user-images.githubusercontent.com/35668707/67613013-38e40e80-f75d-11e9-81bd-5526b7f914e2.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.


