# Pharmacy compounding formulary

### API Repo
https://github.com/wyang19a/pharmacy-api
Api for the pharmacy formulary app.

### Deployed sites

Client: https://wyang19a.github.io/pharmacy-client/
API: https://safe-brushlands-23264.herokuapp.com/

### Unsolved problems
- Getting recipe update and delete to display updated table on button click.
- Bootstrap modal not closing on submit.
- Table scroll and search (I couldn't link mdbootstrap)

### Technologies used
- HTML
- CSS
- Bootstrap
- Javascript
- Ajax
- JQuery

### Wireframe  
https://imgur.com/uGBVp3v

### User stories
- User should be able to sign up, sign in, sign out, change password
- User should be able to make a new product
- User should be able to delete a product
- User should be able to update a product
- User should be able to see product list
- User should be able to see product with ingredient list for the product
- User should be able to make a new ingredient
- User should be able to delete an ingredient
- User should be able to update an ingredient
- User should be able to see ingredient list
- User should be able to make a new recipe with created product and ingredient
- User should be able to see how much of ingredient is used for a product.
- User should be able to delete a recipe


I feel like I could have done better job planning things before I started working on this project because it changed few times in the middle. My original plan was to make a compunding tracker, but I was advised on planning 1-on-1 that I should start with one resource. So I changed my plan to make a inventory list of medications. Once I made that one resource fully working, I scaffolded two more resources to make it into a compounding tracker. But I couldn't figure out how to make one feature I really wanted for the compounding tracker, so I decided to just make a compounding formulary recipe.

This project was very challenging for me. I started with one resource in the beginning, then added 2 more to make many to many association between the existing one. My backend got too complicated for me to work with the data. Things went smoothly until I tried using handlebars to work with buttons to pull data from related source, and use it somewhere else. For example, I wanted to make POST action of recipe much easier by enabling the app to pull desired product ID and ingredient ID from clicking certain buttons and setting those values for the user so they don't have to go back and check the id#. I got this function to work after hours of struggle. But at this point, my codes were too confusing and it was hard for me to understand the codes I wrote. My page was displaying contents from all different places from my client file including 4 different handlebar files in combination with codes inside different ui.js written in `` notation.
