export function generateHtml(keyword) {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${keyword}</title>
        </head>
        <body>
            <p>${keyword}</p>
        </body>
        </html>`
    );
}
