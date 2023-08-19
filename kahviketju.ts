// Run in kahvilanka.html console.

const authorsPostCounts = {}

document.querySelectorAll('.author').forEach((author) => {
    const authorName = author.innerHTML.trim()
    authorsPostCounts[authorName] = (authorsPostCounts[authorName] || 0) + 1
})

const topAuthors = Object.entries(authorsPostCounts)
    .map(([author, count]) => ({ author, count }))
    .sort((a, b) => b.count - a.count)

for(let i = 0; i < 10; i += 1) {
    console.log(`${i+1}. ${topAuthors[i].author} - ${topAuthors[i].count}`)
}
