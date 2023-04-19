#!/usr/bin/env node

// todo: use import assertions once they're supported by Node.js & ESLint
// https://github.com/tc39/proposal-import-assertions
import {createRequire} from 'module'
const require = createRequire(import.meta.url)

import {createReadStream, createWriteStream} from 'node:fs'
import {copyFile} from 'node:fs/promises'
import _technicalDocsCli from '@derhuerst/technical-docs-cli'
const {
	createMarkdownRenderer,
	determineSyntaxStylesheetPath,
} = _technicalDocsCli

const GOATCOUNTER_SITE_CODE = process.env.GOATCOUNTER_SITE_CODE || null
const HOSTNAME = process.env.HOSTNAME || null
if (GOATCOUNTER_SITE_CODE && !HOSTNAME) {
	console.error('missing/empty $HOSTNAME env var')
	process.exit(1)
}

const SYNTAX_STYLESHEET_URL = '/syntax.css'
const SYNTAX_STYLESHEET_SRC = determineSyntaxStylesheetPath('github')
const SYNTAX_STYLESHEET_DEST = 'docs/syntax.css'

const markdownRenderingCfg = {
	inlineHtml: true,
	syntaxStylesheetUrl: SYNTAX_STYLESHEET_URL,
	additionalHeadChildren: (h) => {
		if (!GOATCOUNTER_SITE_CODE) return []
		return [
			h('script', `
if (window.location.host !== ${JSON.stringify(HOSTNAME)}) {
    window.goatcounter = {no_onload: true}
}
`),
			h('script', {
				src: '//gc.zgo.at/count.js',
				async: true,
				'data-goatcounter': `https://${GOATCOUNTER_SITE_CODE}.goatcounter.com/help/start`,
			}),
		]
	},
}
{
	const src = 'docs/readme.md'
	const dest = 'docs/index.html'
	console.info(`rendering Markdown file ${src} to HTML file ${dest}`)

	const srcPath = new URL(src, import.meta.url).pathname
	const destPath = new URL(dest, import.meta.url).pathname
	// unfortunately, we can't use stream.pipeline right now
	// see https://github.com/unifiedjs/unified-stream/issues/1
	await new Promise((resolve, reject) => {
		createReadStream(srcPath)
		.once('error', reject)
		.pipe(createMarkdownRenderer(markdownRenderingCfg))
		.once('error', reject)
		.pipe(createWriteStream(destPath))
		.once('error', reject)
		.once('finish', resolve)
	})
}

{
	const srcPath = SYNTAX_STYLESHEET_SRC
	const destPath = new URL(SYNTAX_STYLESHEET_DEST, import.meta.url).pathname
	console.info(`copying syntax stylesheet from ${srcPath} to ${destPath}`)
	await copyFile(srcPath, destPath)
}
