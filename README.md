
### Login Azure Cloud
```
$ az login
```

## Deploy Deno app to Azure

### Create an Resource Group
```
$ az group create --name deno-quickstart --location eastus
{
  "id": "/subscriptions/XYZ/resourceGroups/deno-quickstart",
  "location": "eastus",
  "managedBy": null,
  "name": "deno-quickstart",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}
```

### Create an AppService Plan
```
$ az appservice plan create --resource-group deno-quickstart --name deno-plan --is-linux
{
  "freeOfferExpirationTime": "2021-07-25T14:28:22.273333",
  "geoRegion": "East US",
  "hostingEnvironmentProfile": null,
  "hyperV": false,
  "id": "/subscriptions/XYZ/resourceGroups/deno-quickstart/providers/Microsoft.Web/serverfarms/deno-plan",
  "isSpot": false,
  "isXenon": false,
  "kind": "linux",
  "location": "eastus",
  "maximumElasticWorkerCount": 1,
  "maximumNumberOfWorkers": 0,
  "name": "deno-plan",
  "numberOfSites": 0,
  "perSiteScaling": false,
  "provisioningState": "Succeeded",
  "reserved": true,
  "resourceGroup": "deno-quickstart",
  "sku": {
    "capabilities": null,
    "capacity": 1,
    "family": "B",
    "locations": null,
    "name": "B1",
    "size": "B1",
    "skuCapacity": null,
    "tier": "Basic"
  },
  "spotExpirationTime": null,
  "status": "Ready",
  "subscription": "XYZ",
  "systemData": null,
  "tags": null,
  "targetWorkerCount": 0,
  "targetWorkerSizeId": 0,
  "type": "Microsoft.Web/serverfarms",
  "workerTierName": null
}
```

### Create an WebApp

