"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countries = [
    {
        name: 'Afghanistan',
        countryCode: 'AF',
        phoneCode: '+93',
    },
    {
        name: 'Albania',
        countryCode: 'AL',
        phoneCode: '+355',
    },
    {
        name: 'Algeria',
        countryCode: 'DZ',
        phoneCode: '+213',
    },
    {
        name: 'American Samoa',
        countryCode: 'AS',
        phoneCode: '+1',
    },
    {
        name: 'Andorra',
        countryCode: 'AD',
        phoneCode: '+376',
    },
    {
        name: 'Angola',
        countryCode: 'AO',
        phoneCode: '+244',
    },
    {
        name: 'Anguilla',
        countryCode: 'AI',
        phoneCode: '+1',
    },
    {
        name: 'Antigua',
        countryCode: 'AG',
        phoneCode: '+1',
    },
    {
        name: 'Argentina',
        countryCode: 'AR',
        phoneCode: '+54',
    },
    {
        name: 'Armenia',
        countryCode: 'AM',
        phoneCode: '+374',
    },
    {
        name: 'Aruba',
        countryCode: 'AW',
        phoneCode: '+297',
    },
    {
        name: 'Australia',
        countryCode: 'AU',
        phoneCode: '+61',
    },
    {
        name: 'Austria',
        countryCode: 'AI',
        phoneCode: '+43',
    },
    {
        name: 'Azerbaijan',
        countryCode: 'AZ',
        phoneCode: '+994',
    },
    {
        name: 'Bahrain',
        countryCode: 'BH',
        phoneCode: '+973',
    },
    {
        name: 'Bangladesh',
        countryCode: 'BD',
        phoneCode: '+880',
    },
    {
        name: 'Barbados',
        countryCode: 'BB',
        phoneCode: '+1',
    },
    {
        name: 'Belarus',
        countryCode: 'BY',
        phoneCode: '+375',
    },
    {
        name: 'Belgium',
        countryCode: 'BE',
        phoneCode: '+32',
    },
    {
        name: 'Belize',
        countryCode: 'BZ',
        phoneCode: '+501',
    },
    {
        name: 'Benin',
        countryCode: 'BJ',
        phoneCode: '+229',
    },
    {
        name: 'Bermuda',
        countryCode: 'BM',
        phoneCode: '+1',
    },
    {
        name: 'Bhutan',
        countryCode: 'BT',
        phoneCode: '+975',
    },
    {
        name: 'Bolivia',
        countryCode: 'BO',
        phoneCode: '+591',
    },
    {
        name: 'Bosnia and Herzegovina',
        countryCode: 'BA',
        phoneCode: '+387',
    },
    {
        name: 'Botswana',
        countryCode: 'BW',
        phoneCode: '+267',
    },
    {
        name: 'Brazil',
        countryCode: 'BR',
        phoneCode: '+55',
    },
    {
        name: 'British Indian Ocean Territory',
        countryCode: 'IO',
        phoneCode: '+246',
    },
    {
        name: 'British Virgin Islands',
        countryCode: 'VG',
        phoneCode: '+1',
    },
    {
        name: 'Brunei',
        countryCode: 'BN',
        phoneCode: '+673',
    },
    {
        name: 'Bulgaria',
        countryCode: 'BG',
        phoneCode: '+359',
    },
    {
        name: 'Burkina Faso',
        countryCode: 'BF',
        phoneCode: '+226',
    },
    {
        name: 'Burma Myanmar',
        countryCode: 'MM',
        phoneCode: '+95',
    },
    {
        name: 'Burundi',
        countryCode: 'BI',
        phoneCode: '+257',
    },
    {
        name: 'Cambodia',
        countryCode: 'KH',
        phoneCode: '+855',
    },
    {
        name: 'Cameroon',
        countryCode: 'CM',
        phoneCode: '+237',
    },
    {
        name: 'Canada',
        countryCode: 'CA',
        phoneCode: '+1',
    },
    {
        name: 'Cape Verde',
        countryCode: 'CV',
        phoneCode: '+238',
    },
    {
        name: 'Cayman Islands',
        countryCode: 'KY',
        phoneCode: '+1',
    },
    {
        name: 'Central African Republic',
        countryCode: 'CF',
        phoneCode: '+236',
    },
    {
        name: 'Chad',
        countryCode: 'ID',
        phoneCode: '+235',
    },
    {
        name: 'Chile',
        countryCode: 'CL',
        phoneCode: '+56',
    },
    {
        name: 'China',
        countryCode: 'CN',
        phoneCode: '+86',
    },
    {
        name: 'Colombia',
        countryCode: 'CO',
        phoneCode: '+57',
    },
    {
        name: 'Comoros',
        countryCode: 'KM',
        phoneCode: '+269',
    },
    {
        name: 'Cook Islands',
        countryCode: 'CK',
        phoneCode: '+682',
    },
    {
        name: 'Costa Rica',
        countryCode: 'CR',
        phoneCode: '+506',
    },
    {
        name: 'Côte dIvoire',
        countryCode: 'CI',
        phoneCode: '+225',
    },
    {
        name: 'Croatia',
        countryCode: 'HR',
        phoneCode: '+385',
    },
    {
        name: 'Cuba',
        countryCode: 'CU',
        phoneCode: '+53',
    },
    {
        name: 'Cyprus',
        countryCode: 'CY',
        phoneCode: '+357',
    },
    {
        name: 'Czech Republic',
        countryCode: 'CZ',
        phoneCode: '+420',
    },
    {
        name: 'Democratic Republic of Congo',
        countryCode: 'CD',
        phoneCode: '+243',
    },
    {
        name: 'Denmark',
        countryCode: 'DK',
        phoneCode: '+45',
    },
    {
        name: 'Djibouti',
        countryCode: 'DJ',
        phoneCode: '+253',
    },
    {
        name: 'Dominica',
        countryCode: 'DM',
        phoneCode: '+1',
    },
    {
        name: 'Dominican Republic',
        countryCode: 'DO',
        phoneCode: '+1',
    },
    {
        name: 'Ecuador',
        countryCode: 'EC',
        phoneCode: '+593',
    },
    {
        name: 'Egypt',
        countryCode: 'EG',
        phoneCode: '+20',
    },
    {
        name: 'El Salvador',
        countryCode: 'SV',
        phoneCode: '+503',
    },
    {
        name: 'Equatorial Guinea',
        countryCode: 'GQ',
        phoneCode: '+240',
    },
    {
        name: 'Eritrea',
        countryCode: 'ER',
        phoneCode: '+291',
    },
    {
        name: 'Estonia',
        countryCode: 'EE',
        phoneCode: '+372',
    },
    {
        name: 'Ethiopia',
        countryCode: 'ET',
        phoneCode: '+251',
    },
    {
        name: 'Falkland Islands',
        countryCode: 'FK',
        phoneCode: '+500',
    },
    {
        name: 'Faroe Islands',
        countryCode: 'FO',
        phoneCode: '+298',
    },
    {
        name: 'Federated States of Micronesia',
        countryCode: 'FM',
        phoneCode: '+691',
    },
    {
        name: 'Fiji',
        countryCode: 'FJ',
        phoneCode: '+679',
    },
    {
        name: 'Finland',
        countryCode: 'FI',
        phoneCode: '+358',
    },
    {
        name: 'France',
        countryCode: 'FR',
        phoneCode: '+33',
    },
    {
        name: 'French Guiana',
        countryCode: 'GF',
        phoneCode: '+594',
    },
    {
        name: 'French Polynesia',
        countryCode: 'PF',
        phoneCode: '+689',
    },
    {
        name: 'Gabon',
        countryCode: 'GA',
        phoneCode: '+241',
    },
    {
        name: 'Georgia',
        countryCode: 'GE',
        phoneCode: '+995',
    },
    {
        name: 'Germany',
        countryCode: 'DE',
        phoneCode: '+49',
    },
    {
        name: 'Ghana',
        countryCode: 'GH',
        phoneCode: '+233',
    },
    {
        name: 'Gibraltar',
        countryCode: 'GI',
        phoneCode: '+350',
    },
    {
        name: 'Greece',
        countryCode: 'GR',
        phoneCode: '+30',
    },
    {
        name: 'Greenland',
        countryCode: 'GL',
        phoneCode: '+299',
    },
    {
        name: 'Grenada',
        countryCode: 'GD',
        phoneCode: '+1',
    },
    {
        name: 'Guadeloupe',
        countryCode: 'GP',
        phoneCode: '+590',
    },
    {
        name: 'Guam',
        countryCode: 'GU',
        phoneCode: '+1',
    },
    {
        name: 'Guatemala',
        countryCode: 'GT',
        phoneCode: '+502',
    },
    {
        name: 'Guinea',
        countryCode: 'GN',
        phoneCode: '+224',
    },
    {
        name: 'Guinea-Bissau',
        countryCode: 'GW',
        phoneCode: '+245',
    },
    {
        name: 'Guyana',
        countryCode: 'GY',
        phoneCode: '+592',
    },
    {
        name: 'Haiti',
        countryCode: 'HT',
        phoneCode: '+509',
    },
    {
        name: 'Honduras',
        countryCode: 'HN',
        phoneCode: '+504',
    },
    {
        name: 'Hong Kong',
        countryCode: 'HK',
        phoneCode: '+852',
    },
    {
        name: 'Hungary',
        countryCode: 'HU',
        phoneCode: '+36',
    },
    {
        name: 'Iceland',
        countryCode: 'IS',
        phoneCode: '+354',
    },
    {
        name: 'India',
        countryCode: 'IN',
        phoneCode: '+91',
    },
    {
        name: 'Indonesia',
        countryCode: 'ID',
        phoneCode: '+62',
    },
    {
        name: 'Iran',
        countryCode: 'IR',
        phoneCode: '+98',
    },
    {
        name: 'Iraq',
        countryCode: 'IQ',
        phoneCode: '+964',
    },
    {
        name: 'Ireland',
        countryCode: 'IE',
        phoneCode: '+353',
    },
    {
        name: 'Israel',
        countryCode: 'IL',
        phoneCode: '+972',
    },
    {
        name: 'Italy',
        countryCode: 'IT',
        phoneCode: '+39',
    },
    {
        name: 'Jamaica',
        countryCode: 'JM',
        phoneCode: '+1',
    },
    {
        name: 'Japan',
        countryCode: 'JP',
        phoneCode: '+81',
    },
    {
        name: 'Jordan',
        countryCode: 'JO',
        phoneCode: '+962',
    },
    {
        name: 'Kazakhstan',
        countryCode: 'KZ',
        phoneCode: '+7',
    },
    {
        name: 'Kenya',
        countryCode: 'KE',
        phoneCode: '+254',
    },
    {
        name: 'Kiribati',
        countryCode: 'KI',
        phoneCode: '+686',
    },
    {
        name: 'Kosovo',
        countryCode: 'XK',
        phoneCode: '+383',
    },
    {
        name: 'Kuwait',
        countryCode: 'KW',
        phoneCode: '+965',
    },
    {
        name: 'Kyrgyzstan',
        countryCode: 'KG',
        phoneCode: '+996',
    },
    {
        name: 'Laos',
        countryCode: 'LA',
        phoneCode: '+856',
    },
    {
        name: 'Latvia',
        countryCode: 'LV',
        phoneCode: '+371',
    },
    {
        name: 'Lebanon',
        countryCode: 'LB',
        phoneCode: '+961',
    },
    {
        name: 'Lesotho',
        countryCode: 'LS',
        phoneCode: '+266',
    },
    {
        name: 'Liberia',
        countryCode: 'LR',
        phoneCode: '+231',
    },
    {
        name: 'Libya',
        countryCode: 'LY',
        phoneCode: '+218',
    },
    {
        name: 'Liechtenstein',
        countryCode: 'LI',
        phoneCode: '+423',
    },
    {
        name: 'Lithuania',
        countryCode: 'LT',
        phoneCode: '+370',
    },
    {
        name: 'Luxembourg',
        countryCode: 'LU',
        phoneCode: '+352',
    },
    {
        name: 'Macau',
        countryCode: 'MO',
        phoneCode: '+853',
    },
    {
        name: 'Macedonia',
        countryCode: 'MK',
        phoneCode: '+389',
    },
    {
        name: 'Madagascar',
        countryCode: 'MG',
        phoneCode: '+261',
    },
    {
        name: 'Malawi',
        countryCode: 'MW',
        phoneCode: '+265',
    },
    {
        name: 'Malaysia',
        countryCode: 'MY',
        phoneCode: '+60',
    },
    {
        name: 'Maldives',
        countryCode: 'MV',
        phoneCode: '+960',
    },
    {
        name: 'Mali',
        countryCode: 'ML',
        phoneCode: '+223',
    },
    {
        name: 'Malta',
        countryCode: 'MT',
        phoneCode: '+356',
    },
    {
        name: 'Marshall Islands',
        countryCode: 'MH',
        phoneCode: '+692',
    },
    {
        name: 'Martinique',
        countryCode: 'MQ',
        phoneCode: '+596',
    },
    {
        name: 'Mauritania',
        countryCode: 'MR',
        phoneCode: '+222',
    },
    {
        name: 'Mauritius',
        countryCode: 'MU',
        phoneCode: '+230',
    },
    {
        name: 'Mayotte',
        countryCode: 'YT',
        phoneCode: '+262',
    },
    {
        name: 'Mexico',
        countryCode: 'MX',
        phoneCode: '+52',
    },
    {
        name: 'Moldova',
        countryCode: 'MD',
        phoneCode: '+373',
    },
    {
        name: 'Monaco',
        countryCode: 'MC',
        phoneCode: '+377',
    },
    {
        name: 'Mongolia',
        countryCode: 'MN',
        phoneCode: '+976',
    },
    {
        name: 'Montenegro',
        countryCode: 'ME',
        phoneCode: '+382',
    },
    {
        name: 'Montserrat',
        countryCode: 'MS',
        phoneCode: '+1',
    },
    {
        name: 'Morocco',
        countryCode: 'MA',
        phoneCode: '+212',
    },
    {
        name: 'Mozambique',
        countryCode: 'MZ',
        phoneCode: '+258',
    },
    {
        name: 'Namibia',
        countryCode: 'NA',
        phoneCode: '+264',
    },
    {
        name: 'Nauru',
        countryCode: 'NR',
        phoneCode: '+674',
    },
    {
        name: 'Nepal',
        countryCode: 'NP',
        phoneCode: '+977',
    },
    {
        name: 'Netherlands',
        countryCode: 'NL',
        phoneCode: '+31',
    },
    {
        name: 'Netherlands Antilles',
        countryCode: 'AN',
        phoneCode: '+599',
    },
    {
        name: 'New Caledonia',
        countryCode: 'NC',
        phoneCode: '+687',
    },
    {
        name: 'New Zealand',
        countryCode: 'NZ',
        phoneCode: '+64',
    },
    {
        name: 'Nicaragua',
        countryCode: 'NI',
        phoneCode: '+505',
    },
    {
        name: 'Niger',
        countryCode: 'NE',
        phoneCode: '+227',
    },
    {
        name: 'Nigeria',
        countryCode: 'NG',
        phoneCode: '+234',
    },
    {
        name: 'Niue',
        countryCode: 'NU',
        phoneCode: '+683',
    },
    {
        name: 'Norfolk Island',
        countryCode: 'NF',
        phoneCode: '+672',
    },
    {
        name: 'North Korea',
        countryCode: 'KP',
        phoneCode: '+850',
    },
    {
        name: 'Northern Mariana Islands',
        countryCode: 'MP',
        phoneCode: '+1',
    },
    {
        name: 'Norway',
        countryCode: 'NO',
        phoneCode: '+47',
    },
    {
        name: 'Oman',
        countryCode: 'OM',
        phoneCode: '+968',
    },
    {
        name: 'Pakistan',
        countryCode: 'PK',
        phoneCode: '+92',
    },
    {
        name: 'Palau',
        countryCode: 'PW',
        phoneCode: '+680',
    },
    {
        name: 'Palestine',
        countryCode: 'PS',
        phoneCode: '+970',
    },
    {
        name: 'Panama',
        countryCode: 'PA',
        phoneCode: '+507',
    },
    {
        name: 'Papua New Guinea',
        countryCode: 'PG',
        phoneCode: '+675',
    },
    {
        name: 'Paraguay',
        countryCode: 'PY',
        phoneCode: '+595',
    },
    {
        name: 'Peru',
        countryCode: 'PE',
        phoneCode: '+51',
    },
    {
        name: 'Philippines',
        countryCode: 'PH',
        phoneCode: '+63',
    },
    {
        name: 'Poland',
        countryCode: 'PL',
        phoneCode: '+48',
    },
    {
        name: 'Portugal',
        countryCode: 'PT',
        phoneCode: '+351',
    },
    {
        name: 'Puerto Rico',
        countryCode: 'PR',
        phoneCode: '+1',
    },
    {
        name: 'Qatar',
        countryCode: 'QA',
        phoneCode: '+974',
    },
    {
        name: 'Republic of the Congo',
        countryCode: 'CG',
        phoneCode: '+242',
    },
    {
        name: 'Réunion',
        countryCode: 'RE',
        phoneCode: '+262',
    },
    {
        name: 'Romania',
        countryCode: 'RO',
        phoneCode: '+40',
    },
    {
        name: 'Russia',
        countryCode: 'RU',
        phoneCode: '+7',
    },
    {
        name: 'Rwanda',
        countryCode: 'RW',
        phoneCode: '+250',
    },
    {
        name: 'Saint Barthélemy',
        countryCode: 'BL',
        phoneCode: '+590',
    },
    {
        name: 'Saint Helena',
        countryCode: 'SH',
        phoneCode: '+290',
    },
    {
        name: 'Saint Kitts and Nevis',
        countryCode: 'KN',
        phoneCode: '+1',
    },
    {
        name: 'Saint Martin',
        countryCode: 'MF',
        phoneCode: '+590',
    },
    {
        name: 'Saint Pierre and Miquelon',
        countryCode: 'PM',
        phoneCode: '+508',
    },
    {
        name: 'Saint Vincent and the Grenadines',
        countryCode: 'VC',
        phoneCode: '+1',
    },
    {
        name: 'Samoa',
        countryCode: 'WS',
        phoneCode: '+685',
    },
    {
        name: 'San Marino',
        countryCode: 'SM',
        phoneCode: '+378',
    },
    {
        name: 'São Tomé and Príncipe',
        countryCode: 'ST',
        phoneCode: '+239',
    },
    {
        name: 'Saudi Arabia',
        countryCode: 'SA',
        phoneCode: '+966',
    },
    {
        name: 'Senegal',
        countryCode: 'SN',
        phoneCode: '+221',
    },
    {
        name: 'Serbia',
        countryCode: 'RS',
        phoneCode: '+381',
    },
    {
        name: 'Seychelles',
        countryCode: 'SC',
        phoneCode: '+248',
    },
    {
        name: 'Sierra Leone',
        countryCode: 'SL',
        phoneCode: '+232',
    },
    {
        name: 'Singapore',
        countryCode: 'SG',
        phoneCode: '+65',
    },
    {
        name: 'Slovakia',
        countryCode: 'SK',
        phoneCode: '+421',
    },
    {
        name: 'Slovenia',
        countryCode: 'SI',
        phoneCode: '+386',
    },
    {
        name: 'Solomon Islands',
        countryCode: 'SB',
        phoneCode: '+677',
    },
    {
        name: 'Somalia',
        countryCode: 'SO',
        phoneCode: '+252',
    },
    {
        name: 'South Africa',
        countryCode: 'ZA',
        phoneCode: '+27',
    },
    {
        name: 'South Korea',
        countryCode: 'KR',
        phoneCode: '+82',
    },
    {
        name: 'Spain',
        countryCode: 'ES',
        phoneCode: '+34',
    },
    {
        name: 'Sri Lanka',
        countryCode: 'LK',
        phoneCode: '+94',
    },
    {
        name: 'St. Lucia',
        countryCode: 'LC',
        phoneCode: '+1',
    },
    {
        name: 'Sudan',
        countryCode: 'SD',
        phoneCode: '+249',
    },
    {
        name: 'Suriname',
        countryCode: 'SR',
        phoneCode: '+597',
    },
    {
        name: 'Swaziland',
        countryCode: 'SZ',
        phoneCode: '+268',
    },
    {
        name: 'Sweden',
        countryCode: 'SE',
        phoneCode: '+46',
    },
    {
        name: 'Switzerland',
        countryCode: 'CH',
        phoneCode: '+41',
    },
    {
        name: 'Syria',
        countryCode: 'SY',
        phoneCode: '+963',
    },
    {
        name: 'Taiwan',
        countryCode: 'TW',
        phoneCode: '+886',
    },
    {
        name: 'Tajikistan',
        countryCode: 'TJ',
        phoneCode: '+992',
    },
    {
        name: 'Tanzania',
        countryCode: 'TZ',
        phoneCode: '+255',
    },
    {
        name: 'Thailand',
        countryCode: 'TH',
        phoneCode: '+66',
    },
    {
        name: 'The Bahamas',
        countryCode: 'BS',
        phoneCode: '+1',
    },
    {
        name: 'The Gambia',
        countryCode: 'GM',
        phoneCode: '+220',
    },
    {
        name: 'Timor-Leste',
        countryCode: 'TL',
        phoneCode: '+670',
    },
    {
        name: 'Togo',
        countryCode: 'TG',
        phoneCode: '+228',
    },
    {
        name: 'Tokelau',
        countryCode: 'TK',
        phoneCode: '+690',
    },
    {
        name: 'Tonga',
        countryCode: 'TO',
        phoneCode: '+676',
    },
    {
        name: 'Trinidad and Tobago',
        countryCode: 'TT',
        phoneCode: '+1',
    },
    {
        name: 'Tunisia',
        countryCode: 'TN',
        phoneCode: '+216',
    },
    {
        name: 'Turkey',
        countryCode: 'TR',
        phoneCode: '+90',
    },
    {
        name: 'Turkmenistan',
        countryCode: 'TM',
        phoneCode: '+993',
    },
    {
        name: 'Turks and Caicos Islands',
        countryCode: 'TC',
        phoneCode: '+1',
    },
    {
        name: 'Tuvalu',
        countryCode: 'TV',
        phoneCode: '+688',
    },
    {
        name: 'Uganda',
        countryCode: 'UG',
        phoneCode: '+256',
    },
    {
        name: 'Ukraine',
        countryCode: 'UA',
        phoneCode: '+380',
    },
    {
        name: 'United Arab Emirates',
        countryCode: 'AE',
        phoneCode: '+971',
    },
    {
        name: 'United Kingdom',
        countryCode: 'GB',
        phoneCode: '+44',
    },
    {
        name: 'United States',
        countryCode: 'US',
        phoneCode: '+1',
    },
    {
        name: 'Uruguay',
        countryCode: 'UY',
        phoneCode: '+598',
    },
    {
        name: 'US Virgin Islands',
        countryCode: 'VI',
        phoneCode: '+1',
    },
    {
        name: 'Uzbekistan',
        countryCode: 'UZ',
        phoneCode: '+998',
    },
    {
        name: 'Vanuatu',
        countryCode: 'VU',
        phoneCode: '+678',
    },
    {
        name: 'Vatican City',
        countryCode: 'VA',
        phoneCode: '+39',
    },
    {
        name: 'Venezuela',
        countryCode: 'VE',
        phoneCode: '+58',
    },
    {
        name: 'Vietnam',
        countryCode: 'VN',
        phoneCode: '+84',
    },
    {
        name: 'Wallis and Futuna',
        countryCode: 'WF',
        phoneCode: '+681',
    },
    {
        name: 'Yemen',
        countryCode: 'YE',
        phoneCode: '+967',
    },
    {
        name: 'Zambia',
        countryCode: 'ZM',
        phoneCode: '+260',
    },
    {
        name: 'Zimbabwe',
        countryCode: 'ZW',
        phoneCode: '+263',
    },
];
class CountryConstant {
    get countries() {
        return countries;
    }
    get countryCodes() {
        return countries.map(c => c.countryCode);
    }
    get phoneCodes() {
        return countries
            .filter(((value, index, array) => array.indexOf(value) === index))
            .map(c => c.phoneCode);
    }
}
const Countries = new CountryConstant();
exports.default = Countries;
//# sourceMappingURL=countries.js.map