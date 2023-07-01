# gsd
Getting started with Docker

## First container (first-container)

### Docker Images
Create Docker image using
```
docker image build -t nimjetushar/gsd:first-container .
```

List all locally available images and remove
```
docker image ls

docker image rm nimjetushar/gsd:first-container
```

Push image to docker artifactory
```
docker image push nimjetushar/gsd:first-container
```

### Docker Containers
To create container on port 8080. -it for interactive mode and -d for detach mode
```
docker container run -d --name web-app -p 8000:8080 nimjetushar/gsd:first-container
docker container run -it --name web-app -p 8000:8080 nimjetushar/gsd:first-container
```

List all running container
```
docker container ls
```

Stop container
```
docker container stop web-app
```

Start container
```
docker container start web-app
```

Remove/delete container
```
docker container rm web-app
```

## Multi Container (multi-container)

Docker compose 
```
docker-compose up -d
```

List all images and container create from compose
```
docker image ls
docker container ls
```

Bring down running docker containers
```
docker-compose down
```

## Swarm stack container (swarm-stack)

Build required images using docker build (refer yml file for details)

Create & deploy swarm
```
docker swarm init
docker stack deploy -c docker-compose.yml counter
docker stack ls
docker stack services counter
docker stack ps counter
```