```
$ az webapp create -n demo-deno --resource-group deno-quickstart -p deno-plan -i anthonychu/azure-webapps-deno:latest
{
  "availabilityState": "Normal",
  "clientAffinityEnabled": true,
  "clientCertEnabled": false,
  "clientCertExclusionPaths": null,
  "clientCertMode": "Required",
  "cloningInfo": null,
  "containerSize": 0,
  "customDomainVerificationId": "139BA7D3ED76E78B3CF21FF71944807EB9E663C73C2841F7C7F31C068660EE40",
  "dailyMemoryTimeQuota": 0,
  "defaultHostName": "demo-deno.azurewebsites.net",
  "enabled": true,
  "enabledHostNames": [
    "demo-deno.azurewebsites.net",
    "demo-deno.scm.azurewebsites.net"
  ],
  "ftpPublishingUrl": "ftp://waws-prod-blu-247.ftp.azurewebsites.windows.net/site/wwwroot",
  "hostNameSslStates": [
    {
      "hostType": "Standard",
      "ipBasedSslResult": null,
      "ipBasedSslState": "NotConfigured",
      "name": "demo-deno.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "toUpdateIpBasedSsl": null,
      "virtualIp": null
    },
    {
      "hostType": "Repository",
      "ipBasedSslResult": null,
      "ipBasedSslState": "NotConfigured",
      "name": "demo-deno.scm.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "toUpdateIpBasedSsl": null,
      "virtualIp": null
    }
  ],
  "hostNames": [
    "demo-deno.azurewebsites.net"
  ],
  "hostNamesDisabled": false,
  "hostingEnvironmentProfile": null,
  "httpsOnly": false,
  "hyperV": false,
  "id": "/subscriptions/XYZ/resourceGroups/deno-quickstart/providers/Microsoft.Web/sites/demo-deno",
  "identity": null,
  "inProgressOperationId": null,
  "isDefaultContainer": null,
  "isXenon": false,
  "kind": "app,linux,container",
  "lastModifiedTimeUtc": "2021-06-25T14:37:08.280000",
  "location": "East US",
  "maxNumberOfWorkers": null,
  "name": "demo-deno",
  "outboundIpAddresses": "20.62.228.68,20.62.228.134,20.62.228.178,20.62.229.164,20.62.229.242,20.62.230.48,20.49.104.33",
  "possibleOutboundIpAddresses": "20.62.228.68,20.62.228.134,20.62.228.178,20.62.229.164,20.62.229.242,20.62.230.48,20.62.230.62,20.62.230.171,20.62.230.192,20.62.230.253,20.62.225.4,52.146.84.26,20.62.231.67,20.62.231.92,20.62.231.94,20.62.231.132,20.62.231.139,20.62.227.12,20.49.104.33",
  "redundancyMode": "None",
  "repositorySiteName": "demo-deno",
  "reserved": true,
  "resourceGroup": "deno-quickstart",
  "scmSiteAlsoStopped": false,
  "serverFarmId": "/subscriptions/XYZ/resourceGroups/deno-quickstart/providers/Microsoft.Web/serverfarms/deno-plan",
  "siteConfig": {
    "acrUseManagedIdentityCreds": false,
    "acrUserManagedIdentityID": null,
    "alwaysOn": false,
    "apiDefinition": null,
    "apiManagementConfig": null,
    "appCommandLine": null,
    "appSettings": null,
    "autoHealEnabled": null,
    "autoHealRules": null,
    "autoSwapSlotName": null,
    "azureMonitorLogCategories": null,
    "azureStorageAccounts": null,
    "connectionStrings": null,
    "cors": null,
    "customAppPoolIdentityAdminState": null,
    "customAppPoolIdentityTenantState": null,
    "defaultDocuments": null,
    "detailedErrorLoggingEnabled": null,
    "documentRoot": null,
    "experiments": null,
    "fileChangeAuditEnabled": null,
    "ftpsState": null,
    "functionAppScaleLimit": 0,
    "functionsRuntimeScaleMonitoringEnabled": null,
    "handlerMappings": null,
    "healthCheckPath": null,
    "http20Enabled": false,
    "httpLoggingEnabled": null,
    "ipSecurityRestrictions": [
      {
        "action": "Allow",
        "description": "Allow all access",
        "headers": null,
        "ipAddress": "Any",
        "name": "Allow all",
        "priority": 1,
        "subnetMask": null,
        "subnetTrafficTag": null,
        "tag": null,
        "vnetSubnetResourceId": null,
        "vnetTrafficTag": null
      }
    ],
    "javaContainer": null,
    "javaContainerVersion": null,
    "javaVersion": null,
    "keyVaultReferenceIdentity": null,
    "limits": null,
    "linuxFxVersion": "",
    "loadBalancing": null,
    "localMySqlEnabled": null,
    "logsDirectorySizeLimit": null,
    "machineKey": null,
    "managedPipelineMode": null,
    "managedServiceIdentityId": null,
    "metadata": null,
    "minTlsVersion": null,
    "minimumElasticInstanceCount": 0,
    "netFrameworkVersion": null,
    "nodeVersion": null,
    "numberOfWorkers": 1,
    "phpVersion": null,
    "powerShellVersion": null,
    "preWarmedInstanceCount": null,
    "publicNetworkAccess": null,
    "publishingPassword": null,
    "publishingUsername": null,
    "push": null,
    "pythonVersion": null,
    "remoteDebuggingEnabled": null,
    "remoteDebuggingVersion": null,
    "requestTracingEnabled": null,
    "requestTracingExpirationTime": null,
    "routingRules": null,
    "runtimeADUser": null,
    "runtimeADUserPassword": null,
    "scmIpSecurityRestrictions": [
      {
        "action": "Allow",
        "description": "Allow all access",
        "headers": null,
        "ipAddress": "Any",
        "name": "Allow all",
        "priority": 1,
        "subnetMask": null,
        "subnetTrafficTag": null,
        "tag": null,
        "vnetSubnetResourceId": null,
        "vnetTrafficTag": null
      }
    ],
    "scmIpSecurityRestrictionsUseMain": null,
    "scmMinTlsVersion": null,
    "scmType": null,
    "tracingOptions": null,
    "use32BitWorkerProcess": null,
    "virtualApplications": null,
    "vnetName": null,
    "vnetPrivatePortsCount": null,
    "vnetRouteAllEnabled": null,
    "webSocketsEnabled": null,
    "websiteTimeZone": null,
    "winAuthAdminState": null,
    "winAuthTenantState": null,
    "windowsFxVersion": null,
    "xManagedServiceIdentityId": null
  },
  "slotSwapStatus": null,
  "state": "Running",
  "suspendedTill": null,
  "systemData": null,
  "tags": null,
  "targetSwapSlot": null,
  "trafficManagerHostNames": null,
  "type": "Microsoft.Web/sites",
  "usageState": "Normal"
}
```

## Configure App service Deno container

### Tell the webapp where to get the Docker container image for the experimental Deno image name
```
$ az webapp config container set --name demo-deno --resource-group deno-quickstart -i anthonychu/azure-webapps-deno:1.6.0 -r 'https://index.docker.io' -u '' -p  '' -t true
[
  {
    "name": "WEBSITES_ENABLE_APP_SERVICE_STORAGE",
    "slotSetting": false,
    "value": "true"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_URL",
    "slotSetting": false,
    "value": "https://index.docker.io"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_USERNAME",
    "slotSetting": false,
    "value": ""
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_PASSWORD",
    "slotSetting": false,
    "value": null
  },
  {
    "name": "DOCKER_CUSTOM_IMAGE_NAME",
    "value": "DOCKER|anthonychu/azure-webapps-deno:1.6.0"
  }
]
```

