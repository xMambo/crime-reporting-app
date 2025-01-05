const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Replace with your target URL
    await page.goto("https://data.nashville.gov/datasets/Nashville::metro-nashville-police-department-active-dispatch/explore", { waitUntil: "networkidle2" });

    // Scrape the table
    const tableData = await page.evaluate(() => {
        const tableRows = document.querySelectorAll(
            "#main-region > div > div.infinite-scroll-feature-table > div > table > tbody > tr"
        );

        // Extract all rows and cells
        const rows = [];
        tableRows.forEach((row) => {
            const cells = row.querySelectorAll("td");
            const rowData = [];
            cells.forEach((cell) => {
                rowData.push(cell.innerText.trim());
            });
            rows.push(rowData);
        });

        return rows;
    });

    console.log(tableData);

    await browser.close();
})();
