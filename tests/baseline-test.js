import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 20,                  
    duration: '5m',
    thresholds: {
        http_req_duration: ['p(95)<800'], 
    },
};

export default function () {
    let res = http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1); // Accounts for think time between requests
}
