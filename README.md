# EC2 Load Testing with K6 for SENG 533

This repo contains load testing scripts for our SENG 533 project using [K6](https://k6.io/). Tests include spike, soak, and baseline performance tests.

## 🔧 Prerequisites

- Node.js (for installing K6 via npm if preferred)
- [K6 installed](https://k6.io/docs/getting-started/installation/)
- Access to your EC2 instance's public DNS or IP

## 📁 Structure

ec2-load-testing/ 
├── tests/ 
    │ 
    ├── spike-test.js 
    │ 
    ├── soak-test.js 
    │ 
    └── baseline-test.js 
├── results/
├── README.md


## 🚀 Running the Tests

Update the test files with your EC2 endpoint:
```js
http.get('http://533-load-53753845.us-east-1.elb.amazonaws.com');

## Run K6

```
```
k6 run tests/spike-test.js
k6 run tests/soak-test.js
k6 run tests/baseline-test.js
```

### To save results:

```
k6 run --out json=results/spike.json tests/spike-test.js
```

- Ensure your EC2 security group allows incoming traffic on the port you're testing (usually port 80 or 443).

- Monitor CPU/memory usage on EC2 cloudwatch during tests for better insight.