Get public IP address of istio-gateway.

    kubectl get svc istio-ingressgateway -n istio-system

Get public IP address cluster port of istio when using external load balancer
 
    export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
    export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
    export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].port}')


Get a graph visualization of services in the mesh


    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=servicegraph -o jsonpath='{.items [0.metadata.name}') 8088:8088

Open browser to http://localhost:8088/force/forcegraph.html