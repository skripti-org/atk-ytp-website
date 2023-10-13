import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    fi: {
      translation: {
        common: {
          atkYtpTitle: "ATK-YTP '23",
          info: 'Info',
          schedule: 'Aikataulu',
          map: 'Kartta',
          trailer: 'Traileri',
          partners: 'Yhteistyökumppanit',
        },
        intro: {
          part1:
            'ATK-YTP saapuu Joensuuhun! ATK-yhteistoimintapäivät, lyhyesti ATK-YTP, järjestetään tänä syksynä Joensuussa 18.-20.10.2023. Tämä kaksipäiväinen seminaaritapahtuma, joka on Tietotekniikan opiskelijoiden liiton (TiTOL) järjestämä, kokoaa vuosittain yhteen IT-alan opiskelijoita seitsemästä eri yliopistokaupungista. Tämän vuoden ATK-YTP isäntänä toimii Itä-Suomen yliopiston Joensuun kampuksen tietojenkäsittelijöiden ainejärjestö Skripti ry.',
          part2:
            'Yhteistoimintapäivät tarjoavat alan opiskelijoille ympäri Suomen mahdollisuuden tutustua toisiinsa sekä alan yrityksiin hauskalla tavalla. Tapahtumassa useat alan ammattilaiset pitävät vaikuttavia luentoja kahtena seminaaripäivänä. Luennot järjestetään Joensuun kampuksella C1-salissa 18. ja 19. lokakuuta klo 10-16, ja sen jälkeen voit verkostoitua iltaohjelman parissa. Lisäksi TiTOL pitää tapahtuman aikana syysliittokokouksensa. Tervetuloa Joensuuhun!',
        },
        schedule: {
          sauna: 'Aamusauna by Nordea',
          saunaleave: 'Lähtö aamusaunalle',
          wed: 'Ke',
          thu: 'To',
          fri: 'Pe',
          time: 'Klo',
          programme: 'Ohjelma',
          opening: 'Majoitus aukeaa',
          closing: 'Majoitus sulkeutuu',
          preparty1: 'Etkot by Siili',
          preparty2: 'Etkot',
          afterparty1: 'Jatkot Kimmelissä',
          afterparty2: 'Reivit Kerubissa: Affirmed, Digital Mindz, Bionator Project',
          crawl: 'Rastikierros alkaa',
          asteriski: 'Asteriski kotona',
        },
        info: {
          atkYtpArrives: 'ATK-YTP saapuu Joensuuhun!',
          atkYtpDescription:
            'ATK-YTP, lyhennettynä ATK-yhteistoimintapäivät, järjestetään tänä syksynä Joensuussa 18.-20. lokakuuta 2023. Tämä kaksipäiväinen seminaaritapahtuma, jonka järjestää Tietotekniikan opiskelijoiden liitto (TiTOL), kerää vuosittain yhteen IT-opiskelijoita seitsemästä eri yliopistokaupungista. Tänä vuonna ATK-YTP:n isäntänä toimii Skripti ry, Itä-Suomen yliopiston Joensuun kampuksen tietojenkäsittelijöiden ainejärjestö.',
          cooperationDays:
            'Yhteistoimintapäivät tarjoavat alan opiskelijoille ympäri Suomen mahdollisuuden tutustua toisiinsa sekä alan yrityksiin hauskalla tavalla. Tapahtumassa useat alan ammattilaiset pitävät vaikuttavia luentoja kahdella seminaaripäivällä. Luennat pidetään Joensuun kampuksella C1-salissa 18. ja 19. lokakuuta klo 10-16, ja sen jälkeen voit verkostoitua iltaohjelman parissa. Lisäksi TiTOL pitää tapahtuman aikana syysliittokokouksensa. Tervetuloa Joensuuhun!',
          importantNotice: 'Huom!',
          siteInformation:
            'Sivujen tiedot ovat paikoittain vielä puutteellisia sekä ne saattavat muuttua ennen tapahtumaa.',
          whatToBring: 'Mitä mukaan?',
          listItems: {
            item1: 'Haalarit',
            item2: 'Makuupussi ja -alusta',
            item3: 'DELTACO Cat6a S/FTP -asennuskaapelirulla ulkokäyttöön, 100 m (ei pakollinen)',
            item4: 'Hygieniatarvikkeet',
            item5: 'Lämmintä vaatetta',
            item6: 'Roppakaupalla reissumieltä!',
          },
          accommodation: 'Majoitus',
          accommodationDetails:
            'Tapahtuman majoitus tapahtuu Pielisjoen koulussa sekä Joensuun yhteiskoulun luokilla. Koulujen sijainnit löydät kartalta. Majoitukset avautuvat tapahtumapäivinä seuraavasti: Keskiviikkona majoitus aukeaa klo 8.00 ja sulkeutuu klo 10.00 seminaariesitysten ajaksi. Torstaina majoitus sulkeutuu klo 11.00 ja aukeaa klo 21.00. Perjantaina majoitus sulkeutuu klo 11.00. Molemmilla kouluilla päivystävät yövahdit molempina öinä, jotta majoittujilla on turvallinen ja miellyttävä oleskelu tapahtuman aikana.',
          rememberToKeep: 'Muistathan pitää majoituspaikan siistinä ja siivota omat jälkesi!',
          food: 'Ruoka',
          hungerRelief: 'Näläkäinen nikotteleksen, kyllin syönyt röyhteleksen.',
          studentRestaurants:
            'Joensuun kampukselta löytyy useita opiskelijaravintoloita tapahtumapaikan läheltä, kuten Carelia, Kampus Bistro ja Wicked Rabbit Mertia (kasvisruoka). Opiskelijaravintoloiden lisäksi Joensuun keskusta on pullollaan erilaisia ruokapaikkoja. Näiden lisäksi Foodora ja Wolt kuljettavat sapuskaa.',
          restaurantHint: 'Kurkkaappa joutessas:',
          restaurants: 'Joensuun kampusravintolat ja -kahvilat',
          lateNightGroceryStores:
            'Keskustan ruokakaupoista auki pisimpään ovat K-Citymarket Keskusta (klo 8-23) ja S-market Papinkatu (klo 7-23). Lisäksi hieman kauempaa kaakosta löytyy S-market Niinivaara, joka on 24h/7 auki.',
          gettingAround: 'Liikkuminen',
          hint: 'Vinkki!',
          easyMovement:
            'Joensuussa on helppo liikkua, sillä kaupunki on tasainen ja vaakasuorassa. Illan etkoja lukuunottamatta kaikki tapahtumapaikat sijaitsevat kävelymatkan päässä keskustasta. Mikäli apostolikyyti ei ole vaihtoehto, voi siirtymiset hoitaa helposti myös esim.',
          bus: 'bussilla',
          or: 'tai',
          taxi: 'taksilla',
          tier: 'Tierillä (jos niitä ei ole tapahtumaan mennessä raivattu pois)',
          avoidCrowds: 'Vältä ruuhkat ja saavu Joensuuhun jo 500 päivää ennen tapahtumaa!',
          challengeStations: 'Rastikierrokset',
          tradition:
            'Jo perinteeksi muodostuneet rastikierrokset ovat osa myös Joensuun YTP:tä! Kerää 4-8:n hengen joukkue kasaan ja lähde ulkoiluttamaan haalareitasi Joensuun keskustan raittiiseen ulkoilmaan!',
          localGuilds:
            'Ensimmäisenä päivänä rasteja pitävät paikalliset ainejärjestöt, ja toisena päivänä rasteilla voi tavata tkt-laitoksen sekä yhteistyökumppaneiden edustajia.',
          preParties: 'Etkot',
          bothEvenings:
            'Molempina iltoina järjestetään yhteiset etkot Karhunmäellä. Bussikyydit kulkevat paikalle ja sieltä pois molempina päivinä klo 19-21 ja 22-23. Huomioithan, että bussikyydeissä on tunnin tauko klo 21-22. Bussit lähtevät taidemuseo Onnin edestä Koskikadulta. Etkoille on mahdollista tuoda mukana omia virvokkeita sekä naposteltavia!',
          firstEvening:
            'Ensimmäisen illan etkot ovat järjestetty yhteistyössä Siilin kanssa! Toisena iltana bingoillaan Giggelin ja Kaalimadon kanssa!',
          rememberShop: 'Omat ostokset kannattaa hoitaa keskustassa ennen etkoille lähtöä!',
          afterParties: 'Jatkot',
          bothYtpDays: 'Molempina YTP-päivinä järjestetään yhteiset jatkot illan huipennukseksi.',
          wednesdayAfterParty:
            'Keskiviikon jatkot tarjoaa Las Palmas, joka toimii Sokos Hotel Kimmelin tiloissa. Illan artistina toimittaa Jussi Pelkosen ja Aleksi Ripatin muodostama garagerock-duo Ursus Factory! Keikka alkaa noin klo 24.00.',
          thursdayAfterParty:
            'Torstain jatkot järjestetään Ravintola Kerubissa, jossa pääsemme nauttimaan konemusiikista Affirmed:n, Digital Mindz:n ja Bionator Project:n tähdittämänä! Ovet aukevat klo 22.',
          safeSpace: 'Turvallinen tila',
          safeSpace1:
            'Tapahtumassa noudatetaan turvallisen tilan periaatteita. Yhdenvertaisuuslain mukaan ketään ei saa syrjiä iän, alkuperän, kansalaisuuden, kielen, uskonnon, vakaumuksen, mielipiteen, poliittisen toiminnan, ammattiyhdistystoiminnan, perhesuhteiden, terveydentilan, vammaisuuden, seksuaalisen suuntautumisen, tai muun henkilöön liittyvän syyn perusteella.',
          safeSpace2:
            'Turvallisemmilla tiloilla viitataan yhteisölliseen pyrkimykseen luoda turvallisuutta lisääviä käytäntöjä. Käytännössä turvallisemmissa tiloissa ainejärjestö ja sen jäsenet pyrkivät ottamaan vastuuta hankalista tilanteista. Ristiriitoja käsitellään sen sijaan, että niitä vain siedetään.',
          moreInformationSafety:
            'Lisätietoja tapahtumassa voimassa olevista turvallisen tilan periaatteista löydät',
          moreInformationSafety2: 'Skripti ry:n weppisivuilta.',
          contactInformation: 'Yhteystiedot',
          generalInquiries: 'Yleinen',
          websiteContacts: 'Verkkosivut',
          accommodationContact: 'Majoitus',
          challengeStationsContacts: 'Rastikierrokset',
          busTransportContacts: 'Bussikuljetukset',
          morningSaunaContact: 'Aamusauna',
          prePartyAfterPartyContacts: 'Etkot & Jatkot',
          harassmentContacts: 'Häirintäyhdyshenkilöt',
          links: 'Linkkejä',
          publicTransportJoJo: 'Joukkoliikenne JoJo',
          atkYtpTelegram: 'ATK-YTP Telegram',
          atkYtpAnnouncements: 'ATK-YTP Tiedotuskanava',
          skriptiRy: 'Skripti ry',
          skriptiRySafeSpace: 'Skripti ry:n turvallisen tilan periaatteet',
        },
      },
    },
    en: {
      translation: {
        common: {
          atkYtpTitle: "ATK-YTP '23",
          info: 'Info',
          schedule: 'Schedule',
          map: 'Map',
          trailer: 'Trailer',
          partners: 'Partners',
        },
        intro: {
          part1:
            'ATK-YTP comes to Joensuu! The ATK-YTP will take place this autumn in Joensuu, Finland, on 18-20 October 2023. This two-day seminar event, organised by the Association of Students of Information Technology (TiTOL), brings together IT students from seven different university cities every year. This year´s ATK-YTP is hosted by Skripti ry, a student association of computer scientists at the University of Eastern Finland´s Joensuu campus.',
          part2:
            'The co-operative days offer students from all over Finland the opportunity to get to know each other and the companies in the field in a fun way. Several industry professionals give impressive lectures during the two seminar days. The lectures will take place at the Joensuu campus in C1 Hall on 18 and 19 October from 10am to 4pm, followed by an evening programme of networking. TiTOL will also hold its autumn association meeting during the event. Welcome to Joensuu!',
        },
        schedule: {
          wed: 'Wed',
          saunaleave: 'Departure for morning sauna',
          sauna: 'Morning sauna by Nordea',
          thu: 'Thu',
          fri: 'Fri',
          time: 'Time',
          programme: 'Programme',
          opening: 'Accommodation opens',
          closing: 'Accommodation closes',
          preparty1: 'Pre-party by Siili',
          preparty2: 'Pre-party',
          afterparty1: 'After-party at Kimmel',
          afterparty2: 'Rave at Kerubi: Affirmed, Digital Mindz, Bionator Project',
          crawl: 'City crawl begins',
          asteriski: 'Asteriski finally at home',
        },
        info: {
          atkYtpArrives: 'ATK-YTP is coming to Joensuu!',
          atkYtpDescription:
            'ATK-YTP, short for ATK-cooperation days, will be held in Joensuu this autumn from 18th to 20th October 2023. This two-day seminar event, organized by the Association of Information Technology Students (TiTOL), brings together IT students from seven different university cities annually. This year, Skripti ry, the guild of IT students at the University of Eastern Finland in Joensuu, hosts ATK-YTP.',
          cooperationDays:
            'Cooperation days offer IT students from all over Finland the opportunity to get to know each other and the companies in the field in a fun way. Several industry professionals give impressive lectures on both seminar days. The lectures will be held at the Joensuu campus in C1 hall on the 18th and 19th of October from 10 am to 4 pm, followed by networking in the evening program. In addition, TiTOL will hold its autumn plenary meeting during the event. Welcome to Joensuu!',
          importantNotice: 'Note!',

          siteInformation:
            'The information on the pages is still incomplete in places and may change before the event.',
          whatToBring: 'What to Bring?',
          listItems: {
            item1: 'Overalls',
            item2: 'Sleeping bag and mat',
            item3: 'DELTACO Cat6a S/FTP installation cable roll for outdoor use, 100 m (optional)',
            item4: 'Hygiene products',
            item5: 'Warm clothing',
            item6: 'A lot of adventure spirit!',
          },
          accommodation: 'Accommodation',
          accommodationDetails:
            'Accommodation will be available at Pielisjoen koulu and Joensuun yhteiskoulu. You can find the locations of the schools on the map. Accommodations will be open on the event days as follows: On Wednesday, accommodation opens at 8:00 AM and closes at 10:00 AM during the seminar presentations. On Thursday, accommodation closes at 11:00 AM and opens at 9:00 PM. On Friday, accommodation closes at 11:00 AM. Both schools have night guards on both nights to ensure a safe and pleasant stay during the event.',

          rememberToKeep: 'Please remember to keep your accommodation clean and tidy.',
          food: 'Food',
          hungerRelief: "When you're hungry, you can either grumble or eat.",
          studentRestaurants:
            'Joensuu campus has several student restaurants near the event location, such as Carelia, Kampus Bistro, and Wicked Rabbit Mertia (vegetarian). In addition to student restaurants, Joensuu city center offers a variety of dining options. Besides these, Foodora and Wolt deliver food to you.',
          restaurantHint: 'Check out these:',
          restaurants: 'Joensuu campus restaurants and cafes',
          lateNightGroceryStores:
            "The city center's grocery stores that are open the latest are K-Citymarket Keskusta (8 am - 11 pm) and S-market Papinkatu (7 am - 11 pm). In addition, a bit further from the southeast, you can find S-market Niinivaara, which is open 24/7.",
          gettingAround: 'Getting Around',
          hint: 'Hint!',
          easyMovement:
            "Getting around in Joensuu is easy because the city is quite horizontal. All event venues are within walking distance from the city center, except for the pre-parties in the evening. If hitchhiking isn't an option, you can easily take a",
          bus: 'bus',
          or: 'or',
          taxi: 'taxi',
          tier: 'a Tier (if they have not been removed from the streets when the events is held)',
          avoidCrowds: 'Avoid the crowds and arrive in Joensuu 500 days before the event!',
          challengeStations: 'City Crawl',
          tradition:
            'The already traditional city crawl is also a part of the Joensuu YTP! Gather a team of 4-8 people and go out and get your overalls in the fresh outdoor air in the centre of Joensuu! In the city crawl you explore the city with your team and carry out fun and challenging tasks on multiple checkpoints.',
          localGuilds:
            "On the first day, the challenge checkpoints are held by local guilds, and on the second day, you can meet representatives from the computer science department and the event's partners.",
          preParties: 'Pre-Parties',
          bothEvenings:
            'Pre-parties are organized both evenings in Karhunmäki. Bus rides run to and from the location both evenings from 7-9 pm and 10-11 pm. Note that there is a one-hour break in bus rides from 9-10 pm. Buses depart from Koskikatu in front of the Onni art museum. You can bring your own refreshments and snacks to the pre-parties!',
          firstEvening:
            'The pre-parties on the first evening are organized in cooperation with Siili! On the second evening, there will be bingo with Giggeli and Kaalimato!',
          rememberShop:
            'You should do your shopping in the city center before heading to the pre-parties!',
          afterParties: 'After-Parties',
          bothYtpDays: 'After-parties are held both days of YTP.',
          wednesdayAfterParty:
            'The Wednesday after-party is hosted by Las Palmas and takes place in the premises of Sokos Hotel Kimmel. The evening will feature a garage rock duo Ursus Factory, consisting of Jussi Pelkonen and Aleksi Ripatti. The gig starts around midnight.',
          thursdayAfterParty:
            "Thursday's after-party will be held at Ravintola Kerubi, where we can enjoy electronic music performed by Affirmed, Digital Mindz, and Bionator Project! The doors open at 10 pm.",
          safeSpace: 'Safe Space',
          safeSpace1:
            'The event follows the principles of a safe space. According to the Equality Act, no one should be discriminated against based on age, origin, nationality, language, religion, belief, opinion, political activity, trade union activity, family relationships, state of health, disability, sexual orientation, or other personal reasons.',
          safeSpace2: '',
          moreInformationSafety:
            'For more information about the principles of safe space at the event, you can visit the',
          moreInformationSafety2: 'Skripti ry website.',
          contactInformation: 'Contact Information',
          generalInquiries: 'General Inquiries',
          websiteContacts: 'Website Contacts',
          accommodationContact: 'Accommodation',
          challengeStationsContacts: 'Challenge Stations',
          busTransportContacts: 'Bus Transport',
          morningSaunaContact: 'Morning Sauna',
          prePartyAfterPartyContacts: 'Pre-Parties & After-Parties',
          harassmentContacts: 'Harassment Contact Person',
          links: 'Links',
          publicTransportJoJo: 'Public Transport (JoJo)',
          atkYtpTelegram: 'ATK-YTP Telegram',
          atkYtpAnnouncements: 'ATK-YTP Announcements Channel',
          skriptiRy: 'Skripti ry',
          skriptiRySafeSpace: "Skripti ry's Safe Space Principles",
        },
      },
    },
  },
  fallbackLng: localStorage.getItem('selectedLanguage') || 'fi',
  debug: true,
});

export default i18n;
