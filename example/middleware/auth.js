const apiKeys = [
    '7BTxHCyHhzIME5TI',
    'ngfeNG1iaq9Q2PJK',
    'zaCmZA74PLKCrD8Y',
    'KwOi5vm2TYNmi8Dd',
    'edVCa1E6zDZRztaq'
];

function auth(request, response, next) {
    const apiKey = request.headers['api-key'];

    // Om api nyckel finns och finns med i ovan array
    if (apiKey && apiKeys.includes(apiKey)) {
        next() // Gå vidare till nästa funktion i rout:en
    } else {
        response.json({ error: 'Access denied!' });
    }
}

module.exports = { auth }