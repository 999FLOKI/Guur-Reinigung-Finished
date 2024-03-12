import React from 'react';
import './brand.css';
import kitchen from '../../assets/kitchen.png';




const Brand = () => {
  return (
    <div className='guur__brand'>
            

      {/* Guur header */}
              
              <div className='guur__brand-top-container'>
                  <hr className='guur__brand-hr' />
                  <h2>Bei Guur legen wir Wert auf</h2>
              </div>


      {/* TOP CONTAINER */}

              <div className='guur__brand-container'>

                {/* Guur Image */}

                <div className="guur__brand-image">
                  <img src={kitchen} alt="kitchen" />
                </div>

                {/* Guur Header */}

                <div className='guur__brand-header'>

                    {/* PARAGRAPH 1 */}

                    <div className='guur__brand-header-paragraph'>     
                        <div className='guur__brand-header-row-1'>
                          <hr/>
                          <h2>Qualität</h2>
                        </div>   
                      
                        <div className="guur__brand-header-row-2">
                          <p>Wir achten bei jedem Auftrag genau auf die Details. Wir sind bestrebt, die individuellen Bedürfnisse jedes Kunden mit dem höchsten Maß an Service, Qualität und Zufriedenheit zu erfüllen</p>
                        </div>
                    </div>

                      {/* PARAGRAPH 2 */}

                      <div className='guur__brand-header-paragraph'>     

                            <div className='guur__brand-header-row-1'>
                              <hr/>
                              <h2>Zufriedenheit</h2>
                            </div>
                                  
                            <div className="guur__brand-header-row-2">
                              <p>Die Zufriedenheit unserer Kunden hat bei uns höchste Priorität und ist unser höchster Anspruch in der Erbringung unserer Dienstleistungen. Nur zufriedene Kunden werden unsere Services immer wieder in Anspruch nehmen.</p>
                            </div>
                      </div>

                      {/* PARAGRAPH 3 */}             
                      
                      <div className='guur__brand-header-paragraph'>     

                          <div className='guur__brand-header-row-1'>
                              <hr/>
                              <h2>Vertrauen</h2>
                            </div>

                          <div className="guur__brand-header-row-2">
                            <p>Durch unsere Arbeit, unser Qualitätsversprechen und durch die Zufriedenheit mit unseren Leistungen, bauen wir Vertrauen zu unseren Kunden auf.</p>
                          </div>
                      </div>
                  
                </div>
                

              </div>
              
    </div>

  )
}

export default Brand;