### Set the web app to have no startup file

```
$ az webapp config set --name demo-deno --resource-group deno-quickstart --startup-file ''
{
  "alwaysOn": false,
  "apiDefinition": null,
  "apiManagementConfig": null,
  "appCommandLine": "",
  "appSettings": null,
  "autoHealEnabled": false,
  "autoHealRules": null,
  "autoSwapSlotName": null,
  "connectionStrings": null,
  "cors": null,
  "defaultDocuments": [
    "Default.htm",
    "Default.html",
    "Default.asp",
    "index.htm",
    "index.html",
    "iisstart.htm",
    "default.aspx",
    "index.php",
    "hostingstart.html"
  ],
  "detailedErrorLoggingEnabled": false,
  "documentRoot": null,
  "experiments": {
    "rampUpRules": []
  },
  "ftpsState": "AllAllowed",
  "handlerMappings": null,
  "healthCheckPath": null,
  "http20Enabled": true,
  "httpLoggingEnabled": false,
  "id": "/subscriptions/XYZ/resourceGroups/deno-quickstart/providers/Microsoft.Web/sites/demo-deno",
  "ipSecurityRestrictions": [
    {
      "action": "Allow",
      "description": "Allow all access",
      "headers": null,
      "ipAddress": "Any",
      "name": "Allow all",
      "priority": 1,
      "subnetMask": null,
      "subnetTrafficTag": null,
      "tag": null,
      "vnetSubnetResourceId": null,
      "vnetTrafficTag": null
    }
  ],
  "javaContainer": null,
  "javaContainerVersion": null,
  "javaVersion": null,
  "kind": null,
  "limits": null,
  "linuxFxVersion": "DOCKER|anthonychu/azure-webapps-deno:1.6.0",
  "loadBalancing": "LeastRequests",
  "localMySqlEnabled": false,
  "location": "East US",
  "logsDirectorySizeLimit": 35,
  "machineKey": null,
  "managedPipelineMode": "Integrated",
  "managedServiceIdentityId": null,
  "minTlsVersion": "1.2",
  "name": "demo-deno",
  "netFrameworkVersion": "v4.0",
  "nodeVersion": "",
  "numberOfWorkers": 1,
  "phpVersion": "",
  "powerShellVersion": "",
  "preWarmedInstanceCount": 0,
  "publishingUsername": "$demo-deno",
  "push": null,
  "pythonVersion": "",
  "remoteDebuggingEnabled": false,
  "remoteDebuggingVersion": "VS2019",
  "requestTracingEnabled": false,
  "requestTracingExpirationTime": null,
  "resourceGroup": "deno-quickstart",
  "scmIpSecurityRestrictions": [
    {
      "action": "Allow",
      "description": "Allow all access",
      "headers": null,
      "ipAddress": "Any",
      "name": "Allow all",
      "priority": 1,
      "subnetMask": null,
      "subnetTrafficTag": null,
      "tag": null,
      "vnetSubnetResourceId": null,
      "vnetTrafficTag": null
    }
  ],
  "scmIpSecurityRestrictionsUseMain": false,
  "scmMinTlsVersion": "1.0",
  "scmType": "None",
  "systemData": null,
  "tracingOptions": null,
  "type": "Microsoft.Web/sites",
  "use32BitWorkerProcess": true,
  "virtualApplications": [
    {
      "physicalPath": "site\\wwwroot",
      "preloadEnabled": false,
      "virtualDirectories": null,
      "virtualPath": "/"
    }
  ],
  "vnetName": "",
  "vnetPrivatePortsCount": 0,
  "vnetRouteAllEnabled": false,
  "webSocketsEnabled": false,
  "windowsFxVersion": null,
  "xManagedServiceIdentityId": null
}
```

### Set the webapp to have runtime environment variables

```
$ az webapp config appsettings set --name demo-deno --resource-group deno-quickstart --settings WEBSITE_RUN_FROM_PACKAGE=1 WEBSITES_ENABLE_APP_SERVICE_STORAGE=true
[
  {
    "name": "WEBSITES_ENABLE_APP_SERVICE_STORAGE",
    "slotSetting": false,
    "value": "true"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_URL",
    "slotSetting": false,
    "value": "https://index.docker.io"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_USERNAME",
    "slotSetting": false,
    "value": ""
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_PASSWORD",
    "slotSetting": false,
    "value": null
  },
  {
    "name": "WEBSITE_RUN_FROM_PACKAGE",
    "slotSetting": false,
    "value": "1"
  }
]
```

## Configure Deno app deployment to web app

### Run the zip command
```
$ cd demo-deno/
$ zip demo demo.ts
```

### Configure the package as your code source for the deployment

