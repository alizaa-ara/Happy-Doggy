import React from 'react'
import { postWalkerDetails } from '../apiClient'
import { useParams } from 'react-router-dom'

function Walker() {
  // const location = useLocation()
  const dogID = useParams()
  // console.log(location.pathname)
  console.log(dogID)

  // const [Experience, setExperince] = useState('')

  // useEffect(() => {
  //   postWalkerDetails().catch((err) => {
  //     console.error(err.message)
  //   })
  // }, [])

  function handleSubmit(event) {
    event.preventDefault()

    const experience = event.currentTarget.elements.experience.value
    const walkerReason = event.currentTarget.elements.walkerReason.value
    // console.log(
    //   'experience is - ' +
    //     experience +
    //     ' ...and walkerReason is - ' +
    //     walkerReason
    // )
    const submitWalkerObj = {
      experience: experience,
      walkerReason: walkerReason,
    }

    // console.log(submitWalkerObj)
    postWalkerDetails(submitWalkerObj).catch((err) => {
      console.error(err.message)
    })
  }
  return (
    <>
      {console.log(dogID)}
      <h1 className="heading heading-tertiary">
        Tell us more about your Dog walking experience
      </h1>{' '}
      <br /> <br />
      <br />
      <div className="card-container">
        <div className="card card-owner">
          <img
            className="card-img"
            src={'../server/public/images/' + dogID.id + '.jpg'}
            alt="doggy"
          />
          <form onSubmit={handleSubmit}>
            <section className="flex flex-col gap-4">
              <br /> <br />
              <label htmlFor="review">
                {' '}
                <h2>
                  Why I want to walk this Happy Doggy, and my experience with
                  dogs.
                </h2>
              </label>
              <div>
                <textarea
                  rows="4"
                  cols="50"
                  name="walkerReason" //pls double check this field name from database
                  placeholder="I would love to walk this dog because...."
                ></textarea>
              </div>
              {/* functixon clickAlert(){' '}
          {alert('Woof Woof! Thank you for choosing me. We will be in touch!')} */}
              <input
                type="button"
                onClick={() => {
                  alert(
                    'Woof Woof!! Thank you for choosing me. We will be in touch!'
                  )
                }}
                value="Walk with me!"
              ></input>
              {/* <button type="submit" className="button">
            Submit
          </button> */}
            </section>
          </form>{' '}
        </div>
      </div>
    </>
  )
}

export default Walker