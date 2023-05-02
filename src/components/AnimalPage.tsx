import React from 'react'

export default function AnimalPage() {
  return (
    <div>
        <img src="\Images\pandahero.jpg" alt="tierbilder-wwf" className='w-screen object-cover h-128'/>
        <div className='px-52 py-14'>
            <div>
              <h1 className='text-5xl font-semibold pl-3'>Panda</h1>
              <div className='h-px bg-gray-300 my-2'></div>
            </div>
            <div className='my-7 mx-5 text-center'>
              <p className='text-3xl font-semibold text-gray-800'>
                Der Grosse Panda ist unser Wappentier und die unverkennbare Ikone des Artenschutzes.
                Bei der Geburt ist er zwar gerade mal so schwer wie eine Tafel Schokolade.
                Doch schnell entwickelt er sich zum Bären mit der typischen schwarz-weissen Fellzeichnung.
              </p>
            </div>
            <div className='flex'>
              <div className='w-1/2 px-7 py-3 text-gray-800'>
                <p className='text-lg font-medium leading-7'>
                  Trotz seines Raubtier-Darmtrakts ernährt sich der Grosse Panda fast ausschliesslich von Bambus (über 99 Prozent).
                  Wo kein Bambus wächst, kann der Panda nicht überleben.
                  Zwischen 9 und 18 Kilo braucht ein Pandabär am Tag.
                  Er muss so viel fressen, da Bambus sehr nährstoffarm ist.
                  Eine anatomische Besonderheit hilft dem Panda beim Verzehr seiner Lieblingsspeise: Ein verlängerter Handwurzelknochen an den Vorderpfoten – ein sogenannter Pseudodaumen – lässt den Bären seine Leibspeise besser greifen.
                  Ein echter Vegetarier also? Nicht ganz: Gelegentlich stehen auch kleine Säugetiere auf dem Speiseplan – wenn er sie denn erwischt.
                  Der Panda braucht einen intakten Wald.
                  Der Wald spielt auch für die lokale Bevölkerung eine wichtige Rolle: Als Einkommensquelle und als Lieferant für Brennholz, um die Häuser warm zu halten und Essen zu kochen.
                  Damit den bedrohten Arten nicht noch weiterer Lebensraum entzogen wird, erarbeiten wir mit den Menschen vor Ort ösungen für eine nachhaltige Holznutzung.
                </p>
              </div>
              <div className=' bg-gray-300 w-px'></div>
              <div className='px-5'>
                <div className='flex items-center'>
                  <img className='h-16' src="\Icons/name.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Wissenschaftlicher Name</div>
                    <div>Grosser Panda (Ailuropoda melanoleuca)</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='h-16 p-3' src="\Icons/warning.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Gefährdungsstatus (IUCN)</div>
                    <div>Verletzlich</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='h-16 p-1' src="\Icons/popultaion.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Population</div>
                    <div>1864 Individuen (Stand 2015).</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='h-16 p-1.5' src="\Icons/ruler.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Körpergrösse</div>
                    <div>Gewicht: bis zu 125 kg</div>
                    <div>Grösse: 1,2 m – 1,8 m</div>
                  </div>
                </div>
              </div>
            </div>

        </div>

        <div className='my-20 flex bg-gray-800 w-full py-10 items-center'>
          <img src="\Images\panda liegt auf baum_ergebnis.jpg" className='h-128' alt="" />
          <div className='ml-16 text-gray-300 text-2xl font-semibold'>
            <div className=' text-3xl mb-16 w-full flex justify-center'>BEDROHT DURCH SCHWINDENDE LEBENSRÄUME</div>
            <div className='px-12'>Der Bestand der Grossen Pandas ist seit der 
              letzten Zählung im Jahr 2004 um 17 Prozent gewachsen. 
              Doch 1860 Grosse Pandas in freier Wildbahn sind immer noch nicht viele. 
              Der Schwund ihres Lebensraums macht es ihnen immer schwerer, 
              zueinanderzufinden. Die meisten Pandabären leben heute in wenigen, 
              schmalen Waldgürteln, die durch Äcker, Strassen und Siedlungen voneinander 
              getrennt sind
            </div>
          </div>
        </div>
    </div>
  )
}
