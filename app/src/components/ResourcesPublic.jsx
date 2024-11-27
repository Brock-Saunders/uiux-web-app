import ListRow from "./ListRow";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const manualTranslations = {
  en: {
    title: "Resources",
    categories: [
      "Local Religious Communities",
      "K-12 & Secondary Education, Child Care",
      "Real Estate Brokers/Agencies",
      "Utility Companies",
      "Cable and Internet Companies",
      "Important Government Websites",
      "Local Organizations",
    ],
    religious: {
      mosques: "Mosques",
      churches: "Churches",
      hinduTemple: "Hindu Temple",
      synagogues: "Synagogues",
      mosquesList: [
        {
          name: "Islamic Society of Central Florida",
          link: "https://www.iscf.org",
        },
        {
          name: "Al-Bir Educational Center",
          link: "https://www.albircenter.org",
        },
        {
          name: "American Muslim Community Centers",
          link: "https://www.amccenters.org",
        },
      ],
      churchesList: [
        {
          name: "The Hope Church",
          link: "http://thehopechurch.org/thehopechurch/",
        },
        {
          name: "First Baptist of Orlando",
          link: "http://www.firstorlando.com/",
        },
        {
          name: "Trinity Downtown",
          link: "http://church.trinitydowntown.com/",
        },
        {
          name: "Spirit of Joy",
          link: "http://www.spiritofjoy.org",
        },
      ],
      hinduTempleList: [
        {
          name: "Hindu Society of Central Florida",
          link: "http://www.hindutempleorlando.org",
        },
      ],
      synagoguesList: [
        {
          name: "Chabad of South Orlando",
          link: "http://www.jewishorlando.com/",
        },
        {
          name: "Congregation of Reform Judaism",
          link: "http://www.crjorlando.org/",
        },
        {
          name: "Southwest Orlando Jewish Congregation",
          link: "http://www.sojc.org/",
        },
      ],
    },
    education: {
      religiousCenters: "Religious Academic Centers",
      nonReligiousCenters: "Non-Religious Academic Centers",
      secondaryEducation: "Secondary Education",
      religiousList: [
        { name: "Central Florida Christian Academy", link: "http://cfcaeagles.org/" },
        { name: "Faith Christian Academy", link: "https://www.fcalions.org" },
      ],
      nonReligiousList: [
        { name: "Lake Highland Preparatory School", link: "http://www.lhps.org/lhps/lhp/Home.aspx" },
        { name: "Orange County Public Schools", link: "https://www.ocps.net/Pages/default.aspx" },
      ],
      secondaryList: [
        { name: "Rollins College", link: "http://www.rollins.edu/" },
        { name: "University of Central Florida", link: "http://www.ucf.edu/" },
      ],
    },
    otherCategories: {
      realEstate: [
        { name: "Prestige Realty Professionals", link: "http://www.prestigerealtypros.com/" },
      ],
      utilities: [
        { name: "Orlando Utilities Commission", link: "http://www.ouc.com/" },
        { name: "Orange County Utilities", link: "https://utilities.ocfl.net/OCUD/" },
      ],
      cableInternet: [
        { name: "AT&T", link: "https://www.att.com/" },
        { name: "Bright House Networks", link: "https://www.brighthouse.com/" },
      ],
      governmentWebsites: [
        { name: "Florida Department of Highway Safety and Motor Vehicles", link: "https://www.flhsmv.gov/" },
        { name: "Florida Department of State", link: "https://www.sunbiz.org/" },
      ],
      localOrganizations: [
        { name: "Arab American Community Center of Florida", link: "https://www.aaccflorida.org/" },
        { name: "Moroccan American Business Alliance", link: "https://www.mabafl.com/" },
      ],
    },
  },
  es: {
    title: "Recursos",
    categories: [
      "Comunidades Religiosas Locales",
      "Educación K-12 y Secundaria, Cuidado Infantil",
      "Agencias/Empresas Inmobiliarias",
      "Empresas de Servicios Públicos",
      "Empresas de Cable e Internet",
      "Sitios Web Gubernamentales Importantes",
      "Organizaciones Locales",
    ],
    religious: {
      mosques: "Mezquitas",
      churches: "Iglesias",
      hinduTemple: "Templo Hindú",
      synagogues: "Sinagogas",
      mosquesList: [
        {
          name: "Sociedad Islámica de Florida Central",
          link: "https://www.iscf.org",
        },
        {
          name: "Centro Educativo Al-Bir",
          link: "https://www.albircenter.org",
        },
        {
          name: "Centros Comunitarios Musulmanes Americanos",
          link: "https://www.amccenters.org",
        },
      ],
      churchesList: [
        {
          name: "Iglesia de la Esperanza",
          link: "http://thehopechurch.org/thehopechurch/",
        },
        {
          name: "Primera Iglesia Bautista de Orlando",
          link: "http://www.firstorlando.com/",
        },
        {
          name: "Trinity Downtown",
          link: "http://church.trinitydowntown.com/",
        },
        {
          name: "Espíritu de Alegría",
          link: "http://www.spiritofjoy.org",
        },
      ],
      hinduTempleList: [
        {
          name: "Sociedad Hindú de Florida Central",
          link: "http://www.hindutempleorlando.org",
        },
      ],
      synagoguesList: [
        {
          name: "Jabad del Sur de Orlando",
          link: "http://www.jewishorlando.com/",
        },
        {
          name: "Congregación de Judaísmo Reformado",
          link: "http://www.crjorlando.org/",
        },
        {
          name: "Congregación Judía del Suroeste de Orlando",
          link: "http://www.sojc.org/",
        },
      ],
    },
    education: {
      religiousCenters: "Centros Académicos Religiosos",
      nonReligiousCenters: "Centros Académicos No Religiosos",
      secondaryEducation: "Educación Secundaria",
      religiousList: [
        { name: "Academia Cristiana de Florida Central", link: "http://cfcaeagles.org/" },
        { name: "Academia Cristiana de la Fe", link: "https://www.fcalions.org" },
      ],
      nonReligiousList: [
        { name: "Escuela Preparatoria Lake Highland", link: "http://www.lhps.org/lhps/lhp/Home.aspx" },
        { name: "Escuelas Públicas del Condado de Orange", link: "https://www.ocps.net/Pages/default.aspx" },
      ],
      secondaryList: [
        { name: "Universidad de Rollins", link: "http://www.rollins.edu/" },
        { name: "Universidad de Florida Central", link: "http://www.ucf.edu/" },
      ],
    },
    otherCategories: {
      realEstate: [
        { name: "Profesionales de Bienes Raíces Prestige", link: "http://www.prestigerealtypros.com/" },
      ],
      utilities: [
        { name: "Comisión de Servicios Públicos de Orlando", link: "http://www.ouc.com/" },
        { name: "Servicios Públicos del Condado de Orange", link: "https://utilities.ocfl.net/OCUD/" },
      ],
      cableInternet: [
        { name: "AT&T", link: "https://www.att.com/" },
        { name: "Redes Bright House", link: "https://www.brighthouse.com/" },
      ],
      governmentWebsites: [
        { name: "Departamento de Seguridad Vial y Vehículos Motorizados de Florida", link: "https://www.flhsmv.gov/" },
        { name: "Departamento de Estado de Florida", link: "https://www.sunbiz.org/" },
      ],
      localOrganizations: [
        { name: "Centro Comunitario Árabe Americano de Florida", link: "https://www.aaccflorida.org/" },
        { name: "Alianza Empresarial Marroquí Americana", link: "https://www.mabafl.com/" },
      ],
    },
  },
  fr: {
    title: "Ressources",
    categories: [
      "Communautés religieuses locales",
      "Éducation primaire et secondaire, garde d'enfants",
      "courtiers/agences immobilières",
      "Entreprises de services publics",
      "Entreprises de câblodistribution et d'Internet",
      "Sites Web gouvernementaux importants ",
      "Organisations locales ",
    ],
    religious: {
      mosques: "Mosquées",
      churches: "Églises",
      hinduTemple: "Temple hindou",
      synagogues: "Synagogues",
      mosquesList: [
        {
          name: "Société islamique de Floride centrale",
          link: "https://www.iscf.org",
        },
        {
          name: "Centre éducatif Al-Bir",
          link: "https://www.albircenter.org",
        },
        {
          name: "Centres communautaires musulmans américains",
          link: "https://www.amccenters.org",
        },
      ],
      churchesList: [
        {
          name: "L'Église de l'Espérance",
          link: "http://thehopechurch.org/thehopechurch/",
        },
        {
          name: "Première église baptiste d'Orlando",
          link: "http://www.firstorlando.com/",
        },
        {
          name: "Centre-ville de Trinity",
          link: "http://church.trinitydowntown.com/",
        },
        {
          name: "Esprit de joie",
          link: "http://www.spiritofjoy.org",
        },
      ],
      hinduTempleList: [
        {
          name: "Société hindoue de Floride centrale",
          link: "http://www.hindutempleorlando.org",
        },
      ],
      synagoguesList: [
        {
          name: "Chabad du sud d'Orlando",
          link: "http://www.jewishorlando.com/",
        },
        {
          name: "Congrégation du Judaïsme réformé",
          link: "http://www.crjorlando.org/",
        },
        {
          name: "Congrégation juive du sud-ouest d'Orlando",
          link: "http://www.sojc.org/",
        },
      ],
    },
    education: {
      religiousCenters: "Centres académiques religieux",
      nonReligiousCenters: "Centres universitaires non religieux",
      secondaryEducation: "Enseignement secondaire",
      religiousList: [
        { name: "Académie chrétienne du centre de la Floride", link: "http://cfcaeagles.org/" },
        { name: "Académie Chrétienne Faith", link: "https://www.fcalions.org" },
      ],
      nonReligiousList: [
        { name: "École préparatoire de Lake Highland", link: "http://www.lhps.org/lhps/lhp/Home.aspx" },
        { name: "Écoles publiques du comté d'Orange", link: "https://www.ocps.net/Pages/default.aspx" },
      ],
      secondaryList: [
        { name: "Collège Rollins", link: "http://www.rollins.edu/" },
        { name: "Université de Floride centrale", link: "http://www.ucf.edu/" },
      ],
    },
    otherCategories: {
      realEstate: [
        { name: "Professionnels de l'immobilier de prestige", link: "http://www.prestigerealtypros.com/" },
      ],
      utilities: [
        { name: "Commission des services publics d'Orlando", link: "http://www.ouc.com/" },
        { name: "Services publics du comté d'Orange", link: "https://utilities.ocfl.net/OCUD/" },
      ],
      cableInternet: [
        { name: "AT&T", link: "https://www.att.com/" },
        { name: "Bright House Networks", link: "https://www.brighthouse.com/" },
      ],
      governmentWebsites: [
        { name: "Département de la sécurité routière et des véhicules à moteur de Floride", link: "https://www.flhsmv.gov/" },
        { name: "Département d'État de Floride", link: "https://www.sunbiz.org/" },
      ],
      localOrganizations: [
        { name: "Arab American Community Center of FloridaCentre communautaire arabo-américain de Floride", link: "https://www.aaccflorida.org/" },
        { name: "Alliance des Affaires Marocaines Américaines", link: "https://www.mabafl.com/" },
      ],
    },
  },
  ar: {
    title: "الموارد",
    categories: [
      "المجتمعات الدينية المحلية",
      "التعليم من الروضة إلى الثانوية، ورعاية الأطفال",
      "وكلاء/شركات العقارات",
      "شركات المرافق العامة",
      "شركات الكابل والإنترنت",
      "المواقع الحكومية المهمة",
      "المنظمات المحلية",
    ],
    religious: {
      mosques: "المساجد",
      churches: "الكنائس",
      hinduTemple: "المعبد الهندوسي",
      synagogues: "المعابد اليهودية",
      mosquesList: [
        {
          name: "الجمعية الإسلامية لوسط فلوريدا",
          link: "https://www.iscf.org",
        },
        {
          name: "مركز التعليم الإسلامي البير",
          link: "https://www.albircenter.org",
        },
        {
          name: "مراكز المجتمع الإسلامي الأمريكي",
          link: "https://www.amccenters.org",
        },
      ],
      churchesList: [
        {
          name: "كنيسة الأمل",
          link: "http://thehopechurch.org/thehopechurch/",
        },
        {
          name: "الكنيسة المعمدانية الأولى في أورلاندو",
          link: "http://www.firstorlando.com/",
        },
        {
          name: "ترينيتي داون تاون",
          link: "http://church.trinitydowntown.com/",
        },
        {
          name: "روح الفرح",
          link: "http://www.spiritofjoy.org",
        },
      ],
      hinduTempleList: [
        {
          name: "الجمعية الهندوسية لوسط فلوريدا",
          link: "http://www.hindutempleorlando.org",
        },
      ],
      synagoguesList: [
        {
          name: "تشاباد جنوب أورلاندو",
          link: "http://www.jewishorlando.com/",
        },
        {
          name: "مجمع إصلاح اليهودية",
          link: "http://www.crjorlando.org/",
        },
        {
          name: "مجمع اليهود في جنوب غرب أورلاندو",
          link: "http://www.sojc.org/",
        },
      ],
    },
    education: {
      religiousCenters: "المراكز الأكاديمية الدينية",
      nonReligiousCenters: "المراكز الأكاديمية غير الدينية",
      secondaryEducation: "التعليم الثانوي",
      religiousList: [
        { name: "الأكاديمية المسيحية لوسط فلوريدا", link: "http://cfcaeagles.org/" },
        { name: "أكاديمية الإيمان المسيحية", link: "https://www.fcalions.org" },
      ],
      nonReligiousList: [
        { name: "مدرسة بحيرة هايلاند الإعدادية", link: "http://www.lhps.org/lhps/lhp/Home.aspx" },
        { name: "مدارس مقاطعة أورانج العامة", link: "https://www.ocps.net/Pages/default.aspx" },
      ],
      secondaryList: [
        { name: "كلية رولينز", link: "http://www.rollins.edu/" },
        { name: "جامعة وسط فلوريدا", link: "http://www.ucf.edu/" },
      ],
    },
    otherCategories: {
      realEstate: [
        { name: "بريستيج ريالتي بروفيشنالز", link: "http://www.prestigerealtypros.com/" },
      ],
      utilities: [
        { name: "لجنة مرافق أورلاندو", link: "http://www.ouc.com/" },
        { name: "مرافق مقاطعة أورانج", link: "https://utilities.ocfl.net/OCUD/" },
      ],
      cableInternet: [
        { name: "AT&T", link: "https://www.att.com/" },
        { name: "Bright House Networks", link: "https://www.brighthouse.com/" },
      ],
      governmentWebsites: [
        { name: "إدارة سلامة الطرق السريعة والمركبات بفلوريدا", link: "https://www.flhsmv.gov/" },
        { name: "وزارة ولاية فلوريدا", link: "https://www.sunbiz.org/" },
      ],
      localOrganizations: [
        { name: "المركز المجتمعي العربي الأمريكي في فلوريدا", link: "https://www.aaccflorida.org/" },
        { name: "تحالف الأعمال المغربي الأمريكي", link: "https://www.mabafl.com/" },
      ],
    },
  },
};

