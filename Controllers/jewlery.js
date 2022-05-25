const jewelryQuery = require("../Model/jewleryQuery")

const keyword = async (req, res) => {
    try {
        let keyword = await jewelryQuery.keyword()
        let category = await jewelryQuery.category()
        let keywords = await jewelryQuery.keywords()
        for (i of category) {
            let a = i.categoryId;
            i.keywords = []
            for (j of keywords) {
                console.log(j);
                if (a == j.keywordsId) {
                    i.keywords.push(j)
                }
            }
            let totalVolume = 0
            let totalDifficulty = 0

            for (l of i.keywords) {
                totalVolume += l.searchVolume;
                totalDifficulty += l.keywordDifficulty
                keywordDifficulty = totalDifficulty / i.keywords.length
                console.log(keywordDifficulty);

            }
            console.log(keywordDifficulty);
            const matrics = {
                "noOfKeywords": i.keywords.length,
                "totalVolume": totalVolume,
                "keywordDifficulty": keywordDifficulty,
            }
            i.metrics = matrics
        }
        let totalVolume = 0
        let totalDifficulty = 0
        for (l of keywords) {
            totalVolume += l.searchVolume;
            totalDifficulty += l.keywordDifficulty
            keywordDifficulty = totalDifficulty / i.keywords.length

        }
        const metrics = {
            "noOfKeywords": keywords.length,
            "totalVolume":totalVolume,
            "totalDifficulty":totalDifficulty,
            "keywordDifficulty":keywordDifficulty

        }

        keyword[0].category = category
        keyword[0].metrics = metrics
        keyword[0].keywords = keywords
        let data = keyword[0]
        res.status(200).send(data)
    } catch (err) {
        console.log(err);
        res.status(err.status || 500).send({
            "success": false,
            "message": err.message || "Internal Server Error",
        });
    }
}

module.exports = {
    keyword
}