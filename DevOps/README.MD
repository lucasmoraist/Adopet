# Passo a Passo

## Login
`docker login azure`
<br/>
`az login`

## Build Dockerfile
`docker build -t adopet93267 .`

## Rodar localmente
`docker run --name adopet93267 -d -p 3000:3000 adopet93267`

## Endpoints 
`localhost:3000`

| Req | URL |
|-----|-----|
| GET | /abrigos |
| GET | /pets |
| POST | /abrigos |
| POST | /pets |
| PUT | /abrigos |
| PUT | /pets |
| DEL | /abrigos |
| DEL | /pets |

## Removendo container
`docker rm adopet93267 -f`

## Grupo de recursos azure
`az group create --name rg-adopet93267 --location eastus`

## ACR
`az acr create --resource-group rg-adopet93267 --name adopet93267 --sku Basic`
- Anotar: `loginServer` e `name`

## Logando no acr para dar push e pull
`az acr login --name adopet93267`

## Criando registro de container privado
`docker tag adopet93267 adopet93267.azurecr.io/adopet93267:v1`

## Fazendo push da imagem
`docker push adopet93267.azurecr.io/adopet93267:v1`

## Removendo imagem do ambiente local
`docker rmi adopet93267.azurecr.io/adopet93267:v1 -f`

## Removendo imagem antiga
`docker image rm adopet93267`

## Logando no acr como administrador
`az acr login --name adopet93267 --username <userDeAdm> --password <senhaDeAdm>`

## Criando container dentro da azure
`az container create --resource-group rg-adopet93267 --name adopet93267 --image adopet93267.azurecr.io/adopet93267:v1 --cpu 1 --memory 1 --registry-login-server adopet93267.azurecr.io --registry-username <userDeAdm> --registry-password <senhaDeAdm> --ip-address Public --dns-name-label adopet93267 --ports 3000 80 8080`
- Anotar: `fqdn` e `ip`
- Para rodar na nuvem `adopet93267.eastus.azurecontainer.io:3000`
