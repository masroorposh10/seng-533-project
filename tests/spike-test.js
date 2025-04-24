import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 10 },    
        { duration: '30s', target: 100 },  // spike in traffic
        { duration: '1m', target: 100 },   // maintain spike
        { duration: '30s', target: 10 },   // drop off
        { duration: '2m', target: 0 },    
    ],
    thresholds: {
        http_req_duration: ['p(95)<1500'],
    },
};

export default function () {
    let res = http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}
