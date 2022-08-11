import { Reading } from './6-9.js';
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
const aReading = new Reading(reading)
console.log(aReading.baseCharge());
