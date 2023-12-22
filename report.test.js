const { html } = require('parse5')
const {sortPages} = require('./report.js')
const {test, expect} = require('@jest/globals')

test('sort1',()=>
{
    const input = {
        'https://wagslane.dev/path':1,
        'https://wagslane.dev':3

    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev',3],
        ['https://wagslane.dev/path',1]
    ]
    expect(actual).toEqual(expected)
})


test('sort1',()=>
{
    const input = {
        'https://wagslane.dev/path':1,
        'https://wagslane.dev':3,
        'https://wagslane.dev/path2':8,
        'https://wagslane.dev/path3':2

    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev/path2',8],
        ['https://wagslane.dev',3],
        ['https://wagslane.dev/path3',2],
        ['https://wagslane.dev/path',1]

    ]
    expect(actual).toEqual(expected)
})