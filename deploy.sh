#!/usr/bin/env bash

set -e

echo "===Copy kube deployment file==="
scp -o "StrictHostKeyChecking no" dmall-web-kube.yaml ubuntu@ec2-54-223-95-220.cn-north-1.compute.amazonaws.com.cn:/tmp/dmall-web-kube.yaml

echo "===SSH into cluster==="
ssh -o "StrictHostKeyChecking no" ubuntu@ec2-54-223-95-220.cn-north-1.compute.amazonaws.com.cn '
set -e
echo "===Deploy service and app==="
kubectl apply -f /tmp/dmall-web-kube.yaml
'
