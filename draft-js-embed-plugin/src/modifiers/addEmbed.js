import {
  Entity,
  EditorState,
  AtomicBlockUtils
} from 'draft-js'

export default (editorState, url) => {
  const urlType = 'embed'
  const entityKey = Entity.create(urlType, 'IMMUTABLE', { src: url })
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  )
  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  )
}
