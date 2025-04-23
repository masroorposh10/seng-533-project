import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    duration: '30m',
    vus: 50,
};

export default function () {
    http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');
    sleep(1);
}
