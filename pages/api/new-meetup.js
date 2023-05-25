//  domain/api/new-meetup

// only POST request trigger this route
function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const { title, image, address, description } = data
    }
}

export default handler