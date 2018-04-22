# Architecture
![architecture](architecture.png?raw=true)

# GCP
requirements
- Cloud SDK

## create cluster
```
gcloud container clusters create examhall --machine-type g1-small --num-nodes 2 --enable-autoscaling --min-nodes 2 --max-nodes 5 --zone asia-east1-b
gcloud config set container/cluster examhall
gcloud container clusters get-credentials examhall
```

## GKE
### deployment & service
```
kubectl apply -f core.yaml
kubectl apply -f ui.yaml
```

### load balancer
```
kubectl create configmap nginx-config --from-file=default.conf
kubectl apply -f nginx.yaml
```

### check pods status
```
kubectl get pods -l app=examhall -o wide
```

## Continuous Deployment with Google Container Registry (GCR)
![cd](cd.png?raw=true)

give Container Builder Service Account `container.developer` role access to your Kubernetes Engine clusters

```
PROJECT="$(gcloud projects describe \
    $(gcloud config get-value core/project -q) --format='get(projectNumber)')"

gcloud projects add-iam-policy-binding $PROJECT \
    --member=serviceAccount:$PROJECT@cloudbuild.gserviceaccount.com \
    --role=roles/container.developer
```

1. push to GitHub with tag
1. trigger build image in GCR
    - run cloudbuild.yaml to build steps
1. apply Kubernetes configuration files

## cleanup
```
kubectl delete configmap nginx-config
kubectl delete --all svc
kubectl delete --all deployment

gcloud container clusters delete examhall
```

# local
requirements
- Docker

## Docker Compose
### build
```
docker-compose build
```

### run
```
docker-compose up -d
```

### cleanup
```
docker-compose rm -s
```
