import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)

  function handlePrevClick() {
    setIndex((prev) => (prev - 1) % people.length)
  }
  function handleNextClick() {
    setIndex((prev) => (prev + 1) % people.length)
  }
  function randomPerson() {
    let randomNum = Math.floor(Math.random() * people.length)
    if (randomNum === index) {
      randomNum = (index + 1) % people.length
    }
    setIndex(randomNum)
  }
  const person = people[index]
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={person.image} alt={person.name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{person.name}</h4>
        <p className="job">{person.job}</p>
        <p className="info">{person.text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrevClick}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNextClick}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          {' '}
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App
