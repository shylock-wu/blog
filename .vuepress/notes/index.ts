import { definePlumeNotesConfig } from 'vuepress-theme-plume'
import interviewQuestion from './interview-question.js'
import defensiveCss from './defensive-css.js'
import commonCommands from './common-commands.js'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [interviewQuestion, defensiveCss, commonCommands],
})
