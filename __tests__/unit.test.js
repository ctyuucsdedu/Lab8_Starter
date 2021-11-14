// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//1

test('isPhoneNumber() true1', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('isPhoneNumber() true2', () => {
    expect(functions.isPhoneNumber("456-7890")).toBe(true);
});

test('isPhoneNumber() false1', () => {
    expect(functions.isPhoneNumber("56-7890")).toBe(false);
});

test('isPhoneNumber() false2', () => {
    expect(functions.isPhoneNumber("45x-7890")).toBe(false);
});

//2

test('isEmail() true1', () => {
    expect(functions.isEmail("ucsd@ucsd.uc")).toBe(true);
});

test('isEmail() true2', () => {
    expect(functions.isEmail("hello@gmail.com")).toBe(true);
});

test('isEmail() false1', () => {
    expect(functions.isEmail("abc@123.com")).toBe(false);
});

test('isEmail() false2', () => {
    expect(functions.isEmail("45x@7890.casd")).toBe(false);
});

//3

test('isStrongPassword() true1', () => {
    expect(functions.isStrongPassword("A12345")).toBe(true);
});

test('isStrongPassword() true2', () => {
    expect(functions.isStrongPassword("abcd")).toBe(true);
});

test('isStrongPassword() false1', () => {
    expect(functions.isStrongPassword("1A2345")).toBe(false);
});

test('isStrongPassword() false2', () => {
    expect(functions.isStrongPassword("ABC*")).toBe(false);
});

//4

test('isDate() true1', () => {
    expect(functions.isDate("11/14/2020")).toBe(true);
});

test('isDate() true2', () => {
    expect(functions.isDate("1/1/2021")).toBe(true);
});

test('isDate() false1', () => {
    expect(functions.isDate("1/1/11")).toBe(false);
});

test('isDate() false2', () => {
    expect(functions.isDate("90/23/12312")).toBe(false);
});

//5

test('isHexColor() true1', () => {
    expect(functions.isHexColor("111")).toBe(true);
});

test('isHexColor() true2', () => {
    expect(functions.isHexColor("FFF")).toBe(true);
});

test('isHexColor() false1', () => {
    expect(functions.isHexColor("GGG")).toBe(false);
});

test('isHexColor() false2', () => {
    expect(functions.isHexColor("1234567890")).toBe(false);
});