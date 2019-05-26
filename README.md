# IG4_PI4_DevDurable_Back
[IG4][PI4] Backend de l'application de covoiturage pour la commune du Pic Saint Loup

### Docker
This application uses Docker-compose to run :
* A phpmyadmin application to access the database on the port :8080
* A MySQL database on the port :3306
* The NodeJS application on the port :80

To run this application be sure to have Docker-compose installed and run the following command :
 ```sh
 docker-compose up --build
 ```
 Then everything will be launched and you will be able to access the API.
