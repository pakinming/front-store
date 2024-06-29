import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';
import { useLocale, useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations();
  const lang = useTranslations('locale');
  const locale = useLocale();
  return <>
    <h1>{t('hello')}</h1>
    <LocaleSwitcherSelect defaultValue={locale} items={[
        {
          value: 'en',
          label: lang('en')
        },
        {
          value: 'th',
          label: lang('th')
        }
      ]} label={''} />
    <button className="btn">Button</button>

  </>
}