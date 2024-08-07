/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Basic JavaScript App', () => {
    let document;

    beforeAll(() => {
        // Load the HTML document
        document = new DOMParser().parseFromString(
            fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8'),
            'text/html'
        );

        // Load and execute the script
        require('../src/script')(document);
    });

    test('button click should show an alert', () => {
        // Mock the alert function
        global.alert = jest.fn();

        // Get the button element and click it
        const button = document.getElementById('myButton');
        button.click();

        // Check if alert was called
        expect(global.alert).toHaveBeenCalledWith('Button clicked!');
    });
});
