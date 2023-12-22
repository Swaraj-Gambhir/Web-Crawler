const {crawlPage} =require('./crawl.js')
const {printReport} = require('./report.js')

async function main()
{
    if(process.argv.length<3)
    {
        console.log("No website Provided")
        process.exit(1)
    }
    if(process.argv.length>3)
    {
        console.log("Too many arguments")
        process.exit(1)
    }
    const baseURL = process.argv[2]
    const pages= await crawlPage(baseURL, baseURL,{})
    printReport(pages)
}

main()