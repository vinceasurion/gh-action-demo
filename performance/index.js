import http from 'k6/http';
import { check, group } from 'k6';
import { Rate, Trend, Counter } from 'k6/metrics';

const successfulRequestRate = new Rate('Successful Request Rate');

const BASE_URL = 'http://localhost:8081/api/v1';

export let options = {
  rps: 35,
  noConnectionReuse: true,
  noVUConnectionReuse: true,
  stages: [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 2 },
    { duration: '30s', target: 4 },
    { duration: '30s', target: 8 },
    { duration: '30s', target: 16 },
    { duration: '30s', target: 32 },
    { duration: '30s', target: 32 },
    { duration: '30s', target: 32 },
  ],
  thresholds: {
    'Successful Request Rate': ['rate>0.8'],
  },
};

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  successfulRequestRate.add(res.status >= 200 && res.status < 400);
}
