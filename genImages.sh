#!/bin/bash

export CIRCLE_BUILD_NUM_DOCKER=0.1.1
export REPO_NAME=dmall-web
export ORG_NAME=com.dmall
export AWS_ECR_REGISTRY=955065381857.dkr.ecr.cn-north-1.amazonaws.com.cn

docker build -t $AWS_ECR_REGISTRY/$REPO_NAME:latest .
docker tag $AWS_ECR_REGISTRY/$REPO_NAME:latest $AWS_ECR_REGISTRY/$REPO_NAME:$CIRCLE_BUILD_NUM_DOCKER
docker push $AWS_ECR_REGISTRY/$REPO_NAME:$CIRCLE_BUILD_NUM_DOCKER
docker push $AWS_ECR_REGISTRY/$REPO_NAME:latest
