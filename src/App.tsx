import { Navigate, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Animals from './pages/Animals'
import AnimalPage from './components/AnimalPage'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='Zoo' element={<Home/>}/>
        <Route path='Zoo/animals' element={<Animals/>}/>
        <Route path='Zoo/animals/panda' element={<AnimalPage
        imageTop = "pandahero.jpg"
        imageBottom = "Pandamutter-mit-Jungem.jpg"
        name = "Panda"
        sciName = "Grosser Panda (Ailuropoda melanoleuca)"
        endangered = "Verletzlich"
        popultaion = "1864 Individuen (Stand 2015)."
        weight = "bis zu 125 kg"
        size = "1,2 m – 1,8 m"
        text1 = {`Der Grosse Panda ist unser Wappentier und die unverkennbare Ikone des Artenschutzes.
        Bei der Geburt ist er zwar gerade mal so schwer wie eine Tafel Schokolade.
        Doch schnell entwickelt er sich zum Bären mit der typischen schwarz-weissen Fellzeichnung.`}
        
        text2 = {`Trotz seines Raubtier-Darmtrakts ernährt sich der Grosse Panda fast ausschliesslich von Bambus (über 99 Prozent).
        Wo kein Bambus wächst, kann der Panda nicht überleben. Zwischen 9 und 18 Kilo braucht ein Pandabär am Tag.
        Er muss so viel fressen, da Bambus sehr nährstoffarm ist. Eine anatomische Besonderheit hilft dem Panda beim Verzehr seiner Lieblingsspeise:
        Ein verlängerter Handwurzelknochen an den Vorderpfoten – ein sogenannter Pseudodaumen – lässt den Bären seine Leibspeise besser greifen.
        Ein echter Vegetarier also? Nicht ganz: Gelegentlich stehen auch kleine Säugetiere auf dem Speiseplan – wenn er sie denn erwischt.
        Der Panda braucht einen intakten Wald. Der Wald spielt auch für die lokale Bevölkerung eine wichtige Rolle:
        Als Einkommensquelle und als Lieferant für Brennholz, um die Häuser warm zu halten und Essen zu kochen.
        Damit den bedrohten Arten nicht noch weiterer Lebensraum entzogen wird, erarbeiten wir mit den Menschen vor Ort ösungen für eine nachhaltige Holznutzung.`}
        titlebottom = "BEDROHT DURCH SCHWINDENDE LEBENSRÄUME"

        textbottom = {`Der Bestand der Grossen Pandas ist seit der letzten Zählung im Jahr 2004 um 17 Prozent gewachsen.
        Doch 1860 Grosse Pandas in freier Wildbahn sind immer noch nicht viele. Der Schwund ihres Lebensraums macht es ihnen immer schwerer, zueinanderzufinden.
        Die meisten Pandabären leben heute in wenigen, schmalen Waldgürteln, die durch Äcker, Strassen und Siedlungen voneinander getrennt sind`}
        />}/>
        <Route path='Zoo/animals/polarbear' element={<AnimalPage
        imageTop = "polarbearhero.jpg"
        imageBottom = "Zwei-neugierige-Eisbaeren.jpg"
        name = "Eisbär"
        sciName = "Eisbär (Ursus maritimus)"
        endangered = "Verletzlich"
        popultaion = "22'000 bis 31'000 Eisbären (IUCN 2016)."
        weight = "150 - 650 kg"
        size = "1,8 - 2,8 m"
        text1 = {`Die Erscheinung des Eisbärs täuscht: Sein Fell, das im Licht weiss oder gelblich erscheint, ist eigentlich durchsichtig.
        Auf diese Weise gelangen die Strahlen der Sonne direkt auf seine schwarze Haut und wärmen ihn.`}

        text2 = {`Eisbären stehen an der Spitze der Nahrungskette am Nordpol und haben dadurch eine wichtige Rolle
        im Ökosystem des Polarkreises. Allerdings wird das Packeis, auf dem sie hauptsächlich leben, aufgrund
        der Klimaerwärmung Jahr für Jahr kleiner. So können die Eisbären ihre bevorzugte Beute, die Robben,
        in einem immer kürzeren Abschnitt jagen und müssen sich aufs Festland zurückziehen. 
        ort finden sie wenig Nahrung, was für viele Tiere ein immer grösser werdendes Problem darstellt.
        Vor allem auch für trächtige Tiere. Denn gerade sie brauchen grosse Fettreserven, um selbst überleben
        zu können und Junge zu gebären. Eisbärweibchen sind nur alle drei Jahre fruchtbar.
        Nach der Paarungszeit im Frühling kommen zwischen November und Januar die Jungen in Schneehöhlen zur Welt:
        blind und so klein wie Meerschweinchen. Die Existenz der Eisbären ist von vielen Seiten bedroht:
        kürzere Kälteperioden, Ölförderung, schwindende Lebensräume. Der WWF engagiert sich stark für eine
        Reduktion der Treibhausgasemissionen und arbeitet mit der lokalen Bevölkerung, zum Schutz des Königs der Arktis.`}

        titlebottom = "IHRE ANZAHL SINKT"
        textbottom = {`Experten vermuten, dass die Anzahl der Eisbären bis 2050 um 30 Prozent zurückgehen wird. 
        Die wichtigste Ursache liegt im Schmelzen des Packeises, einer direkten Folge der Klimaerwärmung. 
        Aber auch sonst ist die Hauptbedrohung der Mensch.`}
        />}/>
        <Route path='Zoo/animals/tiger' element={<AnimalPage
        imageTop = "tigerhero.jpg"
        imageBottom = "tiger fell streifen.jpg"
        name = "Tiger"
        sciName = "Tiger (Panthera tigris)"
        endangered = "Stark gefährdet"
        popultaion = "4900 Individuen"
        weight = "75 – 325 kg"
        size = "1,5 – 2,9 m"
        text1 = {`Sein typisches Streifenmuster, seine Grösse und seine kraftvolle Erscheinung machen den Tiger einzigartig.
        Die Zerstörung seines Lebensraums und massive Wilderei haben dazu geführt, dass er beinahe ausgerottet wurde.
        Aber es gibt Hoffnung, denn die Bestände der grössten Raubkatze erholen sich seit ein paar Jahren.`}

        text2 = {`Im europäischen Kulturraum verehrt man den Löwen als König der Tiere.
        In Asien besetzt der Tiger seit jeher den Superlativ im Tierreich.
        Er wird als Herrscher aller Tiere, König des Dschungels oder Zar der Taiga bezeichnet.
        Der Tiger symbolisiert Macht und Stärke.
        Sein typisches Streifenmuster macht ihn unverwechselbar.

        Der Tiger ist ein faszinierendes Beispiel dafür, wie sich Tiere an ihre Umgebung anpassen können: Man findet ihn sowohl in den schneebedeckten Wäldern Ostrusslands als auch tief im indonesischen Dschungel.
        Trotz seiner Grösse bewegt er sich beinahe lautlos durch seinen Lebensraum und kann sich so an seine Beute anpirschen, bevor er zum Angriff übergeht.
        Leider zerstört der Mensch seinen Lebensraum und dezimiert seine Beutetiere immer mehr.
        Gepaart mit der Wilderei führte dies dazu, dass die grösste aller Raubkatzen fast von unserem Planeten verschwand.
        Eine dramatische Entwicklung, die aber auch zu entschiedenem Handeln veranlasste.
        Auf der Tigerkonferenz in St.
        Petersburg im Jahr 2010 setzten sich der WWF und die 13 Tiger-Staaten ein ambitioniertes Ziel: Die Anzahl wildlebender Tiger bis 2022 zu verdoppeln.

        Das ambitionierte Ziel ist noch nicht erreicht, aber es gibt Hoffnung: In Nepal, Indien und Russland steigen die Tigerzahlen.
        Wir arbeiten hartnäckig daran, auch in anderen Ländern die Lebensgrundlagen der Tiger zu verbessern.`}

        titlebottom = "VERDRÄNGT UND GEJAGT"
        textbottom = {`Die grössten Bedrohungen für den Tiger gehen vom Menschen aus.
        Illegale Abholzung und Infrastruktur-Projekte zerstören seinen Lebensraum.
        Wilderer töten ihn gezielt auch noch in seinen letzten Rückzugsgebieten. 
        Nur eine umfassende Schutzstrategie kann ihn retten.`}
        />}/>
        <Route path='Zoo/animals/turtle' element={<AnimalPage
        imageTop = "turtlehero.jpg"
        imageBottom = "Junge-Meeresschildkroeten-Wanderung.jpg"
        name = "Meeresschildkröten"
        sciName = "Meeresschildkröten (Cheloniidae)"
        endangered = "Stark gefährdet"
        popultaion = "Keine gesicherten Zahlen."
        weight = "bis zu 200 Kilogramm"
        size = "70 cm – 2 m"
        text1 = {`Auf ihren Reisen durch die Ozeane legen Meeresschildkröten tausende Kilometer zurück.
         Wie sie dabei navigieren, ist weitgehend unbekannt.
         Noch vor 200 Jahren bevölkerten Millionen die Ozeane.
         Auch heute noch kommen sie weltweit in allen tropischen und subtropischen Meeren vor, 
         aber ihre Bestände sind in den letzten 100 Jahren dramatisch gesunken.`}

        text2 = {`Meeresschildkröten sind die ältesten noch lebenden Reptilien.
         Sie bewohnen seit 225 Millionen Jahren die Weltmeere und haben sich seitdem physisch kaum verändert.
         Von den heute noch existierenden sieben Arten ist die Lederschildkröte, die eine eigene Art bildet, die grösste.
         Sie hat eine Panzerlänge von bis zu zwei Metern und wiegt durchschnittlich 500 Kilogramm.
         Bastardschildkröten sind mit 70 Zentimetern Länge und 50 Kilogramm Gewicht die kleinste Art.

         Die Urtiere verbringen ihr ganzes Leben als Einzelgänger im Meer.
         Einzig zur Paarung finden sie zusammen.
         Die Weibchen kommen alle zwei bis drei Jahre für die Eiablage an Land.
         Manche durchqueren ganze Ozeane dafür.
         Ihr Ziel ist stets das gleiche: der Strand, an dem sie selbst geschlüpft sind.
         Dort legen sie je nach Art 50 bis 200 Eier in eine Sandgrube, oft bis zu drei Mal während einer einzelnen Nistsaison.
         Plündern Menschen oder Tiere die Nester nicht, schlüpfen die Jungen nach knapp zwei Monaten und begeben sich auf die beschwerliche Reise ins Wasser.
         Sie sind dabei leichte Beute für hungrige Vögel oder Krabben.
         Einmal im Meer angekommen, stellen den kleinen Schwimmern Raubfische nach.
         So entwickelt sich von 1000 Eiern nur durchschnittlich eines zu einer ausgewachsenen Meeresschildkröte.`}

        titlebottom = "BEGEHRT, GEJAGT, BEDROHT"
        textbottom = {`Heute werden sechs von sieben Arten von der IUCN auf der Roten Liste geführt 
        und sind durch das Washingtoner Artenschutzabkommen Cites vom kommerziellen internationalen Handel ausgeschlossen. 
        Trotzdem hat die Nachfrage nach Fleisch, Eiern und Panzern nicht abgenommen. Viele Populationen stehen kurz vor der Ausrottung.`}
        />}/>
        <Route path='Zoo/aboutUs' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>    
  )
}

export default App
