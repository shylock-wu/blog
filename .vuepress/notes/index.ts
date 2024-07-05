import { definePlumeNotesConfig } from 'vuepress-theme-plume'
import interviewQuestion from './interview-question.js'
import defensiveCss from './defensive-css.js'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [interviewQuestion, defensiveCss],
})
