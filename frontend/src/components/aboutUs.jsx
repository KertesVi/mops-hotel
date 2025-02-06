import "./aboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div
        className="w3-container w3-light-grey"
        id="aboutUs"
      >
        <div className="w3-center" >
          <h1 className="w3-jumbo w3-hide-small">Üdvözlet nálunk, ahol a mopszok otthon érzik magukat!</h1>
        </div>

        <div className="flex-container">

          <div className="flex-item-text">
            <p >
          Mi egy természet kedvelő 4 fős család vagyunk, akik szívügyüknek
          tekintik az állatok szeretetét és gondozását. Családunk tagja egy fekete
          mopsz kutyus is, akivel már 10 év élvezzük a közös sétákat,
          természetjárást és a nyugodt otthoni pillanatokat. <br /> <br />
          Ha épp nyaralás előtt állsz, vagy szükséged van egy rövidebb időre
          olyan helyre, ahol biztos lehetsz abban, hogy kedvenced szeretetteljes
          környezetben van, akkor nálunk jó helyen jársz. Kizárólag mopsz
          kutyusokat fogadunk, hiszen tudjuk, hogy mennyire fontos számukra a
          különleges bánásmód és a figyelem. Annak érdekében, hogy minden
          kedvencünk a lehető legtöbb törődést és szeretetet kapja, egyszerre
          maximum két vendéget vállalunk. Így biztosítjuk, hogy mindenki
          megkapja a neki járó figyelmet, gondoskodást és persze a sok-sok
          simogatást. Nálunk otthonos, családias légkör várja mopszodat, napi
          sétákkal és természetközeli élményekkel, hogy te is nyugodt szívvel
          pihenhess. <br /> <br />
          Keress minket bizalommal, ha egy biztonságos, szerető helyet keresel
          kedvenced számára pár napra, vagy akár 1-2 hetes időtartamra!
          </p>
          </div>

          <div className="flex-item-image">
            <img 
              src='/felipe-bustillo-vN24f5_zpiA-unsplash.jpg'
              alt="AboutUs"
            />
          </div>
        </div>
      </div>
    </>
  );
}