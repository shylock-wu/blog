import { definePlumeNotesConfig } from 'vuepress-theme-plume'
import interviewQuestion from './interview-question.js'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [interviewQuestion],
})
