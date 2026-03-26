export default async function handler(req, res) {
    const { tag } = req.query;
    const API_KEY = process.env.CLASH_KEY; // راح نضيفه بـ Vercel

    const response = await fetch(`https://api.clashofclans.com/v1/clans/%23${tag}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    const data = await response.json();
    res.status(200).json(data);
}
