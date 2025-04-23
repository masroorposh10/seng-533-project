import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 10 },
        { duration: '30s', target: 100 }, // spike
        { duration: '1m', target: 100 },
        { duration: '30s', target: 10 },
        { duration: '2m', target: 0 },
    ],
};

export default function () {
    http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');
    sleep(1);
}
