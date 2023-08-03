import { estGHmot } from '../src/générateur-réponse'

describe('estGHmot', () => {
    it('retourne true si la chaîne correspond à un GHmot', () => {
        expect(estGHmot('GhgHGhghgHgh')).toBe(true)
        expect(estGHmot('ghghghghgh')).toBe(true)
        expect(estGHmot('ghghghghghGH')).toBe(true)
        expect(estGHmot('GHghghghgh')).toBe(true)
        expect(estGHmot('ghghghgh')).toBe(true)
        expect(estGHmot('gHgHgHgH')).toBe(true)
        expect(estGHmot('Hui')).toBe(true)
        expect(estGHmot('Huihui')).toBe(true)
        expect(estGHmot('hui')).toBe(true)
        expect(estGHmot('Bhui')).toBe(true)
        expect(estGHmot('bhui')).toBe(true)
    })

    it('retourne false si la chaîne ne correspond pas à un GHmot', () => {
        expect(estGHmot('Guilhem')).toBe(false)
        expect(estGHmot('gg')).toBe(false)
        expect(estGHmot('hh')).toBe(false)
        expect(estGHmot('oui')).toBe(false)
        expect(estGHmot('gagner')).toBe(false)
        expect(estGHmot('huissier')).toBe(false)
        expect(estGHmot('')).toBe(false)
    })
})