```
$ az webapp deployment source config-zip --name demo-deno --resource-group deno-quickstart --src ./demo.zip
Getting scm site credentials for zip deployment
Starting zip deployment. This operation can take a while to complete ...
Deployment endpoint responded with status code 202
{
  "active": true,
  "author": "N/A",
  "author_email": "N/A",
  "complete": true,
  "deployer": "Push-Deployer",
  "end_time": "2021-06-25T15:00:14.4177641Z",
  "id": "XYZ",
  "is_readonly": true,
  "is_temp": false,
  "last_success_end_time": "2021-06-25T15:00:14.4177641Z",
  "log_url": "https://demo-deno.scm.azurewebsites.net/api/deployments/latest/log",
  "message": "Created via a push deployment",
  "progress": "",
  "received_time": "2021-06-25T15:00:11.2780303Z",
  "site_name": "demo-deno",
  "start_time": "2021-06-25T15:00:12.6754411Z",
  "status": 4,
  "status_text": "",
  "url": "https://demo-deno.scm.azurewebsites.net/api/deployments/latest"
}
```

### Configure the file, within the package, to run

```
$ az webapp config set --name demo-deno --resource-group deno-quickstart --startup-file 'deno run --allow-net demo.ts'
{
  "alwaysOn": false,
  "apiDefinition": null,
  "apiManagementConfig": null,
  "appCommandLine": "deno run --allow-net demo.ts",
  "appSettings": null,
  "autoHealEnabled": false,
  "autoHealRules": null,
  "autoSwapSlotName": null,
  "connectionStrings": null,
  "cors": null,
  "defaultDocuments": [
    "Default.htm",
    "Default.html",
    "Default.asp",
    "index.htm",
    "index.html",
    "iisstart.htm",
    "default.aspx",
    "index.php",
    "hostingstart.html"
  ],
  "detailedErrorLoggingEnabled": false,
  "documentRoot": null,
  "experiments": {
    "rampUpRules": []
  },
  "ftpsState": "AllAllowed",
  "handlerMappings": null,
  "healthCheckPath": null,
  "http20Enabled": true,
  "httpLoggingEnabled": false,
  "id": "/subscriptions/XYZ/resourceGroups/deno-quickstart/providers/Microsoft.Web/sites/demo-deno",
  "ipSecurityRestrictions": [
    {
      "action": "Allow",
      "description": "Allow all access",
      "headers": null,
      "ipAddress": "Any",
      "name": "Allow all",
      "priority": 1,
      "subnetMask": null,
      "subnetTrafficTag": null,
      "tag": null,
      "vnetSubnetResourceId": null,
      "vnetTrafficTag": null
    }
  ],
  "javaContainer": null,
  "javaContainerVersion": null,
  "javaVersion": null,
  "kind": null,
  "limits": null,
  "linuxFxVersion": "DOCKER|anthonychu/azure-webapps-deno:1.6.0",
  "loadBalancing": "LeastRequests",
  "localMySqlEnabled": false,
  "location": "East US",
  "logsDirectorySizeLimit": 35,
  "machineKey": null,
  "managedPipelineMode": "Integrated",
  "managedServiceIdentityId": null,
  "minTlsVersion": "1.2",
  "name": "demo-deno",
  "netFrameworkVersion": "v4.0",
  "nodeVersion": "",
  "numberOfWorkers": 1,
  "phpVersion": "",
  "powerShellVersion": "",
  "preWarmedInstanceCount": 0,
  "publishingUsername": "$demo-deno",
  "push": null,
  "pythonVersion": "",
  "remoteDebuggingEnabled": false,
  "remoteDebuggingVersion": "VS2019",
  "requestTracingEnabled": false,
  "requestTracingExpirationTime": null,
  "resourceGroup": "deno-quickstart",
  "scmIpSecurityRestrictions": [
    {
      "action": "Allow",
      "description": "Allow all access",
      "headers": null,
      "ipAddress": "Any",
      "name": "Allow all",
      "priority": 1,
      "subnetMask": null,
      "subnetTrafficTag": null,
      "tag": null,
      "vnetSubnetResourceId": null,
      "vnetTrafficTag": null
    }
  ],
  "scmIpSecurityRestrictionsUseMain": false,
  "scmMinTlsVersion": "1.0",
  "scmType": "None",
  "systemData": null,
  "tracingOptions": null,
  "type": "Microsoft.Web/sites",
  "use32BitWorkerProcess": true,
  "virtualApplications": [
    {
      "physicalPath": "site\\wwwroot",
      "preloadEnabled": false,
      "virtualDirectories": null,
      "virtualPath": "/"
    }
  ],
  "vnetName": "",
  "vnetPrivatePortsCount": 0,
  "vnetRouteAllEnabled": false,
  "webSocketsEnabled": false,
  "windowsFxVersion": null,
  "xManagedServiceIdentityId": null
}
```