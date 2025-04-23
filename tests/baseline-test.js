import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '5m',
};

export default function () {
    let res = http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}
