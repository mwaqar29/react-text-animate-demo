import { useCallback } from 'react'
import { sentences, words } from '../constants'

export const useTextGenerator = (initIdx = 0) => {
  // Generator function for words
  function* createWordGenerator() {
    let idx = initIdx || 0
    while (idx < words.length) {
      yield words[idx]
      idx += 1
    }
  }

  // Generator function for sentences
  function* createSentenceGenerator() {
    let idx = initIdx || 0
    while (idx < sentences.length) {
      yield sentences[idx]
      idx += 1
    }
  }

  // Create generators
  const wordGen = createWordGenerator()
  const sentenceGen = createSentenceGenerator()

  // Functions to get the next word/sentence
  const getNextWord = useCallback((): string => {
    const { value, done } = wordGen.next()
    if (!done) return value
    return 'DEFAULT'
  }, [wordGen])

  const getNextSentence = useCallback((): string => {
    const { value, done } = sentenceGen.next()
    if (!done) return value
    return 'DEFAULT SENTENCE'
  }, [sentenceGen])

  return { getNextWord, getNextSentence }
}
