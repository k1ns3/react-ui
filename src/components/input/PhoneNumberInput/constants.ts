import metadata from '@admiral-ds/icons/metadata.json';
import * as FlagsIcons from '#/icons/IconComponents-flags';

const getIcon = (name: string) => {
  const pack: any = FlagsIcons;
  const data = (metadata as Record<string, any>)['flags'].map((iconMetaInfo: any) => ({
    ...iconMetaInfo,
    Component: pack[iconMetaInfo.name],
  }));
  return data.find((flag: any) => flag.name === name);
};

export const countriesList = [
  {
    ...getIcon('Afghanistan'),
    value: 'Афганистан',
    code: '+93',
    iso2: 'AF',
    iso3: 'AFG',
  },
  {
    ...getIcon('AlandIslands'),
    value: 'Аландские острова',
    code: '+358',
    iso2: 'AX',
    iso3: 'ALA',
    region: 'CAS',
  },
  {
    ...getIcon('Albania'),
    value: 'Албания',
    code: '+355',
    iso2: 'AL',
    iso3: 'ALB',
  },
  {
    ...getIcon('Algeria'),
    value: 'Алжир',
    code: '+213',
    iso2: 'DZ',
    iso3: 'DZA',
  },
  {
    ...getIcon('Andorra'),
    value: 'Андорра',
    code: '+376',
    iso2: 'AD',
    iso3: 'AND',
  },
  {
    ...getIcon('Angola'),
    value: 'Ангола',
    code: '+244',
    iso2: 'AO',
    iso3: 'AGO',
  },
  {
    ...getIcon('Anguilla'),
    value: 'Ангилья',
    code: '+1-264',
    iso2: 'AI',
    iso3: 'AIA',
  },
  {
    ...getIcon('AntiguaAndBarbuda'),
    value: 'Антигуа и Барбуда',
    code: '+1-268',
    iso2: 'AG',
    iso3: 'ATG',
  },
  {
    ...getIcon('ArabEmirates'),
    value: 'Объединенные Арабские Эмираты',
    code: '+971',
    iso2: 'AE',
    iso3: 'ARE',
  },
  {
    ...getIcon('Argentina'),
    value: 'Аргентина',
    code: '+54',
    iso2: 'AR',
    iso3: 'ARG',
  },
  {
    ...getIcon('Armenia'),
    value: 'Армения',
    code: '+374',
    iso2: 'AM',
    iso3: 'ARM',
  },
  {
    ...getIcon('Aruba'),
    value: 'Аруба',
    code: '+297',
    iso2: 'AW',
    iso3: 'ABW',
  },
  {
    ...getIcon('Australia'),
    value: 'Австралия',
    code: '+61',
    iso2: 'AU',
    iso3: 'AUS',
  },
  {
    ...getIcon('Austria'),
    value: 'Австрия',
    code: '+43',
    iso2: 'AT',
    iso3: 'AUT',
  },
  {
    ...getIcon('Azerbaijan'),
    value: 'Азербайджан',
    code: '+994',
    iso2: 'AZ',
    iso3: 'AZE',
  },
  {
    ...getIcon('Bahamas'),
    value: 'Багамские острова',
    code: '+1-242',
    iso2: 'BS',
    iso3: 'BHS',
  },
  {
    ...getIcon('Bahrain'),
    value: 'Бахрейн',
    code: '+973',
    iso2: 'BH',
    iso3: 'BHR',
  },
  {
    ...getIcon('Bangladesh'),
    value: 'Бангладеш',
    code: '+880',
    iso2: 'BD',
    iso3: 'BGD',
  },
  {
    ...getIcon('Barbados'),
    value: 'Барбадос',
    code: '+1-246',
    iso2: 'BB',
    iso3: 'BRB',
  },
  {
    ...getIcon('Belarus'),
    value: 'Белоруссия',
    code: '+375',
    iso2: 'BY',
    iso3: 'BLR',
  },
  {
    ...getIcon('Belgium'),
    value: 'Бельгия',
    code: '+32',
    iso2: 'BE',
    iso3: 'BEL',
  },
  {
    ...getIcon('Belize'),
    value: 'Белиз',
    code: '+501',
    iso2: 'BZ',
    iso3: 'BLZ',
  },
  {
    ...getIcon('Benin'),
    value: 'Бенин',
    code: '+229',
    iso2: 'BJ',
    iso3: 'BEN',
  },
  {
    ...getIcon('Bermuda'),
    value: 'Бермудские острова',
    code: '+1-441',
    iso2: 'BM',
    iso3: 'BMU',
  },
  {
    ...getIcon('Bhutan'),
    value: 'Бутан',
    code: '+975',
    iso2: 'BT',
    iso3: 'BTN',
  },
  {
    ...getIcon('Bolivia'),
    value: 'Боливия',
    code: '+591',
    iso2: 'BO',
    iso3: 'BOL',
  },
  {
    ...getIcon('BosniaAndHerzegovina'),
    value: 'Босния и Герцеговина',
    code: '+387',
    iso2: 'BA',
    iso3: 'BIH',
  },
  {
    ...getIcon('Botswana'),
    value: 'Ботсвана',
    code: '+267',
    iso2: 'BW',
    iso3: 'BWA',
  },
  {
    ...getIcon('Brazil'),
    value: 'Бразилия',
    code: '+55',
    iso2: 'BR',
    iso3: 'BRA',
  },
  {
    ...getIcon('BritishVirginIslands'),
    value: 'Британские Виргинские Острова',
    code: '+1-284',
    iso2: 'VG',
    iso3: 'VGB',
  },
  {
    ...getIcon('Brunei'),
    value: 'Бруней',
    code: '+673',
    iso2: 'BN',
    iso3: 'BRN',
  },
  {
    ...getIcon('Bulgaria'),
    value: 'Болгария',
    code: '+359',
    iso2: 'BG',
    iso3: 'BGR',
  },
  {
    ...getIcon('BurkinaFaso'),
    value: 'Буркина-Фасо',
    code: '+226',
    iso2: 'BF',
    iso3: 'BFA',
  },
  {
    ...getIcon('Burundi'),
    value: 'Бурунди',
    code: '+257',
    iso2: 'BI',
    iso3: 'BDI',
  },
  {
    ...getIcon('CaboVerde'),
    value: 'Кабо-Верде',
    code: '+238',
    iso2: 'CV',
    iso3: 'CPV',
  },
  {
    ...getIcon('Cambodia'),
    value: 'Камбоджа',
    code: '+855',
    iso2: 'KH',
    iso3: 'KHM',
  },
  {
    ...getIcon('Cameroon'),
    value: 'Камерун',
    code: '+237',
    iso2: 'KH',
    iso3: 'KHM',
  },
  {
    ...getIcon('Canada'),
    value: 'Канада',
    code: '+1',
    iso2: 'CA',
    iso3: 'CAN',
  },
  {
    ...getIcon('CaymanIslands'),
    value: 'Каймановы острова',
    code: '+1-345',
    iso2: 'KY',
    iso3: 'CYM',
  },
  {
    ...getIcon('CentralAfricanRepublic'),
    value: 'Центральноафриканская Республика',
    code: '+236',
    iso2: 'CF',
    iso3: 'CAF',
  },
  {
    ...getIcon('Chad'),
    value: 'Чад',
    code: '+235',
    iso2: 'TD',
    iso3: 'TCD',
  },
  {
    ...getIcon('Chile'),
    value: 'Чили',
    code: '+56',
    iso2: 'CL',
    iso3: 'CHL',
  },
  {
    ...getIcon('China'),
    value: 'Китай',
    code: '+86',
    iso2: 'CN',
    iso3: 'CHN',
  },
  {
    ...getIcon('Colombia'),
    value: 'Колумбия',
    code: '+57',
    iso2: 'CO',
    iso3: 'COL',
  },
  {
    ...getIcon('Comoros'),
    value: 'Коморы',
    code: '+269',
    iso2: 'KM',
    iso3: 'COM',
  },
  {
    ...getIcon('CongoDemocraticRepublic'),
    value: 'Демократическая Республика Конго',
    code: '+243',
    iso2: 'CD',
    iso3: 'COD',
  },
  {
    ...getIcon('CongoRepublic'),
    value: 'Конго',
    code: '+242',
    iso2: 'CG',
    iso3: 'COG',
  },
  {
    ...getIcon('CostaRica'),
    value: 'Коста-Рика',
    code: '+506',
    iso2: 'CR',
    iso3: 'CRI',
  },
  {
    ...getIcon('CoteDIvoire'),
    value: "Кот-д'Ивуар",
    code: '+225',
    iso2: 'CI',
    iso3: 'CIV',
  },
  {
    ...getIcon('Croatia'),
    value: 'Хорватия',
    code: '+385',
    iso2: 'HR',
    iso3: 'HRV',
  },
  {
    ...getIcon('Cuba'),
    value: 'Куба',
    code: '+53',
    iso2: 'CU',
    iso3: 'CUB',
  },
  {
    ...getIcon('Cyprus'),
    value: 'Кипр',
    code: '+357',
    iso2: 'CY',
    iso3: 'CYP',
  },
  {
    ...getIcon('Czechia'),
    value: 'Чехия',
    code: '+420',
    iso2: 'CZ',
    iso3: 'CZE',
  },
  {
    ...getIcon('Denmark'),
    value: 'Дания',
    code: '+45',
    iso2: 'DK',
    iso3: 'DNK',
  },
  {
    ...getIcon('Djibouti'),
    value: 'Джибути',
    code: '+253',
    iso2: 'DJ',
    iso3: 'DJI',
  },
  {
    ...getIcon('Dominica'),
    value: 'Доминика',
    code: '+1-767',
    iso2: 'DM',
    iso3: 'DMA',
  },
  {
    ...getIcon('DominicanRepublic'),
    value: 'Доминиканская Республика',
    code: '+1-809',
    iso2: 'DO',
    iso3: 'DOM',
  },
  {
    ...getIcon('DominicanRepublic'),
    value: 'Доминиканская Республика',
    code: '+1-829',
    iso2: 'DO',
    iso3: 'DOM',
  },
  {
    ...getIcon('DominicanRepublic'),
    value: 'Доминиканская Республика',
    code: '+1-849',
    iso2: 'DO',
    iso3: 'DOM',
  },
  {
    ...getIcon('Ecuador'),
    value: 'Эквадор',
    code: '+593',
    iso2: 'EC',
    iso3: 'ECU',
  },
  {
    ...getIcon('Egypt'),
    value: 'Египет',
    code: '+20',
    iso2: 'EG',
    iso3: 'EGY',
  },
  {
    ...getIcon('ElSalvador'),
    value: 'Сальвадор',
    code: '+503',
    iso2: 'SV',
    iso3: 'SLV',
  },
  {
    ...getIcon('EquatorialGuinea'),
    value: 'Экваториальная Гвинея',
    code: '+240',
    iso2: 'GQ',
    iso3: 'GNQ',
  },
  {
    ...getIcon('Eritrea'),
    value: 'Эритрея',
    code: '+291',
    iso2: 'ER',
    iso3: 'ERI',
  },
  {
    ...getIcon('Estonia'),
    value: 'Эстония',
    code: '+372',
    iso2: 'EE',
    iso3: 'EST',
  },
  {
    ...getIcon('Ethiopia'),
    value: 'Эфиопия',
    code: '+251',
    iso2: 'ET',
    iso3: 'ETH',
  },
  {
    ...getIcon('FalklandIslands'),
    value: 'Фолклендские острова',
    code: '+500',
    iso2: 'FK',
    iso3: 'FLK',
  },
  {
    ...getIcon('Fiji'),
    value: 'Фиджи',
    code: '+679',
    iso2: 'FJ',
    iso3: 'FJI',
  },
  {
    ...getIcon('Finland'),
    value: 'Финляндия',
    code: '+358',
    iso2: 'FI',
    iso3: 'FIN',
  },
  {
    ...getIcon('France'),
    value: 'Франция',
    code: '+33',
    iso2: 'FR',
    iso3: 'FRA',
  },
  {
    ...getIcon('Gabon'),
    value: 'Габон',
    code: '+241',
    iso2: 'GA',
    iso3: 'GAB',
  },
  {
    ...getIcon('Gambia'),
    value: 'Гамбия',
    code: '+220',
    iso2: 'GM',
    iso3: 'GMB',
  },
  {
    ...getIcon('Georgia'),
    value: 'Грузия',
    code: '+995',
    iso2: 'GE',
    iso3: 'GEO',
  },
  {
    ...getIcon('Germany'),
    value: 'Германия',
    code: '+49',
    iso2: 'DE',
    iso3: 'DEU',
  },
  {
    ...getIcon('Ghana'),
    value: 'Гана',
    code: '+233',
    iso2: 'GH',
    iso3: 'GHA',
  },
  {
    ...getIcon('Gibraltar'),
    value: 'Гибралтар',
    code: '+350',
    iso2: 'GI',
    iso3: 'GIB',
  },
  {
    ...getIcon('GreatBritain'),
    value: 'Великобритания',
    code: '+44',
    iso2: 'GB',
    iso3: 'GBR',
  },
  {
    ...getIcon('Greece'),
    value: 'Греция',
    code: '+30',
    iso2: 'GR',
    iso3: 'GRC',
  },
  {
    ...getIcon('Grenada'),
    value: 'Гренада',
    code: '+1-473',
    iso2: 'GD',
    iso3: 'GRD',
  },
  {
    ...getIcon('Guatemala'),
    value: 'Гватемала',
    code: '+502',
    iso2: 'GT',
    iso3: 'GTM',
  },
  {
    ...getIcon('Guernsey'),
    value: 'Гернси',
    code: '+44-1481',
    iso2: 'GG',
    iso3: 'GGY',
  },
  {
    ...getIcon('Guinea'),
    value: 'Гвинея',
    code: '+224',
    iso2: 'GN',
    iso3: 'GN',
  },
  {
    ...getIcon('GuineaBissau'),
    value: 'Гвинея-Бисау',
    code: '+245',
    iso2: 'GW',
    iso3: 'GNB',
  },
  {
    ...getIcon('Guyana'),
    value: 'Гайана',
    code: '+592',
    iso2: 'GY',
    iso3: 'GUY',
  },
  {
    ...getIcon('Haiti'),
    value: 'Гаити',
    code: '+509',
    iso2: 'HT',
    iso3: 'HTI',
  },
  {
    ...getIcon('Honduras'),
    value: 'Гондурас',
    code: '+504',
    iso2: 'HN',
    iso3: 'HND',
  },
  {
    ...getIcon('HongKong'),
    value: 'Гонконг',
    code: '+852',
    iso2: 'HK',
    iso3: 'HKG',
  },
  {
    ...getIcon('Hungary'),
    value: 'Венгрия',
    code: '+36',
    iso2: 'HU',
    iso3: 'HUN',
  },
  {
    ...getIcon('Iceland'),
    value: 'Исландия',
    code: '+354',
    iso2: 'IS',
    iso3: 'ISL',
  },
  {
    ...getIcon('India'),
    value: 'Индия',
    code: '+91',
    iso2: 'IN',
    iso3: 'IND',
  },
  {
    ...getIcon('Indonesia'),
    value: 'Индонезия',
    code: '+62',
    iso2: 'ID',
    iso3: 'IDN',
  },
  {
    ...getIcon('Iran'),
    value: 'Иран',
    code: '+98',
    iso2: 'IR',
    iso3: 'IRN',
  },
  {
    ...getIcon('Iraq'),
    value: 'Ирак',
    code: '+964',
    iso2: 'IQ',
    iso3: 'IRQ',
  },
  {
    ...getIcon('Ireland'),
    value: 'Ирландия',
    code: '+353',
    iso2: 'IE',
    iso3: 'IRL',
  },
  {
    ...getIcon('IsleOfMan'),
    value: 'Остров Мэн',
    code: '+44-1624',
    iso2: 'IM',
    iso3: 'IMN',
  },
  {
    ...getIcon('Israel'),
    value: 'Израиль',
    code: '+972',
    iso2: 'IL',
    iso3: 'ISR',
  },
  {
    ...getIcon('Italy'),
    value: 'Италия',
    code: '+39',
    iso2: 'IT',
    iso3: 'ITA',
  },
  {
    ...getIcon('Jamaica'),
    value: 'Ямайка',
    code: '+1-876',
    iso2: 'JM',
    iso3: 'JAM',
  },
  {
    ...getIcon('Japan'),
    value: 'Япония',
    code: '+81',
    iso2: 'JP',
    iso3: 'JPN',
  },
  {
    ...getIcon('Jersey'),
    value: 'Джерси',
    code: '+44-1534',
    iso2: 'JE',
    iso3: 'JEY',
  },
  {
    ...getIcon('Jordan'),
    value: 'Иордания',
    code: '+962',
    iso2: 'JO',
    iso3: 'JOR',
  },
  {
    ...getIcon('Kazakhstan'),
    value: 'Казахстан',
    code: '+7',
    iso2: 'KZ',
    iso3: 'KAZ',
  },
  {
    ...getIcon('Kenya'),
    value: 'Кения',
    code: '+254',
    iso2: 'KE',
    iso3: 'KEN',
  },
  {
    ...getIcon('KoreaNorth'),
    value: 'Северная Корея',
    code: '+850',
    iso2: 'KP',
    iso3: 'PRK',
  },
  {
    ...getIcon('KoreaSouth'),
    value: 'Южная Корея',
    code: '+82',
    iso2: 'KR',
    iso3: 'KOR',
  },
  {
    ...getIcon('Kuwait'),
    value: 'Кувейт',
    code: '+965',
    iso2: 'KW',
    iso3: 'KWT',
  },
  {
    ...getIcon('Kyrgyzstan'),
    value: 'Киргизия',
    code: '+996',
    iso2: 'KG',
    iso3: 'KGZ',
  },
  {
    ...getIcon('Laos'),
    value: 'Лаос',
    code: '+856',
    iso2: 'LA',
    iso3: 'LAO',
  },
  {
    ...getIcon('Latvia'),
    value: 'Латвия',
    code: '+371',
    iso2: 'LV',
    iso3: 'LVA',
  },
  {
    ...getIcon('Lebanon'),
    value: 'Ливан',
    code: '+961',
    iso2: 'LB',
    iso3: 'LBN',
  },
  {
    ...getIcon('Lesotho'),
    value: 'Лесото',
    code: '+266',
    iso2: 'LS',
    iso3: 'LSO',
  },
  {
    ...getIcon('Liberia'),
    value: 'Либерия',
    code: '+231',
    iso2: 'LR',
    iso3: 'LBR',
  },
  {
    ...getIcon('Libya'),
    value: 'Ливия',
    code: '+218',
    iso2: 'LY',
    iso3: 'LBY',
  },
  {
    ...getIcon('Liechtenstein'),
    value: 'Лихтенштейн',
    code: '+423',
    iso2: 'LI',
    iso3: 'LIE',
  },
  {
    ...getIcon('Lithuania'),
    value: 'Литва',
    code: '+370',
    iso2: 'LT',
    iso3: 'LTU',
  },
  {
    ...getIcon('Luxembourg'),
    value: 'Люксембург',
    code: '+352',
    iso2: 'LU',
    iso3: 'LUX',
  },
  {
    ...getIcon('Macao'),
    value: 'Макао',
    code: '+853',
    iso2: 'MO',
    iso3: 'MAC',
  },
  {
    ...getIcon('Macedonia'),
    value: 'Северная Македония',
    code: '+389',
    iso2: 'MK',
    iso3: 'MKD',
  },
  {
    ...getIcon('Madagascar'),
    value: 'Мадагаскар',
    code: '+261',
    iso2: 'MG',
    iso3: 'MDG',
  },
  {
    ...getIcon('Malawi'),
    value: 'Малави',
    code: '+265',
    iso2: 'MW',
    iso3: 'MWI',
  },
  {
    ...getIcon('Malaysia'),
    value: 'Малайзия',
    code: '+213',
    iso2: 'MW',
    iso3: 'MWI',
  },
  {
    ...getIcon('Maldives'),
    value: 'Мальдивы',
    code: '+960',
    iso2: 'MV',
    iso3: 'MDV',
  },
  {
    ...getIcon('Mali'),
    value: 'Мали',
    code: '+223',
    iso2: 'ML',
    iso3: 'MLI',
  },
  {
    ...getIcon('Malta'),
    value: 'Мальта',
    code: '+356',
    iso2: 'MT',
    iso3: 'MLT',
  },
  {
    ...getIcon('Mauritania'),
    value: 'Мавритания',
    code: '+222',
    iso2: 'MR',
    iso3: 'MRT',
  },
  {
    ...getIcon('Mauritius'),
    value: 'Маврикий',
    code: '+230',
    iso2: 'MU',
    iso3: 'MUS',
  },
  {
    ...getIcon('Mexico'),
    value: 'Мексика',
    code: '+52',
    iso2: 'MX',
    iso3: 'MEX',
  },
  {
    ...getIcon('Micronesia'),
    value: 'Микронезия',
    code: '+691',
    iso2: 'FM',
    iso3: 'FSM',
  },
  {
    ...getIcon('Moldova'),
    value: 'Молдавия',
    code: '+373',
    iso2: 'MD',
    iso3: 'MDA',
  },
  {
    ...getIcon('Monaco'),
    value: 'Монако',
    code: '+377',
    iso2: 'MC',
    iso3: 'MCO',
  },
  {
    ...getIcon('Mongolia'),
    value: 'Монголия',
    code: '+976',
    iso2: 'MN',
    iso3: 'MNG',
  },
  {
    ...getIcon('Montenegro'),
    value: 'Черногория',
    code: '+382',
    iso2: 'ME',
    iso3: 'MNE',
  },
  {
    ...getIcon('Montserrat'),
    value: 'Монтсеррат',
    code: '+1-664',
    iso2: 'ME',
    iso3: 'MNE',
  },
  {
    ...getIcon('Morocco'),
    value: 'Марокко',
    code: '+212',
    iso2: 'MA',
    iso3: 'MAR',
  },
  {
    ...getIcon('Mozambique'),
    value: 'Мозамбик',
    code: '+258',
    iso2: 'MZ',
    iso3: 'MOZ',
  },
  {
    ...getIcon('Myanmar'),
    value: 'Мьянма',
    code: '+95',
    iso2: 'MM',
    iso3: 'MMR',
  },
  {
    ...getIcon('Namibia'),
    value: 'Намибия',
    code: '+264',
    iso2: 'NA',
    iso3: 'NAM',
  },
  {
    ...getIcon('Nepal'),
    value: 'Непал',
    code: '+977',
    iso2: 'NP',
    iso3: 'NPL',
  },
  {
    ...getIcon('Netherlands'),
    value: 'Нидерланды',
    code: '+31',
    iso2: 'NL',
    iso3: 'NLD',
  },
  {
    ...getIcon('NetherlandsAntillesCountry'),
    value: 'Нидерландские Антильские острова',
    code: '+599',
    iso2: 'AN',
    iso3: 'ANT',
  },
  {
    ...getIcon('NewZealand'),
    value: 'Новая Зеландия',
    code: '+64',
    iso2: 'NZ',
    iso3: 'NZL',
  },
  {
    ...getIcon('Nicaragua'),
    value: 'Никарагуа',
    code: '+505',
    iso2: 'NI',
    iso3: 'NIC',
  },
  {
    ...getIcon('Niger'),
    value: 'Нигер',
    code: '+227',
    iso2: 'NE',
    iso3: 'NER',
  },
  {
    ...getIcon('Nigeria'),
    value: 'Нигерия',
    code: '+234',
    iso2: 'NG',
    iso3: 'NGA',
  },
  {
    ...getIcon('Norway'),
    value: 'Норвегия',
    code: '+47',
    iso2: 'NO',
    iso3: 'NOR',
  },
  {
    ...getIcon('Oman'),
    value: 'Оман',
    code: '+968',
    iso2: 'OM',
    iso3: 'OMN',
  },
  {
    ...getIcon('Pakistan'),
    value: 'Пакистан',
    code: '+92',
    iso2: 'PK',
    iso3: 'PAK',
  },
  {
    ...getIcon('Palau'),
    value: 'Палау',
    code: '+680',
    iso2: 'PW',
    iso3: 'PLW',
  },
  {
    ...getIcon('Panama'),
    value: 'Панама',
    code: '+507',
    iso2: 'PA',
    iso3: 'PAN',
  },
  {
    ...getIcon('PapuaNewGuinea'),
    value: 'Папуа-Новая Гвинея',
    code: '+675',
    iso2: 'PG',
    iso3: 'PNG',
  },
  {
    ...getIcon('Paraguay'),
    value: 'Парагвай',
    code: '+595',
    iso2: 'PY',
    iso3: 'PRY',
  },
  {
    ...getIcon('Peru'),
    value: 'Перу',
    code: '+51',
    iso2: 'PE',
    iso3: 'PER',
  },
  {
    ...getIcon('Philippines'),
    value: 'Филиппины',
    code: '+63',
    iso2: 'PH',
    iso3: 'PHL',
  },
  {
    ...getIcon('Poland'),
    value: 'Польша',
    code: '+48',
    iso2: 'PL',
    iso3: 'POL',
  },
  {
    ...getIcon('PolynesiaFrench'),
    value: 'Французская Полинезия',
    code: '+689',
    iso2: 'PF',
    iso3: 'PYF',
  },
  {
    ...getIcon('Portugal'),
    value: 'Португалия',
    code: '+351',
    iso2: 'PT',
    iso3: 'PRT',
  },
  {
    ...getIcon('PuertoRico'),
    value: 'Пуэрто-Рико',
    code: '+1-787',
    iso2: 'PR',
    iso3: 'PRI',
  },
  {
    ...getIcon('PuertoRico'),
    value: 'Пуэрто-Рико',
    code: '+1-939',
    iso2: 'PR',
    iso3: 'PRI',
  },
  {
    ...getIcon('Qatar'),
    value: 'Катар',
    code: '+974',
    iso2: 'QA',
    iso3: 'QAT',
  },
  {
    ...getIcon('Romania'),
    value: 'Румыния',
    code: '+40',
    iso2: 'RO',
    iso3: 'ROU',
  },
  {
    ...getIcon('Russia'),
    value: 'Россия',
    code: '+7',
    iso2: 'RU',
    iso3: 'RUS',
  },
  {
    ...getIcon('Rwanda'),
    value: 'Руанда',
    code: '+250',
    iso2: 'RW',
    iso3: 'RWA',
  },
  {
    ...getIcon('SaintHelena'),
    value: 'Остров Святой Елены',
    code: '+290',
    iso2: 'SH',
    iso3: 'SHN',
  },
  {
    ...getIcon('SaintKittsAndNevis'),
    value: 'Сент-Китс и Невис',
    code: '+1-869',
    iso2: 'KN',
    iso3: 'KNA',
  },
  {
    ...getIcon('SaintLucia'),
    value: 'Сент-Люсия',
    code: '+1-758',
    iso2: 'LC',
    iso3: 'LCA',
  },
  {
    ...getIcon('SaintVincentAndTheGrenadines'),
    value: 'Сент-Винсент и Гренадины',
    code: '+1-784',
    iso2: 'VC',
    iso3: 'VCT',
  },
  {
    ...getIcon('Samoa'),
    value: 'Самоа',
    code: '+685',
    iso2: 'WS',
    iso3: 'WSM',
  },
  {
    ...getIcon('SanMarino'),
    value: 'Сан-Марино',
    code: '+378',
    iso2: 'SM',
    iso3: 'SMR',
  },
  {
    ...getIcon('SaoTomeAndPrincipe'),
    value: 'Сан-Томе и Принсипи',
    code: '+239',
    iso2: 'ST',
    iso3: 'STP',
  },
  {
    ...getIcon('SaudiArabia'),
    value: 'Саудовская Аравия',
    code: '+966',
    iso2: 'SA',
    iso3: 'SAU',
  },
  {
    ...getIcon('Senegal'),
    value: 'Сенегал',
    code: '+221',
    iso2: 'SN',
    iso3: 'SEN',
  },
  {
    ...getIcon('Serbia'),
    value: 'Сербия',
    code: '+381',
    iso2: 'RS',
    iso3: 'SRB',
  },
  {
    ...getIcon('Seychelles'),
    value: 'Сейшелы',
    code: '+248',
    iso2: 'SC',
    iso3: 'SYC',
  },
  {
    ...getIcon('SierraLeone'),
    value: 'Сьерра-Леоне',
    code: '+232',
    iso2: 'SL',
    iso3: 'SLE',
  },
  {
    ...getIcon('Singapore'),
    value: 'Сингапур',
    code: '+65',
    iso2: 'SG',
    iso3: 'SGP',
  },
  {
    ...getIcon('Slovakia'),
    value: 'Словакия',
    code: '+421',
    iso2: 'SK',
    iso3: 'SVK',
  },
  {
    ...getIcon('Slovenia'),
    value: 'Словения',
    code: '+386',
    iso2: 'SI',
    iso3: 'SVN',
  },
  {
    ...getIcon('SolomonIslands'),
    value: 'Соломоновы острова',
    code: '+677',
    iso2: 'SB',
    iso3: 'SLB',
  },
  {
    ...getIcon('Somalia'),
    value: 'Сомали',
    code: '+252',
    iso2: 'SO',
    iso3: 'SOM',
  },
  {
    ...getIcon('SouthAfrica'),
    value: 'Южная Африка',
    code: '+27',
    iso2: 'ZA',
    iso3: 'ZAF',
  },
  {
    ...getIcon('Spain'),
    value: 'Испания',
    code: '+34',
    iso2: 'ES',
    iso3: 'ESP',
  },
  {
    ...getIcon('SriLanka'),
    value: 'Шри-Ланка',
    code: '+94',
    iso2: 'LK',
    iso3: 'LKA',
  },
  {
    ...getIcon('Sudan'),
    value: 'Судан',
    code: '+249',
    iso2: 'SD',
    iso3: 'SDN',
  },
  {
    ...getIcon('Suriname'),
    value: 'Суринам',
    code: '+597',
    iso2: 'SR',
    iso3: 'SUR',
  },
  {
    ...getIcon('Swaziland'),
    value: 'Эсватини',
    code: '+213',
    iso2: 'SZ',
    iso3: 'SWZ',
  },
  {
    ...getIcon('Sweden'),
    value: 'Швеция',
    code: '+46',
    iso2: 'SE',
    iso3: 'SWE',
  },
  {
    ...getIcon('Switzerland'),
    value: 'Швейцария',
    code: '+41',
    iso2: 'CH',
    iso3: 'CHE',
  },
  {
    ...getIcon('Syria'),
    value: 'Сирия',
    code: '+963',
    iso2: 'SY',
    iso3: 'SYR',
  },
  {
    ...getIcon('Taiwan'),
    value: 'Тайвань',
    code: '+886',
    iso2: 'TW',
    iso3: 'TWN',
  },
  {
    ...getIcon('Tajikistan'),
    value: 'Таджикистан',
    code: '+992',
    iso2: 'TJ',
    iso3: 'TJK',
  },
  {
    ...getIcon('Tanzania'),
    value: 'Танзания',
    code: '+255',
    iso2: 'TZ',
    iso3: 'TZA',
  },
  {
    ...getIcon('Thailand'),
    value: 'Таиланд',
    code: '+66',
    iso2: 'TH',
    iso3: 'THA',
  },
  {
    ...getIcon('TimorLeste'),
    value: 'Восточный Тимор',
    code: '+670',
    iso2: 'TL',
    iso3: 'TLS',
  },
  {
    ...getIcon('Togo'),
    value: 'Того',
    code: '+228',
    iso2: 'TG',
    iso3: 'TGO',
  },
  {
    ...getIcon('Tonga'),
    value: 'Тонга',
    code: '+676',
    iso2: 'TO',
    iso3: 'TON',
  },
  {
    ...getIcon('TrinidadAndTobago'),
    value: 'Тринидад и Тобаго',
    code: '+1-868',
    iso2: 'TT',
    iso3: 'TTO',
  },
  {
    ...getIcon('Tunisia'),
    value: 'Тунис',
    code: '+216',
    iso2: 'TN',
    iso3: 'TUN',
  },
  {
    ...getIcon('Turkey'),
    value: 'Турция',
    code: '+90',
    iso2: 'TR',
    iso3: 'TUR',
  },
  {
    ...getIcon('Turkmenistan'),
    value: 'Туркменистан',
    code: '+993',
    iso2: 'TM',
    iso3: 'TKM',
  },
  {
    ...getIcon('TurksAndCaicosIslands'),
    value: 'Острова Теркс и Кайкос',
    code: '+1-649',
    iso2: 'TC',
    iso3: 'TCA',
  },
  {
    ...getIcon('Uganda'),
    value: 'Уганда',
    code: '+256',
    iso2: 'UG',
    iso3: 'UGA',
  },
  {
    ...getIcon('Ukraine'),
    value: 'Украина',
    code: '+380',
    iso2: 'UA',
    iso3: 'UKR',
  },
  {
    ...getIcon('UnitedStatesOfAmerica'),
    value: 'Соединенные Штаты Америки',
    code: '+1',
    iso2: 'US',
    iso3: 'USA',
  },
  {
    ...getIcon('Uruguay'),
    value: 'Уругвай',
    code: '+598',
    iso2: 'UY',
    iso3: 'URY',
  },
  {
    ...getIcon('Uzbekistan'),
    value: 'Узбекистан',
    code: '+998',
    iso2: 'UZ',
    iso3: 'UZB',
  },
  {
    ...getIcon('Vanuatu'),
    value: 'Вануату',
    code: '+678',
    iso2: 'VU',
    iso3: 'VUT',
  },
  {
    ...getIcon('Venezuela'),
    value: 'Венесуэла',
    code: '+58',
    iso2: 'VE',
    iso3: 'VEN',
  },
  {
    ...getIcon('Vietnam'),
    value: 'Вьетнам',
    code: '+84',
    iso2: 'VN',
    iso3: 'VNM',
  },
  {
    ...getIcon('Yemen'),
    value: 'Йемен',
    code: '+967',
    iso2: 'YE',
    iso3: 'YEM',
  },
  {
    ...getIcon('Zambia'),
    value: 'Замбия',
    code: '+260',
    iso2: 'ZM',
    iso3: 'ZMB',
  },
  {
    ...getIcon('Zimbabwe'),
    value: 'Зимбабве',
    code: '+263',
    iso2: 'ZW',
    iso3: 'ZWE',
  },
];
