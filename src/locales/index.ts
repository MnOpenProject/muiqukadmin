import { useContext, createContext } from 'react';
import zh_CN from './zh_CN';
import en_US from './en_US';

const i18n = { 'zh-CN': zh_CN, 'en-US': en_US };

export type LocaleType = 'zh-CN' | 'en-US';
export const defaultLang = 'en-US';
export const localeTextMap: { [lang in LocaleType]: string } = {
  'zh-CN': '简体中文',
  'en-US': 'English'
};
export const LocaleContext = createContext({
  lang: 'zh_CN',
  setLang: (params: LocaleType) => { }
});

export function useLocale(locale: any = null) {
  const { lang } = useContext(LocaleContext);
  return (locale || i18n)[lang] || {};
}
