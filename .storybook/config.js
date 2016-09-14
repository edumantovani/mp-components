import {configure} from '@kadira/storybook'

function loadStories() {
  require('../stories/Button')
  require('../stories/Input')
  require('../stories/InlineAlert')
  require('../stories/Link')
  require('../stories/Node')
  require('../stories/CategoryNode')
  require('../stories/CategoryForm')
  require('../stories/VerticalCard')
  require('../stories/HorizontalCard')
}

configure(loadStories, module)
