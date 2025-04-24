import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 75,                  
    duration: '10m',
    thresholds: {
        http_req_failed: ['rate<0.01'],   
        http_req_duration: ['p(95)<1200'],
    },
};

export default function () {
    let res = http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(0.5); // faster think time to increase traffic
}
