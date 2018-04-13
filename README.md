## Structure
![structure](structure.png?raw=true)

## GCP
requirements
- Cloud SDK

### Google Container Registry (GCR)
Github trigger build image in GCR

### GKE
#### cluster
```
gcloud container clusters create examhall --machine-type g1-small --num-nodes 2 --enable-autoscaling --min-nodes 2 --max-nodes 5 --zone asia-east1-b
gcloud config set container/cluster examhall
gcloud container clusters get-credentials examhall
```

#### deployment & service
```
kubectl create -f core.yaml
kubectl create -f ui.yaml
```

#### load balancer
```
kubectl create configmap nginx-config --from-file=default.conf
kubectl create -f nginx.yaml
```

#### check pods status
```
kubectl get pods -l app=examhall -o wide
```

#### clear
```
kubectl delete configmap nginx-config
kubectl delete --all svc
kubectl delete --all deployment

gcloud container clusters delete examhall
```

## local
requirements
- Docker

### Docker Compose
#### build
```
docker-compose build
```

#### run
```
docker-compose up -d
```

#### clear
```
docker-compose rm -s
```
