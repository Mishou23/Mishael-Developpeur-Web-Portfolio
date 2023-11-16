import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './index.css';

export default function HomeContact() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className='contactHomeContain'>
        <div className='contactHomeContent'>
          <div className='titleContact'>
            <h2>{t('homeContact.title')}</h2>
          </div>
          <div className='text'>
            <p>{t('homeContact.text.firstParagraph')}</p>
            <p>
              {t('homeContact.text.secondParagraph')}
              <Link className='contactLink'
                to={`/${i18n.language}/${
                  i18n.language === 'fr' ? 'contact' : 'contact'
                }`}
              >
                 {t('ClickHereContact')}
              </Link>
              {i18n.language === 'fr' && t('homeContact.text.thirdParagraph')}!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
