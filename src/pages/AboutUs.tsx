import React from 'react'

export default function AboutUs() {
  return (
    <div className='px-80 font-semibold'>
        <section className='text-lg my-16'>
            <h1 className='text-3xl mb-8'>About Us</h1>
            Hallo, ich heisse Lorenz Hohermuth und ich bin 16 Jahre alt und habe eine Lehre als 
            Applikationsentwickler bei der <a href="https://www.bsi-software.com/de-ch" className='underline'>BSI</a>.
            <br />
            <br />
            Diese Website hier ist ein Schulprojekt, das und mit Html und Css vertraut machen sollte. 
            Die Aufgabe war: Eine Zoo-Website über ein bestimmtes Thema erstellen sollte, 
            ich habe mich für bedrohte Tiere entschieden.
            Ich habe mich hauptsächlich auf die Seite der <a href="https://www.wwf.ch/de" className='underline'>WWF</a> gestützt.
        </section>
        <section className='text-lg my-16'>
            <h1 className='text-3xl font-semibold mb-8'>Our Vision</h1>
            Elefanten sind die Gärtner des Waldes. Wolf und Luchs fördern gesunde Beutetier-Bestände.
            Pflanzen kühlen das lokale Klima.
            Doch Tiere und Pflanzen sind noch viel mehr: Sie formen unsere Kulturen, beflügeln unsere Mythologie, bilden Lebensgrundlagen und gelten im Umweltschutz als Indikator für den Zustand von Lebensräumen.
            Sie erscheinen uns majestätisch oder knuddelig, gewieft oder gemütlich, geheimnisvoll oder wie alte Bekannte.
            Vor allem aber sind sie gefährdet: Seit 1970 sind die Populationen von über 4000 untersuchten Säugetieren, Fischen, Vögeln, Amphibien und Reptilien durchschnittlich um rund sechzig Prozent geschwunden.
            <br />
            <br />
            Es ist noch nicht alles verloren: Weder ist es zu spät für die Arten, die wir in den letzten Jahrzehnten vor dem Aussterben bewahren konnten, wie etwa den Amurtiger, Berggorilla oder den grossen Panda, noch für internationale Anstrengungen, um Politik, Wirtschaft, lokale Entwicklung und den ökologischen Fussabdruck der Menschheit zu verändern.
            Es ist eine gewaltige Anstrengung, die jedoch immer wieder Erfolge zeitigt.
            Internationale Abkommen, Veränderungen in Produktion und Konsum oder riesige, neue Schutzgebiete machen Hoffnung.
            Wir wollen jedoch noch viel mehr erreichen.
        </section>
        <section className='text-lg my-16'>
            <h1 className='text-3xl font-semibold mb-8'>Contact</h1>
            <ul>
                <li>Lorenz</li>
                <li>Hohermuth</li>
                <br />
                <li>BBW Berufsbildungsschule Winterthur</li>
                <li>Pionierstrasse 28</li>
                <li>8400 Winterthur</li>
                <br />
                <li>lorenz.hohermuth@lernende.bbw.ch</li>
                <li>+41 79 710 81 68</li>
            </ul>
        </section>
        <section className='text-lg my-16'>
            <h1 className='text-3xl font-semibold mb-8'>Location</h1>
            <ul>
                <li>Pionierstrasse 28</li>
                <li>8400 Winterthur</li>
                <br />
                <li>Öffnungszeiten</li>
                <li>Montag - Mittwoch: Geschlossen</li>
                <li>Donnerstag - Freitag: 8:00 - 17:00</li>
                <li>Samstag - Sonntag: Geschlossen</li>
            </ul>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.92770161163213!2d8.72007422840176!3d47.49813542201019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a997124b3a3c9%3A0x5987fd36c95768e7!2sBerufsbildungsschule%20Winterthur%3A%20Abteilung%20Informatik!5e1!3m2!1sde!2sch!4v1683462591868!5m2!1sde!2sch" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-144 mt-16'></iframe>
            </div>
        </section>    
    </div>
  )
}
