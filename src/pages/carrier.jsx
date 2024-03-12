import React, { useEffect } from 'react';
import './module.css';
import './carrier.css'

const Carrier= ({ setShowRootComponents }) => {
  useEffect(() => {
    setShowRootComponents(false);

    window.scrollTo(0,0)
    return () => setShowRootComponents(true);
  }, [setShowRootComponents]);


  return (
    <div className='contact-us-big-container'>
      <div className='contact-us-small-container'>
          <div className='div__guur'>    
            <h1 className='pagesH1'>Job gesucht ?</h1>
            
            <p className='carrier__list__header'>Wir suchen:</p>

            <p className='carrier__disc'>Neue Mitarbeiterinnen und Mitarbeiter für unseren Bereich Reinigungs- und Immobilienservice. Für uns geht es um mehr als nur Reinigung. Wir suchen Mitarbeiterinnen und Mitarbeiter mit Bewusstsein für ein vertrauensvolles Miteinander mit unseren Kunden, hohe Qualitäts- und Serviceorientierung, Engagement und Flexibilität. </p>
             
            <p>Vollzeit, Teilzeit und geringfügige Beschäftigung (Minijob)</p>

            <div className='carrier__list'>
                <ul className='carrier__list__item'>
                    <li><div className='dot'></div>Bereich Garten</li>
                    <li><div className='dot'></div>Alltagsbegleiter</li>
                    <li><div className='dot'></div>Reinigungskraft</li>
                </ul>
            </div>


            <div className='carrier__list'>

                    <p className='carrier__list__header'>Wir bieten:</p>      
                    <ul className='carrier__list__item'>
                        <li><div className='dot'></div>Eine überdurchschnittliche Bezahlung,</li>
                        <li><div className='dot'></div>Beteiligung am Erfolg,</li>
                        <li><div className='dot'></div>Weiterentwicklungs möglichkeiten.</li>
                    </ul>
            </div>

            <p className='carrier__wilkommen'>Willkommen in der Guur Familie</p>
            <p>Interesse geweckt ? dann reichen Sie uns die Bewerbung und Lebenslauf ein. Wir melden uns schnell wie möglich.</p>
            
            <div className='guur__CTA-button2'>
                  <a href="mailto:hello@guurhlp.com">
                      <button className='guur__CTA-text2-button'>
                        Jetzt Bewerben!
                      </button>
                  </a>
              </div>
          </div>
    
        </div>
      </div>
  )


}

export default Carrier;