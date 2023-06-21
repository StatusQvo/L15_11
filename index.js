class Dictionary {
  #name
  #words
  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  set mainName(name) {
    this.#name = name
  }

  get mainName() {
    return this.#name
  }

  get allWords() {
    return this.#words
  }

  add(word, description) {
    if (!this.#words[word]) {
      const newWord = { word, description }
      this._addNewWord(word, newWord)
    }
  }

  _addNewWord(keyWord, wordObj) {
    this.#words[keyWord] = wordObj
  }

  get(word) {
    if (this.#words[word]) {
      return word + ' - ' + this.#words[word]
    } else {
      console.log(`${word} нет в словаре`)
    }
  }

  remove(word) {
    if (this.#words[word]) {
      delete this.#words[word]
    } else {
      console.log(`${word} нет в словаре`)
    }
  }

  showAllWords() {
    let resultArr = ''
    Object.values(this.#words).forEach((elt) => {
      resultArr += `${elt.word} - ${elt.description} \n`
    })

    console.log(resultArr)
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.allWords[word]) {
      this._addNewWord(word, { word, description, isDifficult: true })
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)

hardWordsDictionary.remove('неологизм')

hardWordsDictionary.showAllWords()

console.log(hardWordsDictionary.mainName) // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь'
console.log(hardWordsDictionary.mainName) // Новый Словарь
console.log(hardWordsDictionary.allWords) // выводит объект в котором есть слова
// дилетант и квант
