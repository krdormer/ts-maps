This project was completed via a TypeScript tutorial from the Zero To Mastery team.

ZTM: https://zerotomastery.io/

It is a simple introduction to the TypeScript language, and takes advantage of classes, interfaces, and the Google Maps API as well as the faker npm package for content.

In both the User and Company classes, a location with latitude and longitude is generated randomly via faker calls. The User class will have a name property, and the Company class will have a companyName as well as a catchPhrase property. Both will have a markerContent function property.

The location property is used to generate a new marker for both the Company and User which is then displayed on the generated map via a successful call to the Google Maps API. The name and companyName are shown in a popup with a click event handler as soon as a user clicks on the respective marker, as well as the company's catch phrase for those markers.

To use this project on your local machine:

    1: Clone a copy of the repo
    2: Copy an existing, or create a new API key with the Google Maps API service
    3: Delete 'ADD_YOUR_KEY' from the src string of the script tag with id='maps'
    4: Install node_modules via npm install
    5: In your terminal, run command:
        $ parcel index.html
    6: Refresh to see new points on the map, and content!
