# Filename: runImportPermissionsScript.bash
# Contributors:
#   - Spring 2020:
#     -- Mario Arturo Lopez Martinez - Added comments to explain eaach line of script and
#        refactored PowerShell script into Bash script to work in *NIX environments

# RUN THIS SCRIPT IF YOU'RE ON *NIX!
# If not, use the PowerShell script.

# Build an image of our app with name=cappy tag=latest
docker build -t cappy:latest .;

# Pull production MongoDB image from a (not our) GitLab repository
# docker pull gitlab.ecs.baylor.edu:5555/012019-capstone/section02-group01/mongo:production;
docker pull mongo

# Run MongoDB image using preset for strapi in detached mode
docker run -e MONGO_INITDB_DATABASE=strapi --name strapi-mongo-scripted -d mongo
    # -d gitlab.ecs.baylor.edu:5555/012019-capstone/section02-group01/mongo:production;

# Copy contents of importPermissions.bash to our MongoDB image
docker cp importPermissions.bash strapi-mongo-scripted:.;

# Copy contents of our .json files (data) to our MongoDB image
docker cp users.json strapi-mongo-scripted:.;
docker cp perms.json strapi-mongo-scripted:.;
docker cp roles.json strapi-mongo-scripted:.;

# Run script on MongoDB image, open interactive shell
docker exec -it strapi-mongo-scripted /bin/bash -c ./importPermissions.bash;

# Sleep for 10 seconds, unsure why
sleep 10;

# Pull production Strapi image from a (not our) GitLab repository
# docker pull gitlab.ecs.baylor.edu:5555/012019-capstone/section02-group01/strapi:production;
docker pull strapi/strapi

# Run Strapi image using preset for MongoDB
docker run -e APP_NAME=strapi-app -e DATABASE_CLIENT=mongo -e DATABASE_HOST=strapi-mongo-scripted -e DATABASE_PORT=27017 -e DATABASE_NAME=strapi --link strapi-mongo-scripted -p 1337:1337 --name strapi-scripted -d strapi/strapi;

# Run Cappy image on port 3000
docker run -p 3000:3000 -d cappy
