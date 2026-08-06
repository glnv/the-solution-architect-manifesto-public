const fs = require('fs')

async function main() {
    const { marked } = await import('marked')

    const template = fs.readFileSync('index.template.html', 'utf8')
    const md = fs.readFileSync('sam-manifesto.md', 'utf8')

    function splitSections(md) {
        const lines = md.split('\n')
        const out = { intro: [], principles: [], contributors: [] }
        let current = 'intro'
        for (const line of lines) {
            if (/^##\s+Principles/i.test(line)) { current = 'principles'; continue }
            if (/^##\s+Contributors/i.test(line)) { current = 'contributors'; continue }
            if (current === 'intro' && /^#/.test(line)) continue
            out[current].push(line)
        }
        return {
            intro: out.intro.join('\n').trim(),
            principles: out.principles.join('\n'),
            contributors: out.contributors.join('\n'),
        }
    }

    function buildNav(md) {
        const chunks = md.split(/(?=^### )/m).filter(c => c.trimStart().startsWith('### '))
        return chunks.map((chunk, i) => {
            const num = String(i + 1).padStart(2, '0')
            return `<a class="nav__num" href="#p${i + 1}">${num}</a>`
        }).join('\n')
    }

    function buildIntro(md) {
        if (!md) return ''
        // Strip any lines that look like HTML tags or doctype to prevent injection
        const safe = md.split('\n')
            .filter(line => !/<[^>]+>/.test(line) && !/^<!/.test(line.trim()))
            .join('\n')
        return marked.parse(safe)
    }

    function buildPrinciples(md) {
        const chunks = md.split(/(?=^### )/m).filter(c => c.trimStart().startsWith('### '))
        const total = String(chunks.length).padStart(2, '0')
        return chunks.map((chunk, i) => {
            const lines = chunk.split('\n')
            const titleText = lines[0].replace(/^###\s+\d+\.\s*/, '')
            const bodyMd = lines.slice(1).join('\n')
            const num = String(i + 1).padStart(2, '0')
            const id = `p${i + 1}`
            return `
<article class="principle" id="${id}">
  <div class="principle__inner">
    <span class="principle__tag">Principle</span>
    <p class="principle__num">${num} / ${total}</p>
    <h2 class="principle__title">${titleText}</h2>
    <div class="principle__rule"></div>
    <div class="principle__body">${marked.parse(bodyMd)}</div>
  </div>
</article>`
        }).join('\n')
    }

    function buildContributors(md) {
        const lines = md.split('\n')
            .filter(l => /^[-*]/.test(l.trim()));
            
        lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        return lines.map(line => {
                const content = marked.parse(line.replace(/^[-*]\s*/, '')).replace(/<\/?p>/g, '').trim()
                const parts = content.split(/\s*\|\s*/)
                const org = parts[1] ? `<span class="c-org">${parts[1]}</span>` : ''
                return `<li><span class="c-name">${parts[0]}</span>${org}</li>`
            }).join('\n')
    }

    const { intro, principles, contributors } = splitSections(md)

    let output = template
    output = output.replace('<!-- BUILD:nav -->', buildNav(principles))
    output = output.replace('<!-- BUILD:intro -->', buildIntro(intro))
    output = output.replace(/<!-- BUILD:principles -->[\s\S]*?<\/div>/, buildPrinciples(principles) + '\n</div>')
    output = output.replace('<!-- BUILD:contributors -->', buildContributors(contributors))

    // Inline fonts as base64 so they're guaranteed at first paint (no flicker, works offline/file://)
    function fontSrc(path) {
        const b64 = fs.readFileSync(path).toString('base64')
        return `url(data:font/woff2;base64,${b64}) format('woff2')`
    }
    output = output.replace('__FONT_SERIF_SRC__', fontSrc('fonts/source-serif-4-latin-var.woff2'))
    output = output.replace('__FONT_INTER_SRC__', fontSrc('fonts/inter-latin-var.woff2'))

    fs.writeFileSync('index.html', output)
    console.log('Build complete.')
}

main().catch(console.error)