// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// test('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });

// test('adds 2 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });

// test('adds 2 + 2 to equal 4', () => {
//     expect(1 + 2).toBe(4);
// });

// test('adds 1 + 2 to equal 4', () => {
//     expect(1 + 2).toBe(4);
// });

// PHONE NUMBERS
test('valid phone number 1', () => {
    expect(isPhoneNumber('394-349-3495')).toBe(true);
});

test('valid phone number 2', () => {
    expect(isPhoneNumber('(394) 349-3495')).toBe(true);
});

test('invalid phone number 1', () => {
    expect(isPhoneNumber('394-349-345')).toBe(false);
});

test('invalid phone number 2', () => {
    expect(isPhoneNumber('phonenumber')).toBe(false);
});

// EMAIL
test('valid email 1', () => {
    expect(isEmail('test@gmail.com')).toBe(true);
});

test('valid email 2', () => {
    expect(isEmail('test_example@site.io')).toBe(true);
});

test('invalid email 1', () => {
    expect(isEmail('test_example.io')).toBe(false);
});

test('invalid email 2', () => {
    expect(isEmail('test_example')).toBe(false);
});


// PASSWORD 
test('valid password 1', () => {
    expect(isStrongPassword('test123')).toBe(true);
});

test('valid password 2', () => {
    expect(isStrongPassword('test_example123')).toBe(true);
});

test('invalid password 1', () => {
    expect(isStrongPassword('123test')).toBe(false);
});

test('invalid password 2', () => {
    expect(isStrongPassword('abc')).toBe(false);
});

// DATE
test('valid date 1', () => {
    expect(isDate('4/5/2026')).toBe(true);
});

test('valid date 2', () => {
    expect(isDate('04/05/2026')).toBe(true);
});

test('invalid date 1', () => {
    expect(isDate('4-5-2026')).toBe(false);
});

test('invalid date 2', () => {
    expect(isDate('04/05')).toBe(false);
});

// HEX CODE
test('valid hex code 1', () => {
    expect(isHexColor('#111')).toBe(true);
});

test('valid hex code 2', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
});

test('invalid hex code 1', () => {
    expect(isHexColor('#FFFF')).toBe(false);
});

test('invalid hex code 2', () => {
    expect(isHexColor('#GGG')).toBe(false);
});