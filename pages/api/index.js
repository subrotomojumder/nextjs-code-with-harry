

const data = [
    {
        name: "Akash",
        role: 55
    },
    {
        name: "Bijoy",
        role: 11
    },
]

export default function handler (req, res){
    res.status(200).json(data)
}