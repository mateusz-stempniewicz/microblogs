import { addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localePl from 'react-intl/locale-data/pl';

import messagesPl from './pl.json';
import messagesEn from './en.json';

addLocaleData([...localeEn, ...localePl]);

export const messages = {
  en: messagesEn,
  pl: messagesPl
};
