# E-Commerce Back End
## Description

The E-Commerce application was made for an internet retail company to access the back-end of their e-commerce website using MySQL and Sequelize.

## Installation

In order to access the application, the user must clone the repository and have npm installed along with the dotenv, mySQL, and Sequelize dependencies. 

## Usage

[Walkthrough Video](https://drive.google.com/file/d/1jOTeZCmGhWQDwu4a9LYJav_DvbqJl6aa/view?usp=drive_link) 
(Note data was seeded prior to the recording.)

First, the user must create an .env file following the format of the .env.EXAMPLE file. Afterwards, the user should seed the data by entering node seeds/index.js into the command line under the repository directory. Then, the user can start the server by entering npm start into the command line. 

The user can test the application's routes using an API development platform, such as Insomnia.

### Categories

To retrieve all category data use the GET method with the following link: http://localhost:3001/api/categories

To retrieve a category with a specific id, use the GET method with the id and following link : http://localhost:3001/api/categories/id (replace id with id)

To input a category into the database, use the POST method with the following link: http://localhost:3001/api/categories

The POST method requires JSON object. It must follow the following format:

    {
        "category_name":"Music"
    }

To update a category in the database, use the PUT method using a specific id and the following link: http://localhost:3001/api/categories/id (replace id with id)

The PUT method also requires a JSON object with the same format as the POST method.

To delete a category in the database, use the DELETE methos using a specific id and the following link: http://localhost:3001/api/categories/id (replace id with id)

### Products

To retrieve all product data use the GET method with the following link: http://localhost:3001/api/products

To retrieve a product with a specific id, use the GET method with the id and following link : http://localhost:3001/api/products/id (replace id with id)

To input a product into the database, use the POST method with the following link: http://localhost:3001/api/products

The POST method requires JSON object. It must follow the following format:

    {
        "product_name": 'Plain T-Shirt',
        "price": 14.99,
        "stock": 14,
        "category_id": 1,
    }

To update a product in the database, use the PUT method using a specific id and the following link: http://localhost:3001/api/products/id (replace id with id)

The PUT method also requires a JSON object with the same format as the POST method.

To delete a product in the database, use the DELETE methos using a specific id and the following link: http://localhost:3001/api/products/id (replace id with id)

### Tags

To retrieve all tag data use the GET method with the following link: http://localhost:3001/api/tags

To retrieve a tag with a specific id, use the GET method with the id and following link : http://localhost:3001/api/tags/id (replace id with id)

To input a tag into the database, use the POST method with the following link: http://localhost:3001/api/tags

The POST method requires JSON object. It must follow the following format:

    {
        "tag_name":"blue"
    }

To update a tag in the database, use the PUT method using a specific id and the following link: http://localhost:3001/api/tags/id (replace id with id)

The PUT method also requires a JSON object with the same format as the POST method.

To delete a tag in the database, use the DELETE methos using a specific id and the following link: http://localhost:3001/api/tags/id (replace id with id)

## Credits

[Starter Code](https://github.com/coding-boot-camp/fantastic-umbrella)

## License

Please refer to LICENSE file in repository.