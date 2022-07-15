import {strictEqual} from 'assert'
import {hafas} from '../lib/hafas.js'

const ctx = {
	profile: hafas.profile,
	common: {},
	res: {},
	opt: {},
}
const parsedHermannstr = hafas.profile.parseLocation(ctx, {
	type: 'S',
	lid: 'A=1@O=S+U Hermannstr. (Berlin)@X=13431430@Y=52467339@U=86@L=900079221@B=1@p=1637235113@',
	name: 'S+U Hermannstr. (Berlin)',
	extId: '900079221',
	crd: {
		x: 13431430,
		y: 52467339,
	},
	pCls: 11,
})
strictEqual(
	parsedHermannstr.name,
	'S+U Hermannstr. (Berlin)',
	'hafas.profile.parseLocation() should not normalize stop names',
)

console.info('HAFAS client seems to be configured properly ✔︎')
process.exit()
