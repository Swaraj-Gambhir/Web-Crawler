const { html } = require('parse5')
const {normalizeURL,getURLsFromHTML} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL',()=>
{
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing ',()=>
{
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizeURL strip capitals',()=>
{
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL http',()=>
{
    const input = 'http://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute URLS',()=>
{
    const inputHTMLBODY = `
    <html>
        <body>
            <a href='https://blog.boot.dev'>
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBODY,inputBaseURL)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative url',()=>
{
    const inputHTMLBODY = `
    <html>
        <body>
            <a href='/path/'>
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBODY,inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative url',()=>
{
    const inputHTMLBODY = `
    <html>
        <body>
            <a href='invalid'>
                Invalid URL
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBODY,inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})