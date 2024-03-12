import React from 'react'
import './owner.css'


const owner = () => {
  return (
    <div className='guur__owner' id='owner'>

    {/* TOP CONTAINER */}

            <div className='guur__owner-container'>
              
              {/* Guur Header */}

              <div className='guur__owner-header'>

                  {/* PARAGRAPH 1 */}

                  <div className='guur__owner-quote-container'>     
                      <div className='guur__owner-header-row-1 '>
                        <hr/>
                        <h2>Wir über uns</h2>
                      </div>  
                    
                      <div className="guur__owner-quote">
                        <p>
                        Engagement, Qualität, Zufriedenheit und Vertrauen sind für uns wichtige Eckpfeiler in der Zusammenarbeit mit unsere Kunden. Jede Immobilie ist für uns einzigartig und verdient eine individuelle Sichtweise. Die Wünsche unserer Kunden stehen für uns im Mittelpunkt, mit unseren Services möchten wir unseren Kunden in unterschiedlichen Lebenslagen helfen und begleiten.<br></br><br></br>
                        In unserer Vision sind wir einer der führenden Anbieter bei Services rund um Immobilien. <br></br><br></br>
Wir erreichen unserer ambitionierten Ziele nur mit zufriedenen Mitarbeitern. Eine gute Bezahlung, eine Beteiligung am Erfolg dieser Unternehmung und die Möglichkeit sich weiterzuentwickeln, sind für uns selbstverständlich und ein wichtiger Teil unserer Kultur.
  </p>
                        {/* <p></p> */}
                      </div>
                  </div>
                 
              </div>

            </div>
            
  </div>
  )
}

export default owner