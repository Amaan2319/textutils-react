import React,{useState} from 'react'

export default function About() {

  let [myStyle, setMystyle] = useState(
   { 
    backgroundColor: 'white',
    color: 'black'
  }
  )

  let [btnText, setBtnText] = useState('Enable dark mode');

   let toggleStyle = () => {
      if(myStyle.backgroundColor == 'white'){
        setMystyle({
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid white'
        })

        setBtnText('Enable Light mode')
      }
      else{
        setMystyle({ 
          backgroundColor: 'white',
          color: 'black'
        })

        setBtnText('Enable dark mode')
      }
   }
  
  return (
      <div className='container' >
        <h1>About us</h1> 
        <div className="accordion accordion-flush"  id="accordionFlushExample">
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" style={myStyle} id="flush-headingOne">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="flush-collapseOne" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" style={myStyle} id="flush-headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" style={myStyle} id="flush-headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
  </div>

  <button onClick={toggleStyle}  className="btn my-3 btn-primary">{btnText}</button>

      </div>
  )
}