export default function ResourcesPublic() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en"; // Detect language or fallback to English
  const translations = manualTranslations[currentLang] || manualTranslations.en;

  const [activeIndexes, setActiveIndexes] = useState(
    Array(translations.categories.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const renderLinks = (links) => {
    return (
      <ul className="mb-6 space-y-2">
        {links.map((item, index) => (
          <li key={index}>
            {item.name}:&nbsp;
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 hover:underline"
            >
              {item.link}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="pt-16 w-full bg-beige text-gray-700">
      <div className="w-full md:max-w-7xl md:px-16 py-32 mx-auto">
        <div className="flex items-center">
          <div className="text-3xl w-1/5 mx-16 md:mx-0 font-serif md:ml-16 mr-10">
            {translations.title}
          </div>
          <div className="mx-16 md:mx-0 w-full h-[0.5px] bg-gray-700"></div>
        </div>
        <div className="mx-16 md:mx-0 md:ml-16 mt-16 mb-12 space-y-10">
          {translations.categories.map((category, index) => (
            <ListRow
              key={index}
              question={category}
              answer={
                index === 0
                  ? renderLinks(translations.religious.mosquesList)
                  : renderLinks(translations.otherCategories.realEstate) // Replace based on the index
              }
              isOpen={activeIndexes[index]}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
 