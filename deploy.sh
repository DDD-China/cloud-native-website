#!/usr/bin/env bash

set -e

echo "===Copy kube deployment file==="
scp -o "StrictHostKeyChecking no" cloud-native-website-kube.yaml ubuntu@ec2-54-223-95-220.cn-north-1.compute.amazonaws.com.cn:/tmp/cloud-native-website-kube.yaml

echo "===SSH into cluster==="
ssh -o "StrictHostKeyChecking no" ubuntu@ec2-54-223-95-220.cn-north-1.compute.amazonaws.com.cn '
set -e
echo "===Deploy service and app==="
kubectl apply -f /tmp/cloud-native-website-kube.yaml
'
