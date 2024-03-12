import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import './imprint.css';

const Imprint = ({ setShowRootComponents }) => {
  useEffect(() => {
    setShowRootComponents(false);
    return () => setShowRootComponents(true);
  }, [setShowRootComponents]); 

  return (
    <div className='guur_imprint-container '>

    <h1>
      <b>Unser Impressum</b>
    </h1>
    <div>
      <h3>
        <b>Allgemeine Informationen nach § 5 Telemediengesetz</b>
      </h3>
      <b>Anschrift:</b>
      <br />
      <b>Guur</b>
      <br />
      <b>Urantuul Khorloo</b>
      <br />
      Dülmener Weg 7B
      <br />
      51519 Odenthal
      <br />
      Tel.: +49 2174 7913 267
    </div>
    <p>
      E-Mail: hello@guurhlp.com
      <br />
      Web:  www.guurhlp.com
      <br />
      Dülmener Weg 7B
      <br />
      51519 Odenthal
      <br />
      Tel.: +49 2174 7913 267
    </p>
    <p>
      Verantwortlich für den Inhalt:
      <br />
      Urantuul Khorloo
      <br />
      Inhaber:
      <br />
      Urantuul Khorloo
    </p>
    <p>
      Steuernummer: 147/5170/3682
    </p>
    <p>
      Konzeption und Realisierung
      <br />
      <img className='guur_imprint-logo'
        src={logo}
        alt='logo'
      />
    </p>
    <p>
      Tuul Khorloo
      <br />
      Dülmener Weg 7B
      <br />
      51519 Odenthal
    </p>
    <p>
      Email: hello@guurhlp.com
      <br />
      Web: www.guurhlp.com
    </p>
    <p>
      <b>Rechtliche Hinweise:</b>
      <br />
      <b>1. Inhalt des Onlineangebotes</b>
      <br />
      Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
    </p>
    <p>
      <b>2. Verweise und Links</b>
      <br />
      Bei direkten oder indirekten Verweisen auf fremde Internetseiten (“Links”), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt daher ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren. Der Autor hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
    </p>
    <p>
      <b>3. Urheber- und Kennzeichenrecht</b>
      <br />
      Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluß zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nichtgestattet.
    </p>
    <p>
      <b>4. Rechtswirksamkeit dieses Haftungsausschlusses</b>
      <br />
      Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
    </p>
  </div>
  )
}

export default Imprint;



