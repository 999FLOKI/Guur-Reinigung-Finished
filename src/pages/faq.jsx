import React, { useEffect, useState } from 'react';
import './module.css';

const Faq = ({ setShowRootComponents }) => {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  useEffect(() => {
    setShowRootComponents(false);
    return () => setShowRootComponents(true);
  }, [setShowRootComponents]);

  const handleQuestionClick = (index) => {
    if (openedQuestion === index) {
      setOpenedQuestion(null);
    } else {
      setOpenedQuestion(index);
    }
  };


  
  // Define faqData with an array of objects containing the FAQ data
  const faqData = [
    { question: 'Welche Dienstleistungen bieten wir an?', answer: `Wir bieten nicht nur eine Vielzahl von Reinigungsdiensten für Haus, Wohnung und Garten an, sondern auch Housekeeping (etwa bei Urlaub und längerer Abwesenheit). Gerne schauen wir auch täglich bei und in Ihren Immobilien nach dem Rechten, um Einbrüchen und Diebstahl vorzubeugen. Auch im Falle eines Umzugs oder bei Entrümpelung helfen wir Ihnen gerne weiter.
    Unser Service umfasst auch Alltagshilfe.` },
    { question: 'Wie viel kosten unsere Dienstleistungen im Bereich der Alltagshilfe?', answer: 'Im Zuge der Entlastungsleistungen Alltagshilfe haben Sie ab Pflegegrad 1 bei Ihrer Pflegekasse Anspruch von monatlich 125 Euro für haushaltsnahe Dienstleistungen. Diese 125 € werden nicht vom Pflegegeld abgezogen, sondern stehen Ihnen zusätzlich zu. ' },
    { question: 'Wie oft können Sie zu mir nach Hause?', answer: 'Wir bieten flexible Reinigungspläne, die sich an die Bedürfnisse unserer Kunden anpassen.' },
    { question: 'Kommt immer die gleiche Reinigungskraft zu mir nach Hause?', answer: 'Wir haben hohe Qualitätsstandards an unserer Arbeit und wissen aber auch, dass Vertrauen gerade in der Kommunikation und Interaktion mit unseren Kunden eine große Rolle spielt. Wie sind bemüht, eine personelle Kontinuität bei unserer Reinigungskräften sicherzustellen, es kann jedoch vorkommen, dass wir unter bestimmten Umständen, z. B. bei Krankheit oder Urlaub, eine andere Reinigungskraft einsetzen müssen.' },
    { question: 'Welche Reinigungsmittel verwenden wir ?', answer: 'Wir verwenden umweltfreundliche Reinigungsprodukte, die für Menschen und Haustiere unbedenklich sind. Wir bieten unseren Kunden auch die Möglichkeit, die bevorzugten Reinigungsprodukte zu verwenden, wenn sie bestimmte Vorlieben oder Allergien haben.' },
    { question: 'Muss ich Reinigungsgeräte oder -mittel bereitstellen?', answer: 'Nein, wir verwenden unsere eigenen Reinigungsgeräte und -mittel. Wenn Sie jedoch bestimmte Reinigungsprodukte oder -geräte haben, die wir verwenden sollten, teilen Sie uns dies bitte mit. Wir berücksichtigen das in unseren Planungen.' },
    { question: 'Kann ich einen Reinigungstermin verschieben?', answer: 'Wir wissen, dass sich Zeitpläne ändern können und wir bemühen uns, so flexibel wie möglich zu sein. Wenn Sie einen Reinigungstermin verschieben müssen, teilen Sie uns dies bitte so bald wie möglich mit, und wir werden gemeinsam mit Ihnen einen neuen Termin vereinbaren. Eine Stornierung muss 24 Stunden im Voraus erfolgen.' },
    { question: 'Sicherheit und Vertrauen', answer: 'Wir nehmen die Sicherheit der uns anvertrauten Immobilien und die Privatsphäre unserer Kunden sehr ernst. Alle unsere Mitarbeiter werden auf ihren Hintergrund überprüft, und wir sorgen dafür, dass nur autorisiertes Personal Zugang zu Ihren Räumlichkeiten hat.' },
    // Add more FAQ data as needed
  ];

  return (
    <div>
       <div className="background">
            <h1 className='pagesBasicStylesFaq pagesH1'>FAQ</h1>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

 
        <div>
          <h1 className='pagesH1Faq'>Häufig gestellte Fragen</h1>
          <hr className="pagesHR" />
            </div>
            <div className='pageFAQContainer pagesFaqBasicStyles'>
              {faqData.map((faq, index) => (
                <div className="faqContainer" key={index}>
                  <h1 onClick={() => handleQuestionClick(index)}>
                    {faq.question}
                    {openedQuestion === index ? (
                      <span className="minusIcon">-</span>
                    ) : (
                      <span className="plusIcon">+</span>
                    )}
                  </h1>
                  {openedQuestion === index && (
                    <p className="faqAnswer answerAnimation">{faq.answer}</p>
                  )}
                </div>
            ))}
        </div>
    </div>
  );
};

export default Faq;
