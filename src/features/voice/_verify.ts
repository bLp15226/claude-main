import { interpret } from './commands'
import { interpretFamily } from './familyCommands'
import { PERSONAS } from './personas'

const arnold = PERSONAS.find((p) => p.id === 'coach-arnold')!
const kurt = PERSONAS.find((p) => p.id === 'method-kurt')!

console.log('--- Workouts (Arnold) ---')
console.log(interpret('hey arnold, add bench press', arnold))
console.log(interpret('hey arnold, add bench press', arnold)) // twice: check catchphrase varies
console.log(interpret('coach, how am I doing', arnold))
console.log(interpret('coach, another set', arnold)) // no lastExercise -> should clarify
console.log(interpret('coach, another set', arnold, { lastExercise: 'Bench Press' }))
console.log(interpret('coach, what is the meaning of life', arnold))

console.log('--- Family (Kurt) ---')
console.log(interpretFamily('hey kurt, add a task to call the dentist', kurt))
console.log(interpretFamily('hey kurt, add a monthly goal to plan the trip', kurt))
console.log(interpretFamily('hey kurt, add a weekly goal to clean the garage', kurt))
console.log(interpretFamily('hey kurt, mark the dentist task done', kurt))
console.log(interpretFamily("hey kurt, what's on my list", kurt))
console.log(interpretFamily('hey kurt', kurt))
console.log(interpretFamily('hey kurt, do a backflip', kurt))
